import{j as e}from"./iframe-CitiFnN5.js";import{H as o}from"./Header-B2ldGT8B.js";import{P as p}from"./Page-DxHORo-X.js";import{H as r}from"./HeaderLabel-CmPNu7vh.js";import"./preload-helper-D9Z9MdNV.js";import"./Helmet-DJA2T0an.js";import"./Box-BKmfHdf8.js";import"./styled-CI8mNsbD.js";import"./Grid-DpKvFoNc.js";import"./Breadcrumbs-Bbs7-G7p.js";import"./index-DnL3XN75.js";import"./Popover-BZSD0G5I.js";import"./Modal-B9Dxx05R.js";import"./Portal-CLxHSMha.js";import"./List-CIibtwkv.js";import"./ListContext-BOtrsLMB.js";import"./ListItem-Cazl4cxi.js";import"./Link-BfePrfSY.js";import"./lodash-CwBbdt2Q.js";import"./index-fphZrsnp.js";import"./useAnalytics-8chgUF4h.js";import"./useApp-DKlj7zYu.js";import"./Page-CQXY2lAx.js";import"./useMediaQuery-DYn4AP_1.js";import"./Tooltip-29C2-qED.js";import"./Popper-CC3GX7Gx.js";const N={title:"Layout/Header",component:o,argTypes:{type:{options:["home","tool","service","website","library","app","apis","documentation","other"],control:{type:"select"}}}},a=e.jsxs(e.Fragment,{children:[e.jsx(r,{label:"Owner",value:"players"}),e.jsx(r,{label:"Lifecycle",value:"Production"}),e.jsx(r,{label:"Tier",value:"Level 1"})]}),t=i=>{const{type:s}=i;return e.jsx(p,{themeId:s,children:e.jsx(o,{...i,children:a})})};t.args={type:"home",title:"This is a title",subtitle:"This is a subtitle"};t.__docgenInfo={description:"",methods:[],displayName:"Default",props:{type:{required:!0,tsType:{name:"string"},description:""},title:{required:!0,tsType:{name:"string"},description:""},subtitle:{required:!0,tsType:{name:"string"},description:""}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: {
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
