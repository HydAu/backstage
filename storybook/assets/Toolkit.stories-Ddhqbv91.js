import{j as o}from"./iframe-CitiFnN5.js";import{c as e}from"./plugin-BeJvANSL.js";import{S as l}from"./Grid-DpKvFoNc.js";import{C as m}from"./ComponentAccordion-CWcL0fBL.js";import{w as a}from"./appWrappers-DqiUoBg7.js";import{T as i}from"./TemplateBackstageLogoIcon-CjTYPmQx.js";import{I as s}from"./InfoCard-CAKG5LrL.js";import"./preload-helper-D9Z9MdNV.js";import"./Plugin-h_HGQPkP.js";import"./componentData-C_a9Rk_9.js";import"./useAnalytics-8chgUF4h.js";import"./useApp-DKlj7zYu.js";import"./useRouteRef-CAQN4j2A.js";import"./index-fphZrsnp.js";import"./DialogTitle-Df7jxE3g.js";import"./Modal-B9Dxx05R.js";import"./Portal-CLxHSMha.js";import"./Backdrop-CeRYgHkr.js";import"./Button-CzOtIHxI.js";import"./useObservable-B7G4XzLu.js";import"./useIsomorphicLayoutEffect-CTYGaF45.js";import"./ExpandMore-Cdp8R-_v.js";import"./AccordionDetails-c8bsqLtz.js";import"./index-DnL3XN75.js";import"./Collapse-CgrQvPiJ.js";import"./useAsync-Cfc7VOKF.js";import"./useMountedState-BHqHaaST.js";import"./isSymbol-DhO4cmIY.js";import"./isObject--vsEa_js.js";import"./toString-Cr1IARFv.js";import"./CardContent-BBilV-uY.js";import"./ErrorBoundary-Dgfqtr43.js";import"./ErrorPanel-ChpIJ875.js";import"./WarningPanel-CLvK_CXa.js";import"./MarkdownContent-DfHnauBf.js";import"./CodeSnippet-D5EYBXfs.js";import"./Box-BKmfHdf8.js";import"./styled-CI8mNsbD.js";import"./CopyTextButton-GAOyp82e.js";import"./useCopyToClipboard-LAmPqqHW.js";import"./Tooltip-29C2-qED.js";import"./Popper-CC3GX7Gx.js";import"./List-CIibtwkv.js";import"./ListContext-BOtrsLMB.js";import"./ListItem-Cazl4cxi.js";import"./ListItemText-BSZhigQo.js";import"./LinkButton-DvgMeH9Q.js";import"./Link-BfePrfSY.js";import"./lodash-CwBbdt2Q.js";import"./CardHeader-BDNBuNZ7.js";import"./Divider-0w2V0l6l.js";import"./CardActions-DJgCAChb.js";import"./BottomLink-Dm-Btg_P.js";import"./ArrowForward-DL82-bNW.js";const co={title:"Plugins/Home/Components/Toolkit",decorators:[n=>a(o.jsx(n,{}))]},r=()=>o.jsx(l,{item:!0,xs:12,md:6,children:o.jsx(e,{tools:Array(8).fill({url:"#",label:"link",icon:o.jsx(i,{})})})}),t=()=>{const n=p=>o.jsx(m,{expanded:!0,...p});return o.jsx(s,{title:"Toolkit",noPadding:!0,children:o.jsxs(l,{item:!0,children:[o.jsx(e,{title:"Tools 1",tools:Array(8).fill({url:"#",label:"link",icon:o.jsx(i,{})}),Renderer:n}),o.jsx(e,{title:"Tools 2",tools:Array(8).fill({url:"#",label:"link",icon:o.jsx(i,{})}),Renderer:m}),o.jsx(e,{title:"Tools 3",tools:Array(8).fill({url:"#",label:"link",icon:o.jsx(i,{})}),Renderer:m})]})})};r.__docgenInfo={description:"",methods:[],displayName:"Default"};t.__docgenInfo={description:"",methods:[],displayName:"InAccordion"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
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
