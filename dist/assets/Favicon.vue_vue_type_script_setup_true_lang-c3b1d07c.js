import{d as g,x as a,o as n,c as s,f as i,dq as x,b6 as c,t as y}from"./index-355bc263.js";import{c as v}from"./common-6ebb879e.js";import{u as S}from"./site-c1bd635e.js";import{u as b}from"./icon_style-f73aef9f.js";const C=["src"],w=g({__name:"Favicon",props:{site:{type:Object,required:!0},siteIndex:{type:Number,required:!0},groupIndex:{type:Number,required:!0}},setup(e){const l=e,r=S(),{iconStyle:d}=b(),u=a(!1),f=a(!0);function m(o){u.value=!0,r.setGroupIndex(l.groupIndex),r.setSiteIndex(l.siteIndex),!o.bgColor&&r.updateSite({...o,bgColor:v()})}return(o,t)=>(n(),s("div",{style:c(i(d)),"h-24":"","w-24":""},[i(u)?(n(),s("div",{key:1,style:c({backgroundColor:e.site.bgColor}),"h-full":"","w-full":"","flex-center":"","scale-112":"","rounded-full":"",text:"white sm"},y(e.site.name.toLocaleUpperCase().charAt(0)),5)):(n(),s("img",{key:0,src:e.site.favicon||i(x)(e.site.url),"h-full":"","w-full":"",onError:t[0]||(t[0]=p=>m(e.site)),onOnload:t[1]||(t[1]=p=>f.value=!1)},null,40,C))],4))}});export{w as _};
