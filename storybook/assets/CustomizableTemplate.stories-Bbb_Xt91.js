import{j as t,T as i,c as m,C as a}from"./iframe-CHsD2EuT.js";import{w as n}from"./appWrappers-DdqkYj_x.js";import{s as p,H as s}from"./plugin-CwQXidFm.js";import{c as d}from"./api-CBwg8-sU.js";import{c}from"./catalogApiMock-9ioEdVsf.js";import{M as g}from"./MockStarredEntitiesApi-xOGxxvFd.js";import{s as l}from"./api-hYH9E2CI.js";import{C as h}from"./CustomHomepageGrid-EakWEvff.js";import{H as f,a as u}from"./plugin-DDUm-ETs.js";import{e as y}from"./routes-BLwKHGfK.js";import{s as w}from"./StarredEntitiesApi-xAdqTRLG.js";import"./preload-helper-D9Z9MdNV.js";import"./useObservable-D2AqWyv1.js";import"./useIsomorphicLayoutEffect-CyS7kGyR.js";import"./useAnalytics-PRgVyvQF.js";import"./useAsync-C9BZ69ng.js";import"./useMountedState-FxyCjszr.js";import"./componentData-Bsx2Sq2E.js";import"./isSymbol-DhO4cmIY.js";import"./isObject--vsEa_js.js";import"./toString-Cr1IARFv.js";import"./index-BbHI1k2U.js";import"./useApp-DVBgpSzn.js";import"./index-uVoPdh9w.js";import"./Plugin-Dxyd2zRR.js";import"./useRouteRef-C49oh3N9.js";import"./ref-C0VTUPuL.js";import"./lodash-CwBbdt2Q.js";import"./get-BXBGKhUF.js";import"./_baseSlice-DkFNCYmM.js";import"./_arrayReduce-BTs_qt-z.js";import"./toNumber-DwNnq1eP.js";import"./Add-Dy63mDcl.js";import"./Grid-ShkV1KIY.js";import"./Box-CdGM7Pq7.js";import"./styled-cbCynbc2.js";import"./TextField-aIbDNIBL.js";import"./Select-DswR9f-U.js";import"./index-DnL3XN75.js";import"./Popover-DoxM5DBI.js";import"./Modal-BJrfhbcK.js";import"./Portal-BvSrCYBr.js";import"./List-DpjcHGvZ.js";import"./ListContext-BvqkXl1b.js";import"./formControlState-ByiNFc8I.js";import"./useFormControl-B5skoPDd.js";import"./FormLabel--gX8z0yS.js";import"./InputLabel-CoaCZvBF.js";import"./ListItem-ChSdJMdN.js";import"./ListItemIcon-DbnBUQek.js";import"./ListItemText-US31LzOX.js";import"./Remove-Csgf_1-r.js";import"./useCopyToClipboard-BhXIQ6T9.js";import"./Button-C55tn8MB.js";import"./Divider-B4ERPYwJ.js";import"./FormControlLabel-C_Cs0ub3.js";import"./Checkbox-aKZe9Jnz.js";import"./SwitchBase-Cnij2k8l.js";import"./RadioGroup-Bkl4GE4D.js";import"./MenuItem-CeMIiLLa.js";import"./translation-B9nafDbW.js";import"./DialogTitle-54qp_4M8.js";import"./Backdrop-DDYLbR3E.js";import"./Tooltip-B0mFDu31.js";import"./Popper-DoUxk0PL.js";import"./createStyles-Bp4GwXob.js";import"./createStyles-yD3y8ldD.js";import"./ListItemAvatar-AsGK91Sy.js";import"./Edit-DeXFpk_f.js";import"./Cancel-Bfycli4L.js";import"./Progress-BH-U1KsW.js";import"./LinearProgress-CjbIl4vi.js";import"./ContentHeader-BY2TR5at.js";import"./Helmet-CsnGj3iA.js";import"./ErrorBoundary-vK85FkW3.js";import"./ErrorPanel-Dnl_aQhG.js";import"./WarningPanel-BxPgKWwp.js";import"./ExpandMore-ryDetQO2.js";import"./AccordionDetails-BLk7viYh.js";import"./Collapse-iwZJRoUB.js";import"./MarkdownContent-CFTu1ttj.js";import"./CodeSnippet-CuwiwxVy.js";import"./CopyTextButton-BLoSRqG-.js";import"./LinkButton-BOWrUvJF.js";import"./Link-BsDlIoMM.js";import"./useElementFilter-9pM-q2fb.js";import"./InfoCard-CU_5qpxl.js";import"./CardContent-bJ-CXyTY.js";import"./CardHeader-DE8nBtzv.js";import"./CardActions-NmW9zLLV.js";import"./BottomLink-JtJM1Iqq.js";import"./ArrowForward-DiNxIYET.js";const x=[{apiVersion:"1",kind:"Component",metadata:{name:"mock-starred-entity",title:"Mock Starred Entity!"}},{apiVersion:"1",kind:"Component",metadata:{name:"mock-starred-entity-2",title:"Mock Starred Entity 2!"}},{apiVersion:"1",kind:"Component",metadata:{name:"mock-starred-entity-3",title:"Mock Starred Entity 3!"}},{apiVersion:"1",kind:"Component",metadata:{name:"mock-starred-entity-4",title:"Mock Starred Entity 4!"}}],k=c({entities:x}),o=new g;o.toggleStarred("component:default/example-starred-entity");o.toggleStarred("component:default/example-starred-entity-2");o.toggleStarred("component:default/example-starred-entity-3");o.toggleStarred("component:default/example-starred-entity-4");const me={title:"Plugins/Home/Templates",decorators:[r=>n(t.jsx(t.Fragment,{children:t.jsx(i,{apis:[[d,k],[w,o],[l,{query:()=>Promise.resolve({results:[]})}],[m,new a({backend:{baseUrl:"https://localhost:7007"}})]],children:t.jsx(r,{})})}),{mountedRoutes:{"/hello-company":p.routes.root,"/catalog/:namespace/:kind/:name":y}})]},e=()=>{const r=[{component:"HomePageSearchBar",x:0,y:0,width:12,height:5},{component:"HomePageRandomJoke",x:0,y:2,width:6,height:16},{component:"HomePageStarredEntities",x:6,y:2,width:6,height:12}];return t.jsxs(h,{config:r,rowHeight:10,children:["// Insert the allowed widgets inside the grid. User can add, organize and // remove the widgets as they want.",t.jsx(s,{}),t.jsx(f,{}),t.jsx(u,{})]})};e.__docgenInfo={description:"",methods:[],displayName:"CustomizableTemplate"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
  // This is the default configuration that is shown to the user
  // when first arriving to the homepage.
  const defaultConfig = [{
    component: 'HomePageSearchBar',
    x: 0,
    y: 0,
    width: 12,
    height: 5
  }, {
    component: 'HomePageRandomJoke',
    x: 0,
    y: 2,
    width: 6,
    height: 16
  }, {
    component: 'HomePageStarredEntities',
    x: 6,
    y: 2,
    width: 6,
    height: 12
  }];
  return <CustomHomepageGrid config={defaultConfig} rowHeight={10}>
      // Insert the allowed widgets inside the grid. User can add, organize and
      // remove the widgets as they want.
      <HomePageSearchBar />
      <HomePageRandomJoke />
      <HomePageStarredEntities />
    </CustomHomepageGrid>;
}`,...e.parameters?.docs?.source}}};const ae=["CustomizableTemplate"];export{e as CustomizableTemplate,ae as __namedExportsOrder,me as default};
