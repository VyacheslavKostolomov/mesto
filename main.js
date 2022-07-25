(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function t(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var n=function(){function n(e,r,o){var i=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),t(this,"_handleLikeElement",(function(e){e.target.classList.toggle("element__like-button_active")})),t(this,"_handleDeleteElement",(function(){i._element.remove(),i._element=null})),this._name=e.name,this._link=e.link,this._templateElement=r,this._handleCardClick=o,this._element=this._getTemplate(),this._elementImage=this._element.querySelector(".element__image"),this._elementTitle=this._element.querySelector(".element__title"),this._likeButton=this._element.querySelector(".element__like-button"),this._deleteButton=this._element.querySelector(".element__delete-button")}var r,o;return r=n,(o=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateElement).content.querySelector(".element").cloneNode(!0)}},{key:"_subscribeToEvents",value:function(){var e=this;this._likeButton.addEventListener("click",this._handleLikeElement),this._deleteButton.addEventListener("click",this._handleDeleteElement),this._elementImage.addEventListener("click",(function(){e._handleCardClick(e._name,e._link)}))}},{key:"generateCard",value:function(){return this._elementImage.src=this._link,this._elementImage.alt=this._name,this._elementTitle.textContent=this._name,this._subscribeToEvents(),this._element}}])&&e(r.prototype,o),Object.defineProperty(r,"prototype",{writable:!1}),n}();function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._config=t,this._form=n,this._inputList=Array.from(this._form.querySelectorAll(this._config.inputSelector)),this._buttonElement=this._form.querySelector(this._config.submitButtonSelector)}var t,n;return t=e,(n=[{key:"enableValidation",value:function(){this._form.addEventListener("submit",(function(e){e.preventDefault()})),this._setEventListeners()}},{key:"_setEventListeners",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))}))}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideError(e):this._showError(e)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?this.disableSubmitButton():(this._buttonElement.removeAttribute("disabled",!0),this._buttonElement.classList.remove(this._config.inactiveButtonClass))}},{key:"_showError",value:function(e){this._errorElement=e.nextElementSibling,this._errorElement.textContent=e.validationMessage,this._errorElement.classList.add(this._config.errorClass),e.classList.add(this._config.inputErrorClass)}},{key:"_hideError",value:function(e){this._errorElement=e.nextElementSibling,this._errorElement.textContent="",this._errorElement.classList.remove(this._config.errorClass),e.classList.remove(this._config.inputErrorClass)}},{key:"resetValidationErrors",value:function(){var e=this;this._inputList.forEach((function(t){e._hideError(t)}))}},{key:"disableSubmitButton",value:function(){this._buttonElement.setAttribute("disabled",!0),this._buttonElement.classList.add(this._config.inactiveButtonClass)}}])&&r(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l=function(){function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),u(this,"_handleEscClose",(function(e){"Escape"===e.key&&n.close()})),u(this,"_handleCloseByClick",(function(e){e.target.classList.contains("popup_opened")&&n.close()})),this._popup=document.getElementById(t),this._closeButton=this._popup.querySelector(".popup__close-button")}var t,n;return t=e,(n=[{key:"open",value:function(){document.addEventListener("keydown",this._handleEscClose),this._popup.classList.add("popup_opened")}},{key:"close",value:function(){document.removeEventListener("keydown",this._handleEscClose),this._popup.classList.remove("popup_opened")}},{key:"setEventListeners",value:function(){this._closeButton.addEventListener("click",this.close.bind(this)),this._popup.addEventListener("click",this._handleCloseByClick)}}])&&i(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(){return c="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=p(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},c.apply(this,arguments)}function p(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=m(e)););return e}function f(e,t){return f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},f(e,t)}function h(e,t){if(t&&("object"===a(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function m(e){return m=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},m(e)}var y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&f(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=m(r);if(o){var n=m(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return h(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._photoPopupImage=t._popup.querySelector(".popup__image"),t._photoPopupCaption=t._popup.querySelector(".popup__caption"),t}return t=u,(n=[{key:"open",value:function(e,t){c(m(u.prototype),"open",this).call(this),this._photoPopupImage.src=t,this._photoPopupImage.alt=e,this._photoPopupCaption.textContent=e}}])&&s(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(l);function _(e){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_(e)}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(){return d="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=v(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},d.apply(this,arguments)}function v(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=E(e)););return e}function g(e,t){return g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},g(e,t)}function w(e,t){if(t&&("object"===_(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function E(e){return E=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},E(e)}var k=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&g(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=E(r);if(o){var n=E(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return w(this,e)});function u(e){var t,n=e.popupSelector,r=e.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,n))._handleFormSubmit=r,t._form=t._popup.querySelector(".popup__form"),t._inputList=t._popup.querySelectorAll(".popup__input"),t}return t=u,(n=[{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"setEventListeners",value:function(e){var t=this;d(E(u.prototype),"setEventListeners",this).call(this,e),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._handleFormSubmit(t._getInputValues())}))}},{key:"setInputValues",value:function(e){this._inputList.forEach((function(t){t.value=e[t.name]}))}},{key:"close",value:function(){d(E(u.prototype),"close",this).call(this),this._form.reset()}}])&&b(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(l);function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var O=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._items=r,this._renderer=o,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(){var e=this;this._items.forEach((function(t){e._renderer(t)}))}},{key:"renderer",value:function(e){this._renderer(e)}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&S(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var x=function(){function e(t){var n=t.profileNameSelector,r=t.profileJobSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._profileName=document.querySelector(n),this._profileJob=document.querySelector(r)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{inputUserName:this._profileName.textContent,inputUserJob:this._profileJob.textContent}}},{key:"setUserInfo",value:function(e){this._profileName.textContent=e.inputUserName,this._profileJob.textContent=e.inputUserJob}}])&&j(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),L={},C=document.querySelector(".profile__edit-button");document.querySelector(".profile__add-button").addEventListener("click",(function(){L["img-form"].resetValidationErrors(),L["img-form"].disableSubmitButton(),V.open()}));var P=new y("#photo-popup"),B=function(e,t){P.open(e,t)};P.setEventListeners();var I=new O({items:[{name:"Карелия",link:"https://images.unsplash.com/photo-1525301472244-57e18fb6f028?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764"},{name:"Северная Осетия",link:"https://images.unsplash.com/photo-1612719734820-81784b7e6573?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687"},{name:"Онежское озеро",link:"https://images.unsplash.com/photo-1543699936-c901ddbf0c05?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686"},{name:"Красноярск",link:"https://images.unsplash.com/photo-1628872247398-888e0808c130?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Крым",link:"https://images.unsplash.com/photo-1565342403875-07a8dc5ed13c?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764"}],renderer:function(e){var t=q(e);I.addItem(t)}},".elements__list"),q=function(e){return new n(e,".element-template",B).generateCard()};I.renderItems();var V=new k({popupSelector:"#add-popup",handleFormSubmit:function(e){var t={name:e.inputImgName,link:e.inputImgLink};I.renderer(t),V.close()}});V.setEventListeners();var D=new x({profileNameSelector:".profile__name",profileJobSelector:".profile__description"});C.addEventListener("click",(function(){T.setInputValues(D.getUserInfo()),L["edit-form"].resetValidationErrors(),L["edit-form"].disableSubmitButton(),T.open()}));var R,T=new k({popupSelector:"#edit-popup",handleFormSubmit:function(e){var t={inputUserName:e.inputUserName,inputUserJob:e.inputUserJob};D.setUserInfo(t),T.close()}});T.setEventListeners(),R={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__save-button",inactiveButtonClass:"popup__save-button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_visible"},Array.from(document.querySelectorAll(R.formSelector)).forEach((function(e){var t=new o(R,e),n=e.getAttribute("name");L[n]=t,t.enableValidation()}))})();