"use client";

import { SectionCard } from "@/components/shared/layout/SectionCard";
import Select from "@/components/shared/input/Select";
import type { GridState } from "../types";

type Props = { state: GridState; update: <K extends keyof GridState>(key: K, value: GridState[K]) => void };

export default function LayoutSection({ state, update }: Props) {
  return <SectionCard title="Layout" subtitle="Layout controls for native layout/page-structure generation."><Select label="Auto mode" value={state.autoMode} options={[
  "fit",
  "fill",
  "fixed"
]} onChange={(value) => update("autoMode", value)} /></SectionCard>;
}
