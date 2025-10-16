import{j as e}from"./iframe-BI8Pro7f.js";import{H as o}from"./Header-Hdzc6G8U.js";import{P as p}from"./Page-B6ChrQ48.js";import{H as r}from"./HeaderLabel-qhZ4W4Vw.js";import"./preload-helper-D9Z9MdNV.js";import"./Helmet-BFFRyIRq.js";import"./Box-3xcahIa0.js";import"./styled-Bjq04UNE.js";import"./Grid-D8GQJQOJ.js";import"./Breadcrumbs-BLEGOSlJ.js";import"./index-DnL3XN75.js";import"./Popover-y-Pu31St.js";import"./Modal-vWbjNuKz.js";import"./Portal-Cr5K-csm.js";import"./List-KB2FjxVf.js";import"./ListContext-BkA_XZEO.js";import"./ListItem-Cd4T2JMt.js";import"./Link-BDnsBgLw.js";import"./lodash-CwBbdt2Q.js";import"./index-TPQhUIn-.js";import"./useAnalytics-CQ3GCpgO.js";import"./useApp-Caa8lJd-.js";import"./Page-RkzAaV7W.js";import"./useMediaQuery-B_4Aw_dY.js";import"./Tooltip-D1isWZPn.js";import"./Popper-BpExO6xr.js";const N={title:"Layout/Header",component:o,argTypes:{type:{options:["home","tool","service","website","library","app","apis","documentation","other"],control:{type:"select"}}}},a=e.jsxs(e.Fragment,{children:[e.jsx(r,{label:"Owner",value:"players"}),e.jsx(r,{label:"Lifecycle",value:"Production"}),e.jsx(r,{label:"Tier",value:"Level 1"})]}),t=i=>{const{type:s}=i;return e.jsx(p,{themeId:s,children:e.jsx(o,{...i,children:a})})};t.args={type:"home",title:"This is a title",subtitle:"This is a subtitle"};t.__docgenInfo={description:"",methods:[],displayName:"Default",props:{type:{required:!0,tsType:{name:"string"},description:""},title:{required:!0,tsType:{name:"string"},description:""},subtitle:{required:!0,tsType:{name:"string"},description:""}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: {
  type: string;
  title: string;
  subtitle: string;
}) => {
  const {
    type
  } = args;
  return <Page themeId={type}>
      <Header {...args}>{labels}</Header>
    </Page>;
}`,...t.parameters?.docs?.source}}};const R=["Default"];export{t as Default,R as __namedExportsOrder,N as default};
