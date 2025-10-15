import{j as e}from"./iframe-ClDSU7eH.js";import{H as o}from"./Header-BcaN23zE.js";import{P as p}from"./Page-BXq3PK8-.js";import{H as r}from"./HeaderLabel-BIDmnD8u.js";import"./preload-helper-D9Z9MdNV.js";import"./Helmet-D5_2zEU9.js";import"./Box-Cxljpaoo.js";import"./styled-BqebAAUt.js";import"./Grid-mV-QABlU.js";import"./Breadcrumbs-E3VoeKJa.js";import"./index-DnL3XN75.js";import"./Popover-DptQBLkE.js";import"./Modal-C7JUlgaL.js";import"./Portal-DmQDyavD.js";import"./List-BbkLtEZF.js";import"./ListContext-CmA_1Vly.js";import"./ListItem-dodDOH8z.js";import"./Link-CtlywKiK.js";import"./lodash-CwBbdt2Q.js";import"./index-H5rrlhPB.js";import"./useAnalytics-B-0cQkPi.js";import"./useApp-B8hr0lnh.js";import"./Page-DarsA8RK.js";import"./useMediaQuery-BuLpySSx.js";import"./Tooltip-C4VBCydo.js";import"./Popper-BXtW4PiG.js";const N={title:"Layout/Header",component:o,argTypes:{type:{options:["home","tool","service","website","library","app","apis","documentation","other"],control:{type:"select"}}}},a=e.jsxs(e.Fragment,{children:[e.jsx(r,{label:"Owner",value:"players"}),e.jsx(r,{label:"Lifecycle",value:"Production"}),e.jsx(r,{label:"Tier",value:"Level 1"})]}),t=i=>{const{type:s}=i;return e.jsx(p,{themeId:s,children:e.jsx(o,{...i,children:a})})};t.args={type:"home",title:"This is a title",subtitle:"This is a subtitle"};t.__docgenInfo={description:"",methods:[],displayName:"Default",props:{type:{required:!0,tsType:{name:"string"},description:""},title:{required:!0,tsType:{name:"string"},description:""},subtitle:{required:!0,tsType:{name:"string"},description:""}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: {
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
