import{u as v,d as h}from"./draggable-37cfb503.js";import{u as C}from"./modal-95404a48.js";import{u as I}from"./site-c1bd635e.js";import{d as y,h as k,u as w,o as l,c as B,e as b,w as p,b as _,t as N,n as E,f as o,m as D,a as M,g as V,i as $,p as z,j,_ as O}from"./index-355bc263.js";import"./_commonjsHelpers-23102255.js";import"./common-6ebb879e.js";const P=i=>(z("data-v-764277e7"),i=i(),j(),i),R={"flex-center":"","text-14":""},q=["onClick"],A=P(()=>_("div",{"i-carbon:add":""},null,-1)),F=y({__name:"SiteNavBar",setup(i){const r=C(),t=I(),m=k();function u(s){m.name==="setting"&&t.cateIndex===s?r.showModal("update","cate"):t.setCateIndex(s)}const c=w(),{draggableOptions:g,handleStart:x,handleEnd:f}=v();function S(s){f();const{oldIndex:a,newIndex:n}=s,{cateIndex:e}=t;if(a===e&&n!==e)t.setCateIndex(n);else{if(a<e&&n<e||a>e&&n>e)return;a<e?t.setCateIndex(e-1):a>e&&t.setCateIndex(e+1)}}return(s,a)=>{const n=$;return l(),B("section",R,[b(o(h),D({class:"nav w-auto flex gap-x-6 w-90p sm:gap-x-12 sm:max-w-480",list:o(t).data,"item-key":"id","component-data":{tag:"div",type:"transition-group"}},o(g),{onStart:o(x),onEnd:S}),{item:p(({element:e,index:d})=>[_("div",{class:E(["dragging nav__item shrink-0",{"hover:text-$primary-c":!o(c).isSetting,"nav__item--active":o(t).cateIndex===d}]),"cursor-pointer":"","px-8":"","py-10":"","transition-color":"","duration-300":"",onClick:G=>u(d)},N(e.name),11,q)]),_:1},16,["list","onStart"]),o(c).isSetting?(l(),M(n,{key:0,class:"ml-12",type:"primary",size:"small",focusable:!1,secondary:"",circle:"",onClick:a[0]||(a[0]=e=>o(r).showModal("add","cate"))},{icon:p(()=>[A]),_:1})):V("",!0)])}}});const U=O(F,[["__scopeId","data-v-764277e7"]]);export{U as default};
