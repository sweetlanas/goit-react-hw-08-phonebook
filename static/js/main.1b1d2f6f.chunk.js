(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[0],{57:function(e,t,n){},84:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(27),o=n.n(a),s=(n(57),n(5)),i=n(21),u=function(e){return e.auth.isLoggedIn},l=n(12),b=n.n(l),j=n(25),d=n(7),p=n(18),O=n.n(p);O.a.defaults.baseURL="https://connections-api.herokuapp.com";var f=function(e){O.a.defaults.headers.common.Authorization="Bearer ".concat(e)},x=function(){O.a.defaults.headers.common.Authorization=""},m=Object(d.c)("auth/register",function(){var e=Object(j.a)(b.a.mark((function e(t){var n,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.post("/users/signup",t);case 3:return n=e.sent,r=n.data,f(r.token),e.abrupt("return",r);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()),h=Object(d.c)("auth/login",function(){var e=Object(j.a)(b.a.mark((function e(t){var n,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.post("/users/login",t);case 3:return n=e.sent,r=n.data,f(r.token),e.abrupt("return",r);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()),g=Object(d.c)("auth/logout",Object(j.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.post("/users/logout");case 3:x(),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))),v=Object(d.c)("auth/refresh",function(){var e=Object(j.a)(b.a.mark((function e(t,n){var r,c,a,o;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=n.getState(),null!==(c=r.auth.token)){e.next=4;break}return e.abrupt("return",n.rejectWithValue());case 4:return f(c),e.prev=5,e.next=8,O.a.get("/users/current");case 8:return a=e.sent,o=a.data,e.abrupt("return",o);case 13:e.prev=13,e.t0=e.catch(5),console.log(e.t0.message);case 16:case"end":return e.stop()}}),e,null,[[5,13]])})));return function(t,n){return e.apply(this,arguments)}}()),y=n(100),k=n(2),w={container:{borderRadius:"10px",backgroundColor:"rgba(0, 170, 238, 0.8)",display:"flex",justifyContent:"space-between",padding:"15px 30px",marginBottom:"30px"},link:{textDecoration:"none",display:"inline-block",marginRight:"20px"}};var C=function(){var e=Object(s.c)(u),t=Object(s.b)();return Object(k.jsxs)("header",{style:w.container,children:[Object(k.jsxs)("div",{children:[Object(k.jsx)(i.b,{style:w.link,to:"/",children:Object(k.jsx)(y.a,{variant:"contained",color:"primary",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"})}),e&&Object(k.jsx)(i.b,{style:w.link,to:"/contacts",children:Object(k.jsx)(y.a,{variant:"contained",color:"primary",children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"})})]}),e?Object(k.jsx)(y.a,{onClick:function(){return t(g())},variant:"contained",color:"primary",children:"Logout"}):Object(k.jsxs)("div",{children:[Object(k.jsx)(i.b,{style:w.link,to:"/login",children:Object(k.jsx)(y.a,{variant:"contained",color:"primary",children:"\u041b\u043e\u0433\u0438\u043d"})}),Object(k.jsx)(i.b,{style:w.link,to:"/register",children:Object(k.jsx)(y.a,{variant:"contained",color:"primary",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})})]})]})},z=n(6),S=n(22),L=n(11);var T=Object(L.a)("div",{target:"e1jnn7uv5"})({name:"1uvqu8f",styles:"margin-bottom:20px;padding:20px;box-shadow:0px 1px 5px 1px rgba(34, 60, 80, 0.4)"}),A=Object(L.a)("button",{target:"e1jnn7uv4"})({name:"noouvr",styles:"display:flex;align-items:center;padding:7px;border-color:transparent;border-radius:5px;background-color:#c7cace;text-transform:uppercase;transition:background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);cursor:pointer;&:hover{background-color:#3561d0;color:#fff;}"}),I=Object(L.a)("span",{target:"e1jnn7uv3"})({name:"1693thf",styles:"margin-right:5px"}),q=Object(L.a)("div",{target:"e1jnn7uv2"})({name:"avpsk8",styles:"margin-bottom:15px"}),D=Object(L.a)("input",{target:"e1jnn7uv1"})({name:"djnsmr",styles:"border-color:#a29f9f;border-radius:5px;&:hover{border-color:#0741d3;}"}),B=Object(L.a)("p",{target:"e1jnn7uv0"})({name:"pr10xp",styles:"margin-bottom:10px"}),F=n(32),R=Object(d.c)("contacts/fetchContacts",Object(j.a)(b.a.mark((function e(){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.get("/contacts");case 3:return t=e.sent,n=t.data,e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))),U=Object(d.c)("contacts/addContacts",function(){var e=Object(j.a)(b.a.mark((function e(t){var n,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.post("/contacts",t);case 3:return n=e.sent,r=n.data,e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()),E=Object(d.c)("contacts/deleteContacts",function(){var e=Object(j.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.delete("/contacts/".concat(t));case 3:return e.abrupt("return",t);case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0.message);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}()),J=function(e){return e.phonebook.contacts},Z=function(e){return e.phonebook.filter},M=n(51),N=n(3);var P=function(){var e=Object(s.b)(),t=Object(s.c)(J),n=Object(r.useRef)(null),c=Object(r.useState)(""),a=Object(S.a)(c,2),o=a[0],i=a[1],u=Object(r.useState)(""),l=Object(S.a)(u,2),b=l[0],j=l[1],d=function(e){var t=e.currentTarget,n=t.name,r=t.value;switch(n){case"name":i(r);break;case"number":j(r);break;default:return}};Object(r.useEffect)((function(){M.a.fromTo(n,1,{x:-1800,opacity:0,ease:N.b.easeInOut(),rotate:360},{x:0,opacity:1,backgroundColor:"#dbd8eb",rotate:720})}),[]);var p=function(){i(""),j("")};return Object(k.jsx)("div",{children:Object(k.jsx)("div",{ref:function(e){return n=e},children:Object(k.jsx)(T,{children:Object(k.jsxs)("form",{onSubmit:function(n){n.preventDefault(),t.some((function(e){return e.name===o}))?alert(" ".concat(o," is already in contacts!")):(e(U({name:o,number:b})),p())},children:[Object(k.jsx)(q,{children:Object(k.jsxs)("label",{children:[Object(k.jsx)(B,{children:"Name"}),Object(k.jsx)(D,{type:"text",name:"name",value:o,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432.  \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:d})]})}),Object(k.jsx)(q,{children:Object(k.jsxs)("label",{children:[Object(k.jsx)(B,{children:"Number"}),Object(k.jsx)(D,{type:"tel",name:"number",value:b,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435,  \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:d})]})}),Object(k.jsxs)(A,{type:"submit",children:[Object(k.jsx)(I,{children:"Add contact"}),Object(k.jsx)(F.b,{size:16})]})]})})})})};var V=Object(L.a)("h3",{target:"e18y3lzc1"})({name:"pr10xp",styles:"margin-bottom:10px"}),W=Object(L.a)("input",{target:"e18y3lzc0"})({name:"8gixdl",styles:"margin-bottom:20px;border-color:#a29f9f;border-radius:5px;&:hover{border-color:#0741d3;}"}),$=(Object(d.b)("phonebook/addContact"),Object(d.b)("phonebook/deleteContact"),Object(d.b)("phonebook/filter"));var G=function(){var e=Object(s.c)(Z),t=Object(s.b)();return Object(k.jsxs)("div",{children:[Object(k.jsx)(V,{children:"Find contacts by name"}),Object(k.jsx)(W,{type:"text",value:e,onChange:function(e){t($(e.target.value))}})]})};var H=Object(L.a)("li",{target:"eji1r9q3"})({name:"1j8wke4",styles:"display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;list-style:none;transition:color 250ms cubic-bezier(0.4, 0, 0.2, 1);&:hover{color:#3561d0;}"}),K=Object(L.a)("button",{target:"eji1r9q2"})({name:"zr3218",styles:"display:inline-flex;align-items:center;padding:5px;border-color:transparent;border-radius:5px;background-color:#c7cace;text-transform:uppercase;cursor:pointer;&:hover{background-color:#3561d0;color:#fff;transition:background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);}"}),Q=Object(L.a)("span",{target:"eji1r9q1"})({name:"1693thf",styles:"margin-right:5px"}),X=Object(L.a)("span",{target:"eji1r9q0"})({name:"rmjeep",styles:"margin-right:30px;margin-left:10px"}),Y=n(47),_=function(e,t){var n=t.toLowerCase().trim();return e.filter((function(e){return e.name.toLowerCase().includes(n)}))},ee=function(){var e=Object(s.b)(),t=Object(s.c)(Z),n=Object(s.c)(J);return Object(r.useEffect)((function(){e(R())}),[e]),Object(k.jsx)("ul",{children:n&&_(n,t).map((function(t){var n=t.id,r=t.name,c=t.number;return Object(k.jsxs)(H,{children:[Object(k.jsx)(Y.a,{size:18}),r,":",Object(k.jsx)(X,{children:c}),Object(k.jsxs)(K,{type:"button",onClick:function(){return e(E(n))},children:[Object(k.jsx)(Q,{children:"Delete"}),Object(k.jsx)(F.a,{size:16})]})]},n)}))})};var te=Object(L.a)("div",{target:"e19klnp81"})({name:"1pybp31",styles:"width:500px;margin:0 auto"}),ne=Object(L.a)("h2",{target:"e19klnp80"})({name:"pbf5bt",styles:"margin-bottom:20px;text-align:center;color:#2d2b2b"}),re=function(e){var t=e.title,n=e.children;return Object(k.jsxs)(te,{children:[Object(k.jsx)(ne,{children:t}),n]})};var ce=function(){return Object(k.jsxs)("div",{children:[Object(k.jsx)(re,{title:"Phonebook",children:Object(k.jsx)(P,{})}),Object(k.jsxs)(re,{title:"Contacts",children:[Object(k.jsx)(G,{}),Object(k.jsx)(ee,{})]})]})};var ae=function(){return Object(k.jsx)("div",{})},oe={form:{width:320},label:{display:"flex",flexDirection:"column",marginBottom:15}};var se=function(){var e=Object(s.b)(),t=Object(r.useState)(""),n=Object(S.a)(t,2),c=n[0],a=n[1],o=Object(r.useState)(""),i=Object(S.a)(o,2),u=i[0],l=i[1],b=function(e){var t=e.target,n=t.name,r=t.value;switch(n){case"email":return a(r);case"password":return l(r);default:return}};return Object(k.jsx)("div",{children:Object(k.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(h({email:c,password:u})),a(""),l("")},style:oe.form,autoComplete:"off",children:[Object(k.jsxs)("label",{style:oe.label,children:["\u041f\u043e\u0447\u0442\u0430",Object(k.jsx)("input",{type:"email",name:"email",value:c,onChange:b})]}),Object(k.jsxs)("label",{style:oe.label,children:["\u041f\u0430\u0440\u043e\u043b\u044c",Object(k.jsx)("input",{type:"password",name:"password",value:u,onChange:b})]}),Object(k.jsx)("button",{type:"submit",children:"\u0412\u043e\u0439\u0442\u0438"})]})})},ie={form:{width:320},label:{display:"flex",flexDirection:"column",marginBottom:15}};var ue=function(){var e=Object(s.b)(),t=Object(r.useState)(""),n=Object(S.a)(t,2),c=n[0],a=n[1],o=Object(r.useState)(""),i=Object(S.a)(o,2),u=i[0],l=i[1],b=Object(r.useState)(""),j=Object(S.a)(b,2),d=j[0],p=j[1],O=function(e){var t=e.target,n=t.name,r=t.value;switch(n){case"name":return a(r);case"email":return l(r);case"password":return p(r);default:return}};return Object(k.jsx)("div",{children:Object(k.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(m({name:c,email:u,password:d})),a(""),l(""),p("")},style:ie.form,autoComplete:"off",children:[Object(k.jsxs)("label",{style:ie.label,children:["\u0418\u043c\u044f",Object(k.jsx)("input",{type:"text",name:"name",value:c,onChange:O})]}),Object(k.jsxs)("label",{style:ie.label,children:["\u041f\u043e\u0447\u0442\u0430",Object(k.jsx)("input",{type:"email",name:"email",value:u,onChange:O})]}),Object(k.jsxs)("label",{style:ie.label,children:["\u041f\u0430\u0440\u043e\u043b\u044c",Object(k.jsx)("input",{type:"password",name:"password",value:d,onChange:O})]}),Object(k.jsx)("button",{type:"submit",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})]})})},le=n(8),be=n(34),je=["component","redirectTo"];function de(e){var t=e.component,n=e.redirectTo,r=Object(be.a)(e,je),c=Object(s.c)(u);return Object(k.jsx)(z.b,Object(le.a)(Object(le.a)({},r),{},{render:function(e){return c?Object(k.jsx)(t,Object(le.a)({},e)):Object(k.jsx)(z.a,{to:n})}}))}var pe=["component","redirectTo"];function Oe(e){var t=e.component,n=e.redirectTo,r=Object(be.a)(e,pe),c=Object(s.c)(u);return Object(k.jsx)(z.b,Object(le.a)(Object(le.a)({},r),{},{render:function(e){return c&&r.restricted?Object(k.jsx)(z.a,{to:n}):Object(k.jsx)(t,Object(le.a)({},e))}}))}var fe,xe,me=function(){var e=Object(s.b)();return Object(r.useEffect)((function(){e(v())}),[e]),Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(C,{}),Object(k.jsxs)(z.d,{children:[Object(k.jsx)(Oe,{path:"/",exact:!0,component:ae}),Object(k.jsx)(de,{path:"/contacts",redirectTo:"/login",component:ce}),Object(k.jsx)(Oe,{restricted:!0,path:"/login",redirectTo:"/contacts",component:se}),Object(k.jsx)(Oe,{redirectTo:"/contacts",restricted:!0,path:"/register",exact:!0,component:ue})]})]})},he=n(33),ge=n(48),ve=n.n(ge),ye=n(15),ke=n(14),we=Object(d.d)([],(fe={},Object(ye.a)(fe,R.fulfilled,(function(e,t){return t.payload})),Object(ye.a)(fe,U.fulfilled,(function(e,t){var n=t.payload;return[].concat(Object(he.a)(e),[n])})),Object(ye.a)(fe,E.fulfilled,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),fe)),Ce=Object(d.d)("",Object(ye.a)({},$,(function(e,t){return t.payload}))),ze=Object(ke.b)({contacts:we,filter:Ce}),Se=n(26),Le=n(49),Te=n.n(Le),Ae=Object(d.e)({name:"auth",initialState:{user:{name:null,email:null},token:null,isLoggedIn:!1,isFetchingCurrentUser:!1},extraReducers:(xe={},Object(ye.a)(xe,m.fulfilled,(function(e,t){var n=t.payload;return Object(le.a)(Object(le.a)({},e),{},{isLoggedIn:!0,user:n.user,token:n.token})})),Object(ye.a)(xe,h.fulfilled,(function(e,t){var n=t.payload;return Object(le.a)(Object(le.a)({},e),{},{isLoggedIn:!0,user:n.user,token:n.token})})),Object(ye.a)(xe,g.fulfilled,(function(e){return Object(le.a)(Object(le.a)({},e),{},{isLoggedIn:!1,user:{name:null,email:null},token:null})})),Object(ye.a)(xe,v.fulfilled,(function(e,t){var n=t.payload;return Object(le.a)(Object(le.a)({},e),{},{user:n.user,isLoggedIn:!0,isFetchingCurrentUser:!1})})),Object(ye.a)(xe,v.pending,(function(e){return Object(le.a)(Object(le.a)({},e),{},{isFetchingCurrentUser:!0})})),Object(ye.a)(xe,v.rejected,(function(e){return Object(le.a)(Object(le.a)({},e),{},{isFetchingCurrentUser:!1})})),xe)}).reducer,Ie=[].concat(Object(he.a)(Object(d.f)({serializableCheck:{ignoredActions:[Se.a,Se.f,Se.b,Se.c,Se.d,Se.e]}})),[ve.a]),qe={key:"token",storage:Te.a,whitelist:["token"]},De=Object(d.a)({reducer:{auth:Object(Se.g)(qe,Ae),phonebook:ze},middleware:Ie,devTools:!1}),Be={store:De,persistor:Object(Se.h)(De)},Fe=n(50);o.a.render(Object(k.jsx)(c.a.StrictMode,{children:Object(k.jsx)(s.a,{store:Be.store,children:Object(k.jsx)(Fe.a,{loading:null,persistor:Be.persistor,children:Object(k.jsx)(i.a,{children:Object(k.jsx)(me,{})})})})}),document.getElementById("root"))}},[[84,1,2]]]);
//# sourceMappingURL=main.1b1d2f6f.chunk.js.map