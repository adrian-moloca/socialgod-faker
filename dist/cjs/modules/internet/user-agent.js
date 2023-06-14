"use strict";var c=Object.defineProperty;var O=Object.getOwnPropertyDescriptor;var w=Object.getOwnPropertyNames;var M=Object.prototype.hasOwnProperty;var d=(n,t)=>{for(var $ in t)c(n,$,{get:t[$],enumerable:!0})},T=(n,t,$,s)=>{if(t&&typeof t=="object"||typeof t=="function")for(let m of w(t))!M.call(n,m)&&m!==$&&c(n,m,{get:()=>t[m],enumerable:!(s=O(t,m))||s.enumerable});return n};var B=n=>T(c({},"__esModule",{value:!0}),n);var v={};d(v,{generate:()=>L});module.exports=B(v);function L(n,t="lin",$="chrome"){const s=()=>n.helpers.arrayElement(["AB","AF","AN","AR","AS","AZ","BE","BG","BN","BO","BR","BS","CA","CE","CO","CS","CU","CY","DA","DE","EL","EN","EO","ES","ET","EU","FA","FI","FJ","FO","FR","FY","GA","GD","GL","GV","HE","HI","HR","HT","HU","HY","ID","IS","IT","JA","JV","KA","KG","KO","KU","KW","KY","LA","LB","LI","LN","LT","LV","MG","MK","MN","MO","MS","MT","MY","NB","NE","NL","NN","NO","OC","PL","PT","RM","RO","RU","SC","SE","SK","SL","SO","SQ","SR","SV","SW","TK","TR","TY","UK","UR","UZ","VI","VO","YI","ZH"]),m=()=>{const r={chrome:["win","mac","lin"],firefox:["win","mac","lin"],opera:["win","mac","lin"],safari:["win","mac"],iexplorer:["win"]},e=n.helpers.objectKey(r),o=$,a=n.helpers.arrayElement(r[e]);return[o,t,e,a]},u=r=>n.helpers.arrayElement({lin:["i686","x86_64"],mac:["Intel","PPC","U; Intel","U; PPC"],win:["","WOW64","Win64; x64"]}[r]),l=r=>{let e="";for(let o=0;o<r;o++)e+=`.${n.string.numeric({allowLeadingZeros:!0})}`;return e},i={net(){return[n.number.int({min:1,max:4}),n.number.int(9),n.number.int({min:1e4,max:99999}),n.number.int(9)].join(".")},nt(){return[n.number.int({min:5,max:6}),n.number.int(3)].join(".")},ie(){return n.number.int({min:7,max:11})},trident(){return[n.number.int({min:3,max:7}),n.number.int(1)].join(".")},osx(r){return[10,n.number.int({min:5,max:10}),n.number.int(9)].join(r||".")},chrome(){return[n.number.int({min:13,max:39}),0,n.number.int({min:800,max:899}),0].join(".")},presto(){return`2.9.${n.number.int({min:160,max:190})}`},presto2(){return`${n.number.int({min:10,max:12})}.00`},safari(){return[n.number.int({min:531,max:538}),n.number.int(2),n.number.int(2)].join(".")}},x={firefox(r){const e=`${n.number.int({min:5,max:15})}${l(2)}`,o=`Gecko/20100101 Firefox/${e}`,a=u(r);return`Mozilla/5.0 ${r==="win"?`(Windows NT ${i.nt()}${a?`; ${a}`:""}`:r==="mac"?`(Macintosh; ${a} Mac OS X ${i.osx()}`:`(X11; Linux ${a}`}; rv:${e.slice(0,-2)}) ${o}`},iexplorer(){const r=i.ie();return r>=11?`Mozilla/5.0 (Windows NT 6.${n.number.int({min:1,max:3})}; Trident/7.0; ${n.datatype.boolean()?"Touch; ":""}rv:11.0) like Gecko`:`Mozilla/5.0 (compatible; MSIE ${r}.0; Windows NT ${i.nt()}; Trident/${i.trident()}${n.datatype.boolean()?`; .NET CLR ${i.net()}`:""})`},opera(r){const e=` Presto/${i.presto()} Version/${i.presto2()})`,o=r==="win"?`(Windows NT ${i.nt()}; U; ${s()}${e}`:r==="lin"?`(X11; Linux ${u(r)}; U; ${s()}${e}`:`(Macintosh; Intel Mac OS X ${i.osx()} U; ${s()} Presto/${i.presto()} Version/${i.presto2()})`;return`Opera/${n.number.int({min:9,max:14})}.${n.number.int(99)} ${o}`},safari(r){const e=i.safari(),o=`${n.number.int({min:4,max:7})}.${n.number.int(1)}.${n.number.int(10)}`;return`Mozilla/5.0 ${r==="mac"?`(Macintosh; ${u("mac")} Mac OS X ${i.osx("_")} rv:${n.number.int({min:2,max:6})}.0; ${s()}) `:`(Windows; U; Windows NT ${i.nt()})`}AppleWebKit/${e} (KHTML, like Gecko) Version/${o} Safari/${e}`},chrome(r){const e=i.safari();return`Mozilla/5.0 ${r==="mac"?`(Macintosh; ${u("mac")} Mac OS X ${i.osx("_")}) `:r==="win"?`(Windows; U; Windows NT ${i.nt()})`:`(X11; Linux ${u(r)}`} AppleWebKit/${e} (KHTML, like Gecko) Chrome/${i.chrome()} Safari/${e}`}},[b,S]=m();return x[b](S)}0&&(module.exports={generate});