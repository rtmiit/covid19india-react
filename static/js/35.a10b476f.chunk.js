(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[35],{113:function(e,t,a){"use strict";var c=a(82),o=a(107),n=a(2),i=a(89),r=a(18),s=void 0;t.a=function(e){var t=e.data,a=e.children,l=Object(n.useState)(!1),d=Object(c.a)(l,2),j=d[0],b=d[1],h=Object(i.useTransition)(j,{from:o.j,enter:o.i,leave:o.j,config:{mass:1,tension:210,friction:20}}),u=Object(n.useCallback)((function(e){return e.stopPropagation()}),[]);return Object(r.jsxs)("span",{className:"Tooltip",style:{position:"relative"},onMouseEnter:b.bind(s,!0),onMouseLeave:b.bind(s,!1),onClick:u.bind(s),children:[a,h((function(e,a){return a&&Object(r.jsx)(i.animated.div,{style:e,children:Object(r.jsx)("div",{className:"message",children:Object(r.jsx)("p",{dangerouslySetInnerHTML:{__html:t.replace(/\n/g,"<br/>")}})})})}))]})}},280:function(e,t,a){"use strict";a.r(t);var c=a(113),o=a(90),n=a(285),i=a(18);var r=function(e){var t=e.title,a=e.statistic,r=e.total,s=e.formula,l=e.date,d=e.description,j=e.className,b=Object(n.a)().t;return Object(i.jsxs)("div",{className:"meta-item ".concat(j),children:[Object(i.jsxs)("div",{className:"meta-item-top",children:[Object(i.jsx)("h3",{children:t}),Object(i.jsx)(c.a,{data:s,children:Object(i.jsx)(o.m,{size:16})})]}),Object(i.jsx)("h1",{children:a}),Object(i.jsx)("h5",{children:l}),r&&Object(i.jsx)("h5",{children:"".concat(b("India has")," ").concat(r," ").concat(b("CPM"))}),Object(i.jsx)("p",{children:d})]})},s=a(7),l=a(22),d=a(62),j=a(73),b=a(2),h=a.n(b),u=a(21),v=a.n(u);function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(e[c]=a[c])}return e}).apply(this,arguments)}function m(e,t){if(null==e)return{};var a,c,o=function(e,t){if(null==e)return{};var a,c,o={},n=Object.keys(e);for(c=0;c<n.length;c++)a=n[c],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(c=0;c<n.length;c++)a=n[c],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=Object(b.forwardRef)((function(e,t){var a=e.color,c=void 0===a?"currentColor":a,o=e.size,n=void 0===o?24:o,i=m(e,["color","size"]);return h.a.createElement("svg",O({ref:t,xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:c,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},i),h.a.createElement("circle",{cx:"12",cy:"12",r:"10"}),h.a.createElement("polygon",{points:"16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"}))}));p.propTypes={color:v.a.string,size:v.a.oneOfType([v.a.string,v.a.number])},p.displayName="Compass";var f=p;function y(e){var t,a,c,o,b,h=e.stateCode,u=e.data,v=e.timeseries,O=Object(n.a)().t,m=Object.keys(v||{}).filter((function(e){return e<=Object(l.g)()})),p=m[m.length-1],y=Object(l.h)(null===v||void 0===v?void 0:v[p],"total","confirmed"),g=y-Object(l.h)(null===v||void 0===v?void 0:v[p],"delta7","confirmed"),x=Object(d.a)(Object(j.a)(Object(l.k)(p),7)),k=Object(l.h)(u[h],"total","confirmed",{normalizedByPopulationPer:"lakh"}),w=Object(l.h)(u[h],"total","tested",{normalizedByPopulationPer:"lakh"}),N=Object(l.h)(u.TT,"total","confirmed",{normalizedByPopulationPer:"lakh"}),P=Object(l.h)(u[h],"total","activeRatio"),M=Object(l.h)(u[h],"total","recoveryRatio"),C=Object(l.h)(u[h],"total","cfr"),R=100*(Math.pow(y/g,1/7)-1);return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("div",{className:"StateMeta population",children:[Object(i.jsxs)("div",{className:"meta-item population",children:[Object(i.jsx)("h3",{children:O("Population")}),Object(i.jsx)("h1",{children:Object(l.e)(null===(t=u[h])||void 0===t||null===(a=t.meta)||void 0===a?void 0:a.population)})]}),Object(i.jsxs)("div",{className:"alert",children:[Object(i.jsx)(f,{}),Object(i.jsxs)("div",{className:"alert-right",children:[O("Based on 2019 population projection by NCP"),Object(i.jsx)("a",{href:"https://nhm.gov.in/New_Updates_2018/Report_Population_Projection_2019.pdf",target:"_noblank",children:"report"})]})]})]}),Object(i.jsxs)("div",{className:"StateMeta",children:[Object(i.jsx)(r,{className:"confirmed",title:"Confirmed Per Lakh",statistic:Object(l.e)(k),total:Object(l.e)(N),formula:"(confirmed / state population) * 1 Lakh",description:"\n            ~".concat(Object(l.e)(k,"long")," ").concat(O("out of every lakh people in")," ").concat(s.v[h]," ").concat(O("have tested positive for the virus."),"\n            ")}),Object(i.jsx)(r,{className:"active",title:"Active Ratio",statistic:"".concat(Object(l.e)(P,"%")),formula:"(active / confirmed) * 100",description:P>0?"".concat(O("For every 100 confirmed cases"),", ~").concat(Object(l.e)(P,"long")," ").concat(O("are currently infected.")):O("Currently, there are no active cases in this state.")}),Object(i.jsx)(r,{className:"recovery",title:"Recovery Ratio",statistic:"".concat(Object(l.e)(M,"%")),formula:"(recovered / confirmed) * 100",description:M>0?"".concat(O("For every 100 confirmed cases"),", ~").concat(Object(l.e)(M,"long")," ").concat(O("have recovered from the virus.")):O("Unfortunately, there are no recoveries in this state yet.")}),Object(i.jsx)(r,{className:"mortality",title:"Case Fatality Ratio",statistic:"".concat(Object(l.e)(C,"%")),formula:"(deceased / confirmed) * 100",description:C>0?"".concat(O("For every 100 confirmed cases"),", ~").concat(Object(l.e)(C,"long")," ").concat(O("have unfortunately passed away from the virus.")):O("Fortunately, no one has passed away from the virus in this state.")}),Object(i.jsx)(r,{className:"gr",title:"Avg. Growth Rate",statistic:R>0?"".concat(Object(l.e)(R,"%")):"-",formula:"(((previousDayData - sevenDayBeforeData) / sevenDayBeforeData) * 100)/7",date:"".concat(Object(l.c)(x,"dd MMM")," - ").concat(Object(l.c)(p,"dd MMM")),description:R>0?"".concat(O("In the last one week, the number of new infections has grown by an average of")," ").concat(Object(l.e)(R,"%"),"\n              ").concat(O("every day.")):O("There has been no growth in the number of infections in last one week.")}),Object(i.jsx)(r,{className:"tpm",title:"Tests Per Lakh",statistic:"".concat(Object(l.e)(w)),formula:"(total tests in state / total population of state) * 1 Lakh",date:w?"".concat(O("As of")," ").concat(Object(l.d)(null===(c=u[h])||void 0===c||null===(o=c.meta)||void 0===o||null===(b=o.tested)||void 0===b?void 0:b.last_updated)," ").concat(O("ago")):"",description:w>0?"".concat(O("For every lakh people in")," ").concat(s.v[h],",\n                ~").concat(Object(l.e)(w,"long")," ").concat(O("samples were tested.")):O("No tests have been conducted in this state yet.")})]})]})}var g=function(e,t){return!(t.timeseries&&!e.timeseries)&&e.stateCode===t.stateCode};t.default=Object(b.memo)(y,g)}}]);
//# sourceMappingURL=35.a10b476f.chunk.js.map