var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},o=e.parcelRequire4c75;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in a){var o=a[e];delete a[e];var l={id:e,exports:{}};return t[e]=l,o.call(l.exports,l,l.exports),l.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){a[e]=t},e.parcelRequire4c75=o);var l=o("kEUo3");const r={email:document.querySelector("input[type='email']"),message:document.querySelector("textarea")};localStorage.getItem("feedback-form-state")&&(r.email.value=JSON.parse(localStorage.getItem("feedback-form-state")).email,r.message.value=JSON.parse(localStorage.getItem("feedback-form-state")).message);const s={email:"",message:""};document.addEventListener("input",l.throttle((()=>{s.email=r.email.value,s.message=r.message.value,localStorage.setItem("feedback-form-state",JSON.stringify(s))}),500)),document.addEventListener("submit",(function(e){e.preventDefault(),console.log(JSON.parse(localStorage.getItem("feedback-form-state"))),r.email.value="",r.message.value="",localStorage.clear("feedback-form-state")}));
//# sourceMappingURL=03-feedback.4829b593.js.map