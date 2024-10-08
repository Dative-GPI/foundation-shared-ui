import { type LexicalNode, DecoratorNode, type SerializedLexicalNode, type Spread, type EditorConfig, type LexicalEditor } from "lexical";

import { type RichTextVariable } from "./richTextVariable";

export type SerializedVariableNode = Spread<
  {
    type: "variable";
    code: string;
    defaultValue: string;
  },
  SerializedLexicalNode
>;

export class VariableNode extends DecoratorNode<Element> {
  __code: string;
  __defaultValue: string;
  readonlyMode: boolean;

  static getType() {
    return "variable";
  }

  static clone(node: VariableNode) {
    return new VariableNode(node.__code, node.__defaultValue, node.__key);
  }

  constructor(code: string, defaultValue: string, key?: string) {
    super(key);
    this.__code = code;
    this.__defaultValue = defaultValue;
    this.readonlyMode = false;
  }

  getValue(editorElement: HTMLElement): any {
    const variableValues = editorElement.dataset.variableValues;
    if (!variableValues) {
      return this.__defaultValue;
    }
    const values = JSON.parse(variableValues);
    return values[this.__code] ?? this.__defaultValue;
  }

  createDOM(_config: EditorConfig, _editor: LexicalEditor) {
    const readonlyMode = _editor._rootElement?.dataset.readonly === "true" || false;

    const container = document.createElement("span");
    container.classList.add("fs-richtextfield-node-variable");

    const content = document.createElement("span");
    if (readonlyMode) {
      content.classList.add("fs-rich-text-field-node-variable-value");
      if (_editor._rootElement) {
        content.textContent = this.getValue(_editor._rootElement);
  
        const observer = new MutationObserver(() => {
          content.textContent = this.getValue(_editor._rootElement!);
        });
        observer.observe(_editor._rootElement, { attributes: true, attributeFilter: ['data-variable-values'] });
      } else {
        content.textContent = this.__defaultValue;
      }
    } else {
      content.classList.add("fs-rich-text-field-node-variable-code");
      content.textContent = `{${this.__code}}`;
    }
    container.appendChild(content);
    return container;
  }

  updateDOM(): boolean {
    return false;
  }

  exportJSON(): SerializedVariableNode {
    return {
      type: "variable",
      version: 1,
      code: this.__code,
      defaultValue: this.__defaultValue
    };
  }

  decorate(editor: LexicalEditor, config: EditorConfig): Element {
    return this.createDOM(config, editor);
  }

  static importJSON(serializedNode: SerializedVariableNode): VariableNode {
    return new VariableNode(
      serializedNode.code,
      serializedNode.defaultValue
    );
  }
}

export function $createVariableNode(code: string, defaultValue: string): VariableNode {
  return new VariableNode(code, defaultValue);
}

export function $modifyVariableNode(node: VariableNode, newValue: RichTextVariable): VariableNode {
  node.__code = newValue.code;
  node.__defaultValue = newValue.defaultValue;
  return node;
}

export function $isVariableNode(node: LexicalNode | null | undefined): node is VariableNode {
  return node instanceof VariableNode;
}
