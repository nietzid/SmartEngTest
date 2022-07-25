import{u as c,r as p,j as a,a as e,H as f,L as h}from"./app.e4f346d9.js";import{G as w,B as g}from"./Guest.fa2e2a28.js";import{V as v,I as o}from"./ValidationErrors.7e89f209.js";import{L as l}from"./Label.a294ed40.js";import"./ApplicationLogo.82c81fde.js";function I(){const{data:s,setData:n,post:m,processing:i,errors:u,reset:d}=c({name:"",email:"",password:"",password_confirmation:""});p.exports.useEffect(()=>()=>{d("password","password_confirmation")},[]);const t=r=>{n(r.target.name,r.target.type==="checkbox"?r.target.checked:r.target.value)};return a(w,{children:[e(f,{title:"Register"}),e(v,{errors:u}),a("form",{onSubmit:r=>{r.preventDefault(),m(route("register"))},children:[a("div",{children:[e(l,{forInput:"name",value:"Name"}),e(o,{type:"text",name:"name",value:s.name,className:"mt-1 block w-full",autoComplete:"name",isFocused:!0,handleChange:t,required:!0})]}),a("div",{className:"mt-4",children:[e(l,{forInput:"email",value:"Email"}),e(o,{type:"email",name:"email",value:s.email,className:"mt-1 block w-full",autoComplete:"username",handleChange:t,required:!0})]}),a("div",{className:"mt-4",children:[e(l,{forInput:"password",value:"Password"}),e(o,{type:"password",name:"password",value:s.password,className:"mt-1 block w-full",autoComplete:"new-password",handleChange:t,required:!0})]}),a("div",{className:"mt-4",children:[e(l,{forInput:"password_confirmation",value:"Confirm Password"}),e(o,{type:"password",name:"password_confirmation",value:s.password_confirmation,className:"mt-1 block w-full",handleChange:t,required:!0})]}),a("div",{className:"flex items-center justify-end mt-4",children:[e(h,{href:route("login"),className:"underline text-sm text-gray-600 hover:text-gray-900",children:"Already registered?"}),e(g,{className:"ml-4",processing:i,children:"Register"})]})]})]})}export{I as default};
