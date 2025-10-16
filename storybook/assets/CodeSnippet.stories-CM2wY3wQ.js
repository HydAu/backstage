import{j as e}from"./iframe-BI8Pro7f.js";import{C as t}from"./CodeSnippet-C9E1b8g_.js";import{I as o}from"./InfoCard-S2xfTdg5.js";import"./preload-helper-D9Z9MdNV.js";import"./Box-3xcahIa0.js";import"./styled-Bjq04UNE.js";import"./CopyTextButton-CoDigqXp.js";import"./useCopyToClipboard-BTA9GA9J.js";import"./useMountedState-CWtvRyiM.js";import"./Tooltip-D1isWZPn.js";import"./Popper-BpExO6xr.js";import"./Portal-Cr5K-csm.js";import"./CardContent-C1-xj4Fz.js";import"./ErrorBoundary-DaKUp-Um.js";import"./ErrorPanel-u63mASRC.js";import"./WarningPanel-CEY9DaGF.js";import"./ExpandMore-EtbpfiOU.js";import"./AccordionDetails-BS-C6m3j.js";import"./index-DnL3XN75.js";import"./Collapse-nmUVSlj4.js";import"./MarkdownContent-DzlTx7FO.js";import"./Grid-D8GQJQOJ.js";import"./List-KB2FjxVf.js";import"./ListContext-BkA_XZEO.js";import"./ListItem-Cd4T2JMt.js";import"./ListItemText-VQweID0d.js";import"./LinkButton-Cr7vpNSb.js";import"./Button-BO_R0us_.js";import"./Link-BDnsBgLw.js";import"./lodash-CwBbdt2Q.js";import"./index-TPQhUIn-.js";import"./useAnalytics-CQ3GCpgO.js";import"./useApp-Caa8lJd-.js";import"./CardHeader-CDAYgnUo.js";import"./Divider-CoYoOfS-.js";import"./CardActions-CWpk0kDm.js";import"./BottomLink-BrIjHtN1.js";import"./ArrowForward-B_QGjUs8.js";const X={title:"Data Display/CodeSnippet",component:t},d={width:300},r=`const greeting = "Hello";
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
