(function(){"use strict";var e={3766:function(e,t,n){var r=n(9963),i=n(6252),a={id:"app"};function o(e,t,n,r,o,u){var c=(0,i.up)("Product");return(0,i.wg)(),(0,i.iD)("div",a,[(0,i.Wm)(c)])}var u=function(e){return(0,i.dD)("data-v-0f1bd586"),e=e(),(0,i.Cn)(),e},c=u((function(){return(0,i._)("header",null,[(0,i._)("h1",null,"ONETECH")],-1)})),s=u((function(){return(0,i._)("section",null,[(0,i._)("canvas"),(0,i._)("div",{id:"productDetails"},[(0,i._)("h3",null,"馬像置物-樹脂立ち戦闘馬彫刻の装飾卓上装飾品 "),(0,i._)("p",{id:"price"},"12,345円"),(0,i._)("div",{id:"description"},[(0,i._)("h4",null,"詳細情報"),(0,i._)("p",null," - 高品質の樹脂材料、非毒性、、、細かい細工アートワーク。 "),(0,i._)("button",null,"ADD TO CART")])])],-1)})),l=[c,s];function f(e,t,n,r,a,o){return(0,i.wg)(),(0,i.iD)("main",null,l)}var h=n(655),d=n(3006),v=(n(6941),n(5509),function(){function e(e){var t=this;Object.defineProperty(this,"canvas",{enumerable:!0,configurable:!0,writable:!0,value:e}),Object.defineProperty(this,"scene",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"engine",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"product",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"camera",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.engine=new d.D4V(this.canvas,!0),this.scene=this.CreateScene(),this.engine.displayLoadingUI(),this.CreateCamera(),this.CreateProduct(),this.engine.runRenderLoop((function(){t.scene.render()}))}return Object.defineProperty(e.prototype,"CreateScene",{enumerable:!1,configurable:!0,writable:!0,value:function(){var e=new d.xsS(this.engine),t=d.BtG.CreateFromPrefilteredData("./environment/xmas_bg.env",e);return t.gammaSpace=!1,t.rotationY=Math.PI,e.environmentTexture=t,e.createDefaultSkybox(t,!0,1e3,.25),e}}),Object.defineProperty(e.prototype,"CreateCamera",{enumerable:!1,configurable:!0,writable:!0,value:function(){this.camera=new d.YfP("camera",-Math.PI/2,Math.PI/2,40,new d.Pa4(0,0,0),this.scene),this.camera.attachControl(this.canvas,!0),this.camera.wheelPrecision=100,this.camera.minZ=.01,this.camera.lowerRadiusLimit=1,this.camera.upperRadiusLimit=5,this.camera.panningSensibility=0,this.camera.useAutoRotationBehavior=!0,this.camera.autoRotationBehavior.idleRotationSpeed=.5,this.camera.autoRotationBehavior.idleRotationSpinupTime=1e3,this.camera.autoRotationBehavior.idleRotationWaitTime=2e3,this.camera.autoRotationBehavior.zoomStopsAnimation=!0,this.camera.useFramingBehavior=!0,this.camera.framingBehavior.framingTime=4e3}}),Object.defineProperty(e.prototype,"CreateProduct",{enumerable:!1,configurable:!0,writable:!0,value:function(){return(0,h.mG)(this,void 0,Promise,(function(){var e;return(0,h.Jh)(this,(function(t){switch(t.label){case 0:return[4,d.n0n.ImportMeshAsync("","./models/","horse_statue.glb")];case 1:return e=t.sent().meshes,this.product=e[1],this.camera.setTarget(e[1]),this.engine.hideLoadingUI(),[2]}}))}))}}),e}()),m=(0,i.aZ)({name:"Product3D",mounted:function(){var e=document.querySelector("canvas");new v(e)}}),p=n(3744);const b=(0,p.Z)(m,[["render",f],["__scopeId","data-v-0f1bd586"]]);var g=b,w=(0,i.aZ)({name:"App",components:{Product:g}});const y=(0,p.Z)(w,[["render",o]]);var P=y;(0,r.ri)(P).mount("#app")}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,r,i,a){if(!r){var o=1/0;for(l=0;l<e.length;l++){r=e[l][0],i=e[l][1],a=e[l][2];for(var u=!0,c=0;c<r.length;c++)(!1&a||o>=a)&&Object.keys(n.O).every((function(e){return n.O[e](r[c])}))?r.splice(c--,1):(u=!1,a<o&&(o=a));if(u){e.splice(l--,1);var s=i();void 0!==s&&(t=s)}}return t}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[r,i,a]}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var i,a,o=r[0],u=r[1],c=r[2],s=0;if(o.some((function(t){return 0!==e[t]}))){for(i in u)n.o(u,i)&&(n.m[i]=u[i]);if(c)var l=c(n)}for(t&&t(r);s<o.length;s++)a=o[s],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(l)},r=self["webpackChunkproduct_view"]=self["webpackChunkproduct_view"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(3766)}));r=n.O(r)})();
//# sourceMappingURL=app.79d70f0e.js.map