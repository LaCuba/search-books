(this["webpackJsonpsearch-books"]=this["webpackJsonpsearch-books"]||[]).push([[0],{10:function(e,t,n){e.exports={container:"Paginator_container__33mxT",currentPage:"Paginator_currentPage__1mLAv"}},23:function(e,t,n){e.exports={app:"App_app__2ziFi"}},26:function(e,t,n){e.exports={paginator:"SnippetsContainer_paginator__ibf4j"}},27:function(e,t,n){e.exports={preloader:"Preloader_preloader__5Y5ll"}},33:function(e,t,n){},4:function(e,t,n){e.exports={modal:"Modal_modal__1vwov",modalActive:"Modal_modalActive__us8H9",content:"Modal_content__BZbGL",header:"Modal_header__3jdKb",headerTitle:"Modal_headerTitle___Kwob",cancel:"Modal_cancel__2EYnn",cover:"Modal_cover__2pLUm",info:"Modal_info__3_eoT"}},59:function(e,t,n){"use strict";n.r(t);var c={};n.r(c),n.d(c,"bookKeySelector",(function(){return p})),n.d(c,"snippetsSelector",(function(){return d}));var a={};n.r(a),n.d(a,"snippetscount",(function(){return h}));var r={};n.r(r),n.d(r,"storage",(function(){return O})),n.d(r,"isFetching",(function(){return _}));var s=n(1),i=n(11),o=n.n(i),l=(n(33),n(23)),u=n.n(l),b=n(7),j=n(3),p=function(e){return e.snippets.bookKey},d=function(e){return e.snippets.storage.snippets},h=function(e){return e.snippets.storage.snippetscount},O=function(e){return e.snippets.storage},_=function(e){return e.snippets.isFetching},v=n(25),x=n.n(v).a.create({baseURL:"https://openlibrary.org/"}),f=function(e,t){return x.get("search.json?q=".concat(e,"&page=").concat(t)).then((function(e){return e.data}))},m=n(6),g=Object(m.createCustomAction)("preloader/TOGGLE-IS-FETCHING",(function(e){return{payload:{isFetching:e}}})),y=Object(m.createCustomAction)("search/SET-SNIPPETS",(function(e,t){return{payload:{snippets:e,snippetscount:t}}})),S=Object(m.createCustomAction)("search/SET-VALUE-SEARCH",(function(e){return{payload:{value:e}}})),k=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return function(n){n(g(!0)),f(e,t).then((function(t){var c=t.docs.map((function(e){return{key:e.key,title:e.title,cover_i:e.cover_i||null,publish_date:e.publish_date||null,author_name:e.author_name||null,isbn:e.isbn,publisher:e.publisher||null}}));n(g(!1)),n(S(e)),n(y(c,t.numFound))}))}},N=n(8),T=n.n(N),C=n(0),K=function(){var e=Object(j.c)(a.snippetscount),t=Object(j.b)(),n=Object(s.useState)(""),c=Object(b.a)(n,2),r=c[0],i=c[1],o=Object(s.useState)(0),l=Object(b.a)(o,2),u=l[0],p=l[1];return Object(C.jsxs)("div",{className:T.a.panel,children:[Object(C.jsx)("span",{className:T.a.inputBox,children:Object(C.jsx)("input",{className:T.a.searchInput,type:"text",placeholder:"Search a book.",onChange:function(e){if(i(e.currentTarget.value),e.currentTarget.value){clearTimeout(u);var n=window.setTimeout((function(e){return t(k(e.replace(/\s+/g,"+")))}),1e3,e.currentTarget.value);p(n)}},value:r})}),Object(C.jsx)("span",{className:T.a.searchBtn,children:Object(C.jsx)("button",{className:T.a.btn,onClick:function(){if(r){var e=r.replace(/\s+/g,"+");t(k(e))}},children:"Search"})}),e&&Object(C.jsx)("div",{className:T.a.resultCount,children:Object(C.jsxs)("p",{children:["Results: ",e]})})]})},B=n(4),P=n.n(B),E=n.p+"static/media/book.a929ff68.svg",F=n.p+"static/media/close.c39ccb73.svg",A=Object(m.createCustomAction)("modal/SET-BOOK",(function(e){return{payload:{bookKey:e}}})),I=function(){var e=Object(j.b)(),t=Object(j.c)(c.bookKeySelector),n=Object(j.c)(c.snippetsSelector),a=t&&n&&n.filter((function(e){return e.key===t}));return Object(C.jsx)(C.Fragment,{children:a&&Object(C.jsx)("div",{className:a?P.a.modalActive:P.a.modal,onClick:function(){return e(A(null))},children:Object(C.jsxs)("div",{className:P.a.content,onClick:function(e){return e.stopPropagation()},children:[Object(C.jsxs)("div",{className:P.a.header,children:[Object(C.jsx)("h3",{className:P.a.headerTitle,children:a[0].title}),Object(C.jsx)("div",{className:P.a.cancel,children:Object(C.jsx)("a",{onClick:function(){return e(A(null))},children:Object(C.jsx)("img",{src:F,alt:"close"})})})]}),Object(C.jsx)("div",{className:P.a.cover,children:Object(C.jsx)("img",{src:a[0].cover_i?"http://covers.openlibrary.org/b/id/"+a[0].cover_i+"-L.jpg":E,alt:"cover"})}),Object(C.jsxs)("div",{className:P.a.info,children:[a[0].title&&Object(C.jsxs)("div",{className:P.a.title,children:[Object(C.jsx)("b",{children:"Title: "})," ",Object(C.jsx)("p",{children:a[0].title})]}),a[0].author_name&&Object(C.jsxs)("div",{className:P.a.author,children:[Object(C.jsx)("b",{children:"Author: "}),a[0].author_name.length>1?a[0].author_name.join(", "):a[0].author_name]}),a[0].publish_date&&Object(C.jsxs)("div",{className:P.a.datePublish,children:[Object(C.jsx)("b",{children:"Publish date: "}),Object(C.jsx)("p",{children:a[0].publish_date[0]})]}),a[0].publisher&&Object(C.jsxs)("div",{className:P.a.publisher,children:[Object(C.jsx)("b",{children:"Publisher: "}),Object(C.jsx)("p",{children:a[0].publisher[0]})]}),a[0].isbn&&Object(C.jsxs)("div",{className:P.a.isbn,children:[Object(C.jsx)("b",{children:"ISBN: "}),Object(C.jsx)("p",{children:a[0].isbn[0]})]})]})]})})})},M=n(9),w=n.n(M),L=function(e){var t=e.coverId,n=e.title,c=e.author,a=e.bookKey,r=e.setBookKey,s=Object(j.b)();return Object(C.jsx)(C.Fragment,{children:Object(C.jsxs)("a",{className:w.a.container,onClick:function(){return s(r(a))},children:[Object(C.jsx)("img",{className:w.a.cover,src:t?"http://covers.openlibrary.org/b/id/"+t+"-S.jpg":E,alt:"cover"}),Object(C.jsx)("h3",{className:w.a.title,children:n}),c&&Object(C.jsxs)("div",{className:w.a.author,children:[Object(C.jsx)("b",{children:"Author: "}),Object(C.jsxs)("p",{children:[" ",c.length>1?c.join(", "):c[0]," "]})]})]})})},G=n(10),Z=n.n(G),z=function(e){for(var t=e.countSnippets,n=e.countSnippetsOnPage,c=void 0===n?100:n,a=e.currentPage,r=e.pageClick,i=e.portionSize,o=void 0===i?5:i,l=Math.ceil(t/c),u=[],j=0;j<=l;j++)u.push(j);var p=Math.ceil(l/o),d=Object(s.useState)(1),h=Object(b.a)(d,2),O=h[0],_=h[1],v=(O-1)*o+1,x=O*o;return Object(C.jsxs)("div",{className:Z.a.container,children:[Object(C.jsx)("button",{disabled:O<=1,className:Z.a.prevBtn,onClick:function(){return _(O-1)},children:"\xab"}),u.filter((function(e){return e>=v&&e<=x})).map((function(e){return Object(C.jsx)("a",{className:a===e?Z.a.currentPage:void 0,onClick:function(t){return r(e)},children:e},e)})),Object(C.jsx)("button",{disabled:p<=O,className:Z.a.nextBtn,onClick:function(){return _(O+1)},children:"\xbb"})]})},H=n(26),R=n.n(H),U=n.p+"static/media/preloader.f76f1fbe.gif",V=n(27),J=n.n(V),W=function(e){return e.isFetching?Object(C.jsx)("div",{className:J.a.preloader,children:Object(C.jsx)("img",{src:U,alt:"preloader"})}):null},Y=function(){var e=Object(s.useState)(1),t=Object(b.a)(e,2),n=t[0],c=t[1],a=Object(j.c)(r.storage),i=Object(j.c)(r.isFetching),o=Object(j.b)();return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(W,{isFetching:i}),a.snippets&&Object(C.jsxs)("div",{children:[a.snippets.map((function(e){return Object(C.jsx)(L,{coverId:e.cover_i?e.cover_i:null,title:e.title,author:e.author_name?e.author_name:null,bookKey:e.key,setBookKey:A},e.key)})),Object(C.jsx)("div",{className:R.a.paginator,children:a.snippetscount&&Object(C.jsx)(z,{countSnippets:a.snippetscount,currentPage:n,pageClick:function(e){o(k(a.valueSearch,e)),c(e)}})})]})]})};var q=function(){return Object(C.jsxs)("div",{className:u.a.app,children:[Object(C.jsx)(I,{}),Object(C.jsx)(K,{}),Object(C.jsx)(Y,{})]})},Q=n(12),D=n(28),X=n(2),$={storage:{valueSearch:"",snippets:null,snippetscount:null},bookKey:null,isFetching:!1},ee={snippets:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Object(m.getType)(y):return Object(X.a)(Object(X.a)({},e),{},{storage:Object(X.a)(Object(X.a)({},e.storage),{},{snippets:t.payload.snippets,snippetscount:t.payload.snippetscount})});case Object(m.getType)(S):return Object(X.a)(Object(X.a)({},e),{},{storage:Object(X.a)(Object(X.a)({},e.storage),{},{valueSearch:t.payload.value})});case Object(m.getType)(g):return Object(X.a)(Object(X.a)({},e),{},{isFetching:t.payload.isFetching});case Object(m.getType)(A):return t.payload.bookKey?Object(X.a)(Object(X.a)({},e),{},{bookKey:t.payload.bookKey}):Object(X.a)(Object(X.a)({},e),{},{bookKey:null});default:return e}}},te=Object(Q.b)(ee),ne=Object(Q.c)(te,Object(Q.a)(D.a));o.a.render(Object(C.jsx)(j.a,{store:ne,children:Object(C.jsx)(q,{})}),document.getElementById("root"))},8:function(e,t,n){e.exports={panel:"Search_panel__3WZnK",inputBox:"Search_inputBox__foE4l",searchInput:"Search_searchInput__1W1ZZ",searchBtn:"Search_searchBtn__31epz",btn:"Search_btn__VNvBO",resultCount:"Search_resultCount__kEEIk"}},9:function(e,t,n){e.exports={container:"Snippet_container__3MBoh",cover:"Snippet_cover__3bEPO",title:"Snippet_title__3TvQV",author:"Snippet_author__26NEG"}}},[[59,1,2]]]);
//# sourceMappingURL=main.3eee0c10.chunk.js.map