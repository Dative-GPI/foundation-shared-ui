export interface Widget {
  id: string;
  templateId: string;
  hideBorders: boolean;
  width: number;
  height: number;
  x: number;
  y: number;
  targetScreenSize: "s" | "m" | "l" | "xl";
  meta: { [key: string]: string };
}