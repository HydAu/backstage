import{j as t}from"./iframe-tbK3y8nX.js";import{HeaderWorldClock as m}from"./index-Bm28YuJF.js";import{H as a}from"./Header-CZDwt0Ci.js";import{w as l}from"./appWrappers-BOPSHKwj.js";import"./preload-helper-D9Z9MdNV.js";import"./HeaderLabel-D0cx455f.js";import"./Grid-BAg5xRXe.js";import"./Link-DE5azwbI.js";import"./lodash-CwBbdt2Q.js";import"./index-CRcpJ08W.js";import"./useAnalytics-Ca8LGS_G.js";import"./useApp-GTt_SpSe.js";import"./Helmet-Bc0xIq1y.js";import"./Box-BCZ-oNFO.js";import"./styled-M6G78zdi.js";import"./Breadcrumbs-Bn8HJlKQ.js";import"./index-DnL3XN75.js";import"./Popover-DChvdoSK.js";import"./Modal-U8okL50X.js";import"./Portal-BOPEl2AS.js";import"./List-Bi9QNlgn.js";import"./ListContext-BeBAgmIy.js";import"./ListItem-6RdgEqss.js";import"./Page-BFVOhvgz.js";import"./useMediaQuery-BuUWZSMo.js";import"./Tooltip-h3gwVkfT.js";import"./Popper-DQbZaLLQ.js";import"./useObservable-nEL5u-FZ.js";import"./useIsomorphicLayoutEffect-C-K5d2D6.js";import"./useAsync-BLvygtRZ.js";import"./useMountedState-Csiy-iGP.js";import"./componentData-BJunciA8.js";import"./isSymbol-DhO4cmIY.js";import"./isObject--vsEa_js.js";import"./toString-Cr1IARFv.js";const z={title:"Plugins/Home/Components/HeaderWorldClock",decorators:[o=>l(t.jsx(o,{}))]},e=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!0};return t.jsx(a,{title:"Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})},r=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!1};return t.jsx(a,{title:"24hr Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"TwentyFourHourClocks"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
  const clockConfigs: ClockConfig[] = [{
    label: 'NYC',
    timeZone: 'America/New_York'
  }, {
    label: 'UTC',
    timeZone: 'UTC'
  }, {
    label: 'STO',
    timeZone: 'Europe/Stockholm'
  }, {
    label: 'TYO',
    timeZone: 'Asia/Tokyo'
  }];
  const timeFormat: Intl.DateTimeFormatOptions = {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  };
  return <Header title="Header World Clock" pageTitleOverride="Home">
      <HeaderWorldClock clockConfigs={clockConfigs} customTimeFormat={timeFormat} />
    </Header>;
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
  const clockConfigs: ClockConfig[] = [{
    label: 'NYC',
    timeZone: 'America/New_York'
  }, {
    label: 'UTC',
    timeZone: 'UTC'
  }, {
    label: 'STO',
    timeZone: 'Europe/Stockholm'
  }, {
    label: 'TYO',
    timeZone: 'Asia/Tokyo'
  }];
  const timeFormat: Intl.DateTimeFormatOptions = {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  };
  return <Header title="24hr Header World Clock" pageTitleOverride="Home">
      <HeaderWorldClock clockConfigs={clockConfigs} customTimeFormat={timeFormat} />
    </Header>;
}`,...r.parameters?.docs?.source}}};const B=["Default","TwentyFourHourClocks"];export{e as Default,r as TwentyFourHourClocks,B as __namedExportsOrder,z as default};
