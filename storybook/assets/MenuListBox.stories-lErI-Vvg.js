import{j as e,r as s}from"./iframe-ClDSU7eH.js";import{M as a,o as c,n as o}from"./Menu-ByPnU4MX.js";import"./Box-C0ToVCj4.js";import"./Grid-Dzw7n101.js";import{F as x}from"./Flex-vMypWodv.js";import"./Container-BTdwYJSb.js";import{B as l}from"./Button-sEaDgF2Q.js";import"./Collapsible-DwatXuhL.js";import"./FieldLabel-moLtn0S8.js";import"./SearchField-CWNpJc-D.js";import"./ButtonIcon-CyQFbWYQ.js";import"./ButtonLink-CWsa-68p.js";import"./Checkbox-ZXYP9CoH.js";import"./RadioGroup-BD5Mc4nt.js";import"./Tabs-Berit4M7.js";import{T as g}from"./Text-DgUPOHuK.js";import"./TextField-DGfn36Wm.js";import"./Tooltip-W5n0q4_k.js";import"./Link-CIFQ1VlD.js";import"./Select-DDPkC834.js";import"./Skeleton-BBbllpkb.js";import"./Switch-CTJImKWU.js";import{M as h}from"./index-H5rrlhPB.js";import"./preload-helper-D9Z9MdNV.js";import"./clsx-B-dksMZM.js";import"./useStyles-CdGzoO3X.js";import"./useAnimationsFinished-CKf9lboV.js";import"./RSPContexts-CBdBAqeo.js";import"./utils-CbMUr4_-.js";import"./useFocusRing-B_xEWiDZ.js";import"./useListState-BU6hvQHK.js";import"./usePress-DgS-Ilw-.js";import"./SelectionIndicator-q5NILn9M.js";import"./context-_0AYj0dC.js";import"./Hidden-CvVijwMq.js";import"./useControlledState-s-ePWh8H.js";import"./OverlayArrow-Dp4zXOLX.js";import"./index-DXgDN7CL.js";import"./Button-BWbnWBAl.js";import"./useLocalizedStringFormatter-7zaqeSPY.js";import"./VisuallyHidden-4hJD8Gbx.js";import"./FieldError-Cqmdaerq.js";import"./useLabels-Im-3CCId.js";import"./isExternalLink-DzQTpl4p.js";import"./Input-aT1fJiam.js";import"./useFormReset-Dt6z2_kS.js";import"./Label-B3PcGDwT.js";import"./Button.module-BfMMAORH.js";import"./Link-DQuQU6g_.js";import"./TextField.module-BvzK0gC1.js";import"./TextField-Bx3QCCVM.js";const xe={title:"Backstage UI/MenuListBox",component:a,decorators:[r=>e.jsx(h,{children:e.jsx(r,{})})]},n={args:{children:null},render:()=>e.jsxs(a,{isOpen:!0,children:[e.jsx(l,{"aria-label":"Menu",children:"Menu"}),e.jsxs(c,{children:[e.jsx(o,{children:"Item 1"}),e.jsx(o,{children:"Item 2"}),e.jsx(o,{children:"Item 3"})]})]})},m={args:{...n.args},render:()=>{const[r,i]=s.useState(new Set(["paul"]));return e.jsxs(x,{direction:"column",gap:"2",align:"start",children:[e.jsxs(g,{children:["Selected: ",Array.from(r).join(", ")]}),e.jsxs(a,{isOpen:!0,children:[e.jsx(l,{"aria-label":"Menu",children:"Menu"}),e.jsxs(c,{selectionMode:"multiple",selectedKeys:r,onSelectionChange:i,children:[e.jsx(o,{id:"john",children:"John Lennon"},"item1"),e.jsx(o,{id:"paul",children:"Paul McCartney"},"item2"),e.jsx(o,{id:"george",children:"George Harrison"},"item3"),e.jsx(o,{id:"ringo",children:"Ringo Starr"},"item4")]})]})]})}},p={args:{...n.args},render:()=>{const[r,i]=s.useState([]);return s.useEffect(()=>{fetch("https://pokeapi.co/api/v2/pokemon?limit=1000").then(t=>t.json()).then(t=>{i(t.results)}).catch(t=>{console.error("Error fetching Pokemon:",t)})},[]),e.jsxs(a,{isOpen:!0,children:[e.jsx(l,{"aria-label":"Menu",children:"Menu"}),e.jsx(c,{items:r,virtualized:!0,children:r.map((t,d)=>e.jsx(o,{id:t.name,children:t.name.charAt(0).toLocaleUpperCase("en-US")+t.name.slice(1)},d))})]})}},u={args:{...n.args},render:()=>{const[r,i]=s.useState([]);return s.useEffect(()=>{fetch("https://pokeapi.co/api/v2/pokemon?limit=1000").then(t=>t.json()).then(t=>{i(t.results)}).catch(t=>{console.error("Error fetching Pokemon:",t)})},[]),e.jsxs(a,{isOpen:!0,children:[e.jsx(l,{"aria-label":"Menu",children:"Menu"}),e.jsx(c,{items:r,virtualized:!0,maxHeight:"300px",children:r.map((t,d)=>e.jsx(o,{id:t.name,children:t.name.charAt(0).toLocaleUpperCase("en-US")+t.name.slice(1)},d))})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
