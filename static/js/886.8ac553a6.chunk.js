"use strict";(self.webpackChunkmovie_base=self.webpackChunkmovie_base||[]).push([[886],{600:function(A,o,i){i.d(o,{Df:function(){return a},M1:function(){return C},Pt:function(){return c},t2:function(){return g},tx:function(){return f}});var K=i(861),e=i(757),t=i.n(e),n=i(388);n.Z.defaults.baseURL="https://api.themoviedb.org/3/";var r="003c13e6e40e640c229ce092669f5920";function a(){return s.apply(this,arguments)}function s(){return(s=(0,K.Z)(t().mark((function A(){var o;return t().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.prev=0,A.next=3,n.Z.get("trending/movie/day?api_key=".concat(r));case 3:return o=A.sent,A.abrupt("return",o.data.results);case 7:A.prev=7,A.t0=A.catch(0),console.error(A.t0);case 10:case"end":return A.stop()}}),A,null,[[0,7]])})))).apply(this,arguments)}function c(A){return u.apply(this,arguments)}function u(){return(u=(0,K.Z)(t().mark((function A(o){var i;return t().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.prev=0,A.next=3,n.Z.get("search/movie?api_key=".concat(r,"&language=en-US&query=").concat(o,"&page=1&include_adult=false"));case 3:return i=A.sent,A.abrupt("return",i.data.results);case 7:A.prev=7,A.t0=A.catch(0),console.error(A.t0);case 10:case"end":return A.stop()}}),A,null,[[0,7]])})))).apply(this,arguments)}function g(A){return p.apply(this,arguments)}function p(){return(p=(0,K.Z)(t().mark((function A(o){var i;return t().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.prev=0,A.next=3,n.Z.get("movie/".concat(o,"?api_key=").concat(r,"&language=en-US"));case 3:return i=A.sent,A.abrupt("return",i.data);case 7:A.prev=7,A.t0=A.catch(0),console.error(A.t0);case 10:case"end":return A.stop()}}),A,null,[[0,7]])})))).apply(this,arguments)}function C(A){return l.apply(this,arguments)}function l(){return(l=(0,K.Z)(t().mark((function A(o){var i;return t().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.prev=0,A.next=3,n.Z.get("movie/".concat(o,"/credits?api_key=").concat(r,"&language=en-US"));case 3:return i=A.sent,A.abrupt("return",i.data.cast);case 7:A.prev=7,A.t0=A.catch(0),console.error(A.t0);case 10:case"end":return A.stop()}}),A,null,[[0,7]])})))).apply(this,arguments)}function f(A){return d.apply(this,arguments)}function d(){return(d=(0,K.Z)(t().mark((function A(o){var i;return t().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.prev=0,A.next=3,n.Z.get("movie/".concat(o,"/reviews?api_key=").concat(r,"&language=en-US&page=1"));case 3:return i=A.sent,A.abrupt("return",i.data.results);case 7:A.prev=7,A.t0=A.catch(0),console.error(A.t0);case 10:case"end":return A.stop()}}),A,null,[[0,7]])})))).apply(this,arguments)}},459:function(A,o,i){i.d(o,{B:function(){return K}});var K="https://image.tmdb.org/t/p/w500"},886:function(A,o,i){i.r(o),i.d(o,{default:function(){return x}});var K,e,t,n=i(885),r=i(600),a=i(791),s=i(731),c=i(689),u=i(459),g=i(966),p=i(536),C=i(168),l=i(444),f=l.ZP.div(K||(K=(0,C.Z)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, 270px);\n  gap: 24px;\n "]))),d=l.ZP.div(e||(e=(0,C.Z)(["\n  border: none;\n"]))),w=(0,l.ZP)(s.rU)(t||(t=(0,C.Z)(["\nposition: absolute;\nright: 40px;\n"]))),h=i(184),x=function(){var A,o,i=(0,c.UO)().movieId,K=(0,a.useState)(null),e=(0,n.Z)(K,2),t=e[0],C=e[1],l=null!==(A=null===(o=(0,c.TH)().state)||void 0===o?void 0:o.from)&&void 0!==A?A:"/";if((0,a.useEffect)((function(){(0,r.t2)(i).then(C)}),[i]),t){var x=t.poster_path,v=t.title,j=t.original_title,B=t.vote_average,D=t.release_date,m=t.overview,b=t.genres;return(0,h.jsxs)("div",{children:[(0,h.jsx)(w,{to:l,children:"Go Back"}),(0,h.jsxs)(f,{children:[(0,h.jsx)(d,{children:(0,h.jsx)("img",{src:x?u.B+x:p,alt:v})}),(0,h.jsxs)("div",{children:[(0,h.jsx)("span",{children:j}),(0,h.jsxs)("ul",{children:[(0,h.jsxs)("li",{children:["User Score:","",(0,h.jsx)("p",{rating:B,children:B.toFixed(2)})]}),(0,h.jsxs)("li",{children:["Release date:",(0,h.jsx)("span",{children:D})]}),(0,h.jsxs)("li",{children:["Overview:",(0,h.jsx)("span",{children:m})]}),(0,h.jsxs)("li",{children:["Genres:",b.map((function(A){var o=A.name;return(0,h.jsxs)("span",{children:[" ",o]},o)}))]})]}),(0,h.jsx)("h3",{children:"Additional information"}),(0,h.jsxs)("ul",{children:[(0,h.jsx)("li",{children:(0,h.jsx)(s.OL,{to:"cast",state:{from:l},children:"Cast"})}),(0,h.jsx)("li",{children:(0,h.jsx)(s.OL,{to:"reviews",state:{from:l},children:"Reviews"})})]})]})]}),(0,h.jsx)(a.Suspense,{fallback:(0,h.jsx)(g.a,{}),children:(0,h.jsx)(c.j3,{})})]})}}},536:function(A){A.exports="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QA6RXhpZgAATU0AKgAAAAgAA1EQAAEAAAABAQAAAFERAAQAAAABAAAAAFESAAQAAAABAAAAAAAAAAD/2wBDAAIBAQIBAQICAgICAgICAwUDAwMDAwYEBAMFBwYHBwcGBwcICQsJCAgKCAcHCg0KCgsMDAwMBwkODw0MDgsMDAz/2wBDAQICAgMDAwYDAwYMCAcIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wAARCAELAL0DASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9/KKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAoopspwvHXPFADqKo2esW+oRSNb3UE6wuyyMkqsEYdjg8fSmrrNtNp5vFu7drNVLtMsw8tVHUl8449c0AaFFZPhPxto/jaCabR9X0zV4oH8uVrK6S4WJuuCUJAOCOKuapqtrpMavdXUNrGxwGlkEak+mTQBaoqnp+sWuqwtJa3UF1GjbXaGUSAH04JAPtVLUPH2h6Nr0OlXmtaTZ6pcAGG0mvI0nmznG2MkMenYUAbNFUNb1uz8O6fNeajeW9jZ24DTXFxKsUUQz95mYhQM8cmoLHxfpmqaKupWuqafcabJ9y7huUeFjnnD5Knn3oA1qKxx400m4nVI9W055JGCoqXaEux4UAZ5yTj61I3jjRUYq2r6YrKcFWukBU+hGaANSisu68W6bY7TPqVhD5i74y9yi+YnQEZPT36Vc0+/h1KBZre4juIW6SRMHRvoQcUAWKKKKACiiigAooooAKKKKACiiigApsnTrjmnU1ycDb60Afgb/wTQ/aR8WfscftR/FX4g+INWuLj4F/FT4ta/8ACrxBPd3Qa18JaxBFDeaReu8smY4Z/t11bOVG1fLUsxJiUZf7M17rn7Rf7Ff7AP7Pesa94k0vwP8AF/XdTuvFVzpt/Ja3OqwWcM9wtk8wIdUdowG2ENjOHBwa/UL4df8ABG7wD4U/ZH+OXwd1zVNU8V+Gfjp4s1LxdqUl5bxwzaXdXUdosZh294JLOKaNz828A9q5qb/ghV4Hu/2BPA/wSm8YeKYtT+GeonWPC3jayCWusaNfFiwmRUOw8EqVPBFAHzZ+1B+y94V/4JA/8FSP2Q9c+Aran4P0v4yeJrjwN4u8KjVLm40/WbSQ2qi68mRmCyRGXczqRlxCx5Ehf1//AIOZtSsdJ/Yf8H3GsNrTeHx8QtCj1aHS5ZUurmza8jFxFGYXSTc0W9QEO4k4BBwa9M+An/BIhvCH7Wmh/Gj4t/GDx58fPHHg2xex8Kv4jtbWzsfDnmKVmmhtrZFiMzqQDIVDZVSSSqFfW/26f2J9P/bp+HPhfQNV13UPD8fhfxTpnimKezgWV5pbG4SdIzuPCsUAJHPXFAH5K/sja5pvgr/gpRpvj/8AZN+G3x+8L/BvwP8ADrxBf/ERPGa6sum6vNHY3MlnBF9vmlLTPdCyIVHVyIXIG1ZGPpX/AAT7/wCCTPwt/bv/AOCVlp8dPitqHizxV8ZPidpWoeJb3xjN4jure70i5WWbYtssTrFFGhjBKBMEMwOQAB+xktr9otvs8yiSORDHIrruDKeCDnrnn86/Pof8EEp/Afh/xd4N+GP7RXxb+F/wd8X3st3c+BdIhtJrWzSbBmhtbqVDcW8b8gCN1wCBzjNAHxdLN8dv27f+CZ/7KXxB1rwXr37S/gfwNqfiKw8e+DtF106Tf+LEspbiwsL1mV/NudrQpI0cayFyCpUpK5HrX/BLv4J/sy/tXeLfjd8Hbbw7+0P8M7PWLfTtV1r4L+O7m60iPQ2hkRkvNNuIZftKRtIpDRtOp+ZgIxHgD6y+NX/BFTwL4u8D/BW1+G/ijxP8G/FHwCQweDvEXh9Y5rmzhdNk0c0UwMc/mqX3GQHcJJAwYOa679jX/gmvJ+zP8dfFnxW8afE7xl8Zfif4s0630eXXdfgtrX+z7CFi6WtvBbosUab2djsAyXY/xGgD4i/4JS/8Eyvg34p/b7/aIkvNF8SXR+A/xPsE8GJL4t1dhpS28FvdQiRPtJW5AnBb9+Hz0bcvA+Rv2WvgvZ/GW/8AjBq2t/sifG39oa8h+KPiSyj8R+HfiPeaFZ20aXZK2Rgjuoxuj3Fi+08SquTjA/cT9lT9hnTf2Wfjb8Z/G9hruoapdfGbxGniO9tbiBUj06RYVh8uIg5ZcIDluc18y+AP+CFfi/4Kaj4qX4e/tZfGDwLo/izxHqHia40rTNK0xraK7vJTJKVMsTt02rnPRBQB8v8A/BWjwT4F8Lf8FAf2YfB/ij4T/Gnx74Dg+Fd+h8CeAbi9vNfSRJ4jGC0V1BLIISSHcy5xnrnFegf8G8F7Dq37an7UX/CBWvjb4d/B/Q5dJ0zT/hr441Ke48T6Ffrbxie4uIZ5p5IEeSO5wGmbPmAYwoA+0fDH/BNsWH7T/wAIPixr3xC8TeKvFXwm8IXXhNp760hVvEH2l1aS7nZMBZcgcIAo59hW78E/2B9P+CP7eHxj+OVj4j1G6vvjNb6bDqGjy2kYt7B7K1gtUkilB3ncsJZlbjMnH3eQD6GooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/2Q=="}}]);
//# sourceMappingURL=886.8ac553a6.chunk.js.map