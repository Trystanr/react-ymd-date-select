var F=Object.defineProperty,H=Object.defineProperties;var k=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var y=(e,o,n)=>o in e?F(e,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[o]=n,u=(e,o)=>{for(var n in o||(o={}))v.call(o,n)&&y(e,n,o[n]);if(p)for(var n of p(o))D.call(o,n)&&y(e,n,o[n]);return e},c=(e,o)=>H(e,k(o));var b=(e,o)=>{var n={};for(var a in e)v.call(e,a)&&o.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&p)for(var a of p(e))o.indexOf(a)<0&&D.call(e,a)&&(n[a]=e[a]);return n};import"./modulepreload-polyfill.b7f2da20.js";import{b as s,j as l,F as S,a as t,u as m,C as h,R as T}from"./vendor.8c422dd9.js";import{u as g}from"./use-date-select.435ba8e4.js";const C=s.forwardRef((e,o)=>l(S,{children:[l("select",{value:e.yearValue,onChange:e.onYearChange,children:[t("option",{value:"",disabled:!0}),e.yearOptions.map(({value:n,label:a})=>t("option",{value:n,children:a},n))]}),l("select",{value:e.monthValue,onChange:e.onMonthChange,ref:e.hideDay?o:void 0,children:[t("option",{value:"",disabled:!0}),e.monthOptions.map(({value:n,label:a})=>t("option",{value:n,children:a},n))]}),!e.hideDay&&l("select",{value:e.dayValue,onChange:e.onDayChange,ref:o,children:[t("option",{value:"",disabled:!0}),e.dayOptions.map(({value:n,label:a})=>t("option",{value:n,children:a},n))]})]}));C.displayName="DateDropdownGroup";const f=s.forwardRef((r,i)=>{var d=r,{value:e,onChange:o,hideDay:n}=d,a=b(d,["value","onChange","hideDay"]);const q=g(e,o,c(u({},a),{defaultDay:a.defaultDay?a.defaultDay:n?1:void 0}));return t(C,c(u({},q),{hideDay:n,ref:i}))});f.displayName="DateSelect";function M(){const{control:e,handleSubmit:o,watch:n,formState:{errors:a}}=m(),i=r=>console.log(r);return console.log(n("date")),l("form",{onSubmit:o(i),children:[t(h,{name:"date",control:e,rules:{required:!0},render:({field:r})=>t(f,u({},r))}),a.date&&t("span",{children:"This field is required"}),t("input",{type:"submit"})]})}function N(){const{control:e,handleSubmit:o,watch:n,formState:{errors:a}}=m({defaultValues:{date:"1990-02-15"}}),i=r=>console.log(r);return console.log(n("date")),l("form",{onSubmit:o(i),children:[t(h,{name:"date",control:e,rules:{required:!0},render:({field:r})=>t(f,u({},r))}),a.date&&t("span",{children:"This field is required"}),t("input",{type:"submit"})]})}const V=s.forwardRef((e,o)=>{const d=e,{onChange:n,value:a}=d,i=b(d,["onChange","value"]),r=g(a,n,i);return e.render(c(u({},r),{ref:o}))});V.displayName="DateSelect";const R=s.forwardRef((e,o)=>{const n=g(e.value,e.onChange);return l(S,{children:[t("input",{type:"date",value:n.dateValue||"",onChange:n.onDateChange}),l("label",{children:["Year",l("select",{value:n.yearValue,onChange:n.onYearChange,children:[t("option",{value:"",disabled:!0}),n.yearOptions.map(a=>t("option",{value:a.value,children:a.label},a.value))]})]}),l("label",{children:["Month",l("select",{value:n.monthValue,onChange:n.onMonthChange,children:[t("option",{value:"",disabled:!0}),n.monthOptions.map(a=>t("option",{value:a.value,children:a.label},a.value))]})]}),l("label",{children:["Day",l("select",{value:n.dayValue,onChange:n.onDayChange,ref:o,children:[t("option",{value:"",disabled:!0}),n.dayOptions.map(a=>t("option",{value:a.value,children:a.label},a.value))]})]})]})});R.displayName="CustomComponent";function W(){const{control:e,handleSubmit:o,watch:n,formState:{errors:a}}=m(),i=r=>console.log(r);return console.log(n("date")),l("form",{onSubmit:o(i),children:[t(h,{name:"date",control:e,rules:{required:!0},render:({field:r})=>t(R,u({},r))}),a.date&&t("span",{children:"This field is required"}),t("input",{type:"submit"})]})}const w=s.forwardRef((e,o)=>l(S,{children:[t("input",{type:"date",value:e.dateValue||"",onChange:e.onDateChange,ref:o}),t(C,u({},e))]}));w.displayName="CustomComponent";function Y(){const{control:e,handleSubmit:o,watch:n,formState:{errors:a}}=m(),i=r=>console.log(r);return console.log(n("date")),l("form",{onSubmit:o(i),children:[t(h,{name:"date",control:e,rules:{required:!0},render:({field:r})=>t(V,c(u({},r),{render:d=>t(w,u({},d))}))}),a.date&&t("span",{children:"This field is required"}),t("input",{type:"submit"})]})}function j(){const{control:e,handleSubmit:o,watch:n,formState:{errors:a}}=m(),i=r=>console.log(r);return console.log(n("date")),l("form",{onSubmit:o(i),children:[t(h,{name:"date",control:e,rules:{required:!0},render:({field:r})=>t(f,c(u({},r),{defaultYear:2e3}))}),a.date&&t("span",{children:"This field is required"}),t("input",{type:"submit"})]})}function P(){const{control:e,handleSubmit:o,watch:n,formState:{errors:a}}=m(),i=r=>console.log(r);return console.log(n("date")),l("form",{onSubmit:o(i),children:[t(h,{name:"date",control:e,rules:{required:!0},render:({field:r})=>t(f,c(u({},r),{hideDay:!0}))}),a.date&&t("span",{children:"This field is required"}),t("input",{type:"submit"})]})}function x(){return l("div",{children:[t(M,{}),t(N,{}),t(W,{}),t(Y,{}),t(j,{}),t(P,{})]})}T.render(t(s.StrictMode,{children:t(x,{})}),document.getElementById("root"));
