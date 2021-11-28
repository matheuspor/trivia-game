(this["webpackJsonptrivia-game"]=this["webpackJsonptrivia-game"]||[]).push([[0],{151:function(e,t,n){},166:function(e,t){},167:function(e,t,n){},168:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(39),c=n.n(i),s=(n(151),n(95)),o=n(62),l=n(24),u=n(21),d=n(16),j=n(41),b=n(42),h=n(53),m=n(51),p=n(50),x=n(248),f=n(225),O=n(112),g=n.n(O),v=n(259),y=n(260),k=n(261),S=n(262),C=n(246),w=n(263),I=n(234),A=n(2),P=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(j.a)(this,n),(a=t.call(this,e)).state={clicked:!1,timer:30,questionNumber:0,PlayerScore:0,PlayerAssertions:0},a.handleClick=a.handleClick.bind(Object(h.a)(a)),a.setTimer=a.setTimer.bind(Object(h.a)(a)),a}return Object(b.a)(n,[{key:"componentDidMount",value:function(){this.setTimer(),this.updateLocalStorage()}},{key:"componentWillUnmount",value:function(){var e=JSON.parse(localStorage.getItem("state")),t={name:e.player.name,score:e.player.score,picture:e.player.picture},n=JSON.parse(localStorage.getItem("ranking"));n?localStorage.setItem("ranking",JSON.stringify([].concat(Object(d.a)(n),[t]))):localStorage.setItem("ranking",JSON.stringify([t]))}},{key:"handleClick",value:function(e){var t=this,n=e.target,a=this.state,r=a.timer,i=a.questionNumber,c=this.props.questions[i].difficulty,s={easy:1,medium:2,hard:3};this.setState({clicked:!0}),"correct-answer"===n.name&&this.setState((function(e){return{PlayerScore:e.PlayerScore+10+r*s[c],PlayerAssertions:e.PlayerAssertions+1}}),(function(){t.updateLocalStorage()}))}},{key:"setTimer",value:function(){var e=this;this.setState({timer:30});var t=setInterval((function(){e.setState((function(e){return{timer:e.timer-1}}),(function(){var n=e.state,a=n.timer,r=n.clicked;(a<=0||r)&&(clearInterval(t),e.setState({clicked:!0}))}))}),1e3)}},{key:"updateLocalStorage",value:function(){var e=this.state,t=e.PlayerAssertions,n=e.PlayerScore,a=this.props.player,r={player:{name:a.name,assertions:t,score:n,gravatarEmail:a.email,picture:a.avatar}};localStorage.setItem("state",JSON.stringify(r))}},{key:"randomAnswers",value:function(e){var t=this,n=this.state,a=n.questionNumber,r=n.clicked,i=this.props.classes,c=[e[a].correct_answer].concat(Object(d.a)(e[a].incorrect_answers)).sort();return Object(A.jsx)(v.a,{sx:{display:"flex",flexDirection:"column"},children:c.map((function(n,c){return n===e[a].correct_answer?Object(A.jsx)(y.a,{name:"correct-answer",variant:"outlined",sx:{my:1},onClick:t.handleClick,"data-testid":"correct-answer",disabled:r,id:"correct",className:i.disabledGreen,children:decodeURIComponent(n)},c):Object(A.jsx)(y.a,{variant:"outlined",sx:{my:1},type:"button",disabled:r,id:c,className:i.disabledRed,"data-testid":"wrong-answer-".concat(c),onClick:t.handleClick,children:decodeURIComponent(n)},c)}))})}},{key:"nextButton",value:function(e){var t=this,n=this.props,a=n.history;e<n.questions.length-1?this.setState((function(e){return{questionNumber:e.questionNumber+1,clicked:!1}}),(function(){t.setTimer()})):a.push("/trivia-game/feedback")}},{key:"circularProgressWithLabel",value:function(e){return Object(A.jsxs)(v.a,{sx:{position:"relative",display:"inline-flex"},children:[Object(A.jsx)(v.a,{sx:{top:0,left:0,bottom:25,right:0,position:"absolute",display:"flex",alignItems:"center",justifyContent:"center"},children:Object(A.jsx)(g.a,{fontSize:"20"})}),Object(A.jsx)(x.a,{variant:"determinate",value:3.33*e,sx:{color:"#006600"},size:60,thickness:3}),Object(A.jsx)(v.a,{sx:{top:13,left:0,bottom:0,right:0,position:"absolute",display:"flex",alignItems:"center",justifyContent:"center"},children:Object(A.jsx)(k.a,{sx:{fontWeight:600},variant:"h6",component:"div",color:"text.secondary",children:e})})]})}},{key:"render",value:function(){var e=this,t=this.props,n=t.player,a=t.questions,r=this.state,i=r.timer,c=r.questionNumber,s=r.PlayerScore,o=r.clicked;return Object(A.jsxs)(S.a,{component:"main",maxWidth:"md",sx:{pb:5},children:[Object(A.jsx)(f.a,{}),Object(A.jsxs)(v.a,{sx:{marginTop:2,display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(A.jsx)(C.a,{sx:{height:50,width:60},src:n.avatar,alt:"Player Image Avatar"}),Object(A.jsx)(k.a,{variant:"h6",children:n.name}),Object(A.jsxs)(k.a,{variant:"h6",sx:{fontWeight:"regular"},children:[s," ","Points"]}),Object(A.jsx)("header",{children:this.circularProgressWithLabel(i)}),Object(A.jsxs)(w.a,{variant:"outlined",sx:{maxWidth:{xs:"80%"},my:{xs:1,md:2},p:2,pb:5,display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(A.jsx)(w.a,{elevation:"3",sx:{textAlign:"center",p:1},children:Object(A.jsx)(k.a,{sx:{fontSize:{xs:18,md:20},fontWeight:"bold"},children:decodeURIComponent(a[c].category)})}),Object(A.jsx)(k.a,{variant:"h6",sx:{py:3,fontWeight:"regular",textAlign:"center"},gutterBottom:!0,children:decodeURIComponent(a[c].question)}),this.randomAnswers(a),o&&Object(A.jsx)(y.a,{sx:{mt:2},variant:"contained","data-testid":"btn-next",onClick:function(){return e.nextButton(c)},children:"Next"})]})]}),Object(A.jsx)("hr",{style:{color:"#000000",backgroundColor:"#000000",width:"80%",borderColor:"#000000"}}),Object(A.jsx)(k.a,{variant:"h6",component:"div",sx:{pt:2,pb:4,fontWeight:"regular",textAlign:"center"},gutterBottom:!0,children:"".concat(c+1,"/5")})]})}}]),n}(r.a.Component),W=Object(o.b)((function(e){return{questions:e.user.questions,player:e.user.player}}))(Object(I.a)((function(){return{disabledGreen:{"&:disabled":{borderColor:"black !important",border:"3px solid black !important",background:"linear-gradient(45deg, #1df401 30%, #1df401 90%)",color:"#212121 !important"}},disabledRed:{"&:disabled":{background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)"}}}}))(P)),N=n(4),q=n(26),T=n(12),D=n(245),E=n(250),_=n(252),z=n(253),J=n(254),R=n(235),U=n(255),B=n(251),L=n(230),F=n(247),G=n(242),M=n(238),Q=n(233),Y=n(241);function H(e,t,n){return Object(A.jsxs)(Q.a,{onChange:n,select:!0,label:"".concat(e[0].toUpperCase()).concat(e.substr(1)),name:e,sx:{minWidth:300},children:[Object(A.jsx)(Y.a,{value:"All",children:"All"}),"category"===e?t.trivia_categories.map((function(e){return Object(A.jsx)(Y.a,{value:e.name,children:e.name},e.id)})):t.map((function(e){return"True/False"===e?Object(A.jsx)(Y.a,{value:"boolean",children:e},"boolean"):Object(A.jsx)(Y.a,{value:e.toLowerCase(),children:e},e)}))]})}var V=Object(a.createContext)(),$=n(57),K=n.n($),X=n(85),Z=function(){var e=Object(X.a)(K.a.mark((function e(){var t;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://opentdb.com/api_token.php?command=request").then((function(e){return e.json()})).then((function(e){return e.token}));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ee=function(){var e=Object(X.a)(K.a.mark((function e(t){var n;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.gravatar.com/avatar/".concat(t));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),te=function(){var e=Object(X.a)(K.a.mark((function e(t,n){var a,r,i;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object.keys(n),r="https://opentdb.com/api.php?amount=5&encode=url3986",a.forEach((function(e,t){"All"!==n[e]&&(r+="&".concat(a[t],"=").concat(n[e]))})),e.next=5,fetch("".concat(r,"&").concat(t)).then((function(e){return e.json()})).then((function(e){return e.results}));case 5:return i=e.sent,e.abrupt("return",i);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();var ne=function(){var e=Object(u.f)(),t=Object(a.useState)(!1),n=Object(T.a)(t,2),r=n[0],i=n[1],c=Object(a.useState)(!1),s=Object(T.a)(c,2),o=s[0],l=s[1],d=Object(a.useState)({category:"All",difficulty:"All",type:"All"}),j=Object(T.a)(d,2),b=j[0],h=j[1],m=Object(a.useContext)(V).setNewSetting,p=JSON.parse(localStorage.getItem("categories"));function O(e){var t=e.target,n=t.name,a=t.value;if("category"===n){var r=p.trivia_categories.find((function(e){return e.name===a}));h(Object(q.a)(Object(q.a)({},b),{},Object(N.a)({},n,r?r.id:"All")))}else h(Object(q.a)(Object(q.a)({},b),{},Object(N.a)({},n,a)))}return Object(A.jsxs)(U.a,{component:"main",children:[Object(A.jsx)(f.a,{}),Object(A.jsxs)(v.a,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(A.jsxs)(F.a,{container:!0,direction:"row",alignItems:"center",justifyContent:"center",sx:{mb:2,mt:-2},children:[Object(A.jsx)(B.a,{variant:"h2",children:"Settings"}),Object(A.jsx)(L.a,{sx:{fontSize:55}})]}),Object(A.jsx)(v.a,{component:"form",noValidate:!0,sx:{mt:1},children:Object(A.jsxs)(G.a,{sx:{m:1,minWidth:120},children:[H("category",p,O),Object(A.jsx)("br",{}),H("difficulty",["Easy","Medium","Hard"],O),Object(A.jsx)("br",{}),H("type",["Multiple","True/False"],O),Object(A.jsx)("br",{})]})}),Object(A.jsx)(R.a,{type:"button",onClick:function(){l(!0),m(b);var t=localStorage.getItem("token");te(t,b).then((function(t){t.length?e.push("/trivia-game"):(i(!0),l(!1))}))},variant:"contained",size:"medium",color:"primary",children:"Return"})]}),Object(A.jsxs)(D.a,{open:r,onClose:function(){return i(!1)},"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(A.jsx)(E.a,{id:"alert-dialog-title",children:"Error: Unable to find questions with the current settings."}),Object(A.jsx)(_.a,{children:Object(A.jsx)(z.a,{id:"alert-dialog-description",children:"Please change the Category, Difficulty and/or Type."})}),Object(A.jsx)(J.a,{children:Object(A.jsx)(R.a,{onClick:function(){return i(!1)},autofocus:!0,children:"Close"})})]}),Object(A.jsx)(M.a,{sx:{color:"#fff"},open:o,onClick:function(){return l(!1)},children:Object(A.jsx)(x.a,{color:"inherit"})})]})},ae=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){var e=JSON.parse(localStorage.getItem("state")).player,t=this.props.history;return Object(A.jsxs)(S.a,{component:"main",maxWidth:"md",sx:{pb:5},children:[Object(A.jsx)(f.a,{}),Object(A.jsxs)(v.a,{sx:{marginTop:2,display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(A.jsx)(w.a,{sx:{maxWidth:400,my:1,mx:"auto",p:2},children:Object(A.jsxs)(F.a,{container:!0,spacing:2,children:[Object(A.jsx)(F.a,{item:!0,children:Object(A.jsx)(C.a,{"data-testid":"header-profile-picture",src:e.picture,alt:"avatar"})}),Object(A.jsx)(F.a,{item:!0,xs:!0,children:Object(A.jsx)(k.a,{sx:{fontWeight:"bold"},variant:"h6",color:"text.secondary",children:e.name})})]})}),Object(A.jsxs)(w.a,{variant:"outlined",sx:{p:3,display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(A.jsx)(w.a,{elevation:"3",sx:{textAlign:"center",p:1,px:2},children:Object(A.jsx)(k.a,{variant:"h5",color:"text.primary",children:"Score: ".concat(e.score," points")})}),Object(A.jsx)(k.a,{sx:{pt:2,pb:1,fontSize:{xs:16,sm:"h6.fontSize"},fontWeight:"regular"},color:"text.primary",children:"You scored ".concat(e.assertions," out of 5 questions")}),e.assertions>=3&&Object(A.jsx)(k.a,{sx:{mb:2,fontStyle:"oblique",fontWeight:"regular",textDecoration:"underline",fontSize:{xs:18,sm:"h6.fontSize"}},children:"Good Job!"}),Object(A.jsx)(y.a,{variant:"outlined","data-testid":"btn-play-again",color:"primary",onClick:function(){return t.push("/trivia-game")},sx:{mb:1},children:"Play Again"}),Object(A.jsx)(y.a,{variant:"contained","data-testid":"btn-ranking",color:"primary",onClick:function(){return t.push("/trivia-game/ranking")},children:"Ranking"})]})]})]})}}]),n}(a.Component),re=n(256),ie=n(257),ce=n(264),se=n(239),oe=n(232),le=n(231),ue=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(){var e;return Object(j.a)(this,n),(e=t.call(this)).state={},e}return Object(b.a)(n,[{key:"render",value:function(){var e=JSON.parse(localStorage.getItem("ranking")),t=this.props.history;return Object(A.jsxs)(S.a,{component:"main",children:[Object(A.jsx)(f.a,{}),Object(A.jsxs)(v.a,{sx:{display:"flex",flexDirection:"column",alignItems:"center",mb:5},children:[Object(A.jsxs)(F.a,{container:!0,direction:"row",alignItems:"center",justifyContent:"center",sx:{py:2},children:[Object(A.jsx)(k.a,{variant:"h3",sx:{fontSize:40,fontWeight:"regular"},children:"Leaderboard"}),Object(A.jsx)(le.a,{sx:{fontSize:55}})]}),Object(A.jsxs)(w.a,{variant:"outlined",sx:{px:1,pb:3,display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(A.jsx)(ce.a,{sx:{mb:2},children:e&&e.sort((function(e,t){return t.score-e.score})).map((function(e,t){return t<10&&Object(A.jsxs)(A.Fragment,{children:[Object(A.jsxs)(se.a,{children:[Object(A.jsx)(re.a,{children:Object(A.jsx)(k.a,{sx:{fontWeight:"600"},children:t+1})}),Object(A.jsx)(ie.a,{sx:{ml:1},children:Object(A.jsx)(C.a,{sx:{width:45,height:45},src:e.picture})}),Object(A.jsx)(re.a,{primary:e.name,secondary:Object(A.jsxs)(k.a,{sx:{display:"inline",fontWeight:"bold"},component:"span",variant:"body2",color:"text.primary",children:[e.score," ","Points"]})})]},t),Object(A.jsx)(oe.a,{component:"li"})]})}))}),Object(A.jsx)(y.a,{variant:"contained",type:"button","data-testid":"btn-go-home",onClick:function(){return t.push("/trivia-game")},children:"Play Again"})]})]})]})}}]),n}(r.a.Component),de=n(119),je=n.n(de),be="SET_PLAYER_INFO",he="SET_QUESTIONS",me="SET_SETTINGS",pe=(n(167),n.p+"static/media/trivia.7e9181d3.png");function xe(e){var t=e.name,n=e.user,a=e.handler;return Object(A.jsx)(R.a,{type:"Play"===t?"submit":"button",fullWidth:!0,disabled:"Play"===t&&!n.name,onClick:a,variant:"contained",sx:{mt:3,mb:2},color:"Play"===t?"primary":"secondary",children:t})}xe.defaultProps={handler:void 0};var fe=n(258);function Oe(e){var t=e.name,n=e.handler,a=e.value;return Object(A.jsx)(Q.a,{type:"email"===t?"email":"text",margin:"normal",required:"name"===t,fullWidth:!0,id:"".concat(t[0].toUpperCase()).concat(t.substr(1)),label:"email"===t?"Gravatar email:":"Name:",name:t,autoComplete:t,onChange:n,value:a,helperText:"email"===t&&Object(A.jsx)(fe.a,{href:"https://en.gravatar.com/",target:"_blank",underline:"always",children:"Gravatar"})})}var ge=n(122),ve=Object(ge.a)({palette:{background:{default:"#fafafa"},primary:{main:"#212121"},secondary:{main:"#9e9e9e"}}}),ye=n(265);function ke(){return Object(A.jsxs)("footer",{children:[Object(A.jsx)("hr",{}),Object(A.jsxs)(k.a,{sx:{mt:2,pb:2},variant:"body2",color:"text.secondary",align:"center",children:["\xa9 ",Object(A.jsx)(ye.a,{color:"text.primary",target:"_blank",href:"https://github.com/matheuspor",children:"matheuspor"})," 2021"]})]})}var Se=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(e){var a;Object(j.a)(this,n);var r=(a=t.call(this,e)).props.player,i=r.name,c=r.email;return a.state={user:{name:i,email:c},open:!0},a.handleChange=a.handleChange.bind(Object(h.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(h.a)(a)),a}return Object(b.a)(n,[{key:"componentDidMount",value:function(){var e=this;Z().then((function(e){fetch("https://opentdb.com/api_category.php").then((function(e){return e.json()})).then((function(e){return localStorage.setItem("categories",JSON.stringify(e))})),localStorage.setItem("token",e)})).then((function(){return e.setState({open:!1})}))}},{key:"handleChange",value:function(e){var t=e.target,n=t.name,a=t.value;this.setState((function(e){return{user:Object(q.a)(Object(q.a)({},e.user),{},Object(N.a)({},n,a))}}))}},{key:"handleSubmit",value:function(e){var t=this,n=this.props,a=n.sendQuestions,r=n.sendPlayer,i=n.settings,c=n.history,s=this.state.user;e.preventDefault(),this.setState({open:!0});var o=je()(s.email).toString();ee(o).then((function(e){var n=e.url;t.setState((function(e){return{user:Object(q.a)(Object(q.a)({},e.user),{},{avatar:n})}}),(function(){var e=t.state;r(e.user)}))})),te(localStorage.getItem("token"),i).then((function(e){a(e),c.push("/trivia-game/game")}))}},{key:"backDrop",value:function(e){return Object(A.jsx)(M.a,{sx:{color:"#fff"},open:e,children:Object(A.jsx)(x.a,{color:"inherit"})})}},{key:"render",value:function(){var e=this.props,t=e.history,n=e.classes,a=this.state,r=a.user,i=a.open;return Object(A.jsxs)(U.a,{component:"main",maxWidth:"xs",children:[Object(A.jsx)(f.a,{}),this.backDrop(i),Object(A.jsxs)(v.a,{sx:{mt:6,display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(A.jsx)("img",{src:pe,className:n.logo,alt:"logo"}),Object(A.jsxs)(v.a,{component:"form",onSubmit:this.handleSubmit,sx:{mt:1},children:[Object(A.jsx)(Oe,{name:"name",value:r.name,handler:this.handleChange}),Object(A.jsx)(Oe,{name:"email",value:r.email,handler:this.handleChange}),Object(A.jsx)(xe,{name:"Play",user:r}),Object(A.jsx)(xe,{name:"Settings",user:r,handler:function(){return t.push("/trivia-game/settings")}})]})]}),Object(A.jsx)(ke,{})]})}}]),n}(r.a.Component),Ce=Object(o.b)((function(e){var t=e.user;return{player:t.player,settings:t.settings}}),(function(e){return{sendQuestions:function(t){return e(function(e){return{type:he,payload:e}}(t))},sendPlayer:function(t){return e(function(e){return{type:be,payload:e}}(t))}}}))(Object(I.a)((function(){var e;return{logo:(e={height:"6em"},Object(N.a)(e,ve.breakpoints.up("sm"),{height:"9em"}),Object(N.a)(e,"mb","1em"),Object(N.a)(e,"animation","shake infinite 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both"),e)}}))(Se));var we=function(e){var t=e.children,n=Object(a.useState)({category:"All",difficulty:"All",type:"All"}),r=Object(T.a)(n,2),i=r[0],c=r[1];return Object(A.jsx)(V.Provider,{value:{settings:i,setNewSetting:function(e){c(e)}},children:t})};function Ie(){return Object(A.jsx)(we,{children:Object(A.jsxs)(u.c,{children:[Object(A.jsx)(u.a,{exact:!0,path:"/trivia-game",component:Ce}),Object(A.jsx)(u.a,{path:"/trivia-game/game",component:W}),Object(A.jsx)(u.a,{path:"/trivia-game/settings",component:ne}),Object(A.jsx)(u.a,{path:"/trivia-game/feedback",component:ae}),Object(A.jsx)(u.a,{path:"/trivia-game/ranking",component:ue})]})})}var Ae=n(64),Pe=n(120),We=n(121),Ne={player:{name:"",email:""},questions:"",settings:{category:"All",difficulty:"All",type:"All"}},qe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case be:return Object(q.a)(Object(q.a)({},e),{},{player:t.payload});case he:return Object(q.a)(Object(q.a)({},e),{},{questions:t.payload});case me:return Object(q.a)(Object(q.a)({},e),{},{settings:t.payload});default:return e}},Te=Object(Ae.combineReducers)({user:qe}),De=Object(Ae.createStore)(Te,Object(Pe.composeWithDevTools)(Object(Ae.applyMiddleware)(We.a)));window.Cypress&&(window.store=De);var Ee=De;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(Object(A.jsx)(s.a,{children:Object(A.jsx)(o.a,{store:Ee,children:Object(A.jsx)(l.c,{theme:ve,children:Object(A.jsx)(Ie,{})})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[168,1,2]]]);
//# sourceMappingURL=main.2ebf84ff.chunk.js.map