import{j as e,r as s}from"./iframe-BI8Pro7f.js";import{M as a,o as c,n as o}from"./Menu-DEzPY4ea.js";import"./Box-CKV9DehC.js";import"./Grid-Bi5HL2TV.js";import{F as x}from"./Flex-CMpCjbIV.js";import"./Container-BQegI0c_.js";import{B as l}from"./Button-Csz2a8Co.js";import"./Collapsible-CIMf2wqg.js";import"./FieldLabel-CwucIwKl.js";import"./SearchField-B52jAQQn.js";import"./ButtonIcon-kz094425.js";import"./ButtonLink-CNuNaPm8.js";import"./Checkbox-DnrIc_tW.js";import"./RadioGroup-DdaJxjpm.js";import"./Tabs-C8lGjaCO.js";import{T as g}from"./Text-BlQ0tqli.js";import"./TextField-9aZgKqU4.js";import"./Tooltip-CxkrUa8L.js";import"./Link-CteTzLiC.js";import"./Select-C4Pzhahw.js";import"./Skeleton-BGAKzvMy.js";import"./Switch-DaOaTQah.js";import{M as h}from"./index-TPQhUIn-.js";import"./preload-helper-D9Z9MdNV.js";import"./clsx-B-dksMZM.js";import"./useStyles-CwFuh9ox.js";import"./useAnimationsFinished-WY-auh0O.js";import"./RSPContexts-Dz3ysjiS.js";import"./utils-p5ebbTIB.js";import"./useFocusRing-CcX1Hlf3.js";import"./useListState-IgvBKgrs.js";import"./usePress-DUIF2cR0.js";import"./SelectionIndicator-7f9Jg_VC.js";import"./context-BbZDBxkw.js";import"./Hidden-D7iItngm.js";import"./useControlledState-Ba02jq7k.js";import"./OverlayArrow-C9RjMe1B.js";import"./index-DeVqhftR.js";import"./Button-CasoOvUO.js";import"./useLocalizedStringFormatter-DJnmewq2.js";import"./VisuallyHidden-BiAqxtpS.js";import"./FieldError-CE-X_ntH.js";import"./useLabels-BAWfyD6_.js";import"./isExternalLink-DzQTpl4p.js";import"./Input-B-zzMuOG.js";import"./useFormReset-EgoDaqQl.js";import"./Label-ByKN5buR.js";import"./Button.module-BfMMAORH.js";import"./Link-C-z5kL6i.js";import"./TextField.module-BvzK0gC1.js";import"./TextField-BpVXRtxO.js";const xe={title:"Backstage UI/MenuListBox",component:a,decorators:[r=>e.jsx(h,{children:e.jsx(r,{})})]},n={args:{children:null},render:()=>e.jsxs(a,{isOpen:!0,children:[e.jsx(l,{"aria-label":"Menu",children:"Menu"}),e.jsxs(c,{children:[e.jsx(o,{children:"Item 1"}),e.jsx(o,{children:"Item 2"}),e.jsx(o,{children:"Item 3"})]})]})},m={args:{...n.args},render:()=>{const[r,i]=s.useState(new Set(["paul"]));return e.jsxs(x,{direction:"column",gap:"2",align:"start",children:[e.jsxs(g,{children:["Selected: ",Array.from(r).join(", ")]}),e.jsxs(a,{isOpen:!0,children:[e.jsx(l,{"aria-label":"Menu",children:"Menu"}),e.jsxs(c,{selectionMode:"multiple",selectedKeys:r,onSelectionChange:i,children:[e.jsx(o,{id:"john",children:"John Lennon"},"item1"),e.jsx(o,{id:"paul",children:"Paul McCartney"},"item2"),e.jsx(o,{id:"george",children:"George Harrison"},"item3"),e.jsx(o,{id:"ringo",children:"Ringo Starr"},"item4")]})]})]})}},p={args:{...n.args},render:()=>{const[r,i]=s.useState([]);return s.useEffect(()=>{fetch("https://pokeapi.co/api/v2/pokemon?limit=1000").then(t=>t.json()).then(t=>{i(t.results)}).catch(t=>{console.error("Error fetching Pokemon:",t)})},[]),e.jsxs(a,{isOpen:!0,children:[e.jsx(l,{"aria-label":"Menu",children:"Menu"}),e.jsx(c,{items:r,virtualized:!0,children:r.map((t,d)=>e.jsx(o,{id:t.name,children:t.name.charAt(0).toLocaleUpperCase("en-US")+t.name.slice(1)},d))})]})}},u={args:{...n.args},render:()=>{const[r,i]=s.useState([]);return s.useEffect(()=>{fetch("https://pokeapi.co/api/v2/pokemon?limit=1000").then(t=>t.json()).then(t=>{i(t.results)}).catch(t=>{console.error("Error fetching Pokemon:",t)})},[]),e.jsxs(a,{isOpen:!0,children:[e.jsx(l,{"aria-label":"Menu",children:"Menu"}),e.jsx(c,{items:r,virtualized:!0,maxHeight:"300px",children:r.map((t,d)=>e.jsx(o,{id:t.name,children:t.name.charAt(0).toLocaleUpperCase("en-US")+t.name.slice(1)},d))})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    children: null
  },
  render: () => <MenuTrigger isOpen>
      <Button aria-label="Menu">Menu</Button>
      <MenuListBox>
        <MenuListBoxItem>Item 1</MenuListBoxItem>
        <MenuListBoxItem>Item 2</MenuListBoxItem>
        <MenuListBoxItem>Item 3</MenuListBoxItem>
      </MenuListBox>
    </MenuTrigger>
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  render: () => {
    const [selected, setSelected] = useState<Selection>(new Set(['paul']));
    return <Flex direction="column" gap="2" align="start">
        <Text>Selected: {Array.from(selected).join(', ')}</Text>
        <MenuTrigger isOpen>
          <Button aria-label="Menu">Menu</Button>
          <MenuListBox selectionMode="multiple" selectedKeys={selected} onSelectionChange={setSelected}>
            <MenuListBoxItem key="item1" id="john">
              John Lennon
            </MenuListBoxItem>
            <MenuListBoxItem key="item2" id="paul">
              Paul McCartney
            </MenuListBoxItem>
            <MenuListBoxItem key="item3" id="george">
              George Harrison
            </MenuListBoxItem>
            <MenuListBoxItem key="item4" id="ringo">
              Ringo Starr
            </MenuListBoxItem>
          </MenuListBox>
        </MenuTrigger>
      </Flex>;
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  render: () => {
    const [pokemon, setPokemon] = useState<Array<{
      name: string;
      url: string;
    }>>([]);
    useEffect(() => {
      fetch('https://pokeapi.co/api/v2/pokemon?limit=1000').then(response => response.json()).then(data => {
        setPokemon(data.results);
      }).catch(error => {
        console.error('Error fetching Pokemon:', error);
      });
    }, []);
    return <MenuTrigger isOpen>
        <Button aria-label="Menu">Menu</Button>
        <MenuListBox items={pokemon} virtualized>
          {pokemon.map((p, index) => <MenuListBoxItem key={index} id={p.name}>
              {p.name.charAt(0).toLocaleUpperCase('en-US') + p.name.slice(1)}
            </MenuListBoxItem>)}
        </MenuListBox>
      </MenuTrigger>;
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  render: () => {
    const [pokemon, setPokemon] = useState<Array<{
      name: string;
      url: string;
    }>>([]);
    useEffect(() => {
      fetch('https://pokeapi.co/api/v2/pokemon?limit=1000').then(response => response.json()).then(data => {
        setPokemon(data.results);
      }).catch(error => {
        console.error('Error fetching Pokemon:', error);
      });
    }, []);
    return <MenuTrigger isOpen>
        <Button aria-label="Menu">Menu</Button>
        <MenuListBox items={pokemon} virtualized maxHeight="300px">
          {pokemon.map((p, index) => <MenuListBoxItem key={index} id={p.name}>
              {p.name.charAt(0).toLocaleUpperCase('en-US') + p.name.slice(1)}
            </MenuListBoxItem>)}
        </MenuListBox>
      </MenuTrigger>;
  }
}`,...u.parameters?.docs?.source}}};const ge=["Default","Controlled","Virtualized","VirtualizedMaxHeight"];export{m as Controlled,n as Default,p as Virtualized,u as VirtualizedMaxHeight,ge as __namedExportsOrder,xe as default};
