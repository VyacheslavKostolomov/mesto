(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e){var n=e.url,r=e.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._url=n,this._headers=r}var n,r;return n=t,(r=[{key:"getUserData",value:function(){return fetch("".concat(this._url,"/users/me"),{method:"GET",headers:{Authorization:"".concat(this._headers)}}).then((function(e){if(e.ok)return e.json();Promise.reject("Ошибка загрузки данных ".concat(e.status))}))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._url,"/cards"),{method:"GET",headers:{Authorization:"".concat(this._headers)}}).then((function(e){if(e.ok)return e.json();Promise.reject("Ошибка загрузки данных ".concat(e.status))}))}},{key:"addNewCard",value:function(e){return fetch("".concat(this._url,"/cards"),{method:"POST",headers:{Authorization:"".concat(this._headers),"Content-Type":"application/json"},body:JSON.stringify({name:e.name,link:e.link})}).then((function(e){if(e.ok)return e.json();Promise.reject("Ошибка загрузки данных ".concat(e.status))}))}},{key:"getUserId",value:function(){return fetch("https://mesto.nomoreparties.co/v1/cohort-46/users/me",{method:"GET",headers:{Authorization:"ddb2474c-5895-4c61-a372-bb2b9d4e6bd7"}}).then((function(e){if(e.ok)return e.json();Promise.reject("Ошибка загрузки данных ".concat(e.status))})).then((function(e){return e._id}))}},{key:"editProfile",value:function(e){return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:{Authorization:"".concat(this._headers),"Content-Type":"application/json"},body:JSON.stringify({name:e.inputUserName,about:e.inputUserJob})}).then((function(e){if(e.ok)return e.json();Promise.reject("Ошибка загрузки данных ".concat(e.status))}))}},{key:"changeProfileAvatar",value:function(e){return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:{Authorization:"".concat(this._headers),"Content-Type":"application/json"},body:JSON.stringify({avatar:e.avatarLink})}).then((function(e){if(e.ok)return e.json();Promise.reject("Ошибка загрузки данных ".concat(e.status))}))}},{key:"deleteCard",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e),{method:"DELETE",headers:{Authorization:"".concat(this._headers),"Content-Type":"application/json"}}).then((function(e){if(e.ok)return e.json();Promise.reject("Ошибка загрузки данных ".concat(e.status))}))}},{key:"changeLikeStatus",value:function(e,t){return e?fetch("".concat(this._url,"/cards/").concat(t,"/likes"),{method:"DELETE",headers:{Authorization:"".concat(this._headers),"Content-Type":"application/json"}}).then((function(e){if(e.ok)return e.json();Promise.reject("Ошибка загрузки данных ".concat(e.status))})):fetch("".concat(this._url,"/cards/").concat(t,"/likes"),{method:"PUT",headers:{Authorization:"".concat(this._headers),"Content-Type":"application/json"}}).then((function(e){if(e.ok)return e.json();Promise.reject("Ошибка загрузки данных ".concat(e.status))}))}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=document.querySelector(n)}var t,r;return t=e,(r=[{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}},{key:"renderer",value:function(e){this._renderer(e)}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t,n,r,o,i,a){var u,c,s=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),c=function(e){s._likeCounter.textContent=e>=1?e:""},(u="setLikesCount")in this?Object.defineProperty(this,u,{value:c,enumerable:!0,configurable:!0,writable:!0}):this[u]=c,this._name=t.name,this._link=t.link,this._likes=t.likes,this._templateElement=n,this._element=this._getTemplate(),this._elementImage=this._element.querySelector(".element__image"),this._elementTitle=this._element.querySelector(".element__title"),this._likeButton=this._element.querySelector(".element__like-button"),this._likeCounter=this._element.querySelector(".element__like-counter"),this._deleteButton=this._element.querySelector(".element__delete-button"),this._handleCardClick=r,this._handleLikeIconClick=a,this._deleteCardPopup=o,this._userId=i,this._cardOwnerId=t.owner._id,this._cardId=t._id}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateElement).content.querySelector(".element").cloneNode(!0)}},{key:"_subscribeToEvents",value:function(){var e=this;this._likeButton.addEventListener("click",(function(){e._likeButton.classList.contains("element__like-button_active")?(e._handleLikeIconClick(!0,e._cardId,e),e._likeButton.classList.remove("element__like-button_active")):(e._handleLikeIconClick(!1,e._cardId,e),e._likeButton.classList.add("element__like-button_active"))})),this._deleteButton.addEventListener("click",(function(){e._deleteCardPopup(e._cardId,e._element)})),this._elementImage.addEventListener("click",(function(){e._handleCardClick(e._name,e._link)}))}},{key:"generateCard",value:function(){var e=this;return this._elementImage.src=this._link,this._elementImage.alt=this._name,this._elementTitle.textContent=this._name,this._userId!==this._cardOwnerId&&this._deleteButton.remove(),this._likes.length>=1&&(this._likeCounter.textContent=this._likes.length),this._likes.forEach((function(t){t._id===e._userId&&e._likeButton.classList.add("element__like-button_active")})),this._subscribeToEvents(),this._element}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._config=t,this._form=n,this._inputList=Array.from(this._form.querySelectorAll(this._config.inputSelector)),this._buttonElement=this._form.querySelector(this._config.submitButtonSelector)}var t,n;return t=e,(n=[{key:"enableValidation",value:function(){this._form.addEventListener("submit",(function(e){e.preventDefault()})),this._setEventListeners()}},{key:"_setEventListeners",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))}))}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideError(e):this._showError(e)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?this.disableSubmitButton():(this._buttonElement.removeAttribute("disabled",!0),this._buttonElement.classList.remove(this._config.inactiveButtonClass))}},{key:"_showError",value:function(e){this._errorElement=e.nextElementSibling,this._errorElement.textContent=e.validationMessage,this._errorElement.classList.add(this._config.errorClass),e.classList.add(this._config.inputErrorClass)}},{key:"_hideError",value:function(e){this._errorElement=e.nextElementSibling,this._errorElement.textContent="",this._errorElement.classList.remove(this._config.errorClass),e.classList.remove(this._config.inputErrorClass)}},{key:"resetValidationErrors",value:function(){var e=this;this._inputList.forEach((function(t){e._hideError(t)}))}},{key:"disableSubmitButton",value:function(){this._buttonElement.setAttribute("disabled",!0),this._buttonElement.classList.add(this._config.inactiveButtonClass)}}])&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l=function(){function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),s(this,"_handleEscClose",(function(e){"Escape"===e.key&&n.close()})),s(this,"_handleCloseByClick",(function(e){e.target.classList.contains("popup_opened")&&n.close()})),this._popup=document.getElementById(t),this._closeButton=this._popup.querySelector(".popup__close-button")}var t,n;return t=e,(n=[{key:"open",value:function(){document.addEventListener("keydown",this._handleEscClose),this._popup.classList.add("popup_opened")}},{key:"close",value:function(){document.removeEventListener("keydown",this._handleEscClose),this._popup.classList.remove("popup_opened")}},{key:"setEventListeners",value:function(){this._closeButton.addEventListener("click",this.close.bind(this)),this._popup.addEventListener("click",this._handleCloseByClick)}}])&&c(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(){return h="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=d(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},h.apply(this,arguments)}function d(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=y(e)););return e}function _(e,t){return _=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},_(e,t)}function m(e,t){if(t&&("object"===f(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}var b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&_(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=y(r);if(o){var n=y(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return m(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._photoPopupImage=t._popup.querySelector(".popup__image"),t._photoPopupCaption=t._popup.querySelector(".popup__caption"),t}return t=a,(n=[{key:"open",value:function(e,t){h(y(a.prototype),"open",this).call(this),this._photoPopupImage.src=t,this._photoPopupImage.alt=e,this._photoPopupCaption.textContent=e}}])&&p(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(l);function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function k(){return k="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=E(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},k.apply(this,arguments)}function E(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=C(e)););return e}function S(e,t){return S=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},S(e,t)}function w(e,t){if(t&&("object"===v(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function C(e){return C=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},C(e)}var j=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&S(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=C(r);if(o){var n=C(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return w(this,e)});function a(e){var t,n=e.popupSelector,r=e.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,n))._handleFormSubmit=r,t._form=t._popup.querySelector(".popup__form"),t._inputList=t._popup.querySelectorAll(".popup__input"),t._submitButton=t._form.querySelector(".popup__save-button"),t._submitButtonOriginalText=t._submitButton.textContent,t}return t=a,(n=[{key:"submitHandler",value:function(e){this._handleFormSubmit=e}},{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"setEventListeners",value:function(e){var t=this;k(C(a.prototype),"setEventListeners",this).call(this,e),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._handleFormSubmit(t._getInputValues())}))}},{key:"setInputValues",value:function(e){this._inputList.forEach((function(t){t.value=e[t.name]}))}},{key:"close",value:function(){k(C(a.prototype),"close",this).call(this),this._form.reset()}},{key:"changeText",value:function(e){this._submitButton.textContent=e}},{key:"setOriginalText",value:function(){this._submitButton.textContent=this._submitButtonOriginalText}}])&&g(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(l);function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var P=function(){function e(t){var n=t.profileNameSelector,r=t.profileJobSelector,o=t.profileAvatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._profileName=document.querySelector(n),this._profileJob=document.querySelector(r),this._profileAvatar=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{inputUserName:this._profileName.textContent,inputUserJob:this._profileJob.textContent}}},{key:"setUserInfo",value:function(e){this._profileName.textContent=e.name,this._profileJob.textContent=e.about,this._profileAvatar.style.backgroundImage="url(".concat(e.avatar,")"),this._userId=e._id}},{key:"getUserId",value:function(){return this._userId}}])&&O(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),L={},I=document.querySelector(".profile__avatar_button"),T=document.querySelector(".profile__edit-button"),B=document.querySelector(".profile__add-button");function A(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var x=new t({url:"https://mesto.nomoreparties.co/v1/cohort-46",headers:"ddb2474c-5895-4c61-a372-bb2b9d4e6bd7"});function q(e,t,n){e?t.changeText(n):t.setOriginalText()}x.getUserData().then((function(e){H.setUserInfo(e)})).catch((function(e){return console.log(e)}));var U=new r({renderer:function(e){var t=N(e);U.addItem(t)}},".elements__list");x.getInitialCards().then((function(e){U.renderItems(e)})).catch((function(e){return console.log(e)}));var R=new j({popupSelector:"#add-popup",handleFormSubmit:function(e){var t={name:e.inputImgName,link:e.inputImgLink};q(!0,R,"Сохранение..."),x.addNewCard(t).then((function(e){U.renderer(e),R.close()})).catch((function(e){console.log(e)})).finally((function(){q(!1,R)}))}});R.setEventListeners(),B.addEventListener("click",(function(){L["img-form"].resetValidationErrors(),L["img-form"].disableSubmitButton(),R.open()}));var N=function(e){return new i(e,".element-template",D,F,H.getUserId(),J).generateCard()},V=new b("#photo-popup"),D=function(e,t){V.open(e,t)};V.setEventListeners();var J=function(e,t,n){x.changeLikeStatus(e,t,n).then((function(e){n.setLikesCount(e.likes.length)})).catch((function(e){console.log(e)}))},z=new j({popupSelector:"#delete-popup",handleFormSubmit:F});z.setEventListeners();var F=function(e,t){z.open(),z.submitHandler((function(){q(!0,z,"Удаление..."),x.deleteCard(e).then((function(){t.remove(),t=null,z.close()})).catch((function(e){console.log(e)})).finally((function(){q(!1,z)}))}))},H=new P({profileNameSelector:".profile__name",profileJobSelector:".profile__description",profileAvatarSelector:".profile__avatar"}),G=new j({popupSelector:"#edit-popup",handleFormSubmit:function(e){var t={inputUserName:e.inputUserName,inputUserJob:e.inputUserJob};q(!0,G,"Сохранение..."),x.editProfile(t).then((function(e){H.setUserInfo(e),G.close()})).catch((function(e){console.log(e)})).finally((function(){q(!1,G)}))}});G.setEventListeners(),T.addEventListener("click",(function(){G.setInputValues(H.getUserInfo()),L["edit-form"].resetValidationErrors(),L["edit-form"].disableSubmitButton(),G.open()}));var M,$=new j({popupSelector:"#avatar-popup",handleFormSubmit:function(e){var t={avatarLink:e.inputAvatarLink};q(!0,$,"Сохранение..."),x.changeProfileAvatar(t).then((function(e){H.setUserInfo(e),$.close()})).catch((function(e){console.log(e)})).finally((function(){q(!1,$)}))}});$.setEventListeners(),I.addEventListener("click",(function(){L["avatar-form"].resetValidationErrors(),L["avatar-form"].disableSubmitButton(),$.open()})),M={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__save-button",inactiveButtonClass:"popup__save-button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_visible"},Array.from(document.querySelectorAll(M.formSelector)).forEach((function(e){var t=new u(M,e),n=e.getAttribute("name");L[n]=t,t.enableValidation()})),Promise.all([x.getUserData(),x.getInitialCards()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){u=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return A(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?A(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];x.getUserData(o),x.getInitialCards(i)})).catch((function(e){console.log("Ошибка загрузки данных ".concat(e))}))})();