import{j as t}from"./iframe-jWBis4h7.js";import{HeaderWorldClock as m}from"./index-ByJwiQ_E.js";import{H as a}from"./Header-DuZsjd0P.js";import{w as l}from"./appWrappers-C7U-7ZHS.js";import"./preload-helper-D9Z9MdNV.js";import"./HeaderLabel-B-Ib6YeB.js";import"./Grid-D8aYrpF9.js";import"./Link-CsUbik3L.js";import"./lodash-CwBbdt2Q.js";import"./index-D-vQ19kG.js";import"./useAnalytics-jlg0poIO.js";import"./useApp-CwBIww-_.js";import"./Helmet-BZ0kdgXz.js";import"./Box-CUCIIvBq.js";import"./styled-DEXT6Cl3.js";import"./Breadcrumbs-C1abT0EH.js";import"./index-DnL3XN75.js";import"./Popover-Cipv1uQu.js";import"./Modal-D5_FmyLm.js";import"./Portal-4KhuVP8U.js";import"./List-DRbnC8gb.js";import"./ListContext-BUzb9c6E.js";import"./ListItem-D85OCTFr.js";import"./Page-BVeqQqNw.js";import"./useMediaQuery-DmSJbntX.js";import"./Tooltip-BbJdzgrj.js";import"./Popper-CmiAw98y.js";import"./useObservable-D5YF_B8Z.js";import"./useIsomorphicLayoutEffect-BdGY38Vk.js";import"./useAsync-vaYznZ30.js";import"./useMountedState-Cvh7ngWP.js";import"./componentData-DS2TgQM3.js";import"./isSymbol-DhO4cmIY.js";import"./isObject--vsEa_js.js";import"./toString-Cr1IARFv.js";const z={title:"Plugins/Home/Components/HeaderWorldClock",decorators:[o=>l(t.jsx(o,{}))]},e=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!0};return t.jsx(a,{title:"Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})},r=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!1};return t.jsx(a,{title:"24hr Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"TwentyFourHourClocks"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
