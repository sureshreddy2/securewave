(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{45:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),s=n(18),o=n.n(s),r=n(19),i=n(2),j=n(3);var l=()=>Object(j.jsx)("div",{children:Object(j.jsx)("h1",{children:"Welcome to SecureWave"})}),h=n(7),p=n.n(h);var d=()=>{const[e,t]=Object(c.useState)(""),[n,a]=Object(c.useState)("");return Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:"Login"}),Object(j.jsx)("input",{type:"text",placeholder:"Phone Number",value:e,onChange:e=>t(e.target.value)}),Object(j.jsx)("button",{onClick:async()=>{await(async e=>await p.a.post("http://3.108.66.202:5000/api/send-otp",{phone:e}))(e),alert("OTP sent to your phone")},children:"Send OTP"}),Object(j.jsx)("input",{type:"text",placeholder:"OTP",value:n,onChange:e=>a(e.target.value)}),Object(j.jsx)("button",{onClick:async()=>{const t=await(async(e,t)=>(await p.a.post("http://3.108.66.202:5000/api/verify-otp",{phone:e,otp:t})).data.success)(e,n);t?alert("OTP verified successfully"):alert("Invalid OTP")},children:"Verify OTP"})]})};var O=()=>Object(j.jsx)(r.a,{children:Object(j.jsxs)(i.c,{children:[Object(j.jsx)(i.a,{path:"/",element:Object(j.jsx)(l,{})}),Object(j.jsx)(i.a,{path:"/login",element:Object(j.jsx)(d,{})})]})});n(45);o.a.createRoot(document.getElementById("root")).render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(O,{})}))}},[[46,1,2]]]);
//# sourceMappingURL=main.cddc0d3f.chunk.js.map