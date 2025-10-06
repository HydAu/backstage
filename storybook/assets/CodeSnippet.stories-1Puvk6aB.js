import{j as e}from"./iframe-B4X6F_0x.js";import{C as t}from"./CodeSnippet-CK3MA9Mp.js";import{I as o}from"./InfoCard-C-ZJpiAQ.js";import"./preload-helper-D9Z9MdNV.js";import"./Box-CM-weRMN.js";import"./styled-CVRYyI1J.js";import"./CopyTextButton-BdOgsKDJ.js";import"./useCopyToClipboard-VqbKvAXq.js";import"./useMountedState-CnI8azb6.js";import"./Tooltip-BMIOv8Ue.js";import"./Popper-CK-yREM8.js";import"./Portal-CIuAqJxF.js";import"./CardContent-BROMGHLL.js";import"./ErrorBoundary-Bpo1UDT9.js";import"./ErrorPanel-x2Exa-vN.js";import"./WarningPanel-BSlzZ-z1.js";import"./ExpandMore-Bc1vnfZW.js";import"./AccordionDetails-DdV6AcrO.js";import"./index-DnL3XN75.js";import"./Collapse-CkfWvcnj.js";import"./MarkdownContent-DxpfpkJA.js";import"./Grid-ZwJT3o21.js";import"./List-vwHRiwvk.js";import"./ListContext-BKyvF85M.js";import"./ListItem-QaFfVGPd.js";import"./ListItemText-wAc4HvDm.js";import"./LinkButton-Dvus2elg.js";import"./Button-ZQtLd7ms.js";import"./Link-B2TbD7aZ.js";import"./lodash-CwBbdt2Q.js";import"./index-NOhwhBBM.js";import"./useAnalytics-BSNcizch.js";import"./useApp-DGYHvcrQ.js";import"./CardHeader-DkvWbnlo.js";import"./Divider-BxdCXeWj.js";import"./CardActions-BOFCJdv1.js";import"./BottomLink-DMYoolon.js";import"./ArrowForward-Dvlb0E-q.js";const X={title:"Data Display/CodeSnippet",component:t},d={width:300},r=`const greeting = "Hello";
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
