import{j as t,m as d,I as u,b as h,T as g}from"./iframe-BI8Pro7f.js";import{r as x}from"./plugin-2ObEar55.js";import{S as m,u as n,a as S}from"./useSearchModal-KwCGBjoN.js";import{B as c}from"./Button-BO_R0us_.js";import{a as f,b as M,c as j}from"./DialogTitle-qdpVj7cY.js";import{B as C}from"./Box-3xcahIa0.js";import{S as r}from"./Grid-D8GQJQOJ.js";import{S as y}from"./SearchType-CQbmSoMM.js";import{L as I}from"./List-KB2FjxVf.js";import{H as R}from"./DefaultResultListItem-BzoaR2IR.js";import{s as B,M as D}from"./api-CHJ9Yzpy.js";import{S as T}from"./SearchContext-C6kHWea3.js";import{w as k}from"./appWrappers-8kwCd78J.js";import{SearchBar as v}from"./SearchBar-C1g2nDVH.js";import{a as b}from"./SearchResult-DkqLW6gn.js";import"./preload-helper-D9Z9MdNV.js";import"./index-WlzhBlPq.js";import"./Plugin-VTsObaPC.js";import"./componentData-CnSLruL9.js";import"./useAnalytics-CQ3GCpgO.js";import"./useApp-Caa8lJd-.js";import"./useRouteRef-DDY5iJZG.js";import"./index-TPQhUIn-.js";import"./ArrowForward-B_QGjUs8.js";import"./translation-DzTkfqBU.js";import"./Page-RkzAaV7W.js";import"./useMediaQuery-B_4Aw_dY.js";import"./Divider-CoYoOfS-.js";import"./ArrowBackIos-DyZcliqy.js";import"./ArrowForwardIos-CENGI0Bo.js";import"./translation-OLT2275J.js";import"./Modal-vWbjNuKz.js";import"./Portal-Cr5K-csm.js";import"./Backdrop-Dyx9riUj.js";import"./styled-Bjq04UNE.js";import"./ExpandMore-EtbpfiOU.js";import"./useAsync-CQa60u-D.js";import"./useMountedState-CWtvRyiM.js";import"./AccordionDetails-BS-C6m3j.js";import"./index-DnL3XN75.js";import"./Collapse-nmUVSlj4.js";import"./ListItem-Cd4T2JMt.js";import"./ListContext-BkA_XZEO.js";import"./ListItemIcon-DBPfzFTO.js";import"./ListItemText-VQweID0d.js";import"./Tabs-CEUKgilm.js";import"./KeyboardArrowRight-DLYoZH8E.js";import"./FormLabel-DVBYErSN.js";import"./formControlState-ByiNFc8I.js";import"./useFormControl-ChPwBR1i.js";import"./InputLabel-DoD7pIq_.js";import"./Select-DzvUVSuE.js";import"./Popover-y-Pu31St.js";import"./MenuItem-CYrMwbLb.js";import"./Checkbox-DetZwCqh.js";import"./SwitchBase-DX_LYSTB.js";import"./Chip-Bm2UQ5Bh.js";import"./Link-BDnsBgLw.js";import"./lodash-CwBbdt2Q.js";import"./useObservable-ZXyvSosG.js";import"./useIsomorphicLayoutEffect-ATJiyFtY.js";import"./isSymbol-DhO4cmIY.js";import"./isObject--vsEa_js.js";import"./toString-Cr1IARFv.js";import"./Search-B1M9X-qw.js";import"./useDebounce-CzaI-MFf.js";import"./InputAdornment-DERtGJ6a.js";import"./TextField-yPl-jeAU.js";import"./useElementFilter-BrtOOdKX.js";import"./EmptyState-DUZZHhUe.js";import"./Progress-CMEUl5Bv.js";import"./LinearProgress-APEwFs9t.js";import"./ResponseErrorPanel-W4n6-Tdc.js";import"./ErrorPanel-u63mASRC.js";import"./WarningPanel-CEY9DaGF.js";import"./MarkdownContent-DzlTx7FO.js";import"./CodeSnippet-C9E1b8g_.js";import"./CopyTextButton-CoDigqXp.js";import"./useCopyToClipboard-BTA9GA9J.js";import"./Tooltip-D1isWZPn.js";import"./Popper-BpExO6xr.js";const G={results:[{type:"custom-result-item",document:{location:"search/search-result-1",title:"Search Result 1",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-2",title:"Search Result 2",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-3",title:"Search Result 3",text:"some text from the search result"}}]},ao={title:"Plugins/Search/SearchModal",component:m,decorators:[o=>k(t.jsx(g,{apis:[[B,new D(G)]],children:t.jsx(T,{children:t.jsx(o,{})})}),{mountedRoutes:{"/search":x}})]},s=()=>{const{state:o,toggleModal:a}=n();return t.jsxs(t.Fragment,{children:[t.jsx(c,{variant:"contained",color:"primary",onClick:a,children:"Toggle Search Modal"}),t.jsx(m,{...o,toggleModal:a})]})},A=d(o=>({titleContainer:{display:"flex",alignItems:"center",gap:o.spacing(1)},input:{flex:1},dialogActionsContainer:{padding:o.spacing(1,3)}})),i=()=>{const o=A(),{state:a,toggleModal:e}=n();return t.jsxs(t.Fragment,{children:[t.jsx(c,{variant:"contained",color:"primary",onClick:e,children:"Toggle Custom Search Modal"}),t.jsx(m,{...a,toggleModal:e,children:()=>t.jsxs(t.Fragment,{children:[t.jsx(f,{children:t.jsxs(C,{className:o.titleContainer,children:[t.jsx(v,{className:o.input}),t.jsx(u,{"aria-label":"close",onClick:e,children:t.jsx(h,{})})]})}),t.jsx(M,{children:t.jsxs(r,{container:!0,direction:"column",children:[t.jsx(r,{item:!0,children:t.jsx(y.Tabs,{defaultValue:"",types:[{value:"custom-result-item",name:"Custom Item"},{value:"no-custom-result-item",name:"No Custom Item"}]})}),t.jsx(r,{item:!0,children:t.jsx(b,{children:({results:p})=>t.jsx(I,{children:p.map(({document:l})=>t.jsx("div",{role:"button",tabIndex:0,onClick:e,onKeyPress:e,children:t.jsx(R,{result:l},l.location)},`${l.location}-btn`))})})})]})}),t.jsx(j,{className:o.dialogActionsContainer,children:t.jsx(r,{container:!0,direction:"row",children:t.jsx(r,{item:!0,xs:12,children:t.jsx(S,{})})})})]})})]})};s.__docgenInfo={description:"",methods:[],displayName:"Default"};i.__docgenInfo={description:"",methods:[],displayName:"CustomModal"};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  const {
    state,
    toggleModal
  } = useSearchModal();
  return <>
      <Button variant="contained" color="primary" onClick={toggleModal}>
        Toggle Search Modal
      </Button>
      <SearchModal {...state} toggleModal={toggleModal} />
    </>;
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  const classes = useStyles();
  const {
    state,
    toggleModal
  } = useSearchModal();
  return <>
      <Button variant="contained" color="primary" onClick={toggleModal}>
        Toggle Custom Search Modal
      </Button>
      <SearchModal {...state} toggleModal={toggleModal}>
        {() => <>
            <DialogTitle>
              <Box className={classes.titleContainer}>
                <SearchBar className={classes.input} />

                <IconButton aria-label="close" onClick={toggleModal}>
                  <CloseIcon />
                </IconButton>
              </Box>
            </DialogTitle>
            <DialogContent>
              <Grid container direction="column">
                <Grid item>
                  <SearchType.Tabs defaultValue="" types={[{
                value: 'custom-result-item',
                name: 'Custom Item'
              }, {
                value: 'no-custom-result-item',
                name: 'No Custom Item'
              }]} />
                </Grid>
                <Grid item>
                  <SearchResult>
                    {({
                  results
                }) => <List>
                        {results.map(({
                    document
                  }) => <div role="button" tabIndex={0} key={\`\${document.location}-btn\`} onClick={toggleModal} onKeyPress={toggleModal}>
                            <DefaultResultListItem key={document.location} result={document} />
                          </div>)}
                      </List>}
                  </SearchResult>
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions className={classes.dialogActionsContainer}>
              <Grid container direction="row">
                <Grid item xs={12}>
                  <SearchResultPager />
                </Grid>
              </Grid>
            </DialogActions>
          </>}
      </SearchModal>
    </>;
}`,...i.parameters?.docs?.source}}};const lo=["Default","CustomModal"];export{i as CustomModal,s as Default,lo as __namedExportsOrder,ao as default};
