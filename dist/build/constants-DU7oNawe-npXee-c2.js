import{a5 as c,u as h,b3 as u,j as s,b8 as x,b9 as g,ba as j,bb as p,bc as f,bd as v,B as t,T as a,F as n,aX as m,S as b,b as w,a6 as L,d as S,b5 as C}from"./strapi-CZ_Tzx2x.js";import{S as y}from"./SSOProviders-BD7LHrkI--6qt3ZpE.js";const k=()=>{const d=c(),{formatMessage:i}=h(),{isLoading:e,data:r=[]}=u(void 0,{skip:!window.strapi.features.isEnabled(window.strapi.features.SSO)}),l=()=>{d("/auth/login")};return!window.strapi.features.isEnabled(window.strapi.features.SSO)||!e&&r.length===0?s.jsx(x,{to:"/auth/login"}):s.jsx(g,{children:s.jsxs(j,{children:[s.jsxs(p,{children:[s.jsxs(f,{children:[s.jsx(v,{}),s.jsx(t,{paddingTop:6,paddingBottom:1,children:s.jsx(a,{tag:"h1",variant:"alpha",children:i({id:"Auth.form.welcome.title"})})}),s.jsx(t,{paddingBottom:7,children:s.jsx(a,{variant:"epsilon",textColor:"neutral600",children:i({id:"Auth.login.sso.subtitle"})})})]}),s.jsxs(n,{direction:"column",alignItems:"stretch",gap:7,children:[e?s.jsx(n,{justifyContent:"center",children:s.jsx(m,{children:i({id:"Auth.login.sso.loading"})})}):s.jsx(y,{providers:r}),s.jsxs(n,{children:[s.jsx(o,{}),s.jsx(t,{paddingLeft:3,paddingRight:3,children:s.jsx(a,{variant:"sigma",textColor:"neutral600",children:i({id:"or"})})}),s.jsx(o,{})]}),s.jsx(b,{fullWidth:!0,size:"L",onClick:l,children:i({id:"Auth.form.button.login.strapi"})})]})]}),s.jsx(n,{justifyContent:"center",children:s.jsx(t,{paddingTop:4,children:s.jsx(w,{tag:L,to:"/auth/forgot-password",children:s.jsx(a,{variant:"pi",children:i({id:"Auth.link.forgot-password"})})})})})]})})},o=S(C)`
  flex: 1;
`,F={providers:k};export{F as FORMS};
