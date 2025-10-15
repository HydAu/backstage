import{j as t,T as i,c as m,C as a}from"./iframe-ClDSU7eH.js";import{w as n}from"./appWrappers-G-Ndam_a.js";import{s as p,H as s}from"./plugin-aN1PZ0ou.js";import{c as d}from"./api-4eDR4nur.js";import{c}from"./catalogApiMock-7lVKiwZU.js";import{M as g}from"./MockStarredEntitiesApi-KUEgmSc9.js";import{s as l}from"./api-KBpVfXUe.js";import{C as h}from"./CustomHomepageGrid-B8TtMLyZ.js";import{H as f,a as u}from"./plugin-D5Zk9YT7.js";import{e as y}from"./routes-CWLAkqOK.js";import{s as w}from"./StarredEntitiesApi-CY_bQMuR.js";import"./preload-helper-D9Z9MdNV.js";import"./useObservable-B2nZnJvA.js";import"./useIsomorphicLayoutEffect-qXS2XSMG.js";import"./useAnalytics-B-0cQkPi.js";import"./useAsync-Dsvu6Zfc.js";import"./useMountedState-FFkX5aJt.js";import"./componentData-CDZy28Da.js";import"./isSymbol-DhO4cmIY.js";import"./isObject--vsEa_js.js";import"./toString-Cr1IARFv.js";import"./index-H5rrlhPB.js";import"./useApp-B8hr0lnh.js";import"./index-BDDlyC_L.js";import"./Plugin-CRqfFxk-.js";import"./useRouteRef-Pbj2lDBT.js";import"./ref-C0VTUPuL.js";import"./lodash-CwBbdt2Q.js";import"./get-BFa7fIN8.js";import"./_baseSlice-DkFNCYmM.js";import"./_arrayReduce-BTs_qt-z.js";import"./toNumber-DwNnq1eP.js";import"./Add-BjQU1zOx.js";import"./Grid-mV-QABlU.js";import"./Box-Cxljpaoo.js";import"./styled-BqebAAUt.js";import"./TextField-DQ9scA0K.js";import"./Select-BSRD0UQg.js";import"./index-DnL3XN75.js";import"./Popover-DptQBLkE.js";import"./Modal-C7JUlgaL.js";import"./Portal-DmQDyavD.js";import"./List-BbkLtEZF.js";import"./ListContext-CmA_1Vly.js";import"./formControlState-ByiNFc8I.js";import"./useFormControl-BH5ltWWd.js";import"./FormLabel-C1fBvi9k.js";import"./InputLabel-CdLb7x7j.js";import"./ListItem-dodDOH8z.js";import"./ListItemIcon-CfeFhi9v.js";import"./ListItemText-CITdacPb.js";import"./Remove-CFBgvUdS.js";import"./useCopyToClipboard-CJScTRHQ.js";import"./Button-BLajmhZP.js";import"./Divider-BXbuj0VG.js";import"./FormControlLabel-C2OR_zC2.js";import"./Checkbox-CDTR-i81.js";import"./SwitchBase-Bb4jHDOW.js";import"./RadioGroup-P14XoTN7.js";import"./MenuItem-BB308Wqj.js";import"./translation-Fg-z4T0C.js";import"./DialogTitle-DANsDeHD.js";import"./Backdrop-DMfQwbB0.js";import"./Tooltip-C4VBCydo.js";import"./Popper-BXtW4PiG.js";import"./createStyles-Bp4GwXob.js";import"./createStyles-yD3y8ldD.js";import"./ListItemAvatar-C6OMH-0l.js";import"./Edit-CJ46qDRf.js";import"./Cancel-89uKHjSR.js";import"./Progress-C9yoHTP8.js";import"./LinearProgress--1ABpkfG.js";import"./ContentHeader-uPjpJKda.js";import"./Helmet-D5_2zEU9.js";import"./ErrorBoundary-DqTj9Q6K.js";import"./ErrorPanel-fEQPUK4N.js";import"./WarningPanel-MWDdRggK.js";import"./ExpandMore-C1RCBmqn.js";import"./AccordionDetails-BRRfNhN6.js";import"./Collapse-D-ZHo9zW.js";import"./MarkdownContent-hcF9jGOf.js";import"./CodeSnippet-C1NCP6TT.js";import"./CopyTextButton-qppcfNHS.js";import"./LinkButton-B8kC82TM.js";import"./Link-CtlywKiK.js";import"./useElementFilter-DzL3KBVl.js";import"./InfoCard-DTvhDQH8.js";import"./CardContent-CH1Xj1W3.js";import"./CardHeader-BCVduPWX.js";import"./CardActions-CbH8no58.js";import"./BottomLink-CaVdpOph.js";import"./ArrowForward-CUrEzInL.js";const x=[{apiVersion:"1",kind:"Component",metadata:{name:"mock-starred-entity",title:"Mock Starred Entity!"}},{apiVersion:"1",kind:"Component",metadata:{name:"mock-starred-entity-2",title:"Mock Starred Entity 2!"}},{apiVersion:"1",kind:"Component",metadata:{name:"mock-starred-entity-3",title:"Mock Starred Entity 3!"}},{apiVersion:"1",kind:"Component",metadata:{name:"mock-starred-entity-4",title:"Mock Starred Entity 4!"}}],k=c({entities:x}),o=new g;o.toggleStarred("component:default/example-starred-entity");o.toggleStarred("component:default/example-starred-entity-2");o.toggleStarred("component:default/example-starred-entity-3");o.toggleStarred("component:default/example-starred-entity-4");const me={title:"Plugins/Home/Templates",decorators:[r=>n(t.jsx(t.Fragment,{children:t.jsx(i,{apis:[[d,k],[w,o],[l,{query:()=>Promise.resolve({results:[]})}],[m,new a({backend:{baseUrl:"https://localhost:7007"}})]],children:t.jsx(r,{})})}),{mountedRoutes:{"/hello-company":p.routes.root,"/catalog/:namespace/:kind/:name":y}})]},e=()=>{const r=[{component:"HomePageSearchBar",x:0,y:0,width:12,height:5},{component:"HomePageRandomJoke",x:0,y:2,width:6,height:16},{component:"HomePageStarredEntities",x:6,y:2,width:6,height:12}];return t.jsxs(h,{config:r,rowHeight:10,children:["// Insert the allowed widgets inside the grid. User can add, organize and // remove the widgets as they want.",t.jsx(s,{}),t.jsx(f,{}),t.jsx(u,{})]})};e.__docgenInfo={description:"",methods:[],displayName:"CustomizableTemplate"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
