import{j as e}from"./iframe-BI8Pro7f.js";import{F as s,$ as d}from"./FieldError-CE-X_ntH.js";import{$ as t}from"./Input-B-zzMuOG.js";import{$ as o}from"./TextField-BpVXRtxO.js";import"./preload-helper-D9Z9MdNV.js";import"./utils-p5ebbTIB.js";import"./clsx-B-dksMZM.js";import"./useLabels-BAWfyD6_.js";import"./useFocusRing-CcX1Hlf3.js";import"./useStyles-CwFuh9ox.js";import"./useFormReset-EgoDaqQl.js";import"./useControlledState-Ba02jq7k.js";import"./Hidden-D7iItngm.js";import"./RSPContexts-Dz3ysjiS.js";import"./Label-ByKN5buR.js";const T={title:"Backstage UI/FieldError",component:s},r={render:()=>e.jsx(d,{validationErrors:{demo:"This is a server validation error."},children:e.jsxs(o,{name:"demo",style:{display:"flex",flexDirection:"column",alignItems:"flex-start"},children:[e.jsx(t,{}),e.jsx(s,{})]})})},i={render:()=>e.jsxs(o,{isInvalid:!0,validationBehavior:"aria",style:{display:"flex",flexDirection:"column",alignItems:"flex-start"},children:[e.jsx(t,{}),e.jsx(s,{children:"This is a custom error message."})]})},a={render:()=>e.jsxs(o,{isInvalid:!0,validationBehavior:"aria",validate:()=>"This field is invalid",style:{display:"flex",flexDirection:"column",alignItems:"flex-start"},children:[e.jsx(t,{}),e.jsx(s,{children:({validationErrors:l})=>l.length>0?l[0]:"Field is invalid"})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <Form validationErrors={{
    demo: 'This is a server validation error.'
  }}>
      <TextField name="demo" style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start'
    }}>
        <Input />
        <FieldError />
      </TextField>
    </Form>
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <TextField isInvalid validationBehavior="aria" style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  }}>
      <Input />
      <FieldError>This is a custom error message.</FieldError>
    </TextField>
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <TextField isInvalid validationBehavior="aria" validate={() => 'This field is invalid'} style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  }}>
      <Input />
      <FieldError>
        {({
        validationErrors
      }) => validationErrors.length > 0 ? validationErrors[0] : 'Field is invalid'}
      </FieldError>
    </TextField>
}`,...a.parameters?.docs?.source}}};const $=["WithServerValidation","WithCustomMessage","WithRenderProp"];export{i as WithCustomMessage,a as WithRenderProp,r as WithServerValidation,$ as __namedExportsOrder,T as default};
