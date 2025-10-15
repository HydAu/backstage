import{j as t,T as p,c,C as l,m as i,a as d}from"./iframe-ClDSU7eH.js";import{s as g,H as u}from"./plugin-aN1PZ0ou.js";import{c as h}from"./api-4eDR4nur.js";import{c as f}from"./catalogApiMock-7lVKiwZU.js";import{s as x}from"./api-KBpVfXUe.js";import{S as y}from"./SearchContext-X1eakVS2.js";import{P as S}from"./Page-BXq3PK8-.js";import{S as r}from"./Grid-mV-QABlU.js";import{b as k,a as j,c as C}from"./plugin-D5Zk9YT7.js";import{T as P}from"./TemplateBackstageLogo-DhYif7OM.js";import{T}from"./TemplateBackstageLogoIcon-BGjhOvqg.js";import{e as I}from"./routes-CWLAkqOK.js";import{w as v}from"./appWrappers-G-Ndam_a.js";import{s as G}from"./StarredEntitiesApi-CY_bQMuR.js";import{M as A}from"./MockStarredEntitiesApi-KUEgmSc9.js";import{I as B}from"./InfoCard-DTvhDQH8.js";import"./preload-helper-D9Z9MdNV.js";import"./index-BDDlyC_L.js";import"./Plugin-CRqfFxk-.js";import"./componentData-CDZy28Da.js";import"./useAnalytics-B-0cQkPi.js";import"./useApp-B8hr0lnh.js";import"./useRouteRef-Pbj2lDBT.js";import"./index-H5rrlhPB.js";import"./ref-C0VTUPuL.js";import"./lodash-CwBbdt2Q.js";import"./useAsync-Dsvu6Zfc.js";import"./useMountedState-FFkX5aJt.js";import"./DialogTitle-DANsDeHD.js";import"./Modal-C7JUlgaL.js";import"./Portal-DmQDyavD.js";import"./Backdrop-DMfQwbB0.js";import"./Button-BLajmhZP.js";import"./useObservable-B2nZnJvA.js";import"./useIsomorphicLayoutEffect-qXS2XSMG.js";import"./isSymbol-DhO4cmIY.js";import"./isObject--vsEa_js.js";import"./toString-Cr1IARFv.js";import"./CardContent-CH1Xj1W3.js";import"./ErrorBoundary-DqTj9Q6K.js";import"./ErrorPanel-fEQPUK4N.js";import"./WarningPanel-MWDdRggK.js";import"./ExpandMore-C1RCBmqn.js";import"./AccordionDetails-BRRfNhN6.js";import"./index-DnL3XN75.js";import"./Collapse-D-ZHo9zW.js";import"./MarkdownContent-hcF9jGOf.js";import"./CodeSnippet-C1NCP6TT.js";import"./Box-Cxljpaoo.js";import"./styled-BqebAAUt.js";import"./CopyTextButton-qppcfNHS.js";import"./useCopyToClipboard-CJScTRHQ.js";import"./Tooltip-C4VBCydo.js";import"./Popper-BXtW4PiG.js";import"./List-BbkLtEZF.js";import"./ListContext-CmA_1Vly.js";import"./ListItem-dodDOH8z.js";import"./ListItemText-CITdacPb.js";import"./LinkButton-B8kC82TM.js";import"./Link-CtlywKiK.js";import"./CardHeader-BCVduPWX.js";import"./Divider-BXbuj0VG.js";import"./CardActions-CbH8no58.js";import"./BottomLink-CaVdpOph.js";import"./ArrowForward-CUrEzInL.js";const b=[{apiVersion:"1",kind:"Component",metadata:{name:"mock-starred-entity",title:"Mock Starred Entity!"}},{apiVersion:"1",kind:"Component",metadata:{name:"mock-starred-entity-2",title:"Mock Starred Entity 2!"}},{apiVersion:"1",kind:"Component",metadata:{name:"mock-starred-entity-3",title:"Mock Starred Entity 3!"}},{apiVersion:"1",kind:"Component",metadata:{name:"mock-starred-entity-4",title:"Mock Starred Entity 4!"}}],E=f({entities:b}),a=new A;a.toggleStarred("component:default/example-starred-entity");a.toggleStarred("component:default/example-starred-entity-2");a.toggleStarred("component:default/example-starred-entity-3");a.toggleStarred("component:default/example-starred-entity-4");const Wt={title:"Plugins/Home/Templates",decorators:[e=>v(t.jsx(t.Fragment,{children:t.jsx(p,{apis:[[h,E],[G,a],[x,{query:()=>Promise.resolve({results:[]})}],[c,new l({stackoverflow:{baseUrl:"https://api.stackexchange.com/2.2"}})]],children:t.jsx(e,{})})}),{mountedRoutes:{"/hello-company":g.routes.root,"/catalog/:namespace/:kind/:name":I}})]},H=i(e=>({searchBarInput:{maxWidth:"60vw",margin:"auto",backgroundColor:e.palette.background.paper,borderRadius:"50px",boxShadow:e.shadows[1]},searchBarOutline:{borderStyle:"none"}})),R=i(e=>({container:{margin:e.spacing(5,0)},svg:{width:"auto",height:100},path:{fill:"#7df3e1"}})),o=()=>{const e=H(),{svg:s,path:n,container:m}=R();return t.jsx(y,{children:t.jsx(S,{themeId:"home",children:t.jsx(d,{children:t.jsxs(r,{container:!0,justifyContent:"center",spacing:6,children:[t.jsx(k,{className:m,logo:t.jsx(P,{classes:{svg:s,path:n}})}),t.jsx(r,{container:!0,item:!0,xs:12,justifyContent:"center",children:t.jsx(u,{InputProps:{classes:{root:e.searchBarInput,notchedOutline:e.searchBarOutline}},placeholder:"Search"})}),t.jsxs(r,{container:!0,item:!0,xs:12,children:[t.jsx(r,{item:!0,xs:12,md:6,children:t.jsx(j,{})}),t.jsx(r,{item:!0,xs:12,md:6,children:t.jsx(C,{tools:Array(8).fill({url:"#",label:"link",icon:t.jsx(T,{})})})}),t.jsx(r,{item:!0,xs:12,md:6,children:t.jsx(B,{title:"Composable Section",children:t.jsx("div",{style:{height:370}})})})]})]})})})})};o.__docgenInfo={description:"",methods:[],displayName:"DefaultTemplate"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
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
