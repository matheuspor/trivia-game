(this["webpackJsonptrivia-game"]=this["webpackJsonptrivia-game"]||[]).push([[0],{145:function(e,t,n){},157:function(e,t){},158:function(e,t,n){},162:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(37),c=n.n(i),o=(n(145),n(93)),s=n(54),l=n(25),u=n(21),d=n(16),j=n(45),b=n(46),m=n(67),h=n(58),p=n(56),x=n(239),f=n(219),O=n(110),g=n.n(O),v=n(250),y=n(248),k=n(249),S=n(251),w=n(252),C=n(237),I=n(253),A=n(254),N=n(2),P=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(j.a)(this,n),(a=t.call(this,e)).state={clicked:!1,timer:30,questionNumber:0,PlayerScore:0,PlayerAssertions:0},a.handleClick=a.handleClick.bind(Object(m.a)(a)),a.setTimer=a.setTimer.bind(Object(m.a)(a)),a}return Object(b.a)(n,[{key:"componentDidMount",value:function(){this.setTimer(),this.updateLocalStorage()}},{key:"componentWillUnmount",value:function(){var e=JSON.parse(localStorage.getItem("state")),t={name:e.player.name,score:e.player.score,picture:e.player.picture},n=JSON.parse(localStorage.getItem("ranking"));n?localStorage.setItem("ranking",JSON.stringify([].concat(Object(d.a)(n),[t]))):localStorage.setItem("ranking",JSON.stringify([t]))}},{key:"handleClick",value:function(e){var t=this,n=e.target,a=this.state,r=a.timer,i=a.questionNumber,c=this.props.questions[i].difficulty,o={easy:1,medium:2,hard:3};"correct-answer"===n.name&&this.setState((function(e){return{PlayerScore:e.PlayerScore+10+r*o[c],PlayerAssertions:e.PlayerAssertions+1}})),this.setState({clicked:!0},(function(){t.updateLocalStorage()}))}},{key:"setTimer",value:function(){var e=this;this.setState({timer:30});var t=setInterval((function(){e.setState((function(e){return{timer:e.timer-1}}),(function(){var n=e.state,a=n.timer,r=n.clicked;(a<=0||r)&&(clearInterval(t),e.setState({clicked:!0}))}))}),1e3)}},{key:"updateLocalStorage",value:function(){var e=this.state,t=e.PlayerAssertions,n=e.PlayerScore,a=this.props.player,r={player:{name:a.name,assertions:t,score:n,gravatarEmail:a.email,picture:a.avatar}};localStorage.setItem("state",JSON.stringify(r))}},{key:"randomAnswers",value:function(e){var t=this,n=this.state,a=n.questionNumber,r=n.clicked,i=this.props.classes,c=[e[a].correct_answer].concat(Object(d.a)(e[a].incorrect_answers)).sort();return Object(N.jsx)(y.a,{orientation:"vertical",variant:"outlined","aria-label":"outlined button group",sx:{textAlign:"center",pb:5,maxWidth:"100%"},color:"primary",children:c.map((function(n,c){return n===e[a].correct_answer?Object(N.jsx)(k.a,{type:"button",onClick:t.handleClick,"data-testid":"correct-answer",disabled:r,id:"correct",className:r&&i.disabledGreen,name:"correct-answer",children:decodeURIComponent(n)},c):Object(N.jsx)(k.a,{type:"button",disabled:r,id:c,className:r&&i.disabledRed,name:"wrong-answer","data-testid":"wrong-answer-".concat(c),onClick:t.handleClick,children:decodeURIComponent(n)},c)}))})}},{key:"nextButton",value:function(e){var t=this,n=this.props,a=n.history;e<n.questions.length-1?this.setState((function(e){return{questionNumber:e.questionNumber+1,clicked:!1}}),(function(){t.setTimer()})):a.push("/trivia-game/feedback")}},{key:"circularProgressWithLabel",value:function(e){return Object(N.jsxs)(v.a,{sx:{position:"relative",display:"inline-flex"},children:[Object(N.jsx)(v.a,{sx:{top:0,left:0,bottom:25,right:0,position:"absolute",display:"flex",alignItems:"center",justifyContent:"center"},children:Object(N.jsx)(g.a,{fontSize:"20"})}),Object(N.jsx)(x.a,{variant:"determinate",value:3.33*e,sx:{color:"#006600"},size:60,thickness:3}),Object(N.jsx)(v.a,{sx:{top:13,left:0,bottom:0,right:0,position:"absolute",display:"flex",alignItems:"center",justifyContent:"center"},children:Object(N.jsx)(S.a,{sx:{fontWeight:600},variant:"h6",component:"div",color:"text.secondary",children:e})})]})}},{key:"render",value:function(){var e=this,t=this.props,n=t.player,a=t.questions,r=this.state,i=r.timer,c=r.questionNumber,o=r.PlayerScore,s=r.clicked;return Object(N.jsxs)(w.a,{component:"main",maxWidth:"md",sx:{pb:5},children:[Object(N.jsx)(f.a,{}),Object(N.jsxs)(v.a,{sx:{marginTop:2,display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(N.jsx)(C.a,{sx:{height:50,width:60},src:n.avatar,alt:"Player Image Avatar"}),Object(N.jsx)(S.a,{variant:"h6",children:n.name}),Object(N.jsxs)(S.a,{variant:"h6",sx:{fontWeight:"regular"},children:[o," ","Points"]}),Object(N.jsx)("header",{children:this.circularProgressWithLabel(i)}),Object(N.jsxs)(I.a,{variant:"outlined",sx:{maxWidth:{xs:"80%"},my:{xs:1,md:2},p:2,pb:5,display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(N.jsx)(I.a,{elevation:"3",sx:{textAlign:"center",p:1},children:Object(N.jsx)(S.a,{sx:{fontSize:{xs:18,md:20},fontWeight:"bold"},children:decodeURIComponent(a[c].category)})}),Object(N.jsx)(S.a,{variant:"h6",component:"div",sx:{pt:2,pb:4,fontWeight:"regular",textAlign:"center"},gutterBottom:!0,children:decodeURIComponent(a[c].question)}),this.randomAnswers(a),s&&Object(N.jsx)(k.a,{sx:{justifyContent:"center",alignSelf:"center",textAlign:"center"},variant:"contained","data-testid":"btn-next",onClick:function(){return e.nextButton(c)},children:"Next"})]})]})]})}}]),n}(r.a.Component),W=Object(s.b)((function(e){return{questions:e.user.questions,player:e.user.player}}))(Object(A.a)((function(){return{disabledGreen:{"&:disabled":{color:"black",borderColor:"black",border:"3px solid black"},background:"linear-gradient(45deg, #1df401 30%, #1df401 90%)",color:"#1df401"},disabledRed:{background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)"}}}))(P)),T=n(4),q=n(24),E=n(10),J=n(236),_=n(241),D=n(243),R=n(244),U=n(245),B=n(227),z=n(246),L=n(242),F=n(224),G=n(238),M=n(233),Q=n(230),Y=n(225),H=n(229);function V(e,t,n){return Object(N.jsxs)(Y.a,{onChange:n,select:!0,label:"".concat(e[0].toUpperCase()).concat(e.substr(1)),name:e,sx:{minWidth:300},children:[Object(N.jsx)(H.a,{value:"All",children:"All"}),"category"===e?t.trivia_categories.map((function(e){return Object(N.jsx)(H.a,{value:e.name,children:e.name},e.id)})):t.map((function(e){return"True/False"===e?Object(N.jsx)(H.a,{value:"boolean",children:e},"boolean"):Object(N.jsx)(H.a,{value:e.toLowerCase(),children:e},e)}))]})}var $=Object(a.createContext)(),K=n(53),X=n.n(K),Z=n(85),ee=function(){var e=Object(Z.a)(X.a.mark((function e(){var t;return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://opentdb.com/api_token.php?command=request").then((function(e){return e.json()})).then((function(e){return e.token}));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),te=function(){var e=Object(Z.a)(X.a.mark((function e(t){var n;return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.gravatar.com/avatar/".concat(t));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ne=function(){var e=Object(Z.a)(X.a.mark((function e(t,n){var a,r,i;return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object.keys(n),r="https://opentdb.com/api.php?amount=5&encode=url3986",a.forEach((function(e,t){"All"!==n[e]&&(r+="&".concat(a[t],"=").concat(n[e]))})),e.next=5,fetch("".concat(r,"&").concat(t)).then((function(e){return e.json()})).then((function(e){return e.results}));case 5:return i=e.sent,e.abrupt("return",i);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();var ae=function(e){var t=Object(a.useState)(!1),n=Object(E.a)(t,2),r=n[0],i=n[1],c=Object(a.useState)(!1),o=Object(E.a)(c,2),s=o[0],l=o[1],u=Object(a.useState)({category:"All",difficulty:"All",type:"All"}),d=Object(E.a)(u,2),j=d[0],b=d[1],m=Object(a.useContext)($).setNewSetting,h=JSON.parse(localStorage.getItem("categories"));function p(e){var t=e.target,n=t.name,a=t.value;if("category"===n){var r=h.trivia_categories.find((function(e){return e.name===a}));b(Object(q.a)(Object(q.a)({},j),{},Object(T.a)({},n,r?r.id:"All")))}else b(Object(q.a)(Object(q.a)({},j),{},Object(T.a)({},n,a)))}return Object(N.jsxs)(z.a,{component:"main",maxWidth:"sx",children:[Object(N.jsx)(f.a,{}),Object(N.jsxs)(v.a,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(N.jsxs)(G.a,{container:!0,direction:"row",alignItems:"center",justifyContent:"center",sx:{mb:2,mt:-2},children:[Object(N.jsx)(L.a,{variant:"h2",children:"Settings"}),Object(N.jsx)(F.a,{sx:{fontSize:55}})]}),Object(N.jsx)(v.a,{component:"form",noValidate:!0,sx:{mt:1},children:Object(N.jsxs)(M.a,{sx:{m:1,minWidth:120},children:[V("category",h,p),Object(N.jsx)("br",{}),V("difficulty",["Easy","Medium","Hard"],p),Object(N.jsx)("br",{}),V("type",["Multiple","True/False"],p),Object(N.jsx)("br",{})]})}),Object(N.jsx)(B.a,{type:"button",onClick:function(){l(!0),m(j);var t=localStorage.getItem("token");ne(t,j).then((function(t){t.length?e.history.push("/trivia-game"):(i(!0),l(!1))}))},variant:"contained",size:"medium",color:"primary",children:"Return"})]}),Object(N.jsxs)(J.a,{open:r,onClose:function(){return i(!1)},"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(N.jsx)(_.a,{id:"alert-dialog-title",children:"Error: Unable to find questions with the current settings."}),Object(N.jsx)(D.a,{children:Object(N.jsx)(R.a,{id:"alert-dialog-description",children:"Please change the Category, Difficulty and/or Type."})}),Object(N.jsx)(U.a,{children:Object(N.jsx)(B.a,{onClick:function(){return i(!1)},autofocus:!0,children:"Close"})})]}),Object(N.jsx)(Q.a,{sx:{color:"#fff"},open:s,onClick:function(){return l(!1)},children:Object(N.jsx)(x.a,{color:"inherit"})})]})},re=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){var e=JSON.parse(localStorage.getItem("state")).player,t=this.props.history;return Object(N.jsxs)(w.a,{component:"main",maxWidth:"md",sx:{pb:5},children:[Object(N.jsx)(f.a,{}),Object(N.jsxs)(v.a,{sx:{marginTop:2,display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(N.jsx)(I.a,{sx:{maxWidth:400,my:1,mx:"auto",p:2},children:Object(N.jsxs)(G.a,{container:!0,wrap:"nowrap",spacing:2,children:[Object(N.jsx)(G.a,{item:!0,children:Object(N.jsx)(C.a,{"data-testid":"header-profile-picture",src:e.picture,alt:"avatar"})}),Object(N.jsx)(G.a,{item:!0,xs:!0,children:Object(N.jsx)(S.a,{sx:{fontWeight:"bold",mt:-1},variant:"h6",color:"text.secondary",children:e.name})})]})}),Object(N.jsxs)(I.a,{variant:"outlined",sx:{p:3,display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(N.jsx)(I.a,{elevation:"3",sx:{textAlign:"center",p:1,px:2},children:Object(N.jsx)(S.a,{variant:"h5",color:"text.primary",children:"Score: ".concat(e.score," points")})}),Object(N.jsx)(S.a,{sx:{py:1},variant:"h6",color:"text.primary",children:"Correct answers: ".concat(e.assertions)}),Object(N.jsx)(S.a,{variant:"body1",sx:{py:1,fontStyle:"oblique",fontWeight:"regular",textDecoration:"underline",fontSize:18},children:e.assertions<3?"You can do better...":"Good Job!"}),Object(N.jsx)(k.a,{variant:"outlined","data-testid":"btn-play-again",color:"primary",onClick:function(){return t.push("/trivia-game")},sx:{my:1},children:"Play Again"}),Object(N.jsx)(k.a,{variant:"contained","data-testid":"btn-ranking",color:"primary",onClick:function(){return t.push("/trivia-game/ranking")},children:"Ranking"})]})]})]})}}]),n}(a.Component),ie=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;return Object(j.a)(this,n),(e=t.call(this)).state={},e}return Object(b.a)(n,[{key:"render",value:function(){var e=JSON.parse(localStorage.getItem("ranking")),t=this.props.history;return Object(N.jsxs)("div",{children:[Object(N.jsx)("h2",{"data-testid":"ranking-title",children:"Ranking"}),Object(N.jsx)("ul",{children:e&&e.sort((function(e,t){return t.score-e.score})).map((function(e,t){return Object(N.jsxs)("li",{children:[Object(N.jsx)("span",{"data-testid":"player-name-".concat(t),children:e.name}),Object(N.jsx)("span",{"data-testid":"player-score-".concat(t),children:e.score})]},t)}))}),Object(N.jsx)("button",{type:"button","data-testid":"btn-go-home",onClick:function(){return t.push("/trivia-game")},children:"Play Again"})]})}}]),n}(r.a.Component),ce=n(114),oe=n.n(ce),se=n(226),le="SET_PLAYER_INFO",ue="SET_QUESTIONS",de="SET_SETTINGS",je=(n(158),n.p+"static/media/trivia.7e9181d3.png");function be(e){var t=e.name,n=e.user,a=e.handler;return Object(N.jsx)(B.a,{type:"Play"===t?"submit":"button",fullWidth:!0,disabled:"Play"===t&&!n.name,onClick:function(){return"Play"!==t&&a()},variant:"contained",sx:{mt:3,mb:2},color:"Play"===t?"primary":"secondary",children:t})}var me=n(247);function he(e){var t=e.name,n=e.handler,a=e.value;return Object(N.jsx)(Y.a,{type:"email"===t?"email":"text",margin:"normal",required:"name"===t,fullWidth:!0,id:"".concat(t[0].toUpperCase()).concat(t.substr(1)),label:"email"===t?"Gravatar email:":"Name:",name:t,autoComplete:t,onChange:n,value:a,helperText:"email"===t&&Object(N.jsx)(me.a,{href:"https://en.gravatar.com/",target:"_blank",underline:"always",children:"Gravatar"})})}var pe=n(118),xe=Object(pe.a)({palette:{background:{default:"#fafafa"},primary:{main:"#212121"},secondary:{main:"#9e9e9e"}}}),fe=Object(se.a)((function(){var e;return{logo:(e={height:"6em"},Object(T.a)(e,xe.breakpoints.up("sm"),{height:"9em"}),Object(T.a)(e,"marginBottom","1em"),Object(T.a)(e,"animation","shake infinite 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both"),e)}}));var Oe=Object(s.b)((function(e){return{player:e.user.player}}),(function(e){return{sendQuestions:function(t){return e(function(e){return{type:ue,payload:e}}(t))},sendPlayer:function(t){return e(function(e){return{type:le,payload:e}}(t))}}}))((function(e){var t=e.sendQuestions,n=e.sendPlayer,r=e.player,i=Object(a.useContext)($).settings,c=Object(a.useState)(!1),o=Object(E.a)(c,2),s=o[0],l=o[1],d=JSON.parse(localStorage.getItem("categories")),j=Object(u.f)(),b=fe(),m=Object(a.useState)({name:r.name,email:r.email}),h=Object(E.a)(m,2),p=h[0],O=h[1];function g(e){var t=e.target,n=t.name,a=t.value;O(Object(q.a)(Object(q.a)({},p),{},Object(T.a)({},n,a)))}return Object(a.useEffect)((function(){ee().then((function(e){localStorage.setItem("token",e)}))}),[]),Object(N.jsxs)(z.a,{component:"main",maxWidth:"xs",children:[Object(N.jsx)(f.a,{}),Object(N.jsxs)(v.a,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(N.jsx)("img",{src:je,className:b.logo,alt:"logo"}),Object(N.jsxs)(v.a,{component:"form",onSubmit:function(e){e.preventDefault(),l(!0);var a=oe()(p.email).toString();te(a).then((function(e){var t=e.url;O(Object(q.a)(Object(q.a)({},p),{},{avatar:t})),n(Object(q.a)(Object(q.a)({},p),{},{avatar:t}))})),ne(localStorage.getItem("token"),i).then((function(e){t(e),j.push("/trivia-game/game")}))},sx:{mt:1},children:[Object(N.jsx)(he,{name:"name",value:p.name,handler:g}),Object(N.jsx)(he,{name:"email",value:p.email,handler:g}),Object(N.jsx)(be,{name:"Play",user:p}),Object(N.jsx)(be,{name:"Settings",user:p,handler:function(){l(!0),d?j.push("/trivia-game/settings"):fetch("https://opentdb.com/api_category.php").then((function(e){return e.json()})).then((function(e){return localStorage.setItem("categories",JSON.stringify(e))})).then((function(){j.push("/trivia-game/settings")}))}})]})]}),Object(N.jsx)(Q.a,{sx:{color:"#fff"},open:s,onClick:function(){return l(!1)},children:Object(N.jsx)(x.a,{color:"inherit"})})]})}));var ge=function(e){var t=e.children,n=Object(a.useState)({category:"All",difficulty:"All",type:"All"}),r=Object(E.a)(n,2),i=r[0],c=r[1];return Object(N.jsx)($.Provider,{value:{settings:i,setNewSetting:function(e){c(e)}},children:t})};function ve(){return Object(N.jsx)(ge,{children:Object(N.jsxs)(u.c,{children:[Object(N.jsx)(u.a,{exact:!0,path:"/trivia-game",component:Oe}),Object(N.jsx)(u.a,{path:"/trivia-game/game",component:W}),Object(N.jsx)(u.a,{path:"/trivia-game/settings",component:ae}),Object(N.jsx)(u.a,{path:"/trivia-game/feedback",component:re}),Object(N.jsx)(u.a,{path:"/trivia-game/ranking",component:ie})]})})}var ye=n(57),ke=n(116),Se=n(117),we={player:{name:"",email:""},questions:"",settings:{category:"All",difficulty:"All",type:"All"}},Ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case le:return Object(q.a)(Object(q.a)({},e),{},{player:t.payload});case ue:return Object(q.a)(Object(q.a)({},e),{},{questions:t.payload});case de:return Object(q.a)(Object(q.a)({},e),{},{settings:t.payload});default:return e}},Ie=Object(ye.combineReducers)({user:Ce}),Ae=Object(ye.createStore)(Ie,Object(ke.composeWithDevTools)(Object(ye.applyMiddleware)(Se.a)));window.Cypress&&(window.store=Ae);var Ne=Ae;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(Object(N.jsx)(o.a,{children:Object(N.jsx)(s.a,{store:Ne,children:Object(N.jsx)(l.c,{theme:xe,children:Object(N.jsx)(ve,{})})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[162,1,2]]]);
//# sourceMappingURL=main.eb32bdd3.chunk.js.map