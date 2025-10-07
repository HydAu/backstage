import{j as o}from"./iframe-tbK3y8nX.js";import{c as e}from"./plugin-DVX7KkLi.js";import{S as l}from"./Grid-BAg5xRXe.js";import{C as m}from"./ComponentAccordion-PdDCUZC1.js";import{w as a}from"./appWrappers-BOPSHKwj.js";import{T as i}from"./TemplateBackstageLogoIcon-Bqk4PRHI.js";import{I as s}from"./InfoCard-C4UdfDxp.js";import"./preload-helper-D9Z9MdNV.js";import"./Plugin-53t6JYkK.js";import"./componentData-BJunciA8.js";import"./useAnalytics-Ca8LGS_G.js";import"./useApp-GTt_SpSe.js";import"./useRouteRef-BX83NI39.js";import"./index-CRcpJ08W.js";import"./DialogTitle-BQmbuE7I.js";import"./Modal-U8okL50X.js";import"./Portal-BOPEl2AS.js";import"./Backdrop-BzFrPm7o.js";import"./Button-BPmN-jRE.js";import"./useObservable-nEL5u-FZ.js";import"./useIsomorphicLayoutEffect-C-K5d2D6.js";import"./ExpandMore-D8nHmAmY.js";import"./AccordionDetails-DPK0aD3x.js";import"./index-DnL3XN75.js";import"./Collapse-Bh_wToR2.js";import"./useAsync-BLvygtRZ.js";import"./useMountedState-Csiy-iGP.js";import"./isSymbol-DhO4cmIY.js";import"./isObject--vsEa_js.js";import"./toString-Cr1IARFv.js";import"./CardContent-BIrqtayU.js";import"./ErrorBoundary-j5l0SlT4.js";import"./ErrorPanel-CviKhMbL.js";import"./WarningPanel-DL5bEf8i.js";import"./MarkdownContent-Cd-0px7e.js";import"./CodeSnippet-efFD3yCh.js";import"./Box-BCZ-oNFO.js";import"./styled-M6G78zdi.js";import"./CopyTextButton-CXB0NbHV.js";import"./useCopyToClipboard-D25QeEOU.js";import"./Tooltip-h3gwVkfT.js";import"./Popper-DQbZaLLQ.js";import"./List-Bi9QNlgn.js";import"./ListContext-BeBAgmIy.js";import"./ListItem-6RdgEqss.js";import"./ListItemText-CXoBTj8M.js";import"./LinkButton-U_UDo8uH.js";import"./Link-DE5azwbI.js";import"./lodash-CwBbdt2Q.js";import"./CardHeader-mtuq8CPr.js";import"./Divider-DdPHUg49.js";import"./CardActions-CMnyjTSo.js";import"./BottomLink-DPErq0LZ.js";import"./ArrowForward-BzTQuCuj.js";const co={title:"Plugins/Home/Components/Toolkit",decorators:[n=>a(o.jsx(n,{}))]},r=()=>o.jsx(l,{item:!0,xs:12,md:6,children:o.jsx(e,{tools:Array(8).fill({url:"#",label:"link",icon:o.jsx(i,{})})})}),t=()=>{const n=p=>o.jsx(m,{expanded:!0,...p});return o.jsx(s,{title:"Toolkit",noPadding:!0,children:o.jsxs(l,{item:!0,children:[o.jsx(e,{title:"Tools 1",tools:Array(8).fill({url:"#",label:"link",icon:o.jsx(i,{})}),Renderer:n}),o.jsx(e,{title:"Tools 2",tools:Array(8).fill({url:"#",label:"link",icon:o.jsx(i,{})}),Renderer:m}),o.jsx(e,{title:"Tools 3",tools:Array(8).fill({url:"#",label:"link",icon:o.jsx(i,{})}),Renderer:m})]})})};r.__docgenInfo={description:"",methods:[],displayName:"Default"};t.__docgenInfo={description:"",methods:[],displayName:"InAccordion"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
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
