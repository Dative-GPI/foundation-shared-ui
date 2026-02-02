import { uuidv4 } from "@dative-gpi/bones-ui";
import { createApp, nextTick, type App, type Component} from "vue";

export function useDynamicVueApp<TProps extends Record<string, any>>(
  component: Component,
  options?: { registerPlugins?: (app: App) => void }
) {
  let app: App | null = null;
  const id = uuidv4();

  const mount = async (props: TProps): Promise<void> => {
    await nextTick();

    const mountPoint = document.getElementById(id);
    if (!mountPoint) {
        return;
    }

    unmount();

    app = createApp(component, props);

    options?.registerPlugins?.(app);

    app.mount(mountPoint);
  };

  const unmount = () => {
    app?.unmount();
    app = null;
  };

  const getHtml = (style?: string) => `<div id="${id}" style="${style}"></div>`;

  return { mount, unmount, getHtml };
}
