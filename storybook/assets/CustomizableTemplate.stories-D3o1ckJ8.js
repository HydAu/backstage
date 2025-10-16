import{j as t,T as i,c as m,C as a}from"./iframe-BI8Pro7f.js";import{w as n}from"./appWrappers-8kwCd78J.js";import{s as p,H as s}from"./plugin-2ObEar55.js";import{c as d}from"./api-CQJWa0ia.js";import{c}from"./catalogApiMock-CBTwzuH2.js";import{M as g}from"./MockStarredEntitiesApi-D2e5H90X.js";import{s as l}from"./api-CHJ9Yzpy.js";import{C as h}from"./CustomHomepageGrid-BPAE7TDo.js";import{H as f,a as u}from"./plugin-BCj9g7oI.js";import{e as y}from"./routes-BWjOLwFc.js";import{s as w}from"./StarredEntitiesApi-ebdeTNWU.js";import"./preload-helper-D9Z9MdNV.js";import"./useObservable-ZXyvSosG.js";import"./useIsomorphicLayoutEffect-ATJiyFtY.js";import"./useAnalytics-CQ3GCpgO.js";import"./useAsync-CQa60u-D.js";import"./useMountedState-CWtvRyiM.js";import"./componentData-CnSLruL9.js";import"./isSymbol-DhO4cmIY.js";import"./isObject--vsEa_js.js";import"./toString-Cr1IARFv.js";import"./index-TPQhUIn-.js";import"./useApp-Caa8lJd-.js";import"./index-WlzhBlPq.js";import"./Plugin-VTsObaPC.js";import"./useRouteRef-DDY5iJZG.js";import"./ref-C0VTUPuL.js";import"./lodash-CwBbdt2Q.js";import"./get-OpXnpmIC.js";import"./_baseSlice-DkFNCYmM.js";import"./_arrayReduce-BTs_qt-z.js";import"./toNumber-DwNnq1eP.js";import"./Add-D5EtVyDH.js";import"./Grid-D8GQJQOJ.js";import"./Box-3xcahIa0.js";import"./styled-Bjq04UNE.js";import"./TextField-yPl-jeAU.js";import"./Select-DzvUVSuE.js";import"./index-DnL3XN75.js";import"./Popover-y-Pu31St.js";import"./Modal-vWbjNuKz.js";import"./Portal-Cr5K-csm.js";import"./List-KB2FjxVf.js";import"./ListContext-BkA_XZEO.js";import"./formControlState-ByiNFc8I.js";import"./useFormControl-ChPwBR1i.js";import"./FormLabel-DVBYErSN.js";import"./InputLabel-DoD7pIq_.js";import"./ListItem-Cd4T2JMt.js";import"./ListItemIcon-DBPfzFTO.js";import"./ListItemText-VQweID0d.js";import"./Remove-BWS9X-3L.js";import"./useCopyToClipboard-BTA9GA9J.js";import"./Button-BO_R0us_.js";import"./Divider-CoYoOfS-.js";import"./FormControlLabel-Dx1a-FXC.js";import"./Checkbox-DetZwCqh.js";import"./SwitchBase-DX_LYSTB.js";import"./RadioGroup-BlTPgGa8.js";import"./MenuItem-CYrMwbLb.js";import"./translation-D7TY_ICt.js";import"./DialogTitle-qdpVj7cY.js";import"./Backdrop-Dyx9riUj.js";import"./Tooltip-D1isWZPn.js";import"./Popper-BpExO6xr.js";import"./createStyles-Bp4GwXob.js";import"./createStyles-yD3y8ldD.js";import"./ListItemAvatar-BdMoBhtB.js";import"./Edit-DcPKRa0D.js";import"./Cancel-B5D_BmST.js";import"./Progress-CMEUl5Bv.js";import"./LinearProgress-APEwFs9t.js";import"./ContentHeader-Cbms9_bi.js";import"./Helmet-BFFRyIRq.js";import"./ErrorBoundary-DaKUp-Um.js";import"./ErrorPanel-u63mASRC.js";import"./WarningPanel-CEY9DaGF.js";import"./ExpandMore-EtbpfiOU.js";import"./AccordionDetails-BS-C6m3j.js";import"./Collapse-nmUVSlj4.js";import"./MarkdownContent-DzlTx7FO.js";import"./CodeSnippet-C9E1b8g_.js";import"./CopyTextButton-CoDigqXp.js";import"./LinkButton-Cr7vpNSb.js";import"./Link-BDnsBgLw.js";import"./useElementFilter-BrtOOdKX.js";import"./InfoCard-S2xfTdg5.js";import"./CardContent-C1-xj4Fz.js";import"./CardHeader-CDAYgnUo.js";import"./CardActions-CWpk0kDm.js";import"./BottomLink-BrIjHtN1.js";import"./ArrowForward-B_QGjUs8.js";const x=[{apiVersion:"1",kind:"Component",metadata:{name:"mock-starred-entity",title:"Mock Starred Entity!"}},{apiVersion:"1",kind:"Component",metadata:{name:"mock-starred-entity-2",title:"Mock Starred Entity 2!"}},{apiVersion:"1",kind:"Component",metadata:{name:"mock-starred-entity-3",title:"Mock Starred Entity 3!"}},{apiVersion:"1",kind:"Component",metadata:{name:"mock-starred-entity-4",title:"Mock Starred Entity 4!"}}],k=c({entities:x}),o=new g;o.toggleStarred("component:default/example-starred-entity");o.toggleStarred("component:default/example-starred-entity-2");o.toggleStarred("component:default/example-starred-entity-3");o.toggleStarred("component:default/example-starred-entity-4");const me={title:"Plugins/Home/Templates",decorators:[r=>n(t.jsx(t.Fragment,{children:t.jsx(i,{apis:[[d,k],[w,o],[l,{query:()=>Promise.resolve({results:[]})}],[m,new a({backend:{baseUrl:"https://localhost:7007"}})]],children:t.jsx(r,{})})}),{mountedRoutes:{"/hello-company":p.routes.root,"/catalog/:namespace/:kind/:name":y}})]},e=()=>{const r=[{component:"HomePageSearchBar",x:0,y:0,width:12,height:5},{component:"HomePageRandomJoke",x:0,y:2,width:6,height:16},{component:"HomePageStarredEntities",x:6,y:2,width:6,height:12}];return t.jsxs(h,{config:r,rowHeight:10,children:["// Insert the allowed widgets inside the grid. User can add, organize and // remove the widgets as they want.",t.jsx(s,{}),t.jsx(f,{}),t.jsx(u,{})]})};e.__docgenInfo={description:"",methods:[],displayName:"CustomizableTemplate"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
