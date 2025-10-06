import{j as t,T as i,c as m,C as a}from"./iframe-B4X6F_0x.js";import{w as n}from"./appWrappers-CeFc1Cvg.js";import{s as p,H as s}from"./plugin-CMnPVaO1.js";import{c as d}from"./api-Ci6Bekr0.js";import{c}from"./catalogApiMock-Ch3LGmZ3.js";import{M as g}from"./MockStarredEntitiesApi-tLHCztpj.js";import{s as l}from"./api-BowG0gUM.js";import{C as h}from"./CustomHomepageGrid-BDNZGaTz.js";import{H as f,a as u}from"./plugin-BZUoGVgB.js";import{e as y}from"./routes-BiVI9jmq.js";import{s as w}from"./StarredEntitiesApi-CFXhQV7h.js";import"./preload-helper-D9Z9MdNV.js";import"./useObservable-NmSlnAuU.js";import"./useIsomorphicLayoutEffect-BCnlwChY.js";import"./useAnalytics-BSNcizch.js";import"./useAsync-C_m9R5PV.js";import"./useMountedState-CnI8azb6.js";import"./componentData-J6B2uOlU.js";import"./isSymbol-DhO4cmIY.js";import"./isObject--vsEa_js.js";import"./toString-Cr1IARFv.js";import"./index-NOhwhBBM.js";import"./useApp-DGYHvcrQ.js";import"./index-DIdMqwtI.js";import"./Plugin-CdMpVrep.js";import"./useRouteRef-CmW6B4H-.js";import"./ref-C0VTUPuL.js";import"./lodash-CwBbdt2Q.js";import"./get-txPiXPD3.js";import"./_baseSlice-DkFNCYmM.js";import"./_arrayReduce-BTs_qt-z.js";import"./toNumber-DwNnq1eP.js";import"./Add-DjNLH6Jd.js";import"./Grid-ZwJT3o21.js";import"./Box-CM-weRMN.js";import"./styled-CVRYyI1J.js";import"./TextField-De1gxWAA.js";import"./Select-B29Q9Cz5.js";import"./index-DnL3XN75.js";import"./Popover-DacelEVl.js";import"./Modal-2fo1PxSM.js";import"./Portal-CIuAqJxF.js";import"./List-vwHRiwvk.js";import"./ListContext-BKyvF85M.js";import"./formControlState-ByiNFc8I.js";import"./useFormControl-EK911bBs.js";import"./FormLabel-HlB1Aj1Z.js";import"./InputLabel-CqBYomX2.js";import"./ListItem-QaFfVGPd.js";import"./ListItemIcon-Pkd8oR80.js";import"./ListItemText-wAc4HvDm.js";import"./Remove-BwxK6vnc.js";import"./useCopyToClipboard-VqbKvAXq.js";import"./Button-ZQtLd7ms.js";import"./Divider-BxdCXeWj.js";import"./FormControlLabel-CwV05frO.js";import"./Checkbox-BNBlKE1M.js";import"./SwitchBase-CmZ0f_L_.js";import"./RadioGroup-NIxP5C-Y.js";import"./MenuItem-DEvu9dAp.js";import"./translation-DMTitM5x.js";import"./DialogTitle-BEbL0zeX.js";import"./Backdrop-B-5U3nyc.js";import"./Tooltip-BMIOv8Ue.js";import"./Popper-CK-yREM8.js";import"./createStyles-Bp4GwXob.js";import"./createStyles-yD3y8ldD.js";import"./ListItemAvatar-hVbLR5RF.js";import"./Edit-DzbefBiw.js";import"./Cancel-DLUGrIXE.js";import"./Progress-izDX7a1X.js";import"./LinearProgress-YI6W4RYW.js";import"./ContentHeader-D8fJwBDC.js";import"./Helmet-cjBztiP3.js";import"./ErrorBoundary-Bpo1UDT9.js";import"./ErrorPanel-x2Exa-vN.js";import"./WarningPanel-BSlzZ-z1.js";import"./ExpandMore-Bc1vnfZW.js";import"./AccordionDetails-DdV6AcrO.js";import"./Collapse-CkfWvcnj.js";import"./MarkdownContent-DxpfpkJA.js";import"./CodeSnippet-CK3MA9Mp.js";import"./CopyTextButton-BdOgsKDJ.js";import"./LinkButton-Dvus2elg.js";import"./Link-B2TbD7aZ.js";import"./useElementFilter-BJluBSXw.js";import"./InfoCard-C-ZJpiAQ.js";import"./CardContent-BROMGHLL.js";import"./CardHeader-DkvWbnlo.js";import"./CardActions-BOFCJdv1.js";import"./BottomLink-DMYoolon.js";import"./ArrowForward-Dvlb0E-q.js";const x=[{apiVersion:"1",kind:"Component",metadata:{name:"mock-starred-entity",title:"Mock Starred Entity!"}},{apiVersion:"1",kind:"Component",metadata:{name:"mock-starred-entity-2",title:"Mock Starred Entity 2!"}},{apiVersion:"1",kind:"Component",metadata:{name:"mock-starred-entity-3",title:"Mock Starred Entity 3!"}},{apiVersion:"1",kind:"Component",metadata:{name:"mock-starred-entity-4",title:"Mock Starred Entity 4!"}}],k=c({entities:x}),o=new g;o.toggleStarred("component:default/example-starred-entity");o.toggleStarred("component:default/example-starred-entity-2");o.toggleStarred("component:default/example-starred-entity-3");o.toggleStarred("component:default/example-starred-entity-4");const me={title:"Plugins/Home/Templates",decorators:[r=>n(t.jsx(t.Fragment,{children:t.jsx(i,{apis:[[d,k],[w,o],[l,{query:()=>Promise.resolve({results:[]})}],[m,new a({backend:{baseUrl:"https://localhost:7007"}})]],children:t.jsx(r,{})})}),{mountedRoutes:{"/hello-company":p.routes.root,"/catalog/:namespace/:kind/:name":y}})]},e=()=>{const r=[{component:"HomePageSearchBar",x:0,y:0,width:12,height:5},{component:"HomePageRandomJoke",x:0,y:2,width:6,height:16},{component:"HomePageStarredEntities",x:6,y:2,width:6,height:12}];return t.jsxs(h,{config:r,rowHeight:10,children:["// Insert the allowed widgets inside the grid. User can add, organize and // remove the widgets as they want.",t.jsx(s,{}),t.jsx(f,{}),t.jsx(u,{})]})};e.__docgenInfo={description:"",methods:[],displayName:"CustomizableTemplate"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
