import{N as p}from"./index.4cb1f6a0.3badedb0.js";import"../guide_components_k-designer.md.863ef670.js";import{f as s,E as a,B as t}from"../app.b39b64a1.js";const f=s({props:{record:{type:Object,require:!0},children:{type:Array}},setup(r,{attrs:c,slots:o}){return()=>{const e={...r.record,header:r.record.label},d=e.children;return delete e.children,a(p,e,{default:()=>t(o,"edit-node",{},()=>d.map(n=>t(o,"node",{record:n})))})}}});export{f as default};
