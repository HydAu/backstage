import{ag as v,ah as f,ai as h,aj as T,s as y,j as e,T as x,a0 as S}from"./iframe-tbK3y8nX.js";import{C as V}from"./MenuBook-BNPogiX-.js";import{U as j}from"./Person-DZrOoCJb.js";import{S as s}from"./SearchType-C5A1LYGn.js";import{s as g,M as _}from"./api-DQpBIi6W.js";import{S as D}from"./SearchContext-DrA_tZMr.js";import{S as u}from"./Grid-BAg5xRXe.js";import"./preload-helper-D9Z9MdNV.js";import"./ExpandMore-D8nHmAmY.js";import"./useAsync-BLvygtRZ.js";import"./useMountedState-Csiy-iGP.js";import"./translation-BoKzQ2pc.js";import"./Box-BCZ-oNFO.js";import"./styled-M6G78zdi.js";import"./AccordionDetails-DPK0aD3x.js";import"./index-DnL3XN75.js";import"./Collapse-Bh_wToR2.js";import"./List-Bi9QNlgn.js";import"./ListContext-BeBAgmIy.js";import"./Divider-DdPHUg49.js";import"./ListItem-6RdgEqss.js";import"./ListItemIcon-8U1XytXM.js";import"./ListItemText-CXoBTj8M.js";import"./Tabs-B2QVtPR9.js";import"./KeyboardArrowRight-DvbsjYZ4.js";import"./FormLabel-Df28kBPG.js";import"./formControlState-ByiNFc8I.js";import"./useFormControl-D3C2Wk5g.js";import"./InputLabel-DLfRVzzq.js";import"./Select-B2-GYoRq.js";import"./Popover-DChvdoSK.js";import"./Modal-U8okL50X.js";import"./Portal-BOPEl2AS.js";import"./MenuItem-CltAnAQh.js";import"./Checkbox-DAM0HQxk.js";import"./SwitchBase-kgVJw5Ah.js";import"./Chip-B7UaeDAv.js";import"./lodash-CwBbdt2Q.js";import"./useAnalytics-Ca8LGS_G.js";var r={},n;function I(){if(n)return r;n=1;var i=v(),l=f();Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var c=l(h()),m=i(T()),d=(0,m.default)(c.createElement("path",{d:"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"}),"Description");return r.default=d,r}var R=I();const q=y(R),ve={title:"Plugins/Search/SearchType",component:s,decorators:[i=>e.jsx(x,{apis:[[g,new _]],children:e.jsx(D,{children:e.jsx(u,{container:!0,direction:"row",children:e.jsx(u,{item:!0,xs:4,children:e.jsx(i,{})})})})})]},p=["value-1","value-2","value-3"],a=()=>e.jsx(S,{style:{padding:10},children:e.jsx(s,{name:"Search type",values:p,defaultValue:p[0]})}),o=()=>e.jsx(s.Accordion,{name:"Result Types",defaultValue:"value-1",types:[{value:"value-1",name:"Value One",icon:e.jsx(V,{})},{value:"value-2",name:"Value Two",icon:e.jsx(q,{})},{value:"value-3",name:"Value Three",icon:e.jsx(j,{})}]}),t=()=>e.jsx(s.Tabs,{defaultValue:"value-1",types:[{value:"value-1",name:"Value One"},{value:"value-2",name:"Value Two"},{value:"value-3",name:"Value Three"}]});a.__docgenInfo={description:"",methods:[],displayName:"Default"};o.__docgenInfo={description:"",methods:[],displayName:"Accordion"};t.__docgenInfo={description:"",methods:[],displayName:"Tabs"};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
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
