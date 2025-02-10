const __vite__fileDeps=["MagicLinkEE-CDJs-_17-DieUtTCz.js","strapi-CZ_Tzx2x.js","strapi-COJtagOC.css","SelectRoles-CzMLJs9Y-C1qeYxnp.js","useAdminRoles-DWhky7Ix-DDbbcBMj.js","CreateActionEE-JUvyeAny-CHJPNuTG.js","isNil-DKPRCfut.js","ListPage-BG9wGseD-Cyw02N1M.js","useLicenseLimitNotification-CAQIrlP4-CErYbwZD.js","users-8N93LH7R-MOwOr-tf.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{bv as M,j as e,k as G,r as g,aM as J,m as re,a5 as ie,h as W,u as N,av as ne,aR as le,bw as oe,bx as de,P as T,L as V,bf as ce,aO as I,aP as n,T as A,F as v,I as $,a6 as ue,C as me,bh as ge,aQ as q,bj as pe,bk as he,by as E,bz as xe,bA as be,M as b,J as fe,K as je,$ as Me,t as Ee,B as R,Q as f,a0 as Q,S as P,bB as Ae,a_ as Se,E as H,H as j,a$ as ye}from"./strapi-CZ_Tzx2x.js";import{g as Y}from"./users-8N93LH7R-MOwOr-tf.js";import{M as Ce,S as _e}from"./SelectRoles-CzMLJs9Y-C1qeYxnp.js";import"./useAdminRoles-DWhky7Ix-DDbbcBMj.js";const Le=g.forwardRef((a,l)=>{const{formatMessage:p}=N();return e.jsx(P,{ref:l,startIcon:e.jsx(Ae,{}),size:"S",...a,children:p({id:"Settings.permissions.users.create",defaultMessage:"Invite new user"})})}),Ie=({onToggle:a})=>{const[l,p]=g.useState("create"),[k,F]=g.useState(""),{formatMessage:t}=N(),{toggleNotification:m}=W(),{_unstableFormatAPIError:w,_unstableFormatValidationErrors:S}=G(),c=M(Re,async()=>(await E(()=>import("./ModalForm-B9SUkQ1l-CamjQBT3.js"),[])).ROLE_LAYOUT,{combine(o,d){return[...o,...d]},defaultValue:[]}),D=M(K,async()=>(await E(()=>import("./ModalForm-B9SUkQ1l-CamjQBT3.js"),[])).FORM_INITIAL_VALUES,{combine(o,d){return{...o,...d}},defaultValue:K}),y=M(Ce,async()=>(await E(()=>import("./MagicLinkEE-CDJs-_17-DieUtTCz.js"),__vite__mapDeps([0,1,2,3,4]))).MagicLinkEE),[h]=be(),C=t({id:"Settings.permissions.users.create",defaultMessage:"Invite new user"}),O=async(o,{setErrors:d})=>{const r=await h({...o,roles:o.roles??[]});"data"in r?(r.data.registrationToken&&F(r.data.registrationToken),U()):(m({type:"danger",message:w(r.error)}),ye(r.error)&&r.error.name==="ValidationError"&&d(S(r.error)))},U=()=>{L?p(L):a()},{buttonSubmitLabel:_,isDisabled:x,next:L}=ve[l];return y?e.jsx(b.Root,{defaultOpen:!0,onOpenChange:a,children:e.jsxs(b.Content,{children:[e.jsx(b.Header,{children:e.jsx(fe,{label:C,children:e.jsx(je,{isCurrent:!0,children:C})})}),e.jsx(Me,{method:l==="create"?"POST":"PUT",initialValues:D??{},onSubmit:O,validationSchema:Pe,children:({isSubmitting:o})=>e.jsxs(e.Fragment,{children:[e.jsx(b.Body,{children:e.jsxs(v,{direction:"column",alignItems:"stretch",gap:6,children:[l!=="create"&&e.jsx(y,{registrationToken:k}),e.jsxs(R,{children:[e.jsx(A,{variant:"beta",tag:"h2",children:t({id:"app.components.Users.ModalCreateBody.block-title.details",defaultMessage:"User details"})}),e.jsx(R,{paddingTop:4,children:e.jsx(v,{direction:"column",alignItems:"stretch",gap:1,children:e.jsx(f.Root,{gap:5,children:Te.map(d=>d.map(({size:r,...i})=>e.jsx(f.Item,{col:r,direction:"column",alignItems:"stretch",children:e.jsx(Q,{...i,disabled:x,label:t(i.label),placeholder:t(i.placeholder)})},i.name)))})})})]}),e.jsxs(R,{children:[e.jsx(A,{variant:"beta",tag:"h2",children:t({id:"global.roles",defaultMessage:"User's role"})}),e.jsx(R,{paddingTop:4,children:e.jsxs(f.Root,{gap:5,children:[e.jsx(f.Item,{col:6,xs:12,direction:"column",alignItems:"stretch",children:e.jsx(_e,{disabled:x})}),c.map(d=>d.map(({size:r,...i})=>e.jsx(f.Item,{col:r,direction:"column",alignItems:"stretch",children:e.jsx(Q,{...i,disabled:x,label:t(i.label),placeholder:i.placeholder?t(i.placeholder):void 0,hint:i.hint?t(i.hint):void 0})},i.name)))]})})]})]})}),e.jsxs(b.Footer,{children:[e.jsx(P,{variant:"tertiary",onClick:a,type:"button",children:t({id:"app.components.Button.cancel",defaultMessage:"Cancel"})}),l==="create"?e.jsx(P,{type:"submit",loading:o,children:t(_)}):e.jsx(P,{type:"button",loading:o,onClick:a,children:t(_)})]})]})})]})}):null},K={firstname:"",lastname:"",email:"",roles:[]},Re=[],Te=[[{label:{id:"Auth.form.firstname.label",defaultMessage:"First name"},name:"firstname",placeholder:{id:"Auth.form.firstname.placeholder",defaultMessage:"e.g. Kai"},type:"string",size:6,required:!0},{label:{id:"Auth.form.lastname.label",defaultMessage:"Last name"},name:"lastname",placeholder:{id:"Auth.form.lastname.placeholder",defaultMessage:"e.g. Doe"},type:"string",size:6}],[{label:{id:"Auth.form.email.label",defaultMessage:"Email"},name:"email",placeholder:{id:"Auth.form.email.placeholder",defaultMessage:"e.g. kai.doe@strapi.io"},type:"email",size:6,required:!0}]],Pe=Ee().shape({firstname:H().trim().required({id:j.required.id,defaultMessage:"This field is required"}).nullable(),lastname:H(),email:H().email(j.email).required({id:j.required.id,defaultMessage:"This field is required"}).nullable(),roles:Se().min(1,{id:j.required.id,defaultMessage:"This field is required"}).required({id:j.required.id,defaultMessage:"This field is required"})}),ve={create:{buttonSubmitLabel:{id:"app.containers.Users.ModalForm.footer.button-success",defaultMessage:"Invite user"},isDisabled:!1,next:"magic-link"},"magic-link":{buttonSubmitLabel:{id:"global.finish",defaultMessage:"Finish"},isDisabled:!0,next:null}},ke=()=>{const{_unstableFormatAPIError:a}=G(),[l,p]=g.useState(!1),k=J(s=>s.admin_app.permissions),{allowedActions:{canCreate:F,canDelete:t,canRead:m}}=re(k.settings?.users),w=ie(),{toggleNotification:S}=W(),{formatMessage:c}=N(),{search:D}=ne(),[y,h]=g.useState(!1),[C,O]=g.useState([]),{data:U,isError:_,isLoading:x}=le(oe.parse(D,{ignoreQueryPrefix:!0})),{pagination:L,users:o=[]}=U??{},d=M(Le,async()=>(await E(()=>import("./CreateActionEE-JUvyeAny-CHJPNuTG.js"),__vite__mapDeps([5,1,2,6]))).CreateActionEE),r=Fe.map(s=>({...s,label:c(s.label)})),i=c({id:"global.users",defaultMessage:"Users"}),z=()=>{p(s=>!s)},[X]=de(),Z=async s=>{try{const u=await X({ids:s});"error"in u&&S({type:"danger",message:a(u.error)})}catch{S({type:"danger",message:c({id:"global.error",defaultMessage:"An error occurred"})})}},ee=s=>()=>{m&&w(s.toString())},se=s=>async()=>{O([s]),h(!0)},ae=async()=>{await Z(C),h(!1)};return d?_?e.jsx(T.Error,{}):e.jsxs(T.Main,{"aria-busy":x,children:[e.jsx(T.Title,{children:c({id:"Settings.PageTitle",defaultMessage:"Settings - {name}"},{name:"Users"})}),e.jsx(V.Header,{primaryAction:F&&e.jsx(d,{onClick:z}),title:i,subtitle:c({id:"Settings.permissions.users.listview.header.subtitle",defaultMessage:"All the users who have access to the Strapi admin panel"})}),e.jsx(V.Action,{startActions:e.jsxs(e.Fragment,{children:[e.jsx(ce,{label:c({id:"app.component.search.label",defaultMessage:"Search for {target}"},{target:i})}),e.jsxs(I.Root,{options:we,children:[e.jsx(I.Trigger,{}),e.jsx(I.Popover,{}),e.jsx(I.List,{})]})]})}),e.jsxs(V.Content,{children:[e.jsxs(n.Root,{rows:o,headers:r,children:[e.jsx(n.ActionBar,{}),e.jsxs(n.Content,{children:[e.jsxs(n.Head,{children:[t?e.jsx(n.HeaderCheckboxCell,{}):null,r.map(s=>e.jsx(n.HeaderCell,{...s},s.name))]}),e.jsx(n.Empty,{}),e.jsx(n.Loading,{}),e.jsx(n.Body,{children:o.map(s=>e.jsxs(n.Row,{onClick:ee(s.id),cursor:m?"pointer":"default",children:[t?e.jsx(n.CheckboxCell,{id:s.id}):null,r.map(({cellFormatter:u,name:B,...te})=>e.jsx(n.Cell,{children:typeof u=="function"?u(s,{name:B,...te}):e.jsx(A,{textColor:"neutral800",children:s[B]||"-"})},B)),m||t?e.jsx(n.Cell,{onClick:u=>u.stopPropagation(),children:e.jsxs(v,{justifyContent:"end",children:[m?e.jsx($,{tag:ue,to:s.id.toString(),label:c({id:"app.component.table.edit",defaultMessage:"Edit {target}"},{target:Y(s)}),variant:"ghost",children:e.jsx(me,{})}):null,t?e.jsx($,{onClick:se(s.id),label:c({id:"global.delete-target",defaultMessage:"Delete {target}"},{target:Y(s)}),variant:"ghost",children:e.jsx(ge,{})}):null]})}):null]},s.id))})]})]}),e.jsxs(q.Root,{...L,children:[e.jsx(q.PageSize,{}),e.jsx(q.Links,{})]})]}),l&&e.jsx(Ie,{onToggle:z}),e.jsx(pe.Root,{open:y,onOpenChange:h,children:e.jsx(he,{onConfirm:ae})})]}):null},Fe=[{name:"firstname",label:{id:"Settings.permissions.users.firstname",defaultMessage:"Firstname"},sortable:!0},{name:"lastname",label:{id:"Settings.permissions.users.lastname",defaultMessage:"Lastname"},sortable:!0},{name:"email",label:{id:"Settings.permissions.users.email",defaultMessage:"Email"},sortable:!0},{name:"roles",label:{id:"Settings.permissions.users.roles",defaultMessage:"Roles"},sortable:!1,cellFormatter({roles:a}){return e.jsx(A,{textColor:"neutral800",children:a.map(l=>l.name).join(`,
`)})}},{name:"username",label:{id:"Settings.permissions.users.username",defaultMessage:"Username"},sortable:!0},{name:"isActive",label:{id:"Settings.permissions.users.user-status",defaultMessage:"User status"},sortable:!1,cellFormatter({isActive:a}){return e.jsx(v,{children:e.jsx(xe,{size:"S",borderWidth:0,background:"transparent",color:"neutral800",variant:a?"success":"danger",children:e.jsx(A,{children:a?"Active":"Inactive"})})})}}],we=[{name:"firstname",label:"Firstname",type:"string"},{name:"lastname",label:"Lastname",type:"string"},{name:"email",label:"Email",type:"email"},{name:"username",label:"Username",type:"string"},{name:"isActive",label:"Active user",type:"boolean"}],De=()=>{const a=M(ke,async()=>(await E(()=>import("./ListPage-BG9wGseD-Cyw02N1M.js"),__vite__mapDeps([7,1,2,8,6,9,3,4]))).UserListPageEE);return a?e.jsx(a,{}):null},qe=()=>{const a=J(l=>l.admin_app.permissions.settings?.users.read);return e.jsx(T.Protect,{permissions:a,children:e.jsx(De,{})})};export{De as ListPage,ke as ListPageCE,qe as ProtectedListPage};
