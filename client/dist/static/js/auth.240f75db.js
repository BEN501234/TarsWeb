(function(t){function e(e){for(var i,s,l=e[0],r=e[1],c=e[2],d=0,h=[];d<l.length;d++)s=l[d],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&h.push(o[s][0]),o[s]=0;for(i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i]);u&&u(e);while(h.length)h.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],i=!0,l=1;l<a.length;l++){var r=a[l];0!==o[r]&&(i=!1)}i&&(n.splice(e--,1),t=s(s.s=a[0]))}return t}var i={},o={auth:0},n=[];function s(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=i,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(a,i,function(e){return t[e]}.bind(null,i));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],r=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=r;n.push([5,"chunk-vendors","chunk-common"]),a()})({"446d":function(t,e,a){},5:function(t,e,a){t.exports=a("63f1")},"63f1":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("a026"),o=(a("42a1"),a("b3f5"),a("5c96")),n=a.n(o),s=(a("a082"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("app-header"),a("keep-alive",[a("router-view",{staticClass:"main-width"})],1)],1)}),l=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app_index__header"},[a("div",{staticClass:"main-width"},[a("el-row",{attrs:{gutter:24}},[a("el-col",{attrs:{span:6}},[a("div",{staticClass:"logo-wrap"},["true"===t.enable&&"true"===t.show?a("a",{class:{active:!1},attrs:{href:"/"}},[a("img",{staticClass:"logo",attrs:{src:"/static/img/tars-logo.png"}})]):t._e(),"true"===t.k8s?a("a",{class:{active:!0},attrs:{href:"/k8s.html"}},[a("img",{staticClass:"logo",attrs:{src:"/static/img/K8S.png"}})]):t._e()])]),a("el-col",{attrs:{span:12}},[a("let-tabs",{staticClass:"tabs",attrs:{center:!0,activekey:t.$route.matched[0].path},on:{click:t.clickTab}},[a("let-tab-pane",{attrs:{tab:t.$t("ssoHeader.tab.tab1"),tabkey:"/",icon:t.serverIcon}}),t.isAdmin?a("let-tab-pane",{attrs:{tab:t.$t("ssoHeader.tab.tab2"),tabkey:"/user",icon:t.userIcon}}):t._e(),a("let-tab-pane",{attrs:{tab:t.$t("ssoHeader.tab.tab4"),tabkey:"/token",icon:t.tokenIcon}}),t.isAdmin?a("let-tab-pane",{attrs:{tab:t.$t("ssoHeader.tab.tab5"),tabkey:"/set",icon:t.opaIcon}}):t._e()],1)],1),a("el-col",{attrs:{span:2}},[a("div",{staticClass:"language-wrap"},[a("let-select",{attrs:{clearable:!1},on:{change:t.changeLocale},model:{value:t.locale,callback:function(e){t.locale=e},expression:"locale"}},[t._l(t.localeMessages,(function(e){return[a("let-option",{key:e.localeCode,attrs:{value:e.localeCode}},[t._v(t._s(e.localeName))])]}))],2)],1)]),a("el-col",{attrs:{span:4}},[a("div",{staticClass:"user-wrap"},[a("el-dropdown",{staticStyle:{"margin-bottom":"10px"},on:{command:t.handleCommand}},[a("span",{staticClass:"el-dropdown-link"},[t._v(" "+t._s(t.uid)),a("i",{directives:[{name:"show",rawName:"v-show",value:t.enableLogin,expression:"enableLogin"}],staticClass:"el-icon-arrow-down el-icon--right"})]),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{attrs:{command:"modifyPass"}},[t._v(t._s(t.$t("header.modifyPass")))]),a("el-dropdown-item",{attrs:{command:"quit"}},[t._v(t._s(t.$t("header.logout")))])],1)],1)],1)])],1)],1)])},c=[],u=(a("99af"),a("ac1f"),a("5319"),a("96cf"),a("1da1")),d=a("1817"),h=a.n(d),p=a("3e1a"),g=a.n(p),m=a("1ca6"),f=a.n(m),v=a("9742d"),b=a.n(v),w=a("4824"),k=a.n(w),$=a("f51c"),C={name:"App",data:function(){return{serverIcon:h.a,opaIcon:f.a,userIcon:g.a,packageIcon:k.a,tokenIcon:b.a,locale:this.$cookie.get("locale")||"cn",localeMessages:$["c"],enableLogin:!0,isAdmin:!1,uid:"--",k8s:this.$cookie.get("k8s")||"false",enable:this.$cookie.get("enable")||"false",show:this.$cookie.get("show")||"false",enableLdap:!1}},methods:{handleCommand:function(t){"modifyPass"==t&&(location.href="/pass.html"),"quit"==t&&(location.href="/logout")},clickTab:function(t){this.$router.replace(t)},changeLocale:function(){this.$cookie.set("locale",this.locale,{expires:"1Y"}),location.reload()},getLoginUid:function(){var t=this;this.$ajax.getJSON("/server/api/getLoginUid").then((function(e){e&&e.uid?t.uid=e.uid:t.uid="***"})).catch((function(e){t.$tip.error("".concat(t.$t("login.getUidFailed"),": ").concat(e.err_msg||e.message))}))},checkEnableLogin:function(){var t=this;this.$ajax.getJSON("/server/api/isEnableLogin").then((function(e){t.enableLogin=e.enableLogin||!1})).catch((function(t){}))},checkEnableLdap:function(){var t=this;this.$ajax.getJSON("/server/api/isEnableLdap").then((function(e){t.enableLdap=e.enableLdap||!1})).catch((function(t){}))},checkAdmin:function(){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.isAdmin=!1,e.abrupt("return",t.$ajax.getJSON("/server/api/isAdmin").then((function(e){t.isAdmin=e.admin})).catch((function(t){})));case 2:case"end":return e.stop()}}),e)})))()}},mounted:function(){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.getLoginUid(),t.checkEnableLogin(),e.next=4,t.checkAdmin();case 4:t.checkEnableLdap();case 5:case"end":return e.stop()}}),e)})))()}},A=C,x=(a("7097"),a("2877")),L=Object(x["a"])(A,r,c,!1,null,null,null),_=L.exports,S=a("559f"),y={name:"App",components:{AppHeader:_,AppFooter:S["a"]}},T=y,D=(a("7037"),Object(x["a"])(T,s,l,!1,null,null,null)),E=D.exports,M=a("8c4f"),O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{margin:"20px auto",overflow:"auto"}},[a("let-form",{attrs:{inline:"",itemWidth:"200px"},nativeOn:{submit:function(e){return e.preventDefault(),t.search(e)}}},[a("div",{staticStyle:{float:"center"}},[a("let-button",{attrs:{size:"small",theme:"primary"},on:{click:t.addItem}},[t._v(t._s(t.$t("auth.addPrivilege")))]),t._v(" "),t.enableLdap?t._e():a("let-button",{attrs:{size:"small",theme:"primary"},on:{click:t.addUser}},[t._v(t._s(t.$t("auth.addUser")))]),t._v(" "),a("let-button",{attrs:{size:"small",theme:"danger"},on:{click:t.delUser}},[t._v(t._s(t.$t("auth.delUser")))])],1),a("let-form-item",{attrs:{label:t.$t("auth.uid")}},[a("let-input",{attrs:{size:"middle"},model:{value:t.query.uid,callback:function(e){t.$set(t.query,"uid",e)},expression:"query.uid"}})],1),a("let-form-item",[a("let-button",{attrs:{size:"small",type:"submit",theme:"primary"}},[t._v(t._s(t.$t("ssoCommon.search")))])],1)],1),a("let-table",{attrs:{data:t.userListShow,stripe:"","empty-msg":t.$t("ssoCommon.nodata"),title:t.$t("auth.userManageTitle")}},[a("let-table-column",{attrs:{width:"5%"},scopedSlots:t._u([{key:"head",fn:function(e){return[a("let-checkbox",{model:{value:t.isCheckedAll,callback:function(e){t.isCheckedAll=e},expression:"isCheckedAll"}})]}},{key:"default",fn:function(e){return[a("let-checkbox",{attrs:{value:e.row.uid},model:{value:e.row.isChecked,callback:function(a){t.$set(e.row,"isChecked",a)},expression:"scope.row.isChecked"}})]}}])}),a("let-table-column",{attrs:{title:t.$t("auth.uid"),prop:"uid",width:"20%"}}),a("let-table-column",{attrs:{title:t.$t("auth.userTime"),prop:"update_time",width:"30%"}}),a("let-table-column",{attrs:{width:"60%",title:t.$t("auth.privileges")},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(e.row.authorization,(function(i,o){return a("let-tag",{key:o,staticStyle:{},attrs:{closable:""},on:{close:function(a){return t.delItem(e.row.uid,i)}}},[t._v(t._s(i.flag+" : "+i.role))])}))}}])}),t.pageCount>0?a("let-pagination",{attrs:{slot:"pagination",align:"right","prev-text":t.$t("ssoCommon.prevPage"),"next-text":t.$t("ssoCommon.nextPage"),total:t.pageCount,page:t.page},on:{change:t.changePage},slot:"pagination"}):t._e()],1),a("let-modal",{attrs:{title:t.dialogTitle,width:"600px"},on:{"on-cancel":t.onClose,"on-confirm":t.onConfirm},model:{value:t.showDialog,callback:function(e){t.showDialog=e},expression:"showDialog"}},[a("div",[a("let-form",{ref:"editForm",attrs:{itemWidth:"100%"}},[a("let-input",{attrs:{type:"hidden"},model:{value:t.dialog.id,callback:function(e){t.$set(t.dialog,"id",e)},expression:"dialog.id"}}),a("let-form-item",{attrs:{label:t.$t("auth.uid")}},[a("let-input",{attrs:{size:"small",required:"","required-tip":t.$t("auth.uidTips")},model:{value:t.dialog.uid,callback:function(e){t.$set(t.dialog,"uid",e)},expression:"dialog.uid"}})],1),a("let-form-item",{attrs:{label:t.$t("pass.password"),required:""}},[a("let-input",{attrs:{type:"password",size:"small",required:"","required-tip":t.$t("pass.passwordTips")},model:{value:t.dialog.password,callback:function(e){t.$set(t.dialog,"password",e)},expression:"dialog.password"}})],1)],1)],1)]),a("let-modal",{attrs:{title:t.dialogAuthTitle,width:"600px"},on:{"on-cancel":t.onClose,"on-confirm":t.onAuthConfirm},model:{value:t.showAuthDialog,callback:function(e){t.showAuthDialog=e},expression:"showAuthDialog"}},[a("div",[a("let-form",{ref:"editAuthForm",attrs:{itemWidth:"100%",labelWidth:"100%"}},[a("let-input",{attrs:{type:"hidden"},model:{value:t.dialogAuth.id,callback:function(e){t.$set(t.dialogAuth,"id",e)},expression:"dialogAuth.id"}}),a("let-form-item",{attrs:{label:t.$t("auth.role"),required:""}},[a("let-select",{model:{value:t.dialogAuth.role,callback:function(e){t.$set(t.dialogAuth,"role",e)},expression:"dialogAuth.role"}},[a("let-option",{attrs:{value:"admin"}},[t._v("admin")]),a("let-option",{attrs:{value:"operator"}},[t._v("operator")]),a("let-option",{attrs:{value:"developer"}},[t._v("developer")])],1)],1),a("let-form-item",{attrs:{label:t.$t("auth.uid"),required:""}},[a("let-select",{attrs:{filterable:""},model:{value:t.dialogAuth.uid,callback:function(e){t.$set(t.dialogAuth,"uid",e)},expression:"dialogAuth.uid"}},t._l(t.userList,(function(e){return a("let-option",{key:e.uid,attrs:{value:e.uid}},[t._v(t._s(e.name||e.uid))])})),1)],1),a("let-form-item",{attrs:{label:t.$t("auth.flag"),required:""}},[a("let-input",{attrs:{size:"middle",required:"","required-tip":t.$t("auth.flagTips")},model:{value:t.dialogAuth.flag,callback:function(e){t.$set(t.dialogAuth,"flag",e)},expression:"dialogAuth.flag"}})],1)],1)],1)])],1)},I=[],j=(a("4de4"),a("4160"),a("c975"),a("fb6a"),a("841c"),a("1276"),a("159b"),a("58b7")),P=a.n(j),N=a("c1df"),Y=a.n(N),U={name:"userPage",data:function(){return{uid:"",query:{uid:""},isCheckedAll:!1,userList:[],userListShow:[],totalCount:0,page:1,eachPageCount:20,password:"",dialogTitle:"",showDialog:!1,dialog:{id:"",uid:"",password:""},dialogAuthTitle:"",showAuthDialog:!1,dialogAuth:{id:"",flag:"",role:"",uid:""},enableLdap:!1}},computed:{pageCount:function(){return Math.ceil(this.totalCount/this.eachPageCount)}},methods:{getEnableLdap:function(){var t=this;this.$ajax.getJSON("/server/api/isEnableLdap").then((function(e){e&&(t.enableLdap=e.enableLdap)})).catch((function(t){console.log("get enableLdap:",t)}))},search:function(){var t=this;this.page=1,this.uid=this.query.uid;var e=[];e=this.uid?this.userList.filter((function(e){return-1!=e.uid.indexOf(t.query.uid)})):this.userList.slice((this.page-1)*this.eachPageCount,this.page*this.eachPageCount),this.isCheckedAll=!1,e.forEach((function(t){t.isChecked=!1,t.update_time=Y()(t.update_time).format("YYYY-MM-DD HH:mm:ss")})),this.userListShow=e},getUserList:function(){var t=this,e=this.$Loading.show();this.$ajax.getJSON("/server/api/auth/page/getUserIdList").then((function(a){e.hide(),a.forEach((function(t){t.isChecked=!1,t.role=JSON.stringify(t.authorization)})),t.userList=a,t.totalCount=a.length,t.search()})).catch((function(a){e.hide(),t.$tip.error("".concat(t.$t("auth.loadUserIdError"),": ").concat(a.err_msg||a.message))}))},changePage:function(t){this.page=t},addItem:function(){this.dialogAuthTitle=this.$t("auth.addPrivilege"),this.showAuthDialog=!0,this.dialogAuth.id="",this.dialogAuth.flag="",this.dialogAuth.role="",this.dialogAuth.uid=""},delItem:function(t,e){var a=this;this.$confirm(this.$t("auth.confirmDelete"),this.$t("ssoCommon.confirmTitle")).then((function(){var i=a.$Loading.show();a.$ajax.postJSON("/server/api/auth/page/pageDeleteAuth",{uid:t,role:e.role,flag:e.flag}).then((function(t){i.hide(),a.$tip.success(a.$t("auth.delSucc")),a.getUserList()})).catch((function(t){i.hide(),a.$tip.error("".concat(a.$t("auth.delError"),": ").concat(t.err_msg||t.message))}))}))},onAuthConfirm:function(){var t=this;if(this.$refs.editAuthForm.validate()){var e=this.dialogAuth.uid?this.dialogAuth.uid.split(/;|,/g):[],a=[];e.forEach((function(e){e&&a.push({flag:t.dialogAuth.flag,role:t.dialogAuth.role,uid:e})}));var i=this.$Loading.show(),o="/server/api/auth/page/addAuth";this.$ajax.postJSON(o,{auth:a}).then((function(e){i.hide(),t.showDialog=!1,t.$tip.success(t.dialogTitle+t.$t("ssoCommon.success")),t.getUserList()})).catch((function(e){i.hide(),t.$tip.error("".concat(t.dialogTitle).concat(t.$t("ssoCommon.failed"),": ").concat(e.err_msg||e.message))}))}},addUser:function(){this.dialogTitle=this.$t("auth.addUser"),this.showDialog=!0,this.dialog.id="",this.dialog.uid="",this.dialog.password=""},onConfirm:function(){var t=this;if(this.$refs.editForm.validate()){var e=this.dialog.uid?this.dialog.uid.split(/;|,/g):[],a=[];e.forEach((function(e){e&&a.push({uid:e,password:P()(t.dialog.password)})}));var i=this.$Loading.show(),o="/server/api/auth/page/addUser";this.$ajax.postJSON(o,{user:a}).then((function(e){i.hide(),t.showDialog=!1,t.$tip.success(t.dialogTitle+t.$t("ssoCommon.success")),t.getUserList()})).catch((function(e){i.hide(),t.$tip.error("".concat(t.dialogTitle).concat(t.$t("ssoCommon.failed"),": ").concat(e.err_msg||e.message))}))}},onClose:function(){},delUser:function(){var t=this;this.$confirm(this.$t("auth.confirmDelete"),this.$t("ssoCommon.confirmTitle")).then((function(){var e=[];if(t.userListShow.forEach((function(a){if(!0===a.isChecked){if("admin"==a.uid)return void t.$tip.error(t.$t("auth.adminDelError"));e.push(a.uid)}})),e.length){var a=t.$Loading.show();t.$ajax.postJSON("/server/api/auth/page/pageDeleteUser",{uids:e}).then((function(e){a.hide(),t.$tip.success(t.$t("auth.delSucc")),t.getUserList()})).catch((function(e){a.hide(),t.$tip.error("".concat(t.$t("auth.delError"),": ").concat(e.err_msg||e.message))}))}else t.$tips.error(t.$t("auth.selectRecord"))}))}},mounted:function(){this.getEnableLdap(),this.getUserList()},watch:{isCheckedAll:function(){var t=this.isCheckedAll;this.userListShow.forEach((function(e){e.isChecked=t}))},$route:function(t,e){this.getUserList()}}},Z=U,V=(a("6a62"),Object(x["a"])(Z,O,I,!1,null,null,null)),W=V.exports,R=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{margin:"20px auto",overflow:"auto"},attrs:{width:"300px"}},[a("let-table",{attrs:{data:t.authListShow,stripe:"","empty-msg":t.empty_msg}},[a("let-table-column",{attrs:{title:t.$t("auth.role"),prop:"role",width:"20%"}}),a("let-table-column",{attrs:{title:t.$t("auth.flag"),prop:"flag",width:"15%"}}),t.pageCount>0?a("let-pagination",{attrs:{slot:"pagination",align:"right","prev-text":t.$t("ssoCommon.prevPage"),"next-text":t.$t("ssoCommon.nextPage"),total:t.pageCount,page:t.page},on:{change:t.changePage},slot:"pagination"}):t._e()],1)],1)},J=[],q={name:"infoPage",data:function(){return{authList:[],isAdmin:!1,totalCount:0,page:1,eachPageCount:20,empty_msg:""}},computed:{pageCount:function(){return Math.ceil(this.totalCount/this.eachPageCount)},authListShow:function(){return this.authList.slice((this.page-1)*this.eachPageCount,this.page*this.eachPageCount)}},methods:{getAuthList:function(){var t=this,e=this.$Loading.show();this.$ajax.getJSON("/server/api/getMyAuthList").then((function(a){e.hide(),t.authList=a,t.totalCount=a.length})).catch((function(a){e.hide(),t.$tip.error("".concat(t.$t("auth.loadListError"),": ").concat(a.err_msg||a.message))}))},changePage:function(t){this.page=t},checkAdmin:function(){var t=this;this.isAdmin=!1,this.$ajax.getJSON("/server/api/isAdmin").then((function(e){t.isAdmin=e.admin,t.isAdmin?t.empty_msg=t.$t("ssoCommon.admin"):t.empty_msg=t.$t("ssoCommon.nodata")})).catch((function(t){}))}},mounted:function(){this.checkAdmin(),this.getAuthList()}},F=q,H=(a("b92e"),Object(x["a"])(F,R,J,!1,null,null,null)),G=H.exports,z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{margin:"20px auto",overflow:"auto"}},[a("div",{staticStyle:{float:"center"}},[a("let-button",{attrs:{size:"small",theme:"primary"},on:{click:t.addToken}},[t._v(t._s(t.$t("auth.addToken")))]),t._v(" "),a("let-button",{attrs:{size:"small",theme:"danger"},on:{click:t.delToken}},[t._v(t._s(t.$t("auth.delToken")))])],1),a("let-table",{attrs:{data:t.tokenListShow,stripe:"","empty-msg":t.$t("ssoCommon.nodata"),title:t.$t("auth.tokenManageTitle")}},[a("let-table-column",{attrs:{width:"5%"},scopedSlots:t._u([{key:"head",fn:function(e){return[a("let-checkbox",{model:{value:t.isCheckedAll,callback:function(e){t.isCheckedAll=e},expression:"isCheckedAll"}})]}},{key:"default",fn:function(e){return[a("let-checkbox",{attrs:{value:e.row.token},model:{value:e.row.isChecked,callback:function(a){t.$set(e.row,"isChecked",a)},expression:"scope.row.isChecked"}})]}}])}),a("let-table-column",{attrs:{title:t.$t("auth.uid"),prop:"uid",width:"10%"}}),a("let-table-column",{attrs:{title:t.$t("auth.token"),prop:"token",width:"20%"}}),a("let-table-column",{attrs:{title:t.$t("auth.tokenExpireTime"),prop:"expire_time",width:"15%"}}),a("let-table-column",{attrs:{title:t.$t("auth.tokenTime"),prop:"update_time",width:"15%"}}),a("let-table-column",{attrs:{title:t.$t("auth.status"),width:"5%"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{style:t.statusStyle(e.row.valid)},[t._v(t._s(e.row.validDesc))])]}}])}),a("let-table-column",{attrs:{title:t.$t("auth.operator"),width:"5%"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("let-button",{attrs:{theme:e.row.valid?"primary":"danger"},on:{click:function(a){return t.onTokenValid(e.row)}}},[t._v(t._s(t.isTokenValid(e.row.valid)))])]}}])}),t.pageCount>0?a("let-pagination",{attrs:{slot:"pagination",align:"right","prev-text":t.$t("ssoCommon.prevPage"),"next-text":t.$t("ssoCommon.nextPage"),total:t.pageCount,page:t.page},on:{change:t.changePage},slot:"pagination"}):t._e()],1),a("let-modal",{attrs:{title:t.dialogTitle,width:"600px"},on:{"on-cancel":t.onClose,"on-confirm":t.onConfirm},model:{value:t.showDialog,callback:function(e){t.showDialog=e},expression:"showDialog"}},[a("div",[a("let-form",{ref:"editForm",attrs:{itemWidth:"100%"}},[a("let-form-item",{attrs:{label:t.$t("auth.tokenExpireTime")}},[a("let-datetime-picker",{attrs:{required:"","required-tip":t.$t("auth.tokenTips")},model:{value:t.dialog.expire_time,callback:function(e){t.$set(t.dialog,"expire_time",e)},expression:"dialog.expire_time"}})],1)],1)],1)])],1)},Q=[],B={name:"tokenPage",data:function(){return{isCheckedAll:!1,tokenList:[],totalCount:0,page:1,eachPageCount:30,token:"",expireTime:"",dialogTitle:"",showDialog:!1,dialog:{expire_time:""}}},computed:{pageCount:function(){return Math.ceil(this.totalCount/this.eachPageCount)},tokenListShow:function(){var t=this,e=this.tokenList.slice((this.page-1)*this.eachPageCount,this.page*this.eachPageCount);return this.isCheckedAll=!1,e.forEach((function(e){e.isChecked=!1,e.validDesc=1==e.valid?t.$t("auth.valid"):t.$t("auth.notValid"),e.expire_time=Y()(e.expire_time).format("YYYY-MM-DD HH:mm:ss"),e.update_time=Y()(e.update_time).format("YYYY-MM-DD HH:mm:ss")})),e}},methods:{getTokenList:function(){var t=this,e=this.$Loading.show();this.$ajax.getJSON("/server/api/auth/getTokenList").then((function(a){e.hide(),a.forEach((function(t){t.isChecked=!1})),t.tokenList=a,t.totalCount=a.length})).catch((function(a){e.hide(),t.$tip.error("".concat(t.$t("auth.loadTokenError"),": ").concat(a.err_msg||a.message))}))},statusStyle:function(t){return t?"color: green":"color: red"},onTokenValid:function(t){var e=this;this.$confirm(this.$t("auth.setTokenValid")).then((function(){var a=e.$Loading.show();e.$ajax.postJSON("/server/api/auth/setTokenValid",{token:t.token,valid:1-t.valid}).then((function(t){a.hide(),e.getTokenList(),e.$tip.success("".concat(e.$t("auth.setTokenSucc")))})).catch((function(t){a.hide(),e.$tip.error("".concat(e.$t("auth.setTokenError"),": ").concat(t.err_msg||t.message))}))}))},isTokenValid:function(t){return 1==t?this.$t("auth.notValid"):this.$t("auth.valid")},changePage:function(t){this.page=t},addToken:function(){this.dialogTitle=this.$t("auth.addToken"),this.showDialog=!0,this.dialog.expire_time=""},onConfirm:function(){var t=this;if(this.$refs.editForm.validate()){var e=this.$Loading.show(),a="/server/api/auth/addToken";this.$ajax.postJSON(a,{expire_time:this.dialog.expire_time}).then((function(a){e.hide(),t.showDialog=!1,t.$tip.success(t.dialogTitle+t.$t("ssoCommon.success")),t.getTokenList()})).catch((function(a){e.hide(),t.$tip.error("".concat(t.dialogTitle).concat(t.$t("ssoCommon.failed"),": ").concat(a.err_msg||a.message))}))}},onClose:function(){},delToken:function(){var t=this;this.$confirm(this.$t("auth.confirmTokenDelete"),this.$t("auth.confirmTokenTitle")).then((function(){var e=[];if(t.tokenListShow.forEach((function(t){!0===t.isChecked&&e.push(t.id)})),e.length){var a=t.$Loading.show();t.$ajax.postJSON("/server/api/auth/deleteToken",{tokens:e}).then((function(e){a.hide(),t.$tip.success(t.$t("auth.delSucc")),t.getTokenList()})).catch((function(e){a.hide(),t.$tip.error("".concat(t.$t("auth.delError"),": ").concat(e.err_msg||e.message))}))}else t.$tips.error(t.$t("auth.selectRecord"))}))}},mounted:function(){this.getTokenList()},watch:{isCheckedAll:function(){var t=this.isCheckedAll;this.tokenListShow.forEach((function(e){e.isChecked=t}))}}},K=B,X=(a("d47f"),Object(x["a"])(K,z,Q,!1,null,null,null)),tt=X.exports,et=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{margin:"20px auto",overflow:"auto"}},[a("let-table",{attrs:{data:t.setListShow,stripe:"","empty-msg":t.$t("ssoCommon.nodata"),title:t.$t("auth.setManageTitle")}},[a("let-table-column",{attrs:{title:t.$t("auth.setTitle"),prop:"title",width:"15%"}}),a("let-table-column",{attrs:{title:t.$t("auth.valid"),prop:"valid",width:"10%"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("let-switch",{on:{change:function(a){return t.onSetValid(e.row)}},model:{value:e.row.valid,callback:function(a){t.$set(e.row,"valid",a)},expression:"scope.row.valid"}},[a("span",{attrs:{slot:"open"},slot:"open"},[t._v("Open")]),a("span",{attrs:{slot:"close"},slot:"close"},[t._v("Close")])])]}}])}),a("let-table-column",{attrs:{title:t.$t("auth.about"),prop:"about_cn",width:"60%"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.about_cn))]),a("br"),a("span",[t._v(t._s(e.row.about_en))])]}}])}),a("let-table-column",{attrs:{title:t.$t("auth.operator"),width:"15%"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("let-table-operation",{on:{click:function(a){return t.editSet(e.row)}}},[t._v(t._s(t.$t("operate.update")))]),a("let-table-operation",{on:{click:function(a){return t.viewSet(e.row)}}},[t._v(t._s(t.$t("operate.view")))])]}}])}),t.pageCount>0?a("let-pagination",{attrs:{slot:"pagination",align:"right","prev-text":t.$t("ssoCommon.prevPage"),"next-text":t.$t("ssoCommon.nextPage"),total:t.pageCount,page:t.page},on:{change:t.changePage},slot:"pagination"}):t._e()],1),a("let-modal",{attrs:{title:t.dialogTitle,width:"600px"},on:{"on-cancel":t.onClose,"on-confirm":t.onConfirm},model:{value:t.showDialog,callback:function(e){t.showDialog=e},expression:"showDialog"}},[a("div",[a("let-form",{ref:"editForm",attrs:{itemWidth:"100%"}},[a("let-form-item",{attrs:{label:t.$t("auth.setTitle"),required:""}},[a("let-input",{attrs:{disabled:"",required:"","required-tip":t.$t("ssoCommon.notEmpty")},model:{value:t.dialog.title,callback:function(e){t.$set(t.dialog,"title",e)},expression:"dialog.title"}})],1),a("let-form-item",{attrs:{label:t.$t("auth.setInfo"),required:""}},[a("let-input",{attrs:{type:"textarea",rows:10,required:"","required-tip":t.$t("ssoCommon.notEmpty"),placeholder:"{ title: 'abcd' }"},model:{value:t.dialog.info,callback:function(e){t.$set(t.dialog,"info",e)},expression:"dialog.info"}})],1)],1)],1)]),a("let-modal",{attrs:{title:t.$t("cfg.msg.viewContent"),width:"800px"},model:{value:t.viewModal.show,callback:function(e){t.$set(t.viewModal,"show",e)},expression:"viewModal.show"}},[a("div",{staticClass:"pre_con"},[t.viewModal.model?a("pre",[t._v(t._s(t.viewModal.model.info))]):t._e()]),a("div",{attrs:{slot:"foot"},slot:"foot"})])],1)},at=[],it={name:"setPage",data:function(){return{setList:[],totalCount:0,page:1,eachPageCount:30,set:"",expireTime:"",dialogTitle:"",showDialog:!1,dialog:{title:"",info:""},viewModal:{show:!1,model:null}}},computed:{pageCount:function(){return Math.ceil(this.totalCount/this.eachPageCount)},setListShow:function(){var t=this.setList.slice((this.page-1)*this.eachPageCount,this.page*this.eachPageCount);return t.forEach((function(t){t.update_time=Y()(t.update_time).format("YYYY-MM-DD HH:mm:ss")})),t}},methods:{getSetList:function(){var t=this,e=this.$Loading.show();this.$ajax.getJSON("/server/api/auth/page/getSetList").then((function(a){e.hide(),t.setList=a,t.totalCount=a.length})).catch((function(a){e.hide(),t.$tip.error("".concat(t.$t("auth.loadSetError"),": ").concat(a.err_msg||a.message))}))},onSetValid:function(t){var e=this;this.$confirm(this.$t("auth.setSetValid")).then((function(){var a=e.$Loading.show();e.$ajax.postJSON("/server/api/auth/page/setSetValid",{title:t.title,valid:1-(t.valid?0:1)}).then((function(t){a.hide(),e.getSetList(),e.$tip.success("".concat(e.$t("auth.setSetSucc")))})).catch((function(t){a.hide(),e.$tip.error("".concat(e.$t("auth.setSetError"),": ").concat(t.err_msg||t.message))}))})).catch((function(){t.valid=1-t.valid}))},isSetValid:function(t){return 1==t?this.$t("auth.notValid"):this.$t("auth.valid")},changePage:function(t){this.page=t},viewSet:function(t){this.viewModal.model=t,this.viewModal.show=!0},editSet:function(t){this.dialogTitle=this.$t("auth.editSet"),this.dialog=t,this.showDialog=!0},onConfirm:function(){var t=this;if(this.$refs.editForm.validate()){try{JSON.parse(this.dialog.info)}catch(i){return void this.$tip.error("config content must be json!"+i)}var e=this.$Loading.show(),a="/server/api/auth/page/updateSet";this.$ajax.postJSON(a,this.dialog).then((function(a){e.hide(),t.showDialog=!1,t.$tip.success(t.dialogTitle+t.$t("ssoCommon.success")),t.getSetList()})).catch((function(a){e.hide(),t.$tip.error("".concat(t.dialogTitle).concat(t.$t("ssoCommon.failed"),": ").concat(a.err_msg||a.message))}))}},onClose:function(){}},mounted:function(){this.getSetList()}},ot=it,nt=(a("8c4b"),Object(x["a"])(ot,et,at,!1,null,null,null)),st=nt.exports;i["default"].use(M["a"]);var lt=new M["a"]({routes:[{path:"/user",name:"userManage",component:W},{path:"/token",name:"tokenManage",component:tt},{path:"/set",name:"setManage",component:st},{path:"/",name:"infoManage",component:G}]});i["default"].config.productionTip=!1,$["b"].call(void 0).then((function(){i["default"].use(n.a,{i18n:function(t,e){return $["a"].t(t,e)}}),new i["default"]({el:"#auth-app",router:lt,i18n:$["a"],components:{App:E},template:"<App/>"})}))},"6a62":function(t,e,a){"use strict";var i=a("446d"),o=a.n(i);o.a},7037:function(t,e,a){"use strict";var i=a("9df6"),o=a.n(i);o.a},7097:function(t,e,a){"use strict";var i=a("714d"),o=a.n(i);o.a},"714d":function(t,e,a){},"77bd":function(t,e,a){},"8c4b":function(t,e,a){"use strict";var i=a("abf4"),o=a.n(i);o.a},"9742d":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo1ZDFiOTQyYS0zZWUyLTkxNGQtOTBiYS1iZTVkYzNjOTU1OTAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzY2QzI2NDc2MUUwMTFFQUE2QjFBQzg4RDAwMDRCRDQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzY2QzI2NDY2MUUwMTFFQUE2QjFBQzg4RDAwMDRCRDQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjEwODNhYzItNzY4Yy02MjRkLWEyYWMtYTFiMTdmOTZhZmZhIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6NzRmMzZhYTgtODFhOC04ZTQ5LWExN2UtMDI2MDYwMWE2ZGMwIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+I9/UywAAA2JJREFUeNrsWUtoE1EUvZNM008SbUqQRrBtgtBoV36QLOxGi1pBV7qo0IXYUIti6cKiIIgrQUFdidCKggtBC0q1aZXqUoq/lQUr0qatJlKKVdMYm9947+SNJONEp01m0kAunL508t68M2fufWfmhRMEAYopDFBkUSKsdfDyA32D0yZsLiPaEbYC8VpA3EGcRkS9B+uzE8a4hDhVYCFtjEMEceZ/KdHO2mYEVyA0Mw5eOTlOvqxhSkgHuIE36wom8aFtcyIP5MBJx55cqFRVdK2IAELQGAE2V86rxE2EQwdRHWyunAlrRvb4Hh4Gz1WIrdq5eLUnp/zJFnvPR1ZE+ICnDHgjwP4dPNx4Gl/9xvFoLAZLMQF8L+Oqx6hWeKUq/itIVbXKLkfhoI6if8kH4Q41J8pDfEYcy0dK+LDg9FjWVKVd8T+tKTkdXrke5hFkKTFccrqS05WcruR0YkQR9xBHEE5EOcKaD4U7WPXW5pHsA0Qv1sVH2V2Mrmqnuz08u5kJQm8azjaPeHgSMRLHTFHalOILUWxIlLYSriC6FNJyE4HnDZBExm2e+cq7Y/ZIIZxuAO/UYUZ2CNFiNHDQuMEMrvVmWGtJUfm+GIfJQBgmZsMASfHQYyTdiqSjagnngyxN1sM+XyWy5goj7N5uhxqrKaOjvdokYiNeyLPX8xD+ldjF7sZJPZ3uPqr7CdVtws+dpGyLjOzZW0sipKDvqA/1JVNElZv0dLqHaSuOsbHODDaZsm/9yb+3f7CPu94C41MhIxvbo5fTvWLtPvrjcphVD3TWVkH6WL2cTnpjcYnKrSn7kwZyZaV5tjYY4OLRcqhhfaWxejmdabkXLC3BiaSQXri6OR0VboiZgnvhR0xcCUhBubLyWqFljsW0WoV9bMJcdiM/sHONiFYWDKu+0rS+o9kIf2XtTg2Kj+5UYmImDAuhzMcGytktDZl0qA/1pTGIfvqgtN16DZturZYLI8+BgeMgm3Gkkx1NGQf9ex2d7gSli1IO97LbqMlPBom4ABzOSkSGXsyBu84CTkcVVFtTVL6F4jAV/AnvZxalgnue5pKKhKNM4W6tNrTRtcSHHyTUNe4PGRBK3Wi96yOy0nOEYkpo/ZYhI05262Wm4GJi+VmB9SPRd3K35Uq/hGocvwUYACbzV4iqlXUIAAAAAElFTkSuQmCC"},"9df6":function(t,e,a){},abf4:function(t,e,a){},b92e:function(t,e,a){"use strict";var i=a("ee0e"),o=a.n(i);o.a},d47f:function(t,e,a){"use strict";var i=a("77bd"),o=a.n(i);o.a},ee0e:function(t,e,a){}});