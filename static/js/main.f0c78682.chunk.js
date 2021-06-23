(this["webpackJsonpreact-mesto-auth"]=this["webpackJsonpreact-mesto-auth"]||[]).push([[0],{31:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),o=n(21),i=n.n(o),s=n(6),r=(n(31),n(2)),l=n(3),u=n(22),p=n(23),d=n(4),j=n(13),b="https://auth.nomoreparties.co",m={reg:"signup",login:"signin",checkToken:"users/me"},h="/mesto-react",O="https://mesto.nomoreparties.co/v1",f="8e942f57-cf63-4abe-b1a4-d7c8e2f5f3b4",_="cohort-23",g={user:"users/me",cards:"cards",cardLikes:"cards/likes"},v=Object(j.a)("baseUrl"),x=Object(j.a)("headers"),C=Object(j.a)("pathUser"),N=Object(j.a)("pathCards"),k=Object(j.a)("cardLikes"),y=new(function(){function e(t){var n=t.baseUrl,a=t.headers,c=t.paths,o=c.user,i=c.cards,s=c.cardLikes;Object(u.a)(this,e),Object.defineProperty(this,v,{writable:!0,value:void 0}),Object.defineProperty(this,x,{writable:!0,value:void 0}),Object.defineProperty(this,C,{writable:!0,value:void 0}),Object.defineProperty(this,N,{writable:!0,value:void 0}),Object.defineProperty(this,k,{writable:!0,value:void 0}),Object(d.a)(this,v)[v]=n,Object(d.a)(this,x)[x]=a,Object(d.a)(this,C)[C]=o,Object(d.a)(this,N)[N]=i,Object(d.a)(this,k)[k]=s}return Object(p.a)(e,[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}},{key:"_serverConnectionGet",value:function(e){return fetch("".concat(Object(d.a)(this,v)[v],"/").concat(e),{headers:Object(d.a)(this,x)[x]}).then(this._checkResponse)}},{key:"_serverConnectionSend",value:function(e,t,n){return fetch("".concat(Object(d.a)(this,v)[v],"/").concat(e),{method:t,headers:Object(d.a)(this,x)[x],body:JSON.stringify(n)}).then(this._checkResponse)}},{key:"_serverConnectionEdit",value:function(e,t,n){return fetch("".concat(Object(d.a)(this,v)[v],"/").concat(e,"/").concat(n),{method:t,headers:Object(d.a)(this,x)[x]}).then(this._checkResponse)}},{key:"getInitialCards",value:function(){return this._serverConnectionGet(Object(d.a)(this,N)[N])}},{key:"getInitialUser",value:function(){return this._serverConnectionGet(Object(d.a)(this,C)[C])}},{key:"patchUpdateProfile",value:function(e,t){return this._serverConnectionSend(Object(d.a)(this,C)[C],"PATCH",{name:e,about:t})}},{key:"postAddCard",value:function(e,t){return this._serverConnectionSend(Object(d.a)(this,N)[N],"POST",{name:e,link:t})}},{key:"deleteCard",value:function(e){return this._serverConnectionEdit(Object(d.a)(this,N)[N],"DELETE",e)}},{key:"putAppendLike",value:function(e){return this._serverConnectionEdit(Object(d.a)(this,k)[k],"PUT",e)}},{key:"deleteLike",value:function(e){return this._serverConnectionEdit(Object(d.a)(this,k)[k],"DELETE",e)}},{key:"patchUpdateUserAvatar",value:function(e){return this._serverConnectionSend("".concat(Object(d.a)(this,C)[C],"/avatar"),"PATCH",{avatar:e})}}]),e}())({baseUrl:"".concat(O,"/").concat(_),headers:{authorization:f,"Content-Type":"application/json"},paths:g}),P=n.p+"static/media/preloaderProfileImg.e8e535d6.gif",S=n(25),E=n.p+"static/media/logo.5f0f2709.svg",A=n(0);var w=function(e){var t=e.signOut,n=e.activeMenu;return Object(A.jsxs)("div",{className:n?"menu-mobile menu-mobile_active":"menu-mobile",children:[Object(A.jsx)("p",{className:"menu-mobile__email header__email",style:{display:n?"block":"none"},children:localStorage.getItem("email")}),Object(A.jsx)(s.b,{to:"".concat(h,"/signin"),className:"menu-mobile__auth header__link-auth",style:{color:"#A9A9A9"},onClick:t,children:"\u0412\u044b\u0439\u0442\u0438"})]})};var I=function(e){var t=e.loggedIn,n=e.signOut,c=Object(a.useState)(null),o=Object(r.a)(c,2),i=o[0],u=o[1],p=Object(a.useState)(!1),d=Object(r.a)(p,2),j=d[0],b=d[1],m=Object(l.h)().url;Object(a.useEffect)((function(){var e=function(){u(window.screen.width)};if(t)return e(),void window.addEventListener("resize",e);window.removeEventListener("resize",e)}),[t]);var O=function(){b(!j)};return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(w,{signOut:n,activeMenu:j}),Object(A.jsxs)("header",{className:"header page__position-center page__header",children:[Object(A.jsx)(s.b,{to:"".concat(h,"/mesto"),target:"_self",className:"header__link",children:Object(A.jsx)("img",{src:E,alt:"\u041c\u0435\u0441\u0442\u043e \u0420\u043e\u0441\u0441\u0438\u044f",className:"header__logo"})}),m==="".concat(h,"/signup")?Object(A.jsx)(s.b,{to:"".concat(h,"/signin"),className:"header__link-auth",children:"\u0412\u043e\u0439\u0442\u0438"}):m==="".concat(h,"/signin")?Object(A.jsx)(s.b,{to:"".concat(h,"/signup"),className:"header__link-auth",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}):void 0,t&&i<"505"?Object(A.jsx)("button",{type:"button",className:j?"header__toggle-menu header__toggle-menu_active":"header__toggle-menu",onClick:O}):t?Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)("p",{className:"header__email",children:localStorage.getItem("email")}),Object(A.jsx)(s.b,{to:"".concat(h,"/signin"),className:"header__link-auth",style:{color:"#A9A9A9"},onClick:n,children:"\u0412\u044b\u0439\u0442\u0438"})]}):void 0]})]})},L=c.a.createContext();var T=function(e){var t=e.card,n=e.onCardClick,c=e.onCardLike,o=e.onCardDelete,i=t.owner,s=t.link,r=t.name,l=t.likes,u=Object(a.useContext)(L)._id;return Object(A.jsx)("li",{className:"place__item",children:Object(A.jsxs)("div",{className:"card-place",children:[Object(A.jsx)("button",{className:i._id===u?"card-place__delete-btn":"card-place__delete-btn card-place__delete-btn_display_none",onClick:function(){return o(t)}}),Object(A.jsx)("img",{src:s,alt:r,className:"card-place__img",onClick:function(){n(r,s)}}),Object(A.jsx)("h2",{className:"card-place__title",children:r}),Object(A.jsxs)("div",{className:"card-place__likes",children:[Object(A.jsx)("button",{className:l.length>0&&l.some((function(e){return e._id===u}))?"card-place__like-btn card-place__like-btn_active":"card-place__like-btn",type:"button",onClick:function(){c(t)}}),Object(A.jsx)("span",{className:"card-place__counter",children:l.length})]})]})})},D=n.p+"static/media/profile-btn-edit.1e29eae2.svg",U=c.a.createContext(),F=c.a.createContext();var R=function(e){var t=e.onCardLike,n=Object(a.useContext)(L),c=n.avatar,o=n.about,i=n.name,s=Object(a.useContext)(U),r=Object(a.useContext)(F),l=r.handleEditAvatarClick,u=r.handleEditProfileClick,p=r.handleAddPlaceClick,d=r.handleCardClick,j=r.handleDeleteCardClick;return Object(A.jsxs)("main",{className:"content",children:[Object(A.jsxs)("section",{className:"profile content__position-center content__profile",children:[Object(A.jsxs)("div",{className:"profile__img-container",children:[Object(A.jsx)("img",{src:c,alt:"\u041f\u043e\u0440\u0442\u0440\u0435\u0442",className:"profile__img",style:{backgroundImage:"url(".concat(c,")")}}),Object(A.jsx)("img",{src:D,alt:"\u041a\u043d\u043e\u043f\u043a\u0430 \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f",className:"profile__edit-img",onClick:u})]}),Object(A.jsxs)("div",{className:"profile__about",children:[Object(A.jsxs)("div",{className:"profile__container-text",children:[Object(A.jsx)("h1",{className:"profile__title-name",children:o}),Object(A.jsx)("p",{className:"profile__subtitle-does",children:i})]}),Object(A.jsx)("button",{className:"profile__edit-btn",type:"button",onClick:l})]}),Object(A.jsx)("button",{className:"profile__add-card-place",type:"button",onClick:p})]}),Object(A.jsx)("section",{className:"place content__position-center content__place",children:Object(A.jsx)("ul",{className:"place__list",children:s.length>0?s.map((function(e){return Object(A.jsx)(T,{card:e,onCardClick:d,onCardLike:t,onCardDelete:j},e._id)})):Object(A.jsx)("div",{className:"place__result"})})})]})};var q=function(){return Object(A.jsx)("footer",{className:"footer page__position-center page__footer",children:Object(A.jsx)("p",{className:"footer__text-copyright",children:"\xa9 2021 Mesto Russia"})})};var B=function(e){var t=e.nameSelector,n=Object(a.useContext)(F),c=n.isShowPopupImg,o=n.closeAllPopups,i=n.selectedCard,s=i.name,r=i.link;return Object(A.jsx)("div",{className:c?"popup ".concat(t," popup_opened"):"popup ".concat(t),onClick:function(e){e.target.classList.contains("popup_opened")&&o()},children:Object(A.jsxs)("div",{className:"popup__container popup__container_review_img",children:[Object(A.jsx)("button",{className:"popup__btn",type:"button",onClick:o}),Object(A.jsxs)("figure",{className:"popup__img-container",children:[Object(A.jsx)("img",{src:r,className:"popup__img",alt:s}),Object(A.jsx)("figcaption",{className:"popup__img-text",children:s})]})]})})};var M=function(e){var t=e.title,n=e.name,a=e.isOpen,c=e.onClose,o=e.children,i=e.onSubmit,s=e.buttonText,r=e.loading;return Object(A.jsx)(A.Fragment,{children:Object(A.jsx)("div",{className:a?"popup ".concat(n," popup_opened"):"popup ".concat(n),onClick:function(e){e.target.className==="popup ".concat(n," popup_opened")&&c()},children:Object(A.jsxs)("div",{className:"popup__container",children:[Object(A.jsx)("button",{className:"popup__btn",type:"button",onClick:c}),Object(A.jsxs)("form",{className:"popup__form",name:n,onSubmit:i,children:[Object(A.jsx)("h2",{className:"popup__form-title",children:t}),o,Object(A.jsx)("button",{className:"button-popup button-popup_add_card",type:"submit",children:r?"".concat(s,"..."):s})]})]})})})},J=Object(a.createContext)(),z={length:function(e,t,n){if(e>0)return n.length>e&&n.length<t},fieldType:function(e,t){switch(e){case"url":return function(e){return e.startsWith("https://")}(t);default:return!0}}},G=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1e4,a=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return z.lengthIsValid=z.length(t,n,e),z.fieldTypeValid=z.fieldType(a,e),!(!z.lengthIsValid||!z.fieldTypeValid)};var V=function(e){var t=e.onUpdateUser,n=e.loading,c=Object(a.useState)({profileName:"",profileDoes:""}),o=Object(r.a)(c,2),i=o[0],s=o[1],l=i.profileName,u=i.profileDoes,p=Object(a.useState)(!1),d=Object(r.a)(p,2),j=d[0],b=d[1],m=Object(a.useState)(!1),h=Object(r.a)(m,2),O=h[0],f=h[1],_=Object(a.useContext)(L),g=_.about,v=_.name,x=Object(a.useContext)(J),C=Object(a.useContext)(F),N=C.isEditAvatarPopupOpen,k=C.closeAllPopups;Object(a.useEffect)((function(){N||s({profileName:g,profileDoes:v})}),[g,v,N]),Object(a.useEffect)((function(){var e=x(i.profileName,2,40),t=x(i.profileDoes,2,200);b(e),f(t)}),[i,x]);var y=function(e){s((function(t){var n=Object.assign({},t);return n[e.target.name]=e.target.value,n}))};return Object(A.jsx)(M,{title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",name:"popup_edit_profile",isOpen:N,onClose:k,onSubmit:function(e){e.preventDefault(),t(i)},buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",loading:n,children:Object(A.jsxs)(A.Fragment,{children:[Object(A.jsxs)("label",{className:"popup__form-label",children:[Object(A.jsx)("input",{type:"text",className:"popup__form-input popup__form-input_value_name",id:"profile-name-input",placeholder:"\u0418\u043c\u044f",name:"profileName",minLength:"2",maxLength:"40",required:!0,value:l,onChange:y,style:{borderBottom:j?"":"1px solid red"}}),Object(A.jsx)("span",{className:j?"popup__error-message profile-name-input-error":"popup__error-message profile-name-input-error popup__error-message_active",children:"\u041e\u0448\u0438\u0431\u043a\u0430 \u0432\u0430\u043b\u0438\u0434\u0430\u0446\u0438\u0438"})]}),Object(A.jsxs)("label",{className:"popup__form-label",children:[Object(A.jsx)("input",{type:"text",className:"popup__form-input popup__form-input_value_does",id:"profile-does-input",placeholder:"\u0414\u0435\u044f\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c",name:"profileDoes",minLength:"2",maxLength:"200",required:!0,value:u,onChange:y,style:{borderBottom:O?"":"1px solid red"}}),Object(A.jsx)("span",{className:O?"popup__error-message profile-does-input-error":"popup__error-message profile-does-input-error popup__error-message_active",children:"\u041e\u0448\u0438\u0431\u043a\u0430 \u0432\u0430\u043b\u0438\u0434\u0430\u0446\u0438\u0438"})]})]})})};var H=function(e){var t=e.onUpdateAvatar,n=e.loading,c=Object(a.useRef)(),o=Object(a.useContext)(F),i=o.isEditProfilePopupOpen,s=o.closeAllPopups;return Object(A.jsx)(M,{title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",name:"popup_edit_img",isOpen:i,onClose:function(){s(),c.current.value=""},onSubmit:function(e){e.preventDefault(),t({avatar:c.current.value}),c.current.value=""},buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",loading:n,children:Object(A.jsx)(A.Fragment,{children:Object(A.jsxs)("label",{className:"popup__form-label",children:[Object(A.jsx)("input",{type:"url",className:"popup__form-input",id:"url-img-edit",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",name:"imgEdit",required:!0,ref:c}),Object(A.jsx)("span",{className:"popup__error-message url-img-edit-error"})]})})})};var W=function(e){var t=e.onAddPlace,n=e.loading,c=Object(a.useState)(""),o=Object(r.a)(c,2),i=o[0],s=o[1],l=Object(a.useState)(""),u=Object(r.a)(l,2),p=u[0],d=u[1],j=Object(a.useState)(!1),b=Object(r.a)(j,2),m=b[0],h=b[1],O=Object(a.useState)(!1),f=Object(r.a)(O,2),_=f[0],g=f[1],v=Object(a.useContext)(J),x=Object(a.useContext)(F),C=x.isAddPlacePopupOpen,N=x.closeAllPopups;return Object(a.useEffect)((function(){var e=v(i,2,30),t=v(p,1,1e4,"url");h(e),g(t)}),[i,p,v]),Object(A.jsx)(M,{title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",name:"popup_add_card",isOpen:C,onClose:function(){N(),s(""),d("")},onSubmit:function(e){e.preventDefault(),t({name:i,link:p}),s(""),d("")},buttonText:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",loading:n,children:Object(A.jsxs)(A.Fragment,{children:[Object(A.jsxs)("label",{className:"popup__form-label",children:[Object(A.jsx)("input",{type:"text",className:"popup__form-input popup__form-input_value_place",id:"place-name-input",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",name:"placeName",minLength:"2",maxLength:"30",required:!0,value:i,onChange:function(e){return s(e.target.value)},style:{borderBottom:m?"":"1px solid red"}}),Object(A.jsx)("span",{className:m?"popup__error-message place-name-input-error":"popup__error-message place-name-input-error popup__error-message_active",children:"\u041e\u0448\u0438\u0431\u043a\u0430 \u0432\u0430\u043b\u0438\u0434\u0430\u0446\u0438\u0438"})]}),Object(A.jsxs)("label",{className:"popup__form-label",children:[Object(A.jsx)("input",{type:"url",className:"popup__form-input popup__form-input_value_img",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",id:"place-img-input",name:"placeImg",required:!0,value:p,onChange:function(e){return d(e.target.value)},style:{borderBottom:_?"":"1px solid red"}}),Object(A.jsx)("span",{className:_?"popup__error-message place-img-input-error":"popup__error-message place-img-input-error popup__error-message_active",children:"\u041e\u0448\u0438\u0431\u043a\u0430 \u0432\u0430\u043b\u0438\u0434\u0430\u0446\u0438\u0438"})]})]})})};var K=function(e){var t=e.onRemoveCard,n=e.loading,c=Object(a.useContext)(F),o=c.isConfirmPoppup,i=c.closeAllPopups;return Object(A.jsx)(M,{title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",name:"popup_remove_card",isOpen:o,onClose:i,onSubmit:function(e){e.preventDefault(),t()},buttonText:"\u0414\u0430",loading:n})};var Q=function(e){var t=e.setStateUser,n=e.setStateCards,c=e.loggedIn,o=e.signOut,i=e.isLoadingData,s=e.setIsLoadingData,r=Object(a.useContext)(L),l=Object(a.useContext)(U),u=Object(a.useContext)(F),p=u.closeAllPopups,d=u.cardRemove;return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(I,{loggedIn:c,signOut:o}),Object(A.jsx)(R,{onCardLike:function(e){var t;e.likes.some((function(e){return e._id===r._id}))?(t=e._id,y.deleteLike(t).then((function(e){n((function(n){return n.map((function(n){return n._id===t?e:n}))}))})).catch((function(e){console.error(e)}))):function(e){y.putAppendLike(e).then((function(t){n((function(n){return n.map((function(n){return n._id===e?t:n}))}))})).catch((function(e){console.error(e)}))}(e._id)}}),Object(A.jsx)(q,{}),Object(A.jsx)(V,{onUpdateUser:function(e){var n=e.profileDoes,a=e.profileName;s(!0),y.patchUpdateProfile(n,a).then((function(e){t(e),p()})).catch((function(e){console.error(e)})).finally((function(){s(!1)}))},loading:i}),Object(A.jsx)(H,{onUpdateAvatar:function(e){var n=e.avatar;s(!0),y.patchUpdateUserAvatar(n).then((function(e){t(e),p()})).catch((function(e){console.error(e)})).finally((function(){s(!1)}))},loading:i}),Object(A.jsx)(W,{onAddPlace:function(e){var t=e.name,a=e.link;s(!0),y.postAddCard(t,a).then((function(e){n([e].concat(Object(S.a)(l))),p()})).catch((function(e){console.error(e)})).finally((function(){s(!1)}))},loading:i}),Object(A.jsx)(K,{onRemoveCard:function(){s(!0),y.deleteCard(d._id).then((function(e){n((function(e){return e.filter((function(e){return e._id!==d._id}))})),p()})).catch((function(e){console.error(e)})).finally((function(){s(!1)}))},loading:i}),Object(A.jsx)(B,{name:"popup_edit_img"})]})},X=n(12),Y=n(10),Z=n.p+"static/media/auth-success-popup.e004e6e7.svg",$=n.p+"static/media/auth-error-popup.471086c8.svg";var ee=function(e){var t=e.name,n=e.authIn,c=e.messagePopup,o=Object(a.useContext)(F),i=o.isConfirmAuthPoppup,s=o.closeAllPopups;return Object(A.jsx)("div",{className:i?"popup ".concat(t," popup_opened"):"popup ".concat(t),onClick:function(e){e.target.className==="popup ".concat(t," popup_opened")&&s()},children:Object(A.jsxs)("div",{className:"popup__container",children:[Object(A.jsx)("button",{className:"popup__btn",type:"button",onClick:s}),Object(A.jsx)("span",{className:"popup__icon-status",style:{backgroundImage:"url(".concat(n?Z:$,")")}}),Object(A.jsx)("p",{className:"popup__auth-desc",children:n?c:"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437."})]})})};var te=function(e){var t=e.titleAuth,n=e.authIn,a=e.children,c=e.messagePopup;return Object(A.jsxs)("div",{className:"auth auth_center",children:[Object(A.jsx)("h2",{className:"auth__title",children:t}),a,Object(A.jsx)(ee,{authIn:n,name:"popup_auth_message",messagePopup:c})]})};var ne=function(e){var t=e.submitFormReg,n=e.isLoadingData,c=Object(a.useState)({authEmail:"",authPassword:""}),o=Object(r.a)(c,2),i=o[0],l=o[1],u=i.authEmail,p=i.authPassword,d=Object(a.useState)(!1),j=Object(r.a)(d,2),b=j[0],m=j[1],O=function(e){var t=e.target,n=t.name,a=t.value;l((function(e){return Object(Y.a)(Object(Y.a)({},e),{},Object(X.a)({},n,a))}))};return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(I,{}),Object(A.jsx)(te,{titleAuth:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",authIn:b,messagePopup:"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!",children:Object(A.jsxs)("form",{className:"auth__form",name:"registrationInMesto",onSubmit:function(e){return t(e,m,i,l)},children:[Object(A.jsx)("input",{type:"email",name:"authEmail",className:"auth__field-text",placeholder:"Email",required:!0,onChange:O,value:u}),Object(A.jsx)("input",{type:"password",name:"authPassword",className:"auth__field-text",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",required:!0,onChange:O,value:p}),Object(A.jsx)("button",{className:"auth__form-button",children:n?"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f...":"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"}),Object(A.jsxs)("p",{className:"auth__desc",children:["\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b?",Object(A.jsx)(s.b,{to:"".concat(h,"/signin"),className:"auth__link",children:"\xa0\u0412\u043e\u0439\u0442\u0438"})]})]})})]})};var ae=function(e){var t=e.submitForm,n=e.isLoadingData,c=Object(a.useState)({authEmail:"",authPassword:""}),o=Object(r.a)(c,2),i=o[0],s=o[1],l=i.authEmail,u=i.authPassword,p=Object(a.useState)(!1),d=Object(r.a)(p,2),j=d[0],b=d[1],m=function(e){var t=e.target,n=t.name,a=t.value;s((function(e){return Object(Y.a)(Object(Y.a)({},e),{},Object(X.a)({},n,a))}))};return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(I,{}),Object(A.jsx)(te,{titleAuth:"\u0412\u0445\u043e\u0434",authIn:j,messagePopup:"\u0423\u0441\u043f\u0435\u0445. \u041f\u043e\u0434\u043e\u0436\u0434\u0438\u0442\u0435...",children:Object(A.jsxs)("form",{className:"auth__form",name:"loginInMesto",onSubmit:function(e){return t(e,s,i,b)},children:[Object(A.jsx)("input",{type:"email",name:"authEmail",className:"auth__field-text",placeholder:"Email",required:!0,onChange:m,value:l}),Object(A.jsx)("input",{type:"password",name:"authPassword",className:"auth__field-text",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",required:!0,onChange:m,value:u}),Object(A.jsx)("button",{className:"auth__form-button",children:n?"\u0412\u043e\u0439\u0442\u0438...":"\u0412\u043e\u0439\u0442\u0438"})]})})]})},ce=b,oe=m,ie=oe.reg,se=oe.login,re=oe.checkToken,le=function(e){return e.ok?e.json():Promise.reject(e.json())},ue=n(26),pe=["component","path"],de=function(e){var t=e.component,n=e.path,a=Object(ue.a)(e,pe);return Object(A.jsx)(l.b,{path:n,children:a.loggedIn?Object(A.jsx)(t,Object(Y.a)({},a)):Object(A.jsx)(l.a,{to:"".concat(h,"/signin")})})};var je=function(){var e=Object(a.useState)({about:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430...",name:"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430 \u043f\u043e\u0434\u043e\u0436\u0434\u0438\u0442\u0435",avatar:P}),t=Object(r.a)(e,2),n=t[0],o=t[1],i=c.a.useState([]),s=Object(r.a)(i,2),u=s[0],p=s[1];Object(a.useEffect)((function(){Promise.all([y.getInitialUser(),y.getInitialCards()]).then((function(e){var t=Object(r.a)(e,2),n=t[0],a=t[1];o(n),p(a)})).catch((function(e){console.error(e)}))}),[]);var d=Object(a.useState)({}),j=Object(r.a)(d,2),b=j[0],m=j[1],O=Object(a.useState)(!1),f=Object(r.a)(O,2),_=f[0],g=f[1],v=Object(a.useState)(!1),x=Object(r.a)(v,2),C=x[0],N=x[1],k=Object(a.useState)(!1),S=Object(r.a)(k,2),E=S[0],w=S[1],I=Object(a.useState)(!1),T=Object(r.a)(I,2),D=T[0],R=T[1],q=Object(a.useState)(!1),B=Object(r.a)(q,2),M=B[0],z=B[1],V=Object(a.useState)(!1),H=Object(r.a)(V,2),W=H[0],K=H[1],X=c.a.useState({}),Y=Object(r.a)(X,2),Z=Y[0],$=Y[1],ee=c.a.useState(!1),te=Object(r.a)(ee,2),oe=te[0],ue=te[1],pe=Object(a.useState)(!1),je=Object(r.a)(pe,2),be=je[0],me=je[1];function he(){g(!1),N(!1),w(!1),R(!1),z(!1),K(!1)}var Oe=Object(l.g)();function fe(){K(!0)}Object(a.useEffect)((function(){localStorage.getItem("jwt")&&function(e){return fetch("".concat(ce,"/").concat(re),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then(le)}(localStorage.getItem("jwt")).then((function(e){e.data.email?localStorage.setItem("email",e.data.email):localStorage.setItem("email","\u0417\u0434\u0435\u0441\u044c \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0412\u0430\u0448 email"),ue(!0),Oe.push("".concat(h,"/mesto"))})).catch((function(e){console.error(e)}))})),Object(a.useEffect)((function(){var e=function(e){"Escape"===e.key&&he()};return(C||E||_||D||M||W)&&document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}}),[C,E,_,D,M,W]);var _e={closeAllPopups:he,handleEditAvatarClick:function(){g(!0)},handleEditProfileClick:function(){N(!0)},handleAddPlaceClick:function(){w(!0)},handleCardClick:function(e,t){m({name:e,link:t}),R(!0)},handleDeleteCardClick:function(e){z(!0),$(e)},handAuthClick:fe,isEditProfilePopupOpen:C,isEditAvatarPopupOpen:_,isAddPlacePopupOpen:E,isConfirmPoppup:M,isShowPopupImg:D,selectedCard:b,cardRemove:Z,isConfirmAuthPoppup:W};return Object(A.jsx)(J.Provider,{value:G,children:Object(A.jsx)(L.Provider,{value:n,children:Object(A.jsx)(U.Provider,{value:u,children:Object(A.jsx)(F.Provider,{value:_e,children:Object(A.jsxs)(l.d,{children:[Object(A.jsx)(de,{path:"".concat(h,"/mesto"),loggedIn:oe,signOut:function(){localStorage.removeItem("jwt"),Oe.push("".concat(h,"/signin")),ue(!1)},setStateUser:o,setStateCards:p,isLoadingData:be,setIsLoadingData:me,component:Q}),Object(A.jsx)(l.b,{path:"".concat(h,"/signup"),children:Object(A.jsx)(ne,{submitFormReg:function(e,t,n,a){e.preventDefault(),me(!0);var c,o=n.authEmail,i=n.authPassword;(c={password:i,email:o},fetch("".concat(ce,"/").concat(ie),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)}).then(le)).then((function(e){e.data.email?localStorage.setItem("email",e.data.email):localStorage.setItem("email","\u0417\u0434\u0435\u0441\u044c \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0412\u0430\u0448 email"),t(!0),a({authEmail:"",authPassword:""}),setTimeout((function(){Oe.push("".concat(h,"/signin")),he()}),2e3)})).catch((function(e){e.then((function(e){console.error(e.error),t(!1)}))})).finally((function(){fe(),me(!1)}))},isLoadingData:be})}),Object(A.jsx)(l.b,{path:"".concat(h,"/signin"),children:Object(A.jsx)(ae,{submitForm:function(e,t,n,a){e.preventDefault(),me(!0);var c,o=n.authEmail,i=n.authPassword;(c={password:i,email:o},fetch("".concat(ce,"/").concat(se),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)}).then(le)).then((function(e){e.token&&(localStorage.setItem("jwt",e.token),t({authEmail:"",authPassword:""}),ue(!0),setTimeout((function(){Oe.push("".concat(h,"/mesto")),he()}),0))})).catch((function(e){e.then((function(e){console.error(e.message),a(!1)}))})).finally((function(){fe(),me(!1)}))},isLoadingData:be})}),Object(A.jsx)(l.b,{path:"*",children:oe?Object(A.jsx)(l.a,{to:"".concat(h,"/mesto")}):Object(A.jsx)(l.a,{to:"".concat(h,"/signin")})})]})})})})})},be=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,42)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),o(e),i(e)}))};i.a.render(Object(A.jsx)(c.a.StrictMode,{children:Object(A.jsx)(s.a,{children:Object(A.jsx)(je,{})})}),document.getElementById("root")),be()}},[[41,1,2]]]);
//# sourceMappingURL=main.f0c78682.chunk.js.map