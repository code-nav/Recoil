"use strict";(self.webpackChunkrecoil=self.webpackChunkrecoil||[]).push([[5818],{3905:function(e,n,r){r.d(n,{Zo:function(){return l},kt:function(){return f}});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=t.createContext({}),u=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},l=function(e){var n=u(e.components);return t.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=u(r),f=o,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||a;return r?t.createElement(m,c(c({ref:n},l),{},{components:r})):t.createElement(m,c({ref:n},l))}));function f(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var u=2;u<a;u++)c[u]=r[u];return t.createElement.apply(null,c)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1735:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return s},toc:function(){return u},default:function(){return p}});var t=r(2122),o=r(9756),a=(r(7294),r(3905)),c={title:"useRecoilTransactionObserver_UNSTABLE(callback)",sidebar_label:"useRecoilTransactionObserver()"},i=void 0,s={unversionedId:"api-reference/core/useRecoilTransactionObserver",id:"api-reference/core/useRecoilTransactionObserver",isDocsHomePage:!1,title:"useRecoilTransactionObserver_UNSTABLE(callback)",description:"* REMARQUE *: Veuillez consid\xe9rer cette API comme instable",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/api-reference/core/useRecoilTransactionObserver.md",sourceDirName:"api-reference/core",slug:"/api-reference/core/useRecoilTransactionObserver",permalink:"/fr/docs/api-reference/core/useRecoilTransactionObserver",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/i18n/fr/docusaurus-plugin-content-docs/current/api-reference/core/useRecoilTransactionObserver.md",version:"current",frontMatter:{title:"useRecoilTransactionObserver_UNSTABLE(callback)",sidebar_label:"useRecoilTransactionObserver()"},sidebar:"docs",previous:{title:"Snapshot",permalink:"/fr/docs/api-reference/core/Snapshot"},next:{title:"useRecoilSnapshot()",permalink:"/fr/docs/api-reference/core/useRecoilSnapshot"}},u=[{value:"<strong><em> REMARQUE </em></strong>: <em>Veuillez consid\xe9rer cette API comme instable</em>",id:"remarque--veuillez-consid\xe9rer-cette-api-comme-instable",children:[{value:"Exemple de d\xe9bogage",id:"exemple-de-d\xe9bogage",children:[]}]}],l={toc:u};function p(e){var n=e.components,r=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,t.Z)({},l,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"remarque--veuillez-consid\xe9rer-cette-api-comme-instable"},(0,a.kt)("strong",{parentName:"h2"},(0,a.kt)("em",{parentName:"strong"}," REMARQUE ")),": ",(0,a.kt)("em",{parentName:"h2"},"Veuillez consid\xe9rer cette API comme instable")),(0,a.kt)("p",null,"Ce hook souscrit \xe0 un rappel \xe0 ex\xe9cuter chaque fois qu'il y a un changement dans l'\xe9tat de l'atome Recoil. Plusieurs mises \xe0 jour peuvent \xeatre regroup\xe9es en une seule transaction. Ce hook est id\xe9al pour les changements d'\xe9tat persistants, les outils de d\xe9veloppement, l'historique de construction, etc."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"function useRecoilTransactionObserver_UNSTABLE(({\n  snapshot: Snapshot,\n  previousSnapshot: Snapshot,\n}) => void)\n")),(0,a.kt)("p",null,"Le rappel fournit un ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/Snapshot"},(0,a.kt)("inlineCode",{parentName:"a"},"Snapshot"))," de l'\xe9tat actuel et pr\xe9c\xe9dent de la transaction par lots React. Si vous ne souhaitez vous abonner qu'aux modifications des atomes individuels, pensez plut\xf4t aux effets. \xc0 l'avenir, nous pouvons autoriser la possibilit\xe9 de souscrire \xe0 des conditions sp\xe9cifiques ou de fournir un anti-rebond pour les performances."),(0,a.kt)("h3",{id:"exemple-de-d\xe9bogage"},"Exemple de d\xe9bogage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"function DebugObserver() {\n  useRecoilTransactionObserver_UNSTABLE(({snapshot}) => {\n    window.myDebugState = {\n      a: snapshot.getLoadable(atomA).contents,\n      b: snapshot.getLoadable(atomB).contents,\n    };\n  });\n  return null;\n}\n\nfunction MyApp() {\n  return (\n    <RecoilRoot>\n      <DebugObserver />\n      ...\n    </RecoilRoot>\n  );\n}\n")))}p.isMDXComponent=!0}}]);