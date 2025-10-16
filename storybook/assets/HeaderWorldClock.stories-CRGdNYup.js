import{j as t}from"./iframe-BI8Pro7f.js";import{HeaderWorldClock as m}from"./index-IblAQD_3.js";import{H as a}from"./Header-Hdzc6G8U.js";import{w as l}from"./appWrappers-8kwCd78J.js";import"./preload-helper-D9Z9MdNV.js";import"./HeaderLabel-qhZ4W4Vw.js";import"./Grid-D8GQJQOJ.js";import"./Link-BDnsBgLw.js";import"./lodash-CwBbdt2Q.js";import"./index-TPQhUIn-.js";import"./useAnalytics-CQ3GCpgO.js";import"./useApp-Caa8lJd-.js";import"./Helmet-BFFRyIRq.js";import"./Box-3xcahIa0.js";import"./styled-Bjq04UNE.js";import"./Breadcrumbs-BLEGOSlJ.js";import"./index-DnL3XN75.js";import"./Popover-y-Pu31St.js";import"./Modal-vWbjNuKz.js";import"./Portal-Cr5K-csm.js";import"./List-KB2FjxVf.js";import"./ListContext-BkA_XZEO.js";import"./ListItem-Cd4T2JMt.js";import"./Page-RkzAaV7W.js";import"./useMediaQuery-B_4Aw_dY.js";import"./Tooltip-D1isWZPn.js";import"./Popper-BpExO6xr.js";import"./useObservable-ZXyvSosG.js";import"./useIsomorphicLayoutEffect-ATJiyFtY.js";import"./useAsync-CQa60u-D.js";import"./useMountedState-CWtvRyiM.js";import"./componentData-CnSLruL9.js";import"./isSymbol-DhO4cmIY.js";import"./isObject--vsEa_js.js";import"./toString-Cr1IARFv.js";const z={title:"Plugins/Home/Components/HeaderWorldClock",decorators:[o=>l(t.jsx(o,{}))]},e=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!0};return t.jsx(a,{title:"Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})},r=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!1};return t.jsx(a,{title:"24hr Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"TwentyFourHourClocks"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
