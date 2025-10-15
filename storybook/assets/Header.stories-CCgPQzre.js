import{j as e}from"./iframe-CHsD2EuT.js";import{H as o}from"./Header-vwnoezrH.js";import{P as p}from"./Page-5o6AXmZu.js";import{H as r}from"./HeaderLabel-Brk7oO11.js";import"./preload-helper-D9Z9MdNV.js";import"./Helmet-CsnGj3iA.js";import"./Box-CdGM7Pq7.js";import"./styled-cbCynbc2.js";import"./Grid-ShkV1KIY.js";import"./Breadcrumbs-CNY1twpN.js";import"./index-DnL3XN75.js";import"./Popover-DoxM5DBI.js";import"./Modal-BJrfhbcK.js";import"./Portal-BvSrCYBr.js";import"./List-DpjcHGvZ.js";import"./ListContext-BvqkXl1b.js";import"./ListItem-ChSdJMdN.js";import"./Link-BsDlIoMM.js";import"./lodash-CwBbdt2Q.js";import"./index-BbHI1k2U.js";import"./useAnalytics-PRgVyvQF.js";import"./useApp-DVBgpSzn.js";import"./Page-Dm4oeTi5.js";import"./useMediaQuery-DduGKzz3.js";import"./Tooltip-B0mFDu31.js";import"./Popper-DoUxk0PL.js";const N={title:"Layout/Header",component:o,argTypes:{type:{options:["home","tool","service","website","library","app","apis","documentation","other"],control:{type:"select"}}}},a=e.jsxs(e.Fragment,{children:[e.jsx(r,{label:"Owner",value:"players"}),e.jsx(r,{label:"Lifecycle",value:"Production"}),e.jsx(r,{label:"Tier",value:"Level 1"})]}),t=i=>{const{type:s}=i;return e.jsx(p,{themeId:s,children:e.jsx(o,{...i,children:a})})};t.args={type:"home",title:"This is a title",subtitle:"This is a subtitle"};t.__docgenInfo={description:"",methods:[],displayName:"Default",props:{type:{required:!0,tsType:{name:"string"},description:""},title:{required:!0,tsType:{name:"string"},description:""},subtitle:{required:!0,tsType:{name:"string"},description:""}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: {
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
