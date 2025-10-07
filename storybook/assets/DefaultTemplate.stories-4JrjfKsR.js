import{j as t,T as p,c,C as l,m as i,a as d}from"./iframe-tbK3y8nX.js";import{s as g,H as u}from"./plugin-ChlVQLyu.js";import{c as h}from"./api-b80-yZQJ.js";import{c as f}from"./catalogApiMock-DZcOOhJK.js";import{s as x}from"./api-DQpBIi6W.js";import{S as y}from"./SearchContext-DrA_tZMr.js";import{P as S}from"./Page-Czs0pThN.js";import{S as r}from"./Grid-BAg5xRXe.js";import{b as k,a as j,c as C}from"./plugin-DVX7KkLi.js";import{T as P}from"./TemplateBackstageLogo-BW1RC2ql.js";import{T}from"./TemplateBackstageLogoIcon-Bqk4PRHI.js";import{e as I}from"./routes-B8X4fsJy.js";import{w as v}from"./appWrappers-BOPSHKwj.js";import{s as G}from"./StarredEntitiesApi-hg9hGcsq.js";import{M as A}from"./MockStarredEntitiesApi-DShTvORn.js";import{I as B}from"./InfoCard-C4UdfDxp.js";import"./preload-helper-D9Z9MdNV.js";import"./index-DCQoplNk.js";import"./Plugin-53t6JYkK.js";import"./componentData-BJunciA8.js";import"./useAnalytics-Ca8LGS_G.js";import"./useApp-GTt_SpSe.js";import"./useRouteRef-BX83NI39.js";import"./index-CRcpJ08W.js";import"./ref-C0VTUPuL.js";import"./lodash-CwBbdt2Q.js";import"./useAsync-BLvygtRZ.js";import"./useMountedState-Csiy-iGP.js";import"./DialogTitle-BQmbuE7I.js";import"./Modal-U8okL50X.js";import"./Portal-BOPEl2AS.js";import"./Backdrop-BzFrPm7o.js";import"./Button-BPmN-jRE.js";import"./useObservable-nEL5u-FZ.js";import"./useIsomorphicLayoutEffect-C-K5d2D6.js";import"./isSymbol-DhO4cmIY.js";import"./isObject--vsEa_js.js";import"./toString-Cr1IARFv.js";import"./CardContent-BIrqtayU.js";import"./ErrorBoundary-j5l0SlT4.js";import"./ErrorPanel-CviKhMbL.js";import"./WarningPanel-DL5bEf8i.js";import"./ExpandMore-D8nHmAmY.js";import"./AccordionDetails-DPK0aD3x.js";import"./index-DnL3XN75.js";import"./Collapse-Bh_wToR2.js";import"./MarkdownContent-Cd-0px7e.js";import"./CodeSnippet-efFD3yCh.js";import"./Box-BCZ-oNFO.js";import"./styled-M6G78zdi.js";import"./CopyTextButton-CXB0NbHV.js";import"./useCopyToClipboard-D25QeEOU.js";import"./Tooltip-h3gwVkfT.js";import"./Popper-DQbZaLLQ.js";import"./List-Bi9QNlgn.js";import"./ListContext-BeBAgmIy.js";import"./ListItem-6RdgEqss.js";import"./ListItemText-CXoBTj8M.js";import"./LinkButton-U_UDo8uH.js";import"./Link-DE5azwbI.js";import"./CardHeader-mtuq8CPr.js";import"./Divider-DdPHUg49.js";import"./CardActions-CMnyjTSo.js";import"./BottomLink-DPErq0LZ.js";import"./ArrowForward-BzTQuCuj.js";const b=[{apiVersion:"1",kind:"Component",metadata:{name:"mock-starred-entity",title:"Mock Starred Entity!"}},{apiVersion:"1",kind:"Component",metadata:{name:"mock-starred-entity-2",title:"Mock Starred Entity 2!"}},{apiVersion:"1",kind:"Component",metadata:{name:"mock-starred-entity-3",title:"Mock Starred Entity 3!"}},{apiVersion:"1",kind:"Component",metadata:{name:"mock-starred-entity-4",title:"Mock Starred Entity 4!"}}],E=f({entities:b}),a=new A;a.toggleStarred("component:default/example-starred-entity");a.toggleStarred("component:default/example-starred-entity-2");a.toggleStarred("component:default/example-starred-entity-3");a.toggleStarred("component:default/example-starred-entity-4");const Wt={title:"Plugins/Home/Templates",decorators:[e=>v(t.jsx(t.Fragment,{children:t.jsx(p,{apis:[[h,E],[G,a],[x,{query:()=>Promise.resolve({results:[]})}],[c,new l({stackoverflow:{baseUrl:"https://api.stackexchange.com/2.2"}})]],children:t.jsx(e,{})})}),{mountedRoutes:{"/hello-company":g.routes.root,"/catalog/:namespace/:kind/:name":I}})]},H=i(e=>({searchBarInput:{maxWidth:"60vw",margin:"auto",backgroundColor:e.palette.background.paper,borderRadius:"50px",boxShadow:e.shadows[1]},searchBarOutline:{borderStyle:"none"}})),R=i(e=>({container:{margin:e.spacing(5,0)},svg:{width:"auto",height:100},path:{fill:"#7df3e1"}})),o=()=>{const e=H(),{svg:s,path:n,container:m}=R();return t.jsx(y,{children:t.jsx(S,{themeId:"home",children:t.jsx(d,{children:t.jsxs(r,{container:!0,justifyContent:"center",spacing:6,children:[t.jsx(k,{className:m,logo:t.jsx(P,{classes:{svg:s,path:n}})}),t.jsx(r,{container:!0,item:!0,xs:12,justifyContent:"center",children:t.jsx(u,{InputProps:{classes:{root:e.searchBarInput,notchedOutline:e.searchBarOutline}},placeholder:"Search"})}),t.jsxs(r,{container:!0,item:!0,xs:12,children:[t.jsx(r,{item:!0,xs:12,md:6,children:t.jsx(j,{})}),t.jsx(r,{item:!0,xs:12,md:6,children:t.jsx(C,{tools:Array(8).fill({url:"#",label:"link",icon:t.jsx(T,{})})})}),t.jsx(r,{item:!0,xs:12,md:6,children:t.jsx(B,{title:"Composable Section",children:t.jsx("div",{style:{height:370}})})})]})]})})})})};o.__docgenInfo={description:"",methods:[],displayName:"DefaultTemplate"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
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
