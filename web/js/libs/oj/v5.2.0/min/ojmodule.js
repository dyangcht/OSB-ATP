/**
 * @license
 * Copyright (c) 2014, 2018, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";define(["ojs/ojcore","knockout","promise"],function(e,n){e.ModuleBinding={},e.ModuleBinding.defaults={viewPath:"text!views/",viewSuffix:".html",modelPath:"viewModels/",initializeMethod:"initialize",disposeMethod:"dispose",activatedHandler:"handleActivated",attachedHandler:"handleAttached",detachedHandler:"handleDetached",bindingsAppliedHandler:"handleBindingsApplied",deactivatedHandler:"handleDeactivated",transitionCompletedHandler:"handleTransitionCompleted"},e.ModuleBinding._EMPTY_MODULE="oj:blank",function(){function i(e,i,t){i=i||e;var o=[];t&&e===i&&(t.parentNode.removeChild(t),o.push(t)),n.virtualElements.setDomNodeChildren(i,o)}function t(e,n){e.forEach(function(e){n.appendChild(e)})}function o(e,n,i){var t={};i[0]&&(t.viewModel=i[0]),i[1]&&(t.view=i[1]);var o=new CustomEvent(n,{detail:t});e.dispatchEvent(o)}function l(e,i,t){if(e&&e[i]){var o={element:t[0],valueAccessor:t[1]};return t.length>2&&(o.viewModel=t[2],t.length>3&&(o["boolean"==typeof t[3]?"fromCache":"cachedNodes"]=t[3])),n.ignoreDependencies(e[i],e,[o])}}function r(i,t,o){if(null!=i){var l=e.ModuleBinding.defaults[t];if(null!=l&&i){var r=i[l];if("function"==typeof r){var d=void 0;return o&&(d={element:o[0],valueAccessor:o[1]},o.length>2&&(d["boolean"==typeof o[2]?"fromCache":"cachedNodes"]=o[2])),n.ignoreDependencies(r,i,[d])}}}}function d(e,i){if(e&&i){var t=e[i];"function"==typeof t&&n.ignoreDependencies(t,e)}}function a(e,i,t){for(var o=e;null!=o;){var l=n.virtualElements.nextSibling(o),r=o.nodeType;o===i||1!==r&&8!==r||t(o),o=l}}function u(e,i){for(var t=i.length-1;t>=0;t--)n.virtualElements.prepend(e,i[t])}function s(e,n){if(n)for(var i=0;i<e.length;i++){var t=e[i];1===t.nodeType&&n(t)}}function c(n,i,t){var o=n||require,l=new Promise(function(e,n){o([t],e,n)});return l=l.catch(function(n){throw e.Logger.error("ojModule failed to load "+t),n})}n.bindingHandlers.ojModule={init:function(f,v,p,h,m){var w,g,M,C,b,y,N,E,P={},V=-1,D=f.parentNode&&"OJ-MODULE"===f.parentNode.nodeName,j=D?function(){}:r,A=D?function(){}:l,B=D?d:function(){},H=D?o:function(){};function $(){y&&(y(),y=null)}var x=function(e){j(e,"disposeMethod",[f,v])},T=function(){x(w)};n.utils.domNodeDisposal.addDisposeCallback(f,function(){T();for(var e=Object.keys(P),n=0;n<e.length;n++){var i=P[e[n]].model;x(i)}$()});var F=new Error("Promise cancelled because ojModule is fetching new View and ViewModel"),O=function(e){if(e!=V)throw F},S=f;return 8===f.nodeType&&(S=f.parentNode,n.virtualElements.setDomNodeChildren(f,[]),b=f.nextSibling),n.computed(function(){if(V++,!y){var o=e.Context.getContext(S).getBusyContext();y=o.addBusyState({description:"ojModule binding on a node with the Id "+f.id+"is loading the module. Binding evaluator: "+v.toString()})}var l,r,d,p,h,x,L,k,q,I,U,_,z,J,Y=0===V,K=n.utils.unwrapObservable,R=K(v());"string"==typeof R?l=R:(l=K(R.name),r=K(R.viewName),d=K(R.params),p=K(R.viewModelFactory),h=K(R.createViewFunction),x=K(R.cacheKey),L=K(R.lifecycleListener),k=K(R.animation),_=K(R.view),z=K(R.viewModel),q=K(R.require),J=K(R.cleanupMode)),null==q||q instanceof Function||(U=q.viewPath,I=q.modelPath,q=q.instance),r=null==r?l:r;var W,G,Q,X=e.ModuleBinding._EMPTY_MODULE===r,Z=A(L,"activated",[f,v]);if(H(S,"ojTransitionStart",[z]),X)W=Promise.resolve([]),G=Promise.resolve(null);else{var ee=null==x?null:P[x];null!=ee&&(delete P[x],W=Promise.resolve(ee.view),G=Promise.resolve(ee.model))}if(null==W&&null!=_&&(W=Promise.resolve(_)),null==G&&(null!=z?G=Promise.resolve(z):null!=p&&(G=n.ignoreDependencies(p.createViewModel,p,[d,v])),null==G&&null!=l&&(null==I&&(I=e.ModuleBinding.defaults.modelPath),G=c(q,"viewModel",I+l)),null!=G&&(G=G.then(function(e,n){return O(e),n="function"==typeof n?new n(d):j(n,"initializeMethod",[f,v])||n}.bind(null,V)),null==W&&null!=h&&(W=G.then(function(e,n){if(O(e),null==n)throw $(),"createViewFunction option cannot be used when the ViewModel is null";var i=n[h];if(null==i)throw $(),"function specified by the createViewFunction option was not found on the ViewModel";return i.call(n)}.bind(null,V)))),null==W)){if(null==r)throw $(),new Error("View name or view instance must be specified");null==U&&(U=e.ModuleBinding.defaults.viewPath),W=c(q,"view",U+r+e.ModuleBinding.defaults.viewSuffix)}if(null==W)throw $(),new Error("ojModule is missing a View");null!=G&&(Q=G.then(function(e,n){return O(e),j(n,"activatedHandler",[f,v])}.bind(null,V))),Promise.all([W,G,Z,Q,g]).then(function(o,l){if(o==V){var r=l[0];if(null==r)throw $(),"The module's View was resolved to null";var c,p=function(e,i){if("string"==typeof e)e=n.utils.parseHtmlFragment(e);else if(function(e){return window.DocumentFragment?e instanceof DocumentFragment:e&&11===e.nodeType}(e))e=n.utils.arrayPushAll([],e.childNodes);else{if(!Array.isArray(e))throw i(),"The View ("+e+") has an unsupported type";e=n.utils.arrayPushAll([],e)}return e}(r,$),h=l[1],y=!1,F=function(e,i,t){for(var o=[],l=n.virtualElements.firstChild(e);null!=l&&l!=t;l=l.nextSibling)l!=i&&o.push(l);return o}(f,C,b),O=function(e,i){var t=[];return a(n.virtualElements.firstChild(e),i,function(e){t.push(e)}),t}(f,C);null==M||N?D&&(c=F):(y=!0,c=F,C||((C=document.createElement("div")).className="oj-helper-module-cache",n.virtualElements.prepend(f,C)));var q=!1,I=function(o){if(!q){if(q=!0,y)t(F,C),i(f,o||f,C);else if(D&&"none"===E)for(var l=0;l<c.length;l++){var r=c[l];r.parentNode.removeChild(r)}else O.forEach(function(e){n.cleanNode(e)}),i(f,o||f,C);Y||(A(L,"detached",[f,v,w,c]),j(w,"detachedHandler",[f,v,c]),B(w,"disconnected"),H(S,"ojViewDisconnected",[w,c]),A(L,"deactivated",[f,v,w]),j(w,"deactivatedHandler",[f,v])),y?(s(c,e.Components?e.Components.subtreeHidden:null),P[M]={model:w,view:c}):D&&"none"===E||T(),w=h,M=x,N=X,E=J}},U=function(i){i=i||f;var t=D&&function(e,i){for(var t,o=0;o<e.length&&!(t=n.contextFor(e[o]));o++);return t&&t.$module&&t.$module==i}(p,h);u(i,p);var o=null!=ee;if(o&&s(p,e.Components?e.Components.subtreeShown:null),A(L,"attached",[i,v,h,o]),j(h,"attachedHandler",[i,v,o]),B(h,"connected"),H(S,"ojViewConnected",[h]),!o&&!t){var l=m.createChildContext(h,void 0,function(e){e.$module=h,e.$params=d});D&&(l.$parent=void 0,l.$parents=void 0,l.$parentContext=void 0,l.$props=void 0,l.$properties=void 0,l.$slotNodeCounts=void 0,l.$slotCounts=void 0,l.$unique=void 0,l.$uniqueId=void 0),function(e,i,t,o){var l=n.bindingProvider.instance,r=l.preprocessNode;r&&(a(i,o,function(e){r.call(l,e)}),i=n.virtualElements.firstChild(e));a(i,o,function(e){n.applyBindings(t,e)})}(i,p[0],l,C),A(L,"bindingsApplied",[i,v,h]),j(h,"bindingsAppliedHandler",[i,v])}},_=function(){A(L,"transitionCompleted",[f,v,h]),j(h,"transitionCompletedHandler",[f,v]),B(h,"transitionCompleted"),H(S,"ojTransitionEnd",[h]),$()};if(null!=k){var z=function(i,o,l,r,d,a,c){var f,v,p=o.canAnimate;if(null!=p&&!p.call(o,i))return;var h=o.prepareAnimation.call(o,i);h&&(f=h.newViewParent,v=h.oldViewParent);var m=f||l;v&&v!==l?t(r,v):m===l&&a(null);m!==l&&n.virtualElements.setDomNodeChildren(m,[]);d(m);var w=Array.prototype.slice.call(m.childNodes),g=!1,M=function(){if(!g&&(g=!0,l!==m)){u(l,w);var n=l.parentNode&&"OJ-MODULE"===l.parentNode.nodeName;e.Components&&!n&&(s(w,e.Components.subtreeDetached),s(w,e.Components.subtreeAttached))}},C=a.bind(null,v);i.newViewParent=f,i.oldViewParent=v,i.oldViewNodes=r,i.removeOldView=C,i.insertNewView=M;var b=function(){C(),M(),c()};return o.animate.call(o,i).then(b,function(n){b(),e.Logger.error("ojModule animation promise was rejected")})}(function(e,n,i,t,o,l){return{node:l?e.parentNode:e,valueAccessor:l?null:n,isInitial:i,oldViewModel:t,newViewModel:o}}(f,v,Y,w,h,D),k,f,F,U,I,_);g=function(e){if(!e)return e;return new Promise(function(n,i){e.then(n,n)})}(z)}else g=void 0;g||(I(null),U(null),_())}}.bind(null,V),function(n,i){i!==F&&null!=i&&($(),e.Logger.error(i))}.bind(null,V))},null,{disposeWhenNodeIsRemoved:f}),{controlsDescendantBindings:!0}}},n.virtualElements.allowedBindings.ojModule=!0}()});