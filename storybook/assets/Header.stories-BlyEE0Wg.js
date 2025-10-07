import{j as e}from"./iframe-tbK3y8nX.js";import{H as o}from"./Header-CZDwt0Ci.js";import{P as p}from"./Page-Czs0pThN.js";import{H as r}from"./HeaderLabel-D0cx455f.js";import"./preload-helper-D9Z9MdNV.js";import"./Helmet-Bc0xIq1y.js";import"./Box-BCZ-oNFO.js";import"./styled-M6G78zdi.js";import"./Grid-BAg5xRXe.js";import"./Breadcrumbs-Bn8HJlKQ.js";import"./index-DnL3XN75.js";import"./Popover-DChvdoSK.js";import"./Modal-U8okL50X.js";import"./Portal-BOPEl2AS.js";import"./List-Bi9QNlgn.js";import"./ListContext-BeBAgmIy.js";import"./ListItem-6RdgEqss.js";import"./Link-DE5azwbI.js";import"./lodash-CwBbdt2Q.js";import"./index-CRcpJ08W.js";import"./useAnalytics-Ca8LGS_G.js";import"./useApp-GTt_SpSe.js";import"./Page-BFVOhvgz.js";import"./useMediaQuery-BuUWZSMo.js";import"./Tooltip-h3gwVkfT.js";import"./Popper-DQbZaLLQ.js";const N={title:"Layout/Header",component:o,argTypes:{type:{options:["home","tool","service","website","library","app","apis","documentation","other"],control:{type:"select"}}}},a=e.jsxs(e.Fragment,{children:[e.jsx(r,{label:"Owner",value:"players"}),e.jsx(r,{label:"Lifecycle",value:"Production"}),e.jsx(r,{label:"Tier",value:"Level 1"})]}),t=i=>{const{type:s}=i;return e.jsx(p,{themeId:s,children:e.jsx(o,{...i,children:a})})};t.args={type:"home",title:"This is a title",subtitle:"This is a subtitle"};t.__docgenInfo={description:"",methods:[],displayName:"Default",props:{type:{required:!0,tsType:{name:"string"},description:""},title:{required:!0,tsType:{name:"string"},description:""},subtitle:{required:!0,tsType:{name:"string"},description:""}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: {
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
