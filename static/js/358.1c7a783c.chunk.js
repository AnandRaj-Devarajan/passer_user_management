"use strict";(self.webpackChunkusers_list=self.webpackChunkusers_list||[]).push([[358],{4662:(e,s,n)=>{n.d(s,{gw:()=>i,hG:()=>c,hU:()=>t,nu:()=>l});const t=()=>async e=>{e({type:"FETCH_USERS_REQUEST"});try{const s=await fetch("https://api.escuelajs.co/api/v1/users");if(!s.ok)throw new Error("Failed to fetch users");e({type:"FETCH_USERS_SUCCESS",payload:await s.json()})}catch(s){e({type:"FETCH_USERS_FAILURE",payload:s.message})}},l=e=>async s=>{try{s({type:"ADD_USER_REQUEST"}),setTimeout((()=>{s({type:"ADD_USER_SUCCESS",payload:e})}),1e3)}catch(n){s({type:"ADD_USER_FAILURE",payload:n.message})}},i=(e,s)=>async n=>{try{n({type:"EDIT_USER_REQUEST"}),setTimeout((()=>{n({type:"EDIT_USER_SUCCESS",payload:{userId:e,userData:s}})}),1e3)}catch(t){n({type:"EDIT_USER_FAILURE",payload:t.message})}},c=e=>async s=>{s({type:"DELETE_USER_REQUEST"});try{s({type:"DELETE_USER_SUCCESS",payload:e})}catch(n){s({type:"DELETE_USER_FAILURE",payload:n.message})}}},358:(e,s,n)=>{n.r(s),n.d(s,{default:()=>G});var t=n(5043),l=n(3003),i=n(6446),c=n(8911),a=n(1906),r=n(4662),d=n(3216),o=n(4882),h=n(8076),u=n(39),x=n(1962),p=n(8093),A=n(2088),g=n(579);function j(e,s,n){return s[n]<e[n]?-1:s[n]>e[n]?1:0}function S(e){const{onSelectAllClick:s,order:n,orderBy:t,numSelected:l,rowCount:c,onRequestSort:a,headCells:r}=e;return(0,g.jsx)(o.A,{children:(0,g.jsxs)(h.A,{children:[(0,g.jsx)(u.A,{padding:"checkbox",children:(0,g.jsx)(x.A,{color:"primary",indeterminate:l>0&&l<c,checked:c>0&&l===c,onChange:s,inputProps:{"aria-label":"select all desserts"}})}),r.map((e=>{return(0,g.jsx)(u.A,{align:e.numeric?"right":"left",padding:e.disablePadding?"none":"normal",sortDirection:t===e.id&&n,children:(0,g.jsxs)(p.A,{active:t===e.id,direction:t===e.id?n:"asc",onClick:(s=e.id,e=>{a(e,s)}),children:[e.label,t===e.id?(0,g.jsx)(i.A,{component:"span",sx:A.A,children:"desc"===n?"sorted descending":"sorted ascending"}):null]})},e.id);var s}))]})})}var m=n(9252),E=n(7121),y=n(3336),C=n(9650),U=n(1806),f=n(3460),b=n(1574),_=n(4605),k=n(4598),R=n(5475),w=n(5263),D=n(5865),v=n(2167),T=n(7392),P=n(35),I=n(6600),F=n(5316),L=n(9347),Q=n(3471);function H(e){const{numSelected:s,selected:n}=e,[l,i]=(0,t.useState)(!1);return(0,g.jsxs)("div",{children:[(0,g.jsxs)(w.A,{sx:{pl:{sm:2},pr:{xs:1,sm:1}},children:[s>0?(0,g.jsxs)(D.A,{sx:{flex:"1 1 100%"},color:"inherit",variant:"subtitle1",component:"div",children:[s," selected"]}):(0,g.jsx)(D.A,{sx:{flex:"1 1 100%"},variant:"h6",id:"tableTitle",component:"div",children:"Users List"}),s>0?(0,g.jsx)(v.A,{title:"Delete",children:(0,g.jsx)(T.A,{onClick:()=>i(!0),children:(0,g.jsx)(Q.A,{})})}):""]}),(0,g.jsx)(O,{open:l,handleClose:()=>i(!1),items:Array.isArray(n)?n:[n]})]})}const O=e=>{let{open:s,handleClose:n,items:t}=e;const i=(0,l.wA)();return(0,g.jsxs)(P.A,{open:s,onClose:n,children:[(0,g.jsx)(I.A,{align:"center",children:"Delete User"}),(0,g.jsx)(F.A,{children:"Are you sure you want to this ".concat(t.length>1?"Users?":"User?")}),(0,g.jsxs)(L.A,{children:[(0,g.jsx)(a.A,{onClick:n,children:"Cancel"}),(0,g.jsx)(a.A,{variant:"contained",onClick:()=>{i((0,r.hG)(t)),n()},children:"Delete"})]})]})};function q(e){const s=(0,d.Zp)(),{users:n,headCells:l,loading:c}=e,[a,r]=(0,t.useState)([]),[o,p]=(0,t.useState)("asc"),[A,w]=(0,t.useState)("id"),[D,v]=(0,t.useState)([]),[T,P]=(0,t.useState)(0),[I,F]=(0,t.useState)(!1),[L,Q]=(0,t.useState)(5);(0,t.useEffect)((()=>{!c&&n.length>0&&r(n)}),[c,n]);const O=T>0?Math.max(0,(1+T)*L-a.length):0,q=(0,t.useMemo)((()=>function(e,s){const n=e.map(((e,s)=>[e,s]));return n.sort(((e,n)=>{const t=s(e[0],n[0]);return 0!==t?t:e[1]-n[1]})),n.map((e=>e[0]))}(a,function(e,s){return"desc"===e?(e,n)=>j(e,n,s):(e,n)=>-j(e,n,s)}(o,A)).slice(T*L,T*L+L)),[o,A,T,L,a]);return c?(0,g.jsx)(m.A,{children:(0,g.jsx)(E.A,{variant:"rectangular",width:"100%",height:500})}):(0,g.jsxs)(i.A,{sx:{width:"100%"},children:[(0,g.jsxs)(y.A,{sx:{width:"100%",mb:2},children:[(0,g.jsx)(H,{numSelected:D.length,selected:D}),(0,g.jsx)(C.A,{children:(0,g.jsxs)(U.A,{sx:{minWidth:750},"aria-labelledby":"tableTitle",size:I?"small":"medium",children:[(0,g.jsx)(S,{headCells:l,numSelected:D.length,order:o,orderBy:A,onSelectAllClick:e=>{if(e.target.checked){const e=a.map((e=>e.id));v(e)}else v([])},onRequestSort:(e,s)=>{p(A===s&&"asc"===o?"desc":"asc"),w(s)},rowCount:a.length}),(0,g.jsxs)(f.A,{children:[q.map(((e,n)=>{const t=(l=e.id,-1!==D.indexOf(l));var l;const i="enhanced-table-checkbox-".concat(n);return(0,g.jsxs)(h.A,{role:"checkbox","aria-checked":t,tabIndex:-1,selected:t,sx:{cursor:"pointer"},children:[(0,g.jsx)(u.A,{padding:"checkbox",hover:!0,onClick:s=>((e,s)=>{const n=D.indexOf(s);let t=[];-1===n?t=t.concat(D,s):0===n?t=t.concat(D.slice(1)):n===D.length-1?t=t.concat(D.slice(0,-1)):n>0&&(t=t.concat(D.slice(0,n),D.slice(n+1))),v(t)})(0,e.id),children:(0,g.jsx)(x.A,{color:"primary",checked:t,inputProps:{"aria-labelledby":i}})}),(0,g.jsx)(u.A,{component:"th",id:i,scope:"row",align:"left",children:e.id}),(0,g.jsx)(u.A,{align:"left",onClick:()=>s("/user/detail/"+e.id,{state:{row:e}}),children:(0,g.jsx)(R.N_,{children:e.name})}),(0,g.jsx)(u.A,{align:"left",children:e.email}),(0,g.jsx)(u.A,{align:"left",children:e.role})]},e.id)})),O>0&&(0,g.jsx)(h.A,{style:{height:(I?33:53)*O},children:(0,g.jsx)(u.A,{colSpan:6})})]})]})}),(0,g.jsx)(b.A,{rowsPerPageOptions:[5,10,25],component:"div",count:a.length,rowsPerPage:L,page:T,onPageChange:(e,s)=>{P(s)},onRowsPerPageChange:e=>{Q(parseInt(e.target.value,10)),P(0)}})]}),(0,g.jsx)(_.A,{control:(0,g.jsx)(k.A,{checked:I,onChange:e=>{F(e.target.checked)}}),label:"Dense padding"})]})}const B=[{id:"id",numeric:!1,disablePadding:!1,label:"Id"},{id:"name",numeric:!1,disablePadding:!1,label:"User Name"},{id:"email",numeric:!1,disablePadding:!1,label:" Email"},{id:"role",numeric:!1,disablePadding:!1,label:"Role"}];const G=function(){const e=(0,l.wA)(),s=(0,d.Zp)(),n=(0,l.d4)((e=>e.user.users)),o=(0,l.d4)((e=>e.user.loading)),[h,u]=(0,t.useState)([]);return(0,t.useEffect)((()=>{0===n.length?e((0,r.hU)()):u(n)}),[e,n]),(0,g.jsx)(i.A,{sx:{width:"100%"},children:(0,g.jsxs)(i.A,{p:2,children:[null!==h&&void 0!==h&&h.length?(0,g.jsx)(c.A,{sx:{display:"flex",flexDirection:"row",justifyContent:"flex-end",alignItems:"center"},children:(0,g.jsx)(a.A,{variant:"contained",onClick:()=>s("/user/create-user"),children:"Add User"})}):"",(0,g.jsx)(q,{users:h,headCells:B,loading:o})]})})}}}]);
//# sourceMappingURL=358.1c7a783c.chunk.js.map