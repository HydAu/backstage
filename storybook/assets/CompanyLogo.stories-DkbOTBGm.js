import{j as t,T as a,c,C as g,m as l}from"./iframe-CHsD2EuT.js";import{b as i,r as d}from"./plugin-DDUm-ETs.js";import{S as s}from"./Grid-ShkV1KIY.js";import{w as u}from"./appWrappers-DdqkYj_x.js";import{T as f}from"./TemplateBackstageLogo-DMCX2Xk8.js";import"./preload-helper-D9Z9MdNV.js";import"./Plugin-Dxyd2zRR.js";import"./componentData-Bsx2Sq2E.js";import"./useAnalytics-PRgVyvQF.js";import"./useApp-DVBgpSzn.js";import"./useRouteRef-C49oh3N9.js";import"./index-BbHI1k2U.js";import"./InfoCard-CU_5qpxl.js";import"./CardContent-bJ-CXyTY.js";import"./ErrorBoundary-vK85FkW3.js";import"./ErrorPanel-Dnl_aQhG.js";import"./WarningPanel-BxPgKWwp.js";import"./ExpandMore-ryDetQO2.js";import"./AccordionDetails-BLk7viYh.js";import"./index-DnL3XN75.js";import"./Collapse-iwZJRoUB.js";import"./MarkdownContent-CFTu1ttj.js";import"./CodeSnippet-CuwiwxVy.js";import"./Box-CdGM7Pq7.js";import"./styled-cbCynbc2.js";import"./CopyTextButton-BLoSRqG-.js";import"./useCopyToClipboard-BhXIQ6T9.js";import"./useMountedState-FxyCjszr.js";import"./Tooltip-B0mFDu31.js";import"./Popper-DoUxk0PL.js";import"./Portal-BvSrCYBr.js";import"./List-DpjcHGvZ.js";import"./ListContext-BvqkXl1b.js";import"./ListItem-ChSdJMdN.js";import"./ListItemText-US31LzOX.js";import"./LinkButton-BOWrUvJF.js";import"./Button-C55tn8MB.js";import"./Link-BsDlIoMM.js";import"./lodash-CwBbdt2Q.js";import"./CardHeader-DE8nBtzv.js";import"./Divider-B4ERPYwJ.js";import"./CardActions-NmW9zLLV.js";import"./BottomLink-JtJM1Iqq.js";import"./ArrowForward-DiNxIYET.js";import"./DialogTitle-54qp_4M8.js";import"./Modal-BJrfhbcK.js";import"./Backdrop-DDYLbR3E.js";import"./useObservable-D2AqWyv1.js";import"./useIsomorphicLayoutEffect-CyS7kGyR.js";import"./useAsync-C9BZ69ng.js";import"./isSymbol-DhO4cmIY.js";import"./isObject--vsEa_js.js";import"./toString-Cr1IARFv.js";const yo={title:"Plugins/Home/Components/CompanyLogo",decorators:[o=>u(t.jsx(a,{apis:[[c,new g({app:{title:"My App"}})]],children:t.jsx(o,{})}),{mountedRoutes:{"/hello-company-logo":d}})]},n=l(o=>({container:{margin:o.spacing(5,0)},svg:{width:"auto",height:100},path:{fill:"#7df3e1"}})),r=()=>{const{container:o}=n();return t.jsx(s,{container:!0,justifyContent:"center",spacing:6,children:t.jsx(i,{className:o})})},e=()=>{const{container:o,svg:m,path:p}=n();return t.jsx(s,{container:!0,justifyContent:"center",spacing:6,children:t.jsx(i,{className:o,logo:t.jsx(f,{classes:{svg:m,path:p}})})})};r.__docgenInfo={description:"",methods:[],displayName:"Default"};e.__docgenInfo={description:"",methods:[],displayName:"CustomLogo"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
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
