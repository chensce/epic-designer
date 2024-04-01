"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const e=require("vue"),s=require("./index-a6f7fd90.cjs"),F=require("./icon.vue_vue_type_script_setup_true_lang-5a70b817.cjs"),q=require("./vuedraggable.umd-50dcd280.cjs");require("./_commonjsHelpers-6763f629.cjs");require("./_vue_commonjs-external-0743e21a.cjs");const J={class:"action-item whitespace-nowrap"},Z=e.defineComponent({__name:"previewWidgets",setup(M,{expose:b}){const x=e.inject("pageManager",{}),p=e.inject("pageSchema"),f=e.inject("designer"),r=e.ref(null),i=e.ref(null),h=e.ref(null),S=e.ref(!1),N=e.ref(!1),a=e.ref(!0),d=e.ref("top"),{canvasScale:u,disabledZoom:g}=s.useShareStore();let o=null;const C=e.computed(()=>{var k,w,V,_,z;const l=x.componentInstances.value,m=(k=f.state.checkedNode)==null?void 0:k.id,y=s.pluginManager.getComponentConfingByType((w=f.state.checkedNode)==null?void 0:w.type)??null;if(!m||!(l!=null&&l[m]))return null;if(y!=null&&y.defaultSchema.input&&((V=f.state.checkedNode)==null?void 0:V.noFormItem)!==!0)return(_=l[m+"formItem"])==null?void 0:_.$el;const v=l[m];return((z=v==null?void 0:v.$el)==null?void 0:z.nodeName)==="#text"?null:v==null?void 0:v.$el}),E=e.computed(()=>{var k,w,V,_;const l=x.componentInstances.value,m=(k=f.state.hoverNode)==null?void 0:k.id,y=s.pluginManager.getComponentConfingByType((w=f.state.hoverNode)==null?void 0:w.type)??null;if(!m||!(l!=null&&l[m]))return null;if(y!=null&&y.defaultSchema.input&&((V=f.state.hoverNode)==null?void 0:V.noFormItem)!==!0)return(_=l[m+"formItem"])==null?void 0:_.$el;const v=l[m];return(v==null?void 0:v.$el.nodeName)==="#text"?null:v==null?void 0:v.$el}),{mutationObserver:$,observerConfig:R}=c(t),{startTimedQuery:B,stopTimedQuery:D}=s.useTimedQuery(t);e.watch(()=>C.value,l=>{if(l){S.value=!0,$.observe(l,R);const m=l.parentNode;m&&(m.ondragstart=()=>{a.value=!1,B()},m.ondragend=()=>{a.value=!0,D()}),t()}else S.value=!1});const{mutationObserver:j,observerConfig:T}=c(n);e.watch(()=>E.value,l=>{l&&(j.observe(l,T),n())});let L=0;e.watch(()=>{var l;return(l=f.state.hoverNode)==null?void 0:l.id},l=>{if(l){N.value=!0,clearTimeout(L);return}L=setTimeout(()=>{N.value=!1},300)});function t(){const l=C.value;if(!l)return;const{top:m,left:y}=(o==null?void 0:o.getBoundingClientRect())??{top:0,left:0},{top:v,left:k,width:w,height:V}=l.getBoundingClientRect(),_=g.value?1:u.value,z=v-m+((o==null?void 0:o.scrollTop)??0)*_,U=k-y+((o==null?void 0:o.scrollLeft)??0)*_,H=V/_;r.value&&(r.value.style.width=`${w/_}px`,r.value.style.height=`${H}px`,r.value.style.top=`${z/_}px`,r.value.style.left=`${U/_}px`),h.value&&(z<45&&H<100?(h.value.style.top="",h.value.style.bottom="-30px",h.value.style["border-radius"]="0px 0px 4px 4px",d.value="bottom"):z<45?(h.value.style.top="0px",h.value.style["border-radius"]="0px 0px 4px 0",d.value="center"):(h.value.style.top="-30px",h.value.style["border-radius"]="4px 4px 0px 0px",d.value="top"))}function n(){var H,W;const l=E.value;if(!l)return;const{top:m,left:y}=(o==null?void 0:o.getBoundingClientRect())??{top:0,left:0},{top:v,left:k,width:w,height:V}=((H=l.getBoundingClientRect)==null?void 0:H.call(l))??((W=l.nextElementSibling)==null?void 0:W.getBoundingClientRect()),_=g.value?1:u.value,z=v-m+((o==null?void 0:o.scrollTop)??0)*_,U=k-y+((o==null?void 0:o.scrollLeft)??0)*_;i.value&&(i.value.style.width=`${w/_}px`,i.value.style.height=`${V/_}px`,i.value.style.top=`${z/_}px`,i.value.style.left=`${U/_}px`)}function c(l){const m=window.MutationObserver,y={childList:!0,attributes:!0,subtree:!0};return{mutationObserver:new m(l),observerConfig:y}}function O(){var w;const l=s.findSchemaInfoById(p.schemas,((w=f.state.checkedNode)==null?void 0:w.id)??"root");if(!l)return!1;const{list:m,schema:y,index:v}=l,k=s.generateNewSchema(y);m.splice(v+1,0,k),f.setCheckedNode(k),s.revoke.push(p.schemas,"复制组件")}function A(){var k;const l=s.findSchemaInfoById(p.schemas,((k=f.state.checkedNode)==null?void 0:k.id)??"root");if(!l)return!1;let{list:m,schema:y,index:v}=l;m.splice(v,1),v===m.length&&v--,f.setCheckedNode(m[v]),s.revoke.push(p.schemas,"删除组件")}function I(l){o=l,o==null||o.addEventListener("scroll",()=>{t()}),s.useResizeObserver(C,t),s.useResizeObserver(E,t)}return b({handleInit:I}),(l,m)=>{var y,v,k,w,V;return e.openBlock(),e.createElementBlock(e.Fragment,null,[e.withDirectives(e.createElementVNode("div",{ref_key:"selectorRef",ref:r,class:e.normalizeClass(["checked-widget absolute pointer-events-none z-20",d.value+" "+(a.value?"transition-all":"")])},[e.createElementVNode("div",{class:"action-box",ref_key:"actionBoxRef",ref:h},[e.createElementVNode("div",J,e.toDisplayString((v=e.unref(s.pluginManager).getComponentConfingByType(((y=e.unref(f).state.checkedNode)==null?void 0:y.type)??""))==null?void 0:v.defaultSchema.label),1),e.createElementVNode("div",{title:"复制",class:"action-item pointer-events-auto",onClick:O},[e.createVNode(e.unref(F._sfc_main),{name:"icon-fuzhi3"})]),e.createElementVNode("div",{title:"删除",class:"action-item pointer-events-auto",onClick:A},[e.createVNode(e.unref(F._sfc_main),{name:"icon-shanchu1"})])],512)],2),[[e.vShow,S.value&&((k=e.unref(f).state.checkedNode)==null?void 0:k.id)!=="root"]]),e.withDirectives(e.createElementVNode("div",{ref_key:"hoverWidgetRef",ref:i,class:"hover-widget absolute transition-all pointer-events-none z-998"},null,512),[[e.vShow,N.value&&((w=e.unref(f).state.checkedNode)==null?void 0:w.id)!==((V=e.unref(f).state.hoverNode)==null?void 0:V.id)]])],64)}}}),Q=e.defineComponent({name:"EditNodeItem",__name:"editNodeItem",props:{schemas:{}},emits:["update:schemas"],setup(M,{emit:b}){const x=e.inject("designer"),p=e.inject("pageSchema"),f=M,r=b,i=e.computed({get(){return f.schemas},set(a){r("update:schemas",a)}});function h(a){x.setCheckedNode(i.value[a]),x.setDisableHover(!0)}function S(){x.setDisableHover(),s.revoke.push(p.schemas,"拖拽组件")}function N(){s.revoke.push(p.schemas,"插入组件")}return(a,d)=>(e.openBlock(),e.createBlock(e.unref(q.draggable),e.mergeProps({modelValue:i.value,"onUpdate:modelValue":d[0]||(d[0]=u=>i.value=u),"item-key":"id","component-data":{type:"transition-group"},class:"draggable-range"},{animation:200,group:"edit-draggable",handle:".draggable-item",ghostClass:"moveing"},{onStart:d[1]||(d[1]=u=>h(u.oldIndex)),onEnd:d[2]||(d[2]=u=>S()),onAdd:d[3]||(d[3]=u=>{h(u.newIndex),N()})}),{item:e.withCtx(({element:u,index:g})=>[(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(["widget-box",{"draggable-item":!u.immovable}]),key:g},[e.createVNode(P,{schema:u},null,8,["schema"])],2))]),_:1},16,["modelValue"]))}}),P=e.defineComponent({name:"ENodeItem",__name:"nodeItem",props:{schema:{},name:{}},setup(M){const b=e.useAttrs(),x=e.inject("designer"),p=e.inject("pageManager",{}),f=e.ref(null);e.provide("nodeAttrs",b);const r=M,i=e.computed(()=>{var o,C,E,$,R;const a=p.componentInstances.value,d=(o=r.schema)==null?void 0:o.id,u=s.pluginManager.getComponentConfingByType((C=r.schema)==null?void 0:C.type)??null;if(!d||!(a!=null&&a[d]))return null;if(u!=null&&u.defaultSchema.input&&((E=r.schema)==null?void 0:E.noFormItem)!==!0)return($=a[d+"formItem"])==null?void 0:$.$el;const g=a[d];return((R=g==null?void 0:g.$el)==null?void 0:R.nodeName)==="#text"?null:g==null?void 0:g.$el});e.watch(()=>i.value,a=>{a==null||a.addEventListener("click",h,!1),a==null||a.addEventListener("mouseover",S,!1),a==null||a.addEventListener("mouseout",N,!1)}),e.onUnmounted(()=>{var a,d,u;(a=i.value)==null||a.removeEventListener("click",h,!1),(d=i.value)==null||d.removeEventListener("mouseover",S,!1),(u=i.value)==null||u.removeEventListener("mouseout",N,!1)});function h(a){a.stopPropagation(),x.setCheckedNode(r.schema)}function S(a){r.schema.type!=="page"&&(a.stopPropagation(),x.setHoverNode(r.schema))}function N(a){a.stopPropagation(),x.setHoverNode(null)}return(a,d)=>{var g;const u=e.resolveComponent("ENodeItem");return e.openBlock(),e.createBlock(e.unref(s._sfc_main$1),{ref_key:"nodeRef",ref:f,componentSchema:r.schema},e.createSlots({_:2},[(g=r.schema)!=null&&g.childImmovable?{name:"edit-node",fn:e.withCtx(()=>[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(r.schema.children,o=>(e.openBlock(),e.createBlock(u,{key:o.id,schema:o},null,8,["schema"]))),128))]),key:"0"}:{name:"edit-node",fn:e.withCtx(()=>[r.schema.children?(e.openBlock(),e.createBlock(Q,{key:0,schemas:r.schema.children,"onUpdate:schemas":d[0]||(d[0]=o=>r.schema.children=o)},null,8,["schemas"])):e.createCommentVNode("",!0)]),key:"1"}]),1032,["componentSchema"])}}}),K={class:"min-w-750px rounded bg-white h-full"},X=e.defineComponent({__name:"previewJson",setup(M,{expose:b}){const x=s.pluginManager.getComponent("modal"),p=s.pluginManager.getComponent("monacoEditor"),f={theme:"vs-light",selectOnLineNumbers:!0,minimap:{enabled:!1},readOnly:!0},r=e.ref(null),i=e.ref(!1),h=e.inject("pageSchema");function S(){i.value=!1}function N(){i.value=!0,r.value?r.value.setValue(JSON.stringify(h,null,2)):setTimeout(()=>{N()},300)}function a(d="epic-data.json"){let u="data:text/json;charset=utf-8,";u+=JSON.stringify(h,null,2);var g=encodeURI(u),o=document.createElement("a");o.setAttribute("href",g),o.setAttribute("download",d),o.click()}return b({handleOpen:N}),(d,u)=>(e.openBlock(),e.createBlock(e.unref(x),{modelValue:i.value,"onUpdate:modelValue":u[0]||(u[0]=g=>i.value=g),title:"查看数据",class:"w-900px",width:"900px",onClose:S,onOk:a,okText:"导出数据"},{default:e.withCtx(()=>[e.createElementVNode("div",K,[e.createVNode(e.unref(p),{ref_key:"monacoEditorRef",ref:r,class:"editor h-full",config:f,language:"json"},null,512)])]),_:1},8,["modelValue"]))}}),Y={class:"edit-toolbar flex items-center justify-between px-4 mx-1"},G={class:"flex-1 h-full flex items-center"},ee=["title","onClick"],te={class:"flex-1 h-full flex items-center justify-center"},ne=["title","onClick"],oe={class:"flex-1 h-full flex items-center justify-end"},le={key:0,class:"flex items-center ml-12px"},ae={class:"pr-8px w-82px cursor-pointer"},se={class:"w-90px cursor-pointer"},re=e.defineComponent({__name:"toolbar",setup(M){const b=s.pluginManager.getComponent("slider"),x=s.pluginManager.getComponent("select"),{canvasScale:p,disabledZoom:f}=s.useShareStore(),r=e.ref("pc"),i=e.inject("pageSchema"),h=e.inject("designer"),S=e.ref(null),N=[{icon:"icon-a-diannaotoubu",title:"pc",key:"pc"},{icon:"icon-a-pingbantoubu",title:"平板",key:"pad"},{icon:"icon-a-shoujitoubu",title:"手机",key:"mobile"}],a=s.revoke.recordList,d=s.revoke.undoList,u=e.computed(()=>[{icon:"icon-daima1",title:"查看数据",on:()=>B()},{icon:"icon-shangchuan1",title:"导入数据",on:D},{icon:"icon-shanchu1",title:"清空",on:R},{icon:"icon-chexiao2x",title:"撤销",on:E,disabled:!a.value.length},{icon:"icon-fanhui2x",title:"重做",on:$,disabled:!d.value.length}]),g=e.ref(null),o=e.computed({get(){return`${(p.value*100).toFixed(0)}%`},set(t){p.value=Number(t)}}),C=[{label:"60%",value:"0.6"},{label:"80%",value:"0.8"},{label:"100%",value:"1.0"},{label:"120%",value:"1.2"},{label:"140%",value:"1.4"}];function E(){const t=s.revoke.undo();t&&(s.deepCompareAndModify(i.schemas,t),h.setCheckedNode(i.schemas[0]))}function $(){const t=s.revoke.redo();t&&(s.deepCompareAndModify(i.schemas,t),h.setCheckedNode(i.schemas[0]))}function R(){h.reset()}function B(){S.value.handleOpen()}function D(){var t;(t=g.value)==null||t.click()}function j(t){var O;const n=(O=t.target.files)==null?void 0:O[0];if(!n)return;t.target.value=null;const c=new FileReader;c.readAsText(n),c.onload=A=>{var I;T((I=A.target)==null?void 0:I.result)}}function T(t){try{let n=JSON.parse(t??"");n.schemas||(n=s.convertKFormData(n)),s.deepCompareAndModify(i,n)}catch(n){console.error(n)}}function L(t){r.value=t;const n={pc:{},pad:{width:"800px"},mobile:{width:"420px"}};i.canvas=n[t]}return(t,n)=>(e.openBlock(),e.createElementBlock(e.Fragment,null,[e.createElementVNode("div",Y,[e.createElementVNode("div",G,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(u.value,(c,O)=>(e.openBlock(),e.createElementBlock("div",{title:c.title,class:e.normalizeClass(["action-item h-90% px-10px flex items-center hover:bg-gray-50 cursor-pointer",{disabled:c.disabled}]),key:O,onClick:c.on},[e.createVNode(e.unref(F._sfc_main),{name:c.icon},null,8,["name"])],10,ee))),128))]),e.withDirectives(e.createElementVNode("input",{type:"file",ref_key:"fileRef",ref:g,accept:".json,.txt",onChange:j},null,544),[[e.vShow,!1]]),e.createElementVNode("div",te,[(e.openBlock(),e.createElementBlock(e.Fragment,null,e.renderList(N,c=>e.createElementVNode("div",{title:c.title,class:e.normalizeClass(["device-item h-90% px-10px flex items-center hover:bg-gray-50 cursor-pointer",{checked:c.key===r.value}]),key:c.key,onClick:O=>L(c.key)},[e.createVNode(e.unref(F._sfc_main),{name:c.icon},null,8,["name"])],10,ne)),64))]),e.createElementVNode("div",oe,[e.unref(f)?e.createCommentVNode("",!0):(e.openBlock(),e.createElementBlock("div",le,[e.createElementVNode("div",ae,[e.createVNode(e.unref(x),{value:o.value,"onUpdate:value":n[0]||(n[0]=c=>o.value=c),modelValue:o.value,"onUpdate:modelValue":n[1]||(n[1]=c=>o.value=c),options:C,size:"small"},null,8,["value","modelValue"])]),e.createElementVNode("div",se,[e.createVNode(e.unref(b),{min:.6,max:1.4,step:.01,tooltip:!1,value:e.unref(p),"onUpdate:value":n[2]||(n[2]=c=>e.isRef(p)?p.value=c:null),modelValue:e.unref(p),"onUpdate:modelValue":n[3]||(n[3]=c=>e.isRef(p)?p.value=c:null)},null,8,["value","modelValue"])])]))])]),e.createVNode(X,{ref_key:"previewJson",ref:S},null,512)],64))}}),ie={class:"h-full flex flex-col relative"},ce=["draggable"],ue=e.defineComponent({__name:"editScreenContainer",setup(M){const b=e.inject("pageSchema"),x=e.ref(null),p=e.ref(null),f=e.ref(null),{pressSpace:r,disabledZoom:i}=s.useShareStore(),{handleElementDragStart:h,handleElementDrag:S,handleElementDragEnd:N}=s.useElementDrag(x),{width:a,height:d}=s.useElementSize(x),{canvasScale:u,handleZoom:g}=s.useElementZoom(p);let o=0,C=0;const E=e.ref({}),$=e.ref({}),R=e.ref({}),B=e.shallowRef({width:0,height:0});e.watch(()=>{var t,n;return{width:(t=b.canvas)==null?void 0:t.width,height:(n=b.canvas)==null?void 0:n.height}},j),e.watch(R,()=>{e.nextTick(D)}),e.onMounted(()=>{var t,n;j({width:(t=b.canvas)==null?void 0:t.width,height:(n=b.canvas)==null?void 0:n.height})});function D(){const t=e.unref(f);t&&(B.value={width:t.clientWidth,height:t.clientHeight})}function j({width:t,height:n}){R.value={width:t??"0",height:n??"0"}}s.watchOnce(a,T),e.watch(B,T);function T(){if(i.value){$.value={width:o+"px",height:C+"px",transform:"translate(0px, 20px)"};return}let t=B.value.width||o,n=B.value.height||C;E.value={width:a.value+t+"px",height:d.value+n+"px"},$.value={width:t+"px",height:n+"px"},L()}function L(){e.nextTick(()=>{let t=B.value.width||o;const c=(B.value.height||C)/2,O=t/2;x.value.scrollTo(O,c)})}return s.useResizeObserver(x,([{contentRect:t}])=>{if(o=t.width-60,C=t.height-80,!i.value)if(B.value.width===0)u.value=1;else{const n=(o-20)/B.value.width;u.value=n<1.2?n:u.value}T()}),(t,n)=>(e.openBlock(),e.createElementBlock("div",ie,[e.createVNode(re),e.createElementVNode("div",{ref_key:"editScreenContainerRef",ref:x,class:e.normalizeClass(["flex-1 overflow-auto overflow-y-hidden epic-edit-screen-container",{"cursor-grab":e.unref(r)}]),draggable:e.unref(r),onWheel:n[0]||(n[0]=(...c)=>e.unref(g)&&e.unref(g)(...c)),onDragstart:n[1]||(n[1]=(...c)=>e.unref(h)&&e.unref(h)(...c)),onDragend:n[2]||(n[2]=(...c)=>e.unref(N)&&e.unref(N)(...c)),onDrag:n[3]||(n[3]=(...c)=>e.unref(S)&&e.unref(S)(...c))},[e.createElementVNode("div",{id:"canvasContainer",class:"flex items-center justify-center",style:e.normalizeStyle(E.value)},[e.createElementVNode("div",{ref_key:"draggableElRef",ref:p,class:"transition-all"},[e.createElementVNode("div",{class:e.normalizeClass({"pointer-events-none":e.unref(r)}),style:e.normalizeStyle($.value)},[e.renderSlot(t.$slots,"default")],6)],512)],4)],42,ce),e.createElementVNode("div",{ref_key:"sizeBoxRef",ref:f,class:"absolute op-0 pointer-events-none",style:e.normalizeStyle(R.value)},null,4)]))}}),de={class:"epic-edit-canvas"},fe=e.defineComponent({__name:"index",setup(M){const b=e.ref(null),x=e.ref(null),p=e.inject("pageSchema"),f=e.computed(()=>p.schemas[0]),r=e.computed(()=>({width:"100%",height:"100%"}));return e.onMounted(()=>{var i;(i=x.value)==null||i.handleInit(b.value)}),(i,h)=>(e.openBlock(),e.createElementBlock("section",de,[e.createVNode(ue,null,{default:e.withCtx(()=>[e.createElementVNode("div",{ref_key:"epicEditRangeRef",ref:b,class:"epic-edit-range rounded-md overflow-auto relative",style:e.normalizeStyle(r.value)},[e.createVNode(P,{schema:f.value},null,8,["schema"]),e.createVNode(Z,{ref_key:"ePreviewWidgetsRef",ref:x},null,512)],4)]),_:1})]))}});exports.default=fe;
