(this["webpackJsonptrivia-game"]=this["webpackJsonptrivia-game"]||[]).push([[0],{130:function(e,t,a){},143:function(e,t){},144:function(e,t,a){},145:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(35),i=a.n(c),s=(a(130),a(51)),o=a(52),l=a(21),u=a(16),d=a(15),j=a(42),b=a(43),m=a(64),h=a(56),p=a(54),O=a(2),f=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(j.a)(this,a),(n=t.call(this,e)).state={clicked:!1,timer:30,questionNumber:0,PlayerScore:0,PlayerAssertions:0},n.handleClick=n.handleClick.bind(Object(m.a)(n)),n.setTimer=n.setTimer.bind(Object(m.a)(n)),n}return Object(b.a)(a,[{key:"componentDidMount",value:function(){this.setTimer(),this.updateLocalStorage()}},{key:"componentWillUnmount",value:function(){var e=JSON.parse(localStorage.getItem("state")),t={name:e.player.name,score:e.player.score,picture:e.player.picture},a=JSON.parse(localStorage.getItem("ranking"));a?localStorage.setItem("ranking",JSON.stringify([].concat(Object(d.a)(a),[t]))):localStorage.setItem("ranking",JSON.stringify([t]))}},{key:"handleClick",value:function(e){var t=this,a=e.target,n=this.state,r=n.timer,c=n.questionNumber,i=this.props.questions[c].difficulty,s={easy:1,medium:2,hard:3};"correct-answer"===a.name&&this.setState((function(e){return{PlayerScore:e.PlayerScore+10+r*s[i],PlayerAssertions:e.PlayerAssertions+1}})),this.setState({clicked:!0},(function(){t.updateLocalStorage()}))}},{key:"setTimer",value:function(){var e=this;this.setState({timer:30});var t=setInterval((function(){e.setState((function(e){return{timer:e.timer-1}}),(function(){var a=e.state,n=a.timer,r=a.clicked;(n<=0||r)&&(clearInterval(t),e.setState({clicked:!0}))}))}),1e3)}},{key:"updateLocalStorage",value:function(){var e=this.state,t=e.PlayerAssertions,a=e.PlayerScore,n=this.props.player,r={player:{name:n.name,assertions:t,score:a,gravatarEmail:n.email,picture:n.avatar}};localStorage.setItem("state",JSON.stringify(r))}},{key:"randomAnswers",value:function(e){var t=this,a=this.state,n=a.questionNumber,r=a.clicked,c=[e[n].correct_answer].concat(Object(d.a)(e[n].incorrect_answers)).sort();return Object(O.jsx)("ul",{children:c.map((function(a,c){return a===e[n].correct_answer?Object(O.jsx)("button",{type:"button",onClick:t.handleClick,"data-testid":"correct-answer",disabled:r,id:"correct",className:r?"green-border":"",name:"correct-answer",children:decodeURIComponent(a)},c):Object(O.jsx)("button",{type:"button",disabled:r,id:c,className:r?"red-border":"",name:"wrong-answer","data-testid":"wrong-answer-".concat(c),onClick:t.handleClick,children:decodeURIComponent(a)},c)}))})}},{key:"nextButton",value:function(e){var t=this,a=this.props,n=a.history;e<a.questions.length-1?this.setState((function(e){return{questionNumber:e.questionNumber+1,clicked:!1}}),(function(){t.setTimer()})):n.push("/trivia-game/feedback")}},{key:"render",value:function(){var e=this,t=this.props,a=t.player,n=t.questions,r=this.state,c=r.timer,i=r.questionNumber,s=r.PlayerScore,o=r.clicked;return Object(O.jsxs)("div",{children:[Object(O.jsx)("p",{children:c}),Object(O.jsxs)("header",{children:[Object(O.jsx)("img",{alt:"avatar","data-testid":"header-profile-picture",src:a.avatar}),Object(O.jsxs)("h4",{"data-testid":"header-player-name",children:["Nome:",a.name," ",Object(O.jsxs)("span",{"data-testid":"header-score",children:["Score:",s]})]})]}),Object(O.jsxs)("div",{children:[Object(O.jsxs)("p",{"data-testid":"question-category",children:["Category:",decodeURIComponent(n[i].category)]}),Object(O.jsx)("h3",{"data-testid":"question-text",children:decodeURIComponent(n[i].question)}),this.randomAnswers(n)]}),o&&Object(O.jsx)("input",{type:"button","data-testid":"btn-next",onClick:function(){return e.nextButton(i)},value:"Pr\xf3xima"})]})}}]),a}(r.a.Component),g=Object(o.b)((function(e){return{questions:e.user.questions,player:e.user.player}}))(f),v=a(4),x=a(19),y=a(12),k=a(219),S=a(221),w=a(223),C=a(224),I=a(225),N=a(210),P=a(226),A=a(206),q=a(222),T=a(227),J=a(229),E=a(214),_=a(216),W=a(213),R=a(212),U=a(207),D=a(209);function B(e,t,a){return Object(O.jsxs)(U.a,{onChange:a,select:!0,label:"".concat(e[0].toUpperCase()).concat(e.substr(1)),name:e,sx:{minWidth:300},children:[Object(O.jsx)(D.a,{value:"All",children:"All"}),"category"===e?t.trivia_categories.map((function(e){return Object(O.jsx)(D.a,{value:e.name,children:e.name},e.id)})):t.map((function(e){return"True/False"===e?Object(O.jsx)(D.a,{value:"boolean",children:e},"boolean"):Object(O.jsx)(D.a,{value:e.toLowerCase(),children:e},e)}))]})}var L=Object(n.createContext)(),M=a(50),z=a.n(M),F=a(78),G=function(){var e=Object(F.a)(z.a.mark((function e(){var t;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://opentdb.com/api_token.php?command=request").then((function(e){return e.json()})).then((function(e){return e.token}));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Q=function(){var e=Object(F.a)(z.a.mark((function e(t){var a;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.gravatar.com/avatar/".concat(t));case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),V=function(){var e=Object(F.a)(z.a.mark((function e(t,a){var n,r,c;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object.keys(a),r="https://opentdb.com/api.php?amount=5&encode=url3986",n.forEach((function(e,t){"All"!==a[e]&&(r+="&".concat(n[t],"=").concat(a[e]))})),e.next=5,fetch("".concat(r,"&").concat(t)).then((function(e){return e.json()})).then((function(e){return e.results}));case 5:return c=e.sent,e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}();var H=function(e){var t=Object(n.useState)(!1),a=Object(y.a)(t,2),r=a[0],c=a[1],i=Object(n.useState)(!1),s=Object(y.a)(i,2),o=s[0],l=s[1],u=Object(n.useState)({category:"All",difficulty:"All",type:"All"}),d=Object(y.a)(u,2),j=d[0],b=d[1],m=Object(n.useContext)(L).setNewSetting,h=JSON.parse(localStorage.getItem("categories"));function p(e){var t=e.target,a=t.name,n=t.value;if("category"===a){var r=h.trivia_categories.find((function(e){return e.name===n}));b(Object(x.a)(Object(x.a)({},j),{},Object(v.a)({},a,r?r.id:"All")))}else b(Object(x.a)(Object(x.a)({},j),{},Object(v.a)({},a,n)))}return Object(O.jsxs)(P.a,{component:"main",maxWidth:"sx",children:[Object(O.jsx)(A.a,{}),Object(O.jsxs)(J.a,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(O.jsxs)(_.a,{container:!0,direction:"row",alignItems:"center",justifyContent:"center",sx:{mb:2,mt:-2},children:[Object(O.jsx)(q.a,{variant:"h2",children:"Settings"}),Object(O.jsx)(E.a,{sx:{fontSize:55}})]}),Object(O.jsx)(J.a,{component:"form",noValidate:!0,sx:{mt:1},children:Object(O.jsxs)(W.a,{sx:{m:1,minWidth:120},children:[B("category",h,p),Object(O.jsx)("br",{}),B("difficulty",["Easy","Medium","Hard"],p),Object(O.jsx)("br",{}),B("type",["Multiple","True/False"],p),Object(O.jsx)("br",{})]})}),Object(O.jsx)(N.a,{type:"button",onClick:function(){l(!0),m(j);var t=localStorage.getItem("token");V(t,j).then((function(t){t.length?e.history.push("/trivia-game"):(c(!0),l(!1))}))},variant:"contained",size:"medium",color:"primary",children:"Return"})]}),Object(O.jsxs)(k.a,{open:r,onClose:function(){return c(!1)},"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(O.jsx)(S.a,{id:"alert-dialog-title",children:"Error: Unable to find questions with the current settings."}),Object(O.jsx)(w.a,{children:Object(O.jsx)(C.a,{id:"alert-dialog-description",children:"Please change the Category, Difficulty and/or Type."})}),Object(O.jsx)(I.a,{children:Object(O.jsx)(N.a,{onClick:function(){return c(!1)},autofocus:!0,children:"Close"})})]}),Object(O.jsx)(R.a,{sx:{color:"#fff"},open:o,onClick:function(){return l(!1)},children:Object(O.jsx)(T.a,{color:"inherit"})})]})},Y=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){return Object(j.a)(this,a),t.apply(this,arguments)}return Object(b.a)(a,[{key:"render",value:function(){var e=JSON.parse(localStorage.getItem("state")).player;return Object(O.jsxs)("div",{"data-testid":"feedback-text",children:[Object(O.jsx)("h1",{"data-testid":"header-player-name",children:e.name}),Object(O.jsx)("img",{"data-testid":"header-profile-picture",src:e.picture,alt:"avatar"}),Object(O.jsx)("p",{"data-testid":"header-score",children:e.score}),Object(O.jsx)("p",{"data-testid":"feedback-total-score",children:e.score}),Object(O.jsx)("p",{"data-testid":"feedback-total-question",children:e.assertions}),e.assertions<3?"Podia ser melhor...":"Mandou bem!",Object(O.jsx)(s.b,{to:"/trivia-game",children:Object(O.jsx)("button",{type:"button","data-testid":"btn-play-again",children:"Jogar novamente"})}),Object(O.jsx)(s.b,{to:"/trivia-game/ranking",children:Object(O.jsx)("button",{type:"button","data-testid":"btn-ranking",children:"Ver Ranking"})})]})}}]),a}(n.Component),$=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(j.a)(this,a),(e=t.call(this)).state={},e}return Object(b.a)(a,[{key:"render",value:function(){var e=JSON.parse(localStorage.getItem("ranking")),t=this.props.history;return Object(O.jsxs)("div",{children:[Object(O.jsx)("h2",{"data-testid":"ranking-title",children:"Ranking"}),Object(O.jsx)("ul",{children:e&&e.sort((function(e,t){return t.score-e.score})).map((function(e,t){return Object(O.jsxs)("li",{children:[Object(O.jsx)("span",{"data-testid":"player-name-".concat(t),children:e.name}),Object(O.jsx)("span",{"data-testid":"player-score-".concat(t),children:e.score})]},t)}))}),Object(O.jsx)("button",{type:"button","data-testid":"btn-go-home",onClick:function(){return t.push("/trivia-game")},children:"Play Again"})]})}}]),a}(r.a.Component),K=a(102),X=a.n(K),Z=a(208),ee="SET_PLAYER_INFO",te="SET_QUESTIONS",ae="SET_SETTINGS",ne=(a(144),a.p+"static/media/trivia.7e9181d3.png");function re(e){var t=e.name,a=e.user,n=e.handler;return Object(O.jsx)(N.a,{type:"Play"===t?"submit":"button",fullWidth:!0,disabled:"Play"===t&&!a.name,onClick:function(){return"Play"!==t&&n()},variant:"contained",sx:{mt:3,mb:2},color:"Play"===t?"primary":"secondary",children:t})}var ce=a(228);function ie(e){var t=e.name,a=e.handler,n=e.value;return Object(O.jsx)(U.a,{type:"email"===t?"email":"text",margin:"normal",required:"name"===t,fullWidth:!0,id:"".concat(t[0].toUpperCase()).concat(t.substr(1)),label:"email"===t?"Gravatar email:":"Name:",name:t,autoComplete:t,onChange:a,value:n,helperText:"email"===t&&Object(O.jsx)(ce.a,{href:"https://en.gravatar.com/",target:"_blank",underline:"always",children:"Gravatar"})})}var se=a(105),oe=Object(se.a)({palette:{background:{default:"#fafafa"},primary:{main:"#212121"},secondary:{main:"#9e9e9e"}}}),le=Object(Z.a)((function(){var e;return{logo:(e={height:"6em"},Object(v.a)(e,oe.breakpoints.up("sm"),{height:"9em"}),Object(v.a)(e,"marginBottom","1em"),Object(v.a)(e,"animation","shake infinite 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both"),e)}}));var ue=Object(o.b)((function(e){return{player:e.user.player}}),(function(e){return{sendQuestions:function(t){return e(function(e){return{type:te,payload:e}}(t))},sendPlayer:function(t){return e(function(e){return{type:ee,payload:e}}(t))}}}))((function(e){var t=e.sendQuestions,a=e.sendPlayer,r=e.player,c=Object(n.useContext)(L).settings,i=Object(n.useState)(!1),s=Object(y.a)(i,2),o=s[0],l=s[1],d=JSON.parse(localStorage.getItem("categories")),j=Object(u.f)(),b=le(),m=Object(n.useState)({name:r.name,email:r.email}),h=Object(y.a)(m,2),p=h[0],f=h[1];function g(e){var t=e.target,a=t.name,n=t.value;f(Object(x.a)(Object(x.a)({},p),{},Object(v.a)({},a,n)))}return Object(n.useEffect)((function(){G().then((function(e){localStorage.setItem("token",e)}))}),[]),Object(O.jsxs)(P.a,{component:"main",maxWidth:"xs",children:[Object(O.jsx)(A.a,{}),Object(O.jsxs)(J.a,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(O.jsx)("img",{src:ne,className:b.logo,alt:"logo"}),Object(O.jsxs)(J.a,{component:"form",onSubmit:function(e){e.preventDefault(),l(!0);var n=X()(p.email).toString();Q(n).then((function(e){var t=e.url;f(Object(x.a)(Object(x.a)({},p),{},{avatar:t})),a(Object(x.a)(Object(x.a)({},p),{},{avatar:t}))})),V(localStorage.getItem("token"),c).then((function(e){t(e),j.push("/trivia-game/game")}))},sx:{mt:1},children:[Object(O.jsx)(ie,{name:"name",value:p.name,handler:g}),Object(O.jsx)(ie,{name:"email",value:p.email,handler:g}),Object(O.jsx)(re,{name:"Play",user:p}),Object(O.jsx)(re,{name:"Settings",user:p,handler:function(){l(!0),d?j.push("/trivia-game/settings"):fetch("https://opentdb.com/api_category.php").then((function(e){return e.json()})).then((function(e){return localStorage.setItem("categories",JSON.stringify(e))})).then((function(){j.push("/trivia-game/settings")}))}})]})]}),Object(O.jsx)(R.a,{sx:{color:"#fff"},open:o,onClick:function(){return l(!1)},children:Object(O.jsx)(T.a,{color:"inherit"})})]})}));var de=function(e){var t=e.children,a=Object(n.useState)({category:"All",difficulty:"All",type:"All"}),r=Object(y.a)(a,2),c=r[0],i=r[1];return Object(O.jsx)(L.Provider,{value:{settings:c,setNewSetting:function(e){i(e)}},children:t})};function je(){return Object(O.jsx)(de,{children:Object(O.jsxs)(u.c,{children:[Object(O.jsx)(u.a,{exact:!0,path:"/trivia-game",component:ue}),Object(O.jsx)(u.a,{path:"/trivia-game/game",component:g}),Object(O.jsx)(u.a,{path:"/trivia-game/settings",component:H}),Object(O.jsx)(u.a,{path:"/trivia-game/feedback",component:Y}),Object(O.jsx)(u.a,{path:"/trivia-game/ranking",component:$})]})})}var be=a(55),me=a(103),he=a(104),pe={player:{name:"",email:""},questions:"",settings:{category:"All",difficulty:"All",type:"All"}},Oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ee:return Object(x.a)(Object(x.a)({},e),{},{player:t.payload});case te:return Object(x.a)(Object(x.a)({},e),{},{questions:t.payload});case ae:return Object(x.a)(Object(x.a)({},e),{},{settings:t.payload});default:return e}},fe=Object(be.combineReducers)({user:Oe}),ge=Object(be.createStore)(fe,Object(me.composeWithDevTools)(Object(be.applyMiddleware)(he.a)));window.Cypress&&(window.store=ge);var ve=ge;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(O.jsx)(s.a,{children:Object(O.jsx)(o.a,{store:ve,children:Object(O.jsx)(l.c,{theme:oe,children:Object(O.jsx)(je,{})})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[145,1,2]]]);
//# sourceMappingURL=main.9e166005.chunk.js.map