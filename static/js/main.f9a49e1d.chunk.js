(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{32:function(n,t,e){},37:function(n,t,e){"use strict";e.r(t);var r=e(1),i=e(2),o=e.n(i),c=e(22),a=e.n(c),u=(e(32),e(7)),d=e(13);e(33),e(38),e(39);d.a.apps.length||d.a.initializeApp({apiKey:"AIzaSyAS2J78qR7XZCHwctXU6zepPz7L0LZ1Nts",authDomain:"todos-ffc9f.firebaseapp.com",projectId:"todos-ffc9f",storageBucket:"todos-ffc9f.appspot.com",messagingSenderId:"485881050351",appId:"1:485881050351:web:64e82f4a2a57549607971a"});var s=d.a,l=d.a.auth(),b=d.a.firestore(),p=(d.a.storage(),e(4)),f=e(5);function x(){var n=Object(p.a)(["\n  font-size: 24px;\n  color: #658ec6;\n"]);return x=function(){return n},n}function h(){var n=Object(p.a)(["\n  background: #fff;\n  height: 780px;\n  width: ","px;\n  background: linear-gradient(\n    to right bottom,\n    rgba(255, 255, 255, 0.7),\n    rgba(255, 255, 255, 0.3)\n  );\n  border-radius: 2rem;\n  z-index: 2;\n  backdrop-filter: blur(2rem);\n  overflow: hidden;\n  @media (max-width: 1020px) {\n    height: 1700px;\n  }\n"]);return h=function(){return n},n}function j(){var n=Object(p.a)(["\n  min-height: 100vh;\n  background: linear-gradient(to right top, #65dfc9, #6cdbeb);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return j=function(){return n},n}function g(){var n=Object(p.a)(['\n  html,\n  body {\n    margin: 0;\n    padding: 0;\n  }\n  body {\n    font-family: "Poppins", sans-serif;\n  }\n  div,\n  span,\n  input,\n  textarea,\n  button {\n    box-sizing: border-box;\n  }\n  input:focus,\n  textarea:focus {\n    outline: none;\n  }\n  input,\n  textarea {\n    font-family: inherit;\n  }\n']);return g=function(){return n},n}var O=Object(f.a)(g()),v=f.b.div(j()),m=f.b.div(h(),(function(n){return n.isLoggedIn?1020:500})),w=f.b.p(x()),k=e(11),y=e.n(k),S=e(14),C=e.p+"static/media/google-plus-g-brands.698cb241.svg",z=e.p+"static/media/github-brands.45ae3fa2.svg";function I(){var n=Object(p.a)(["\n  border: none;\n  font-size: 16px;\n  margin-top: 10px;\n  background-color: #211f1f;\n  transition: 0.3s ease-in-out;\n  &:hover {\n    cursor: pointer;\n  }\n"]);return I=function(){return n},n}function _(){var n=Object(p.a)(["\n  border: none;\n  font-size: 16px;\n  margin-top: 10px;\n  background-color: #db4a39;\n  transition: 0.3s ease-in-out;\n  &:hover {\n    cursor: pointer;\n  }\n"]);return _=function(){return n},n}function P(){var n=Object(p.a)(["\n  border: 1px solid rgba(101, 142, 198, 0.2);\n  background: linear-gradient(to right, #65dfc9, #6cdbeb);\n  &:hover {\n    border: 1px solid rgba(101, 142, 198, 0.6);\n    cursor: pointer;\n    background: linear-gradient(to right, #6cdbeb, #65dfc9);\n    color: #fff;\n  }\n"]);return P=function(){return n},n}function D(){var n=Object(p.a)(["\n  width: 400px;\n  font-size: 24px;\n  padding: 6px 12px;\n  border-radius: 5px;\n  color: #fff;\n  transition: 0.3s ease-in-out;\n  & > img {\n    height: 30px;\n    width: 30px;\n    float: left;\n    background-color: #fff;\n    padding: 3px;\n    border-radius: 5px;\n  }\n  & > span {\n    display: inline-block;\n    vertical-align: middle;\n    height: 30px;\n    line-height: 30px;\n  }\n"]);return D=function(){return n},n}function A(){var n=Object(p.a)(["\n  font-size: 16px;\n  color: #426696;\n  margin-left: 10px;\n  &:hover {\n    cursor: pointer;\n    text-decoration: underline;\n  }\n"]);return A=function(){return n},n}function E(){var n=Object(p.a)(["\n  display: inline-block;\n  font-size: 16px;\n  color: #658ec6;\n"]);return E=function(){return n},n}function N(){var n=Object(p.a)(["\n  text-align: right;\n  width: 400px;\n  margin-top: 10px;\n  margin-bottom: 20px;\n"]);return N=function(){return n},n}function W(){var n=Object(p.a)(["\n  color: #f00;\n  width: 400px;\n"]);return W=function(){return n},n}function L(){var n=Object(p.a)(["\n  display: block;\n  width: 400px;\n  margin-bottom: 30px;\n  font-size: 24px;\n  padding: 6px 12px;\n  border: 1px solid rgba(101, 142, 198, 0.2);\n  background-color: transparent;\n  border-radius: 5px;\n  color: #658ec6;\n  &:focus {\n    outline: none;\n    border: 1px solid rgba(101, 142, 198, 0.6);\n  }\n  &::placeholder {\n    color: rgba(101, 142, 198, 0.3);\n  }\n"]);return L=function(){return n},n}function B(){var n=Object(p.a)(["\n  width: 400px;\n  font-size: 16px;\n  color: #658ec6;\n  margin-bottom: 6px;\n"]);return B=function(){return n},n}function F(){var n=Object(p.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  flex-direction: column;\n"]);return F=function(){return n},n}var H=f.b.div(F()),M=f.b.label(B()),V=f.b.input(L()),J=f.b.p(W()),U=f.b.div(N()),X=f.b.p(E()),G=f.b.a(A()),K=f.b.button(D()),T=Object(f.b)(K)(P()),Z=Object(f.b)(K)(_()),q=Object(f.b)(K)(I()),R=function(){var n=Object(i.useState)(""),t=Object(u.a)(n,2),e=t[0],o=t[1],c=Object(i.useState)(""),a=Object(u.a)(c,2),d=a[0],b=a[1],p=Object(i.useState)(""),f=Object(u.a)(p,2),x=f[0],h=f[1],j=Object(i.useState)(""),g=Object(u.a)(j,2),O=g[0],v=g[1],m=Object(i.useState)(!1),w=Object(u.a)(m,2),k=w[0],I=w[1],_=function(n){var t=n.target,e=t.name,r=t.value;"email"===e?o(r):"password"===e?b(r):"passwordConfirm"===e&&h(r)},P=function(){var n=Object(S.a)(y.a.mark((function n(){return y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return v(""),n.prev=1,n.next=4,l.signInWithEmailAndPassword(e,d);case 4:n.next=9;break;case 6:n.prev=6,n.t0=n.catch(1),v(n.t0.message);case 9:case"end":return n.stop()}}),n,null,[[1,6]])})));return function(){return n.apply(this,arguments)}}(),D=function(){var n=Object(S.a)(y.a.mark((function n(t,e){var r;return y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"google"===e?r=new s.auth.GoogleAuthProvider:"github"===e&&(r=new s.auth.GithubAuthProvider),n.next=3,l.signInWithPopup(r);case 3:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),A=function(){var n=Object(S.a)(y.a.mark((function n(){return y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(0!==e.length&&0!==d.length){n.next=4;break}v("fill the email and password"),n.next=17;break;case 4:if(d===x){n.next=8;break}v("wrong password!"),n.next=17;break;case 8:return n.prev=8,v(""),n.next=12,l.createUserWithEmailAndPassword(e,d);case 12:n.next=17;break;case 14:n.prev=14,n.t0=n.catch(8),v(n.t0.message);case 17:case"end":return n.stop()}}),n,null,[[8,14]])})));return function(){return n.apply(this,arguments)}}();return Object(r.jsxs)(H,{children:[Object(r.jsx)(M,{children:"email"}),Object(r.jsx)(V,{value:e,name:"email",placeholder:"Email...",onChange:_}),Object(r.jsx)(M,{children:"password"}),Object(r.jsx)(V,{type:"password",value:d,name:"password",placeholder:"Password...",onChange:_}),k&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(M,{children:"password confirm"}),Object(r.jsx)(V,{type:"password",value:x,name:"passwordConfirm",placeholder:"Password Confirm...",onChange:_})]}),k?Object(r.jsx)(T,{onClick:function(){return A()},children:"Sign up"}):Object(r.jsx)(T,{onClick:function(){return P()},children:"Sign in"}),Object(r.jsx)(J,{children:O}),k?Object(r.jsxs)(U,{children:[Object(r.jsx)(X,{children:"Have an account?"}),Object(r.jsx)(G,{onClick:function(){return I(!1)},children:"Sign in"})]}):Object(r.jsxs)(U,{children:[Object(r.jsx)(X,{children:"Don't have account?"}),Object(r.jsx)(G,{onClick:function(){return I(!0)},children:"Sign up"})]}),Object(r.jsxs)(Z,{onClick:function(n){return D(n,"google")},children:[Object(r.jsx)("img",{src:C,alt:"google_icon"}),Object(r.jsx)("span",{children:"Continue with google"})]}),Object(r.jsxs)(q,{onClick:function(n){return D(n,"github")},children:[Object(r.jsx)("img",{src:z,alt:"github_icon"}),Object(r.jsx)("span",{children:"Continue with github"})]})]})},Y=e(16),Q=e(26),$=e.p+"static/media/check(white).2c5d41f9.svg",nn=e.p+"static/media/trash(white).d7da90f6.svg";function tn(){var n=Object(p.a)(["\n  background-color: #211f1f;\n  margin-right: 10px;\n"]);return tn=function(){return n},n}function en(){var n=Object(p.a)(["\n  background-color: #db4a39;\n"]);return en=function(){return n},n}function rn(){var n=Object(p.a)(["\n  padding: 6px 12px;\n  border-radius: 5px;\n  color: #fff;\n  border: none;\n  float: right;\n"]);return rn=function(){return n},n}function on(){var n=Object(p.a)(["\n  margin-bottom: 20px;\n"]);return on=function(){return n},n}function cn(){var n=Object(p.a)(["\n  margin-bottom: 10px;\n"]);return cn=function(){return n},n}function an(){var n=Object(p.a)(["\n  width: 100%;\n  height: calc(100% - 86px);\n  border: 0;\n  border-radius: 1rem;\n  color: #658ec6;\n  font-size: 24px;\n  padding: 2rem;\n  margin-top: 20px;\n  background: linear-gradient(\n    to left top,\n    rgba(255, 255, 255, 0.2),\n    rgba(255, 255, 255, 0.9)\n  );\n  resize: none;\n  &:focus {\n    outline: none;\n  }\n"]);return an=function(){return n},n}function un(){var n=Object(p.a)(["\n  width: 100%;\n  padding: 6px 12px;\n  color: #426696;\n"]);return un=function(){return n},n}function dn(){var n=Object(p.a)(["\n  position: relative;\n  display: inline-block;\n  vertical-align: middle;\n  height: 780px;\n  width: 600px;\n  padding: 32px;\n  text-align: center;\n  animation: fadeIn 0.5s linear;\n  text-shadow: 2px 2px rgba(0, 0, 0, 0.5);\n  user-select: none;\n  @media (max-width: 1020px) {\n    display: block;\n    margin: 40px auto;\n  }\n  @media (max-width: 768px) {\n    width: 500px;\n    padding: 0;\n  }\n"]);return dn=function(){return n},n}function sn(){var n=Object(p.a)(["\n  position: absolute;\n  left: 50%;\n  bottom: 30px;\n  transform: translateX(-50%);\n  width: 200px;\n  font-size: 24px;\n  padding: 6px 12px;\n  border-radius: 5px;\n  color: #fff;\n  border: none;\n  margin-top: 10px;\n  transition: 0.3s ease-in-out;\n  background-color: #65dfc9;\n  &:hover {\n    cursor: pointer;\n    background-color: #211f1f;\n  }\n"]);return sn=function(){return n},n}function ln(){var n=Object(p.a)(["\n  position: absolute;\n  width: 10px;\n  right: 0px;\n  top: ",";\n  height: ",";\n  background-color: #65dfc9;\n  transition: 0.3s ease;\n  border-radius: 30px;\n  opacity: ",";\n"]);return ln=function(){return n},n}function bn(){var n=Object(p.a)(['\n  content: "";\n  position: absolute;\n  width: 10px;\n  height: 360px;\n  right: 0px;\n  top: 0;\n  background-color: #658ec6;\n  border-radius: 30px;\n  opacity: ',";\n"]);return bn=function(){return n},n}function pn(){var n=Object(p.a)(["\n  width: 24px;\n  height: 24px;\n  margin-right: 12px;\n  display: inline-block;\n  vertical-align: middle;\n  & > img {\n    width: auto;\n    height: 100%;\n  }\n  &:hover {\n    cursor: pointer;\n  }\n"]);return pn=function(){return n},n}function fn(){var n=Object(p.a)(["\n  width: 24px;\n  height: 24px;\n  margin-right: 12px;\n  display: inline-block;\n  vertical-align: middle;\n  & > img {\n    width: auto;\n    height: 100%;\n  }\n  &:hover {\n    cursor: pointer;\n  }\n"]);return fn=function(){return n},n}function xn(){var n=Object(p.a)(["\n  position: relative;\n  width: 278px;\n  display: inline-block;\n  text-align: left;\n  vertical-align: middle;\n  color: #658ec6;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  &.is_done {\n    text-decoration: line-through;\n    text-decoration-color: #658ec6;\n    color: rgba(101, 142, 198, 0.2);\n  }\n  &:hover {\n    cursor: pointer;\n  }\n"]);return xn=function(){return n},n}function hn(){var n=Object(p.a)(["\n  display: block;\n  font-size: 24px;\n  height: 36px;\n"]);return hn=function(){return n},n}function jn(){var n=Object(p.a)(["\n  width: 360px;\n  margin: 0;\n  overflow-y: hidden;\n  transition: 0.3s ease;\n  padding-left: 40px;\n  box-sizing: content-box;\n  transform: ",";\n"]);return jn=function(){return n},n}function gn(){var n=Object(p.a)(["\n  position: relative;\n  width: 400px;\n  height: 360px;\n  overflow: hidden;\n"]);return gn=function(){return n},n}function On(){var n=Object(p.a)(["\n  width: 300px;\n  color: #658ec6;\n  padding: 6px 12px;\n  margin-top: 50px;\n  margin-bottom: 50px;\n  &::placeholder {\n    color: #658ec6;\n    opacity: 0.3;\n  }\n"]);return On=function(){return n},n}function vn(){var n=Object(p.a)(["\n  border: 1px solid rgba(101, 142, 198, 0.2);\n  background-color: transparent;\n  font-size: 36px;\n  border-radius: 5px;\n  &:focus {\n    outline: none;\n    border: 1px solid rgba(101, 142, 198, 0.6);\n  }\n"]);return vn=function(){return n},n}function mn(){var n=Object(p.a)(["\n  width: 20px;\n"]);return mn=function(){return n},n}function wn(){var n=Object(p.a)(["\n  width: 100px;\n"]);return wn=function(){return n},n}function kn(){var n=Object(p.a)(["\n  width: 400px;\n  margin: 30px auto;\n  & > span {\n    display: inline-block;\n    vertical-align: middle;\n    font-size: 80px;\n    text-shadow: 2px 2px #658ec6;\n    text-align: center;\n  }\n"]);return kn=function(){return n},n}function yn(){var n=Object(p.a)(["\n  margin: 30px 0;\n"]);return yn=function(){return n},n}function Sn(){var n=Object(p.a)(["\n  position: relative;\n  display: inline-block;\n  vertical-align: middle;\n  width: 420px;\n  height: 780px;\n  text-align: center;\n  animation: fadeIn 0.5s linear;\n  user-select: none;\n  background: linear-gradient(\n    to right bottom,\n    rgba(255, 255, 255, 0.7),\n    rgba(255, 255, 255, 0.3)\n  );\n  color: #426696;\n  @media (max-width: 1020px) {\n    display: block;\n    margin: 40px auto;\n    width: 536px;\n  }\n  @media (max-width: 768px) {\n    width: 500px;\n  }\n"]);return Sn=function(){return n},n}var Cn=f.b.aside(Sn()),zn=f.b.h1(yn()),In=(f.b.div(kn()),f.b.span(wn()),f.b.span(mn()),f.b.input(vn())),_n=Object(f.b)(In)(On()),Pn=f.b.div(gn()),Dn=f.b.ul(jn(),(function(n){return"translate3D(0px, ".concat(-36*n.scroll,"px, 0px)")})),An=f.b.li(hn()),En=f.b.span(xn()),Nn=f.b.picture(fn()),Wn=f.b.picture(pn()),Ln=f.b.div(bn(),(function(n){return n.isVisibleScroll?1:0})),Bn=f.b.div(ln(),(function(n){return n.activeScrollTop}),(function(n){return n.activeScrollHeight}),(function(n){return n.isVisibleScroll?1:0})),Fn=f.b.button(sn()),Hn=f.b.div(dn()),Mn=Object(f.b)(In)(un()),Vn=f.b.textarea(an()),Jn=f.b.h3(cn()),Un=f.b.p(on()),Xn=f.b.button(rn()),Gn=Object(f.b)(Xn)(en()),Kn=Object(f.b)(Xn)(tn()),Tn=function(n){var t=n.userObj,e=n.todos,o=n.openConfirm,c=n.closeConfirm,a=Object(i.useState)(!1),d=Object(u.a)(a,2),s=d[0],p=d[1],f=Object(i.useState)(0),x=Object(u.a)(f,2),h=x[0],j=x[1],g=Object(i.useState)(0),O=Object(u.a)(g,2),v=O[0],m=O[1],w=Object(i.useState)(""),k=Object(u.a)(w,2),C=k[0],z=k[1],I=Object(i.useState)({}),_=Object(u.a)(I,2),P=_[0],D=_[1],A=Object(i.useState)(0),E=Object(u.a)(A,2),N=E[0],W=E[1],L=Object(i.useState)({}),B=Object(u.a)(L,2),F=B[0],H=B[1],M=Object(i.useState)(!1),V=Object(u.a)(M,2),J=V[0],U=V[1],X=Object(i.useState)([]),G=Object(u.a)(X,2),K=G[0],T=G[1];Object(i.useEffect)((function(){j("".concat(parseFloat(360*N/K.length),"px"))}),[N,K]);var Z=Object(i.useCallback)((function(n){var t,e,r,i,o,c,a=K.filter((function(t){return t.id===n}));H({id:null===(t=a[0])||void 0===t?void 0:t.id,title:null===(e=a[0])||void 0===e?void 0:e.title,content:null===(r=a[0])||void 0===r?void 0:r.content}),D({id:null===(i=a[0])||void 0===i?void 0:i.id,title:null===(o=a[0])||void 0===o?void 0:o.title,content:null===(c=a[0])||void 0===c?void 0:c.content})}),[K]);Object(i.useEffect)((function(){e&&t&&e.where("uid","==",t.uid).onSnapshot((function(n){var t=n.docs.map((function(n){return Object(Q.a)({id:n.id},n.data())}));T(t.sort((function(n,t){return Math.max(t.created_at,t.updated_at||null)-Math.max(n.created_at,n.updated_at||null)})))}))}),[e,t]),Object(i.useEffect)((function(){J&&(Z(K[0].id),U(!1)),0===K.filter((function(n){return n.id===F.id})).length&&(H({}),D({})),K.length>10?p(!0):p(!1),m("".concat(Math.ceil(10/K.length*360),"px"))}),[K]);var q=function(n){var t=n.target,e=t.name,r=t.value;H((function(n){return Object.assign({},n,Object(Y.a)({},e,r))}))},R=function(){var n=F.id,t=F.title,e=F.content;P.title===t&&P.content===e||b.doc("todos/".concat(n)).update({title:t,content:e,updated_at:new Date})},tn=function(){var n=Object(S.a)(y.a.mark((function n(t){var e;return y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e=function(){b.doc("todos/".concat(t)).delete(),c()},o(Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(Jn,{children:"\uba54\ubaa8 \uc0ad\uc81c"}),Object(r.jsx)(Un,{children:"\uc120\ud0dd\ud55c \uba54\ubaa8\ub97c \uc0ad\uc81c \ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?"}),Object(r.jsx)(Gn,{onClick:function(){return e()},children:"\uc0ad\uc81c"}),Object(r.jsx)(Kn,{onClick:function(){return c()},children:"\ucde8\uc18c"})]}));case 2:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),en=F.id,rn=F.title,on=F.content;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(Cn,{children:[Object(r.jsx)(zn,{children:t.displayName&&"Welcome ".concat(t.displayName)}),Object(r.jsx)(_n,{value:C,onChange:function(n){return z(n.target.value)},onKeyUp:function(n){13===n.keyCode&&(e.add({title:C,content:"",created_at:new Date,inDone:!1,uid:t.uid}),z(""),U(!0))},placeholder:"Write a to do"}),Object(r.jsxs)(Pn,{children:[Object(r.jsx)(Dn,{onWheel:function(n){n.deltaY>0?N+10<K.length&&W((function(n){return n+1})):N>0&&W((function(n){return n-1}))},scroll:N,children:K.map((function(n){return Object(r.jsxs)(An,{children:[Object(r.jsx)(En,{onClick:function(){return Z(n.id)},className:"".concat(n.isDone?"is_done":""),children:n.title}),Object(r.jsx)(Nn,{onClick:function(){return function(n){e.doc(n).get().then((function(n){if(n.exists)return n.ref.update({isDone:!n.data().isDone});console.error("not exists!")}))}(n.id)},children:Object(r.jsx)("img",{src:$,alt:"check_icon"})}),Object(r.jsx)(Wn,{onClick:function(){return tn(n.id)},children:Object(r.jsx)("img",{src:nn,alt:"trash_icon"})})]},n.id)}))}),Object(r.jsx)(Ln,{isVisibleScroll:s}),Object(r.jsx)(Bn,{activeScrollTop:h,activeScrollHeight:v,isVisibleScroll:s})]}),Object(r.jsx)(Fn,{onClick:function(){return l.signOut()},children:"Log out"})]}),en&&Object(r.jsxs)(Hn,{children:[Object(r.jsx)(Mn,{value:rn,name:"title",onChange:q,onBlur:R}),Object(r.jsx)(Vn,{value:on,name:"content",onChange:q,onBlur:R})]})]})};function Zn(){var n=Object(p.a)(["\n  background-color: var(--white);\n  border-radius: 10px;\n  position: relative;\n  padding: 20px 40px;\n"]);return Zn=function(){return n},n}function qn(){var n=Object(p.a)(["\n  position: absolute;\n  left: 0;\n  top: 0;\n  background-color: var(--bg-modal-overlay);\n  width: 100%;\n  height: 100%;\n"]);return qn=function(){return n},n}function Rn(){var n=Object(p.a)(["\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100vw;\n  height: 100vh;\n  z-index: 1000;\n  transition: 0.2s ease-in-out;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return Rn=function(){return n},n}var Yn=f.b.div(Rn()),Qn=f.b.div(qn()),$n=f.b.div(Zn()),nt=function(n){var t=n.children,e=n.handleCancel;return Object(r.jsxs)(Yn,{children:[Object(r.jsx)(Qn,{onClick:function(){return e()}}),Object(r.jsx)($n,{children:t})]})},tt=b.collection("todos"),et=function(){var n=Object(i.useState)(null),t=Object(u.a)(n,2),e=t[0],o=t[1],c=Object(i.useState)(!1),a=Object(u.a)(c,2),d=a[0],s=a[1],b=Object(i.useState)(!1),p=Object(u.a)(b,2),f=p[0],x=p[1],h=Object(i.useState)(null),j=Object(u.a)(h,2),g=j[0],k=j[1];Object(i.useEffect)((function(){l.onAuthStateChanged((function(n){o(n?{displayName:n.displayName,uid:n.uid,updateProfile:function(t){return n.updateProfile(t)}}:null),s(!0)}))}),[]);return Object(r.jsxs)(v,{children:[Object(r.jsx)(O,{}),d?Object(r.jsx)(m,{isLoggedIn:e,children:e?Object(r.jsx)(Tn,{userObj:e,todos:tt,openConfirm:function(n){k(n),x(!0)},closeConfirm:function(){x(!1)}}):Object(r.jsx)(R,{})}):Object(r.jsx)(w,{children:"Initialize..."}),f&&Object(r.jsx)(nt,{handleCancel:function(){return x(!1)},children:g})]})};a.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(et,{})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.f9a49e1d.chunk.js.map