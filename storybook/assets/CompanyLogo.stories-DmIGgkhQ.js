import{j as t,T as a,c,C as g,m as l}from"./iframe-jWBis4h7.js";import{b as i,r as d}from"./plugin-h3g_Okye.js";import{S as s}from"./Grid-D8aYrpF9.js";import{w as u}from"./appWrappers-C7U-7ZHS.js";import{T as f}from"./TemplateBackstageLogo-tVojUqfV.js";import"./preload-helper-D9Z9MdNV.js";import"./Plugin-B5tIYXE1.js";import"./componentData-DS2TgQM3.js";import"./useAnalytics-jlg0poIO.js";import"./useApp-CwBIww-_.js";import"./useRouteRef-CyRjGecq.js";import"./index-D-vQ19kG.js";import"./InfoCard-DWBgl02k.js";import"./CardContent-Cg0ghrXT.js";import"./ErrorBoundary-DU-IqrY3.js";import"./ErrorPanel-D2vNcph3.js";import"./WarningPanel-ptGc0XmP.js";import"./ExpandMore-h50IjFe8.js";import"./AccordionDetails-Cs-BCEd9.js";import"./index-DnL3XN75.js";import"./Collapse-zBcmKg9Q.js";import"./MarkdownContent-Df7rUt_g.js";import"./CodeSnippet-uFx7jUsz.js";import"./Box-CUCIIvBq.js";import"./styled-DEXT6Cl3.js";import"./CopyTextButton-BSsLec9-.js";import"./useCopyToClipboard-vfU7HED5.js";import"./useMountedState-Cvh7ngWP.js";import"./Tooltip-BbJdzgrj.js";import"./Popper-CmiAw98y.js";import"./Portal-4KhuVP8U.js";import"./List-DRbnC8gb.js";import"./ListContext-BUzb9c6E.js";import"./ListItem-D85OCTFr.js";import"./ListItemText-C8hT2w5k.js";import"./LinkButton-YkwrfMI6.js";import"./Button-DBGk0ho8.js";import"./Link-CsUbik3L.js";import"./lodash-CwBbdt2Q.js";import"./CardHeader-DaKYuR3-.js";import"./Divider-bZzN0Vut.js";import"./CardActions-D40s2DFb.js";import"./BottomLink-TPoBdtDt.js";import"./ArrowForward-KHtjW8ra.js";import"./DialogTitle-DNYHgUxA.js";import"./Modal-D5_FmyLm.js";import"./Backdrop-CL5Nu-FS.js";import"./useObservable-D5YF_B8Z.js";import"./useIsomorphicLayoutEffect-BdGY38Vk.js";import"./useAsync-vaYznZ30.js";import"./isSymbol-DhO4cmIY.js";import"./isObject--vsEa_js.js";import"./toString-Cr1IARFv.js";const yo={title:"Plugins/Home/Components/CompanyLogo",decorators:[o=>u(t.jsx(a,{apis:[[c,new g({app:{title:"My App"}})]],children:t.jsx(o,{})}),{mountedRoutes:{"/hello-company-logo":d}})]},n=l(o=>({container:{margin:o.spacing(5,0)},svg:{width:"auto",height:100},path:{fill:"#7df3e1"}})),r=()=>{const{container:o}=n();return t.jsx(s,{container:!0,justifyContent:"center",spacing:6,children:t.jsx(i,{className:o})})},e=()=>{const{container:o,svg:m,path:p}=n();return t.jsx(s,{container:!0,justifyContent:"center",spacing:6,children:t.jsx(i,{className:o,logo:t.jsx(f,{classes:{svg:m,path:p}})})})};r.__docgenInfo={description:"",methods:[],displayName:"Default"};e.__docgenInfo={description:"",methods:[],displayName:"CustomLogo"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
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
