(window["webpackJsonpreact-form-with-formik-validation"]=window["webpackJsonpreact-form-with-formik-validation"]||[]).push([[0],{123:function(e,a,t){e.exports=t(293)},128:function(e,a,t){},293:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(117),m=t.n(r),i=(t(128),t(1)),c=t(2),o=t(44),s=function(){return l.a.createElement("div",{style:{margin:"3rem 0",borderRadius:4,background:"#f6f8fa",boxShadow:"0 0 1px  #eee inset"}},l.a.createElement("div",{style:{textTransform:"uppercase",fontSize:11,borderTopLeftRadius:4,borderTopRightRadius:4,fontWeight:500,padding:".5rem",background:"#555",color:"#fff",letterSpacing:"1px"}},"Formik State"),l.a.createElement(i.g,null,(function(e){e.validationSchema,e.validate,e.onSubmit;var a=Object(o.a)(e,["validationSchema","validate","onSubmit"]);return l.a.createElement("pre",{style:{fontSize:".65rem",padding:".25rem .5rem",overflowX:"scroll"}},JSON.stringify(a,null,2))})))};function u(){return l.a.createElement("hr",null)}var d={friends:[{name:"",email:""}]},E=function(e){var a=e.errors;return"string"===typeof a.friends?l.a.createElement("div",{className:"text-danger small"},a.friends):null};c.addMethod(c.array,"unique",(function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(e){return e};return this.test("unique",e,(function(e){return e.length===new Set(e.map(a)).size}))}));var p=c.object().shape({friends:c.array().of(c.object().shape({name:c.string().min(4,"too short").required("Name Required"),email:c.string().email("Invalid email address").required("Email Required")})).unique("duplicate email",(function(e){return e.email})).required("Must have friends").min(3,"Minimum of 3 friends")}),f=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",{className:"text-center mb-3"},"Arrays Dyanmic Field object"),l.a.createElement(i.f,{initialValues:d,validationSchema:p,onSubmit:function(e){setTimeout((function(){alert(JSON.stringify(e,null,2))}),500)},render:function(e){var a=e.values,t=e.errors;e.touched,e.isSubmitting;return l.a.createElement(i.e,null,l.a.createElement(i.d,{name:"friends",render:function(e){e.insert;var t=e.remove,n=e.push;return l.a.createElement("div",null,a.friends.length>0&&a.friends.map((function(e,n){return l.a.createElement("div",{className:"d-flex align-items-center",key:n},l.a.createElement("div",{className:"col"},l.a.createElement("label",{htmlFor:"friends.".concat(n,".name")},"Name"),l.a.createElement(i.c,{name:"friends.".concat(n,".name"),placeholder:"Jane Doe",type:"text",className:"form-control"}),l.a.createElement(i.a,{name:"friends.".concat(n,".name"),component:"div",className:"text-danger small"})),l.a.createElement("div",{className:"col"},l.a.createElement("label",{htmlFor:"friends.".concat(n,".email")},"Email"),l.a.createElement(i.c,{name:"friends.".concat(n,".email"),placeholder:"jane@acme.com",type:"email",className:"form-control"}),l.a.createElement(i.a,{name:"friends.".concat(n,".email"),component:"div",className:"text-danger small"})),l.a.createElement("div",{className:"col"},l.a.createElement("button",{type:"button",className:"btn btn-danger",onClick:function(){if(a.friends.length>1)return t(n)}},"X")))})),l.a.createElement("button",{type:"button",className:"btn btn-warning btn-sm mt-2",onClick:function(){return n({name:"",email:""})}},"Add Friend"))}}),l.a.createElement("button",{type:"submit",className:"btn btn-primary mt-2"},"Invite"),l.a.createElement(E,{errors:t}),l.a.createElement(s,null))}}),l.a.createElement(u,null))},b=t(9),h=t.n(b),v=t(23),N=function(e){return new Promise((function(a){return setTimeout(a,e)}))},g=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",null,"AsyncSubmit Sign Up"),l.a.createElement(i.f,{initialValues:{firstName:"",lastName:"",email:""},onSubmit:function(){var e=Object(v.a)(h.a.mark((function e(a){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N(1e3);case 2:alert(JSON.stringify(a,null,2));case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()},(function(e){var a=e.isSubmitting;return l.a.createElement(i.e,null,l.a.createElement("label",{htmlFor:"firstName"},"First Name"),l.a.createElement(i.c,{className:"form-control",name:"firstName",placeholder:"Jane"}),l.a.createElement("label",{htmlFor:"lastName"},"Last Name"),l.a.createElement(i.c,{className:"form-control",name:"lastName",placeholder:"Doe"}),l.a.createElement("label",{htmlFor:"email"},"Email"),l.a.createElement(i.c,{className:"form-control",name:"email",placeholder:"jane@acme.com",type:"email"}),l.a.createElement("button",{className:"btn btn-primary mt-2",type:"submit",disabled:a},"Submit"),l.a.createElement(s,null))})),l.a.createElement(u,null))},y=function(e){return new Promise((function(a){return setTimeout(a,e)}))},S=function(e){return y(300).then((function(a){console.log(a);var t={};if(["admin","null","god"].includes(e.username)&&(t.username="Nice try"),e.username||(t.username="Required"),Object.keys(t).length)throw t}))},F=function(e,a){var t=a.setSubmitting,n=a.resetForm;console.log("handleOnSubmit"),console.log({values:e}),y(500).then((function(){alert(JSON.stringify(e,null,2)),n(),t(!1)}))},x={username:""},w=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",null,"AsyncValidation Pick a username"),l.a.createElement(i.f,{initialValues:x,validate:S,onSubmit:F,render:function(e){var a=e.isSubmitting,t=e.handleReset;e.errors,e.touched;return l.a.createElement(i.e,null,l.a.createElement("label",{htmlFor:"username"},"Username"),l.a.createElement(i.c,{className:"form-control",name:"username",type:"text"}),l.a.createElement(i.a,{className:"text-danger small",component:"div",name:"username"}),l.a.createElement("button",{className:"btn btn-primary m-2",type:"submit",disabled:a},"Submit"),l.a.createElement("button",{type:"reset",className:"btn btn-warning m-2",disabled:a,onClick:t},"Reset"),l.a.createElement(s,null))}}),l.a.createElement(u,null))},k={firstName:"",lastName:"",email:"a"},q=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",null,"Basic Sign Up"),l.a.createElement(i.f,{initialValues:k,onSubmit:function(e){setTimeout((function(){alert(JSON.stringify(e,null,2))}),500)},render:function(){return l.a.createElement(i.e,null,l.a.createElement("label",{htmlFor:"firstName"},"First Name"),l.a.createElement(i.c,{className:"form-control",name:"firstName",placeholder:"Jane"}),l.a.createElement("label",{htmlFor:"lastName"},"Last Name"),l.a.createElement(i.c,{className:"form-control",name:"lastName",placeholder:"Doe"}),l.a.createElement("label",{htmlFor:"email"},"Email"),l.a.createElement(i.c,{className:"form-control",name:"email",placeholder:"jane@acme.com",type:"email"}),l.a.createElement("button",{className:"btn btn-primary mt-2",type:"submit"},"Submit"),l.a.createElement(s,null))}}),l.a.createElement(u,null))},j=function(e){return new Promise((function(a){return setTimeout(a,e)}))},O=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",null,"Checkboxes"),l.a.createElement("p",null,"This example demonstrates how to properly create checkboxes with Formik."),l.a.createElement(i.f,{initialValues:{isAwesome:!1,terms:!1,newsletter:!1,jobType:["founder"],location:[]},onSubmit:function(){var e=Object(v.a)(h.a.mark((function e(a){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j(1e3);case 2:alert(JSON.stringify(a,null,2));case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()},(function(e){var a=e.isSubmitting,t=(e.getFieldProps,e.handleChange),n=e.handleBlur,r=e.values;return l.a.createElement(i.e,null,l.a.createElement("div",{className:"label"},"Basic Info"),l.a.createElement("label",null,l.a.createElement(i.c,{className:"form-control",type:"checkbox",name:"isAwesome"}),"Are you awesome?"),l.a.createElement("div",{className:"label"},"What best describes you? (check all that apply)"),l.a.createElement("label",null,l.a.createElement(i.c,{className:"form-control",type:"checkbox",name:"jobType",value:"designer"}),"Designer |"),l.a.createElement("label",null,l.a.createElement(i.c,{className:"form-control",type:"checkbox",name:"jobType",value:"developer"}),"Developer |"),l.a.createElement("label",null,l.a.createElement(i.c,{className:"form-control",type:"checkbox",name:"jobType",value:"product"}),"Product Manager |"),l.a.createElement("label",null,l.a.createElement("input",{type:"checkbox",className:"form-control",name:"jobType",value:"founder",onChange:t,onBlur:n}),"CEO / Founder"),l.a.createElement("label",{htmlFor:"location"},"Where do you work?"),l.a.createElement(i.c,{component:"select",id:"location",name:"location",className:"form-control"},l.a.createElement("option",{value:"NY"},"New York"),l.a.createElement("option",{value:"SF"},"San Francisco"),l.a.createElement("option",{value:"CH"},"Chicago"),l.a.createElement("option",{value:"OTHER"},"Other")),l.a.createElement("label",null,l.a.createElement(i.c,{type:"checkbox",name:"terms"}),"I accept the terms and conditions."),r.terms?l.a.createElement("div",null,l.a.createElement("label",null,l.a.createElement(i.c,{type:"checkbox",name:"newsletter"}),"Send me the newsletter"," ",l.a.createElement("em",{style:{color:"rebeccapurple"}},"(This is only shown if terms = true)"))):null,l.a.createElement("div",null,l.a.createElement("button",{className:"btn btn-primary mt-2",type:"submit",disabled:a},"Submit")),l.a.createElement(s,null))})),l.a.createElement(u,null))},T=c.object().shape({email:c.string().required("This field is required")}),C=function(e){return new Promise((function(a){return setTimeout(a,e)}))},R=function(e){return console.log({values:e})};C(300).then((function(){throw{zip:"This field is required"}}));var V=function(e){return function(a){return a?void 0:e}},J=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",null,"CombinedValidations Pick a username"),l.a.createElement(i.f,{validationSchema:T,validate:R,initialValues:{username:"",email:"",zip:""},onSubmit:function(e){C(500).then((function(){alert(JSON.stringify(e,null,2))}))},render:function(e){e.errors,e.touched,e.setFieldValue,e.setFieldTouched,e.validateField,e.validateForm;return l.a.createElement(i.e,null,l.a.createElement("label",{htmlFor:"username"},"Username"),l.a.createElement("div",null,l.a.createElement(i.c,{className:"form-control",name:"username",validate:V("This field is required"),type:"text",placeholder:"username"}),l.a.createElement(i.a,{className:"text-danger small",component:"div",name:"username"})),l.a.createElement("br",null),l.a.createElement("div",null,l.a.createElement(i.c,{className:"form-control",name:"email",validate:V("This field is required"),type:"text",placeholder:"email"}),l.a.createElement(i.a,{className:"text-danger small",component:"div",name:"email"})),l.a.createElement("br",null),l.a.createElement("div",null,l.a.createElement(i.c,{className:"form-control",name:"zip",validate:V("This field is required"),type:"text",placeholder:"zip"}),l.a.createElement(i.a,{className:"text-danger small",component:"div",name:"zip"})),l.a.createElement("br",null),l.a.createElement("button",{className:"btn btn-primary m-2",type:"submit"},"Submit"),l.a.createElement(s,null))}}),l.a.createElement(u,null))},I=function(e){var a=e.name,t=e.label,n=Object(o.a)(e,["name","label"]);return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:a},t),l.a.createElement(i.c,Object.assign({id:a,name:a},n)),l.a.createElement(i.a,{name:a,className:"text-danger small",component:"div"})))},A={email:"vigneshwaran@chandrasekaran.com",color:"red",animal:"",website:"https://github.com/vigneshwaran-chandrasekaran"},P=c.object().shape({email:c.string().email("Invalid email address").required("Required"),color:c.string().required("Required"),website:c.string().url("Invalid URL").required("Required"),animal:c.string().required("Required")});var M=[{id:1,value:"Tiger"},{id:2,value:"Lion"},{id:3,value:"Dog"},{id:4,value:"Cat"}];function B(e){return e.options.map((function(e){return l.a.createElement("option",{key:e.id,value:e.value},e.value)}))}var z=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",{className:"text-center mb-3"},"Grouping fields, dynamic select options"),l.a.createElement(i.f,{initialValues:A,validationSchema:P,onSubmit:function(e){return function(e){setTimeout((function(){alert(JSON.stringify(e,null,2))}),500)}(e)},render:function(e){var a=e.isSubmitting,t=e.handleReset;return l.a.createElement(i.e,null,l.a.createElement(I,{name:"email",type:"email",label:"Email",placeholder:"jane@acme.com",className:"form-control"}),l.a.createElement(I,{name:"color",className:"form-control",label:"Favorite Color",component:"select"},l.a.createElement("option",{value:""},"Select a Color"),l.a.createElement("option",{value:"red"},"Red"),l.a.createElement("option",{value:"green"},"Green"),l.a.createElement("option",{value:"blue"},"Blue")),l.a.createElement(I,{name:"website",type:"url",label:"Website",placeholder:"https://example.com",className:"form-control"}),l.a.createElement(I,{name:"animal",className:"form-control",component:"select",label:"Favorite Animal"},l.a.createElement("option",{value:""},"Select an animal"),l.a.createElement("option",{value:"tiger"},"Tiger"),l.a.createElement("option",{value:"bear"},"Bear"),l.a.createElement("option",{value:"shark"},"Shark"),l.a.createElement(B,{options:M})),l.a.createElement("button",{type:"reset",className:"btn btn-warning m-2",disabled:a,onClick:t},"Reset"),l.a.createElement("button",{type:"submit",className:"btn btn-primary m-2"},"Submit"),l.a.createElement(s,null))}}),l.a.createElement(u,null))},L=c.object().shape({email:c.string().email("Invalid email address").required("Required"),firstName:c.string().min(2,"Must be longer than 2 characters").max(20,"Nice try, nobody has a first name that long").required("Required"),lastName:c.string().min(5,"Must be longer than 5 characters").max(10,"Nice try, nobody has a last name that long").required("Required")}),D=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",null,"(ErrorMessage) Sign up"),l.a.createElement(i.f,{initialValues:{email:"",firstName:"",lastName:""},validationSchema:L,onSubmit:function(e){setTimeout((function(){alert(JSON.stringify(e,null,2))}),500)},render:function(e){e.errors,e.touched;return l.a.createElement(i.e,null,l.a.createElement("label",{htmlFor:"firstName"},"First Name"),l.a.createElement(i.c,{className:"form-control",name:"firstName",placeholder:"Jane",type:"text"}),l.a.createElement(i.a,{name:"firstName",component:"div",className:"text-danger small"}),l.a.createElement("label",{htmlFor:"lastName"},"Last Name"),l.a.createElement(i.c,{className:"form-control",name:"lastName",placeholder:"Doe",type:"text"}),l.a.createElement(i.a,{name:"lastName"},(function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"text-danger small"},e),l.a.createElement("div",{className:"text-success small"},"Always shows"))})),l.a.createElement("label",{htmlFor:"email"},"Email"),l.a.createElement(i.c,{className:"form-control",name:"email",placeholder:"jane@acme.com",type:"email"}),l.a.createElement(i.a,{name:"email",className:"text-danger small"}),l.a.createElement("button",{className:"btn btn-primary m-2",type:"submit"},"Submit"),l.a.createElement(s,null))}}),l.a.createElement(u,null))},W=t(24),U=t(25),Z=t(27),G=t(26),$=t(28),H=function(e){function a(){var e,t;Object(W.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(Z.a)(this,(e=Object(G.a)(a)).call.apply(e,[this].concat(l)))).renders=0,t}return Object($.a)(a,e),Object(U.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("input",this.props),l.a.createElement("p",null,"# of renders: ",this.renders++))}}]),a}(l.a.Component),X=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",null,"(FastField) Sign Up"),l.a.createElement(i.f,{initialValues:{firstName:"",lastName:"",email:"",field:""},onSubmit:function(e,a){var t=a.setSubmitting;setTimeout((function(){t(!1),alert(JSON.stringify(e,null,2))}),500)},render:function(e){var a=e.isSubmitting;return l.a.createElement(i.e,null,l.a.createElement("label",{htmlFor:"firstName"},"First Name"),l.a.createElement(i.b,{className:"form-control",name:"firstName",placeholder:"Jane",component:H,disabled:a}),l.a.createElement("label",{htmlFor:"lastName"},"Last Name"),l.a.createElement(i.b,{className:"form-control",name:"lastName",placeholder:"Doe",component:H,disabled:a}),l.a.createElement("label",{htmlFor:"email"},"Email"),l.a.createElement(i.b,{className:"form-control",name:"email",placeholder:"jane@acme.com",type:"email",component:H,disabled:a}),l.a.createElement("label",{htmlFor:"field"},"First Name"),l.a.createElement(i.c,{className:"form-control",name:"field",placeholder:"field",type:"text",disabled:a}),l.a.createElement("button",{className:"btn btn-primary m-2",type:"submit"},"Submit"),l.a.createElement(s,null))}}),l.a.createElement(u,null))},Y=function(e){function a(){var e,t;Object(W.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(Z.a)(this,(e=Object(G.a)(a)).call.apply(e,[this].concat(l)))).renders=0,t}return Object($.a)(a,e),Object(U.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("input",this.props),l.a.createElement("p",null,"# of renders: ",this.renders++))}}]),a}(l.a.Component),_=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",null,"(FastFieldWebExample) Sign Up"),l.a.createElement(i.f,{initialValues:{firstName:"",lastName:"",email:""},validationSchema:c.object().shape({firstName:c.string().required(),middleInitial:c.string(),lastName:c.string().required(),email:c.string().email().required()}),onSubmit:function(e){setTimeout((function(){alert(JSON.stringify(e,null,2))}),500)},render:function(e){var a=e.errors,t=e.touched;e.form;return l.a.createElement(i.e,null,l.a.createElement("label",{htmlFor:"firstName"},"First Name"),l.a.createElement(i.b,{className:"form-control",name:"firstName",placeholder:"Weezy",component:Y}),t.firstName&&a.firstName&&l.a.createElement("div",null,a.firstName),l.a.createElement("label",{htmlFor:"middleInitial"},"Middle Initial"),l.a.createElement(i.b,{className:"form-control",name:"middleInitial",placeholder:"F",render:function(e){var a=e.field,t=e.form;return l.a.createElement("div",null,l.a.createElement("input",a),t.touched.middleInitial?t.errors.middleInitial:null,t.touched.firstName&&t.errors.firstName?t.errors.firstName:null,t.submitCount,l.a.createElement("button",{className:"btn btn-warning",type:"button",onClick:t.setFieldValue("middleInitial","J")},"J"))}}),l.a.createElement("label",{htmlFor:"lastName"},"LastName"),l.a.createElement(i.c,{className:"form-control",name:"lastName",placeholder:"Baby",render:function(e){var a=e.field,t=e.form;return l.a.createElement("div",null,l.a.createElement("input",a),t.touched.firstName&&t.errors.firstName?t.errors.firstName:null)}}),l.a.createElement("label",{htmlFor:"email"},"Email"),l.a.createElement(i.c,{className:"form-control",name:"email",placeholder:"jane@acme.com",type:"email"}),l.a.createElement("button",{className:"btn btn-primary m-2",type:"submit"},"Submit"))}}),l.a.createElement(u,null))},K=function(e){return function(a){return a?void 0:e}},Q=function(){return l.a.createElement("div",null,l.a.createElement("h3",null,"(FieldLevelValidation) Pick a username"),l.a.createElement(i.f,{initialValues:{username:"",email:""},onSubmit:function(e){alert(JSON.stringify(e,null,2))},render:function(e){e.errors,e.touched;var a=e.setFieldValue,t=e.setFieldTouched,n=e.validateField,r=e.validateForm;return l.a.createElement(i.e,null,l.a.createElement("label",{htmlFor:"username"},"Username"),l.a.createElement("div",null,l.a.createElement(i.c,{className:"form-control",name:"username",validate:K("This field is required"),type:"text",placeholder:"Username"}),l.a.createElement(i.a,{className:"text-danger small",name:"username",component:"div"})),l.a.createElement("br",null),l.a.createElement("div",null,l.a.createElement(i.c,{className:"form-control",name:"email",validate:K("This field is required"),type:"text",placeholder:"Email"}),l.a.createElement(i.a,{className:"text-danger small",name:"email",component:"div"})),l.a.createElement("div",{className:"mt-4"},l.a.createElement("div",null,"username field actions"),l.a.createElement("button",{className:"btn btn-primary mr-2",type:"button",onClick:function(){t("username",!0,!0)}},"setFieldTouched"),l.a.createElement("button",{className:"btn btn-primary mr-2",type:"button",onClick:function(){a("username","",!0)}},"setFieldValue"),l.a.createElement("button",{className:"btn btn-primary mr-2",type:"button",onClick:function(){n("username")}},"validateField"),l.a.createElement("br",null)),l.a.createElement("br",null),l.a.createElement("div",null,l.a.createElement("div",null,"Form actions"),l.a.createElement("button",{className:"btn btn-primary mr-2",type:"button",onClick:r},"validate form"),l.a.createElement("button",{className:"btn btn-primary",type:"submit"},"Submit")),l.a.createElement(s,null))}}))},ee=function(e){return e?void 0:"Required"},ae=function(e){function a(e){var t;return Object(W.a)(this,a),(t=Object(Z.a)(this,Object(G.a)(a).call(this,e))).next=function(e){return t.setState((function(a){return{page:Math.min(a.page+1,t.props.children.length-1),values:e}}))},t.previous=function(){return t.setState((function(e){return{page:Math.max(e.page-1,0)}}))},t.validate=function(e){var a=l.a.Children.toArray(t.props.children)[t.state.page];return a.props.validate?a.props.validate(e):{}},t.handleSubmit=function(e,a){var n=t.props,r=n.children,m=n.onSubmit;if(t.state.page===l.a.Children.count(r)-1)return m(e,a);a.setTouched({}),a.setSubmitting(!1),t.next(e)},t.state={page:0,values:e.initialValues},t}return Object($.a)(a,e),Object(U.a)(a,[{key:"render",value:function(){var e=this,a=this.props.children,t=this.state,n=t.page,r=t.values,m=l.a.Children.toArray(a)[n],c=n===l.a.Children.count(a)-1;return l.a.createElement(i.f,{initialValues:r,enableReinitialize:!1,validate:this.validate,onSubmit:this.handleSubmit,render:function(a){a.values;var t=a.handleSubmit,r=a.isSubmitting;a.handleReset;return l.a.createElement("form",{onSubmit:t},m,l.a.createElement("div",{className:"buttons"},n>0&&l.a.createElement("button",{type:"button",className:"btn btn-primary secondary mt-2",onClick:e.previous},"\xab Previous"),!c&&l.a.createElement("button",{type:"submit",className:"btn btn-primary mt-2"},"Next \xbb"),c&&l.a.createElement("button",{className:"btn btn-success ml-2 mt-2",type:"submit",disabled:r},"Submit")),l.a.createElement(s,null))}})}}]),a}(l.a.Component);ae.Page=function(e){return e.children};var te=function(){return l.a.createElement("div",{className:"App"},l.a.createElement("h3",null,"(MultistepWizard) Multistep / Form Wizard "),l.a.createElement(ae,{initialValues:{firstName:"",lastName:"",email:"",favoriteColor:""},onSubmit:function(e,a){var t;(t=300,new Promise((function(e){return setTimeout(e,t)}))).then((function(){window.alert(JSON.stringify(e,null,2)),a.setSubmitting(!1)}))}},l.a.createElement(ae.Page,null,l.a.createElement("div",null,l.a.createElement("label",null,"First Name"),l.a.createElement(i.c,{className:"form-control",name:"firstName",component:"input",type:"text",placeholder:"First Name",validate:ee}),l.a.createElement(i.a,{name:"firstName",component:"div",className:"text-danger small"})),l.a.createElement("div",null,l.a.createElement("label",null,"Last Name"),l.a.createElement(i.c,{className:"form-control",name:"lastName",component:"input",type:"text",placeholder:"Last Name",validate:ee}),l.a.createElement(i.a,{name:"lastName",component:"div",className:"text-danger small"}))),l.a.createElement(ae.Page,{validate:function(e){var a={};return e.email||(a.email="Required"),e.favoriteColor||(a.favoriteColor="Required"),a}},l.a.createElement("div",null,l.a.createElement("label",null,"Email"),l.a.createElement(i.c,{className:"form-control",name:"email",component:"input",type:"email",placeholder:"Email"}),l.a.createElement(i.a,{name:"email",component:"div",className:"text-danger small"})),l.a.createElement("div",null,l.a.createElement("label",null,"Favorite Color"),l.a.createElement(i.c,{name:"favoriteColor",component:"select",className:"form-control"},l.a.createElement("option",{value:""},"Select a Color"),l.a.createElement("option",{value:"#ff0000"},"\u2764\ufe0f Red"),l.a.createElement("option",{value:"#00ff00"},"\ud83d\udc9a Green"),l.a.createElement("option",{value:"#0000ff"},"\ud83d\udc99 Blue")),l.a.createElement(i.a,{name:"favoriteColor",component:"div",className:"text-danger small"})))),l.a.createElement(u,null))},ne=c.object().shape({email:c.string().email("Invalid email address").required("Required"),firstName:c.string().min(2,"Must be longer than 2 characters").max(20,"Nice try, nobody has a first name that long").required("Required"),lastName:c.string().min(2,"Must be longer than 2 characters").max(20,"Nice try, nobody has a last name that long").required("Required")}),le=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",null,"(SchemaValidation) Sign up "),l.a.createElement(i.f,{initialValues:{email:"",firstName:"",lastName:""},validationSchema:ne,onSubmit:function(e){setTimeout((function(){alert(JSON.stringify(e,null,2))}),500)},render:function(e){e.errors,e.touched;return l.a.createElement(i.e,null,l.a.createElement("label",{htmlFor:"firstName"},"First Name"),l.a.createElement(i.c,{className:"form-control",name:"firstName",placeholder:"Jane",type:"text"}),l.a.createElement(i.a,{name:"firstName",component:"div",className:"text-danger small"}),l.a.createElement("label",{htmlFor:"lastName"},"Last Name"),l.a.createElement(i.c,{className:"form-control",name:"lastName",placeholder:"Doe",type:"text"}),l.a.createElement(i.a,{name:"lastName",component:"div",className:"text-danger small"}),l.a.createElement("label",{htmlFor:"email"},"Email"),l.a.createElement(i.c,{className:"form-control",name:"email",placeholder:"jane@acme.com",type:"email"}),l.a.createElement(i.a,{name:"email",component:"div",className:"text-danger small"}),l.a.createElement("button",{className:"btn btn-primary secondary mt-2",type:"submit"},"Submit"),l.a.createElement(s,null))}}),l.a.createElement(u,null))},re=function(e){var a={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(a.email="Invalid email address"):a.email="Required",a},me=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"(SyncValidation) Sign In"),l.a.createElement(i.f,{initialValues:{email:"",password:""},validate:re,onSubmit:function(e){setTimeout((function(){alert(JSON.stringify(e,null,2))}),500)},render:function(e){e.errors,e.touched;return l.a.createElement(i.e,null,l.a.createElement("label",{htmlFor:"email"},"Email"),l.a.createElement(i.c,{className:"form-control",name:"email",placeholder:"john@acme.com",type:"email"}),l.a.createElement("div",{className:"field-error"},l.a.createElement(i.a,{name:"email",component:"div",className:"text-danger small"})),l.a.createElement("label",{htmlFor:"password"},"Password"),l.a.createElement(i.c,{className:"form-control",name:"password",type:"password"}),l.a.createElement("button",{className:"btn btn-primary secondary mt-2",type:"submit"},"Sign In"),l.a.createElement(s,null))}}),l.a.createElement(u,null))},ie=c.object().shape({email:c.string().email("Please enter valid email").required(),password:c.string().min(3,"Too Short!").max(30).required(),plan:c.string().required("Required")}),ce=Object(i.h)({mapPropsToValues:function(e){return{email:e.email||"vigneshwaran",password:e.password||"",newsletter:e.newsletter||!1,plan:e.plan||"2"}},validationSchema:ie,handleSubmit:function(e,a){var t=a.resetForm,n=a.setErrors,l=a.setSubmitting;console.log({values:e}),setTimeout((function(){"hello@gmail.com"===e.email?n({email:"Email is already taken"}):t(),l(!1)}),2e3)}})((function(e){var a=e.values,t=e.errors,n=e.touched,r=e.isSubmitting;return l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",null,"(FormOne)"),l.a.createElement(i.e,null,l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"email"},"Email address:"),l.a.createElement(i.c,{type:"email",className:"form-control",id:"email",name:"email"}),n.email&&t.email&&l.a.createElement("div",{className:"text-danger small my-2"},t.email)),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"pwd"},"Password:"),l.a.createElement(i.c,{type:"password",className:"form-control",id:"pwd",name:"password"}),n.password&&t.password&&l.a.createElement("div",{className:"text-danger small my-2"},t.password)),l.a.createElement("div",{className:"form-group form-check"},l.a.createElement("label",{className:"form-check-label"},l.a.createElement(i.c,{className:"form-check-input",type:"checkbox",name:"newsletter",checked:a.newsletter}),l.a.createElement("span",null," I agree your condition."))),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"sel1"},"Select list:"),l.a.createElement(i.c,{component:"select",name:"plan",className:"form-control",id:"sel1"},l.a.createElement("option",{value:""},"Select your plan"),l.a.createElement("option",{value:"1"},"1"),l.a.createElement("option",{value:"2"},"2"),l.a.createElement("option",{value:"3"},"3"),l.a.createElement("option",{value:"4"},"4"))),n.plan&&t.plan&&l.a.createElement("div",{className:"text-danger small my-2"},t.plan),l.a.createElement(i.a,{name:"plan",className:"text-danger small my-2",component:"div"}),l.a.createElement("button",{disabled:r,type:"submit",className:"btn btn-primary"},"Submit"),l.a.createElement(s,null)),l.a.createElement(u,null))})),oe=t(67),se=t(121),ue=t.n(se),de=t(122),Ee=t.n(de);function pe(e){var a=e.touched,t=e.message;return a?t?l.a.createElement("div",{className:"text-danger"},t," ",l.a.createElement("span",{role:"img","aria-label":"Emoji"},"\ud83d\ude1f")):l.a.createElement("div",{className:"text-success"},"all good ",l.a.createElement("span",{role:"img","aria-label":"Emoji"},"\ud83d\ude03")):l.a.createElement("div",null,"\xa0")}var fe=c.object().shape({userName:c.string().min(1).max(15).required(),email:c.string().email().min(1).max(15).required(),country:c.string().required()}),be={email:"one@g.coms",userName:"two",country:""};function he(){var e=Object(n.useState)(""),a=Object(oe.a)(e,2),t=a[0],r=a[1],m=Object(n.useState)([]),c=Object(oe.a)(m,2),o=c[0],s=c[1];function d(){console.log("hi"),s([])}return l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",null,"(FormOne)"),l.a.createElement(i.f,{initialValues:be,validationSchema:fe,onSubmit:function(e,a){var t=a.setSubmitting,n=a.resetForm;console.log({values:e}),t(!0),setTimeout((function(){alert(JSON.stringify(e,null,2)),n(),t(!1)}),500)}},(function(e){var a=e.values,n=e.errors,m=e.touched,i=e.handleChange,c=e.handleBlur,u=e.handleSubmit,E=e.isSubmitting,p=e.setFieldValue;return l.a.createElement("form",{onSubmit:u},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"email"},"Email address:"),l.a.createElement("input",{type:"email",className:"form-control "+(m.email&&n.email?"border-danger":""),id:"email",name:"email",placeholder:"Enter your email",value:a.email,onBlur:c,onChange:i}),l.a.createElement(pe,{touched:m.email,message:n.email})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"userName"},"Name"),l.a.createElement("input",{type:"text",className:"form-control "+(m.userName&&n.userName?"border-danger":""),id:"userName",name:"userName",placeholder:"Enter your name",value:a.userName,onBlur:c,onChange:i}),l.a.createElement(pe,{touched:m.userName,message:n.userName})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"autosuggest"},"Autosuggest"),l.a.createElement(ue.a,{inputProps:{value:t,type:"search",placeholder:"Enter city or postcode",className:"form-control "+(m.country&&n.country?"border-danger":""),autoComplete:"hello",name:"autosuggest",id:"autosuggest",onChange:function(e,a){var n=a.newValue;console.log({newValue:n}),r(n),console.log(t)}},suggestions:o,onSuggestionsFetchRequested:function(){var e=Object(v.a)(h.a.mark((function e(a){var t,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=a.value,console.log({value:t}),t){e.next=5;break}return s([]),e.abrupt("return");case 5:return e.prev=5,e.next=8,Ee.a.get("https://restcountries.eu/rest/v2/name/".concat(t));case 8:n=e.sent,console.log(n.data),s(n.data.map((function(e){return{name:e.name,flag:e.flag}}))),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(5),s([]);case 16:case"end":return e.stop()}}),e,null,[[5,13]])})));return function(a){return e.apply(this,arguments)}}(),onSuggestionsClearRequested:d,getSuggestionValue:function(e){return e.name},renderSuggestion:function(e){return l.a.createElement("div",null,l.a.createElement("img",{style:{width:"25px",paddingRight:"10px"},src:e.flag,alt:e.name}),e.name)},onSuggestionSelected:function(e,a){var t=a.suggestion;a.suggestionValue,a.suggestionIndex,a.sectionIndex;"enter"===a.method&&e.preventDefault(),r(t.name),p("country",t.name)}}),l.a.createElement(pe,{touched:m.country,message:n.country})),l.a.createElement("div",null,l.a.createElement("button",{disabled:E,type:"submit",className:"btn btn-primary"},"Submit")),JSON.stringify(a))})),l.a.createElement(u,null))}var ve=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",null,"(FormThree) Any place in your app!"),l.a.createElement(i.f,{initialValues:{email:"",password:""},validate:function(e){var a={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.email)||(a.email="Invalid email address"):a.email="Required",e.password||(a.password="Required"),a},onSubmit:function(e,a){var t=a.setSubmitting;setTimeout((function(){alert(JSON.stringify(e,null,2)),t(!1)}),400)}},(function(e){var a=e.isSubmitting;return l.a.createElement(i.e,null,l.a.createElement(i.c,{className:"form-control mb-2",type:"email",name:"email",placeholder:"email"}),l.a.createElement(i.a,{className:"text-danger small",name:"email",component:"div"}),l.a.createElement(i.c,{className:"form-control mb-2",type:"password",name:"password",placeholder:"password"}),l.a.createElement(i.a,{className:"text-danger small",name:"password",component:"div"}),l.a.createElement("button",{className:"btn btn-primary m-2",type:"submit",disabled:a},"Submit"))})),l.a.createElement(u,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));m.a.render(l.a.createElement((function(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"d-flex flex-row justify-content-center"},l.a.createElement("div",{className:"col-2"}),l.a.createElement("div",{className:"col-8"},l.a.createElement(f,null),l.a.createElement(g,null),l.a.createElement(w,null),l.a.createElement(q,null),l.a.createElement(O,null),l.a.createElement(J,null),l.a.createElement(z,null),l.a.createElement(D,null),l.a.createElement(X,null),l.a.createElement(_,null),l.a.createElement(Q,null),l.a.createElement(te,null),l.a.createElement(le,null),l.a.createElement(me,null),l.a.createElement(ce,{email:"hello"}),l.a.createElement(he,null),l.a.createElement(ve,null)),l.a.createElement("div",{className:"col-2"})))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[123,1,2]]]);
//# sourceMappingURL=main.a8b6ea5d.chunk.js.map