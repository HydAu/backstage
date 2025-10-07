import{j as t,m as d,I as u,b as h,T as g}from"./iframe-tbK3y8nX.js";import{r as x}from"./plugin-ChlVQLyu.js";import{S as m,u as n,a as S}from"./useSearchModal-BFhqhqUu.js";import{B as c}from"./Button-BPmN-jRE.js";import{a as f,b as M,c as j}from"./DialogTitle-BQmbuE7I.js";import{B as C}from"./Box-BCZ-oNFO.js";import{S as r}from"./Grid-BAg5xRXe.js";import{S as y}from"./SearchType-C5A1LYGn.js";import{L as I}from"./List-Bi9QNlgn.js";import{H as R}from"./DefaultResultListItem-C5deDCww.js";import{s as B,M as D}from"./api-DQpBIi6W.js";import{S as T}from"./SearchContext-DrA_tZMr.js";import{w as k}from"./appWrappers-BOPSHKwj.js";import{SearchBar as v}from"./SearchBar-BgQONJ7l.js";import{a as b}from"./SearchResult-CRHj27xw.js";import"./preload-helper-D9Z9MdNV.js";import"./index-DCQoplNk.js";import"./Plugin-53t6JYkK.js";import"./componentData-BJunciA8.js";import"./useAnalytics-Ca8LGS_G.js";import"./useApp-GTt_SpSe.js";import"./useRouteRef-BX83NI39.js";import"./index-CRcpJ08W.js";import"./ArrowForward-BzTQuCuj.js";import"./translation-BoKzQ2pc.js";import"./Page-BFVOhvgz.js";import"./useMediaQuery-BuUWZSMo.js";import"./Divider-DdPHUg49.js";import"./ArrowBackIos-TgG6p_L1.js";import"./ArrowForwardIos-Br-xGw2T.js";import"./translation-Cvmzz7Mn.js";import"./Modal-U8okL50X.js";import"./Portal-BOPEl2AS.js";import"./Backdrop-BzFrPm7o.js";import"./styled-M6G78zdi.js";import"./ExpandMore-D8nHmAmY.js";import"./useAsync-BLvygtRZ.js";import"./useMountedState-Csiy-iGP.js";import"./AccordionDetails-DPK0aD3x.js";import"./index-DnL3XN75.js";import"./Collapse-Bh_wToR2.js";import"./ListItem-6RdgEqss.js";import"./ListContext-BeBAgmIy.js";import"./ListItemIcon-8U1XytXM.js";import"./ListItemText-CXoBTj8M.js";import"./Tabs-B2QVtPR9.js";import"./KeyboardArrowRight-DvbsjYZ4.js";import"./FormLabel-Df28kBPG.js";import"./formControlState-ByiNFc8I.js";import"./useFormControl-D3C2Wk5g.js";import"./InputLabel-DLfRVzzq.js";import"./Select-B2-GYoRq.js";import"./Popover-DChvdoSK.js";import"./MenuItem-CltAnAQh.js";import"./Checkbox-DAM0HQxk.js";import"./SwitchBase-kgVJw5Ah.js";import"./Chip-B7UaeDAv.js";import"./Link-DE5azwbI.js";import"./lodash-CwBbdt2Q.js";import"./useObservable-nEL5u-FZ.js";import"./useIsomorphicLayoutEffect-C-K5d2D6.js";import"./isSymbol-DhO4cmIY.js";import"./isObject--vsEa_js.js";import"./toString-Cr1IARFv.js";import"./Search-DJY772_t.js";import"./useDebounce-BWHgJogU.js";import"./InputAdornment-Cqjw0CV0.js";import"./TextField-Bu0H7FDm.js";import"./useElementFilter-B1iwM1F1.js";import"./EmptyState-Q8TW8wRI.js";import"./Progress-Du1Y-hAb.js";import"./LinearProgress-BGyidou5.js";import"./ResponseErrorPanel-DQr1-hlc.js";import"./ErrorPanel-CviKhMbL.js";import"./WarningPanel-DL5bEf8i.js";import"./MarkdownContent-Cd-0px7e.js";import"./CodeSnippet-efFD3yCh.js";import"./CopyTextButton-CXB0NbHV.js";import"./useCopyToClipboard-D25QeEOU.js";import"./Tooltip-h3gwVkfT.js";import"./Popper-DQbZaLLQ.js";const G={results:[{type:"custom-result-item",document:{location:"search/search-result-1",title:"Search Result 1",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-2",title:"Search Result 2",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-3",title:"Search Result 3",text:"some text from the search result"}}]},ao={title:"Plugins/Search/SearchModal",component:m,decorators:[o=>k(t.jsx(g,{apis:[[B,new D(G)]],children:t.jsx(T,{children:t.jsx(o,{})})}),{mountedRoutes:{"/search":x}})]},s=()=>{const{state:o,toggleModal:a}=n();return t.jsxs(t.Fragment,{children:[t.jsx(c,{variant:"contained",color:"primary",onClick:a,children:"Toggle Search Modal"}),t.jsx(m,{...o,toggleModal:a})]})},A=d(o=>({titleContainer:{display:"flex",alignItems:"center",gap:o.spacing(1)},input:{flex:1},dialogActionsContainer:{padding:o.spacing(1,3)}})),i=()=>{const o=A(),{state:a,toggleModal:e}=n();return t.jsxs(t.Fragment,{children:[t.jsx(c,{variant:"contained",color:"primary",onClick:e,children:"Toggle Custom Search Modal"}),t.jsx(m,{...a,toggleModal:e,children:()=>t.jsxs(t.Fragment,{children:[t.jsx(f,{children:t.jsxs(C,{className:o.titleContainer,children:[t.jsx(v,{className:o.input}),t.jsx(u,{"aria-label":"close",onClick:e,children:t.jsx(h,{})})]})}),t.jsx(M,{children:t.jsxs(r,{container:!0,direction:"column",children:[t.jsx(r,{item:!0,children:t.jsx(y.Tabs,{defaultValue:"",types:[{value:"custom-result-item",name:"Custom Item"},{value:"no-custom-result-item",name:"No Custom Item"}]})}),t.jsx(r,{item:!0,children:t.jsx(b,{children:({results:p})=>t.jsx(I,{children:p.map(({document:l})=>t.jsx("div",{role:"button",tabIndex:0,onClick:e,onKeyPress:e,children:t.jsx(R,{result:l},l.location)},`${l.location}-btn`))})})})]})}),t.jsx(j,{className:o.dialogActionsContainer,children:t.jsx(r,{container:!0,direction:"row",children:t.jsx(r,{item:!0,xs:12,children:t.jsx(S,{})})})})]})})]})};s.__docgenInfo={description:"",methods:[],displayName:"Default"};i.__docgenInfo={description:"",methods:[],displayName:"CustomModal"};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
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
