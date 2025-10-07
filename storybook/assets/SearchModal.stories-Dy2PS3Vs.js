import{j as t,m as d,I as u,b as h,T as g}from"./iframe-jWBis4h7.js";import{r as x}from"./plugin-DAtIdSk0.js";import{S as m,u as n,a as S}from"./useSearchModal-Bw4TAbB4.js";import{B as c}from"./Button-DBGk0ho8.js";import{a as f,b as M,c as j}from"./DialogTitle-DNYHgUxA.js";import{B as C}from"./Box-CUCIIvBq.js";import{S as r}from"./Grid-D8aYrpF9.js";import{S as y}from"./SearchType-wJsKH3Dj.js";import{L as I}from"./List-DRbnC8gb.js";import{H as R}from"./DefaultResultListItem-Byek41Cx.js";import{s as B,M as D}from"./api-DKvEHlVi.js";import{S as T}from"./SearchContext-1_lpq6Ow.js";import{w as k}from"./appWrappers-C7U-7ZHS.js";import{SearchBar as v}from"./SearchBar-CW-6q5TX.js";import{a as b}from"./SearchResult-DiyMpsWM.js";import"./preload-helper-D9Z9MdNV.js";import"./index-BLwk-Kem.js";import"./Plugin-B5tIYXE1.js";import"./componentData-DS2TgQM3.js";import"./useAnalytics-jlg0poIO.js";import"./useApp-CwBIww-_.js";import"./useRouteRef-CyRjGecq.js";import"./index-D-vQ19kG.js";import"./ArrowForward-KHtjW8ra.js";import"./translation-BKEd5L-c.js";import"./Page-BVeqQqNw.js";import"./useMediaQuery-DmSJbntX.js";import"./Divider-bZzN0Vut.js";import"./ArrowBackIos-BcxBPZEG.js";import"./ArrowForwardIos-BVWui8NW.js";import"./translation-Bf6B4Dhm.js";import"./Modal-D5_FmyLm.js";import"./Portal-4KhuVP8U.js";import"./Backdrop-CL5Nu-FS.js";import"./styled-DEXT6Cl3.js";import"./ExpandMore-h50IjFe8.js";import"./useAsync-vaYznZ30.js";import"./useMountedState-Cvh7ngWP.js";import"./AccordionDetails-Cs-BCEd9.js";import"./index-DnL3XN75.js";import"./Collapse-zBcmKg9Q.js";import"./ListItem-D85OCTFr.js";import"./ListContext-BUzb9c6E.js";import"./ListItemIcon-DXS1108e.js";import"./ListItemText-C8hT2w5k.js";import"./Tabs-DZCMhlcJ.js";import"./KeyboardArrowRight-C2CzLDyd.js";import"./FormLabel-BufvR897.js";import"./formControlState-ByiNFc8I.js";import"./useFormControl-DK_f_k8A.js";import"./InputLabel-BxE7SksL.js";import"./Select-DBHkhuA8.js";import"./Popover-Cipv1uQu.js";import"./MenuItem-BnOyGaY-.js";import"./Checkbox-B64siRKW.js";import"./SwitchBase-BptSELIf.js";import"./Chip-p4NPV2rs.js";import"./Link-CsUbik3L.js";import"./lodash-CwBbdt2Q.js";import"./useObservable-D5YF_B8Z.js";import"./useIsomorphicLayoutEffect-BdGY38Vk.js";import"./isSymbol-DhO4cmIY.js";import"./isObject--vsEa_js.js";import"./toString-Cr1IARFv.js";import"./Search-Bap-VmHt.js";import"./useDebounce-Cv47Zn8d.js";import"./InputAdornment-CVLO1HSl.js";import"./TextField-B8MGBn1B.js";import"./useElementFilter-CnC5NXcr.js";import"./EmptyState-C2Jsr6uX.js";import"./Progress-BgzBg2_z.js";import"./LinearProgress-YQjcKaKO.js";import"./ResponseErrorPanel-B25Qel5H.js";import"./ErrorPanel-D2vNcph3.js";import"./WarningPanel-ptGc0XmP.js";import"./MarkdownContent-Df7rUt_g.js";import"./CodeSnippet-uFx7jUsz.js";import"./CopyTextButton-BSsLec9-.js";import"./useCopyToClipboard-vfU7HED5.js";import"./Tooltip-BbJdzgrj.js";import"./Popper-CmiAw98y.js";const G={results:[{type:"custom-result-item",document:{location:"search/search-result-1",title:"Search Result 1",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-2",title:"Search Result 2",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-3",title:"Search Result 3",text:"some text from the search result"}}]},ao={title:"Plugins/Search/SearchModal",component:m,decorators:[o=>k(t.jsx(g,{apis:[[B,new D(G)]],children:t.jsx(T,{children:t.jsx(o,{})})}),{mountedRoutes:{"/search":x}})]},s=()=>{const{state:o,toggleModal:a}=n();return t.jsxs(t.Fragment,{children:[t.jsx(c,{variant:"contained",color:"primary",onClick:a,children:"Toggle Search Modal"}),t.jsx(m,{...o,toggleModal:a})]})},A=d(o=>({titleContainer:{display:"flex",alignItems:"center",gap:o.spacing(1)},input:{flex:1},dialogActionsContainer:{padding:o.spacing(1,3)}})),i=()=>{const o=A(),{state:a,toggleModal:e}=n();return t.jsxs(t.Fragment,{children:[t.jsx(c,{variant:"contained",color:"primary",onClick:e,children:"Toggle Custom Search Modal"}),t.jsx(m,{...a,toggleModal:e,children:()=>t.jsxs(t.Fragment,{children:[t.jsx(f,{children:t.jsxs(C,{className:o.titleContainer,children:[t.jsx(v,{className:o.input}),t.jsx(u,{"aria-label":"close",onClick:e,children:t.jsx(h,{})})]})}),t.jsx(M,{children:t.jsxs(r,{container:!0,direction:"column",children:[t.jsx(r,{item:!0,children:t.jsx(y.Tabs,{defaultValue:"",types:[{value:"custom-result-item",name:"Custom Item"},{value:"no-custom-result-item",name:"No Custom Item"}]})}),t.jsx(r,{item:!0,children:t.jsx(b,{children:({results:p})=>t.jsx(I,{children:p.map(({document:l})=>t.jsx("div",{role:"button",tabIndex:0,onClick:e,onKeyPress:e,children:t.jsx(R,{result:l},l.location)},`${l.location}-btn`))})})})]})}),t.jsx(j,{className:o.dialogActionsContainer,children:t.jsx(r,{container:!0,direction:"row",children:t.jsx(r,{item:!0,xs:12,children:t.jsx(S,{})})})})]})})]})};s.__docgenInfo={description:"",methods:[],displayName:"Default"};i.__docgenInfo={description:"",methods:[],displayName:"CustomModal"};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
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
