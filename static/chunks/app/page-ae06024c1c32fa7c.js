(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{6171:function(e,t,n){Promise.resolve().then(n.t.bind(n,6964,23)),Promise.resolve().then(n.bind(n,4728))},4728:function(e,t,n){"use strict";n.r(t);var r=n(4670),s=n(7437),c=n(2265);t.default=function(){var e=(0,r._)((0,c.useState)([]),2),t=e[0],n=e[1],a=(0,r._)((0,c.useState)(!0),2),i=a[0],o=a[1],l=(0,r._)((0,c.useState)(1),2),d=l[0],h=l[1];return((0,c.useEffect)(function(){o(!0),fetch("https://reqres.in/api/users?page=".concat(d)).then(function(e){return e.json()}).then(function(e){e&&e.data?n(e.data):n([]),o(!1)}).catch(function(e){console.error("Error fetching data:",e),o(!1)})},[d]),i)?(0,s.jsx)("p",{children:"Loading..."}):0===t.length?(0,s.jsx)("p",{children:"No profile data"}):(0,s.jsxs)("div",{children:[(0,s.jsx)("h1",{className:"text-3xl text-center mb-5",children:"User List"}),(0,s.jsxs)("table",{className:"text-center mx-auto border border-collapse border-gray-500",children:[(0,s.jsx)("thead",{className:"bg-gray-800 mb-8 mt-8 text-center border border-collapse",children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"ID"}),(0,s.jsx)("th",{children:"Name"}),(0,s.jsx)("th",{children:"Email"})]})}),(0,s.jsx)("tbody",{className:"ml-5 mr-5  border bg-orange-900 border-b border-separate",children:t.map(function(e){return(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:e.id}),(0,s.jsx)("td",{children:"".concat(e.first_name," ").concat(e.last_name)}),(0,s.jsx)("td",{children:e.email})]},e.id)})})]}),(0,s.jsxs)("div",{className:"text-center mt-4",children:[(0,s.jsx)("button",{onClick:function(){d>1&&h(function(e){return e-1})},disabled:1===d,className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2",children:"Previous Page"}),(0,s.jsx)("button",{onClick:function(){h(function(e){return e+1})},className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4",children:"Next Page"})]})]})}}},function(e){e.O(0,[54,971,864,744],function(){return e(e.s=6171)}),_N_E=e.O()}]);