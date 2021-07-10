(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{19:function(t,e,n){},24:function(t,e,n){"use strict";n.r(e);var a,r,c=n(1),o=n.n(c),i=n(10),s=n.n(i),l=(n(19),n(12)),u=n(4),d=n(5),b=n(6),m=n(8),h=n(7),f=n(13),j=n(2),p=n(3),g=p.a.form(a||(a=Object(j.a)(["\n  display: grid;\n  grid-template-columns: min-content;\n\n  & button {\n    margin: 10px 0;\n    background-color: #e6ffe0d5;\n    border: 1px solid #000;\n    border-radius: 4px;\n    &:hover,\n    :focus {\n      background-color: #bffab0d3;\n      transform: scale(1.1);\n    }\n  }\n"]))),O=n(0),x=function(t){Object(m.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={name:"",number:""},t.handleChangeForm=function(e){var n=e.currentTarget,a=n.name,r=n.value;t.setState(Object(u.a)({},a,r))},t.handleSubmitForm=function(e){e.preventDefault();var n=t.state,a=n.name,r=n.number;t.props.onSubmit(a,r),t.resetForm()},t.resetForm=function(){t.setState({name:"",number:""})},t}return Object(b.a)(n,[{key:"render",value:function(){return Object(O.jsx)("div",{children:Object(O.jsxs)(g,{onSubmit:this.handleSubmitForm,children:[Object(O.jsxs)("label",{children:["Name",Object(O.jsx)("input",{type:"text",name:"name",onChange:this.handleChangeForm,value:this.state.name,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,autoComplete:"off"})]}),Object(O.jsxs)("label",{children:["Number",Object(O.jsx)("input",{type:"tel",name:"number",onChange:this.handleChangeForm,value:this.state.number,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,autoComplete:"off"})]}),Object(O.jsx)("button",{type:"submit",children:"Add contact"})]})})}}]),n}(c.Component),v=p.a.ul(r||(r=Object(j.a)(["\n  padding: 5px;\n  margin: 10px 0;\n\n  & li {\n    margin: 5px 0;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n\n    & button {\n      margin-left: 10px;\n      background-color: #f0c8c8;\n      border: 1px solid #000;\n      border-radius: 4px;\n      &:hover,\n    :focus {\n      background-color: #f09797;\n      transform: scale(1.05);\n    }\n    }\n  }\n"])));var C,y=function(t){var e=t.contactsData,n=t.onDeleteContact;return Object(O.jsx)(v,{children:e.map((function(t){return Object(O.jsxs)("li",{children:[t.name,": ",t.number,Object(O.jsx)("button",{type:"button",onClick:function(){return n(t.id)},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]},t.id)}))})},S=p.a.div(C||(C=Object(j.a)(["\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n\n  & p {\n    margin: 5px 0;\n  }\n"])));var k=function(t){var e=t.onChange,n=t.filter;return Object(O.jsxs)(S,{children:[Object(O.jsx)("p",{children:"Find contacts by name"}),Object(O.jsx)("input",{type:"text",name:"filter",onChange:e,value:n,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,autoComplete:"off"})]})},A=function(t){Object(m.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={contacts:[],filter:""},t.handleChange=function(e){var n=e.currentTarget,a=n.name,r=n.value;t.setState(Object(u.a)({},a,r))},t.handleSubmit=function(e,n){var a=t.state.contacts,r=Object(f.a)();a.find((function(t){return t.name.includes(e)}))?alert("".concat(e," is already in contacts")):t.setState({contacts:[].concat(Object(l.a)(a),[{id:r,name:e,number:n}])})},t.getVisibleContacts=function(){var e=t.state,n=e.filter,a=e.contacts,r=n.toLowerCase();return a.filter((function(t){return t.name.toLowerCase().includes(r)}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(b.a)(n,[{key:"componentDidUpdate",value:function(t,e){e.contacts!==this.state.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"render",value:function(){var t=this.state.filter,e=this.getVisibleContacts();return Object(O.jsxs)("div",{id:"container",children:[Object(O.jsx)("h1",{children:"Phonebook"}),Object(O.jsx)(x,{onSubmit:this.handleSubmit}),Object(O.jsx)("h2",{children:"Contacts"}),Object(O.jsx)(k,{filter:t,onChange:this.handleChange}),Object(O.jsx)(y,{contactsData:e,onDeleteContact:this.deleteContact})]})}}]),n}(c.Component);s.a.render(Object(O.jsx)(o.a.StrictMode,{children:Object(O.jsx)(A,{})}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.d0988bc9.chunk.js.map