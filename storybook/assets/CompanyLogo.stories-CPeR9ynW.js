import{j as t,T as a,c,C as g,m as l}from"./iframe-ClDSU7eH.js";import{b as i,r as d}from"./plugin-D5Zk9YT7.js";import{S as s}from"./Grid-mV-QABlU.js";import{w as u}from"./appWrappers-G-Ndam_a.js";import{T as f}from"./TemplateBackstageLogo-DhYif7OM.js";import"./preload-helper-D9Z9MdNV.js";import"./Plugin-CRqfFxk-.js";import"./componentData-CDZy28Da.js";import"./useAnalytics-B-0cQkPi.js";import"./useApp-B8hr0lnh.js";import"./useRouteRef-Pbj2lDBT.js";import"./index-H5rrlhPB.js";import"./InfoCard-DTvhDQH8.js";import"./CardContent-CH1Xj1W3.js";import"./ErrorBoundary-DqTj9Q6K.js";import"./ErrorPanel-fEQPUK4N.js";import"./WarningPanel-MWDdRggK.js";import"./ExpandMore-C1RCBmqn.js";import"./AccordionDetails-BRRfNhN6.js";import"./index-DnL3XN75.js";import"./Collapse-D-ZHo9zW.js";import"./MarkdownContent-hcF9jGOf.js";import"./CodeSnippet-C1NCP6TT.js";import"./Box-Cxljpaoo.js";import"./styled-BqebAAUt.js";import"./CopyTextButton-qppcfNHS.js";import"./useCopyToClipboard-CJScTRHQ.js";import"./useMountedState-FFkX5aJt.js";import"./Tooltip-C4VBCydo.js";import"./Popper-BXtW4PiG.js";import"./Portal-DmQDyavD.js";import"./List-BbkLtEZF.js";import"./ListContext-CmA_1Vly.js";import"./ListItem-dodDOH8z.js";import"./ListItemText-CITdacPb.js";import"./LinkButton-B8kC82TM.js";import"./Button-BLajmhZP.js";import"./Link-CtlywKiK.js";import"./lodash-CwBbdt2Q.js";import"./CardHeader-BCVduPWX.js";import"./Divider-BXbuj0VG.js";import"./CardActions-CbH8no58.js";import"./BottomLink-CaVdpOph.js";import"./ArrowForward-CUrEzInL.js";import"./DialogTitle-DANsDeHD.js";import"./Modal-C7JUlgaL.js";import"./Backdrop-DMfQwbB0.js";import"./useObservable-B2nZnJvA.js";import"./useIsomorphicLayoutEffect-qXS2XSMG.js";import"./useAsync-Dsvu6Zfc.js";import"./isSymbol-DhO4cmIY.js";import"./isObject--vsEa_js.js";import"./toString-Cr1IARFv.js";const yo={title:"Plugins/Home/Components/CompanyLogo",decorators:[o=>u(t.jsx(a,{apis:[[c,new g({app:{title:"My App"}})]],children:t.jsx(o,{})}),{mountedRoutes:{"/hello-company-logo":d}})]},n=l(o=>({container:{margin:o.spacing(5,0)},svg:{width:"auto",height:100},path:{fill:"#7df3e1"}})),r=()=>{const{container:o}=n();return t.jsx(s,{container:!0,justifyContent:"center",spacing:6,children:t.jsx(i,{className:o})})},e=()=>{const{container:o,svg:m,path:p}=n();return t.jsx(s,{container:!0,justifyContent:"center",spacing:6,children:t.jsx(i,{className:o,logo:t.jsx(f,{classes:{svg:m,path:p}})})})};r.__docgenInfo={description:"",methods:[],displayName:"Default"};e.__docgenInfo={description:"",methods:[],displayName:"CustomLogo"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
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
