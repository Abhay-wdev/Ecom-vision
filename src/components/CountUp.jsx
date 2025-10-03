"use client";
import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

export default function CountUp({
  to,
  from = 0,
  direction = "up",
  delay = 0,
  duration = 2,
  className = "",
  startWhen = true,
  separator = "",
  onStart,
  onEnd,
}) {
  const ref = useRef(null);

  // Ensure from/to are always numbers
  const safeFrom = Number(from) || 0;
  const safeTo = Number(to) || 0;

  const motionValue = useMotionValue(direction === "down" ? safeTo : safeFrom);

  const damping = 20 + 40 * (1 / duration);
  const stiffness = 100 * (1 / duration);

  const springValue = useSpring(motionValue, {
    damping,
    stiffness,
  });

  const isInView = useInView(ref, { once: true, margin: "0px" });

  useEffect(() => {
    if (ref.current) {
      ref.current.textContent = String(
        direction === "down" ? safeTo : safeFrom
      );
    }
  }, [safeFrom, safeTo, direction]);

  useEffect(() => {
    if (isInView && startWhen) {
      if (typeof onStart === "function") {
        onStart();
      }

      const timeoutId = setTimeout(() => {
        motionValue.set(direction === "down" ? safeFrom : safeTo);
      }, delay * 1000);

      const durationTimeoutId = setTimeout(() => {
        if (typeof onEnd === "function") {
          onEnd();
        }
      }, delay * 1000 + duration * 1000);

      return () => {
        clearTimeout(timeoutId);
        clearTimeout(durationTimeoutId);
      };
    }
  }, [
    isInView,
    startWhen,
    motionValue,
    direction,
    safeFrom,
    safeTo,
    delay,
    onStart,
    onEnd,
    duration,
  ]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current && typeof latest === "number" && !isNaN(latest)) {
        const options = {
          useGrouping: !!separator,
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        };

        const formattedNumber = Intl.NumberFormat("en-US", options).format(
          Math.round(latest) // avoids NaN
        );

        ref.current.textContent = separator
          ? formattedNumber.replace(/,/g, separator)
          : formattedNumber;
      }
    });

    return () => unsubscribe();
  }, [springValue, separator]);

  return <span className={className} ref={ref} />;
}
