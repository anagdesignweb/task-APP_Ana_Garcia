import{e as u,r as p,o as v,c as m,b as e,w as _,f as l,v as a,n as r,g as i,a as f,h}from"./file_index.c7b9c914.js";import{r as b}from"./file_index.a1e6a5dd.js";const w={class:"hero is-fullheight backg-color-pink"},g={class:"hero-body"},x={class:"container"},y={class:"columns is-centered"},k={class:"column is-5-tablet is-4-desktop is-3-widescreen"},V=e("div",{class:"field has-text-centered"},[e("h1",null,"Register")],-1),N={class:"field"},R=e("label",{class:"label"},"Name",-1),U={class:"control"},B={class:"field"},C=e("label",{class:"label"},"Email",-1),q={class:"control"},D={class:"field"},E=e("label",{class:"label"},"Password",-1),M={class:"control"},P={class:"field"},S=e("label",{class:"label"},"Repeat Password",-1),T={class:"control"},z=e("div",{class:"field"},[e("button",{class:"button is-inline-block is-success",type:"submit"},"Register")],-1),$={class:"field"},G={__name:"Register",setup(j){const s=u({name:{content:"",error:!1},email:{content:"",error:!1},password1:{content:"",error:!1},password:{content:"",error:!1}}),c=async()=>{console.log("formulario enviado"),console.log(s.value),console.log(s.value.email.content),console.log(s.value.password.content),s.value.name.content.length===0?s.value.name.error=!0:s.value.name.error=!1;const n=async()=>{await b(s.value.email.content,s.value.password.content)};s.value.password1.content!==s.value.password.content?s.value.password.error=!0:n()};return(n,o)=>{const d=p("router-link");return v(),m("section",w,[e("div",g,[e("div",x,[e("div",y,[e("div",k,[e("form",{class:"box",onSubmit:o[4]||(o[4]=_(t=>c(),["prevent"]))},[V,e("div",N,[R,e("div",U,[l(e("input",{"onUpdate:modelValue":o[0]||(o[0]=t=>s.value.name.content=t),class:r(["input",{input:!0,"is-danger":s.value.name.error}]),type:"text",placeholder:"Nombre"},null,2),[[a,s.value.name.content]])])]),e("div",B,[C,e("div",q,[l(e("input",{"onUpdate:modelValue":o[1]||(o[1]=t=>s.value.email.content=t),class:"input",type:"email",placeholder:"yourname@gmail.com"},null,512),[[a,s.value.email.content]])])]),e("div",D,[E,e("div",M,[l(e("input",{"onUpdate:modelValue":o[2]||(o[2]=t=>s.value.password1.content=t),class:"input",type:"text",placeholder:"******",required:""},null,512),[[a,s.value.password1.content]])])]),e("div",P,[S,e("div",T,[l(e("input",{"onUpdate:modelValue":o[3]||(o[3]=t=>s.value.password.content=t),class:r(["input",{input:!0,"is-danger":s.value.password.error}]),type:"text",placeholder:"******",required:""},null,2),[[a,s.value.password.content]])])]),z,e("div",$,[e("p",null,[i("\xBFya estas registrado? "),f(d,{to:{name:"login"}},{default:h(()=>[i("login")]),_:1})])])],32)])])])])])}}};export{G as default};
