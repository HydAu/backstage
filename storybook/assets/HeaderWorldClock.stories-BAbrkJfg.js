import{j as t}from"./iframe-B4X6F_0x.js";import{HeaderWorldClock as m}from"./index-Oa39oESU.js";import{H as a}from"./Header-CylTVovU.js";import{w as l}from"./appWrappers-CeFc1Cvg.js";import"./preload-helper-D9Z9MdNV.js";import"./HeaderLabel-DMLgiOVL.js";import"./Grid-ZwJT3o21.js";import"./Link-B2TbD7aZ.js";import"./lodash-CwBbdt2Q.js";import"./index-NOhwhBBM.js";import"./useAnalytics-BSNcizch.js";import"./useApp-DGYHvcrQ.js";import"./Helmet-cjBztiP3.js";import"./Box-CM-weRMN.js";import"./styled-CVRYyI1J.js";import"./Breadcrumbs-CtbzLLZx.js";import"./index-DnL3XN75.js";import"./Popover-DacelEVl.js";import"./Modal-2fo1PxSM.js";import"./Portal-CIuAqJxF.js";import"./List-vwHRiwvk.js";import"./ListContext-BKyvF85M.js";import"./ListItem-QaFfVGPd.js";import"./Page-BNEJ4CEG.js";import"./useMediaQuery-C9uF4GxB.js";import"./Tooltip-BMIOv8Ue.js";import"./Popper-CK-yREM8.js";import"./useObservable-NmSlnAuU.js";import"./useIsomorphicLayoutEffect-BCnlwChY.js";import"./useAsync-C_m9R5PV.js";import"./useMountedState-CnI8azb6.js";import"./componentData-J6B2uOlU.js";import"./isSymbol-DhO4cmIY.js";import"./isObject--vsEa_js.js";import"./toString-Cr1IARFv.js";const z={title:"Plugins/Home/Components/HeaderWorldClock",decorators:[o=>l(t.jsx(o,{}))]},e=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!0};return t.jsx(a,{title:"Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})},r=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!1};return t.jsx(a,{title:"24hr Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"TwentyFourHourClocks"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
