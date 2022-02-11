const n=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}};n();const c=document.querySelector("#app");c.innerHTML=`
  <img src="https://m-u-g.github.io/assets/images/logo-no-margin-ext.svg" />
  <h1>Hello to Ts Best Practices!</h1>
  <h4>
    The repository is hosted on<br /><a href="https://github.com/Puppo/MUG-2022-ts-best-practices" target="_blank">https://github.com/Puppo/MUG-2022-ts-best-practices</a>.
  </h4>
  <h4>
    My Typescript Series on dev.to<br /><a href="https://dev.to/this-is-learning/series/11213" target="_blank">https://dev.to/this-is-learning/series/11213</a>.
  </p<
`;
