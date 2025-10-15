import{j as o}from"./iframe-CHsD2EuT.js";import{c as e}from"./plugin-DDUm-ETs.js";import{S as l}from"./Grid-ShkV1KIY.js";import{C as m}from"./ComponentAccordion-Bmhi4IId.js";import{w as a}from"./appWrappers-DdqkYj_x.js";import{T as i}from"./TemplateBackstageLogoIcon-DjRQSZDL.js";import{I as s}from"./InfoCard-CU_5qpxl.js";import"./preload-helper-D9Z9MdNV.js";import"./Plugin-Dxyd2zRR.js";import"./componentData-Bsx2Sq2E.js";import"./useAnalytics-PRgVyvQF.js";import"./useApp-DVBgpSzn.js";import"./useRouteRef-C49oh3N9.js";import"./index-BbHI1k2U.js";import"./DialogTitle-54qp_4M8.js";import"./Modal-BJrfhbcK.js";import"./Portal-BvSrCYBr.js";import"./Backdrop-DDYLbR3E.js";import"./Button-C55tn8MB.js";import"./useObservable-D2AqWyv1.js";import"./useIsomorphicLayoutEffect-CyS7kGyR.js";import"./ExpandMore-ryDetQO2.js";import"./AccordionDetails-BLk7viYh.js";import"./index-DnL3XN75.js";import"./Collapse-iwZJRoUB.js";import"./useAsync-C9BZ69ng.js";import"./useMountedState-FxyCjszr.js";import"./isSymbol-DhO4cmIY.js";import"./isObject--vsEa_js.js";import"./toString-Cr1IARFv.js";import"./CardContent-bJ-CXyTY.js";import"./ErrorBoundary-vK85FkW3.js";import"./ErrorPanel-Dnl_aQhG.js";import"./WarningPanel-BxPgKWwp.js";import"./MarkdownContent-CFTu1ttj.js";import"./CodeSnippet-CuwiwxVy.js";import"./Box-CdGM7Pq7.js";import"./styled-cbCynbc2.js";import"./CopyTextButton-BLoSRqG-.js";import"./useCopyToClipboard-BhXIQ6T9.js";import"./Tooltip-B0mFDu31.js";import"./Popper-DoUxk0PL.js";import"./List-DpjcHGvZ.js";import"./ListContext-BvqkXl1b.js";import"./ListItem-ChSdJMdN.js";import"./ListItemText-US31LzOX.js";import"./LinkButton-BOWrUvJF.js";import"./Link-BsDlIoMM.js";import"./lodash-CwBbdt2Q.js";import"./CardHeader-DE8nBtzv.js";import"./Divider-B4ERPYwJ.js";import"./CardActions-NmW9zLLV.js";import"./BottomLink-JtJM1Iqq.js";import"./ArrowForward-DiNxIYET.js";const co={title:"Plugins/Home/Components/Toolkit",decorators:[n=>a(o.jsx(n,{}))]},r=()=>o.jsx(l,{item:!0,xs:12,md:6,children:o.jsx(e,{tools:Array(8).fill({url:"#",label:"link",icon:o.jsx(i,{})})})}),t=()=>{const n=p=>o.jsx(m,{expanded:!0,...p});return o.jsx(s,{title:"Toolkit",noPadding:!0,children:o.jsxs(l,{item:!0,children:[o.jsx(e,{title:"Tools 1",tools:Array(8).fill({url:"#",label:"link",icon:o.jsx(i,{})}),Renderer:n}),o.jsx(e,{title:"Tools 2",tools:Array(8).fill({url:"#",label:"link",icon:o.jsx(i,{})}),Renderer:m}),o.jsx(e,{title:"Tools 3",tools:Array(8).fill({url:"#",label:"link",icon:o.jsx(i,{})}),Renderer:m})]})})};r.__docgenInfo={description:"",methods:[],displayName:"Default"};t.__docgenInfo={description:"",methods:[],displayName:"InAccordion"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
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
