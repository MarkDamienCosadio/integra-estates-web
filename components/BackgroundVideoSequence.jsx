"use client";

import { useEffect, useRef, useState } from "react";

export default function BackgroundVideoSequence({
  sources = [],
  crossfadeMs = 1500,
  startAt = 0,
  poster,
  className = "hero__video",
}) {
  if (!Array.isArray(sources) || sources.length < 2) return null;

  const v0 = useRef(null);
  const v1 = useRef(null);
  const [activeIdx, setActiveIdx] = useState(0); // drives timing checks
  const [visibleIdx, setVisibleIdx] = useState(0); // which video has opacity:1
  const [fading, setFading] = useState(false);

  const safeStart = typeof startAt === "number" && startAt >= 0 ? startAt : 0;
  const crossfadeSec = crossfadeMs / 1000;

  const playVideo = (el) => {
    if (!el) return;
    try {
      // Ensure autoplay eligibility before play()
      el.muted = true;
      el.setAttribute("muted", "");
      el.playsInline = true;
      el.setAttribute("playsinline", "");
      el.currentTime = safeStart;
      if (el.readyState < 2) el.load();
      return el.play().catch(() => {});
    } catch {
      // swallow; overlay will remain visible
    }
  };

  // Start first video
  useEffect(() => {
    const a = v0.current;
    if (!a) return;
    const start = () => {
      playVideo(a);
      setVisibleIdx(0);
    };
    if (a.readyState >= 1) {
      start();
    } else {
      const onLoaded = () => start();
      a.addEventListener("loadedmetadata", onLoaded, { once: true });
      return () => a.removeEventListener("loadedmetadata", onLoaded);
    }
  }, [safeStart]);

  // Crossfade scheduler based on remaining time
  useEffect(() => {
    const vids = [v0.current, v1.current];
    const current = vids[activeIdx];
    const nextIdx = (activeIdx + 1) % 2;
    const next = vids[nextIdx];
    if (!current || !next) return;

    const maybeCrossfade = () => {
      const duration = current.duration;
      const time = current.currentTime;
      if (!duration || Number.isNaN(duration)) return;
      const remaining = duration - time;
      if (!fading && remaining <= crossfadeSec) {
        setFading(true);
        playVideo(next);
        setVisibleIdx(nextIdx); // trigger CSS opacity:1 on next
        setTimeout(() => {
          try { current.pause(); } catch {}
          setActiveIdx(nextIdx);
          setFading(false);
        }, crossfadeMs);
      }
    };

    const onEnded = () => {
      if (!fading) {
        setFading(true);
        playVideo(next);
        setVisibleIdx(nextIdx);
        setTimeout(() => {
          try { current.pause(); } catch {}
          setActiveIdx(nextIdx);
          setFading(false);
        }, crossfadeMs);
      }
    };

    current.addEventListener("timeupdate", maybeCrossfade);
    current.addEventListener("ended", onEnded);
    return () => {
      current.removeEventListener("timeupdate", maybeCrossfade);
      current.removeEventListener("ended", onEnded);
    };
  }, [activeIdx, crossfadeMs, crossfadeSec, fading]);

  const cls0 = `${className} ${visibleIdx === 0 ? "visible" : "hidden"}`;
  const cls1 = `${className} ${visibleIdx === 1 ? "visible" : "hidden"}`;

  return (
    <>
      <video
        ref={v0}
        className={cls0}
        src={sources[0]}
        preload="auto"
        muted
        playsInline
        poster={poster}
      />
      <video
        ref={v1}
        className={cls1}
        src={sources[1]}
        preload="auto"
        muted
        playsInline
        poster={poster}
      />
    </>
  );
}