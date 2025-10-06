import{j as t,m as d,I as u,b as h,T as g}from"./iframe-B4X6F_0x.js";import{r as x}from"./plugin-CMnPVaO1.js";import{S as m,u as n,a as S}from"./useSearchModal-Cw6zIeIn.js";import{B as c}from"./Button-ZQtLd7ms.js";import{a as f,b as M,c as j}from"./DialogTitle-BEbL0zeX.js";import{B as C}from"./Box-CM-weRMN.js";import{S as r}from"./Grid-ZwJT3o21.js";import{S as y}from"./SearchType-CGJb3tE1.js";import{L as I}from"./List-vwHRiwvk.js";import{H as R}from"./DefaultResultListItem-BvyVfVz2.js";import{s as B,M as D}from"./api-BowG0gUM.js";import{S as T}from"./SearchContext-CQY1dIcC.js";import{w as k}from"./appWrappers-CeFc1Cvg.js";import{SearchBar as v}from"./SearchBar-DK1Ya-dq.js";import{a as b}from"./SearchResult-2_xeogbt.js";import"./preload-helper-D9Z9MdNV.js";import"./index-DIdMqwtI.js";import"./Plugin-CdMpVrep.js";import"./componentData-J6B2uOlU.js";import"./useAnalytics-BSNcizch.js";import"./useApp-DGYHvcrQ.js";import"./useRouteRef-CmW6B4H-.js";import"./index-NOhwhBBM.js";import"./ArrowForward-Dvlb0E-q.js";import"./translation-DOEDtMWo.js";import"./Page-BNEJ4CEG.js";import"./useMediaQuery-C9uF4GxB.js";import"./Divider-BxdCXeWj.js";import"./ArrowBackIos-C0QxWxtf.js";import"./ArrowForwardIos-CWSSXfhG.js";import"./translation-DcNoAL0S.js";import"./Modal-2fo1PxSM.js";import"./Portal-CIuAqJxF.js";import"./Backdrop-B-5U3nyc.js";import"./styled-CVRYyI1J.js";import"./ExpandMore-Bc1vnfZW.js";import"./useAsync-C_m9R5PV.js";import"./useMountedState-CnI8azb6.js";import"./AccordionDetails-DdV6AcrO.js";import"./index-DnL3XN75.js";import"./Collapse-CkfWvcnj.js";import"./ListItem-QaFfVGPd.js";import"./ListContext-BKyvF85M.js";import"./ListItemIcon-Pkd8oR80.js";import"./ListItemText-wAc4HvDm.js";import"./Tabs-TNizneAH.js";import"./KeyboardArrowRight-D_OdZFoF.js";import"./FormLabel-HlB1Aj1Z.js";import"./formControlState-ByiNFc8I.js";import"./useFormControl-EK911bBs.js";import"./InputLabel-CqBYomX2.js";import"./Select-B29Q9Cz5.js";import"./Popover-DacelEVl.js";import"./MenuItem-DEvu9dAp.js";import"./Checkbox-BNBlKE1M.js";import"./SwitchBase-CmZ0f_L_.js";import"./Chip-DBAMP3Lh.js";import"./Link-B2TbD7aZ.js";import"./lodash-CwBbdt2Q.js";import"./useObservable-NmSlnAuU.js";import"./useIsomorphicLayoutEffect-BCnlwChY.js";import"./isSymbol-DhO4cmIY.js";import"./isObject--vsEa_js.js";import"./toString-Cr1IARFv.js";import"./Search-B6T1ahpZ.js";import"./useDebounce-CLjPK7oY.js";import"./InputAdornment-CE42VfeX.js";import"./TextField-De1gxWAA.js";import"./useElementFilter-BJluBSXw.js";import"./EmptyState-BZS6Koar.js";import"./Progress-izDX7a1X.js";import"./LinearProgress-YI6W4RYW.js";import"./ResponseErrorPanel-DLYxPpVC.js";import"./ErrorPanel-x2Exa-vN.js";import"./WarningPanel-BSlzZ-z1.js";import"./MarkdownContent-DxpfpkJA.js";import"./CodeSnippet-CK3MA9Mp.js";import"./CopyTextButton-BdOgsKDJ.js";import"./useCopyToClipboard-VqbKvAXq.js";import"./Tooltip-BMIOv8Ue.js";import"./Popper-CK-yREM8.js";const G={results:[{type:"custom-result-item",document:{location:"search/search-result-1",title:"Search Result 1",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-2",title:"Search Result 2",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-3",title:"Search Result 3",text:"some text from the search result"}}]},ao={title:"Plugins/Search/SearchModal",component:m,decorators:[o=>k(t.jsx(g,{apis:[[B,new D(G)]],children:t.jsx(T,{children:t.jsx(o,{})})}),{mountedRoutes:{"/search":x}})]},s=()=>{const{state:o,toggleModal:a}=n();return t.jsxs(t.Fragment,{children:[t.jsx(c,{variant:"contained",color:"primary",onClick:a,children:"Toggle Search Modal"}),t.jsx(m,{...o,toggleModal:a})]})},A=d(o=>({titleContainer:{display:"flex",alignItems:"center",gap:o.spacing(1)},input:{flex:1},dialogActionsContainer:{padding:o.spacing(1,3)}})),i=()=>{const o=A(),{state:a,toggleModal:e}=n();return t.jsxs(t.Fragment,{children:[t.jsx(c,{variant:"contained",color:"primary",onClick:e,children:"Toggle Custom Search Modal"}),t.jsx(m,{...a,toggleModal:e,children:()=>t.jsxs(t.Fragment,{children:[t.jsx(f,{children:t.jsxs(C,{className:o.titleContainer,children:[t.jsx(v,{className:o.input}),t.jsx(u,{"aria-label":"close",onClick:e,children:t.jsx(h,{})})]})}),t.jsx(M,{children:t.jsxs(r,{container:!0,direction:"column",children:[t.jsx(r,{item:!0,children:t.jsx(y.Tabs,{defaultValue:"",types:[{value:"custom-result-item",name:"Custom Item"},{value:"no-custom-result-item",name:"No Custom Item"}]})}),t.jsx(r,{item:!0,children:t.jsx(b,{children:({results:p})=>t.jsx(I,{children:p.map(({document:l})=>t.jsx("div",{role:"button",tabIndex:0,onClick:e,onKeyPress:e,children:t.jsx(R,{result:l},l.location)},`${l.location}-btn`))})})})]})}),t.jsx(j,{className:o.dialogActionsContainer,children:t.jsx(r,{container:!0,direction:"row",children:t.jsx(r,{item:!0,xs:12,children:t.jsx(S,{})})})})]})})]})};s.__docgenInfo={description:"",methods:[],displayName:"Default"};i.__docgenInfo={description:"",methods:[],displayName:"CustomModal"};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
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
