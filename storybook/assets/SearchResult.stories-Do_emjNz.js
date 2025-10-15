import{ag as I,ah as L,ai as S,aj as j,s as g,j as t,T as D}from"./iframe-ClDSU7eH.js";import{c as f,D as v}from"./InsertDriveFile-I0DvjhRj.js";import{s as C,M as _}from"./api-KBpVfXUe.js";import{a as o,c as k}from"./SearchResult-7RhlHn0c.js";import{S as N}from"./SearchContext-X1eakVS2.js";import{L as R}from"./List-BbkLtEZF.js";import{H as n}from"./DefaultResultListItem-Bmz626XF.js";import{a as q}from"./SearchResultList-BzKnIjMG.js";import{L as w}from"./ListItem-dodDOH8z.js";import{w as A}from"./appWrappers-G-Ndam_a.js";import{c as E}from"./Plugin-CRqfFxk-.js";import{L as W}from"./Link-CtlywKiK.js";import"./preload-helper-D9Z9MdNV.js";import"./index-BDDlyC_L.js";import"./Add-BjQU1zOx.js";import"./ArrowForwardIos-O_AZe63X.js";import"./translation-BkyT2kxd.js";import"./MenuItem-BB308Wqj.js";import"./ListSubheader-B2wZwNCs.js";import"./Chip-Cwr03wFM.js";import"./Select-BSRD0UQg.js";import"./index-DnL3XN75.js";import"./Popover-DptQBLkE.js";import"./Modal-C7JUlgaL.js";import"./Portal-DmQDyavD.js";import"./formControlState-ByiNFc8I.js";import"./useFormControl-BH5ltWWd.js";import"./useAnalytics-B-0cQkPi.js";import"./EmptyState-DzXEACFZ.js";import"./Grid-mV-QABlU.js";import"./Progress-C9yoHTP8.js";import"./LinearProgress--1ABpkfG.js";import"./Box-Cxljpaoo.js";import"./styled-BqebAAUt.js";import"./ResponseErrorPanel-ChgLeerL.js";import"./ErrorPanel-fEQPUK4N.js";import"./WarningPanel-MWDdRggK.js";import"./ExpandMore-C1RCBmqn.js";import"./AccordionDetails-BRRfNhN6.js";import"./Collapse-D-ZHo9zW.js";import"./MarkdownContent-hcF9jGOf.js";import"./CodeSnippet-C1NCP6TT.js";import"./CopyTextButton-qppcfNHS.js";import"./useCopyToClipboard-CJScTRHQ.js";import"./useMountedState-FFkX5aJt.js";import"./Tooltip-C4VBCydo.js";import"./Popper-BXtW4PiG.js";import"./ListItemText-CITdacPb.js";import"./ListContext-CmA_1Vly.js";import"./Divider-BXbuj0VG.js";import"./useAsync-Dsvu6Zfc.js";import"./lodash-CwBbdt2Q.js";import"./useElementFilter-DzL3KBVl.js";import"./componentData-CDZy28Da.js";import"./ListItemIcon-CfeFhi9v.js";import"./useObservable-B2nZnJvA.js";import"./useIsomorphicLayoutEffect-qXS2XSMG.js";import"./isSymbol-DhO4cmIY.js";import"./isObject--vsEa_js.js";import"./toString-Cr1IARFv.js";import"./index-H5rrlhPB.js";import"./useApp-B8hr0lnh.js";import"./useRouteRef-Pbj2lDBT.js";var i={},y;function G(){if(y)return i;y=1;var s=I(),e=L();Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var r=e(S()),u=s(j()),x=(0,u.default)(r.createElement("path",{d:"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 14h-3v3h-2v-3H8v-2h3v-3h2v3h3v2zm-3-7V3.5L18.5 9H13z"}),"NoteAdd");return i.default=x,i}var H=G();const P=g(H),M={results:[{type:"custom-result-item",document:{location:"search/search-result-1",title:"Search Result 1",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-2",title:"Search Result 2",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-3",title:"Search Result 3",text:"some text from the search result"}}]},z=new _(M),Kt={title:"Plugins/Search/SearchResult",component:o,decorators:[s=>A(t.jsx(D,{apis:[[C,z]],children:t.jsx(N,{children:t.jsx(s,{})})}))]},h=s=>{const{result:e}=s;return t.jsx(w,{children:t.jsxs(W,{to:e.location,children:[e.title," - ",e.text]})})},a=()=>t.jsx(o,{children:({results:s})=>t.jsx(R,{children:s.map(({type:e,document:r})=>{switch(e){case"custom-result-item":return t.jsx(h,{result:r},r.location);default:return t.jsx(n,{result:r},r.location)}})})}),m=()=>{const s={term:"documentation"};return t.jsx(o,{query:s,children:({results:e})=>t.jsx(R,{children:e.map(({type:r,document:u})=>{switch(r){case"custom-result-item":return t.jsx(h,{result:u},u.location);default:return t.jsx(n,{result:u},u.location)}})})})},l=()=>t.jsx(o,{children:({results:s})=>t.jsx(q,{resultItems:s,renderResultItem:({type:e,document:r})=>{switch(e){case"custom-result-item":return t.jsx(h,{result:r},r.location);default:return t.jsx(n,{result:r},r.location)}}})}),c=()=>t.jsx(o,{children:({results:s})=>t.jsxs(t.Fragment,{children:[t.jsx(f,{icon:t.jsx(P,{}),title:"Custom",link:"See all custom results",resultItems:s.filter(({type:e})=>e==="custom-result-item"),renderResultItem:({document:e})=>t.jsx(h,{result:e},e.location)}),t.jsx(f,{icon:t.jsx(v,{}),title:"Default",resultItems:s.filter(({type:e})=>e!=="custom-result-item"),renderResultItem:({document:e})=>t.jsx(n,{result:e},e.location)})]})}),p=()=>t.jsx(o,{noResultsComponent:t.jsx(t.Fragment,{children:"No results were found"}),children:({results:s})=>t.jsx(R,{children:s.map(({type:e,document:r})=>{switch(e){case"custom-result-item":return t.jsx(h,{result:r},r.location);default:return t.jsx(n,{result:r},r.location)}})})}),d=()=>{const e=E({id:"plugin"}).provide(k({name:"DefaultResultListItem",component:async()=>n}));return t.jsx(o,{children:t.jsx(e,{})})};a.__docgenInfo={description:"",methods:[],displayName:"Default"};m.__docgenInfo={description:"",methods:[],displayName:"WithQuery"};l.__docgenInfo={description:"",methods:[],displayName:"ListLayout"};c.__docgenInfo={description:"",methods:[],displayName:"GroupLayout"};p.__docgenInfo={description:"",methods:[],displayName:"WithCustomNoResultsComponent"};d.__docgenInfo={description:"",methods:[],displayName:"UsingSearchResultItemExtensions"};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
  return <SearchResult>
      {({
      results
    }) => <List>
          {results.map(({
        type,
        document
      }) => {
        switch (type) {
          case 'custom-result-item':
            return <CustomResultListItem key={document.location} result={document} />;
          default:
            return <DefaultResultListItem key={document.location} result={document} />;
        }
      })}
        </List>}
    </SearchResult>;
}`,...a.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  const query = {
    term: 'documentation'
  };
  return <SearchResult query={query}>
      {({
      results
    }) => <List>
          {results.map(({
        type,
        document
      }) => {
        switch (type) {
          case 'custom-result-item':
            return <CustomResultListItem key={document.location} result={document} />;
          default:
            return <DefaultResultListItem key={document.location} result={document} />;
        }
      })}
        </List>}
    </SearchResult>;
}`,...m.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
  return <SearchResult>
      {({
      results
    }) => <SearchResultListLayout resultItems={results} renderResultItem={({
      type,
      document
    }) => {
      switch (type) {
        case 'custom-result-item':
          return <CustomResultListItem key={document.location} result={document} />;
        default:
          return <DefaultResultListItem key={document.location} result={document} />;
      }
    }} />}
    </SearchResult>;
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
  return <SearchResult>
      {({
      results
    }) => <>
          <SearchResultGroupLayout icon={<CustomIcon />} title="Custom" link="See all custom results" resultItems={results.filter(({
        type
      }) => type === 'custom-result-item')} renderResultItem={({
        document
      }) => <CustomResultListItem key={document.location} result={document} />} />
          <SearchResultGroupLayout icon={<DefaultIcon />} title="Default" resultItems={results.filter(({
        type
      }) => type !== 'custom-result-item')} renderResultItem={({
        document
      }) => <DefaultResultListItem key={document.location} result={document} />} />
        </>}
    </SearchResult>;
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  return <SearchResult noResultsComponent={<>No results were found</>}>
      {({
      results
    }) => <List>
          {results.map(({
        type,
        document
      }) => {
        switch (type) {
          case 'custom-result-item':
            return <CustomResultListItem key={document.location} result={document} />;
          default:
            return <DefaultResultListItem key={document.location} result={document} />;
        }
      })}
        </List>}
    </SearchResult>;
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  const plugin = createPlugin({
    id: 'plugin'
  });
  const DefaultResultItem = plugin.provide(createSearchResultListItemExtension({
    name: 'DefaultResultListItem',
    component: async () => DefaultResultListItem
  }));
  return <SearchResult>
      <DefaultResultItem />
    </SearchResult>;
}`,...d.parameters?.docs?.source}}};const Xt=["Default","WithQuery","ListLayout","GroupLayout","WithCustomNoResultsComponent","UsingSearchResultItemExtensions"];export{a as Default,c as GroupLayout,l as ListLayout,d as UsingSearchResultItemExtensions,p as WithCustomNoResultsComponent,m as WithQuery,Xt as __namedExportsOrder,Kt as default};
