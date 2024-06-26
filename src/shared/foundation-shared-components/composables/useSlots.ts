import type { Slot} from "vue";
import { useSlots as useVueSlots } from "vue"

export const useSlots = () => {
    const getChildren = (name: string | undefined = undefined): any => {
        const innerSlots = { ...useVueSlots() };
        const innerName = name ?? "default";
        if (innerSlots[innerName] != null) {
            const slot = innerSlots[innerName]!;
            switch (typeof(slot()[0].type)) {
                // Directive wrapper (v-for, v-if)
                case "symbol":
                    switch (slot()[0].type) {
                        case Symbol.for("v-fgt"): return slot()[0].children;
                        case Symbol.for("v-cmt"): return slot();
                        default:                  return slot();
                    }
                // Custom component
                case "object": return slot();
                // Pre-existing component
                case "string": return slot();
            }
            return slot();
        }
        return null;
    };

    return {
        slots: { ...useVueSlots() } as { [label: string]: Slot<any> },
        getChildren
    };
}