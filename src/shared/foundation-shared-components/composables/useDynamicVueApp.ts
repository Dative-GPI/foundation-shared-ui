import { uuidv4 } from "@dative-gpi/bones-ui";
import { createApp, nextTick, onBeforeUnmount, type App, type Component } from "vue";

export function useDynamicVueApp<TProps extends Record<string, any>>(
  component: Component,
  options?: { registerPlugins?: (app: App) => void }
) {
  let app: App | null = null;
  let isMounting = false;

  const id = uuidv4();
  

  const mount = async (props: TProps): Promise<void> => {
    if (isMounting) {
      return;
    }

    isMounting = true;
    
    try {
        await nextTick();

        const mountPoint = document.getElementById(id);
        if (!mountPoint) {
            return;
        }

        unmount();

        app = createApp(component, props);
        options?.registerPlugins?.(app);
        app.mount(mountPoint);
    } finally {
        isMounting = false;
    }
  };

  const unmount = () => {
    if (!app) {
      return;
    }
    app.unmount();
    app = null;
  };

  const sanitizeStyle = (style?: string): string => {
    if (!style) {
      return "";
    }
    return style
      .replace(/"/g, "&quot;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  };

  const getHtml = (style?: string) => {
    const safeStyle = sanitizeStyle(style);
    const styleAttribute = safeStyle ? ` style="${safeStyle}"` : "";
    return `<div id="${id}"${styleAttribute}></div>`;
  };

  onBeforeUnmount(() => {
    unmount();
  });

  return { mount, unmount, getHtml };
}
