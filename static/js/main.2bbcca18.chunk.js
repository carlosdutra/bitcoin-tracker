(this["webpackJsonpbitcoin-tracker"]=this["webpackJsonpbitcoin-tracker"]||[]).push([[0],{175:function(e,t,i){},176:function(e,t,i){"use strict";i.r(t);var c=i(0),n=i.n(c),o=i(58),d=i.n(o),s=(i(65),i(66),i(10)),l=(i(67),i(1)),r=function(e){var t;return Object(l.jsxs)("div",{className:"rate__wrap",children:[Object(l.jsx)("div",{className:"rate__code",children:e.code}),Object(l.jsx)("div",{className:"rate__desc",children:e.desc}),Object(l.jsxs)("div",{className:"rate__rate",children:[e.symbol,null===(t=e.rate)||void 0===t?void 0:t.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")]})]})},a=i(37),b=function(){var e=Object(c.useState)([]),t=Object(s.a)(e,2),i=t[0],n=t[1],o=Object(c.useState)([]),d=Object(s.a)(o,2),r=d[0],b=d[1],j=Object(c.useState)(""),u=Object(s.a)(j,2),v=u[0],p=u[1];Object(c.useEffect)((function(){fetch("https://api.coindesk.com/v1/bpi/historical/close.json").then((function(e){return e.json()})).then((function(e){var t;n(Object.values(e.bpi)),b(Object.keys(e.bpi)),p(null===(t=e.time)||void 0===t?void 0:t.updated)}))}),[i,r,v]),a.b.animation=!1;return Object(l.jsxs)("div",{children:[Object(l.jsx)("p",{children:v}),Object(l.jsx)(a.a,{data:function(e){e.getContext("2d");return{labels:r,datasets:[{label:"Bitcoin price in USD",lineTension:0,backgroundColor:"tomato",borderColor:"rgba(0,0,0)",borderWidth:2,data:i}]}}})]})},j=(i(175),function(){var e,t,i,n,o,d,a,j,u,v,p,O,h,f,x,m,_,S,g,k=Object(c.useState)([]),N=Object(s.a)(k,2),y=N[0],U=N[1];return Object(c.useEffect)((function(){fetch("https://api.coindesk.com/v1/bpi/currentprice.json").then((function(e){return e.json()})).then((function(e){U(e),console.log(e)}))}),[y]),Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{className:"bitcoin__title",children:[Object(l.jsxs)("h2",{children:[y.chartName," now"]}),Object(l.jsxs)("p",{children:["Last updated: ",null===(e=y.time)||void 0===e?void 0:e.updated]})]}),Object(l.jsxs)("div",{className:"grid__rates",children:[Object(l.jsx)(r,{code:null===(t=y.bpi)||void 0===t||null===(i=t.USD)||void 0===i?void 0:i.code,desc:null===(n=y.bpi)||void 0===n||null===(o=n.USD)||void 0===o?void 0:o.description,rate:null===(d=y.bpi)||void 0===d||null===(a=d.USD)||void 0===a?void 0:a.rate_float,symbol:"$"}),Object(l.jsx)(r,{code:null===(j=y.bpi)||void 0===j||null===(u=j.EUR)||void 0===u?void 0:u.code,desc:null===(v=y.bpi)||void 0===v||null===(p=v.EUR)||void 0===p?void 0:p.description,rate:null===(O=y.bpi)||void 0===O||null===(h=O.EUR)||void 0===h?void 0:h.rate_float,symbol:"\u20ac"}),Object(l.jsx)(r,{code:null===(f=y.bpi)||void 0===f||null===(x=f.GBP)||void 0===x?void 0:x.code,desc:null===(m=y.bpi)||void 0===m||null===(_=m.GBP)||void 0===_?void 0:_.description,rate:null===(S=y.bpi)||void 0===S||null===(g=S.GBP)||void 0===g?void 0:g.rate_float,symbol:"\xa3"})]}),Object(l.jsx)("h2",{children:"Last 31 days"}),Object(l.jsx)(b,{}),Object(l.jsx)("h6",{children:y.disclaimer})]})});var u=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsx)(j,{})})};d.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(u,{})}),document.getElementById("root"))},65:function(e,t,i){},66:function(e,t,i){},67:function(e,t,i){}},[[176,1,2]]]);
//# sourceMappingURL=main.2bbcca18.chunk.js.map