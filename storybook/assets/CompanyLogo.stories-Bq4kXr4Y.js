import{j as t,T as a,c,C as g,m as l}from"./iframe-tbK3y8nX.js";import{b as i,r as d}from"./plugin-DVX7KkLi.js";import{S as s}from"./Grid-BAg5xRXe.js";import{w as u}from"./appWrappers-BOPSHKwj.js";import{T as f}from"./TemplateBackstageLogo-BW1RC2ql.js";import"./preload-helper-D9Z9MdNV.js";import"./Plugin-53t6JYkK.js";import"./componentData-BJunciA8.js";import"./useAnalytics-Ca8LGS_G.js";import"./useApp-GTt_SpSe.js";import"./useRouteRef-BX83NI39.js";import"./index-CRcpJ08W.js";import"./InfoCard-C4UdfDxp.js";import"./CardContent-BIrqtayU.js";import"./ErrorBoundary-j5l0SlT4.js";import"./ErrorPanel-CviKhMbL.js";import"./WarningPanel-DL5bEf8i.js";import"./ExpandMore-D8nHmAmY.js";import"./AccordionDetails-DPK0aD3x.js";import"./index-DnL3XN75.js";import"./Collapse-Bh_wToR2.js";import"./MarkdownContent-Cd-0px7e.js";import"./CodeSnippet-efFD3yCh.js";import"./Box-BCZ-oNFO.js";import"./styled-M6G78zdi.js";import"./CopyTextButton-CXB0NbHV.js";import"./useCopyToClipboard-D25QeEOU.js";import"./useMountedState-Csiy-iGP.js";import"./Tooltip-h3gwVkfT.js";import"./Popper-DQbZaLLQ.js";import"./Portal-BOPEl2AS.js";import"./List-Bi9QNlgn.js";import"./ListContext-BeBAgmIy.js";import"./ListItem-6RdgEqss.js";import"./ListItemText-CXoBTj8M.js";import"./LinkButton-U_UDo8uH.js";import"./Button-BPmN-jRE.js";import"./Link-DE5azwbI.js";import"./lodash-CwBbdt2Q.js";import"./CardHeader-mtuq8CPr.js";import"./Divider-DdPHUg49.js";import"./CardActions-CMnyjTSo.js";import"./BottomLink-DPErq0LZ.js";import"./ArrowForward-BzTQuCuj.js";import"./DialogTitle-BQmbuE7I.js";import"./Modal-U8okL50X.js";import"./Backdrop-BzFrPm7o.js";import"./useObservable-nEL5u-FZ.js";import"./useIsomorphicLayoutEffect-C-K5d2D6.js";import"./useAsync-BLvygtRZ.js";import"./isSymbol-DhO4cmIY.js";import"./isObject--vsEa_js.js";import"./toString-Cr1IARFv.js";const yo={title:"Plugins/Home/Components/CompanyLogo",decorators:[o=>u(t.jsx(a,{apis:[[c,new g({app:{title:"My App"}})]],children:t.jsx(o,{})}),{mountedRoutes:{"/hello-company-logo":d}})]},n=l(o=>({container:{margin:o.spacing(5,0)},svg:{width:"auto",height:100},path:{fill:"#7df3e1"}})),r=()=>{const{container:o}=n();return t.jsx(s,{container:!0,justifyContent:"center",spacing:6,children:t.jsx(i,{className:o})})},e=()=>{const{container:o,svg:m,path:p}=n();return t.jsx(s,{container:!0,justifyContent:"center",spacing:6,children:t.jsx(i,{className:o,logo:t.jsx(f,{classes:{svg:m,path:p}})})})};r.__docgenInfo={description:"",methods:[],displayName:"Default"};e.__docgenInfo={description:"",methods:[],displayName:"CustomLogo"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
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
