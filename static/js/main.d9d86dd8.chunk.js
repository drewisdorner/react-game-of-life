(this["webpackJsonpgame-of-life"]=this["webpackJsonpgame-of-life"]||[]).push([[0],{11:function(t,e,n){},12:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r),c=n(4),a=n.n(c),u=n(1),i=n(2);function f(){var t=window;return{width:t.innerWidth,height:t.innerHeight}}n(11);var l=[[0,1],[0,-1],[1,-1],[-1,1],[1,1],[-1,-1],[1,0],[-1,0]],s=function(){var t=function(){var t=Object(r.useState)(f()),e=Object(u.a)(t,2),n=e[0],o=e[1];return Object(r.useEffect)((function(){function t(){o(f())}return window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)}}),[]),n}(),e=t.width,n=t.height,c=Object(r.useState)((function(){return Math.floor(n/23)})),a=Object(u.a)(c,1)[0],s=Object(r.useState)((function(){return Math.floor(e/21)})),d=Object(u.a)(s,1)[0],b=function(){for(var t=[],e=0;e<a;e++)t.push(Array.from(Array(d),(function(){return 0})));return t},m=Object(r.useState)((function(){return b()})),h=Object(u.a)(m,2),v=h[0],p=h[1],g=Object(r.useState)(!1),j=Object(u.a)(g,2),O=j[0],E=j[1],w=Object(r.useRef)(O);w.current=O;var k=Object(r.useCallback)((function(){console.log("runSimulation!"),w.current&&(p((function(t){return console.log("setGrid!"),Object(i.a)(t,(function(e){for(var n=function(n){for(var r=function(r){var o=0;l.forEach((function(e){var c=Object(u.a)(e,2),i=c[0],f=c[1],l=n+i,s=r+f;l>=0&&l<a&&s>=0&&s<d&&(o+=t[l][s])})),o<2||o>3?e[n][r]=0:0===t[n][r]&&3===o&&(e[n][r]=1)},o=0;o<d;o++)r(o)},r=0;r<a;r++)n(r)}))})),setTimeout(k,100))}),[d,a]);return o.a.createElement(o.a.Fragment,null,o.a.createElement("button",{onClick:function(){console.log("start/stop click!"),E(!O),O||(w.current=!0,k())}},O?"stop":"start"),o.a.createElement("button",{onClick:function(){for(var t=[],e=0;e<a;e++)t.push(Array.from(Array(d),(function(){return Math.random()>.7?1:0})));p(t)}},"random"),o.a.createElement("button",{onClick:function(){p(b())}},"clear"),o.a.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat(".concat(d,", 20px)")}},v.map((function(t,e){return t.map((function(t,n){return o.a.createElement("div",{key:"".concat(e,"-").concat(n),onClick:function(){var t=Object(i.a)(v,(function(t){t[e][n]=v[e][n]?0:1}));p(t)},style:{width:20,height:20,backgroundColor:v[e][n]?"#732d91":void 0,border:"solid 0.5px lightgray"}})}))}))))};a.a.render(o.a.createElement(s,null),document.getElementById("root"))},5:function(t,e,n){t.exports=n(12)}},[[5,1,2]]]);
//# sourceMappingURL=main.d9d86dd8.chunk.js.map