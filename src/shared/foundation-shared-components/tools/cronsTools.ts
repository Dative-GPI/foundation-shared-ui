import { CronPeriod } from "@dative-gpi/foundation-shared-domain/enums";
import { useTranslations as useTranslationsProvider } from "@dative-gpi/bones-ui/composables";

const { $tr } = useTranslationsProvider();

export const availablePeriods = [
  { label: $tr("ui.common.daily", "Daily"), value: CronPeriod.Daily, item: { default: "0 12 */1 * *" } },
  { label: $tr("ui.common.weekly", "Weekly"), value: CronPeriod.Weekly, item: { default: "0 12 * * 1" } },
  { label: $tr("ui.common.monthly", "Monthly"), value: CronPeriod.Monthly, item: { default: "0 12 1 * *" } },
  { label: $tr("ui.common.yearly", "Yearly"), value: CronPeriod.Yearly, item: { default: "0 12 1 1 *" } },
];

export const getCronPeriod = (value: string): { label: string, value: CronPeriod } => {
  const cronArray = value.split(" ");
  if (cronArray[3] !== "*") {
    return availablePeriods.find(c => c.value == CronPeriod.Yearly)!;
  }
  else if (!cronArray[2].includes("*") || cronArray[2].includes("-")) {
    return availablePeriods.find(c => c.value == CronPeriod.Monthly)!;
  }
  else if (cronArray[4] !== "*") {
    return availablePeriods.find(c => c.value == CronPeriod.Weekly)!;
  }
  return availablePeriods.find(c => c.value == CronPeriod.Daily)!;
}