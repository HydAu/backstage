import{j as t,T as p,c,C as l,m as i,a as d}from"./iframe-CitiFnN5.js";import{s as g,H as u}from"./plugin-pRlHfbfe.js";import{c as h}from"./api-PVvyxwFe.js";import{c as f}from"./catalogApiMock-BxO5jzE_.js";import{s as x}from"./api-BmDO9cq4.js";import{S as y}from"./SearchContext-D8G_vvSe.js";import{P as S}from"./Page-DxHORo-X.js";import{S as r}from"./Grid-DpKvFoNc.js";import{b as k,a as j,c as C}from"./plugin-BeJvANSL.js";import{T as P}from"./TemplateBackstageLogo-C3GCwL9L.js";import{T}from"./TemplateBackstageLogoIcon-CjTYPmQx.js";import{e as I}from"./routes-DHPyi5Jr.js";import{w as v}from"./appWrappers-DqiUoBg7.js";import{s as G}from"./StarredEntitiesApi-DjLgbZMa.js";import{M as A}from"./MockStarredEntitiesApi-DSK_Hmrx.js";import{I as B}from"./InfoCard-CAKG5LrL.js";import"./preload-helper-D9Z9MdNV.js";import"./index-DXQi49pZ.js";import"./Plugin-h_HGQPkP.js";import"./componentData-C_a9Rk_9.js";import"./useAnalytics-8chgUF4h.js";import"./useApp-DKlj7zYu.js";import"./useRouteRef-CAQN4j2A.js";import"./index-fphZrsnp.js";import"./ref-C0VTUPuL.js";import"./lodash-CwBbdt2Q.js";import"./useAsync-Cfc7VOKF.js";import"./useMountedState-BHqHaaST.js";import"./DialogTitle-Df7jxE3g.js";import"./Modal-B9Dxx05R.js";import"./Portal-CLxHSMha.js";import"./Backdrop-CeRYgHkr.js";import"./Button-CzOtIHxI.js";import"./useObservable-B7G4XzLu.js";import"./useIsomorphicLayoutEffect-CTYGaF45.js";import"./isSymbol-DhO4cmIY.js";import"./isObject--vsEa_js.js";import"./toString-Cr1IARFv.js";import"./CardContent-BBilV-uY.js";import"./ErrorBoundary-Dgfqtr43.js";import"./ErrorPanel-ChpIJ875.js";import"./WarningPanel-CLvK_CXa.js";import"./ExpandMore-Cdp8R-_v.js";import"./AccordionDetails-c8bsqLtz.js";import"./index-DnL3XN75.js";import"./Collapse-CgrQvPiJ.js";import"./MarkdownContent-DfHnauBf.js";import"./CodeSnippet-D5EYBXfs.js";import"./Box-BKmfHdf8.js";import"./styled-CI8mNsbD.js";import"./CopyTextButton-GAOyp82e.js";import"./useCopyToClipboard-LAmPqqHW.js";import"./Tooltip-29C2-qED.js";import"./Popper-CC3GX7Gx.js";import"./List-CIibtwkv.js";import"./ListContext-BOtrsLMB.js";import"./ListItem-Cazl4cxi.js";import"./ListItemText-BSZhigQo.js";import"./LinkButton-DvgMeH9Q.js";import"./Link-BfePrfSY.js";import"./CardHeader-BDNBuNZ7.js";import"./Divider-0w2V0l6l.js";import"./CardActions-DJgCAChb.js";import"./BottomLink-Dm-Btg_P.js";import"./ArrowForward-DL82-bNW.js";const b=[{apiVersion:"1",kind:"Component",metadata:{name:"mock-starred-entity",title:"Mock Starred Entity!"}},{apiVersion:"1",kind:"Component",metadata:{name:"mock-starred-entity-2",title:"Mock Starred Entity 2!"}},{apiVersion:"1",kind:"Component",metadata:{name:"mock-starred-entity-3",title:"Mock Starred Entity 3!"}},{apiVersion:"1",kind:"Component",metadata:{name:"mock-starred-entity-4",title:"Mock Starred Entity 4!"}}],E=f({entities:b}),a=new A;a.toggleStarred("component:default/example-starred-entity");a.toggleStarred("component:default/example-starred-entity-2");a.toggleStarred("component:default/example-starred-entity-3");a.toggleStarred("component:default/example-starred-entity-4");const Wt={title:"Plugins/Home/Templates",decorators:[e=>v(t.jsx(t.Fragment,{children:t.jsx(p,{apis:[[h,E],[G,a],[x,{query:()=>Promise.resolve({results:[]})}],[c,new l({stackoverflow:{baseUrl:"https://api.stackexchange.com/2.2"}})]],children:t.jsx(e,{})})}),{mountedRoutes:{"/hello-company":g.routes.root,"/catalog/:namespace/:kind/:name":I}})]},H=i(e=>({searchBarInput:{maxWidth:"60vw",margin:"auto",backgroundColor:e.palette.background.paper,borderRadius:"50px",boxShadow:e.shadows[1]},searchBarOutline:{borderStyle:"none"}})),R=i(e=>({container:{margin:e.spacing(5,0)},svg:{width:"auto",height:100},path:{fill:"#7df3e1"}})),o=()=>{const e=H(),{svg:s,path:n,container:m}=R();return t.jsx(y,{children:t.jsx(S,{themeId:"home",children:t.jsx(d,{children:t.jsxs(r,{container:!0,justifyContent:"center",spacing:6,children:[t.jsx(k,{className:m,logo:t.jsx(P,{classes:{svg:s,path:n}})}),t.jsx(r,{container:!0,item:!0,xs:12,justifyContent:"center",children:t.jsx(u,{InputProps:{classes:{root:e.searchBarInput,notchedOutline:e.searchBarOutline}},placeholder:"Search"})}),t.jsxs(r,{container:!0,item:!0,xs:12,children:[t.jsx(r,{item:!0,xs:12,md:6,children:t.jsx(j,{})}),t.jsx(r,{item:!0,xs:12,md:6,children:t.jsx(C,{tools:Array(8).fill({url:"#",label:"link",icon:t.jsx(T,{})})})}),t.jsx(r,{item:!0,xs:12,md:6,children:t.jsx(B,{title:"Composable Section",children:t.jsx("div",{style:{height:370}})})})]})]})})})})};o.__docgenInfo={description:"",methods:[],displayName:"DefaultTemplate"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
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
