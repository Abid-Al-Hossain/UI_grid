"use client";

import Slider from "@/components/shared/input/Slider";
import { SectionCard } from "@/components/shared/layout/SectionCard";
import type { GridState } from "../types";

type Props = { state: GridState; update: <K extends keyof GridState>(key: K, value: GridState[K]) => void };

export default function StructureSection({ state, update }: Props) {
  return (
    <SectionCard title="Structure" subtitle="Item model controls for native grid generation.">
      <Slider label="Item count" value={state.itemCount} min={1} max={24} step={1} onChange={(value) => update("itemCount", value)} />
    </SectionCard>
  );
}
