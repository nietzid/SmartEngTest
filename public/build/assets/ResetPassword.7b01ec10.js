import{u as w,r as f,j as s,a,H as h}from"./app.e4f346d9.js";import{G as v,B as C}from"./Guest.fa2e2a28.js";import{V as b,I as t}from"./ValidationErrors.7e89f209.js";import{L as n}from"./Label.a294ed40.js";import"./ApplicationLogo.82c81fde.js";function j({token:l,email:m}){const{data:o,setData:i,post:d,processing:p,errors:u,reset:c}=w({token:l,email:m,password:"",password_confirmation:""});f.exports.useEffect(()=>()=>{c("password","password_confirmation")},[]);const r=e=>{i(e.target.name,e.target.value)};return s(v,{children:[a(h,{title:"Reset Password"}),a(b,{errors:u}),s("form",{onSubmit:e=>{e.preventDefault(),d(route("password.update"))},children:[s("div",{children:[a(n,{forInput:"email",value:"Email"}),a(t,{type:"email",name:"email",value:o.email,className:"mt-1 block w-full",autoComplete:"username",handleChange:r})]}),s("div",{className:"mt-4",children:[a(n,{forInput:"password",value:"Password"}),a(t,{type:"password",name:"password",value:o.password,className:"mt-1 block w-full",autoComplete:"new-password",isFocused:!0,handleChange:r})]}),s("div",{className:"mt-4",children:[a(n,{forInput:"password_confirmation",value:"Confirm Password"}),a(t,{type:"password",name:"password_confirmation",value:o.password_confirmation,className:"mt-1 block w-full",autoComplete:"new-password",handleChange:r})]}),a("div",{className:"flex items-center justify-end mt-4",children:a(C,{className:"ml-4",processing:p,children:"Reset Password"})})]})]})}export{j as default};