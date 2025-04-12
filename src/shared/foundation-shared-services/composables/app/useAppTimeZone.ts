import { computed, ref } from "vue";

const timeZone = ref<string | undefined>(undefined);

const currentUserOffset = ref<number | null>(null);
const currentMachineOffset = ref<number | null>(null);

export const useAppTimeZone = () => {
  const setAppTimeZone = (payload: string) => {
    timeZone.value = payload;
  };

  const getUserFormatter = (): Intl.DateTimeFormat => {
    return new Intl.DateTimeFormat(undefined, {
      timeZone: timeZone.value || Intl.DateTimeFormat().resolvedOptions().timeZone,
      timeZoneName: "longOffset"
    });
  }

  const getMachineFormatter = (): Intl.DateTimeFormat => {
    return new Intl.DateTimeFormat(undefined, {
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      timeZoneName: "longOffset"
    });
  }

  const getUserOffsetName = (epoch: number | null = null): string => {
    const formatter = getUserFormatter();
    const date = formatter.formatToParts(epoch ? new Date(epoch) : new Date());
    const timeZoneName = date.find((part) => part.type === "timeZoneName")?.value || "UTC+00:00";
    return timeZoneName
  }

  const getUserOffset = (epoch: number | null = null): number => {
    const timeZoneName = getUserOffsetName(epoch);
    const [hours, minutes] = timeZoneName.slice(3).split(':');
    if (isNaN(parseInt(hours)) || isNaN(parseInt(minutes))) {
      return 0;
    }
    return (parseInt(hours) * 60 + parseInt(minutes)) * 60 * 1000;
  };

  const getMachineOffsetName = (epoch: number | null = null): string => {
    const formatter = getMachineFormatter();
    const date = formatter.formatToParts(epoch ? new Date(epoch) : new Date());
    const timeZoneName = date.find((part) => part.type === "timeZoneName")?.value || "UTC+00:00";
    return timeZoneName;
  };

  const getMachineOffset = (epoch: number | null = null): number => {
    const timeZoneName = getMachineOffsetName(epoch);
    const [hours, minutes] = timeZoneName.slice(3).split(':');
    if (isNaN(parseInt(hours)) || isNaN(parseInt(minutes))) {
      return 0;
    }
    return (parseInt(hours) * 60 + parseInt(minutes)) * 60 * 1000;
  }

  const getOffsetDifference = (epoch: number | null = null): number => {
    return cachedUserOffset(epoch) - cachedMachineOffset(epoch);
  };

  const ready = computed(() => timeZone.value !== null);

  const cachedUserOffset = (epoch: number | null = null): number => {
    if (epoch === null) {
      if (currentUserOffset.value === null) {
        currentUserOffset.value = getUserOffset();
      }
      return currentUserOffset.value;
    }
    return getUserOffset(epoch);
  }

  const cachedMachineOffset = (epoch: number | null = null): number => {
    if (epoch === null) {
      if (currentMachineOffset.value === null) {
        currentMachineOffset.value = getMachineOffset();
      }
      return currentMachineOffset.value;
    }
    return getMachineOffset(epoch);
  }

  return {
    ready,
    timeZone,
    setAppTimeZone,
    getUserOffset: cachedUserOffset,
    getUserOffsetName,
    getMachineOffset: cachedMachineOffset,
    getMachineOffsetName,
    getOffsetDifference,
  };
}