import{ag as v,ah as f,ai as h,aj as T,s as y,j as e,T as x,a0 as S}from"./iframe-B4X6F_0x.js";import{C as V}from"./MenuBook-KwiPrjfJ.js";import{U as j}from"./Person-qh73Vaew.js";import{S as s}from"./SearchType-CGJb3tE1.js";import{s as g,M as _}from"./api-BowG0gUM.js";import{S as D}from"./SearchContext-CQY1dIcC.js";import{S as u}from"./Grid-ZwJT3o21.js";import"./preload-helper-D9Z9MdNV.js";import"./ExpandMore-Bc1vnfZW.js";import"./useAsync-C_m9R5PV.js";import"./useMountedState-CnI8azb6.js";import"./translation-DOEDtMWo.js";import"./Box-CM-weRMN.js";import"./styled-CVRYyI1J.js";import"./AccordionDetails-DdV6AcrO.js";import"./index-DnL3XN75.js";import"./Collapse-CkfWvcnj.js";import"./List-vwHRiwvk.js";import"./ListContext-BKyvF85M.js";import"./Divider-BxdCXeWj.js";import"./ListItem-QaFfVGPd.js";import"./ListItemIcon-Pkd8oR80.js";import"./ListItemText-wAc4HvDm.js";import"./Tabs-TNizneAH.js";import"./KeyboardArrowRight-D_OdZFoF.js";import"./FormLabel-HlB1Aj1Z.js";import"./formControlState-ByiNFc8I.js";import"./useFormControl-EK911bBs.js";import"./InputLabel-CqBYomX2.js";import"./Select-B29Q9Cz5.js";import"./Popover-DacelEVl.js";import"./Modal-2fo1PxSM.js";import"./Portal-CIuAqJxF.js";import"./MenuItem-DEvu9dAp.js";import"./Checkbox-BNBlKE1M.js";import"./SwitchBase-CmZ0f_L_.js";import"./Chip-DBAMP3Lh.js";import"./lodash-CwBbdt2Q.js";import"./useAnalytics-BSNcizch.js";var r={},n;function I(){if(n)return r;n=1;var i=v(),l=f();Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var c=l(h()),m=i(T()),d=(0,m.default)(c.createElement("path",{d:"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"}),"Description");return r.default=d,r}var R=I();const q=y(R),ve={title:"Plugins/Search/SearchType",component:s,decorators:[i=>e.jsx(x,{apis:[[g,new _]],children:e.jsx(D,{children:e.jsx(u,{container:!0,direction:"row",children:e.jsx(u,{item:!0,xs:4,children:e.jsx(i,{})})})})})]},p=["value-1","value-2","value-3"],a=()=>e.jsx(S,{style:{padding:10},children:e.jsx(s,{name:"Search type",values:p,defaultValue:p[0]})}),o=()=>e.jsx(s.Accordion,{name:"Result Types",defaultValue:"value-1",types:[{value:"value-1",name:"Value One",icon:e.jsx(V,{})},{value:"value-2",name:"Value Two",icon:e.jsx(q,{})},{value:"value-3",name:"Value Three",icon:e.jsx(j,{})}]}),t=()=>e.jsx(s.Tabs,{defaultValue:"value-1",types:[{value:"value-1",name:"Value One"},{value:"value-2",name:"Value Two"},{value:"value-3",name:"Value Three"}]});a.__docgenInfo={description:"",methods:[],displayName:"Default"};o.__docgenInfo={description:"",methods:[],displayName:"Accordion"};t.__docgenInfo={description:"",methods:[],displayName:"Tabs"};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
  return <Paper style={{
    padding: 10
  }}>
      <SearchType name="Search type" values={values} defaultValue={values[0]} />
    </Paper>;
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  return <SearchType.Accordion name="Result Types" defaultValue="value-1" types={[{
    value: 'value-1',
    name: 'Value One',
    icon: <CatalogIcon />
  }, {
    value: 'value-2',
    name: 'Value Two',
    icon: <DocsIcon />
  }, {
    value: 'value-3',
    name: 'Value Three',
    icon: <UsersGroupsIcon />
  }]} />;
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  return <SearchType.Tabs defaultValue="value-1" types={[{
    value: 'value-1',
    name: 'Value One'
  }, {
    value: 'value-2',
    name: 'Value Two'
  }, {
    value: 'value-3',
    name: 'Value Three'
  }]} />;
}`,...t.parameters?.docs?.source}}};const fe=["Default","Accordion","Tabs"];export{o as Accordion,a as Default,t as Tabs,fe as __namedExportsOrder,ve as default};
