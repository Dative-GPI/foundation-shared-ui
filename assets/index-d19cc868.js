import{R as o}from"./DocsRenderer-NNNQARDV-2f7ff984.js";import"./iframe-94356993.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-8c3ac41d.js";import"./index-41dadfd5.js";import"./index-356e4a49.js";const i=o.createContext({});function M(t){return e;function e(r){const n=u(r.components);return o.createElement(t,{...r,allComponents:n})}}function u(t){const e=o.useContext(i);return o.useMemo(()=>typeof t=="function"?t(e):{...e,...t},[e,t])}const m={};function x({components:t,children:e,disableParentContext:r}){let n;return r?n=typeof t=="function"?t({}):t||m:n=u(t),o.createElement(i.Provider,{value:n},e)}export{i as MDXContext,x as MDXProvider,u as useMDXComponents,M as withMDXComponents};