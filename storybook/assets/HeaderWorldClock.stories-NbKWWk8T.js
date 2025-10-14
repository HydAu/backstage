import{j as t}from"./iframe-CitiFnN5.js";import{HeaderWorldClock as m}from"./index-1zz7gnlt.js";import{H as a}from"./Header-B2ldGT8B.js";import{w as l}from"./appWrappers-DqiUoBg7.js";import"./preload-helper-D9Z9MdNV.js";import"./HeaderLabel-CmPNu7vh.js";import"./Grid-DpKvFoNc.js";import"./Link-BfePrfSY.js";import"./lodash-CwBbdt2Q.js";import"./index-fphZrsnp.js";import"./useAnalytics-8chgUF4h.js";import"./useApp-DKlj7zYu.js";import"./Helmet-DJA2T0an.js";import"./Box-BKmfHdf8.js";import"./styled-CI8mNsbD.js";import"./Breadcrumbs-Bbs7-G7p.js";import"./index-DnL3XN75.js";import"./Popover-BZSD0G5I.js";import"./Modal-B9Dxx05R.js";import"./Portal-CLxHSMha.js";import"./List-CIibtwkv.js";import"./ListContext-BOtrsLMB.js";import"./ListItem-Cazl4cxi.js";import"./Page-CQXY2lAx.js";import"./useMediaQuery-DYn4AP_1.js";import"./Tooltip-29C2-qED.js";import"./Popper-CC3GX7Gx.js";import"./useObservable-B7G4XzLu.js";import"./useIsomorphicLayoutEffect-CTYGaF45.js";import"./useAsync-Cfc7VOKF.js";import"./useMountedState-BHqHaaST.js";import"./componentData-C_a9Rk_9.js";import"./isSymbol-DhO4cmIY.js";import"./isObject--vsEa_js.js";import"./toString-Cr1IARFv.js";const z={title:"Plugins/Home/Components/HeaderWorldClock",decorators:[o=>l(t.jsx(o,{}))]},e=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!0};return t.jsx(a,{title:"Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})},r=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!1};return t.jsx(a,{title:"24hr Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"TwentyFourHourClocks"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
