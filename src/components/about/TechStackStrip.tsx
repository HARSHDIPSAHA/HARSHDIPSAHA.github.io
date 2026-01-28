"use client";

import React, { useRef, useState, useCallback } from "react";
import { Icon } from "@once-ui-system/core";
import type { IconName } from "@/resources/icons";
import styles from "./TechStackStrip.module.scss";

const MOVE_AMOUNT = 6;

type Item = { name: string; icon: IconName };

function TechStackItem({ item }: { item: Item }) {
  const el = useRef<HTMLDivElement>(null);
  const [delta, setDelta] = useState({ x: 0, y: 0 });

  const onMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = el.current?.getBoundingClientRect();
      if (!rect) return;
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      let dx = e.clientX - cx;
      let dy = e.clientY - cy;
      const len = Math.hypot(dx, dy) || 1;
      dx = (dx / len) * MOVE_AMOUNT;
      dy = (dy / len) * MOVE_AMOUNT;
      setDelta({ x: dx, y: dy });
    },
    []
  );

  const onMouseLeave = useCallback(() => {
    setDelta({ x: 0, y: 0 });
  }, []);

  return (
    <div
      ref={el}
      className={styles.item}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{
        transform: `translate(${delta.x}px, ${delta.y}px)`,
      }}
    >
      <div className={styles.iconWrap}>
        <Icon name={item.icon} />
      </div>
      <span className={styles.label}>{item.name}</span>
    </div>
  );
}

export default function TechStackStrip({
  items,
}: {
  items: Array<{ name: string; icon: IconName }>;
}) {
  return (
    <div className={styles.strip}>
      {items.map((item) => (
        <TechStackItem key={item.name} item={item} />
      ))}
    </div>
  );
}
