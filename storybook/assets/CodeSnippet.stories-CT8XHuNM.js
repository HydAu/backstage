import{j as e}from"./iframe-tbK3y8nX.js";import{C as t}from"./CodeSnippet-efFD3yCh.js";import{I as o}from"./InfoCard-C4UdfDxp.js";import"./preload-helper-D9Z9MdNV.js";import"./Box-BCZ-oNFO.js";import"./styled-M6G78zdi.js";import"./CopyTextButton-CXB0NbHV.js";import"./useCopyToClipboard-D25QeEOU.js";import"./useMountedState-Csiy-iGP.js";import"./Tooltip-h3gwVkfT.js";import"./Popper-DQbZaLLQ.js";import"./Portal-BOPEl2AS.js";import"./CardContent-BIrqtayU.js";import"./ErrorBoundary-j5l0SlT4.js";import"./ErrorPanel-CviKhMbL.js";import"./WarningPanel-DL5bEf8i.js";import"./ExpandMore-D8nHmAmY.js";import"./AccordionDetails-DPK0aD3x.js";import"./index-DnL3XN75.js";import"./Collapse-Bh_wToR2.js";import"./MarkdownContent-Cd-0px7e.js";import"./Grid-BAg5xRXe.js";import"./List-Bi9QNlgn.js";import"./ListContext-BeBAgmIy.js";import"./ListItem-6RdgEqss.js";import"./ListItemText-CXoBTj8M.js";import"./LinkButton-U_UDo8uH.js";import"./Button-BPmN-jRE.js";import"./Link-DE5azwbI.js";import"./lodash-CwBbdt2Q.js";import"./index-CRcpJ08W.js";import"./useAnalytics-Ca8LGS_G.js";import"./useApp-GTt_SpSe.js";import"./CardHeader-mtuq8CPr.js";import"./Divider-DdPHUg49.js";import"./CardActions-CMnyjTSo.js";import"./BottomLink-DPErq0LZ.js";import"./ArrowForward-BzTQuCuj.js";const X={title:"Data Display/CodeSnippet",component:t},d={width:300},r=`const greeting = "Hello";
const world = "World";

const greet = person => greeting + " " + person + "!";

greet(world);
`,m=`const greeting: string = "Hello";
const world: string = "World";

const greet = (person: string): string => greeting + " " + person + "!";

greet(world);
`,c=`greeting = "Hello"
world = "World"

def greet(person):
    return f"{greeting} {person}!"

greet(world)
`,s=()=>e.jsx(o,{title:"JavaScript example",children:e.jsx(t,{text:"const hello = 'World';",language:"javascript"})}),a=()=>e.jsx(o,{title:"JavaScript multi-line example",children:e.jsx(t,{text:r,language:"javascript"})}),i=()=>e.jsx(o,{title:"Show line numbers",children:e.jsx(t,{text:r,language:"javascript",showLineNumbers:!0})}),n=()=>e.jsxs(o,{title:"Overflow",children:[e.jsx("div",{style:d,children:e.jsx(t,{text:r,language:"javascript"})}),e.jsx("div",{style:d,children:e.jsx(t,{text:r,language:"javascript",showLineNumbers:!0})})]}),p=()=>e.jsxs(o,{title:"Multiple languages",children:[e.jsx(t,{text:r,language:"javascript",showLineNumbers:!0}),e.jsx(t,{text:m,language:"typescript",showLineNumbers:!0}),e.jsx(t,{text:c,language:"python",showLineNumbers:!0})]}),l=()=>e.jsx(o,{title:"Copy Code",children:e.jsx(t,{text:r,language:"javascript",showCopyCodeButton:!0})});s.__docgenInfo={description:"",methods:[],displayName:"Default"};a.__docgenInfo={description:"",methods:[],displayName:"MultipleLines"};i.__docgenInfo={description:"",methods:[],displayName:"LineNumbers"};n.__docgenInfo={description:"",methods:[],displayName:"Overflow"};p.__docgenInfo={description:"",methods:[],displayName:"Languages"};l.__docgenInfo={description:"",methods:[],displayName:"CopyCode"};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => <InfoCard title="JavaScript example">
    <CodeSnippet text="const hello = 'World';" language="javascript" />
  </InfoCard>`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => <InfoCard title="JavaScript multi-line example">
    <CodeSnippet text={JAVASCRIPT} language="javascript" />
  </InfoCard>`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => <InfoCard title="Show line numbers">
    <CodeSnippet text={JAVASCRIPT} language="javascript" showLineNumbers />
  </InfoCard>`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => <InfoCard title="Overflow">
    <div style={containerStyle}>
      <CodeSnippet text={JAVASCRIPT} language="javascript" />
    </div>
    <div style={containerStyle}>
      <CodeSnippet text={JAVASCRIPT} language="javascript" showLineNumbers />
    </div>
  </InfoCard>`,...n.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => <InfoCard title="Multiple languages">
    <CodeSnippet text={JAVASCRIPT} language="javascript" showLineNumbers />
    <CodeSnippet text={TYPESCRIPT} language="typescript" showLineNumbers />
    <CodeSnippet text={PYTHON} language="python" showLineNumbers />
  </InfoCard>`,...p.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => <InfoCard title="Copy Code">
    <CodeSnippet text={JAVASCRIPT} language="javascript" showCopyCodeButton />
  </InfoCard>`,...l.parameters?.docs?.source}}};const Z=["Default","MultipleLines","LineNumbers","Overflow","Languages","CopyCode"];export{l as CopyCode,s as Default,p as Languages,i as LineNumbers,a as MultipleLines,n as Overflow,Z as __namedExportsOrder,X as default};
