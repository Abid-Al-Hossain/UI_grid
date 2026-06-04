"use client";

import { SectionCard } from "@/components/shared/layout/SectionCard";
import Slider from "@/components/shared/input/Slider";
import type { GridState } from "../types";

type Props = { state: GridState; update: <K extends keyof GridState>(key: K, value: GridState[K]) => void };

export default function StructureSection({ state, update }: Props) {
  return <SectionCard title="Structure" subtitle="Structure controls for native layout/page-structure generation."><Slider label="Item count" value={state.itemCount} min={1} max={12} step={1} onChange={(value) => update("itemCount", value)} /></SectionCard>;
}
