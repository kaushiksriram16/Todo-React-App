(this["webpackJsonpreact-proj"]=this["webpackJsonpreact-proj"]||[]).push([[0],{17:function(e,t,a){},18:function(e,t,a){},21:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(1),o=a.n(c),l=a(10),s=a.n(l),r=(a(17),a(2)),i=a(11),d=(a(18),a(6)),j=a.n(d),b=(a(9),function(e){var t=Object(c.useState)(""),a=Object(r.a)(t,2),o=a[0],l=a[1],s=Object(c.useState)(""),i=Object(r.a)(s,2),d=i[0],b=i[1],u=Object(c.useState)(""),h=Object(r.a)(u,2),m=h[0],x=h[1];return Object(n.jsxs)("div",{className:"container my-3",children:[Object(n.jsx)("h3",{className:"heading",children:"Add a Todo"}),Object(n.jsxs)("form",{onSubmit:function(t){t.preventDefault(),o&&d?(e.addTodo(o,d,m,(new Date).toLocaleString()),j()({title:"Yayy!",text:"Todo added Successfully",icon:"success"}),l(""),b("")):j()({title:"All fields required",text:"Title or Description cannot be blank!",icon:"error"})},children:[Object(n.jsxs)("div",{className:"mb-3",children:[Object(n.jsx)("label",{htmlFor:"title",children:"Todo Title"}),Object(n.jsx)("input",{type:"text",value:o,onChange:function(e){return l(e.target.value)},className:"form-control",id:"title","aria-describedby":"emailHelp"})]}),Object(n.jsxs)("div",{className:"mb-3",children:[Object(n.jsx)("label",{htmlFor:"description",children:"Description"}),Object(n.jsx)("input",{type:"text",value:d,onChange:function(e){return b(e.target.value)},className:"form-control",id:"description"})]}),Object(n.jsxs)("div",{className:"mb-3",children:[Object(n.jsx)("label",{htmlFor:"severity",children:"Severity of the task"}),Object(n.jsxs)("select",{className:"form-control",name:"severity",onChange:function(e){return x(e.target.value)},children:[Object(n.jsx)("option",{selected:!0,disabled:!0,children:"Please select"}),Object(n.jsx)("option",{value:"Critical",children:"Critical"}),Object(n.jsx)("option",{value:"Moderate",children:"Moderate"}),Object(n.jsx)("option",{value:"Normal",children:"Normal"})]})]}),Object(n.jsx)("button",{type:"submit",className:"btn btn-sm btn-success",children:"Submit"})]}),Object(n.jsx)("br",{}),Object(n.jsx)("hr",{})]})}),u=function(){return Object(n.jsx)("div",{className:"bg-dark text-light py-3",children:Object(n.jsx)("p",{className:"text-center",children:"Copyright \xa9 MyTodo.com"})})},h=function(e){return Object(n.jsx)("div",{children:Object(n.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:[Object(n.jsx)("a",{className:"navbar-brand",href:"#",children:e.title}),Object(n.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(n.jsx)("span",{className:"navbar-toggler-icon"})}),Object(n.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(n.jsx)("ul",{className:"navbar-nav mr-auto",children:Object(n.jsx)("li",{className:"nav-item active",children:Object(n.jsx)("a",{className:"nav-link",href:"#",children:"Home"})})})})]})})},m=function(e){var t=e.todo,a=e.onDelete,o=Object(c.useState)(!1),l=Object(r.a)(o,2),s=l[0],i=l[1];return Object(n.jsxs)("div",{className:t.alertColor,style:{overflowWrap:"wrap",padding:"20px",color:"black",borderRadius:"9px",boxShadow:"5px 5px 8px #888888",margin:"25px",width:"25%"},children:[Object(n.jsx)("h4",{id:"title",className:s?"checked":"unchecked",children:Object(n.jsx)("b",{children:t.title})}),Object(n.jsx)("input",{type:"checkbox",id:"done",className:"done",onChange:function(){i(!s)}}),Object(n.jsx)("small",{children:Object(n.jsxs)("p",{children:["Added on ",t.date]})}),Object(n.jsx)("p",{className:s?"checked":"unchecked",children:t.desc}),Object(n.jsx)("button",{className:"btn btn-danger btn-sm",onClick:function(){a(t)},children:"Delete"})]})},x=function(e){return Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("h3",{className:"heading",children:"Todo List"}),Object(n.jsx)("div",{style:{minHeight:"70vh",display:"flex",width:"100%",flexWrap:"wrap",justifyContent:"center",alignItems:"center"},children:0===e.todos.length?Object(n.jsx)("p",{className:"alert alert-info w-100",children:"No Todos to Display"}):e.todos.map((function(t){return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(m,{todo:t,onDelete:e.onDelete,alertColor:t.alertColor},t.sno)})}))})]})};var O=function(){var e;e=null===localStorage.getItem("todos")?[]:JSON.parse(localStorage.getItem("todos"));var t=Object(c.useState)(e),a=Object(r.a)(t,2),o=a[0],l=a[1];return Object(c.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(o))}),[o]),Object(n.jsxs)("div",{children:[Object(n.jsx)(h,{title:"My Todo"}),Object(n.jsx)(b,{addTodo:function(e,t,a,n){var c;c=0===o.length?0:o[o.length-1].sno+1,console.log(a);var s={sno:c,title:e,desc:t,date:n,alertColor:"Critical"===a?"alert animate-bottom alert-danger":"Moderate"===a?"alert animate-bottom alert-info":"alert animate-bottom alert-success"};l([].concat(Object(i.a)(o),[s]))}}),Object(n.jsx)(x,{todos:o,onDelete:function(e){console.log("i am onDelete of todo : ",e),l(o.filter((function(t){return t!==e})))}}),Object(n.jsx)(u,{})]})},p=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,22)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,o=t.getLCP,l=t.getTTFB;a(e),n(e),c(e),o(e),l(e)}))};s.a.render(Object(n.jsx)(o.a.StrictMode,{children:Object(n.jsx)(O,{})}),document.getElementById("root")),p()},9:function(e,t,a){}},[[21,1,2]]]);
//# sourceMappingURL=main.a263d2d0.chunk.js.map