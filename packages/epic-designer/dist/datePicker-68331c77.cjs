"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const n=require("vue"),a=require("ant-design-vue"),r=n.defineComponent({name:"EDatePicker",emits:["update:modelValue","change","blur"],setup(i,{emit:l,attrs:u}){n.watch(()=>u.type,()=>{o()});function o(t=null){l("update:modelValue",t),l("change",t),l("blur",t)}return()=>{let t=a.DatePicker;const c=u.type,e={...u,"onUpdate:value":o};return c==="daterange"?(typeof e.value!="object"&&e.value!==null&&(e.value=null),t=a.DatePicker.RangePicker):c==="month"?(typeof e.value=="object"&&(e.value=null),t=a.DatePicker.MonthPicker):typeof e.value=="object"&&(e.value=null),n.h(t,e)}}});exports.default=r;
