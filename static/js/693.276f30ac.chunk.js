"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[693],{693:function(t,n,e){e.r(n),e.d(n,{default:function(){return Z}});var r,a,c,u,i=e(439),s=e(791),o=e(689),f=e(952),p=e(168),h=e(444),v=h.ZP.li(r||(r=(0,p.Z)(["\n  margin-bottom: 5px;\n"]))),d=h.ZP.h2(a||(a=(0,p.Z)(["\n  margin-bottom: 5px;\n  font-size: 18px;\n  letter-spacing: 0.1em;\n"]))),l=h.ZP.ul(c||(c=(0,p.Z)(["\n  text-align: justify;\n"]))),m=h.ZP.div(u||(u=(0,p.Z)(["\n  font-style: italic;\n  color: black;\n"]))),x=e(184),Z=function(){var t=(0,o.UO)().movieId,n=(0,s.useState)([]),e=(0,i.Z)(n,2),r=e[0],a=e[1];return(0,s.useEffect)((function(){(0,f.Jh)(t).then(a)}),[t]),(0,x.jsx)(x.Fragment,{children:r.length?(0,x.jsx)(l,{children:r.map((function(t){return(0,x.jsxs)(v,{children:[(0,x.jsxs)(d,{children:[t.author,":"]}),(0,x.jsxs)(m,{children:[t.content,":"]})]},t.id)}))}):(0,x.jsx)(m,{children:"We don't have any reviews for this movie."})})}},952:function(t,n,e){e.d(n,{Hg:function(){return s},IQ:function(){return f},Jh:function(){return p},pm:function(){return h},s_:function(){return o}});var r=e(861),a=e(757),c=e.n(a),u=e(243),i="ecbb02bdf25345a36505e43f9c0e7ce1";u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s=function(){var t=(0,r.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("trending/movie/day?api_key=".concat(i));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("movie/".concat(n,"?api_key=").concat(i));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("movie/".concat(n,"/credits?api_key=").concat(i));case 2:return e=t.sent,t.abrupt("return",e.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("movie/".concat(n,"/reviews?api_key=").concat(i));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),h=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("search/movie?api_key=".concat(i,"&query=").concat(n));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=693.276f30ac.chunk.js.map