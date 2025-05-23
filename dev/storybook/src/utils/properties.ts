import type { ArgTypes } from "@storybook/vue3";

export function addSubcomponentsArgTypes(subcomponents: any[], component: any): ArgTypes {
  return subcomponents.reduce((acc, subcomponent) => {
    if (!subcomponent.props) return acc;

    const subcomponentArgTypes = Object.entries(subcomponent.props).reduce(
      
      (propAcc, [propName, propOptions]: [string, any]) => {
        if(component.props && component.props[propName]) return propAcc;
        if (propAcc[propName]) return propAcc;
        
        propAcc[propName] = {
          control: getControlType(propOptions),
          defaultValue: propOptions.default,
          table: {
            category: "Subcomponents Props",
            subcategory: subcomponent.name,
          },
        };
        return propAcc;
      },
      {} as ArgTypes
    );

    return { ...subcomponentArgTypes, ...acc };
  }, {} as ArgTypes);
}

function getControlType(propOptions: any): Record<string, any> {
  if (!propOptions?.type) return { type: "object" };

  const propTypeName = Array.isArray(propOptions.type)
    ? propOptions.type.map((t: any) => t.name.toLowerCase()).join(",")
    : propOptions.type.name.toLowerCase();

  if (propTypeName.includes("array")) return { type: "object" };
  if (propTypeName.includes("string")) return { type: "text" };
  if (propTypeName.includes("number")) return { type: "number" };
  if (propTypeName.includes("boolean")) return { type: "boolean" };

  return { type: "object" };
}


export function addComponentEmits(component: any): Record<string, any> {
  const emits = component.emits ?? [];
  
  const argsTypes = emits.reduce((acc: Record<string, any>, emit: any) => {
    const onEvent = `on${emit.charAt(0).toUpperCase()}${emit.slice(1)}`;
    acc[onEvent] = {
      action: emit,
      table: {
        category: "Events",
        disable: true,
      }
    };
    return acc;
  }, {} as Record<string, any>);

  return argsTypes;
}

