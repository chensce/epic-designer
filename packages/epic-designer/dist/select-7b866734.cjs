"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const l=require("vue");require("./el-select-0ea8fbf8.cjs");const o=require("element-plus"),d=l.defineComponent({emits:["update:modelValue"],setup(i,{emit:a,attrs:t}){function r(e=null){a("update:modelValue",e)}return()=>{const e={...t,key:String(t.multiple),"onUpdate:modelValue":r};return l.h(o.ElSelect,e,{default:()=>{var u;return[(u=e.options)==null?void 0:u.map(n=>l.h(o.ElOption,{label:n.label,value:n.value}))]}})}}});exports.default=d;
