import{D as r}from"./dashboards-JSNI7pIu.js";import{C as o}from"./useColors-Cz5tOQmp.js";import{u as n}from"./useTranslations-DN7QCs30.js";const{$tr:s}=n(),m=a=>{switch(a){case r.None:return s("ui.common.none","None");case r.Organisation:case r.Shallow:return s("ui.common.custom","Custom");case r.OrganisationType:return s("ui.common.shared","Shared")}},u=a=>{switch(a){case r.None:return o.Error;case r.Organisation:case r.Shallow:return o.Primary;case r.OrganisationType:return o.Warning}};var e=(a=>(a.Dashboard="dashboard",a.Folder="folder",a))(e||{});export{e as F,m as a,u as d};