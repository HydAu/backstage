import{j as o}from"./iframe-jWBis4h7.js";import{c as e}from"./plugin-h3g_Okye.js";import{S as l}from"./Grid-D8aYrpF9.js";import{C as m}from"./ComponentAccordion-CNVpn2SJ.js";import{w as a}from"./appWrappers-C7U-7ZHS.js";import{T as i}from"./TemplateBackstageLogoIcon-oLz9oULY.js";import{I as s}from"./InfoCard-DWBgl02k.js";import"./preload-helper-D9Z9MdNV.js";import"./Plugin-B5tIYXE1.js";import"./componentData-DS2TgQM3.js";import"./useAnalytics-jlg0poIO.js";import"./useApp-CwBIww-_.js";import"./useRouteRef-CyRjGecq.js";import"./index-D-vQ19kG.js";import"./DialogTitle-DNYHgUxA.js";import"./Modal-D5_FmyLm.js";import"./Portal-4KhuVP8U.js";import"./Backdrop-CL5Nu-FS.js";import"./Button-DBGk0ho8.js";import"./useObservable-D5YF_B8Z.js";import"./useIsomorphicLayoutEffect-BdGY38Vk.js";import"./ExpandMore-h50IjFe8.js";import"./AccordionDetails-Cs-BCEd9.js";import"./index-DnL3XN75.js";import"./Collapse-zBcmKg9Q.js";import"./useAsync-vaYznZ30.js";import"./useMountedState-Cvh7ngWP.js";import"./isSymbol-DhO4cmIY.js";import"./isObject--vsEa_js.js";import"./toString-Cr1IARFv.js";import"./CardContent-Cg0ghrXT.js";import"./ErrorBoundary-DU-IqrY3.js";import"./ErrorPanel-D2vNcph3.js";import"./WarningPanel-ptGc0XmP.js";import"./MarkdownContent-Df7rUt_g.js";import"./CodeSnippet-uFx7jUsz.js";import"./Box-CUCIIvBq.js";import"./styled-DEXT6Cl3.js";import"./CopyTextButton-BSsLec9-.js";import"./useCopyToClipboard-vfU7HED5.js";import"./Tooltip-BbJdzgrj.js";import"./Popper-CmiAw98y.js";import"./List-DRbnC8gb.js";import"./ListContext-BUzb9c6E.js";import"./ListItem-D85OCTFr.js";import"./ListItemText-C8hT2w5k.js";import"./LinkButton-YkwrfMI6.js";import"./Link-CsUbik3L.js";import"./lodash-CwBbdt2Q.js";import"./CardHeader-DaKYuR3-.js";import"./Divider-bZzN0Vut.js";import"./CardActions-D40s2DFb.js";import"./BottomLink-TPoBdtDt.js";import"./ArrowForward-KHtjW8ra.js";const co={title:"Plugins/Home/Components/Toolkit",decorators:[n=>a(o.jsx(n,{}))]},r=()=>o.jsx(l,{item:!0,xs:12,md:6,children:o.jsx(e,{tools:Array(8).fill({url:"#",label:"link",icon:o.jsx(i,{})})})}),t=()=>{const n=p=>o.jsx(m,{expanded:!0,...p});return o.jsx(s,{title:"Toolkit",noPadding:!0,children:o.jsxs(l,{item:!0,children:[o.jsx(e,{title:"Tools 1",tools:Array(8).fill({url:"#",label:"link",icon:o.jsx(i,{})}),Renderer:n}),o.jsx(e,{title:"Tools 2",tools:Array(8).fill({url:"#",label:"link",icon:o.jsx(i,{})}),Renderer:m}),o.jsx(e,{title:"Tools 3",tools:Array(8).fill({url:"#",label:"link",icon:o.jsx(i,{})}),Renderer:m})]})})};r.__docgenInfo={description:"",methods:[],displayName:"Default"};t.__docgenInfo={description:"",methods:[],displayName:"InAccordion"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
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
