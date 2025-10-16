import{j as t,T as a,c,C as g,m as l}from"./iframe-BI8Pro7f.js";import{b as i,r as d}from"./plugin-BCj9g7oI.js";import{S as s}from"./Grid-D8GQJQOJ.js";import{w as u}from"./appWrappers-8kwCd78J.js";import{T as f}from"./TemplateBackstageLogo-DwrrQuiw.js";import"./preload-helper-D9Z9MdNV.js";import"./Plugin-VTsObaPC.js";import"./componentData-CnSLruL9.js";import"./useAnalytics-CQ3GCpgO.js";import"./useApp-Caa8lJd-.js";import"./useRouteRef-DDY5iJZG.js";import"./index-TPQhUIn-.js";import"./InfoCard-S2xfTdg5.js";import"./CardContent-C1-xj4Fz.js";import"./ErrorBoundary-DaKUp-Um.js";import"./ErrorPanel-u63mASRC.js";import"./WarningPanel-CEY9DaGF.js";import"./ExpandMore-EtbpfiOU.js";import"./AccordionDetails-BS-C6m3j.js";import"./index-DnL3XN75.js";import"./Collapse-nmUVSlj4.js";import"./MarkdownContent-DzlTx7FO.js";import"./CodeSnippet-C9E1b8g_.js";import"./Box-3xcahIa0.js";import"./styled-Bjq04UNE.js";import"./CopyTextButton-CoDigqXp.js";import"./useCopyToClipboard-BTA9GA9J.js";import"./useMountedState-CWtvRyiM.js";import"./Tooltip-D1isWZPn.js";import"./Popper-BpExO6xr.js";import"./Portal-Cr5K-csm.js";import"./List-KB2FjxVf.js";import"./ListContext-BkA_XZEO.js";import"./ListItem-Cd4T2JMt.js";import"./ListItemText-VQweID0d.js";import"./LinkButton-Cr7vpNSb.js";import"./Button-BO_R0us_.js";import"./Link-BDnsBgLw.js";import"./lodash-CwBbdt2Q.js";import"./CardHeader-CDAYgnUo.js";import"./Divider-CoYoOfS-.js";import"./CardActions-CWpk0kDm.js";import"./BottomLink-BrIjHtN1.js";import"./ArrowForward-B_QGjUs8.js";import"./DialogTitle-qdpVj7cY.js";import"./Modal-vWbjNuKz.js";import"./Backdrop-Dyx9riUj.js";import"./useObservable-ZXyvSosG.js";import"./useIsomorphicLayoutEffect-ATJiyFtY.js";import"./useAsync-CQa60u-D.js";import"./isSymbol-DhO4cmIY.js";import"./isObject--vsEa_js.js";import"./toString-Cr1IARFv.js";const yo={title:"Plugins/Home/Components/CompanyLogo",decorators:[o=>u(t.jsx(a,{apis:[[c,new g({app:{title:"My App"}})]],children:t.jsx(o,{})}),{mountedRoutes:{"/hello-company-logo":d}})]},n=l(o=>({container:{margin:o.spacing(5,0)},svg:{width:"auto",height:100},path:{fill:"#7df3e1"}})),r=()=>{const{container:o}=n();return t.jsx(s,{container:!0,justifyContent:"center",spacing:6,children:t.jsx(i,{className:o})})},e=()=>{const{container:o,svg:m,path:p}=n();return t.jsx(s,{container:!0,justifyContent:"center",spacing:6,children:t.jsx(i,{className:o,logo:t.jsx(f,{classes:{svg:m,path:p}})})})};r.__docgenInfo={description:"",methods:[],displayName:"Default"};e.__docgenInfo={description:"",methods:[],displayName:"CustomLogo"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
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
