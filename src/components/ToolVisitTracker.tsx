"use client";

import { useEffect } from "react";

const STORAGE_KEY = "quicklify_recent_tools";

type ToolVisitTrackerProps = {
  toolHref: string;
};

export function ToolVisitTracker({ toolHref }: ToolVisitTrackerProps) {
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      const parsed = raw ? (JSON.parse(raw) as string[]) : [];
      const unique = [toolHref, ...parsed.filter((href) => href !== toolHref)].slice(0, 3);
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(unique));
    } catch {
      // localStorage may be unavailable; silently skip tracking.
    }
  }, [toolHref]);

  return null;
}
