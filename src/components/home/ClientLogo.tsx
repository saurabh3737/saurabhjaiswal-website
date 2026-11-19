"use client";

import { useEffect, useRef, useState } from "react";

// Shows the official logo if the file exists; falls back to the monogram.
export default function ClientLogo({
  name,
  mark,
  logo,
}: {
  name: string;
  mark: string;
  logo?: string;
}) {
  const [failed, setFailed] = useState(false);
  const ref = useRef<HTMLImageElement>(null);

  // The image can fail before React hydrates, so check once after mount too.
  useEffect(() => {
    const img = ref.current;

    if (img && img.complete && img.naturalWidth === 0) {
      setFailed(true);
    }
  }, []);

  if (logo && !failed) {
    return (
      <span className="client-logo">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img ref={ref} src={logo} alt={`${name} logo`} loading="lazy" onError={() => setFailed(true)} />
      </span>
    );
  }

  return (
    <span
      className={mark.length > 3 ? "client-mark client-mark--long" : "client-mark"}
      aria-hidden="true"
    >
      {mark}
    </span>
  );
}
