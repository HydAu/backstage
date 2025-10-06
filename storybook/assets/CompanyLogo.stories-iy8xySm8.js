import{j as t,T as a,c,C as g,m as l}from"./iframe-B4X6F_0x.js";import{b as i,r as d}from"./plugin-BZUoGVgB.js";import{S as s}from"./Grid-ZwJT3o21.js";import{w as u}from"./appWrappers-CeFc1Cvg.js";import{T as f}from"./TemplateBackstageLogo-BV-0nekd.js";import"./preload-helper-D9Z9MdNV.js";import"./Plugin-CdMpVrep.js";import"./componentData-J6B2uOlU.js";import"./useAnalytics-BSNcizch.js";import"./useApp-DGYHvcrQ.js";import"./useRouteRef-CmW6B4H-.js";import"./index-NOhwhBBM.js";import"./InfoCard-C-ZJpiAQ.js";import"./CardContent-BROMGHLL.js";import"./ErrorBoundary-Bpo1UDT9.js";import"./ErrorPanel-x2Exa-vN.js";import"./WarningPanel-BSlzZ-z1.js";import"./ExpandMore-Bc1vnfZW.js";import"./AccordionDetails-DdV6AcrO.js";import"./index-DnL3XN75.js";import"./Collapse-CkfWvcnj.js";import"./MarkdownContent-DxpfpkJA.js";import"./CodeSnippet-CK3MA9Mp.js";import"./Box-CM-weRMN.js";import"./styled-CVRYyI1J.js";import"./CopyTextButton-BdOgsKDJ.js";import"./useCopyToClipboard-VqbKvAXq.js";import"./useMountedState-CnI8azb6.js";import"./Tooltip-BMIOv8Ue.js";import"./Popper-CK-yREM8.js";import"./Portal-CIuAqJxF.js";import"./List-vwHRiwvk.js";import"./ListContext-BKyvF85M.js";import"./ListItem-QaFfVGPd.js";import"./ListItemText-wAc4HvDm.js";import"./LinkButton-Dvus2elg.js";import"./Button-ZQtLd7ms.js";import"./Link-B2TbD7aZ.js";import"./lodash-CwBbdt2Q.js";import"./CardHeader-DkvWbnlo.js";import"./Divider-BxdCXeWj.js";import"./CardActions-BOFCJdv1.js";import"./BottomLink-DMYoolon.js";import"./ArrowForward-Dvlb0E-q.js";import"./DialogTitle-BEbL0zeX.js";import"./Modal-2fo1PxSM.js";import"./Backdrop-B-5U3nyc.js";import"./useObservable-NmSlnAuU.js";import"./useIsomorphicLayoutEffect-BCnlwChY.js";import"./useAsync-C_m9R5PV.js";import"./isSymbol-DhO4cmIY.js";import"./isObject--vsEa_js.js";import"./toString-Cr1IARFv.js";const yo={title:"Plugins/Home/Components/CompanyLogo",decorators:[o=>u(t.jsx(a,{apis:[[c,new g({app:{title:"My App"}})]],children:t.jsx(o,{})}),{mountedRoutes:{"/hello-company-logo":d}})]},n=l(o=>({container:{margin:o.spacing(5,0)},svg:{width:"auto",height:100},path:{fill:"#7df3e1"}})),r=()=>{const{container:o}=n();return t.jsx(s,{container:!0,justifyContent:"center",spacing:6,children:t.jsx(i,{className:o})})},e=()=>{const{container:o,svg:m,path:p}=n();return t.jsx(s,{container:!0,justifyContent:"center",spacing:6,children:t.jsx(i,{className:o,logo:t.jsx(f,{classes:{svg:m,path:p}})})})};r.__docgenInfo={description:"",methods:[],displayName:"Default"};e.__docgenInfo={description:"",methods:[],displayName:"CustomLogo"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
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
