(this["webpackJsonpreact-ui"]=this["webpackJsonpreact-ui"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),s=n(3),a=n.n(s),o=(n(12),n(4)),i=n(5),h=n(7),u=n(6),l=(n.p,n(13),n(14),n(15),n(0)),d=function(e){return Object(l.jsxs)("div",{className:"card-container",children:[Object(l.jsx)("img",{alt:"monster",src:"https://robohash.org/".concat(e.monster.id,"?set=set2")}),Object(l.jsx)("h1",{children:e.monster.name}),Object(l.jsx)("h2",{children:e.monster.email})]})},j=function(e){return Object(l.jsx)("div",{className:"card-list",children:e.monsters.map((function(e){return Object(l.jsx)(d,{monster:e},e.id)}))})},f=(n(17),function(e,t){return Object(l.jsx)("input",{className:"search",type:"search",placeholder:e,onChange:t})}),m=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).handleChange=function(t){e.setState({searchField:t.target.value})},e.state={monsters:[],searchField:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t})}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.monsters,c=t.searchField,r=n.filter((function(e){return e.name.toLowerCase().includes(c.toLowerCase())}));return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("h1",{children:" Monster Rolodex"}),Object(l.jsx)("input",{type:"search",placeholder:"Search Monster",onChange:function(t){return e.setState({searchField:t.target.value})}}),Object(l.jsx)(f,{placeholder:"Search Monster",handleChange:this.handleChange}),Object(l.jsx)(j,{monsters:r})]})}}]),n}(c.Component),b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),s(e),a(e)}))};a.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(m,{})}),document.getElementById("root")),b()}],[[18,1,2]]]);
//# sourceMappingURL=main.47c38ecc.chunk.js.map