function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,u="object"==typeof self&&self&&self.Object===Object&&self,c=l||u||Function("return this")(),s=Object.prototype.toString,m=Math.max,d=Math.min,g=function(){return c.Date.now()};function v(e,t,n){var o,i,r,a,f,l,u=0,c=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=o,r=i;return o=i=void 0,u=t,a=e.apply(r,n)}function S(e){return u=e,f=setTimeout(O,t),c?b(e):a}function h(e){var n=e-l;return void 0===l||n>=t||n<0||s&&e-u>=r}function O(){var e=g();if(h(e))return T(e);f=setTimeout(O,function(e){var n=t-(e-l);return s?d(n,r-(e-u)):n}(e))}function T(e){return f=void 0,v&&o?b(e):(o=i=void 0,a)}function j(){var e=g(),n=h(e);if(o=arguments,i=this,l=e,n){if(void 0===f)return S(l);if(s)return f=setTimeout(O,t),b(l)}return void 0===f&&(f=setTimeout(O,t)),a}return t=y(t)||0,p(n)&&(c=!!n.leading,r=(s="maxWait"in n)?m(y(n.maxWait)||0,t):r,v="trailing"in n?!!n.trailing:v),j.cancel=function(){void 0!==f&&clearTimeout(f),u=0,o=l=i=f=void 0},j.flush=function(){return void 0===f?a:T(g())},j}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=r.test(e);return n||a.test(e)?f(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),v(e,t,{leading:o,maxWait:t,trailing:i})};const b=document.querySelector(".feedback-form"),S={email:"",message:""};try{S.email=JSON.parse(localStorage.getItem("feedback-form-state")).email}catch{}finally{b.elements.email.value=S.email}try{S.message=JSON.parse(localStorage.getItem("feedback-form-state")).message}catch{}finally{b.elements.message.value=S.message}b.elements.email.addEventListener("input",(n=>{S.email=n.target.value,e(t)(localStorage.setItem("feedback-form-state",JSON.stringify(S)),500),console.log(S),console.log(currentTime)})),b.elements.message.addEventListener("input",(n=>{S.message=n.target.value,e(t)(localStorage.setItem("feedback-form-state",JSON.stringify(S)),500),console.log(S),console.log(currentTime)})),b.addEventListener("submit",(e=>{e.preventDefault(),console.log(S),localStorage.removeItem("feedback-form-state"),S.email="",S.message="",b.reset()}));
//# sourceMappingURL=03-feedback.5997b6ce.js.map
