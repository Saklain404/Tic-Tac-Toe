(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{16:function(e,c,t){},20:function(e,c,t){},23:function(e,c,t){"use strict";t.r(c);var n=t(1),s=t.n(n),a=t(7),o=t.n(a),r=(t(16),t(11)),i=t(25),l=t(26),j=t(27),b=t(30),m=t(28),u=t(29),d=t(8),x=t(2),O=function(e){switch(e.name){case"circle":return Object(x.jsx)(d.b,{className:"icon"});case"cross":return Object(x.jsx)(d.c,{className:"icon"});default:return Object(x.jsx)(d.a,{className:"icon"})}},h=t(9),p=(t(18),t(19),t(20),new Array(9).fill("empty")),f=function(){var e=Object(n.useState)(!1),c=Object(r.a)(e,2),t=c[0],s=c[1],a=Object(n.useState)(""),o=Object(r.a)(a,2),d=o[0],f=o[1],y=function(){s(!1),f(""),p.fill("empty",0,9)},w=function(e){return d?Object(h.b)(d,{type:"success"}):"empty"!==p[e]?Object(h.b)("already filled",{type:"error"}):(p[e]=t?"cross":"circle",s(!t),void(p[0]===p[1]&&p[0]===p[2]&&"empty"!==p[0]?f("".concat(p[0]," won")):"empty"!==p[3]&&p[3]===p[4]&&p[4]===p[5]?f("".concat(p[3]," won")):"empty"!==p[6]&&p[6]===p[7]&&p[7]===p[8]?f("".concat(p[6]," won")):"empty"!==p[0]&&p[0]===p[3]&&p[3]===p[6]?f("".concat(p[0]," won")):"empty"!==p[1]&&p[1]===p[4]&&p[4]===p[7]?f("".concat(p[1]," won")):"empty"!==p[2]&&p[2]===p[5]&&p[5]===p[8]?f("".concat(p[2]," won")):"empty"!==p[0]&&p[0]===p[4]&&p[4]===p[8]?f("".concat(p[0]," won")):"empty"!==p[2]&&p[2]===p[4]&&p[4]===p[6]&&f("".concat(p[2]," won"))))};return Object(x.jsxs)(i.a,{className:"p-5",children:[Object(x.jsx)(h.a,{position:"bottom-center"}),Object(x.jsx)(l.a,{children:Object(x.jsxs)(j.a,{md:6,className:"offset-md-3",children:[d?Object(x.jsxs)("div",{className:"mb-2 mt-2",children:[Object(x.jsx)("h1",{className:"text-warning text-uppercase text-center ",children:d}),Object(x.jsxs)(b.a,{color:"success",block:!0,onClick:y,children:[" ","Reload the game"]})]}):Object(x.jsxs)("h1",{className:"text-center text-warning",children:[t?"Cross":"Circle"," Turns"]}),Object(x.jsx)("div",{className:"grid",children:p.map((function(e,c){return Object(x.jsx)(m.a,{color:"warning",onClick:function(){return w(c)},children:Object(x.jsx)(u.a,{className:"box",children:Object(x.jsx)(O,{name:e})})})}))})]})}),Object(x.jsx)("div",{className:"btn mt-5",children:Object(x.jsxs)(b.a,{block:!0,onClick:y,color:"success",children:[" ","Reload the game"]})})]})},y=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,31)).then((function(c){var t=c.getCLS,n=c.getFID,s=c.getFCP,a=c.getLCP,o=c.getTTFB;t(e),n(e),s(e),a(e),o(e)}))};o.a.render(Object(x.jsx)(s.a.StrictMode,{children:Object(x.jsx)(f,{})}),document.getElementById("root")),y()}},[[23,1,2]]]);
//# sourceMappingURL=main.b98bed9a.chunk.js.map