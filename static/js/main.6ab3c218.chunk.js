(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{15:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),r=n(7),o=n.n(r),i=n(9),s=n(2),l=n(3),u=n(5),b=n(4),j=function(e){var t=e.name,n=e.number,c=(e.completed,e.onRemove);e.onUpdate;return Object(a.jsxs)("li",{children:[Object(a.jsx)("p",{children:t}),Object(a.jsx)("p",{children:n}),Object(a.jsx)("section",{children:Object(a.jsx)("button",{type:"button",onClick:c,children:"Delete"})})]})},d=function(e){var t=e.contacts,n=e.onRemoveContact;e.onUpdateContact;return Object(a.jsx)("ul",{children:t.map((function(e){var t=e.id,c=e.name,r=e.number,o=e.completed;return Object(a.jsx)(j,{name:c,number:r,completed:o,onRemove:function(){return n(t)}},t)}))})},h=n(8),m=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={name:"",number:""},e.handleChange=function(t){var n=t.target,a=n.name,c=n.value;e.setState(Object(h.a)({},a,c))},e.handleSubmit=function(t){t.preventDefault(),e.props.onAddContact(e.state.name,e.state.number),e.setState({name:"",number:""})},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number;return Object(a.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(a.jsxs)("label",{children:["Name",Object(a.jsx)("br",{}),Object(a.jsx)("input",{type:"text",value:t,placeholder:"Enter a name...",onChange:this.handleChange,name:"name"})]}),Object(a.jsx)("br",{}),Object(a.jsxs)("label",{children:["Number",Object(a.jsx)("br",{}),Object(a.jsx)("input",{type:"tel",value:n,placeholder:"Enter a number...",onChange:this.handleChange,name:"number"})]}),Object(a.jsx)("button",{type:"submit",children:"Add Contact"})]})}}]),n}(c.Component),p=n(17);function O(e){var t=e.value,n=e.onChangeFilter;return Object(a.jsx)("div",{children:Object(a.jsx)("input",{type:"text",value:t,placeholder:"Search...",onChange:function(e){return n(e.target.value)}})})}var f=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},e.addContact=function(t,n){var a={id:Object(p.a)(),name:t,number:n};e.state.contacts.map((function(e){return e.name})).includes(t)?alert("".concat(t," is already in contacts")):0===t.length?alert("Fields must be filled!"):e.setState((function(e){return{contacts:[].concat(Object(i.a)(e.contacts),[a])}}))},e.removeContact=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e.changeFilter=function(t){e.setState({filter:t}),console.log(t)},e.getVisibleContacts=function(){var t=e.state,n=t.contacts,a=t.filter;return n.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())}))},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state.filter,t=this.getVisibleContacts();return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Phone Book"}),Object(a.jsx)(m,{onAddContact:this.addContact}),t.length>1&&Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h2",{children:"Contacts"}),Object(a.jsx)(O,{value:e,onChangeFilter:this.changeFilter})]}),t.length>0&&Object(a.jsx)(d,{contacts:t,onRemoveContact:this.removeContact})]})}}]),n}(c.Component);o.a.render(Object(a.jsx)(f,{}),document.querySelector("#root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.6ab3c218.chunk.js.map