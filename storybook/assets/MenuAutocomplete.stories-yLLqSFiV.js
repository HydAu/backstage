import{j as e,r as c}from"./iframe-ClDSU7eH.js";import{M as a,l as i,i as r,h as M,S as g}from"./Menu-ByPnU4MX.js";import"./Box-C0ToVCj4.js";import"./Grid-Dzw7n101.js";import"./Flex-vMypWodv.js";import"./Container-BTdwYJSb.js";import{B as s}from"./Button-sEaDgF2Q.js";import"./Collapsible-DwatXuhL.js";import"./FieldLabel-moLtn0S8.js";import"./SearchField-CWNpJc-D.js";import"./ButtonIcon-CyQFbWYQ.js";import"./ButtonLink-CWsa-68p.js";import"./Checkbox-ZXYP9CoH.js";import"./RadioGroup-BD5Mc4nt.js";import"./Tabs-Berit4M7.js";import"./Text-DgUPOHuK.js";import"./TextField-DGfn36Wm.js";import"./Tooltip-W5n0q4_k.js";import"./Link-CIFQ1VlD.js";import"./Select-DDPkC834.js";import"./Skeleton-BBbllpkb.js";import"./Switch-CTJImKWU.js";import{M as x}from"./index-H5rrlhPB.js";import"./preload-helper-D9Z9MdNV.js";import"./clsx-B-dksMZM.js";import"./useStyles-CdGzoO3X.js";import"./useAnimationsFinished-CKf9lboV.js";import"./RSPContexts-CBdBAqeo.js";import"./utils-CbMUr4_-.js";import"./useFocusRing-B_xEWiDZ.js";import"./useListState-BU6hvQHK.js";import"./usePress-DgS-Ilw-.js";import"./SelectionIndicator-q5NILn9M.js";import"./context-_0AYj0dC.js";import"./Hidden-CvVijwMq.js";import"./useControlledState-s-ePWh8H.js";import"./OverlayArrow-Dp4zXOLX.js";import"./index-DXgDN7CL.js";import"./Button-BWbnWBAl.js";import"./useLocalizedStringFormatter-7zaqeSPY.js";import"./VisuallyHidden-4hJD8Gbx.js";import"./FieldError-Cqmdaerq.js";import"./useLabels-Im-3CCId.js";import"./isExternalLink-DzQTpl4p.js";import"./Input-aT1fJiam.js";import"./useFormReset-Dt6z2_kS.js";import"./Label-B3PcGDwT.js";import"./Button.module-BfMMAORH.js";import"./Link-DQuQU6g_.js";import"./TextField.module-BvzK0gC1.js";import"./TextField-Bx3QCCVM.js";const ge={title:"Backstage UI/MenuAutocomplete",component:a,decorators:[t=>e.jsx(x,{children:e.jsx(t,{})})]},j=[{label:"Apple",value:"apple"},{label:"Banana",value:"banana"},{label:"Blueberry",value:"blueberry"},{label:"Cherry",value:"cherry"},{label:"Durian",value:"durian"},{label:"Elderberry",value:"elderberry"},{label:"Fig",value:"fig"},{label:"Grape",value:"grape"},{label:"Honeydew",value:"honeydew"}],o={args:{children:null},render:()=>e.jsxs(a,{isOpen:!0,children:[e.jsx(s,{"aria-label":"Menu",children:"Menu"}),e.jsxs(i,{placeholder:"Filter",children:[e.jsx(r,{children:"Create new file..."}),e.jsx(r,{children:"Create new folder..."}),e.jsx(r,{children:"Assign to..."}),e.jsx(r,{children:"Assign to me"}),e.jsx(r,{children:"Change status..."}),e.jsx(r,{children:"Change priority..."}),e.jsx(r,{children:"Add label..."}),e.jsx(r,{children:"Remove label..."})]})]})},l={args:{...o.args},render:()=>e.jsxs(a,{children:[e.jsx(s,{"aria-label":"Menu",children:"Menu"}),e.jsxs(i,{placeholder:"Filter",children:[e.jsx(r,{children:"Create new file..."}),e.jsx(r,{children:"Create new folder..."}),e.jsx(r,{children:"Assign to..."}),e.jsx(r,{children:"Assign to me"}),e.jsx(r,{children:"Change status..."}),e.jsx(r,{children:"Change priority..."}),e.jsx(r,{children:"Add label..."}),e.jsx(r,{children:"Remove label..."})]})]})},u={args:{...o.args},render:()=>{const[t,d]=c.useState([]);return c.useEffect(()=>{fetch("https://pokeapi.co/api/v2/pokemon?limit=1000").then(n=>n.json()).then(n=>{d(n.results)}).catch(n=>{console.error("Error fetching Pokemon:",n)})},[]),e.jsxs(a,{isOpen:!0,children:[e.jsx(s,{"aria-label":"Menu",children:"Menu"}),e.jsx(i,{items:t,placeholder:"Search Pokemon...",virtualized:!0,children:t.map((n,h)=>e.jsx(r,{id:n.name,children:n.name.charAt(0).toLocaleUpperCase("en-US")+n.name.slice(1)},h))})]})}},m={args:{...o.args},render:()=>{const[t,d]=c.useState([]);return c.useEffect(()=>{fetch("https://pokeapi.co/api/v2/pokemon?limit=1000").then(n=>n.json()).then(n=>{d(n.results)}).catch(n=>{console.error("Error fetching Pokemon:",n)})},[]),e.jsxs(a,{isOpen:!0,children:[e.jsx(s,{"aria-label":"Menu",children:"Menu"}),e.jsx(i,{items:t,placeholder:"Search Pokemon...",virtualized:!0,maxHeight:"300px",children:t.map((n,h)=>e.jsx(r,{id:n.name,children:n.name.charAt(0).toLocaleUpperCase("en-US")+n.name.slice(1)},h))})]})}},p={args:{...o.args},render:()=>e.jsxs(a,{isOpen:!0,children:[e.jsx(s,{"aria-label":"Menu",children:"Menu"}),e.jsxs(M,{children:[e.jsx(r,{children:"Edit"}),e.jsx(r,{children:"Duplicate"}),e.jsxs(g,{children:[e.jsx(r,{children:"Submenu"}),e.jsx(i,{placement:"right top",children:j.map(t=>e.jsx(r,{id:t.value,children:t.label},t.value))})]})]})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: null
  },
  render: () => <MenuTrigger isOpen>
      <Button aria-label="Menu">Menu</Button>
      <MenuAutocomplete placeholder="Filter">
        <MenuItem>Create new file...</MenuItem>
        <MenuItem>Create new folder...</MenuItem>
        <MenuItem>Assign to...</MenuItem>
        <MenuItem>Assign to me</MenuItem>
        <MenuItem>Change status...</MenuItem>
        <MenuItem>Change priority...</MenuItem>
        <MenuItem>Add label...</MenuItem>
        <MenuItem>Remove label...</MenuItem>
      </MenuAutocomplete>
    </MenuTrigger>
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  render: () => <MenuTrigger>
      <Button aria-label="Menu">Menu</Button>
      <MenuAutocomplete placeholder="Filter">
        <MenuItem>Create new file...</MenuItem>
        <MenuItem>Create new folder...</MenuItem>
        <MenuItem>Assign to...</MenuItem>
        <MenuItem>Assign to me</MenuItem>
        <MenuItem>Change status...</MenuItem>
        <MenuItem>Change priority...</MenuItem>
        <MenuItem>Add label...</MenuItem>
        <MenuItem>Remove label...</MenuItem>
      </MenuAutocomplete>
    </MenuTrigger>
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
        <MenuAutocomplete items={pokemon} placeholder="Search Pokemon..." virtualized>
          {pokemon.map((p, index) => <MenuItem key={index} id={p.name}>
              {p.name.charAt(0).toLocaleUpperCase('en-US') + p.name.slice(1)}
            </MenuItem>)}
        </MenuAutocomplete>
      </MenuTrigger>;
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
        <MenuAutocomplete items={pokemon} placeholder="Search Pokemon..." virtualized maxHeight="300px">
          {pokemon.map((p, index) => <MenuItem key={index} id={p.name}>
              {p.name.charAt(0).toLocaleUpperCase('en-US') + p.name.slice(1)}
            </MenuItem>)}
        </MenuAutocomplete>
      </MenuTrigger>;
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  render: () => <MenuTrigger isOpen>
      <Button aria-label="Menu">Menu</Button>
      <Menu>
        <MenuItem>Edit</MenuItem>
        <MenuItem>Duplicate</MenuItem>
        <SubmenuTrigger>
          <MenuItem>Submenu</MenuItem>
          <MenuAutocomplete placement="right top">
            {options.map(option => <MenuItem key={option.value} id={option.value}>
                {option.label}
              </MenuItem>)}
          </MenuAutocomplete>
        </SubmenuTrigger>
      </Menu>
    </MenuTrigger>
}`,...p.parameters?.docs?.source}}};const xe=["Default","PreviewAutocompleteMenu","Virtualized","VirtualizedMaxHeight","Submenu"];export{o as Default,l as PreviewAutocompleteMenu,p as Submenu,u as Virtualized,m as VirtualizedMaxHeight,xe as __namedExportsOrder,ge as default};
