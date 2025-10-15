import{j as t,m as d,I as u,b as h,T as g}from"./iframe-CHsD2EuT.js";import{r as x}from"./plugin-CwQXidFm.js";import{S as m,u as n,a as S}from"./useSearchModal-YpTQUeKM.js";import{B as c}from"./Button-C55tn8MB.js";import{a as f,b as M,c as j}from"./DialogTitle-54qp_4M8.js";import{B as C}from"./Box-CdGM7Pq7.js";import{S as r}from"./Grid-ShkV1KIY.js";import{S as y}from"./SearchType-BQawxHt1.js";import{L as I}from"./List-DpjcHGvZ.js";import{H as R}from"./DefaultResultListItem-DvfLmmrP.js";import{s as B,M as D}from"./api-hYH9E2CI.js";import{S as T}from"./SearchContext-DnvOS7xM.js";import{w as k}from"./appWrappers-DdqkYj_x.js";import{SearchBar as v}from"./SearchBar-BIr74s2w.js";import{a as b}from"./SearchResult-C2Yi9agq.js";import"./preload-helper-D9Z9MdNV.js";import"./index-uVoPdh9w.js";import"./Plugin-Dxyd2zRR.js";import"./componentData-Bsx2Sq2E.js";import"./useAnalytics-PRgVyvQF.js";import"./useApp-DVBgpSzn.js";import"./useRouteRef-C49oh3N9.js";import"./index-BbHI1k2U.js";import"./ArrowForward-DiNxIYET.js";import"./translation-CiBmxeRa.js";import"./Page-Dm4oeTi5.js";import"./useMediaQuery-DduGKzz3.js";import"./Divider-B4ERPYwJ.js";import"./ArrowBackIos-DHlu_aQj.js";import"./ArrowForwardIos-BSDY6lWd.js";import"./translation-D2-mzilO.js";import"./Modal-BJrfhbcK.js";import"./Portal-BvSrCYBr.js";import"./Backdrop-DDYLbR3E.js";import"./styled-cbCynbc2.js";import"./ExpandMore-ryDetQO2.js";import"./useAsync-C9BZ69ng.js";import"./useMountedState-FxyCjszr.js";import"./AccordionDetails-BLk7viYh.js";import"./index-DnL3XN75.js";import"./Collapse-iwZJRoUB.js";import"./ListItem-ChSdJMdN.js";import"./ListContext-BvqkXl1b.js";import"./ListItemIcon-DbnBUQek.js";import"./ListItemText-US31LzOX.js";import"./Tabs-BhxIjkDD.js";import"./KeyboardArrowRight-D-fA9BH4.js";import"./FormLabel--gX8z0yS.js";import"./formControlState-ByiNFc8I.js";import"./useFormControl-B5skoPDd.js";import"./InputLabel-CoaCZvBF.js";import"./Select-DswR9f-U.js";import"./Popover-DoxM5DBI.js";import"./MenuItem-CeMIiLLa.js";import"./Checkbox-aKZe9Jnz.js";import"./SwitchBase-Cnij2k8l.js";import"./Chip-BRiZJrVH.js";import"./Link-BsDlIoMM.js";import"./lodash-CwBbdt2Q.js";import"./useObservable-D2AqWyv1.js";import"./useIsomorphicLayoutEffect-CyS7kGyR.js";import"./isSymbol-DhO4cmIY.js";import"./isObject--vsEa_js.js";import"./toString-Cr1IARFv.js";import"./Search-CMAkn3Aq.js";import"./useDebounce-BwmucekG.js";import"./InputAdornment-C76xZaJL.js";import"./TextField-aIbDNIBL.js";import"./useElementFilter-9pM-q2fb.js";import"./EmptyState-CZ87jNRC.js";import"./Progress-BH-U1KsW.js";import"./LinearProgress-CjbIl4vi.js";import"./ResponseErrorPanel-D8MkB9kr.js";import"./ErrorPanel-Dnl_aQhG.js";import"./WarningPanel-BxPgKWwp.js";import"./MarkdownContent-CFTu1ttj.js";import"./CodeSnippet-CuwiwxVy.js";import"./CopyTextButton-BLoSRqG-.js";import"./useCopyToClipboard-BhXIQ6T9.js";import"./Tooltip-B0mFDu31.js";import"./Popper-DoUxk0PL.js";const G={results:[{type:"custom-result-item",document:{location:"search/search-result-1",title:"Search Result 1",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-2",title:"Search Result 2",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-3",title:"Search Result 3",text:"some text from the search result"}}]},ao={title:"Plugins/Search/SearchModal",component:m,decorators:[o=>k(t.jsx(g,{apis:[[B,new D(G)]],children:t.jsx(T,{children:t.jsx(o,{})})}),{mountedRoutes:{"/search":x}})]},s=()=>{const{state:o,toggleModal:a}=n();return t.jsxs(t.Fragment,{children:[t.jsx(c,{variant:"contained",color:"primary",onClick:a,children:"Toggle Search Modal"}),t.jsx(m,{...o,toggleModal:a})]})},A=d(o=>({titleContainer:{display:"flex",alignItems:"center",gap:o.spacing(1)},input:{flex:1},dialogActionsContainer:{padding:o.spacing(1,3)}})),i=()=>{const o=A(),{state:a,toggleModal:e}=n();return t.jsxs(t.Fragment,{children:[t.jsx(c,{variant:"contained",color:"primary",onClick:e,children:"Toggle Custom Search Modal"}),t.jsx(m,{...a,toggleModal:e,children:()=>t.jsxs(t.Fragment,{children:[t.jsx(f,{children:t.jsxs(C,{className:o.titleContainer,children:[t.jsx(v,{className:o.input}),t.jsx(u,{"aria-label":"close",onClick:e,children:t.jsx(h,{})})]})}),t.jsx(M,{children:t.jsxs(r,{container:!0,direction:"column",children:[t.jsx(r,{item:!0,children:t.jsx(y.Tabs,{defaultValue:"",types:[{value:"custom-result-item",name:"Custom Item"},{value:"no-custom-result-item",name:"No Custom Item"}]})}),t.jsx(r,{item:!0,children:t.jsx(b,{children:({results:p})=>t.jsx(I,{children:p.map(({document:l})=>t.jsx("div",{role:"button",tabIndex:0,onClick:e,onKeyPress:e,children:t.jsx(R,{result:l},l.location)},`${l.location}-btn`))})})})]})}),t.jsx(j,{className:o.dialogActionsContainer,children:t.jsx(r,{container:!0,direction:"row",children:t.jsx(r,{item:!0,xs:12,children:t.jsx(S,{})})})})]})})]})};s.__docgenInfo={description:"",methods:[],displayName:"Default"};i.__docgenInfo={description:"",methods:[],displayName:"CustomModal"};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
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
