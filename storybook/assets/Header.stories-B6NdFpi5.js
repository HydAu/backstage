import{j as e}from"./iframe-jWBis4h7.js";import{H as o}from"./Header-DuZsjd0P.js";import{P as p}from"./Page-BPAHRfut.js";import{H as r}from"./HeaderLabel-B-Ib6YeB.js";import"./preload-helper-D9Z9MdNV.js";import"./Helmet-BZ0kdgXz.js";import"./Box-CUCIIvBq.js";import"./styled-DEXT6Cl3.js";import"./Grid-D8aYrpF9.js";import"./Breadcrumbs-C1abT0EH.js";import"./index-DnL3XN75.js";import"./Popover-Cipv1uQu.js";import"./Modal-D5_FmyLm.js";import"./Portal-4KhuVP8U.js";import"./List-DRbnC8gb.js";import"./ListContext-BUzb9c6E.js";import"./ListItem-D85OCTFr.js";import"./Link-CsUbik3L.js";import"./lodash-CwBbdt2Q.js";import"./index-D-vQ19kG.js";import"./useAnalytics-jlg0poIO.js";import"./useApp-CwBIww-_.js";import"./Page-BVeqQqNw.js";import"./useMediaQuery-DmSJbntX.js";import"./Tooltip-BbJdzgrj.js";import"./Popper-CmiAw98y.js";const N={title:"Layout/Header",component:o,argTypes:{type:{options:["home","tool","service","website","library","app","apis","documentation","other"],control:{type:"select"}}}},a=e.jsxs(e.Fragment,{children:[e.jsx(r,{label:"Owner",value:"players"}),e.jsx(r,{label:"Lifecycle",value:"Production"}),e.jsx(r,{label:"Tier",value:"Level 1"})]}),t=i=>{const{type:s}=i;return e.jsx(p,{themeId:s,children:e.jsx(o,{...i,children:a})})};t.args={type:"home",title:"This is a title",subtitle:"This is a subtitle"};t.__docgenInfo={description:"",methods:[],displayName:"Default",props:{type:{required:!0,tsType:{name:"string"},description:""},title:{required:!0,tsType:{name:"string"},description:""},subtitle:{required:!0,tsType:{name:"string"},description:""}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: {
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
