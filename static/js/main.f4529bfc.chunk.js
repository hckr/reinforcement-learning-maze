(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,function(e,t,n){e.exports=n(12)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(0),l=n.n(c),o=n(2),r=n.n(o),a=(n(10),n(3)),i=(n(11),function(e){var t=e.rows,n=e.cols,o=e.cellWidth,r=e.cellHeight,i=e.bgColor1,f=e.bgColor2,u=n*o,s=t*r,d=Object(c.useState)(null),b=Object(a.a)(d,2),g=b[0],w=b[1],h=Object(c.useCallback)(function(e){w(e.getContext("2d"))},[]);return Object(c.useEffect)(function(){if(g)for(var e=0;e<t;++e)for(var c=0;c<n;++c){var l=c*o,a=e*r;g.fillStyle=(e+c)%2===0?i:f,g.fillRect(l,a,o,r)}},[t,n,o,r,i,f,g]),l.a.createElement("div",{className:"Maze"},l.a.createElement("canvas",{ref:h,width:u,height:s}))});var f=function(){return l.a.createElement(i,{rows:50,cols:50,cellWidth:10,cellHeight:10,bgColor1:"#ddf",bgColor2:"#eef"})};r.a.render(l.a.createElement(f,null),document.getElementById("root"))}],[[4,1,2]]]);
//# sourceMappingURL=main.f4529bfc.chunk.js.map