"use client";

import { SectionCard } from "@/components/shared/layout/SectionCard";
import Slider from "@/components/shared/input/Slider";
import type { GridState } from "../types";

type Props = { state: GridState; update: <K extends keyof GridState>(key: K, value: GridState[K]) => void };

export default function ShadowSection({ state, update }: Props) {
  return <SectionCard title="Shadow" subtitle="Shadow controls for native layout/page-structure generation."><Slider label="Shadow" value={state.shadow} min={0} max={80} step={1} onChange={(value) => update("shadow", value)} /></SectionCard>;
}
