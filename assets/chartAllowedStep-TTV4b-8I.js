var s=Object.defineProperty;var a=(l,e,i)=>e in l?s(l,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):l[e]=i;var t=(l,e,i)=>a(l,typeof e!="symbol"?e+"":e,i);import{T as c}from"./timeRange-Bfx7KHHy.js";class H{constructor(e){t(this,"id");t(this,"chartId");t(this,"chartPresetHiddenCode");t(this,"chartFilterHiddenCode");t(this,"chartFilterLabel");t(this,"chartPresetLabel");this.id=e.id,this.chartId=e.chartId,this.chartPresetHiddenCode=e.chartPresetHiddenCode,this.chartFilterHiddenCode=e.chartFilterHiddenCode,this.chartFilterLabel=e.chartFilterLabel,this.chartPresetLabel=e.chartPresetLabel}}class T{constructor(e){t(this,"id");t(this,"label");this.id=e.id,this.label=e.label}}class r{constructor(e){t(this,"languageCode");t(this,"label");this.languageCode=e.languageCode,this.label=e.label}}class v{constructor(e){t(this,"id");t(this,"chartId");t(this,"hiddenCode");t(this,"label");t(this,"labelDefault");t(this,"code");t(this,"valueDefault");t(this,"translations");this.id=e.id,this.chartId=e.chartId,this.hiddenCode=e.hiddenCode,this.label=e.label,this.labelDefault=e.labelDefault,this.code=e.code,this.valueDefault=e.valueDefault,this.translations=e.translations.map(i=>new r(i))}}class u{constructor(e){t(this,"languageCode");t(this,"label");this.languageCode=e.languageCode,this.label=e.label}}class V{constructor(e){t(this,"id");t(this,"chartId");t(this,"hiddenCode");t(this,"label");t(this,"labelDefault");t(this,"icon");t(this,"index");t(this,"translations");this.id=e.id,this.chartId=e.chartId,this.hiddenCode=e.hiddenCode,this.label=e.label,this.labelDefault=e.labelDefault,this.icon=e.icon,this.index=e.index,this.translations=e.translations.map(i=>new u(i))}}class P{constructor(e){t(this,"languageCode");t(this,"label");t(this,"title");this.languageCode=e.languageCode,this.label=e.label,this.title=e.title}}class C{constructor(e){t(this,"languageCode");t(this,"label");this.languageCode=e.languageCode,this.label=e.label}}class b{constructor(e){t(this,"startValue");t(this,"endValue");this.startValue=e.startValue,this.endValue=e.endValue}}class h extends b{constructor(i){super(i);t(this,"color");t(this,"opacity");t(this,"label");t(this,"labelDefault");t(this,"translations");this.color=i.color,this.opacity=i.opacity,this.label=i.label,this.labelDefault=i.labelDefault,this.translations=i.translations.map(d=>new C(d))}}class g{constructor(e){t(this,"languageCode");t(this,"label");this.languageCode=e.languageCode,this.label=e.label}}class f extends c{constructor(i){super(i);t(this,"color");t(this,"opacity");t(this,"label");t(this,"labelDefault");t(this,"translations");this.color=i.color,this.opacity=i.opacity,this.label=i.label,this.labelDefault=i.labelDefault,this.translations=i.translations.map(d=>new g(d))}}class w{constructor(e){t(this,"id");t(this,"chartId");t(this,"hiddenCode");t(this,"type");t(this,"logarithmic");t(this,"boundaries");t(this,"min");t(this,"max");t(this,"unit");t(this,"valueRanges");t(this,"timeRanges");this.id=e.id,this.chartId=e.chartId,this.hiddenCode=e.hiddenCode,this.type=e.type,this.logarithmic=e.logarithmic,this.boundaries=e.boundaries,this.min=e.min,this.max=e.max,this.unit=e.unit,this.valueRanges=e.valueRanges.map(i=>new h(i)),this.timeRanges=e.timeRanges.map(i=>new f(i))}}class R{constructor(e){t(this,"id");t(this,"chartId");t(this,"hiddenCode");t(this,"yAxisHiddenCode");t(this,"index");this.id=e.id,this.chartId=e.chartId,this.hiddenCode=e.hiddenCode,this.yAxisHiddenCode=e.yAxisHiddenCode,this.index=e.index}}class x{constructor(e){t(this,"id");t(this,"value");t(this,"isCustom");this.id=e.id,this.value=e.value,this.isCustom=e.isCustom}}class I{constructor(e){t(this,"languageCode");t(this,"label");this.languageCode=e.languageCode,this.label=e.label}}class M{constructor(e){t(this,"id");t(this,"chartId");t(this,"hiddenCode");t(this,"chartOperandHiddenCode");t(this,"dataDefinitionId");t(this,"label");t(this,"labelDefault");t(this,"filterType");t(this,"filterValues");t(this,"filterDynamic");t(this,"translations");this.id=e.id,this.chartId=e.chartId,this.hiddenCode=e.hiddenCode,this.chartOperandHiddenCode=e.chartOperandHiddenCode,this.dataDefinitionId=e.dataDefinitionId,this.label=e.label,this.labelDefault=e.labelDefault,this.filterType=e.filterType,this.filterValues=e.filterValues.map(i=>new x(i)),this.filterDynamic=e.filterDynamic,this.translations=e.translations.map(i=>new I(i))}}class F{constructor(e){t(this,"id");t(this,"chartId");t(this,"hiddenCode");t(this,"dataDefinitionId");t(this,"hideLabel");this.id=e.id,this.chartId=e.chartId,this.hiddenCode=e.hiddenCode,this.dataDefinitionId=e.dataDefinitionId,this.hideLabel=e.hideLabel}}class O{constructor(e){t(this,"id");t(this,"chartId");t(this,"hiddenCode");t(this,"chartSerieHiddenCode");t(this,"name");t(this,"aggregation");t(this,"modelId");t(this,"modelLabel");t(this,"dataCategoryId");t(this,"dataDefinitionId");t(this,"xAxisModifierHiddenCode");t(this,"yAxisModifierHiddenCode");t(this,"firstModifierHiddenCode");t(this,"secondModifierHiddenCode");t(this,"index");this.id=e.id,this.chartId=e.chartId,this.hiddenCode=e.hiddenCode,this.chartSerieHiddenCode=e.chartSerieHiddenCode,this.name=e.name,this.aggregation=e.aggregation??void 0,this.modelId=e.modelId,this.modelLabel=e.modelLabel,this.dataCategoryId=e.dataCategoryId,this.dataDefinitionId=e.dataDefinitionId,this.xAxisModifierHiddenCode=e.xAxisModifierHiddenCode,this.yAxisModifierHiddenCode=e.yAxisModifierHiddenCode,this.firstModifierHiddenCode=e.firstModifierHiddenCode,this.secondModifierHiddenCode=e.secondModifierHiddenCode,this.index=e.index}}class y{constructor(e){t(this,"languageCode");t(this,"label");t(this,"xAxisLabel");t(this,"yAxisLabel");this.languageCode=e.languageCode,this.label=e.label,this.xAxisLabel=e.xAxisLabel,this.yAxisLabel=e.yAxisLabel}}class n{constructor(e){t(this,"value");t(this,"unit");this.value=e.value,this.unit=e.unit}}class S{constructor(e){t(this,"id");t(this,"chartId");t(this,"hiddenCode");t(this,"chartPlotHiddenCode");t(this,"serieType");t(this,"plotPer");t(this,"shift");t(this,"step");t(this,"stacked");t(this,"offsets");t(this,"useOperation");t(this,"operation");t(this,"operationUnit");t(this,"operationGrouped");t(this,"useTrendLine");t(this,"planningType");t(this,"timeInterval");t(this,"useLimit");t(this,"limit");t(this,"heatRule");t(this,"minColor");t(this,"minValue");t(this,"maxColor");t(this,"maxValue");t(this,"heatRanges");t(this,"fixedColor");t(this,"icon");t(this,"decimalPlaces");t(this,"displayAs");t(this,"hideLabels");t(this,"useOther");t(this,"otherThreshold");t(this,"baseBreakdown");t(this,"label");t(this,"xAxisLabel");t(this,"yAxisLabel");t(this,"labelDefault");t(this,"xAxisLabelDefault");t(this,"yAxisLabelDefault");t(this,"translations");var i,d;this.id=e.id,this.chartId=e.chartId,this.hiddenCode=e.hiddenCode,this.chartPlotHiddenCode=e.chartPlotHiddenCode,this.serieType=e.serieType,this.plotPer=e.plotPer,this.shift=e.shift?new n(e.shift):void 0,this.step=e.step?new n(e.step):void 0,this.stacked=e.stacked,this.offsets=e.offsets,this.useOperation=e.useOperation,this.operation=e.operation,this.operationUnit=e.operationUnit,this.operationGrouped=e.operationGrouped,this.useTrendLine=e.useTrendLine,this.planningType=e.planningType,this.timeInterval=e.timeInterval,this.useLimit=e.useLimit,this.limit=e.limit,this.heatRule=e.heatRule,this.minColor=e.minColor,this.minValue=e.minValue,this.maxColor=e.maxColor,this.maxValue=e.maxValue,this.heatRanges=(i=e.heatRanges)==null?void 0:i.map(o=>new h(o)),this.fixedColor=e.fixedColor,this.icon=e.icon,this.decimalPlaces=e.decimalPlaces,this.displayAs=e.displayAs,this.hideLabels=e.hideLabels,this.useOther=e.useOther,this.otherThreshold=e.otherThreshold,this.baseBreakdown=e.baseBreakdown,this.label=e.label,this.xAxisLabel=e.xAxisLabel,this.yAxisLabel=e.yAxisLabel,this.labelDefault=e.labelDefault,this.xAxisLabelDefault=e.xAxisLabelDefault,this.yAxisLabelDefault=e.yAxisLabelDefault,this.translations=(d=e.translations)==null?void 0:d.map(o=>new y(o))}}class D{constructor(e){t(this,"languageCode");t(this,"label");this.languageCode=e.languageCode,this.label=e.label}}class k{constructor(e){t(this,"id");t(this,"value");t(this,"labelDefault");t(this,"label");t(this,"translations");this.id=e.id,this.labelDefault=e.labelDefault,this.value=e.value,this.label=e.label,this.translations=e.translations.map(i=>new D(i))}}export{T as C,w as a,v as b,V as c,H as d,R as e,S as f,O as g,M as h,F as i,k as j,P as k};