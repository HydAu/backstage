import{j as t,T as a,c,C as g,m as l}from"./iframe-CitiFnN5.js";import{b as i,r as d}from"./plugin-BeJvANSL.js";import{S as s}from"./Grid-DpKvFoNc.js";import{w as u}from"./appWrappers-DqiUoBg7.js";import{T as f}from"./TemplateBackstageLogo-C3GCwL9L.js";import"./preload-helper-D9Z9MdNV.js";import"./Plugin-h_HGQPkP.js";import"./componentData-C_a9Rk_9.js";import"./useAnalytics-8chgUF4h.js";import"./useApp-DKlj7zYu.js";import"./useRouteRef-CAQN4j2A.js";import"./index-fphZrsnp.js";import"./InfoCard-CAKG5LrL.js";import"./CardContent-BBilV-uY.js";import"./ErrorBoundary-Dgfqtr43.js";import"./ErrorPanel-ChpIJ875.js";import"./WarningPanel-CLvK_CXa.js";import"./ExpandMore-Cdp8R-_v.js";import"./AccordionDetails-c8bsqLtz.js";import"./index-DnL3XN75.js";import"./Collapse-CgrQvPiJ.js";import"./MarkdownContent-DfHnauBf.js";import"./CodeSnippet-D5EYBXfs.js";import"./Box-BKmfHdf8.js";import"./styled-CI8mNsbD.js";import"./CopyTextButton-GAOyp82e.js";import"./useCopyToClipboard-LAmPqqHW.js";import"./useMountedState-BHqHaaST.js";import"./Tooltip-29C2-qED.js";import"./Popper-CC3GX7Gx.js";import"./Portal-CLxHSMha.js";import"./List-CIibtwkv.js";import"./ListContext-BOtrsLMB.js";import"./ListItem-Cazl4cxi.js";import"./ListItemText-BSZhigQo.js";import"./LinkButton-DvgMeH9Q.js";import"./Button-CzOtIHxI.js";import"./Link-BfePrfSY.js";import"./lodash-CwBbdt2Q.js";import"./CardHeader-BDNBuNZ7.js";import"./Divider-0w2V0l6l.js";import"./CardActions-DJgCAChb.js";import"./BottomLink-Dm-Btg_P.js";import"./ArrowForward-DL82-bNW.js";import"./DialogTitle-Df7jxE3g.js";import"./Modal-B9Dxx05R.js";import"./Backdrop-CeRYgHkr.js";import"./useObservable-B7G4XzLu.js";import"./useIsomorphicLayoutEffect-CTYGaF45.js";import"./useAsync-Cfc7VOKF.js";import"./isSymbol-DhO4cmIY.js";import"./isObject--vsEa_js.js";import"./toString-Cr1IARFv.js";const yo={title:"Plugins/Home/Components/CompanyLogo",decorators:[o=>u(t.jsx(a,{apis:[[c,new g({app:{title:"My App"}})]],children:t.jsx(o,{})}),{mountedRoutes:{"/hello-company-logo":d}})]},n=l(o=>({container:{margin:o.spacing(5,0)},svg:{width:"auto",height:100},path:{fill:"#7df3e1"}})),r=()=>{const{container:o}=n();return t.jsx(s,{container:!0,justifyContent:"center",spacing:6,children:t.jsx(i,{className:o})})},e=()=>{const{container:o,svg:m,path:p}=n();return t.jsx(s,{container:!0,justifyContent:"center",spacing:6,children:t.jsx(i,{className:o,logo:t.jsx(f,{classes:{svg:m,path:p}})})})};r.__docgenInfo={description:"",methods:[],displayName:"Default"};e.__docgenInfo={description:"",methods:[],displayName:"CustomLogo"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
  const {
    container
  } = useLogoStyles();
  return <Grid container justifyContent="center" spacing={6}>
      <HomePageCompanyLogo className={container} />
    </Grid>;
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
  const {
    container,
    svg,
    path
  } = useLogoStyles();
  return <Grid container justifyContent="center" spacing={6}>
      <HomePageCompanyLogo className={container} logo={<TemplateBackstageLogo classes={{
      svg,
      path
    }} />} />
    </Grid>;
}`,...e.parameters?.docs?.source}}};const Co=["Default","CustomLogo"];export{e as CustomLogo,r as Default,Co as __namedExportsOrder,yo as default};
