import{j as o}from"./iframe-BI8Pro7f.js";import{c as e}from"./plugin-BCj9g7oI.js";import{S as l}from"./Grid-D8GQJQOJ.js";import{C as m}from"./ComponentAccordion-pf5AXosp.js";import{w as a}from"./appWrappers-8kwCd78J.js";import{T as i}from"./TemplateBackstageLogoIcon-B3nqcuGb.js";import{I as s}from"./InfoCard-S2xfTdg5.js";import"./preload-helper-D9Z9MdNV.js";import"./Plugin-VTsObaPC.js";import"./componentData-CnSLruL9.js";import"./useAnalytics-CQ3GCpgO.js";import"./useApp-Caa8lJd-.js";import"./useRouteRef-DDY5iJZG.js";import"./index-TPQhUIn-.js";import"./DialogTitle-qdpVj7cY.js";import"./Modal-vWbjNuKz.js";import"./Portal-Cr5K-csm.js";import"./Backdrop-Dyx9riUj.js";import"./Button-BO_R0us_.js";import"./useObservable-ZXyvSosG.js";import"./useIsomorphicLayoutEffect-ATJiyFtY.js";import"./ExpandMore-EtbpfiOU.js";import"./AccordionDetails-BS-C6m3j.js";import"./index-DnL3XN75.js";import"./Collapse-nmUVSlj4.js";import"./useAsync-CQa60u-D.js";import"./useMountedState-CWtvRyiM.js";import"./isSymbol-DhO4cmIY.js";import"./isObject--vsEa_js.js";import"./toString-Cr1IARFv.js";import"./CardContent-C1-xj4Fz.js";import"./ErrorBoundary-DaKUp-Um.js";import"./ErrorPanel-u63mASRC.js";import"./WarningPanel-CEY9DaGF.js";import"./MarkdownContent-DzlTx7FO.js";import"./CodeSnippet-C9E1b8g_.js";import"./Box-3xcahIa0.js";import"./styled-Bjq04UNE.js";import"./CopyTextButton-CoDigqXp.js";import"./useCopyToClipboard-BTA9GA9J.js";import"./Tooltip-D1isWZPn.js";import"./Popper-BpExO6xr.js";import"./List-KB2FjxVf.js";import"./ListContext-BkA_XZEO.js";import"./ListItem-Cd4T2JMt.js";import"./ListItemText-VQweID0d.js";import"./LinkButton-Cr7vpNSb.js";import"./Link-BDnsBgLw.js";import"./lodash-CwBbdt2Q.js";import"./CardHeader-CDAYgnUo.js";import"./Divider-CoYoOfS-.js";import"./CardActions-CWpk0kDm.js";import"./BottomLink-BrIjHtN1.js";import"./ArrowForward-B_QGjUs8.js";const co={title:"Plugins/Home/Components/Toolkit",decorators:[n=>a(o.jsx(n,{}))]},r=()=>o.jsx(l,{item:!0,xs:12,md:6,children:o.jsx(e,{tools:Array(8).fill({url:"#",label:"link",icon:o.jsx(i,{})})})}),t=()=>{const n=p=>o.jsx(m,{expanded:!0,...p});return o.jsx(s,{title:"Toolkit",noPadding:!0,children:o.jsxs(l,{item:!0,children:[o.jsx(e,{title:"Tools 1",tools:Array(8).fill({url:"#",label:"link",icon:o.jsx(i,{})}),Renderer:n}),o.jsx(e,{title:"Tools 2",tools:Array(8).fill({url:"#",label:"link",icon:o.jsx(i,{})}),Renderer:m}),o.jsx(e,{title:"Tools 3",tools:Array(8).fill({url:"#",label:"link",icon:o.jsx(i,{})}),Renderer:m})]})})};r.__docgenInfo={description:"",methods:[],displayName:"Default"};t.__docgenInfo={description:"",methods:[],displayName:"InAccordion"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
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
