/*! For license information please see files-main.js.LICENSE.txt */
!function(){"use strict";var e,n={27130:function(e,n,i){var r=i(20144);function a(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var o=function(){function e(){var n,t;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),t=void 0,(n="_settings")in this?Object.defineProperty(this,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):this[n]=t,this._settings=[],console.debug("OCA.Files.Settings initialized")}var n,t;return n=e,(t=[{key:"register",value:function(e){return this._settings.filter((function(n){return n.name===e.name})).length>0?(console.error("A setting with the same name is already registered"),!1):(this._settings.push(e),!0)}},{key:"settings",get:function(){return this._settings}}])&&a(n.prototype,t),Object.defineProperty(n,"prototype",{writable:!1}),e}(),l={name:"Setting",props:{el:{type:Function,required:!0}},mounted:function(){this.$el.appendChild(this.el())}},s=i(51900),c={name:"Settings",components:{Setting:(0,s.Z)(l,(function(){var e=this.$createElement;return(this._self._c||e)("div")}),[],!1,null,null,null).exports},data:function(){return{settings:OCA.Files.Settings.settings}}},u=(0,s.Z)(c,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"files-app-extra-settings"}},[e._l(e.settings,(function(e){return[t("Setting",{key:e.name,attrs:{el:e.el}})]}))],2)}),[],!1,null,"31c9bb4b",null).exports;function d(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function p(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var f=function(){function e(n,t){var i=t.el,r=t.open,a=t.close;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),p(this,"_close",void 0),p(this,"_el",void 0),p(this,"_name",void 0),p(this,"_open",void 0),this._name=n,this._el=i,this._open=r,this._close=a,"function"!=typeof this._open&&(this._open=function(){}),"function"!=typeof this._close&&(this._close=function(){})}var n,t;return n=e,(t=[{key:"name",get:function(){return this._name}},{key:"el",get:function(){return this._el}},{key:"open",get:function(){return this._open}},{key:"close",get:function(){return this._close}}])&&d(n.prototype,t),Object.defineProperty(n,"prototype",{writable:!1}),e}();r.default.prototype.t=t,window.OCA.Files||(window.OCA.Files={}),Object.assign(window.OCA.Files,{Settings:new o}),Object.assign(window.OCA.Files.Settings,{Setting:f}),window.addEventListener("DOMContentLoaded",(function(){new r.default({el:"#files-app-settings",render:function(e){return e(u)}});var e=document.getElementById("app-settings-header");e&&e.addEventListener("click",(function(e){var n=e.currentTarget.children[0].classList.contains("opened");OCA.Files.Settings.settings.forEach((function(e){return n?e.close():e.open()}))}))}));var m=i(17499),A=i(16453),v=i(9944),h=i(79753),g=i(22200),C=function(){var e,n,t,i,r=(null===(e=OCA)||void 0===e||null===(n=e.Files)||void 0===n||null===(t=n.App)||void 0===t||null===(i=t.currentFileList)||void 0===i?void 0:i.dirInfo)||{path:"/",name:""};return"".concat(r.path,"/").concat(r.name).replace(/\/\//gi,"/")},b=i(4820),w=i(62520),y=i(26932),_=i(97e3),k=i.n(_),x=i(47450),O=i.n(x);function P(e,n,t,i,r,a,o){try{var l=e[a](o),s=l.value}catch(e){return void t(e)}l.done?n(s):Promise.resolve(s).then(i,r)}function E(e){return function(){var n=this,t=arguments;return new Promise((function(i,r){var a=e.apply(n,t);function o(e){P(a,i,r,o,l,"next",e)}function l(e){P(a,i,r,o,l,"throw",e)}o(void 0)}))}}var F=function(){var e=E(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.default.get((0,h.generateOcsUrl)("apps/files/api/v1/templates"));case 2:return n=e.sent,e.abrupt("return",n.data.ocs.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),T=function(){var e=E(regeneratorRuntime.mark((function e(n,t,i){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.default.post((0,h.generateOcsUrl)("apps/files/api/v1/templates/create"),{filePath:n,templatePath:t,templateType:i});case 2:return r=e.sent,e.abrupt("return",r.data.ocs.data);case 4:case"end":return e.stop()}}),e)})));return function(n,t,i){return e.apply(this,arguments)}}(),B=256,S={name:"TemplatePreview",inheritAttrs:!1,props:{basename:{type:String,required:!0},checked:{type:Boolean,default:!1},fileid:{type:[String,Number],required:!0},filename:{type:String,required:!0},previewUrl:{type:String,default:null},hasPreview:{type:Boolean,default:!0},mime:{type:String,required:!0},ratio:{type:Number,default:null}},data:function(){return{failedPreview:!1}},computed:{nameWithoutExt:function(){return this.basename.indexOf(".")>-1?this.basename.split(".").slice(0,-1).join("."):this.basename},id:function(){return"template-picker-".concat(this.fileid)},realPreviewUrl:function(){return this.failedPreview&&this.mimeIcon?this.mimeIcon:this.previewUrl?this.previewUrl:(0,g.getCurrentUser)()?(0,h.generateUrl)("/core/preview?fileId=".concat(this.fileid,"&x=").concat(B,"&y=").concat(B,"&a=1")):(0,h.generateUrl)("/apps/files_sharing/publicpreview/".concat(document.getElementById("sharingToken")&&document.getElementById("sharingToken").value,"?fileId=").concat(this.fileid,"&file=").concat(function(e){var n=(e.startsWith("/")?e:"/".concat(e)).split("/"),t="";return n.forEach((function(e){""!==e&&(t+="/"+encodeURIComponent(e))})),t}(this.filename),"&x=").concat(B,"&y=").concat(B,"&a=1"))},mimeIcon:function(){return OC.MimeType.getIconUrl(this.mime)}},methods:{onCheck:function(){this.$emit("check",this.fileid)},onFailure:function(){this.failedPreview=!0}}},j=S,I=i(93379),M=i.n(I),D=i(78299),U=(M()(D.Z,{insert:"head",singleton:!1}),D.Z.locals,(0,s.Z)(j,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("li",{staticClass:"template-picker__item"},[t("input",{staticClass:"radio",attrs:{id:e.id,type:"radio",name:"template-picker"},domProps:{checked:e.checked},on:{change:e.onCheck}}),e._v(" "),t("label",{staticClass:"template-picker__label",attrs:{for:e.id}},[t("div",{staticClass:"template-picker__preview",class:e.failedPreview?"template-picker__preview--failed":""},[t("img",{staticClass:"template-picker__image",attrs:{src:e.realPreviewUrl,alt:"",draggable:"false"},on:{error:e.onFailure}})]),e._v(" "),t("span",{staticClass:"template-picker__title"},[e._v("\n\t\t\t"+e._s(e.nameWithoutExt)+"\n\t\t")])])])}),[],!1,null,"440aea22",null).exports);function L(e,n,t,i,r,a,o){try{var l=e[a](o),s=l.value}catch(e){return void t(e)}l.done?n(s):Promise.resolve(s).then(i,r)}function R(e){return function(){var n=this,t=arguments;return new Promise((function(i,r){var a=e.apply(n,t);function o(e){L(a,i,r,o,l,"next",e)}function l(e){L(a,i,r,o,l,"throw",e)}o(void 0)}))}}var q={name:"TemplatePicker",components:{EmptyContent:k(),Modal:O(),TemplatePreview:U},props:{logger:{type:Object,required:!0}},data:function(){return{checked:-1,loading:!1,name:null,opened:!1,provider:null}},computed:{nameWithoutExt:function(){return this.name.indexOf(".")>-1?this.name.split(".").slice(0,-1).join("."):this.name},emptyTemplate:function(){var e,n;return{basename:t("files","Blank"),fileid:-1,filename:this.t("files","Blank"),hasPreview:!1,mime:(null===(e=this.provider)||void 0===e?void 0:e.mimetypes[0])||(null===(n=this.provider)||void 0===n?void 0:n.mimetypes)}},selectedTemplate:function(){var e=this;return this.provider.templates.find((function(n){return n.fileid===e.checked}))},style:function(){return{"--margin":"8px","--width":"160px","--border":"2px","--fullwidth":"180px","--height":this.provider.ratio?Math.round(160/this.provider.ratio)+"px":null}}},methods:{open:function(e,n){var t=this;return R(regeneratorRuntime.mark((function i(){var r,a;return regeneratorRuntime.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return t.checked=t.emptyTemplate.fileid,t.name=e,t.provider=n,i.next=5,F();case 5:if(r=i.sent,null!==(a=r.find((function(e){return e.app===n.app&&e.label===n.label})))){i.next=9;break}throw new Error("Failed to match provider in results");case 9:if(t.provider=a,0!==a.templates.length){i.next=13;break}return t.onSubmit(),i.abrupt("return");case 13:t.opened=!0;case 14:case"end":return i.stop()}}),i)})))()},close:function(){this.checked=this.emptyTemplate.fileid,this.loading=!1,this.name=null,this.opened=!1,this.provider=null},onCheck:function(e){this.checked=e},onSubmit:function(){var e=this;return R(regeneratorRuntime.mark((function n(){var t,i,r,a,o,l,s,c,u,d,p,f;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.loading=!0,a=C(),o=null===(t=OCA)||void 0===t||null===(i=t.Files)||void 0===i||null===(r=i.App)||void 0===r?void 0:r.currentFileList,e.nameWithoutExt===e.name&&(e.logger.debug("Fixed invalid filename",{name:e.name,extension:null===(l=e.provider)||void 0===l?void 0:l.extension}),e.name=e.name+(null===(s=e.provider)||void 0===s?void 0:s.extension)),n.prev=4,n.next=7,T((0,w.normalize)("".concat(a,"/").concat(e.name)),null===(c=e.selectedTemplate)||void 0===c?void 0:c.filename,null===(u=e.selectedTemplate)||void 0===u?void 0:u.templateType);case 7:return d=n.sent,e.logger.debug("Created new file",d),n.next=11,null==o?void 0:o.addAndFetchFileInfo(e.name).then((function(e,n){return n}));case 11:p=n.sent,f=new OCA.Files.FileInfoModel(p,{filesClient:null==o?void 0:o.filesClient}),OCA.Files.fileActions.getDefaultFileAction(d.mime,"file",OC.PERMISSION_ALL).action(d.basename,{$file:null==o?void 0:o.findFileEl(e.name),dir:a,fileList:o,fileActions:null==o?void 0:o.fileActions,fileInfoModel:f}),e.close(),n.next=23;break;case 18:n.prev=18,n.t0=n.catch(4),e.logger.error("Error while creating the new file from template"),console.error(n.t0),(0,y.x2)(e.t("files","Unable to create new file from template"));case 23:return n.prev=23,e.loading=!1,n.finish(23);case 26:case"end":return n.stop()}}),n,null,[[4,18,23,26]])})))()}}},W=q,Z=i(87375),N=(M()(Z.Z,{insert:"head",singleton:!1}),Z.Z.locals,(0,s.Z)(W,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return e.opened?t("Modal",{staticClass:"templates-picker",attrs:{"clear-view-delay":-1,size:"large"},on:{close:e.close}},[t("form",{staticClass:"templates-picker__form",style:e.style,on:{submit:function(n){return n.preventDefault(),n.stopPropagation(),e.onSubmit.apply(null,arguments)}}},[t("h2",[e._v(e._s(e.t("files","Pick a template for {name}",{name:e.nameWithoutExt})))]),e._v(" "),t("ul",{staticClass:"templates-picker__list"},[t("TemplatePreview",e._b({attrs:{checked:e.checked===e.emptyTemplate.fileid},on:{check:e.onCheck}},"TemplatePreview",e.emptyTemplate,!1)),e._v(" "),e._l(e.provider.templates,(function(n){return t("TemplatePreview",e._b({key:n.fileid,attrs:{checked:e.checked===n.fileid,ratio:e.provider.ratio},on:{check:e.onCheck}},"TemplatePreview",n,!1))}))],2),e._v(" "),t("div",{staticClass:"templates-picker__buttons"},[t("button",{on:{click:e.close}},[e._v("\n\t\t\t\t"+e._s(e.t("files","Cancel"))+"\n\t\t\t")]),e._v(" "),t("input",{staticClass:"primary",attrs:{type:"submit","aria-label":e.t("files","Create a new file with the selected template")},domProps:{value:e.t("files","Create")}})])]),e._v(" "),e.loading?t("EmptyContent",{staticClass:"templates-picker__loading",attrs:{icon:"icon-loading"}},[e._v("\n\t\t"+e._s(e.t("files","Creating file"))+"\n\t")]):e._e()],1):e._e()}),[],!1,null,"5fe9240a",null)),$=N.exports;function z(e,n,t,i,r,a,o){try{var l=e[a](o),s=l.value}catch(e){return void t(e)}l.done?n(s):Promise.resolve(s).then(i,r)}var G=(0,m.getLoggerBuilder)().setApp("files").detectUser().build();r.default.mixin({methods:{t:v.translate,n:v.translatePlural}});var Y=document.createElement("div");Y.id="template-picker",document.body.appendChild(Y);var Q=(0,A.loadState)("files","templates",[]),H=(0,A.loadState)("files","templates_path",!1);G.debug("Templates providers",Q),G.debug("Templates folder",{templatesPath:H});var K=new(r.default.extend($))({name:"TemplatePicker",propsData:{logger:G}});K.$mount("#template-picker"),window.addEventListener("DOMContentLoaded",(function(){if(!H){G.debug("Templates folder not initialized");var e={attach:function(e){e.addMenuEntry({id:"template-init",displayName:(0,v.translate)("files","Set up templates folder"),templateName:(0,v.translate)("files","Templates"),iconClass:"icon-template-add",fileType:"file",actionHandler:function(n){V(n),e.removeMenuEntry("template-init")}})}};OC.Plugins.register("OCA.Files.NewFileMenu",e)}})),Q.forEach((function(e,n){var t={attach:function(t){var i=t.fileList;"files"!==i.id&&"files.public"!==i.id||t.addMenuEntry({id:"template-new-".concat(e.app,"-").concat(n),displayName:e.label,templateName:e.label+e.extension,iconClass:e.iconClass||"icon-file",fileType:"file",actionHandler:function(n){K.open(n,e)}})}};OC.Plugins.register("OCA.Files.NewFileMenu",t)}));var J,V=function(){var e,n=(e=regeneratorRuntime.mark((function e(n){var t,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=(C()+"/".concat(n)).replace("//","/"),e.prev=1,G.debug("Initializing the templates directory",{templatePath:t}),e.next=5,b.default.post((0,h.generateOcsUrl)("apps/files/api/v1/templates/path"),{templatePath:t,copySystemTemplates:!0});case 5:i=e.sent,OCA.Files.App.currentFileList.changeDirectory(t,!0,!0),Q=i.data.ocs.data.templates,H=i.data.ocs.data.template_path,e.next=15;break;case 11:e.prev=11,e.t0=e.catch(1),G.error("Unable to initialize the templates directory"),(0,y.x2)((0,v.translate)("files","Unable to initialize the templates directory"));case 15:case"end":return e.stop()}}),e,null,[[1,11]])})),function(){var n=this,t=arguments;return new Promise((function(i,r){var a=e.apply(n,t);function o(e){z(a,i,r,o,l,"next",e)}function l(e){z(a,i,r,o,l,"throw",e)}o(void 0)}))});return function(e){return n.apply(this,arguments)}}(),X=i(74854);J={attach:function(e){var n=this;(0,X.subscribe)("nextcloud:unified-search.search",(function(n){var t=n.query;e.setFilter(t)})),(0,X.subscribe)("nextcloud:unified-search.reset",(function(){n.query=null,e.setFilter("")}))}},window.OC.Plugins.register("OCA.Files.FileList",J)},78299:function(e,n,t){var i=t(94015),r=t.n(i),a=t(23645),o=t.n(a)()(r());o.push([e.id,".template-picker__item[data-v-440aea22]{display:flex}.template-picker__label[data-v-440aea22]{display:flex;align-items:center;flex:1 1;flex-direction:column}.template-picker__label[data-v-440aea22],.template-picker__label *[data-v-440aea22]{cursor:pointer;user-select:none}.template-picker__label[data-v-440aea22]::before{display:none !important}.template-picker__preview[data-v-440aea22]{display:block;overflow:hidden;flex:1 1;width:var(--width);min-height:var(--height);max-height:var(--height);padding:0;border:var(--border) solid var(--color-border);border-radius:var(--border-radius-large)}input:checked+label>.template-picker__preview[data-v-440aea22]{border-color:var(--color-primary)}.template-picker__preview--failed[data-v-440aea22]{display:flex}.template-picker__image[data-v-440aea22]{max-width:100%;background-color:var(--color-main-background);object-fit:cover}.template-picker__preview--failed .template-picker__image[data-v-440aea22]{width:calc(var(--margin)*8);margin:auto;background-color:transparent !important;object-fit:initial}.template-picker__title[data-v-440aea22]{overflow:hidden;max-width:calc(var(--width) + 4px);padding:var(--margin);white-space:nowrap;text-overflow:ellipsis}","",{version:3,sources:["webpack://./apps/files/src/components/TemplatePreview.vue"],names:[],mappings:"AAsJC,wCACC,YAAA,CAGD,yCACC,YAAA,CAEA,kBAAA,CACA,QAAA,CACA,qBAAA,CAEA,oFACC,cAAA,CACA,gBAAA,CAGD,iDACC,uBAAA,CAIF,2CACC,aAAA,CACA,eAAA,CAEA,QAAA,CACA,kBAAA,CACA,wBAAA,CACA,wBAAA,CACA,SAAA,CACA,8CAAA,CACA,wCAAA,CAEA,+DACC,iCAAA,CAGD,mDAEC,YAAA,CAIF,yCACC,cAAA,CACA,6CAAA,CAEA,gBAAA,CAID,2EACC,2BAAA,CAEA,WAAA,CACA,uCAAA,CAEA,kBAAA,CAGD,yCACC,eAAA,CAEA,kCAAA,CACA,qBAAA,CACA,kBAAA,CACA,sBAAA",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.template-picker {\n\t&__item {\n\t\tdisplay: flex;\n\t}\n\n\t&__label {\n\t\tdisplay: flex;\n\t\t// Align in the middle of the grid\n\t\talign-items: center;\n\t\tflex: 1 1;\n\t\tflex-direction: column;\n\n\t\t&, * {\n\t\t\tcursor: pointer;\n\t\t\tuser-select: none;\n\t\t}\n\n\t\t&::before {\n\t\t\tdisplay: none !important;\n\t\t}\n\t}\n\n\t&__preview {\n\t\tdisplay: block;\n\t\toverflow: hidden;\n\t\t// Stretch so all entries are the same width\n\t\tflex: 1 1;\n\t\twidth: var(--width);\n\t\tmin-height: var(--height);\n\t\tmax-height: var(--height);\n\t\tpadding: 0;\n\t\tborder: var(--border) solid var(--color-border);\n\t\tborder-radius: var(--border-radius-large);\n\n\t\tinput:checked + label > & {\n\t\t\tborder-color: var(--color-primary);\n\t\t}\n\n\t\t&--failed {\n\t\t\t// Make sure to properly center fallback icon\n\t\t\tdisplay: flex;\n\t\t}\n\t}\n\n\t&__image {\n\t\tmax-width: 100%;\n\t\tbackground-color: var(--color-main-background);\n\n\t\tobject-fit: cover;\n\t}\n\n\t// Failed preview, fallback to mime icon\n\t&__preview--failed &__image {\n\t\twidth: calc(var(--margin) * 8);\n\t\t// Center mime icon\n\t\tmargin: auto;\n\t\tbackground-color: transparent !important;\n\n\t\tobject-fit: initial;\n\t}\n\n\t&__title {\n\t\toverflow: hidden;\n\t\t// also count preview border\n\t\tmax-width: calc(var(--width) + 2*2px);\n\t\tpadding: var(--margin);\n\t\twhite-space: nowrap;\n\t\ttext-overflow: ellipsis;\n\t}\n}\n\n"],sourceRoot:""}]),n.Z=o},87375:function(e,n,t){var i=t(94015),r=t.n(i),a=t(23645),o=t.n(a)()(r());o.push([e.id,".templates-picker__form[data-v-5fe9240a]{padding:calc(var(--margin)*2);padding-bottom:0}.templates-picker__form h2[data-v-5fe9240a]{text-align:center;font-weight:bold;margin:var(--margin) 0 calc(var(--margin)*2)}.templates-picker__list[data-v-5fe9240a]{display:grid;grid-gap:calc(var(--margin)*2);grid-auto-columns:1fr;max-width:calc(var(--fullwidth)*6);grid-template-columns:repeat(auto-fit, var(--fullwidth));grid-auto-rows:1fr;justify-content:center}.templates-picker__buttons[data-v-5fe9240a]{display:flex;justify-content:space-between;padding:calc(var(--margin)*2) var(--margin);position:sticky;bottom:0;background-image:linear-gradient(0, var(--gradient-main-background))}.templates-picker__buttons button[data-v-5fe9240a],.templates-picker__buttons input[type=submit][data-v-5fe9240a]{height:44px}.templates-picker[data-v-5fe9240a]  .modal-container{position:relative;overflow-y:auto !important}.templates-picker__loading[data-v-5fe9240a]{position:absolute;top:0;left:0;justify-content:center;width:100%;height:100%;margin:0;background-color:var(--color-main-background-translucent)}","",{version:3,sources:["webpack://./apps/files/src/views/TemplatePicker.vue"],names:[],mappings:"AAyPC,yCACC,6BAAA,CAEA,gBAAA,CAEA,4CACC,iBAAA,CACA,gBAAA,CACA,4CAAA,CAIF,yCACC,YAAA,CACA,8BAAA,CACA,qBAAA,CAEA,kCAAA,CACA,wDAAA,CAEA,kBAAA,CAEA,sBAAA,CAGD,4CACC,YAAA,CACA,6BAAA,CACA,2CAAA,CACA,eAAA,CACA,QAAA,CACA,oEAAA,CAEA,kHACC,WAAA,CAKF,qDACC,iBAAA,CACA,0BAAA,CAGD,4CACC,iBAAA,CACA,KAAA,CACA,MAAA,CACA,sBAAA,CACA,UAAA,CACA,WAAA,CACA,QAAA,CACA,yDAAA",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.templates-picker {\n\t&__form {\n\t\tpadding: calc(var(--margin) * 2);\n\t\t// Will be handled by the buttons\n\t\tpadding-bottom: 0;\n\n\t\th2 {\n\t\t\ttext-align: center;\n\t\t\tfont-weight: bold;\n\t\t\tmargin: var(--margin) 0 calc(var(--margin) * 2);\n\t\t}\n\t}\n\n\t&__list {\n\t\tdisplay: grid;\n\t\tgrid-gap: calc(var(--margin) * 2);\n\t\tgrid-auto-columns: 1fr;\n\t\t// We want maximum 5 columns. Putting 6 as we don't count the grid gap. So it will always be lower than 6\n\t\tmax-width: calc(var(--fullwidth) * 6);\n\t\tgrid-template-columns: repeat(auto-fit, var(--fullwidth));\n\t\t// Make sure all rows are the same height\n\t\tgrid-auto-rows: 1fr;\n\t\t// Center the columns set\n\t\tjustify-content: center;\n\t}\n\n\t&__buttons {\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\t\tpadding: calc(var(--margin) * 2) var(--margin);\n\t\tposition: sticky;\n\t\tbottom: 0;\n\t\tbackground-image: linear-gradient(0, var(--gradient-main-background));\n\n\t\tbutton, input[type='submit'] {\n\t\t\theight: 44px;\n\t\t}\n\t}\n\n\t// Make sure we're relative for the loading emptycontent on top\n\t::v-deep .modal-container {\n\t\tposition: relative;\n\t\toverflow-y: auto !important;\n\t}\n\n\t&__loading {\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\tjustify-content: center;\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tmargin: 0;\n\t\tbackground-color: var(--color-main-background-translucent);\n\t}\n}\n\n"],sourceRoot:""}]),n.Z=o}},i={};function r(e){var t=i[e];if(void 0!==t)return t.exports;var a=i[e]={id:e,loaded:!1,exports:{}};return n[e].call(a.exports,a,a.exports,r),a.loaded=!0,a.exports}r.m=n,r.amdD=function(){throw new Error("define cannot be used indirect")},r.amdO={},e=[],r.O=function(n,t,i,a){if(!t){var o=1/0;for(u=0;u<e.length;u++){t=e[u][0],i=e[u][1],a=e[u][2];for(var l=!0,s=0;s<t.length;s++)(!1&a||o>=a)&&Object.keys(r.O).every((function(e){return r.O[e](t[s])}))?t.splice(s--,1):(l=!1,a<o&&(o=a));if(l){e.splice(u--,1);var c=i();void 0!==c&&(n=c)}}return n}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[t,i,a]},r.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(n,{a:n}),n},r.d=function(e,n){for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},r.j=181,function(){var e={181:0};r.O.j=function(n){return 0===e[n]};var n=function(n,t){var i,a,o=t[0],l=t[1],s=t[2],c=0;for(i in l)r.o(l,i)&&(r.m[i]=l[i]);if(s)var u=s(r);for(n&&n(t);c<o.length;c++)a=o[c],r.o(e,a)&&e[a]&&e[a][0](),e[o[c]]=0;return r.O(u)},t=self.webpackChunknextcloud=self.webpackChunknextcloud||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))}();var a=r.O(void 0,[874],(function(){return r(27130)}));a=r.O(a)}();
//# sourceMappingURL=files-main.js.map?v=b79c38d4b769b96c94bc