import{j as t,T as p,c,C as l,m as i,a as d}from"./iframe-CHsD2EuT.js";import{s as g,H as u}from"./plugin-CwQXidFm.js";import{c as h}from"./api-CBwg8-sU.js";import{c as f}from"./catalogApiMock-9ioEdVsf.js";import{s as x}from"./api-hYH9E2CI.js";import{S as y}from"./SearchContext-DnvOS7xM.js";import{P as S}from"./Page-5o6AXmZu.js";import{S as r}from"./Grid-ShkV1KIY.js";import{b as k,a as j,c as C}from"./plugin-DDUm-ETs.js";import{T as P}from"./TemplateBackstageLogo-DMCX2Xk8.js";import{T}from"./TemplateBackstageLogoIcon-DjRQSZDL.js";import{e as I}from"./routes-BLwKHGfK.js";import{w as v}from"./appWrappers-DdqkYj_x.js";import{s as G}from"./StarredEntitiesApi-xAdqTRLG.js";import{M as A}from"./MockStarredEntitiesApi-xOGxxvFd.js";import{I as B}from"./InfoCard-CU_5qpxl.js";import"./preload-helper-D9Z9MdNV.js";import"./index-uVoPdh9w.js";import"./Plugin-Dxyd2zRR.js";import"./componentData-Bsx2Sq2E.js";import"./useAnalytics-PRgVyvQF.js";import"./useApp-DVBgpSzn.js";import"./useRouteRef-C49oh3N9.js";import"./index-BbHI1k2U.js";import"./ref-C0VTUPuL.js";import"./lodash-CwBbdt2Q.js";import"./useAsync-C9BZ69ng.js";import"./useMountedState-FxyCjszr.js";import"./DialogTitle-54qp_4M8.js";import"./Modal-BJrfhbcK.js";import"./Portal-BvSrCYBr.js";import"./Backdrop-DDYLbR3E.js";import"./Button-C55tn8MB.js";import"./useObservable-D2AqWyv1.js";import"./useIsomorphicLayoutEffect-CyS7kGyR.js";import"./isSymbol-DhO4cmIY.js";import"./isObject--vsEa_js.js";import"./toString-Cr1IARFv.js";import"./CardContent-bJ-CXyTY.js";import"./ErrorBoundary-vK85FkW3.js";import"./ErrorPanel-Dnl_aQhG.js";import"./WarningPanel-BxPgKWwp.js";import"./ExpandMore-ryDetQO2.js";import"./AccordionDetails-BLk7viYh.js";import"./index-DnL3XN75.js";import"./Collapse-iwZJRoUB.js";import"./MarkdownContent-CFTu1ttj.js";import"./CodeSnippet-CuwiwxVy.js";import"./Box-CdGM7Pq7.js";import"./styled-cbCynbc2.js";import"./CopyTextButton-BLoSRqG-.js";import"./useCopyToClipboard-BhXIQ6T9.js";import"./Tooltip-B0mFDu31.js";import"./Popper-DoUxk0PL.js";import"./List-DpjcHGvZ.js";import"./ListContext-BvqkXl1b.js";import"./ListItem-ChSdJMdN.js";import"./ListItemText-US31LzOX.js";import"./LinkButton-BOWrUvJF.js";import"./Link-BsDlIoMM.js";import"./CardHeader-DE8nBtzv.js";import"./Divider-B4ERPYwJ.js";import"./CardActions-NmW9zLLV.js";import"./BottomLink-JtJM1Iqq.js";import"./ArrowForward-DiNxIYET.js";const b=[{apiVersion:"1",kind:"Component",metadata:{name:"mock-starred-entity",title:"Mock Starred Entity!"}},{apiVersion:"1",kind:"Component",metadata:{name:"mock-starred-entity-2",title:"Mock Starred Entity 2!"}},{apiVersion:"1",kind:"Component",metadata:{name:"mock-starred-entity-3",title:"Mock Starred Entity 3!"}},{apiVersion:"1",kind:"Component",metadata:{name:"mock-starred-entity-4",title:"Mock Starred Entity 4!"}}],E=f({entities:b}),a=new A;a.toggleStarred("component:default/example-starred-entity");a.toggleStarred("component:default/example-starred-entity-2");a.toggleStarred("component:default/example-starred-entity-3");a.toggleStarred("component:default/example-starred-entity-4");const Wt={title:"Plugins/Home/Templates",decorators:[e=>v(t.jsx(t.Fragment,{children:t.jsx(p,{apis:[[h,E],[G,a],[x,{query:()=>Promise.resolve({results:[]})}],[c,new l({stackoverflow:{baseUrl:"https://api.stackexchange.com/2.2"}})]],children:t.jsx(e,{})})}),{mountedRoutes:{"/hello-company":g.routes.root,"/catalog/:namespace/:kind/:name":I}})]},H=i(e=>({searchBarInput:{maxWidth:"60vw",margin:"auto",backgroundColor:e.palette.background.paper,borderRadius:"50px",boxShadow:e.shadows[1]},searchBarOutline:{borderStyle:"none"}})),R=i(e=>({container:{margin:e.spacing(5,0)},svg:{width:"auto",height:100},path:{fill:"#7df3e1"}})),o=()=>{const e=H(),{svg:s,path:n,container:m}=R();return t.jsx(y,{children:t.jsx(S,{themeId:"home",children:t.jsx(d,{children:t.jsxs(r,{container:!0,justifyContent:"center",spacing:6,children:[t.jsx(k,{className:m,logo:t.jsx(P,{classes:{svg:s,path:n}})}),t.jsx(r,{container:!0,item:!0,xs:12,justifyContent:"center",children:t.jsx(u,{InputProps:{classes:{root:e.searchBarInput,notchedOutline:e.searchBarOutline}},placeholder:"Search"})}),t.jsxs(r,{container:!0,item:!0,xs:12,children:[t.jsx(r,{item:!0,xs:12,md:6,children:t.jsx(j,{})}),t.jsx(r,{item:!0,xs:12,md:6,children:t.jsx(C,{tools:Array(8).fill({url:"#",label:"link",icon:t.jsx(T,{})})})}),t.jsx(r,{item:!0,xs:12,md:6,children:t.jsx(B,{title:"Composable Section",children:t.jsx("div",{style:{height:370}})})})]})]})})})})};o.__docgenInfo={description:"",methods:[],displayName:"DefaultTemplate"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  const classes = useStyles();
  const {
    svg,
    path,
    container
  } = useLogoStyles();
  return <SearchContextProvider>
      <Page themeId="home">
        <Content>
          <Grid container justifyContent="center" spacing={6}>
            <HomePageCompanyLogo className={container} logo={<TemplateBackstageLogo classes={{
            svg,
            path
          }} />} />
            <Grid container item xs={12} justifyContent="center">
              <HomePageSearchBar InputProps={{
              classes: {
                root: classes.searchBarInput,
                notchedOutline: classes.searchBarOutline
              }
            }} placeholder="Search" />
            </Grid>
            <Grid container item xs={12}>
              <Grid item xs={12} md={6}>
                <HomePageStarredEntities />
              </Grid>
              <Grid item xs={12} md={6}>
                <HomePageToolkit tools={Array(8).fill({
                url: '#',
                label: 'link',
                icon: <TemplateBackstageLogoIcon />
              })} />
              </Grid>
              <Grid item xs={12} md={6}>
                <InfoCard title="Composable Section">
                  {/* placeholder for content */}
                  <div style={{
                  height: 370
                }} />
                </InfoCard>
              </Grid>
            </Grid>
          </Grid>
        </Content>
      </Page>
    </SearchContextProvider>;
}`,...o.parameters?.docs?.source}}};const zt=["DefaultTemplate"];export{o as DefaultTemplate,zt as __namedExportsOrder,Wt as default};
