"use strict";var u=Object.defineProperty;var s=Object.getOwnPropertyDescriptor;var b=Object.getOwnPropertyNames;var o=Object.prototype.hasOwnProperty;var f=(i,e)=>{for(var r in e)u(i,r,{get:e[r],enumerable:!0})},d=(i,e,r,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let t of b(e))!o.call(i,t)&&t!==r&&u(i,t,{get:()=>e[t],enumerable:!(n=s(e,t))||n.enumerable});return i};var p=i=>d(u({},"__esModule",{value:!0}),i);var c={};f(c,{DatatypeModule:()=>m});module.exports=p(c);var a=require("../../internal/deprecated");class m{constructor(e){this.faker=e;for(const r of Object.getOwnPropertyNames(m.prototype))r==="constructor"||typeof this[r]!="function"||(this[r]=this[r].bind(this))}number(e=99999){(0,a.deprecated)({deprecated:"faker.datatype.number()",proposed:"faker.number.int()",since:"8.0",until:"9.0"}),typeof e=="number"&&(e={max:e});const{min:r=0,max:n=r+99999,precision:t=1}=e;return this.faker.number.float({min:r,max:n,precision:t})}float(e={}){(0,a.deprecated)({deprecated:"faker.datatype.float()",proposed:"faker.number.float()",since:"8.0",until:"9.0"}),typeof e=="number"&&(e={precision:e});const{min:r=0,max:n=r+99999,precision:t=.01}=e;return this.faker.number.float({min:r,max:n,precision:t})}datetime(e={}){(0,a.deprecated)({deprecated:"faker.datatype.datetime({ min, max })",proposed:"faker.date.between({ from, to }) or faker.date.anytime()",since:"8.0",until:"9.0"});const r=864e13;let n=typeof e=="number"?void 0:e.min,t=typeof e=="number"?e:e.max;return(n==null||n<r*-1)&&(n=Date.UTC(1990,0)),(t==null||t>r)&&(t=Date.UTC(2100,0)),this.faker.date.between({from:n,to:t})}string(e={}){(0,a.deprecated)({deprecated:"faker.datatype.string()",proposed:"faker.string.sample()",since:"8.0",until:"9.0"}),typeof e=="number"&&(e={length:e});const{length:r=10}=e;return this.faker.string.sample(r)}uuid(){return(0,a.deprecated)({deprecated:"faker.datatype.uuid()",proposed:"faker.string.uuid()",since:"8.0",until:"9.0"}),this.faker.string.uuid()}boolean(e={}){typeof e=="number"&&(e={probability:e});const{probability:r=.5}=e;return r<=0?!1:r>=1?!0:this.faker.number.float()<r}hexadecimal(e={}){return(0,a.deprecated)({deprecated:"faker.datatype.hexadecimal()",proposed:"faker.string.hexadecimal() or faker.number.hex()",since:"8.0",until:"9.0"}),this.faker.string.hexadecimal({...e,casing:e.case})}json(){(0,a.deprecated)({deprecated:"faker.datatype.json()",proposed:"your own function to generate complex objects",since:"8.0",until:"9.0"});const e=["foo","bar","bike","a","b","name","prop"],r={};return e.forEach(n=>{r[n]=this.boolean()?this.faker.string.sample():this.faker.number.int()}),JSON.stringify(r)}array(e=10){return(0,a.deprecated)({deprecated:"faker.datatype.array()",proposed:"your own function to build complex arrays",since:"8.0",until:"9.0"}),this.faker.helpers.multiple(()=>this.boolean()?this.faker.string.sample():this.faker.number.int(),{count:e})}bigInt(e){return(0,a.deprecated)({deprecated:"faker.datatype.bigInt()",proposed:"faker.number.bigInt()",since:"8.0",until:"9.0"}),this.faker.number.bigInt(e)}}0&&(module.exports={DatatypeModule});