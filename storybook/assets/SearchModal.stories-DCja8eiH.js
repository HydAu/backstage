import{j as t,m as d,I as u,b as h,T as g}from"./iframe-CitiFnN5.js";import{r as x}from"./plugin-pRlHfbfe.js";import{S as m,u as n,a as S}from"./useSearchModal-BZRTiLDg.js";import{B as c}from"./Button-CzOtIHxI.js";import{a as f,b as M,c as j}from"./DialogTitle-Df7jxE3g.js";import{B as C}from"./Box-BKmfHdf8.js";import{S as r}from"./Grid-DpKvFoNc.js";import{S as y}from"./SearchType-CwbOIYCU.js";import{L as I}from"./List-CIibtwkv.js";import{H as R}from"./DefaultResultListItem-gFqg7q0E.js";import{s as B,M as D}from"./api-BmDO9cq4.js";import{S as T}from"./SearchContext-D8G_vvSe.js";import{w as k}from"./appWrappers-DqiUoBg7.js";import{SearchBar as v}from"./SearchBar-CcmwYOz6.js";import{a as b}from"./SearchResult-pMH7070T.js";import"./preload-helper-D9Z9MdNV.js";import"./index-DXQi49pZ.js";import"./Plugin-h_HGQPkP.js";import"./componentData-C_a9Rk_9.js";import"./useAnalytics-8chgUF4h.js";import"./useApp-DKlj7zYu.js";import"./useRouteRef-CAQN4j2A.js";import"./index-fphZrsnp.js";import"./ArrowForward-DL82-bNW.js";import"./translation-g2BUkxh6.js";import"./Page-CQXY2lAx.js";import"./useMediaQuery-DYn4AP_1.js";import"./Divider-0w2V0l6l.js";import"./ArrowBackIos-DEAnR-2d.js";import"./ArrowForwardIos-DpXFi508.js";import"./translation-DsEP5Q3o.js";import"./Modal-B9Dxx05R.js";import"./Portal-CLxHSMha.js";import"./Backdrop-CeRYgHkr.js";import"./styled-CI8mNsbD.js";import"./ExpandMore-Cdp8R-_v.js";import"./useAsync-Cfc7VOKF.js";import"./useMountedState-BHqHaaST.js";import"./AccordionDetails-c8bsqLtz.js";import"./index-DnL3XN75.js";import"./Collapse-CgrQvPiJ.js";import"./ListItem-Cazl4cxi.js";import"./ListContext-BOtrsLMB.js";import"./ListItemIcon-C97EkViG.js";import"./ListItemText-BSZhigQo.js";import"./Tabs-DkKyljOw.js";import"./KeyboardArrowRight-Dk1wOmbA.js";import"./FormLabel-r1t8rzj0.js";import"./formControlState-ByiNFc8I.js";import"./useFormControl-CopxVmDV.js";import"./InputLabel-Ei5klyAj.js";import"./Select-Cm7Art_u.js";import"./Popover-BZSD0G5I.js";import"./MenuItem-DXuX7mYL.js";import"./Checkbox-B7_m8AhI.js";import"./SwitchBase-B4bvDxr8.js";import"./Chip-BDr8VHGr.js";import"./Link-BfePrfSY.js";import"./lodash-CwBbdt2Q.js";import"./useObservable-B7G4XzLu.js";import"./useIsomorphicLayoutEffect-CTYGaF45.js";import"./isSymbol-DhO4cmIY.js";import"./isObject--vsEa_js.js";import"./toString-Cr1IARFv.js";import"./Search-CfrSyqbh.js";import"./useDebounce-CSXWhhP8.js";import"./InputAdornment-CbOzFcuJ.js";import"./TextField-RHVRm21r.js";import"./useElementFilter-mtfpNzCg.js";import"./EmptyState-DakN8sq8.js";import"./Progress-5oq2d3gN.js";import"./LinearProgress-CrlMFpyX.js";import"./ResponseErrorPanel-BDDUBPrS.js";import"./ErrorPanel-ChpIJ875.js";import"./WarningPanel-CLvK_CXa.js";import"./MarkdownContent-DfHnauBf.js";import"./CodeSnippet-D5EYBXfs.js";import"./CopyTextButton-GAOyp82e.js";import"./useCopyToClipboard-LAmPqqHW.js";import"./Tooltip-29C2-qED.js";import"./Popper-CC3GX7Gx.js";const G={results:[{type:"custom-result-item",document:{location:"search/search-result-1",title:"Search Result 1",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-2",title:"Search Result 2",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-3",title:"Search Result 3",text:"some text from the search result"}}]},ao={title:"Plugins/Search/SearchModal",component:m,decorators:[o=>k(t.jsx(g,{apis:[[B,new D(G)]],children:t.jsx(T,{children:t.jsx(o,{})})}),{mountedRoutes:{"/search":x}})]},s=()=>{const{state:o,toggleModal:a}=n();return t.jsxs(t.Fragment,{children:[t.jsx(c,{variant:"contained",color:"primary",onClick:a,children:"Toggle Search Modal"}),t.jsx(m,{...o,toggleModal:a})]})},A=d(o=>({titleContainer:{display:"flex",alignItems:"center",gap:o.spacing(1)},input:{flex:1},dialogActionsContainer:{padding:o.spacing(1,3)}})),i=()=>{const o=A(),{state:a,toggleModal:e}=n();return t.jsxs(t.Fragment,{children:[t.jsx(c,{variant:"contained",color:"primary",onClick:e,children:"Toggle Custom Search Modal"}),t.jsx(m,{...a,toggleModal:e,children:()=>t.jsxs(t.Fragment,{children:[t.jsx(f,{children:t.jsxs(C,{className:o.titleContainer,children:[t.jsx(v,{className:o.input}),t.jsx(u,{"aria-label":"close",onClick:e,children:t.jsx(h,{})})]})}),t.jsx(M,{children:t.jsxs(r,{container:!0,direction:"column",children:[t.jsx(r,{item:!0,children:t.jsx(y.Tabs,{defaultValue:"",types:[{value:"custom-result-item",name:"Custom Item"},{value:"no-custom-result-item",name:"No Custom Item"}]})}),t.jsx(r,{item:!0,children:t.jsx(b,{children:({results:p})=>t.jsx(I,{children:p.map(({document:l})=>t.jsx("div",{role:"button",tabIndex:0,onClick:e,onKeyPress:e,children:t.jsx(R,{result:l},l.location)},`${l.location}-btn`))})})})]})}),t.jsx(j,{className:o.dialogActionsContainer,children:t.jsx(r,{container:!0,direction:"row",children:t.jsx(r,{item:!0,xs:12,children:t.jsx(S,{})})})})]})})]})};s.__docgenInfo={description:"",methods:[],displayName:"Default"};i.__docgenInfo={description:"",methods:[],displayName:"CustomModal"};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
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
