import{j as o}from"./iframe-B4X6F_0x.js";import{c as e}from"./plugin-BZUoGVgB.js";import{S as l}from"./Grid-ZwJT3o21.js";import{C as m}from"./ComponentAccordion-D2zleSoG.js";import{w as a}from"./appWrappers-CeFc1Cvg.js";import{T as i}from"./TemplateBackstageLogoIcon-YZV1pxJV.js";import{I as s}from"./InfoCard-C-ZJpiAQ.js";import"./preload-helper-D9Z9MdNV.js";import"./Plugin-CdMpVrep.js";import"./componentData-J6B2uOlU.js";import"./useAnalytics-BSNcizch.js";import"./useApp-DGYHvcrQ.js";import"./useRouteRef-CmW6B4H-.js";import"./index-NOhwhBBM.js";import"./DialogTitle-BEbL0zeX.js";import"./Modal-2fo1PxSM.js";import"./Portal-CIuAqJxF.js";import"./Backdrop-B-5U3nyc.js";import"./Button-ZQtLd7ms.js";import"./useObservable-NmSlnAuU.js";import"./useIsomorphicLayoutEffect-BCnlwChY.js";import"./ExpandMore-Bc1vnfZW.js";import"./AccordionDetails-DdV6AcrO.js";import"./index-DnL3XN75.js";import"./Collapse-CkfWvcnj.js";import"./useAsync-C_m9R5PV.js";import"./useMountedState-CnI8azb6.js";import"./isSymbol-DhO4cmIY.js";import"./isObject--vsEa_js.js";import"./toString-Cr1IARFv.js";import"./CardContent-BROMGHLL.js";import"./ErrorBoundary-Bpo1UDT9.js";import"./ErrorPanel-x2Exa-vN.js";import"./WarningPanel-BSlzZ-z1.js";import"./MarkdownContent-DxpfpkJA.js";import"./CodeSnippet-CK3MA9Mp.js";import"./Box-CM-weRMN.js";import"./styled-CVRYyI1J.js";import"./CopyTextButton-BdOgsKDJ.js";import"./useCopyToClipboard-VqbKvAXq.js";import"./Tooltip-BMIOv8Ue.js";import"./Popper-CK-yREM8.js";import"./List-vwHRiwvk.js";import"./ListContext-BKyvF85M.js";import"./ListItem-QaFfVGPd.js";import"./ListItemText-wAc4HvDm.js";import"./LinkButton-Dvus2elg.js";import"./Link-B2TbD7aZ.js";import"./lodash-CwBbdt2Q.js";import"./CardHeader-DkvWbnlo.js";import"./Divider-BxdCXeWj.js";import"./CardActions-BOFCJdv1.js";import"./BottomLink-DMYoolon.js";import"./ArrowForward-Dvlb0E-q.js";const co={title:"Plugins/Home/Components/Toolkit",decorators:[n=>a(o.jsx(n,{}))]},r=()=>o.jsx(l,{item:!0,xs:12,md:6,children:o.jsx(e,{tools:Array(8).fill({url:"#",label:"link",icon:o.jsx(i,{})})})}),t=()=>{const n=p=>o.jsx(m,{expanded:!0,...p});return o.jsx(s,{title:"Toolkit",noPadding:!0,children:o.jsxs(l,{item:!0,children:[o.jsx(e,{title:"Tools 1",tools:Array(8).fill({url:"#",label:"link",icon:o.jsx(i,{})}),Renderer:n}),o.jsx(e,{title:"Tools 2",tools:Array(8).fill({url:"#",label:"link",icon:o.jsx(i,{})}),Renderer:m}),o.jsx(e,{title:"Tools 3",tools:Array(8).fill({url:"#",label:"link",icon:o.jsx(i,{})}),Renderer:m})]})})};r.__docgenInfo={description:"",methods:[],displayName:"Default"};t.__docgenInfo={description:"",methods:[],displayName:"InAccordion"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
  return <Grid item xs={12} md={6}>
      <HomePageToolkit tools={Array(8).fill({
      url: '#',
      label: 'link',
      icon: <TemplateBackstageLogoIcon />
    })} />
    </Grid>;
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  const ExpandedComponentAccordion = (props: any) => <ComponentAccordion expanded {...props} />;
  return <InfoCard title="Toolkit" noPadding>
      <Grid item>
        <HomePageToolkit title="Tools 1" tools={Array(8).fill({
        url: '#',
        label: 'link',
        icon: <TemplateBackstageLogoIcon />
      })} Renderer={ExpandedComponentAccordion} />
        <HomePageToolkit title="Tools 2" tools={Array(8).fill({
        url: '#',
        label: 'link',
        icon: <TemplateBackstageLogoIcon />
      })} Renderer={ComponentAccordion} />
        <HomePageToolkit title="Tools 3" tools={Array(8).fill({
        url: '#',
        label: 'link',
        icon: <TemplateBackstageLogoIcon />
      })} Renderer={ComponentAccordion} />
      </Grid>
    </InfoCard>;
}`,...t.parameters?.docs?.source}}};const uo=["Default","InAccordion"];export{r as Default,t as InAccordion,uo as __namedExportsOrder,co as default};
