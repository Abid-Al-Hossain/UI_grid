import type { GridState } from "../types";

export type ExportPayload = { fileName: string; mimeType: "text/plain;charset=utf-8"; content: string };

export function buildExportPayload(state: GridState, fileName = "grid") : ExportPayload {
  return { fileName: `${fileName || "grid"}.jsx`, mimeType: "text/plain;charset=utf-8", content: buildReactCode(state) };
}

export function buildReactCode(state: GridState) {
  return ["import * as React from \"react\";", "", "const state = " + JSON.stringify(state, null, 2) + ";", "", "export default function GridComponent() {", "  return <section id={state.id} aria-label={state.landmarkLabel} style={{ width: state.width, minHeight: state.height, padding: state.padding, borderRadius: state.radius, border: state.borderWidth + 'px solid ' + state.border, background: state.background, color: state.foreground, fontFamily: state.fontFamily }}>{state.title}</section>;", "}", ""].join("\n");
}
