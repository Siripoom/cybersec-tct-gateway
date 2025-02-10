import{j as e,P as u,fv as E,h as F,u as k,i as w,r as c,o as B,q as C,t as P,L as S,F as g,B as A,T as p,Q as d,U as a,X as h,ag as D,ah as N,S as V,bB as $,E as q,H as b,fw as H,d as O}from"./strapi-CZ_Tzx2x.js";const Q=(i,t)=>!i||!t?{}:{[i]:t[i]},Y=i=>(i?.inner||[]).reduce((t,s)=>(s.path&&(t[s.path.split("[").join(".").split("]").join("")]={id:s.message,defaultMessage:s.message,values:Q(s?.type,s?.params)}),t),{}),M=P().shape({email:q().email(b.email.id).required(b.required.id)}),G=O.a`
  color: ${({theme:i})=>i.colors.primary600};
`,_=()=>e.jsx(u.Protect,{permissions:E.settings,children:e.jsx(U,{})}),U=()=>{const{toggleNotification:i}=F(),{formatMessage:t}=k(),{get:s,post:v}=w(),[l,y]=c.useState(""),[I,f]=c.useState(!1),[x,R]=c.useState({}),{data:o,isLoading:j}=B(["email","settings"],async()=>{const n=await s("/email/settings"),{data:{config:r}}=n;return r}),m=C(async n=>{await v("/email/test",n)},{onError(){i({type:"danger",message:t({id:"email.Settings.email.plugin.notification.test.error",defaultMessage:"Failed to send a test mail to {to}"},{to:l})})},onSuccess(){i({type:"success",message:t({id:"email.Settings.email.plugin.notification.test.success",defaultMessage:"Email test succeeded, check the {to} mailbox"},{to:l})})},retry:!1});c.useEffect(()=>{M.validate({email:l},{abortEarly:!1}).then(()=>f(!0)).catch(()=>f(!1))},[l]);const T=n=>{y(()=>n.target.value)},L=async n=>{n.preventDefault();try{await M.validate({email:l},{abortEarly:!1})}catch(r){r instanceof H&&R(Y(r))}m.mutate({to:l})};return j?e.jsx(u.Loading,{}):e.jsxs(u.Main,{labelledBy:"title","aria-busy":j||m.isLoading,children:[e.jsx(u.Title,{children:t({id:"Settings.PageTitle",defaultMessage:"Settings - {name}"},{name:t({id:"email.Settings.email.plugin.title",defaultMessage:"Configuration"})})}),e.jsx(S.Header,{id:"title",title:t({id:"email.Settings.email.plugin.title",defaultMessage:"Configuration"}),subtitle:t({id:"email.Settings.email.plugin.subTitle",defaultMessage:"Test the settings for the Email plugin"})}),e.jsx(S.Content,{children:o&&e.jsx("form",{onSubmit:L,children:e.jsxs(g,{direction:"column",alignItems:"stretch",gap:7,children:[e.jsx(A,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:e.jsxs(g,{direction:"column",alignItems:"stretch",gap:4,children:[e.jsxs(g,{direction:"column",alignItems:"stretch",gap:1,children:[e.jsx(p,{variant:"delta",tag:"h2",children:t({id:"email.Settings.email.plugin.title.config",defaultMessage:"Configuration"})}),e.jsx(p,{children:t({id:"email.Settings.email.plugin.text.configuration",defaultMessage:"The plugin is configured through the {file} file, checkout this {link} for the documentation."},{file:"./config/plugins.js",link:e.jsx(G,{href:"https://docs.strapi.io/developer-docs/latest/plugins/email.html",target:"_blank",rel:"noopener noreferrer",children:t({id:"email.link",defaultMessage:"Link"})})})})]}),e.jsxs(d.Root,{gap:5,children:[e.jsx(d.Item,{col:6,s:12,direction:"column",alignItems:"stretch",children:e.jsxs(a.Root,{name:"shipper-email",children:[e.jsx(a.Label,{children:t({id:"email.Settings.email.plugin.label.defaultFrom",defaultMessage:"Default sender email"})}),e.jsx(h,{placeholder:t({id:"email.Settings.email.plugin.placeholder.defaultFrom",defaultMessage:"ex: Strapi No-Reply '<'no-reply@strapi.io'>'"}),disabled:!0,value:o.settings.defaultFrom})]})}),e.jsx(d.Item,{col:6,s:12,direction:"column",alignItems:"stretch",children:e.jsxs(a.Root,{name:"response-email",children:[e.jsx(a.Label,{children:t({id:"email.Settings.email.plugin.label.defaultReplyTo",defaultMessage:"Default response email"})}),e.jsx(h,{placeholder:t({id:"email.Settings.email.plugin.placeholder.defaultReplyTo",defaultMessage:"ex: Strapi '<'example@strapi.io'>'"}),disabled:!0,value:o.settings.defaultReplyTo})]})}),e.jsx(d.Item,{col:6,s:12,direction:"column",alignItems:"stretch",children:e.jsxs(a.Root,{name:"email-provider",children:[e.jsx(a.Label,{children:t({id:"email.Settings.email.plugin.label.provider",defaultMessage:"Email provider"})}),e.jsx(D,{disabled:!0,value:o.provider,children:e.jsx(N,{value:o.provider,children:o.provider})})]})})]})]})}),e.jsxs(g,{alignItems:"stretch",background:"neutral0",direction:"column",gap:4,hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:[e.jsx(p,{variant:"delta",tag:"h2",children:t({id:"email.Settings.email.plugin.title.test",defaultMessage:"Test email delivery"})}),e.jsxs(d.Root,{gap:5,children:[e.jsx(d.Item,{col:6,s:12,direction:"column",alignItems:"stretch",children:e.jsxs(a.Root,{name:"test-address",error:x.email?.id&&t({id:`email.${x.email?.id}`,defaultMessage:"This is not a valid email"}),children:[e.jsx(a.Label,{children:t({id:"email.Settings.email.plugin.label.testAddress",defaultMessage:"Recipient email"})}),e.jsx(h,{onChange:T,value:l,placeholder:t({id:"email.Settings.email.plugin.placeholder.testAddress",defaultMessage:"ex: developer@example.com"})})]})}),e.jsx(d.Item,{col:7,s:12,direction:"column",alignItems:"start",children:e.jsx(V,{loading:m.isLoading,disabled:!I,type:"submit",startIcon:e.jsx($,{}),children:t({id:"email.Settings.email.plugin.button.test-email",defaultMessage:"Send test email"})})})]})]})]})})})]})};export{_ as ProtectedSettingsPage};
