"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const e=require("vue"),S=require("./vuedraggable.umd-50dcd280.cjs"),c=require("./index-a6f7fd90.cjs"),f=require("./icon.vue_vue_type_script_setup_true_lang-5a70b817.cjs");require("./_commonjsHelpers-6763f629.cjs");require("./_vue_commonjs-external-0743e21a.cjs");const V={class:"epic-component-view flex flex-col"},b={class:"search-box px-10px py-6px"},C={class:"flex flex-1 overflow-auto"},N={class:"tabs-box"},y=["title","onClick"],w={class:"h-full flex-1 overflow-auto py-2 box-border"},E=["onClick"],B={class:"text-center pt-42px text-gray-400"},q=e.defineComponent({__name:"index",setup(I){const g=c.pluginManager.getComponent("input"),u=e.inject("pageSchema"),d=e.inject("designer"),m=c.pluginManager.getComponentSchemaGroups(),a=e.ref(""),p={title:"全部",list:[]},r=e.ref(p),_=e.computed(()=>[p,...m.value]),i=e.computed(()=>{let n=r.value.list;if(r.value.title==="全部"){const l=m.value.map(t=>t.list);n=[].concat(...l)}return a.value?n.filter(l=>{var t;return(t=l.label)==null?void 0:t.includes(a.value)}):n});function x(n){r.value=n}function k(n){var h;const l=c.findSchemaInfoById(u.schemas,((h=d.state.checkedNode)==null?void 0:h.id)??"root");if(!l)return!1;let{list:t,schema:o,index:s}=l;o.children&&!o.childImmovable&&(t=o.children,s=o.children.length-1);const v=c.generateNewSchema(n);t.splice(s+1,0,v),d.setCheckedNode(v),c.revoke.push(u.schemas,"插入组件")}return(n,l)=>(e.openBlock(),e.createElementBlock("div",V,[e.createElementVNode("div",b,[e.createVNode(e.unref(g),{placeholder:"搜索组件",modelValue:a.value,"onUpdate:modelValue":l[0]||(l[0]=t=>a.value=t),clearable:"",allowClear:"",value:a.value,"onUpdate:value":l[1]||(l[1]=t=>a.value=t)},{prefix:e.withCtx(()=>[e.createVNode(e.unref(f._sfc_main),{name:"icon-chaxun"})]),_:1},8,["modelValue","value"])]),e.createElementVNode("div",C,[e.createElementVNode("div",N,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(_.value,(t,o)=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(["tab cursor-pointer truncate",{checked:r.value.title===t.title}]),key:o,title:t.title,onClick:s=>x(t)},e.toDisplayString(t.title),11,y))),128))]),e.createElementVNode("div",w,[e.createVNode(e.unref(S.draggable),e.mergeProps({modelValue:i.value,"onUpdate:modelValue":l[2]||(l[2]=t=>i.value=t)},{group:{name:"edit-draggable",pull:"clone",put:!1},sort:!1,animation:180,ghostClass:"moving"},{clone:e.unref(c.generateNewSchema),"item-key":"id",class:"grid grid-cols-[auto_auto] px-10px gap-2"}),{item:e.withCtx(({element:t})=>[e.createElementVNode("div",{class:"source-componet-item flex items-center truncate",onClick:o=>k(t)},[e.createVNode(e.unref(f._sfc_main),{prefix:"",name:t.icon},null,8,["name"]),e.createElementVNode("div",null,e.toDisplayString(t.label),1)],8,E)]),_:1},16,["modelValue","clone"]),e.withDirectives(e.createElementVNode("div",B,"没有查询到的组件",512),[[e.vShow,!i.value.length]])])])]))}});exports.default=q;
