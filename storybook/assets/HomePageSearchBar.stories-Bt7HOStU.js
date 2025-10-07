import{j as e,T as n,m as i}from"./iframe-tbK3y8nX.js";import{H as a,r as c}from"./plugin-ChlVQLyu.js";import{s as m}from"./api-DQpBIi6W.js";import{S as o}from"./Grid-BAg5xRXe.js";import{w as p}from"./appWrappers-BOPSHKwj.js";import"./preload-helper-D9Z9MdNV.js";import"./index-DCQoplNk.js";import"./Plugin-53t6JYkK.js";import"./componentData-BJunciA8.js";import"./useAnalytics-Ca8LGS_G.js";import"./useApp-GTt_SpSe.js";import"./useRouteRef-BX83NI39.js";import"./index-CRcpJ08W.js";import"./useObservable-nEL5u-FZ.js";import"./useIsomorphicLayoutEffect-C-K5d2D6.js";import"./useAsync-BLvygtRZ.js";import"./useMountedState-Csiy-iGP.js";import"./isSymbol-DhO4cmIY.js";import"./isObject--vsEa_js.js";import"./toString-Cr1IARFv.js";const k={title:"Plugins/Home/Components/SearchBar",decorators:[r=>p(e.jsx(e.Fragment,{children:e.jsx(n,{apis:[[m,{query:()=>Promise.resolve({results:[]})}]],children:e.jsx(r,{})})}),{mountedRoutes:{"/hello-search":c}})]},t=()=>e.jsx(o,{container:!0,justifyContent:"center",spacing:6,children:e.jsx(o,{container:!0,item:!0,xs:12,alignItems:"center",direction:"row",children:e.jsx(a,{placeholder:"Search"})})}),d=i(r=>({searchBar:{display:"flex",maxWidth:"60vw",backgroundColor:r.palette.background.paper,boxShadow:r.shadows[1],padding:"8px 0",borderRadius:"50px",margin:"auto"},searchBarOutline:{borderStyle:"none"}})),s=()=>{const r=d();return e.jsx(o,{container:!0,justifyContent:"center",spacing:6,children:e.jsx(o,{container:!0,item:!0,xs:12,alignItems:"center",direction:"row",children:e.jsx(a,{classes:{root:r.searchBar},InputProps:{classes:{notchedOutline:r.searchBarOutline}},placeholder:"Search"})})})};t.__docgenInfo={description:"",methods:[],displayName:"Default"};s.__docgenInfo={description:"",methods:[],displayName:"CustomStyles"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  return <Grid container justifyContent="center" spacing={6}>
      <Grid container item xs={12} alignItems="center" direction="row">
        <HomePageSearchBar placeholder="Search" />
      </Grid>
    </Grid>;
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  const classes = useStyles();
  return <Grid container justifyContent="center" spacing={6}>
      <Grid container item xs={12} alignItems="center" direction="row">
        <HomePageSearchBar classes={{
        root: classes.searchBar
      }} InputProps={{
        classes: {
          notchedOutline: classes.searchBarOutline
        }
      }} placeholder="Search" />
      </Grid>
    </Grid>;
}`,...s.parameters?.docs?.source}}};const v=["Default","CustomStyles"];export{s as CustomStyles,t as Default,v as __namedExportsOrder,k as default};
