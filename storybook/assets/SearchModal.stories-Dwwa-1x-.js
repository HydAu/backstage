import{j as t,m as d,I as u,b as h,T as g}from"./iframe-ClDSU7eH.js";import{r as x}from"./plugin-aN1PZ0ou.js";import{S as m,u as n,a as S}from"./useSearchModal-BQXkhYUc.js";import{B as c}from"./Button-BLajmhZP.js";import{a as f,b as M,c as j}from"./DialogTitle-DANsDeHD.js";import{B as C}from"./Box-Cxljpaoo.js";import{S as r}from"./Grid-mV-QABlU.js";import{S as y}from"./SearchType-DCZqt9OR.js";import{L as I}from"./List-BbkLtEZF.js";import{H as R}from"./DefaultResultListItem-Bmz626XF.js";import{s as B,M as D}from"./api-KBpVfXUe.js";import{S as T}from"./SearchContext-X1eakVS2.js";import{w as k}from"./appWrappers-G-Ndam_a.js";import{SearchBar as v}from"./SearchBar-Bmc43xiq.js";import{a as b}from"./SearchResult-7RhlHn0c.js";import"./preload-helper-D9Z9MdNV.js";import"./index-BDDlyC_L.js";import"./Plugin-CRqfFxk-.js";import"./componentData-CDZy28Da.js";import"./useAnalytics-B-0cQkPi.js";import"./useApp-B8hr0lnh.js";import"./useRouteRef-Pbj2lDBT.js";import"./index-H5rrlhPB.js";import"./ArrowForward-CUrEzInL.js";import"./translation-_3laMY78.js";import"./Page-DarsA8RK.js";import"./useMediaQuery-BuLpySSx.js";import"./Divider-BXbuj0VG.js";import"./ArrowBackIos-hQ7tMe_j.js";import"./ArrowForwardIos-O_AZe63X.js";import"./translation-BkyT2kxd.js";import"./Modal-C7JUlgaL.js";import"./Portal-DmQDyavD.js";import"./Backdrop-DMfQwbB0.js";import"./styled-BqebAAUt.js";import"./ExpandMore-C1RCBmqn.js";import"./useAsync-Dsvu6Zfc.js";import"./useMountedState-FFkX5aJt.js";import"./AccordionDetails-BRRfNhN6.js";import"./index-DnL3XN75.js";import"./Collapse-D-ZHo9zW.js";import"./ListItem-dodDOH8z.js";import"./ListContext-CmA_1Vly.js";import"./ListItemIcon-CfeFhi9v.js";import"./ListItemText-CITdacPb.js";import"./Tabs-BG0kJVUq.js";import"./KeyboardArrowRight-r8SlkSVV.js";import"./FormLabel-C1fBvi9k.js";import"./formControlState-ByiNFc8I.js";import"./useFormControl-BH5ltWWd.js";import"./InputLabel-CdLb7x7j.js";import"./Select-BSRD0UQg.js";import"./Popover-DptQBLkE.js";import"./MenuItem-BB308Wqj.js";import"./Checkbox-CDTR-i81.js";import"./SwitchBase-Bb4jHDOW.js";import"./Chip-Cwr03wFM.js";import"./Link-CtlywKiK.js";import"./lodash-CwBbdt2Q.js";import"./useObservable-B2nZnJvA.js";import"./useIsomorphicLayoutEffect-qXS2XSMG.js";import"./isSymbol-DhO4cmIY.js";import"./isObject--vsEa_js.js";import"./toString-Cr1IARFv.js";import"./Search-B1-LQi8X.js";import"./useDebounce-Bp-bDsfm.js";import"./InputAdornment-DZmXha_2.js";import"./TextField-DQ9scA0K.js";import"./useElementFilter-DzL3KBVl.js";import"./EmptyState-DzXEACFZ.js";import"./Progress-C9yoHTP8.js";import"./LinearProgress--1ABpkfG.js";import"./ResponseErrorPanel-ChgLeerL.js";import"./ErrorPanel-fEQPUK4N.js";import"./WarningPanel-MWDdRggK.js";import"./MarkdownContent-hcF9jGOf.js";import"./CodeSnippet-C1NCP6TT.js";import"./CopyTextButton-qppcfNHS.js";import"./useCopyToClipboard-CJScTRHQ.js";import"./Tooltip-C4VBCydo.js";import"./Popper-BXtW4PiG.js";const G={results:[{type:"custom-result-item",document:{location:"search/search-result-1",title:"Search Result 1",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-2",title:"Search Result 2",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-3",title:"Search Result 3",text:"some text from the search result"}}]},ao={title:"Plugins/Search/SearchModal",component:m,decorators:[o=>k(t.jsx(g,{apis:[[B,new D(G)]],children:t.jsx(T,{children:t.jsx(o,{})})}),{mountedRoutes:{"/search":x}})]},s=()=>{const{state:o,toggleModal:a}=n();return t.jsxs(t.Fragment,{children:[t.jsx(c,{variant:"contained",color:"primary",onClick:a,children:"Toggle Search Modal"}),t.jsx(m,{...o,toggleModal:a})]})},A=d(o=>({titleContainer:{display:"flex",alignItems:"center",gap:o.spacing(1)},input:{flex:1},dialogActionsContainer:{padding:o.spacing(1,3)}})),i=()=>{const o=A(),{state:a,toggleModal:e}=n();return t.jsxs(t.Fragment,{children:[t.jsx(c,{variant:"contained",color:"primary",onClick:e,children:"Toggle Custom Search Modal"}),t.jsx(m,{...a,toggleModal:e,children:()=>t.jsxs(t.Fragment,{children:[t.jsx(f,{children:t.jsxs(C,{className:o.titleContainer,children:[t.jsx(v,{className:o.input}),t.jsx(u,{"aria-label":"close",onClick:e,children:t.jsx(h,{})})]})}),t.jsx(M,{children:t.jsxs(r,{container:!0,direction:"column",children:[t.jsx(r,{item:!0,children:t.jsx(y.Tabs,{defaultValue:"",types:[{value:"custom-result-item",name:"Custom Item"},{value:"no-custom-result-item",name:"No Custom Item"}]})}),t.jsx(r,{item:!0,children:t.jsx(b,{children:({results:p})=>t.jsx(I,{children:p.map(({document:l})=>t.jsx("div",{role:"button",tabIndex:0,onClick:e,onKeyPress:e,children:t.jsx(R,{result:l},l.location)},`${l.location}-btn`))})})})]})}),t.jsx(j,{className:o.dialogActionsContainer,children:t.jsx(r,{container:!0,direction:"row",children:t.jsx(r,{item:!0,xs:12,children:t.jsx(S,{})})})})]})})]})};s.__docgenInfo={description:"",methods:[],displayName:"Default"};i.__docgenInfo={description:"",methods:[],displayName:"CustomModal"};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
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
