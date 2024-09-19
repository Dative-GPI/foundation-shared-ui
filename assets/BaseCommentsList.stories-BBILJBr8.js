var oe=Object.defineProperty;var ne=(e,t,o)=>t in e?oe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var n=(e,t,o)=>ne(e,typeof t!="symbol"?t+"":t,o);import{d as R,b as O,z as i,A as u,B as p,C as a,v as r,E as y,G as q,H as $,c as me,o as re,w as se,D as ae,N as ie,F as le}from"./vue.esm-bundler-BwDfg4wG.js";import{_ as V}from"./lodash-BiW_TGGX.js";import{F as ue}from"./FSButtonCancel-DKqe0NLK.js";import{F as de}from"./FSTextArea-B8-GxTsB.js";import{F as G}from"./FSButton-jJkg4qCi.js";import{F as Z}from"./FSImage-CtdLuckH.js";import{F as g}from"./FSRow-k5pgBhR1.js";import{F}from"./FSCol-BEvj3we4.js";import{C as _}from"./useColors-tmPxRJAs.js";import{_ as L}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as H}from"./VSpacer-C5S3LEb3.js";import{F as ce}from"./FSButtonRemoveIcon-CY9APSqB.js";import{F as pe}from"./FSButtonEditIcon-L7FrWnKZ.js";import{F as fe}from"./FSCard-ENPT7Hcj.js";import{F as W}from"./FSText-CwwFvnOv.js";import{G as Ce}from"./base-CmdGny12.js";import{S as h}from"./serviceFactory-Bd5jifNi.js";import{C as f}from"./composableFactory-fou7heQy.js";import{i as x}from"./datesTools-BRWlXl6j.js";import{C as ge}from"./base-C7fpSlQX.js";import{u as Fe}from"./useDateFormat-B3lPS72n.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSBaseField-3b1naUZS.js";import"./FSSpan-H3zJ0Cfa.js";import"./useSlots-2JqallzA.js";import"./useRules-CJCAsX67.js";import"./css-DTUiF03J.js";import"./VField-C9nLiyrW.js";import"./index-h4Pvk0JI.js";import"./color-BnvS3YzF.js";import"./theme-DkbGhe4v.js";import"./transition-DbaVUv7M.js";import"./VLabel-BAbVzo-k.js";import"./VInput-Bb_DU4hJ.js";import"./locale-DTc71_bq.js";import"./VIcon-D-JUvW-a.js";import"./tag-Ceq3l71M.js";import"./density-CY8ZwxUy.js";import"./proxiedModel-okNizC5Y.js";import"./form-CH3j37ax.js";import"./loader-ecE02KGk.js";import"./VProgressCircular-CmpAWY4m.js";import"./anchor-0YuAsO7w.js";import"./rounded-NuUWeCiM.js";import"./VDefaultsProvider-_csoeOf7.js";import"./forwardRefs-DWGaNmQL.js";import"./index-O1RQoaVh.js";import"./FSClickable-Y_T-Cq-9.js";import"./FSIcon-ChaYv6Le.js";import"./FSImageUI-BAdgvYuR.js";import"./FSLoader-CBedVZCM.js";import"./dimensions-yOZi2HlQ.js";import"./elevation-Ba-uT6Vw.js";import"./VImg-DFtMr-E9.js";import"./useImages-hJ8kAqsC.js";import"./index-DfSX31J9.js";import"./useAppOrganisationId-C2bN-F6j.js";import"./useTranslations-CHmpEDXr.js";import"./useAppLanguageCode--ssgoHQ3.js";import"./useAppTimeZone-8KaETkN8.js";class Ie{constructor(t){n(this,"id");n(this,"imageId");n(this,"email");n(this,"phoneNumber");n(this,"firstName");n(this,"lastName");this.id=t.id,this.imageId=t.imageId,this.email=t.email,this.phoneNumber=t.phoneNumber,this.firstName=t.firstName,this.lastName=t.lastName}}class N extends Ie{constructor(o){super(o);n(this,"adminAccess");n(this,"hasSignedPolicies");n(this,"languageCode");n(this,"timeZoneId");n(this,"allowNotifications");n(this,"allowSms");n(this,"allowEmails");this.adminAccess=o.adminAccess,this.hasSignedPolicies=o.hasSignedPolicies,this.languageCode=o.languageCode,this.timeZoneId=o.timeZoneId,this.allowNotifications=o.allowNotifications,this.allowSms=o.allowSms,this.allowEmails=o.allowEmails}}const Se=()=>`${Ce()}/users`,U=()=>`${Se()}/current`,B=new h("user",N).create(e=>e.build(h.addCustom("getCurrent",t=>t.get(U()),t=>new N(t)),e.addNotify(t=>({...h.addCustom("updateCurrent",(o,s)=>o.post(U(),s),o=>{const s=new N(o);return t.notify("update",s),s}),...h.addCustom("updateCurrentEmail",(o,s)=>o.put(U(),s),o=>{const s=new N(o);return t.notify("update",s),s})})))),he=f.trackRef(B),k=()=>{const{track:e}=he();return t=>{e(t)}},ye=f.custom(B.getCurrent,k);f.custom(B.updateCurrent,k);f.custom(B.updateCurrentEmail,k);class j{constructor(t){n(this,"id");n(this,"alertId");n(this,"userId");n(this,"userName");n(this,"userImageId");n(this,"timestamp");n(this,"comment");n(this,"edited");n(this,"editTimestamp");this.id=t.id,this.alertId=t.alertId,this.userId=t.userId,this.userName=t.userName,this.userImageId=t.userImageId,this.timestamp=x(t.timestamp),this.comment=t.comment,this.edited=t.edited,this.editTimestamp=t.editTimestamp?x(t.editTimestamp):null}}class we extends j{constructor(t){super(t)}}const z=()=>`${ge()}/comments`,ve=e=>`${z()}/${encodeURIComponent(e)}`,T=new h("comment",we).createComplete(z,ve,j),be=f.getMany(T),Ne=f.create(T),Ee=f.update(T),$e=f.remove(T),Y=R({name:"FSCommentField",components:{FSButton:G,FSButtonCancel:ue,FSImage:Z,FSTextArea:de,FSRow:g,FSCol:F},props:{buttonLabel:{type:String,required:!1},creating:{type:Boolean,required:!1},userImageId:{type:String,required:!1},text:{type:String,required:!1},showCancelButton:{type:Boolean,required:!1,default:!1}},emits:["submit","cancel"],setup(e){return{innertext:O(e.text),ColorEnum:_}}});function Be(e,t,o,s,I,w){const d=i("FSImage"),c=i("FSTextArea"),C=i("FSButtonCancel");return u(),p(F,null,{default:a(()=>[r(g,{align:"top-left"},{default:a(()=>[r(d,{imageId:e.userImageId,width:32,height:32,rounded:"circle"},null,8,["imageId"]),r(c,{rows:5,hideHeader:!0,placeholder:e.$tr("ui.common.write-comment","Write a comment..."),modelValue:e.innertext,"onUpdate:modelValue":t[0]||(t[0]=m=>e.innertext=m)},null,8,["placeholder","modelValue"])]),_:1}),r(g,null,{default:a(()=>[r(H),e.showCancelButton?(u(),p(C,{key:0,onClick:t[1]||(t[1]=m=>e.$emit("cancel"))})):y("",!0),r(G,{color:e.ColorEnum.Primary,loading:e.creating,prependIcon:"mdi-send-outline",label:e.buttonLabel??e.$tr("ui.common.publish","Publish"),onClick:t[2]||(t[2]=()=>e.$emit("submit",e.innertext))},null,8,["color","loading","label"])]),_:1})]),_:1})}const A=L(Y,[["render",Be]]);Y.__docgenInfo={displayName:"FSCommentField",exportName:"default",description:"",tags:{},props:[{name:"buttonLabel",type:{name:"string"},required:!1},{name:"creating",type:{name:"boolean"},required:!1},{name:"userImageId",type:{name:"string | null"},required:!1},{name:"text",type:{name:"string"},required:!1},{name:"showCancelButton",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"cancel"},{name:"submit"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSCommentField.vue"]};const J=R({name:"FSCommentTileUI",components:{FSButtonRemoveIcon:ce,FSCommentField:A,FSButtonEditIcon:pe,FSImage:Z,FSCard:fe,FSText:W,FSCol:F,FSRow:g},props:{id:{type:String,required:!1,default:null},userName:{type:String,required:!1,default:null},userImageId:{type:String,required:!1,default:null},canEditRemove:{type:Boolean,required:!1,default:!1},timestamp:{type:String,required:!1,default:null},comment:{type:String,required:!1,default:void 0},edited:{type:Boolean,required:!1,default:!1}},emits:["edit","remove"],setup(e,{emit:t}){const o=O(!1);return{ColorEnum:_,showEditComment:o,updateComment:I=>{t("edit",{commentId:e.id,comment:I}),o.value=!1}}}});function Te(e,t,o,s,I,w){const d=i("FSImage"),c=i("FSText"),C=i("FSButtonEditIcon"),m=i("FSButtonRemoveIcon"),S=i("FSCard"),v=i("FSCommentField");return u(),p(F,{align:"center-center"},{default:a(()=>[r(S,{padding:"8px",width:"500px"},{header:a(()=>[r(g,{align:"center-center",gap:"12px"},{default:a(()=>[r(d,{imageId:e.userImageId,width:"24px",height:"24px",rounded:"circle"},null,8,["imageId"]),r(c,{font:"text-overline"},{default:a(()=>[q($(e.userName)+" - "+$(e.timestamp),1)]),_:1}),r(H),e.canEditRemove?(u(),p(C,{key:0,onClick:t[0]||(t[0]=b=>e.showEditComment=!0)})):y("",!0),e.canEditRemove?(u(),p(m,{key:1,onClick:t[1]||(t[1]=b=>e.$emit("remove"))})):y("",!0)]),_:1})]),body:a(()=>[r(c,{class:"text-wrap"},{default:a(()=>[q($(e.comment),1)]),_:1})]),footer:a(()=>[]),_:1}),e.showEditComment?(u(),p(F,{key:0,width:"500px"},{default:a(()=>[r(v,{userImageId:e.userImageId,showCancelButton:!0,text:e.comment,onCancel:t[2]||(t[2]=b=>e.showEditComment=!1),onSubmit:e.updateComment},null,8,["userImageId","text","onSubmit"])]),_:1})):y("",!0)]),_:1})}const K=L(J,[["render",Te]]);J.__docgenInfo={displayName:"FSCommentTileUI",exportName:"default",description:"",tags:{},props:[{name:"id",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"userName",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"userImageId",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"canEditRemove",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"timestamp",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"comment",type:{name:"string | undefined"},required:!1,defaultValue:{func:!1,value:"undefined"}},{name:"edited",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"remove"},{name:"edit"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/tiles/FSCommentTileUI.vue"]};const Q=R({title:"FSBaseCommentsList",components:{FSText:W,FSCol:F,FSRow:g,FSCommentTileUI:K,FSCommentField:A},props:{commentFilters:{type:Object,required:!0},allowAlertComment:{type:Boolean,default:!1}},setup(e){const{fetch:t,entity:o}=ye(),{create:s,creating:I}=Ne(),{getMany:w,entities:d}=be(),{update:c}=Ee(),{remove:C}=$e(),{epochToLongTimeFormat:m}=Fe(),S=me(()=>V.orderBy(d.value,["timestamp"],["desc"]));re(()=>{t()});const v=l=>{e.commentFilters.alertId&&l&&s({comment:l,alertId:e.commentFilters.alertId})},b=l=>{c(l.commentId,{comment:l.comment})},ee=l=>{C(l)};return se(()=>e.commentFilters,(l,te)=>{V.isEqual(l,te)||w(e.commentFilters)},{immediate:!0}),{comments:d,ColorEnum:_,creatingComment:I,currentUser:o,orderedComments:S,createNewComment:v,updateComment:b,removeComment:ee,epochToLongTimeFormat:m}}});function Ue(e,t,o,s,I,w){const d=i("FSText"),c=i("FSCommentField"),C=i("FSCommentTileUI");return e.$props.allowAlertComment?(u(),p(F,{key:0,padding:"24px",gap:"48px",align:"center-center"},{default:a(()=>[r(d,{font:"text-h3"},{default:a(()=>[q($(e.$tr("ui.common.comments","Comments")),1)]),_:1}),r(g,{width:"500px"},{default:a(()=>{var m;return[r(c,{buttonLabel:e.$tr("ui.common.publish","Publish"),creating:e.creatingComment,onSubmit:e.createNewComment,userImageId:(m=e.currentUser)==null?void 0:m.imageId},null,8,["buttonLabel","creating","onSubmit","userImageId"])]}),_:1}),(u(!0),ae(le,null,ie(e.orderedComments,m=>{var S;return u(),p(C,{key:m.id,timestamp:e.epochToLongTimeFormat(m.timestamp),userName:m.userName,userImageId:m.userImageId,canEditRemove:((S=e.currentUser)==null?void 0:S.id)===m.userId,comment:m.comment,edited:m.edited,id:m.id,onEdit:e.updateComment,onRemove:v=>e.removeComment(m.id)},null,8,["timestamp","userName","userImageId","canEditRemove","comment","edited","id","onEdit","onRemove"])}),128))]),_:1})):y("",!0)}const X=L(Q,[["render",Ue]]);Q.__docgenInfo={exportName:"default",displayName:"FSBaseCommentsList",description:"",tags:{},props:[{name:"commentFilters",type:{name:"CommentFilters"},required:!0},{name:"allowAlertComment",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/comments/FSBaseCommentsList.vue"]};const xt={title:"Foundation/Core/Lists/Base Lists/BaseCommentsList",component:X,subcomponents:{FSCommentTileUI:K,FSCommentField:A},tags:["autodocs"],argTypes:{}},E={render:e=>({components:{FSBaseCommentsList:X},setup(){return{args:e}},template:`
      <FSBaseCommentsList
        :allowAlertComment="args.allowAlertComment"
        :commentFilters="args.commentFilters"
      />
    `}),args:{allowAlertComment:!0,commentFilters:{alertId:"1"}}};var D,M,P;E.parameters={...E.parameters,docs:{...(D=E.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FSBaseCommentsList
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSBaseCommentsList
        :allowAlertComment="args.allowAlertComment"
        :commentFilters="args.commentFilters"
      />
    \`
  }),
  args: {
    allowAlertComment: true,
    commentFilters: {
      alertId: "1"
    }
  }
}`,...(P=(M=E.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};const Dt=["Default"];export{E as Default,Dt as __namedExportsOrder,xt as default};