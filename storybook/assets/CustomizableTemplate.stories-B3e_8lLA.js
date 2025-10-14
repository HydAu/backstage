import{j as t,T as i,c as m,C as a}from"./iframe-CitiFnN5.js";import{w as n}from"./appWrappers-DqiUoBg7.js";import{s as p,H as s}from"./plugin-pRlHfbfe.js";import{c as d}from"./api-PVvyxwFe.js";import{c}from"./catalogApiMock-BxO5jzE_.js";import{M as g}from"./MockStarredEntitiesApi-DSK_Hmrx.js";import{s as l}from"./api-BmDO9cq4.js";import{C as h}from"./CustomHomepageGrid-CADIytJ8.js";import{H as f,a as u}from"./plugin-BeJvANSL.js";import{e as y}from"./routes-DHPyi5Jr.js";import{s as w}from"./StarredEntitiesApi-DjLgbZMa.js";import"./preload-helper-D9Z9MdNV.js";import"./useObservable-B7G4XzLu.js";import"./useIsomorphicLayoutEffect-CTYGaF45.js";import"./useAnalytics-8chgUF4h.js";import"./useAsync-Cfc7VOKF.js";import"./useMountedState-BHqHaaST.js";import"./componentData-C_a9Rk_9.js";import"./isSymbol-DhO4cmIY.js";import"./isObject--vsEa_js.js";import"./toString-Cr1IARFv.js";import"./index-fphZrsnp.js";import"./useApp-DKlj7zYu.js";import"./index-DXQi49pZ.js";import"./Plugin-h_HGQPkP.js";import"./useRouteRef-CAQN4j2A.js";import"./ref-C0VTUPuL.js";import"./lodash-CwBbdt2Q.js";import"./get-BftCpqJd.js";import"./_baseSlice-DkFNCYmM.js";import"./_arrayReduce-BTs_qt-z.js";import"./toNumber-DwNnq1eP.js";import"./Add-DlSplhVW.js";import"./Grid-DpKvFoNc.js";import"./Box-BKmfHdf8.js";import"./styled-CI8mNsbD.js";import"./TextField-RHVRm21r.js";import"./Select-Cm7Art_u.js";import"./index-DnL3XN75.js";import"./Popover-BZSD0G5I.js";import"./Modal-B9Dxx05R.js";import"./Portal-CLxHSMha.js";import"./List-CIibtwkv.js";import"./ListContext-BOtrsLMB.js";import"./formControlState-ByiNFc8I.js";import"./useFormControl-CopxVmDV.js";import"./FormLabel-r1t8rzj0.js";import"./InputLabel-Ei5klyAj.js";import"./ListItem-Cazl4cxi.js";import"./ListItemIcon-C97EkViG.js";import"./ListItemText-BSZhigQo.js";import"./Remove-C5LJtt98.js";import"./useCopyToClipboard-LAmPqqHW.js";import"./Button-CzOtIHxI.js";import"./Divider-0w2V0l6l.js";import"./FormControlLabel-DSo2Fa4T.js";import"./Checkbox-B7_m8AhI.js";import"./SwitchBase-B4bvDxr8.js";import"./RadioGroup-DPMT3FU6.js";import"./MenuItem-DXuX7mYL.js";import"./translation-VYiS8be6.js";import"./DialogTitle-Df7jxE3g.js";import"./Backdrop-CeRYgHkr.js";import"./Tooltip-29C2-qED.js";import"./Popper-CC3GX7Gx.js";import"./createStyles-Bp4GwXob.js";import"./createStyles-yD3y8ldD.js";import"./ListItemAvatar-D0_OK2DJ.js";import"./Edit-Dr11Ey49.js";import"./Cancel-bbQCEs5U.js";import"./Progress-5oq2d3gN.js";import"./LinearProgress-CrlMFpyX.js";import"./ContentHeader-BRbS-8qJ.js";import"./Helmet-DJA2T0an.js";import"./ErrorBoundary-Dgfqtr43.js";import"./ErrorPanel-ChpIJ875.js";import"./WarningPanel-CLvK_CXa.js";import"./ExpandMore-Cdp8R-_v.js";import"./AccordionDetails-c8bsqLtz.js";import"./Collapse-CgrQvPiJ.js";import"./MarkdownContent-DfHnauBf.js";import"./CodeSnippet-D5EYBXfs.js";import"./CopyTextButton-GAOyp82e.js";import"./LinkButton-DvgMeH9Q.js";import"./Link-BfePrfSY.js";import"./useElementFilter-mtfpNzCg.js";import"./InfoCard-CAKG5LrL.js";import"./CardContent-BBilV-uY.js";import"./CardHeader-BDNBuNZ7.js";import"./CardActions-DJgCAChb.js";import"./BottomLink-Dm-Btg_P.js";import"./ArrowForward-DL82-bNW.js";const x=[{apiVersion:"1",kind:"Component",metadata:{name:"mock-starred-entity",title:"Mock Starred Entity!"}},{apiVersion:"1",kind:"Component",metadata:{name:"mock-starred-entity-2",title:"Mock Starred Entity 2!"}},{apiVersion:"1",kind:"Component",metadata:{name:"mock-starred-entity-3",title:"Mock Starred Entity 3!"}},{apiVersion:"1",kind:"Component",metadata:{name:"mock-starred-entity-4",title:"Mock Starred Entity 4!"}}],k=c({entities:x}),o=new g;o.toggleStarred("component:default/example-starred-entity");o.toggleStarred("component:default/example-starred-entity-2");o.toggleStarred("component:default/example-starred-entity-3");o.toggleStarred("component:default/example-starred-entity-4");const me={title:"Plugins/Home/Templates",decorators:[r=>n(t.jsx(t.Fragment,{children:t.jsx(i,{apis:[[d,k],[w,o],[l,{query:()=>Promise.resolve({results:[]})}],[m,new a({backend:{baseUrl:"https://localhost:7007"}})]],children:t.jsx(r,{})})}),{mountedRoutes:{"/hello-company":p.routes.root,"/catalog/:namespace/:kind/:name":y}})]},e=()=>{const r=[{component:"HomePageSearchBar",x:0,y:0,width:12,height:5},{component:"HomePageRandomJoke",x:0,y:2,width:6,height:16},{component:"HomePageStarredEntities",x:6,y:2,width:6,height:12}];return t.jsxs(h,{config:r,rowHeight:10,children:["// Insert the allowed widgets inside the grid. User can add, organize and // remove the widgets as they want.",t.jsx(s,{}),t.jsx(f,{}),t.jsx(u,{})]})};e.__docgenInfo={description:"",methods:[],displayName:"CustomizableTemplate"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
