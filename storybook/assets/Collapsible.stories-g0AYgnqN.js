import{j as e}from"./iframe-BI8Pro7f.js";import{C as t}from"./Collapsible-CIMf2wqg.js";import{B as n}from"./Button-Csz2a8Co.js";import{B as l}from"./Box-CKV9DehC.js";import{T as a}from"./Text-BlQ0tqli.js";import{V as p,f as d}from"./index-DeVqhftR.js";import"./preload-helper-D9Z9MdNV.js";import"./clsx-B-dksMZM.js";import"./useStyles-CwFuh9ox.js";import"./useAnimationsFinished-WY-auh0O.js";import"./Button-CasoOvUO.js";import"./utils-p5ebbTIB.js";import"./Hidden-D7iItngm.js";import"./useFocusRing-CcX1Hlf3.js";import"./usePress-DUIF2cR0.js";import"./Button.module-BfMMAORH.js";const O={title:"Backstage UI/Collapsible",component:t.Root},r={args:{style:{display:"flex",flexDirection:"column",gap:"var(--bui-space-2)",alignItems:"center"},children:e.jsxs(e.Fragment,{children:[e.jsx(t.Trigger,{render:(i,s)=>e.jsx(n,{variant:"secondary",iconEnd:s.open?e.jsx(p,{}):e.jsx(d,{}),...i,children:s.open?"Close Panel":"Open Panel"})}),e.jsx(t.Panel,{children:e.jsxs(l,{p:"4",style:{border:"1px solid var(--bui-border)",backgroundColor:"var(--bui-bg-surface-1)",color:"var(--bui-fg-primary)",borderRadius:"var(--bui-radius-2)",width:"460px"},children:[e.jsx(a,{children:"It's the edge of the world and all of Western civilization"}),e.jsx(a,{children:"The sun may rise in the East, at least it settled in a final location"}),e.jsx(a,{children:"It's understood that Hollywood sells Californication"})]})})]})}},o={args:{...r.args,defaultOpen:!0}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--bui-space-2)',
      alignItems: 'center'
    },
    children: <>
        <Collapsible.Trigger render={(props, state) => <Button variant="secondary" iconEnd={state.open ? <RiArrowUpSLine /> : <RiArrowDownSLine />} {...props}>
              {state.open ? 'Close Panel' : 'Open Panel'}
            </Button>} />
        <Collapsible.Panel>
          <Box p="4" style={{
          border: '1px solid var(--bui-border)',
          backgroundColor: 'var(--bui-bg-surface-1)',
          color: 'var(--bui-fg-primary)',
          borderRadius: 'var(--bui-radius-2)',
          width: '460px'
        }}>
            <Text>
              It's the edge of the world and all of Western civilization
            </Text>
            <Text>
              The sun may rise in the East, at least it settled in a final
              location
            </Text>
            <Text>It's understood that Hollywood sells Californication</Text>
          </Box>
        </Collapsible.Panel>
      </>
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    defaultOpen: true
  }
}`,...o.parameters?.docs?.source}}};const P=["Default","Open"];export{r as Default,o as Open,P as __namedExportsOrder,O as default};
