"use client";

import React from "react";
import styles from "./ResearchInterestsBlock.module.scss";

const PILL_COLORS = [
  "cyan",
  "amber",
  "coral",
  "emerald",
  "violet",
  "cyan",
  "amber",
  "coral",
] as const;

export default function ResearchInterestsBlock({ items }: { items: string[] }) {
  return (
    <div className={styles.wrap}>
      {items.map((label, i) => (
        <span
          key={label}
          className={`${styles.pill} ${styles[PILL_COLORS[i % PILL_COLORS.length]]}`}
        >
          {label}
        </span>
      ))}
    </div>
  );
}
