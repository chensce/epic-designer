import{A as p}from"../guide_components_k-designer.md.863ef670.js";import{f as v,r as k,t as B,o as n,c as i,a,F as m,l as A,G as c,u as f,h as C,x as b}from"../app.b39b64a1.js";const h={class:"k-action-bar"},y={class:"actions-container"},g=["title","onClick"],w={class:"sidebar-container"},z=v({__name:"KActionBar",setup(x){const r=p.getActivitybars(),e=k(0),l=B(null);l.value=r[0].component;function d(u,s){if(e.value===s)return e.value=null,!1;l.value=u.component,e.value=s}return(u,s)=>(n(),i(m,null,[a("div",h,[a("ul",y,[(n(!0),i(m,null,A(f(r),(t,o)=>(n(),i("li",{class:c(["action-item",{checked:e.value===o}]),title:t.title,key:o,onClick:E=>d(t,o)},[a("span",{class:c(["iconfont",t.icon])},null,2)],10,g))),128))])]),a("aside",{class:c(["k-left-sidebar",{hide:e.value===null}])},[a("div",w,[(n(),C(b(f(l))))])],2)],64))}});export{z as default};
