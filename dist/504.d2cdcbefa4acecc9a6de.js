"use strict";(self.webpackChunkcomplex_react_app=self.webpackChunkcomplex_react_app||[]).push([[504],{9504:(e,t,a)=>{a.r(t),a.d(t,{default:()=>u});var o=a(7294),l=a(6974),n=a(1387),s=a(9669),r=a.n(s),c=a(3983),m=a(7564);const u=function(e){const[t,a]=(0,o.useState)(),[s,u]=(0,o.useState)(),p=(0,l.s0)(),d=(0,o.useContext)(c.Z),i=(0,o.useContext)(m.Z);return o.createElement(n.Z,{title:"Create New Post"},o.createElement("form",{onSubmit:async function(e){e.preventDefault();try{const e=await r().post("/create-post",{title:t,body:s,token:i.user.token});d({type:"flashMessage",value:"Congrats, you created a new post. "}),p(`/post/${e.data}`),console.log("New post was created")}catch(e){console.log("There was a problem.")}}},o.createElement("div",{className:"form-group"},o.createElement("label",{htmlFor:"post-title",className:"text-muted mb-1"},o.createElement("small",null,"Title")),o.createElement("input",{onChange:e=>a(e.target.value),autoFocus:!0,name:"title",id:"post-title",className:"form-control form-control-lg form-control-title",type:"text",placeholder:"",autoComplete:"off"})),o.createElement("div",{className:"form-group"},o.createElement("label",{htmlFor:"post-body",className:"text-muted mb-1 d-block"},o.createElement("small",null,"Body Content")),o.createElement("textarea",{onChange:e=>u(e.target.value),name:"body",id:"post-body",className:"body-content tall-textarea form-control",type:"text"})),o.createElement("button",{className:"btn btn-primary"},"Save New Post")))}}}]);