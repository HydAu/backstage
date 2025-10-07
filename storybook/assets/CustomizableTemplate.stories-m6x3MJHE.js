import{j as t,T as i,c as m,C as a}from"./iframe-jWBis4h7.js";import{w as n}from"./appWrappers-C7U-7ZHS.js";import{s as p,H as s}from"./plugin-DAtIdSk0.js";import{c as d}from"./api-D7KbID2x.js";import{c}from"./catalogApiMock-DUDeehsR.js";import{M as g}from"./MockStarredEntitiesApi-B1R3cZ4e.js";import{s as l}from"./api-DKvEHlVi.js";import{C as h}from"./CustomHomepageGrid-YqfTAnbT.js";import{H as f,a as u}from"./plugin-h3g_Okye.js";import{e as y}from"./routes-B5lWfETC.js";import{s as w}from"./StarredEntitiesApi-DX_fiwmF.js";import"./preload-helper-D9Z9MdNV.js";import"./useObservable-D5YF_B8Z.js";import"./useIsomorphicLayoutEffect-BdGY38Vk.js";import"./useAnalytics-jlg0poIO.js";import"./useAsync-vaYznZ30.js";import"./useMountedState-Cvh7ngWP.js";import"./componentData-DS2TgQM3.js";import"./isSymbol-DhO4cmIY.js";import"./isObject--vsEa_js.js";import"./toString-Cr1IARFv.js";import"./index-D-vQ19kG.js";import"./useApp-CwBIww-_.js";import"./index-BLwk-Kem.js";import"./Plugin-B5tIYXE1.js";import"./useRouteRef-CyRjGecq.js";import"./ref-C0VTUPuL.js";import"./lodash-CwBbdt2Q.js";import"./get-B4i4iXN2.js";import"./_baseSlice-DkFNCYmM.js";import"./_arrayReduce-BTs_qt-z.js";import"./toNumber-DwNnq1eP.js";import"./Add-DoGkUM9v.js";import"./Grid-D8aYrpF9.js";import"./Box-CUCIIvBq.js";import"./styled-DEXT6Cl3.js";import"./TextField-B8MGBn1B.js";import"./Select-DBHkhuA8.js";import"./index-DnL3XN75.js";import"./Popover-Cipv1uQu.js";import"./Modal-D5_FmyLm.js";import"./Portal-4KhuVP8U.js";import"./List-DRbnC8gb.js";import"./ListContext-BUzb9c6E.js";import"./formControlState-ByiNFc8I.js";import"./useFormControl-DK_f_k8A.js";import"./FormLabel-BufvR897.js";import"./InputLabel-BxE7SksL.js";import"./ListItem-D85OCTFr.js";import"./ListItemIcon-DXS1108e.js";import"./ListItemText-C8hT2w5k.js";import"./Remove-Bp-CSi7v.js";import"./useCopyToClipboard-vfU7HED5.js";import"./Button-DBGk0ho8.js";import"./Divider-bZzN0Vut.js";import"./FormControlLabel-BNUbgWHq.js";import"./Checkbox-B64siRKW.js";import"./SwitchBase-BptSELIf.js";import"./RadioGroup-Dop77JVP.js";import"./MenuItem-BnOyGaY-.js";import"./translation-C7o6JZjr.js";import"./DialogTitle-DNYHgUxA.js";import"./Backdrop-CL5Nu-FS.js";import"./Tooltip-BbJdzgrj.js";import"./Popper-CmiAw98y.js";import"./createStyles-Bp4GwXob.js";import"./createStyles-yD3y8ldD.js";import"./ListItemAvatar-BQvUkMRS.js";import"./Edit-CR7_ptED.js";import"./Cancel-CulVE98Z.js";import"./Progress-BgzBg2_z.js";import"./LinearProgress-YQjcKaKO.js";import"./ContentHeader-DPFNpMW2.js";import"./Helmet-BZ0kdgXz.js";import"./ErrorBoundary-DU-IqrY3.js";import"./ErrorPanel-D2vNcph3.js";import"./WarningPanel-ptGc0XmP.js";import"./ExpandMore-h50IjFe8.js";import"./AccordionDetails-Cs-BCEd9.js";import"./Collapse-zBcmKg9Q.js";import"./MarkdownContent-Df7rUt_g.js";import"./CodeSnippet-uFx7jUsz.js";import"./CopyTextButton-BSsLec9-.js";import"./LinkButton-YkwrfMI6.js";import"./Link-CsUbik3L.js";import"./useElementFilter-CnC5NXcr.js";import"./InfoCard-DWBgl02k.js";import"./CardContent-Cg0ghrXT.js";import"./CardHeader-DaKYuR3-.js";import"./CardActions-D40s2DFb.js";import"./BottomLink-TPoBdtDt.js";import"./ArrowForward-KHtjW8ra.js";const x=[{apiVersion:"1",kind:"Component",metadata:{name:"mock-starred-entity",title:"Mock Starred Entity!"}},{apiVersion:"1",kind:"Component",metadata:{name:"mock-starred-entity-2",title:"Mock Starred Entity 2!"}},{apiVersion:"1",kind:"Component",metadata:{name:"mock-starred-entity-3",title:"Mock Starred Entity 3!"}},{apiVersion:"1",kind:"Component",metadata:{name:"mock-starred-entity-4",title:"Mock Starred Entity 4!"}}],k=c({entities:x}),o=new g;o.toggleStarred("component:default/example-starred-entity");o.toggleStarred("component:default/example-starred-entity-2");o.toggleStarred("component:default/example-starred-entity-3");o.toggleStarred("component:default/example-starred-entity-4");const me={title:"Plugins/Home/Templates",decorators:[r=>n(t.jsx(t.Fragment,{children:t.jsx(i,{apis:[[d,k],[w,o],[l,{query:()=>Promise.resolve({results:[]})}],[m,new a({backend:{baseUrl:"https://localhost:7007"}})]],children:t.jsx(r,{})})}),{mountedRoutes:{"/hello-company":p.routes.root,"/catalog/:namespace/:kind/:name":y}})]},e=()=>{const r=[{component:"HomePageSearchBar",x:0,y:0,width:12,height:5},{component:"HomePageRandomJoke",x:0,y:2,width:6,height:16},{component:"HomePageStarredEntities",x:6,y:2,width:6,height:12}];return t.jsxs(h,{config:r,rowHeight:10,children:["// Insert the allowed widgets inside the grid. User can add, organize and // remove the widgets as they want.",t.jsx(s,{}),t.jsx(f,{}),t.jsx(u,{})]})};e.__docgenInfo={description:"",methods:[],displayName:"CustomizableTemplate"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
