/*! For license information please see files-personal-settings.js.LICENSE.txt */
!function(){"use strict";var n,e={12497:function(n,e,r){var s,i=r(20144),a=r(22200),o=r(4820),l=r(20296),u=r.n(l),c=r(79753),d=r(26932),f=r(7811),p=r.n(f),h=r(17499),g=null===(s=(0,a.getCurrentUser)())?(0,h.getLoggerBuilder)().setApp("files").build():(0,h.getLoggerBuilder)().setApp("files").setUid(s.uid).build();function v(n,e,t,r,s,i,a){try{var o=n[i](a),l=o.value}catch(n){return void t(n)}o.done?e(l):Promise.resolve(l).then(r,s)}var m=(0,d.fn)(t("files","Choose a file or folder to transfer")).setMultiSelect(!1).setModal(!0).setType(1).allowDirectories().build(),b={name:"TransferOwnershipDialogue",components:{Multiselect:p()},data:function(){return{directory:void 0,directoryPickerError:void 0,submitError:void 0,loadingUsers:!1,selectedUser:null,userSuggestions:{},config:{minSearchStringLength:parseInt(OC.config["sharing.minSearchStringLength"],10)||0}}},computed:{canSubmit:function(){return!!this.directory&&!!this.selectedUser},formatedUserSuggestions:function(){var n=this;return Object.keys(this.userSuggestions).map((function(e){var t=n.userSuggestions[e];return{user:t.uid,displayName:t.displayName,icon:"icon-user"}}))},submitButtonText:function(){if(!this.canSubmit)return t("files","Transfer");var n=this.readableDirectory.split("/");return t("files","Transfer {path} to {userid}",{path:n[n.length-1],userid:this.selectedUser.displayName})},readableDirectory:function(){return this.directory?this.directory.substring(1):""}},created:function(){this.findUserDebounced=u()(this.findUser,300),this.findUser("")},methods:{start:function(){var n=this;this.directoryPickerError=void 0,m.pick().then((function(n){return""===n?"/":n})).then((function(e){if(g.debug("path ".concat(e," selected for transferring ownership")),!e.startsWith("/"))throw new Error(t("files","Invalid path selected"));n.directory=e})).catch((function(e){g.error("Selecting object for transfer aborted: ".concat(e.message||"Unknown error"),{error:e}),n.directoryPickerError=e.message||t("files","Unknown error")}))},findUser:function(n){var e,t=this;return(e=regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.query=n.trim(),!(n.length<t.config.minSearchStringLength)){e.next=3;break}return e.abrupt("return");case 3:return t.loadingUsers=!0,e.prev=4,e.next=7,o.default.get((0,c.generateOcsUrl)("apps/files_sharing/api/v1/sharees"),{params:{format:"json",itemType:"file",search:n,perPage:20,lookup:!1}});case 7:r=e.sent,t.userSuggestions={},r.data.ocs.data.exact.users.concat(r.data.ocs.data.users).forEach((function(n){i.default.set(t.userSuggestions,n.value.shareWith,{uid:n.value.shareWith,displayName:n.label})})),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(4),g.error("could not fetch users",{error:e.t0});case 15:return e.prev=15,t.loadingUsers=!1,e.finish(15);case 18:case"end":return e.stop()}}),e,null,[[4,12,15,18]])})),function(){var n=this,t=arguments;return new Promise((function(r,s){var i=e.apply(n,t);function a(n){v(i,r,s,a,o,"next",n)}function o(n){v(i,r,s,a,o,"throw",n)}a(void 0)}))})()},submit:function(){var n=this;this.canSubmit||g.warn("ignoring form submit"),this.submitError=void 0;var e={path:this.directory,recipient:this.selectedUser.user};g.debug("submit transfer ownership form",e);var r=(0,c.generateOcsUrl)("apps/files/api/v1/transferownership");o.default.post(r,e).then((function(n){return n.data})).then((function(e){g.info("Transfer ownership request sent",{data:e}),n.directory=void 0,n.selectedUser=null,(0,d.s$)(t("files","Ownership transfer request sent"))})).catch((function(e){var r;g.error("Could not send ownership transfer request",{error:e}),403===(null==e||null===(r=e.response)||void 0===r?void 0:r.status)?n.submitError=t("files","Cannot transfer ownership of a file or folder you don't own"):n.submitError=e.message||t("files","Unknown error")}))}}},w=b,A=r(93379),y=r.n(A),C=r(90083),x=(y()(C.Z,{insert:"head",singleton:!1}),C.Z.locals,r(51900)),_=(0,x.Z)(w,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("h3",[n._v(n._s(n.t("files","Transfer ownership of a file or folder"))+" ")]),n._v(" "),t("form",{on:{submit:function(e){return e.preventDefault(),n.submit.apply(null,arguments)}}},[t("p",{staticClass:"transfer-select-row"},[t("span",[n._v(n._s(n.readableDirectory))]),n._v(" "),void 0===n.directory?t("button",{on:{click:function(e){return e.preventDefault(),n.start.apply(null,arguments)}}},[n._v("\n\t\t\t\t"+n._s(n.t("files","Choose file or folder to transfer"))+"\n\t\t\t")]):t("button",{on:{click:function(e){return e.preventDefault(),n.start.apply(null,arguments)}}},[n._v("\n\t\t\t\t"+n._s(n.t("files","Change"))+"\n\t\t\t")]),n._v(" "),t("span",{staticClass:"error"},[n._v(n._s(n.directoryPickerError))])]),n._v(" "),t("p",{staticClass:"new-owner-row"},[t("label",{attrs:{for:"targetUser"}},[t("span",[n._v(n._s(n.t("files","New owner")))])]),n._v(" "),t("Multiselect",{staticClass:"middle-align",attrs:{id:"targetUser",options:n.formatedUserSuggestions,multiple:!1,searchable:!0,placeholder:n.t("files","Search users"),"preselect-first":!0,"preserve-search":!0,loading:n.loadingUsers,"track-by":"user",label:"displayName","internal-search":!1,"clear-on-select":!1,"user-select":!0},on:{"search-change":n.findUserDebounced},model:{value:n.selectedUser,callback:function(e){n.selectedUser=e},expression:"selectedUser"}})],1),n._v(" "),t("p",[t("input",{staticClass:"primary",attrs:{type:"submit",disabled:!n.canSubmit},domProps:{value:n.submitButtonText}}),n._v(" "),t("span",{staticClass:"error"},[n._v(n._s(n.submitError))])])])])}),[],!1,null,"edbdba28",null),U={name:"PersonalSettings",components:{TransferOwnershipDialogue:_.exports}},k=(0,x.Z)(U,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"section",attrs:{id:"files-personal-settings"}},[t("h2",[n._v(n._s(n.t("files","Files")))]),n._v(" "),t("TransferOwnershipDialogue")],1)}),[],!1,null,null,null).exports;r.nc=btoa((0,a.getRequestToken)()),i.default.prototype.t=t,(new(i.default.extend(k))).$mount("#files-personal-settings")},90083:function(n,e,t){var r=t(94015),s=t.n(r),i=t(23645),a=t.n(i)()(s());a.push([n.id,".middle-align[data-v-edbdba28]{vertical-align:middle}p[data-v-edbdba28]{margin-top:12px;margin-bottom:12px}.new-owner-row[data-v-edbdba28]{display:flex}.new-owner-row label[data-v-edbdba28]{display:flex;align-items:center}.new-owner-row label span[data-v-edbdba28]{margin-right:8px}.new-owner-row .multiselect[data-v-edbdba28]{flex-grow:1;max-width:280px}.transfer-select-row span[data-v-edbdba28]{margin-right:8px}","",{version:3,sources:["webpack://./apps/files/src/components/TransferOwnershipDialogue.vue"],names:[],mappings:"AAiOA,+BACC,qBAAA,CAED,mBACC,eAAA,CACA,kBAAA,CAED,gCACC,YAAA,CAEA,sCACC,YAAA,CACA,kBAAA,CAEA,2CACC,gBAAA,CAIF,6CACC,WAAA,CACA,eAAA,CAID,2CACC,gBAAA",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.middle-align {\n\tvertical-align: middle;\n}\np {\n\tmargin-top: 12px;\n\tmargin-bottom: 12px;\n}\n.new-owner-row {\n\tdisplay: flex;\n\n\tlabel {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\n\t\tspan {\n\t\t\tmargin-right: 8px;\n\t\t}\n\t}\n\n\t.multiselect {\n\t\tflex-grow: 1;\n\t\tmax-width: 280px;\n\t}\n}\n.transfer-select-row {\n\tspan {\n\t\tmargin-right: 8px;\n\t}\n}\n"],sourceRoot:""}]),e.Z=a}},r={};function s(n){var t=r[n];if(void 0!==t)return t.exports;var i=r[n]={id:n,loaded:!1,exports:{}};return e[n].call(i.exports,i,i.exports,s),i.loaded=!0,i.exports}s.m=e,s.amdD=function(){throw new Error("define cannot be used indirect")},s.amdO={},n=[],s.O=function(e,t,r,i){if(!t){var a=1/0;for(c=0;c<n.length;c++){t=n[c][0],r=n[c][1],i=n[c][2];for(var o=!0,l=0;l<t.length;l++)(!1&i||a>=i)&&Object.keys(s.O).every((function(n){return s.O[n](t[l])}))?t.splice(l--,1):(o=!1,i<a&&(a=i));if(o){n.splice(c--,1);var u=r();void 0!==u&&(e=u)}}return e}i=i||0;for(var c=n.length;c>0&&n[c-1][2]>i;c--)n[c]=n[c-1];n[c]=[t,r,i]},s.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return s.d(e,{a:e}),e},s.d=function(n,e){for(var t in e)s.o(e,t)&&!s.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},s.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),s.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},s.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},s.nmd=function(n){return n.paths=[],n.children||(n.children=[]),n},s.j=623,function(){var n={623:0};s.O.j=function(e){return 0===n[e]};var e=function(e,t){var r,i,a=t[0],o=t[1],l=t[2],u=0;for(r in o)s.o(o,r)&&(s.m[r]=o[r]);if(l)var c=l(s);for(e&&e(t);u<a.length;u++)i=a[u],s.o(n,i)&&n[i]&&n[i][0](),n[a[u]]=0;return s.O(c)},t=self.webpackChunknextcloud=self.webpackChunknextcloud||[];t.forEach(e.bind(null,0)),t.push=e.bind(null,t.push.bind(t))}();var i=s.O(void 0,[874],(function(){return s(12497)}));i=s.O(i)}();
//# sourceMappingURL=files-personal-settings.js.map?v=610458784fbb830ec169