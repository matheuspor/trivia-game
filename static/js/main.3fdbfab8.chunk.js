(this["webpackJsonptrivia-game"]=this["webpackJsonptrivia-game"]||[]).push([[0],{41:function(e,t,n){},53:function(e,t){},54:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(13),i=n.n(c),s=(n(41),n(17)),o=n(18),u=n(3),l=n(30),d=n(15),b=n(16),p=n(24),j=n(21),h=n(19),m=n(1),f=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).state={clicked:!1,timer:30,questionNumber:0,PlayerScore:0,PlayerAssertions:0},a.handleClick=a.handleClick.bind(Object(p.a)(a)),a.setTimer=a.setTimer.bind(Object(p.a)(a)),a}return Object(b.a)(n,[{key:"componentDidMount",value:function(){this.setTimer(),this.updateLocalStorage()}},{key:"componentWillUnmount",value:function(){var e=JSON.parse(localStorage.getItem("state")),t={name:e.player.name,score:e.player.score,picture:e.player.picture},n=JSON.parse(localStorage.getItem("ranking"));n?localStorage.setItem("ranking",JSON.stringify([].concat(Object(l.a)(n),[t]))):localStorage.setItem("ranking",JSON.stringify([t]))}},{key:"setTimer",value:function(){var e=this;this.setState({timer:30});var t=setInterval((function(){e.setState((function(e){return{timer:e.timer-1}}),(function(){var n=e.state,a=n.timer,r=n.clicked;(a<=0||r)&&(clearInterval(t),e.setState({clicked:!0}))}))}),1e3)}},{key:"handleClick",value:function(e){var t=this,n=e.target,a=this.state,r=a.timer,c=a.questionNumber,i=this.props.questions[c].difficulty,s={easy:1,medium:2,hard:3};"correct-answer"===n.name&&this.setState((function(e){return{PlayerScore:e.PlayerScore+10+r*s[i],PlayerAssertions:e.PlayerAssertions+1}})),this.setState({clicked:!0},(function(){t.updateLocalStorage()}))}},{key:"updateLocalStorage",value:function(){var e=this.state,t=e.PlayerAssertions,n=e.PlayerScore,a=this.props.player,r={player:{name:a.nome,assertions:t,score:n,gravatarEmail:a.email,picture:a.avatar}};localStorage.setItem("state",JSON.stringify(r))}},{key:"randomAnswers",value:function(e){var t=this,n=this.state,a=n.questionNumber,r=n.clicked,c=[e[a].correct_answer].concat(Object(l.a)(e[a].incorrect_answers)).sort();return Object(m.jsx)("ul",{children:c.map((function(n,c){return n===e[a].correct_answer?Object(m.jsx)("button",{type:"button",onClick:t.handleClick,"data-testid":"correct-answer",disabled:r,id:"correct",className:r?"green-border":"",name:"correct-answer",children:decodeURIComponent(n)},c):Object(m.jsx)("button",{type:"button",disabled:r,id:c,className:r?"red-border":"",name:"wrong-answer","data-testid":"wrong-answer-".concat(c),onClick:t.handleClick,children:decodeURIComponent(n)},c)}))})}},{key:"nextButton",value:function(e){var t=this,n=this.props,a=n.history;e<n.questions.length-1?this.setState((function(e){return{questionNumber:e.questionNumber+1,clicked:!1}}),(function(){t.setTimer()})):a.push("/feedback")}},{key:"render",value:function(){var e=this,t=this.props,n=t.player,a=t.questions,r=this.state,c=r.timer,i=r.questionNumber,s=r.PlayerScore,o=r.clicked;return Object(m.jsxs)("div",{children:[Object(m.jsx)("p",{children:c}),Object(m.jsxs)("header",{children:[Object(m.jsx)("img",{alt:"avatar","data-testid":"header-profile-picture",src:n.avatar}),Object(m.jsxs)("h4",{"data-testid":"header-player-name",children:["Nome:",n.nome," ",Object(m.jsxs)("span",{"data-testid":"header-score",children:["Score:",s]})]})]}),Object(m.jsxs)("div",{children:[Object(m.jsxs)("p",{"data-testid":"question-category",children:["Category:",decodeURIComponent(a[i].category)]}),Object(m.jsx)("h3",{"data-testid":"question-text",children:decodeURIComponent(a[i].question)}),this.randomAnswers(a)]}),o&&Object(m.jsx)("input",{type:"button","data-testid":"btn-next",onClick:function(){return e.nextButton(i)},value:"Pr\xf3xima"})]})}}]),n}(r.a.Component),O=Object(o.b)((function(e){return{questions:e.user.questions,player:e.user.player}}))(f),g=n(11),v=n(4),y=n(12);function x(e,t,n){return Object(m.jsxs)("label",{htmlFor:e,children:["".concat(e[0].toUpperCase()).concat(e.substr(1),":"),Object(m.jsxs)("select",{id:e,name:e,onChange:n,children:[Object(m.jsx)("option",{children:" All "}),"category"===e?t.trivia_categories.map((function(e){return Object(m.jsx)("option",{children:e.name},e.id)})):t.map((function(e){return"True/False"===e?Object(m.jsx)("option",{value:"boolean",children:e},"boolean"):Object(m.jsx)("option",{value:e.toLowerCase(),children:e},e)}))]})]})}var k=Object(a.createContext)();var S=function(){var e=Object(a.useState)({category:"All",difficulty:"All",type:"All"}),t=Object(y.a)(e,2),n=t[0],r=t[1],c=Object(u.f)(),i=Object(a.useContext)(k),s=i.setNewSetting,o=i.categories;function l(e){var t=e.target,a=t.name,c=t.value;if("category"===a){var i=o.trivia_categories.find((function(e){return e.name===c}));r(Object(v.a)(Object(v.a)({},n),{},Object(g.a)({},a,i?i.id:"All")))}else r(Object(v.a)(Object(v.a)({},n),{},Object(g.a)({},a,c)))}return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h2",{"data-testid":"settings-title",children:"Settings"}),x("category",o,l),Object(m.jsx)("br",{}),x("difficulty",["Easy","Medium","Hard"],l),Object(m.jsx)("br",{}),x("type",["Multiple","True/False"],l),Object(m.jsx)("br",{}),Object(m.jsx)("button",{type:"button",onClick:function(){s(n),c.push("/trivia-game")},children:" Voltar "})]})},w=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){var e=JSON.parse(localStorage.getItem("state")).player;return Object(m.jsxs)("div",{"data-testid":"feedback-text",children:[Object(m.jsx)("h1",{"data-testid":"header-player-name",children:e.name}),Object(m.jsx)("img",{"data-testid":"header-profile-picture",src:e.picture,alt:"avatar"}),Object(m.jsx)("p",{"data-testid":"header-score",children:e.score}),Object(m.jsx)("p",{"data-testid":"feedback-total-score",children:e.score}),Object(m.jsx)("p",{"data-testid":"feedback-total-question",children:e.assertions}),e.assertions<3?"Podia ser melhor...":"Mandou bem!",Object(m.jsx)(s.b,{to:"/trivia-game",children:Object(m.jsx)("button",{type:"button","data-testid":"btn-play-again",children:"Jogar novamente"})}),Object(m.jsx)(s.b,{to:"/ranking",children:Object(m.jsx)("button",{type:"button","data-testid":"btn-ranking",children:"Ver Ranking"})})]})}}]),n}(a.Component),C=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(d.a)(this,n),(e=t.call(this)).state={},e}return Object(b.a)(n,[{key:"render",value:function(){var e=JSON.parse(localStorage.getItem("ranking")),t=this.props.history;return Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{"data-testid":"ranking-title",children:"Ranking"}),Object(m.jsx)("ul",{children:e&&e.sort((function(e,t){return t.score-e.score})).map((function(e,t){return Object(m.jsxs)("li",{children:[Object(m.jsx)("span",{"data-testid":"player-name-".concat(t),children:e.name}),Object(m.jsx)("span",{"data-testid":"player-score-".concat(t),children:e.score})]},t)}))}),Object(m.jsx)("button",{type:"button","data-testid":"btn-go-home",onClick:function(){return t.push("/trivia-game")},children:"Play Again"})]})}}]),n}(r.a.Component),A=n(6),N=n.n(A),q=n(10),I=n(34),P=n.n(I),T="SET_PLAYER_INFO",J="SET_QUESTIONS",E="SET_SETTINGS",_=(n(54),n.p+"static/media/trivia.7e9181d3.png"),U=function(){var e=Object(q.a)(N.a.mark((function e(){var t;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://opentdb.com/api_token.php?command=request").then((function(e){return e.json()})).then((function(e){return e.token}));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),R=function(){var e=Object(q.a)(N.a.mark((function e(t){var n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.gravatar.com/avatar/".concat(t));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),F=function(){var e=Object(q.a)(N.a.mark((function e(t,n){var a,r,c;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object.keys(n),r="https://opentdb.com/api.php?amount=5&encode=url3986",a.forEach((function(e,t){"All"!==n[e]&&(r+="&".concat(a[t],"=").concat(n[e]))})),e.next=5,fetch("".concat(r,"&").concat(t)).then((function(e){return e.json()})).then((function(e){return e.results}));case 5:return c=e.sent,e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),B=function(){var e=Object(q.a)(N.a.mark((function e(){var t;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://opentdb.com/api_category.php").then((function(e){return e.json()}));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function L(e,t){return Object(m.jsxs)("label",{htmlFor:e,children:["".concat(e[0].toUpperCase()).concat(e.substr(1),":"),Object(m.jsx)("input",{type:"email"===e?"email":"text",name:e,id:e,"data-testid":"email"===e?"input-gravatar-email":"input-player-name",onChange:t})]})}var M=n(26);function W(e,t,n){return Object(m.jsx)("button",{type:"Jogar"===e?"submit":"button","data-testid":"Jogar"===e?"btn-play":"btn-settings",disabled:"Jogar"===e&&(!t.email||!t.nome),onClick:"Jogar"===e?function(){M.b.loading("Buscando Perguntas!",{position:"bottom-center"})}:function(){return n()},children:e})}n(55);var D=Object(o.b)(null,(function(e){return{sendToken:function(t){return e(function(e){return{type:J,payload:e}}(t))},sendPlayer:function(t){return e(function(e){return{type:T,payload:e}}(t))}}}))((function(e){var t=e.sendToken,n=e.sendPlayer,r=Object(a.useContext)(k).settings,c=Object(u.f)(),i=Object(a.useState)({nome:"",email:""}),s=Object(y.a)(i,2),o=s[0],l=s[1];function d(){return(d=Object(q.a)(N.a.mark((function e(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c.push("/settings");case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(e){var t=e.target,n=t.name,a=t.value;l(Object(v.a)(Object(v.a)({},o),{},Object(g.a)({},n,a)))}function p(){return(p=Object(q.a)(N.a.mark((function e(n){var a,c,i,s;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,U();case 3:return a=e.sent,e.next=6,F(a,r);case 6:return c=e.sent,localStorage.setItem("token",a),t(c),i=P()(o.email).toString(),e.next=12,R(i);case 12:s=e.sent,l(Object(v.a)(Object(v.a)({},o),{},{avatar:s.url}));case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){o.avatar&&(n(o),c.push("/game"))})),Object(m.jsxs)("form",{className:"App-header",onSubmit:function(e){return p.apply(this,arguments)},children:[Object(m.jsx)("img",{src:_,className:"App-logo",alt:"logo"}),Object(m.jsx)("p",{children:"SUA VEZ"}),L("nome",b),L("email",b),W("Jogar",o),Object(m.jsx)(M.a,{}),W("Configura\xe7\xf5es",o,(function(){return d.apply(this,arguments)}))]})}));var V=function(e){var t=e.children,n=Object(a.useState)({category:"All",difficulty:"All",type:"All"}),r=Object(y.a)(n,2),c=r[0],i=r[1],s=Object(a.useState)(),o=Object(y.a)(s,2),u=o[0],l=o[1];return Object(a.useEffect)((function(){B().then((function(e){return l(e)}))}),[]),Object(m.jsx)(k.Provider,{value:{settings:c,setNewSetting:function(e){i(e)},setCategories:l,categories:u},children:t})};function G(){return Object(m.jsx)(V,{children:Object(m.jsxs)(u.c,{children:[Object(m.jsx)(u.a,{exact:!0,path:"/trivia-game",component:D}),Object(m.jsx)(u.a,{path:"/game",component:O}),Object(m.jsx)(u.a,{path:"/settings",component:S}),Object(m.jsx)(u.a,{path:"/feedback",component:w}),Object(m.jsx)(u.a,{path:"/ranking",component:C})]})})}var H=n(20),Q=n(35),Y=n(36),Z={player:{},questions:"",settings:{category:"All",difficulty:"All",type:"All"}},$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T:return Object(v.a)(Object(v.a)({},e),{},{player:t.payload});case J:return Object(v.a)(Object(v.a)({},e),{},{questions:t.payload});case E:return Object(v.a)(Object(v.a)({},e),{},{settings:t.payload});default:return e}},z=Object(H.combineReducers)({user:$}),K=Object(H.createStore)(z,Object(Q.composeWithDevTools)(Object(H.applyMiddleware)(Y.a)));window.Cypress&&(window.store=K);var X=K;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(m.jsx)(s.a,{children:Object(m.jsx)(o.a,{store:X,children:Object(m.jsx)(G,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[56,1,2]]]);
//# sourceMappingURL=main.3fdbfab8.chunk.js.map