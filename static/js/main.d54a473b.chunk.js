(this["webpackJsonpurl-shortener"]=this["webpackJsonpurl-shortener"]||[]).push([[0],{128:function(e,n,t){"use strict";t.r(n);var r,o,c,a,i=t(1),s=t.n(i),u=t(30),l=t.n(u),p=(t(40),t(41),t(13)),b=t.n(p),h=t(31),d=t(8),j=t(35),x=t.n(j),f=t(4),g=t(5),O=g.a.button(r||(r=Object(f.a)(["\n  color:white;\n  padding: 10px;\n  cursor: pointer;\n  border: none;\n  width: 70px;\n  overflow: visible;\n  background: rgb(255 255 255 / 20%);\n  transition: 0.3s;\n  &:hover {\n    background: rgb(255 255 255 / 10%);\n  }\n"]))),k=t(2),v=function(e){var n=e.text,t=e.onClick;return Object(k.jsx)(O,{onClick:t,children:Object(k.jsx)("span",{children:n})})},m=g.a.form(o||(o=Object(f.a)(["\n  display:flex;\n  flex-direction:row;\n  border:1px solid rgb(255 255 255 / 19%);\n  padding: 4px;\n  margin: 20px auto;\n  width: 600px;\n"]))),w=g.a.input(c||(c=Object(f.a)(["\n  flex-grow:2;\n  border:none;\n  padding: 0 20px;\n  background-color:white;\n    &:focus {\n      outline: none;\n    }\n  }\n"]))),y=g.a.div(a||(a=Object(f.a)(["\n  color: white;\n  position:relative;\n  background: rgb(117 71 97 / 50%);\n  display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 0 0 0 20px;\n  a {\n    color: pink;\n    font-weight: bold;\n    margin: 0 10px;\n  }\n  .copied {\n    font-family: 'La Belle Aurore', cursive;\n    font-size: 2rem;\n    position:absolute;\n    right:-66px;\n  }\n"]))),S=function(){var e=Object(i.useState)(),n=Object(d.a)(e,2),t=n[0],r=n[1],o=Object(i.useState)(!1),c=Object(d.a)(o,2),a=c[0],s=c[1],u=function(){var e=Object(h.a)(b.a.mark((function e(n){var t,o,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),x.a.isURL(n.target.urlInput.value,{require_protocol:!0})){e.next=6;break}alert("Please enter a valid url with http(s) protocol."),e.next=16;break;case 6:return t=n.target.elements.urlInput.value,e.next=9,fetch("https://react-url-shortener-back.herokuapp.com/",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({urlOriginal:t})});case 9:return o=e.sent,e.next=12,o.json();case 12:c=e.sent,console.log("data",c.urlShort),s(!0),r(c.urlShort);case 16:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(e){var n=Object(i.useState)(!1),t=Object(d.a)(n,2),r=t[0],o=t[1],c=e.url;if(e)return Object(k.jsxs)(y,{children:["Here is your shortened url:",Object(k.jsxs)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://react-url-shortener-back.herokuapp.com/".concat(c),children:[" ","4youTechie/".concat(c)]}),Object(k.jsx)(v,{text:r?"Copied!":"Copy",onClick:function(){navigator.clipboard.writeText("https://react-url-shortener-back.herokuapp.com/".concat(c)).then((function(){o(!0)}))}})]})};return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsxs)(m,{onSubmit:u,children:[Object(k.jsx)(w,{type:"text",id:"urlInput",placeholder:"Put your url here"}),Object(k.jsx)(v,{text:"Shortify",type:"submit"})]}),a&&Object(k.jsx)(l,{url:t})]})},C=function(){return Object(k.jsxs)("section",{className:"container",children:[Object(k.jsx)("h1",{children:"Fuji Shortener"}),Object(k.jsx)(S,{})]})},F=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,129)).then((function(n){var t=n.getCLS,r=n.getFID,o=n.getFCP,c=n.getLCP,a=n.getTTFB;t(e),r(e),o(e),c(e),a(e)}))};l.a.render(Object(k.jsx)(s.a.StrictMode,{children:Object(k.jsx)(C,{})}),document.getElementById("root")),F()},40:function(e,n,t){},41:function(e,n,t){}},[[128,1,2]]]);
//# sourceMappingURL=main.d54a473b.chunk.js.map