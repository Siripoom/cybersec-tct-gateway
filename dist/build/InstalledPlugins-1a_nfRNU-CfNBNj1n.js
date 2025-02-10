import{u as x,Y as m,h as P,k as M,c1 as b,r as T,j as s,P as n,L as d,v as y,w as C,x as u,y as c,T as l,z as E,A as p,aM as I}from"./strapi-CZ_Tzx2x.js";const L=()=>{const{formatMessage:e}=x(),{notifyStatus:t}=m(),{toggleNotification:a}=P(),{_unstableFormatAPIError:g}=M(),{isLoading:h,data:i,error:r}=b();return T.useEffect(()=>{i&&t(e({id:"app.utils.notify.data-loaded",defaultMessage:"The {target} has loaded"},{target:e({id:"global.plugins",defaultMessage:"Plugins"})})),r&&a({type:"danger",message:g(r)})},[i,r,g,e,t,a]),h?s.jsx(n.Loading,{}):s.jsx(d.Root,{children:s.jsxs(n.Main,{children:[s.jsx(d.Header,{title:e({id:"global.plugins",defaultMessage:"Plugins"}),subtitle:e({id:"app.components.ListPluginsPage.description",defaultMessage:"List of the installed plugins in the project."})}),s.jsx(d.Content,{children:s.jsxs(y,{colCount:2,rowCount:i?.plugins?.length??1,children:[s.jsx(C,{children:s.jsxs(u,{children:[s.jsx(c,{children:s.jsx(l,{variant:"sigma",textColor:"neutral600",children:e({id:"global.name",defaultMessage:"Name"})})}),s.jsx(c,{children:s.jsx(l,{variant:"sigma",textColor:"neutral600",children:e({id:"global.description",defaultMessage:"description"})})})]})}),s.jsx(E,{children:i?.plugins.map(({name:o,displayName:f,description:j})=>s.jsxs(u,{children:[s.jsx(p,{children:s.jsx(l,{textColor:"neutral800",variant:"omega",fontWeight:"bold",children:e({id:`global.plugins.${o}`,defaultMessage:f})})}),s.jsx(p,{children:s.jsx(l,{textColor:"neutral800",children:e({id:`global.plugins.${o}.description`,defaultMessage:j})})})]},o))})]})})]})})},v=()=>{const{formatMessage:e}=x(),t=I(a=>a.admin_app.permissions);return s.jsxs(n.Protect,{permissions:t.marketplace?.main,children:[s.jsx(n.Title,{children:e({id:"global.plugins",defaultMessage:"Plugins"})}),s.jsx(L,{})]})};export{L as InstalledPlugins,v as ProtectedInstalledPlugins};
