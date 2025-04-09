import type { WidgetTemplateType } from '@dative-gpi/foundation-shared-domain/enums/widgetTemplates';

export interface Widget {
  id: string;
  templateType: WidgetTemplateType;
  templateId: string;
  hideBorders: boolean;
  width: number;
  height: number;
  x: number;
  y: number;
  targetScreenSize: "s" | "m" | "l" | "xl";
  meta: { [key: string]: string };
}