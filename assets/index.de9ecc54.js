import{a as s,j as e,c as m,R as u}from"./jsx-runtime.2f4bb9f3.js";import{u as c,C as l}from"./index.esm.d3e0aa34.js";import{D as d}from"./DateSelect.640ea876.js";import"./emotion-styled.browser.esm.e0d2f2cb.js";import"./use-date-select.aeab0953.js";function p(){const{control:r,handleSubmit:o,watch:n,formState:{errors:i}}=c(),a=t=>console.log(t);return console.log(n("date")),s("form",{onSubmit:o(a),children:[e(l,{name:"date",control:r,rules:{required:!0},render:({field:t})=>e(d,{...t})}),i.date&&e("span",{children:"This field is required"}),e("input",{type:"submit"})]})}function h(){const{control:r,handleSubmit:o,watch:n,formState:{errors:i}}=c(),a=t=>console.log(t);return console.log(n("date")),s("form",{onSubmit:o(a),children:[e(l,{name:"date",control:r,rules:{required:!0},render:({field:t})=>e(d,{...t,hideDay:!0})}),i.date&&e("span",{children:"This field is required"}),e("input",{type:"submit"})]})}function f(){return s("div",{children:[e(p,{}),e(h,{})]})}const S=document.getElementById("root"),b=m(S);b.render(e(u.StrictMode,{children:e(f,{})}));
