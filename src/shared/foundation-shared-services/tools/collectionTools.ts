import { type AddOrUpdateCallback, type AllCallback, type DeleteCallback, type NotifyEvent } from "@dative-gpi/bones-ui";

export const createCollectionHandler = <T>(
  onCollectionChangedHandler: AllCallback<T>,
  createElementHandler: (el: any) => T
) => {
  return (ev: NotifyEvent, el: any) => {
    switch (ev) {
      case "add":
      case "update":
        (onCollectionChangedHandler as AddOrUpdateCallback<T>)(ev, createElementHandler(el));
        break;
      case "delete":
        (onCollectionChangedHandler as DeleteCallback)(ev, el);
        break;
    }
  };
};
