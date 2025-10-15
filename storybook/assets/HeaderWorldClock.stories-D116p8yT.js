import{j as t}from"./iframe-CHsD2EuT.js";import{HeaderWorldClock as m}from"./index-CYAFOv3T.js";import{H as a}from"./Header-vwnoezrH.js";import{w as l}from"./appWrappers-DdqkYj_x.js";import"./preload-helper-D9Z9MdNV.js";import"./HeaderLabel-Brk7oO11.js";import"./Grid-ShkV1KIY.js";import"./Link-BsDlIoMM.js";import"./lodash-CwBbdt2Q.js";import"./index-BbHI1k2U.js";import"./useAnalytics-PRgVyvQF.js";import"./useApp-DVBgpSzn.js";import"./Helmet-CsnGj3iA.js";import"./Box-CdGM7Pq7.js";import"./styled-cbCynbc2.js";import"./Breadcrumbs-CNY1twpN.js";import"./index-DnL3XN75.js";import"./Popover-DoxM5DBI.js";import"./Modal-BJrfhbcK.js";import"./Portal-BvSrCYBr.js";import"./List-DpjcHGvZ.js";import"./ListContext-BvqkXl1b.js";import"./ListItem-ChSdJMdN.js";import"./Page-Dm4oeTi5.js";import"./useMediaQuery-DduGKzz3.js";import"./Tooltip-B0mFDu31.js";import"./Popper-DoUxk0PL.js";import"./useObservable-D2AqWyv1.js";import"./useIsomorphicLayoutEffect-CyS7kGyR.js";import"./useAsync-C9BZ69ng.js";import"./useMountedState-FxyCjszr.js";import"./componentData-Bsx2Sq2E.js";import"./isSymbol-DhO4cmIY.js";import"./isObject--vsEa_js.js";import"./toString-Cr1IARFv.js";const z={title:"Plugins/Home/Components/HeaderWorldClock",decorators:[o=>l(t.jsx(o,{}))]},e=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!0};return t.jsx(a,{title:"Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})},r=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!1};return t.jsx(a,{title:"24hr Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"TwentyFourHourClocks"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
