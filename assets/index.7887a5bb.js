var v=Object.defineProperty,V=Object.defineProperties;var y=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable;var S=(n,a,t)=>a in n?v(n,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[a]=t,u=(n,a)=>{for(var t in a||(a={}))D.call(a,t)&&S(n,t,a[t]);if(p)for(var t of p(a))q.call(a,t)&&S(n,t,a[t]);return n},m=(n,a)=>V(n,y(a));import{u as R}from"./use-date-select.bed0db3f.js";import{r as w,a as l,j as e,i as d,C as s,R as h,e as f,d as F}from"./vendor.d3e3c2a5.js";import{a as c,b as H,D as k}from"./DateSelect.50fcf4e4.js";function T(){const[n,a]=w.exports.useState("");return l("div",{children:[e(c,{value:n,onChange:a}),l("p",{children:["Selected date is: ",n]})]})}function W(){const{control:n,handleSubmit:a,watch:t,formState:{errors:o}}=d(),i=r=>console.log(r);return console.log(t("date")),l("form",{onSubmit:a(i),children:[e(s,{name:"date",control:n,rules:{required:!0},render:({field:r})=>e(c,u({},r))}),o.date&&e("span",{children:"This field is required"}),e("input",{type:"submit"})]})}function j(){const{control:n,handleSubmit:a,watch:t,formState:{errors:o}}=d({defaultValues:{date:"1990-02-15"}}),i=r=>console.log(r);return console.log(t("date")),l("form",{onSubmit:a(i),children:[e(s,{name:"date",control:n,rules:{required:!0},render:({field:r})=>e(c,u({},r))}),o.date&&e("span",{children:"This field is required"}),e("input",{type:"submit"})]})}const b=h.forwardRef((n,a)=>{const t=R(n.value,n.onChange);return l(f,{children:[e("input",{type:"date",value:t.dateValue||"",onChange:t.onDateChange}),l("label",{children:["Year",l("select",{value:t.yearValue,onChange:t.onYearChange,children:[e("option",{value:"",disabled:!0}),t.yearOptions.map(o=>e("option",{value:o.value,children:o.label},o.value))]})]}),l("label",{children:["Month",l("select",{value:t.monthValue,onChange:t.onMonthChange,children:[e("option",{value:"",disabled:!0}),t.monthOptions.map(o=>e("option",{value:o.value,children:o.label},o.value))]})]}),l("label",{children:["Day",l("select",{value:t.dayValue,onChange:t.onDayChange,ref:a,children:[e("option",{value:"",disabled:!0}),t.dayOptions.map(o=>e("option",{value:o.value,children:o.label},o.value))]})]})]})});b.displayName="CustomComponent";function x(){const{control:n,handleSubmit:a,watch:t,formState:{errors:o}}=d(),i=r=>console.log(r);return console.log(t("date")),l("form",{onSubmit:a(i),children:[e(s,{name:"date",control:n,rules:{required:!0},render:({field:r})=>e(b,u({},r))}),o.date&&e("span",{children:"This field is required"}),e("input",{type:"submit"})]})}const g=h.forwardRef((n,a)=>l(f,{children:[e("input",{type:"date",value:n.dateValue||"",onChange:n.onDateChange,ref:a}),e(H,u({},n))]}));g.displayName="CustomComponent";function M(){const{control:n,handleSubmit:a,watch:t,formState:{errors:o}}=d(),i=r=>console.log(r);return console.log(t("date")),l("form",{onSubmit:a(i),children:[e(s,{name:"date",control:n,rules:{required:!0},render:({field:r})=>e(k,m(u({},r),{render:C=>e(g,u({},C))}))}),o.date&&e("span",{children:"This field is required"}),e("input",{type:"submit"})]})}function Y(){const{control:n,handleSubmit:a,watch:t,formState:{errors:o}}=d(),i=r=>console.log(r);return console.log(t("date")),l("form",{onSubmit:a(i),children:[e(s,{name:"date",control:n,rules:{required:!0},render:({field:r})=>e(c,m(u({},r),{defaultYear:2e3}))}),o.date&&e("span",{children:"This field is required"}),e("input",{type:"submit"})]})}function B(){const{control:n,handleSubmit:a,watch:t,formState:{errors:o}}=d(),i=r=>console.log(r);return console.log(t("date")),l("form",{onSubmit:a(i),children:[e(s,{name:"date",control:n,rules:{required:!0},render:({field:r})=>e(c,m(u({},r),{hideDay:!0}))}),o.date&&e("span",{children:"This field is required"}),e("input",{type:"submit"})]})}function N(){return l("div",{children:[e(T,{}),e("hr",{}),e(W,{}),e(j,{}),e(x,{}),e(M,{}),e(Y,{}),e(B,{})]})}const P=document.getElementById("root"),$=F(P);$.render(e(h.StrictMode,{children:e(N,{})}));
