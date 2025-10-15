import{j as o}from"./iframe-ClDSU7eH.js";import{c as e}from"./plugin-D5Zk9YT7.js";import{S as l}from"./Grid-mV-QABlU.js";import{C as m}from"./ComponentAccordion-QOtYZBRc.js";import{w as a}from"./appWrappers-G-Ndam_a.js";import{T as i}from"./TemplateBackstageLogoIcon-BGjhOvqg.js";import{I as s}from"./InfoCard-DTvhDQH8.js";import"./preload-helper-D9Z9MdNV.js";import"./Plugin-CRqfFxk-.js";import"./componentData-CDZy28Da.js";import"./useAnalytics-B-0cQkPi.js";import"./useApp-B8hr0lnh.js";import"./useRouteRef-Pbj2lDBT.js";import"./index-H5rrlhPB.js";import"./DialogTitle-DANsDeHD.js";import"./Modal-C7JUlgaL.js";import"./Portal-DmQDyavD.js";import"./Backdrop-DMfQwbB0.js";import"./Button-BLajmhZP.js";import"./useObservable-B2nZnJvA.js";import"./useIsomorphicLayoutEffect-qXS2XSMG.js";import"./ExpandMore-C1RCBmqn.js";import"./AccordionDetails-BRRfNhN6.js";import"./index-DnL3XN75.js";import"./Collapse-D-ZHo9zW.js";import"./useAsync-Dsvu6Zfc.js";import"./useMountedState-FFkX5aJt.js";import"./isSymbol-DhO4cmIY.js";import"./isObject--vsEa_js.js";import"./toString-Cr1IARFv.js";import"./CardContent-CH1Xj1W3.js";import"./ErrorBoundary-DqTj9Q6K.js";import"./ErrorPanel-fEQPUK4N.js";import"./WarningPanel-MWDdRggK.js";import"./MarkdownContent-hcF9jGOf.js";import"./CodeSnippet-C1NCP6TT.js";import"./Box-Cxljpaoo.js";import"./styled-BqebAAUt.js";import"./CopyTextButton-qppcfNHS.js";import"./useCopyToClipboard-CJScTRHQ.js";import"./Tooltip-C4VBCydo.js";import"./Popper-BXtW4PiG.js";import"./List-BbkLtEZF.js";import"./ListContext-CmA_1Vly.js";import"./ListItem-dodDOH8z.js";import"./ListItemText-CITdacPb.js";import"./LinkButton-B8kC82TM.js";import"./Link-CtlywKiK.js";import"./lodash-CwBbdt2Q.js";import"./CardHeader-BCVduPWX.js";import"./Divider-BXbuj0VG.js";import"./CardActions-CbH8no58.js";import"./BottomLink-CaVdpOph.js";import"./ArrowForward-CUrEzInL.js";const co={title:"Plugins/Home/Components/Toolkit",decorators:[n=>a(o.jsx(n,{}))]},r=()=>o.jsx(l,{item:!0,xs:12,md:6,children:o.jsx(e,{tools:Array(8).fill({url:"#",label:"link",icon:o.jsx(i,{})})})}),t=()=>{const n=p=>o.jsx(m,{expanded:!0,...p});return o.jsx(s,{title:"Toolkit",noPadding:!0,children:o.jsxs(l,{item:!0,children:[o.jsx(e,{title:"Tools 1",tools:Array(8).fill({url:"#",label:"link",icon:o.jsx(i,{})}),Renderer:n}),o.jsx(e,{title:"Tools 2",tools:Array(8).fill({url:"#",label:"link",icon:o.jsx(i,{})}),Renderer:m}),o.jsx(e,{title:"Tools 3",tools:Array(8).fill({url:"#",label:"link",icon:o.jsx(i,{})}),Renderer:m})]})})};r.__docgenInfo={description:"",methods:[],displayName:"Default"};t.__docgenInfo={description:"",methods:[],displayName:"InAccordion"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
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
