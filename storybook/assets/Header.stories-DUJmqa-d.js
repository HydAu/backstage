import{j as e}from"./iframe-B4X6F_0x.js";import{H as o}from"./Header-CylTVovU.js";import{P as p}from"./Page-CicS__Hh.js";import{H as r}from"./HeaderLabel-DMLgiOVL.js";import"./preload-helper-D9Z9MdNV.js";import"./Helmet-cjBztiP3.js";import"./Box-CM-weRMN.js";import"./styled-CVRYyI1J.js";import"./Grid-ZwJT3o21.js";import"./Breadcrumbs-CtbzLLZx.js";import"./index-DnL3XN75.js";import"./Popover-DacelEVl.js";import"./Modal-2fo1PxSM.js";import"./Portal-CIuAqJxF.js";import"./List-vwHRiwvk.js";import"./ListContext-BKyvF85M.js";import"./ListItem-QaFfVGPd.js";import"./Link-B2TbD7aZ.js";import"./lodash-CwBbdt2Q.js";import"./index-NOhwhBBM.js";import"./useAnalytics-BSNcizch.js";import"./useApp-DGYHvcrQ.js";import"./Page-BNEJ4CEG.js";import"./useMediaQuery-C9uF4GxB.js";import"./Tooltip-BMIOv8Ue.js";import"./Popper-CK-yREM8.js";const N={title:"Layout/Header",component:o,argTypes:{type:{options:["home","tool","service","website","library","app","apis","documentation","other"],control:{type:"select"}}}},a=e.jsxs(e.Fragment,{children:[e.jsx(r,{label:"Owner",value:"players"}),e.jsx(r,{label:"Lifecycle",value:"Production"}),e.jsx(r,{label:"Tier",value:"Level 1"})]}),t=i=>{const{type:s}=i;return e.jsx(p,{themeId:s,children:e.jsx(o,{...i,children:a})})};t.args={type:"home",title:"This is a title",subtitle:"This is a subtitle"};t.__docgenInfo={description:"",methods:[],displayName:"Default",props:{type:{required:!0,tsType:{name:"string"},description:""},title:{required:!0,tsType:{name:"string"},description:""},subtitle:{required:!0,tsType:{name:"string"},description:""}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: {
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
