import{j as t,T as i,c as m,C as a}from"./iframe-tbK3y8nX.js";import{w as n}from"./appWrappers-BOPSHKwj.js";import{s as p,H as s}from"./plugin-ChlVQLyu.js";import{c as d}from"./api-b80-yZQJ.js";import{c}from"./catalogApiMock-DZcOOhJK.js";import{M as g}from"./MockStarredEntitiesApi-DShTvORn.js";import{s as l}from"./api-DQpBIi6W.js";import{C as h}from"./CustomHomepageGrid-Cn1XyePC.js";import{H as f,a as u}from"./plugin-DVX7KkLi.js";import{e as y}from"./routes-B8X4fsJy.js";import{s as w}from"./StarredEntitiesApi-hg9hGcsq.js";import"./preload-helper-D9Z9MdNV.js";import"./useObservable-nEL5u-FZ.js";import"./useIsomorphicLayoutEffect-C-K5d2D6.js";import"./useAnalytics-Ca8LGS_G.js";import"./useAsync-BLvygtRZ.js";import"./useMountedState-Csiy-iGP.js";import"./componentData-BJunciA8.js";import"./isSymbol-DhO4cmIY.js";import"./isObject--vsEa_js.js";import"./toString-Cr1IARFv.js";import"./index-CRcpJ08W.js";import"./useApp-GTt_SpSe.js";import"./index-DCQoplNk.js";import"./Plugin-53t6JYkK.js";import"./useRouteRef-BX83NI39.js";import"./ref-C0VTUPuL.js";import"./lodash-CwBbdt2Q.js";import"./get-V0H7dp1j.js";import"./_baseSlice-DkFNCYmM.js";import"./_arrayReduce-BTs_qt-z.js";import"./toNumber-DwNnq1eP.js";import"./Add-B6okb1nu.js";import"./Grid-BAg5xRXe.js";import"./Box-BCZ-oNFO.js";import"./styled-M6G78zdi.js";import"./TextField-Bu0H7FDm.js";import"./Select-B2-GYoRq.js";import"./index-DnL3XN75.js";import"./Popover-DChvdoSK.js";import"./Modal-U8okL50X.js";import"./Portal-BOPEl2AS.js";import"./List-Bi9QNlgn.js";import"./ListContext-BeBAgmIy.js";import"./formControlState-ByiNFc8I.js";import"./useFormControl-D3C2Wk5g.js";import"./FormLabel-Df28kBPG.js";import"./InputLabel-DLfRVzzq.js";import"./ListItem-6RdgEqss.js";import"./ListItemIcon-8U1XytXM.js";import"./ListItemText-CXoBTj8M.js";import"./Remove-CG0vgzjg.js";import"./useCopyToClipboard-D25QeEOU.js";import"./Button-BPmN-jRE.js";import"./Divider-DdPHUg49.js";import"./FormControlLabel-suhQczZF.js";import"./Checkbox-DAM0HQxk.js";import"./SwitchBase-kgVJw5Ah.js";import"./RadioGroup-BkquCCFJ.js";import"./MenuItem-CltAnAQh.js";import"./translation-D1AItQfW.js";import"./DialogTitle-BQmbuE7I.js";import"./Backdrop-BzFrPm7o.js";import"./Tooltip-h3gwVkfT.js";import"./Popper-DQbZaLLQ.js";import"./createStyles-Bp4GwXob.js";import"./createStyles-yD3y8ldD.js";import"./ListItemAvatar-CzvvA2gD.js";import"./Edit-D0aG6O4c.js";import"./Cancel-hFs4XECl.js";import"./Progress-Du1Y-hAb.js";import"./LinearProgress-BGyidou5.js";import"./ContentHeader-DT9hvrin.js";import"./Helmet-Bc0xIq1y.js";import"./ErrorBoundary-j5l0SlT4.js";import"./ErrorPanel-CviKhMbL.js";import"./WarningPanel-DL5bEf8i.js";import"./ExpandMore-D8nHmAmY.js";import"./AccordionDetails-DPK0aD3x.js";import"./Collapse-Bh_wToR2.js";import"./MarkdownContent-Cd-0px7e.js";import"./CodeSnippet-efFD3yCh.js";import"./CopyTextButton-CXB0NbHV.js";import"./LinkButton-U_UDo8uH.js";import"./Link-DE5azwbI.js";import"./useElementFilter-B1iwM1F1.js";import"./InfoCard-C4UdfDxp.js";import"./CardContent-BIrqtayU.js";import"./CardHeader-mtuq8CPr.js";import"./CardActions-CMnyjTSo.js";import"./BottomLink-DPErq0LZ.js";import"./ArrowForward-BzTQuCuj.js";const x=[{apiVersion:"1",kind:"Component",metadata:{name:"mock-starred-entity",title:"Mock Starred Entity!"}},{apiVersion:"1",kind:"Component",metadata:{name:"mock-starred-entity-2",title:"Mock Starred Entity 2!"}},{apiVersion:"1",kind:"Component",metadata:{name:"mock-starred-entity-3",title:"Mock Starred Entity 3!"}},{apiVersion:"1",kind:"Component",metadata:{name:"mock-starred-entity-4",title:"Mock Starred Entity 4!"}}],k=c({entities:x}),o=new g;o.toggleStarred("component:default/example-starred-entity");o.toggleStarred("component:default/example-starred-entity-2");o.toggleStarred("component:default/example-starred-entity-3");o.toggleStarred("component:default/example-starred-entity-4");const me={title:"Plugins/Home/Templates",decorators:[r=>n(t.jsx(t.Fragment,{children:t.jsx(i,{apis:[[d,k],[w,o],[l,{query:()=>Promise.resolve({results:[]})}],[m,new a({backend:{baseUrl:"https://localhost:7007"}})]],children:t.jsx(r,{})})}),{mountedRoutes:{"/hello-company":p.routes.root,"/catalog/:namespace/:kind/:name":y}})]},e=()=>{const r=[{component:"HomePageSearchBar",x:0,y:0,width:12,height:5},{component:"HomePageRandomJoke",x:0,y:2,width:6,height:16},{component:"HomePageStarredEntities",x:6,y:2,width:6,height:12}];return t.jsxs(h,{config:r,rowHeight:10,children:["// Insert the allowed widgets inside the grid. User can add, organize and // remove the widgets as they want.",t.jsx(s,{}),t.jsx(f,{}),t.jsx(u,{})]})};e.__docgenInfo={description:"",methods:[],displayName:"CustomizableTemplate"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
