webshims.register("form-number-date-ui",function(e,t,n,i,r,a){"use strict";var o,s=t.formcfg,u=function(e){e.stopImmediatePropagation(e)},l=function(t){if(!o.patterns[t+"Obj"]){var n={};e.each(o.patterns[t].split(o[t+"Format"]),function(e,t){n[t]=e}),o.patterns[t+"Obj"]=n}},c={date:{_create:function(){var t={splits:[e('<input type="text" class="yy" size="4" inputmode="numeric" />')[0],e('<input type="text" class="mm" inputmode="numeric" maxlength="2" size="2" />')[0],e('<input type="text" class="dd ws-spin" inputmode="numeric" maxlength="2" size="2" />')[0]]};return t.elements=[t.splits[0],e('<span class="ws-input-seperator" />')[0],t.splits[1],e('<span class="ws-input-seperator" />')[0],t.splits[2]],t},sort:function(t){l("d");var n=0,i=e(".ws-input-seperator",t).html(o.dFormat),r=e("input",t);e.each(o.patterns.dObj,function(e){var a=r.filter("."+e);a[0]&&(a.appendTo(t),i.length>n&&i.eq(n).insertAfter(a),n++)})}},month:{_create:function(){var t={splits:[e('<input type="text" class="yy" size="4" />')[0],e('<input type="text" class="mm ws-spin" />')[0]]};return t.elements=[t.splits[0],e('<span class="ws-input-seperator" />')[0],t.splits[1]],t},sort:function(t){var n,i=e(".ws-input-seperator",t).html(o.dFormat),r=e("input.mm",t);o.date.showMonthAfterYear?(r.appendTo(t),n="insertBefore"):(r.prependTo(t),n="insertAfter"),i[n](r)}}},p={number:{step:1},time:{step:60},month:{step:1,start:new Date},date:{step:1,start:new Date}},d=function(){var n=function(){return t.getID(this)};return function(t,i,r){e(t).attr({"aria-labelledby":i.map(n).get().join(" ")}),r||i.on("click",function(e){return t.getShadowFocusElement().focus(),e.preventDefault(),!1})}}(),f=function(e){return e?(e+="",1==e.length?"0"+e:e):""};(function(){var t=["01","02","03","04","05","06","07","08","09","10","11","12"];s.de=e.extend(!0,{numberFormat:{",":".",".":","},timeSigns:":. ",numberSigns:",",dateSigns:".",dFormat:".",patterns:{d:"dd.mm.yy"},month:{currentText:"Aktueller Monat"},date:{close:"schließen",clear:"Löschen",prevText:"Zurück",nextText:"Vor",currentText:"Heute",monthNames:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],monthNamesShort:["Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],dayNames:["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"],dayNamesShort:["So","Mo","Di","Mi","Do","Fr","Sa"],dayNamesMin:["So","Mo","Di","Mi","Do","Fr","Sa"],weekHeader:"KW",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""}},s.de||{}),s.en=e.extend(!0,{numberFormat:{".":".",",":","},numberSigns:".",dateSigns:"/",timeSigns:":. ",dFormat:"/",patterns:{d:"mm/dd/yy"},month:{currentText:"This month"},date:{closeText:"Done",clear:"Clear",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""}},s.en||{}),s["en-US"]||(s["en-US"]=s.en),s[""]||(s[""]=s["en-US"]),o=s[""];var n=function(n){if(!n.date.monthkeys){var i=function(e,t){var i,r=e+1;i=10>r?"0"+r:""+r,n.date.monthkeys[r]=i,n.date.monthkeys[t]=i,n.date.monthkeys[t.toLowerCase()]=i};n.date.monthkeys={},n.date.monthDigits=t,n.numberSigns+="-",e.each(n.date.monthNames,i),e.each(n.date.monthNamesShort,i)}n.colorSigns||(n="#abcdef")};n(o),e.webshims.activeLang({register:"form-core",callback:function(){e.each(arguments,function(t,a){return s[a]?(o=s[a],n(o),e(i).triggerHandler("wslocalechange"),!1):r})}})})(),function(){var n=function(t){e(this)["mousepressstart"==t.type?"addClass":"removeClass"]("mousepress-ui")},i=function(e,t){return"number"==typeof e||e&&e==1*e?1*e:t},a={number:function(e){return(e+"").replace(/\,/g,"").replace(/\./,o.numberFormat["."])},time:function(e){return e},month:function(e,t){var n,i=e.split("-");return i[0]&&i[1]&&(n=o.date[t.formatMonthNames]||o.date[t.monthNames]||o.date.monthNames,i[1]=n[1*i[1]-1],t&&t.splitInput?e=[i[0]||"",i[1]||""]:i[1]&&(e=o.date.showMonthAfterYear?i.join(" "):i[1]+" "+i[0])),e},date:function(e,t){var n=(e+"").split("-");return n[2]&&n[1]&&n[0]?t&&t.splitInput?e=n:(e=o.patterns.d.replace("yy",n[0]||""),e=e.replace("mm",n[1]||""),e=e.replace("dd",n[2]||"")):t&&t.splitInput&&(e=[n[0]||"",n[1]||"",n[2]||""]),e},color:function(e){var t="#000000";return e&&(e=e.toLowerCase(),7==e.length&&h("color").isValid(e)&&(t=e)),t}},s={number:function(e){return(e+"").replace(o.numberFormat[","],"").replace(o.numberFormat["."],".")},time:function(e){return e},month:function(e,t){var n=t.splitInput?e:e.trim().split(/[\.\s-\/\\]+/);return 2==n.length?(n[0]=o.date.monthkeys[n[0]]||n[0],n[1]=o.date.monthkeys[n[1]]||n[1],e=2==n[1].length?n[0]+"-"+n[1]:2==n[0].length?n[1]+"-"+n[0]:""):t.splitInput&&(e=""),e},date:function(e,t){l("d");var n;return t.splitInput?n={yy:0,mm:1,dd:2}:(n=o.patterns.dObj,e=e.split(o.dFormat)),3==e.length&&e[0]&&e[1]&&e[2]?[f(e[n.yy]),f(e[n.mm]),f(e[n.dd])].join("-"):""},color:function(e){var t="#000000";return e&&(e=e.toLowerCase(),0!==e.indexOf("#")&&(e="#"+e),4==e.length&&(e="#"+e.charAt(1)+e.charAt(1)+e.charAt(2)+e.charAt(2)+e.charAt(3)+e.charAt(3)),7==e.length&&h("color").isValid(e)&&(t=e)),t}},d={date:function(e,t){var n=(e||"").split("-");return n=3==n.length?t.splitInput?n:o.patterns.d.replace("yy",n[0]).replace("mm",n[1]).replace("dd",n[2]):t.splitInput?[e,e,e]:e},month:function(e,t){var n=(e||"").split("-");return n=2==n.length?t.splitInput?n:o.patterns.d.replace("yy",n[0]).replace("mm",n[1]):t.splitInput?[e,e]:e}},h=function(){var t={};return function(n){var i;return t[n]||(i=e('<input type="'+n+'" />'),t[n]={asNumber:function(e){var t="object"==typeof e?"valueAsDate":"value";return i.prop(t,e).prop("valueAsNumber")},asValue:function(e){var t="object"==typeof e?"valueAsDate":"valueAsNumber";return i.prop(t,e).prop("value")},isValid:function(e){return i.prop("value",e).is(":valid")&&i.prop("value")==e}}),t[n]}}();p.range=p.number;var m={_create:function(){var t,n=this.options,i=this.createOpts;for(this.type=n.type,this.orig=n.orig,this.buttonWrapper=e('<span class="input-buttons '+this.type+'-input-buttons"></span>').insertAfter(this.element),this.options.containerElements.push(this.buttonWrapper[0]),n.splitInput&&this._addSplitInputs?this._addSplitInputs():this.inputElements=this.element,p[this.type]&&"object"==typeof p[this.type].start&&(p[this.type].start=this.asNumber(p[this.type].start)),t=0;i.length>t;t++)null!=n[i[t]]&&this[i[t]](n[i[t]]);"color"==this.type&&this.inputElements.prop("maxLength",7),this.addBindings(),e(this.element).data("wsWidget"+n.type,this),this._init=!0},addBindings:function(){var t,i=this,a=this.options,s=function(){var t={};return{init:function(n,r,a){t[n]||(t[n]={fn:a},e(i.orig).on(n,function(){t[n].val=e.prop(i.orig,"value")})),t[n].val=r},call:function(e,n){t[e]&&t[e].val!=n&&(clearTimeout(t[e].timer),t[e].val=n,t[e].timer=setTimeout(function(){t[e].fn(n,i)},9))}}}(),l=function(){s.init("input",e.prop(i.orig,"value"),i.options.input),s.init("change",e.prop(i.orig,"value"),i.options.change)},c={},f=function(e){return f.prevent?(e.preventDefault(),(t||i.element.getShadowFocusElement()).focus(),e.stopImmediatePropagation(),!0):r};(function(){var t,n=function(n){var r;clearTimeout(t),r=i.parseValue(),"color"==i.type&&i.inputElements.val(r),e.prop(i.orig,"value",r),s.call("input",r),n&&"wsupdatevalue"==n.type||s.call("change",r)},r=function(){clearTimeout(t)},o=function(e){clearTimeout(t),t=setTimeout(n,0),"change"==e.type&&(u(e),a.splitInput||n())};i.element.on("wsupdatevalue",n),i.inputElements.add(i.buttonWrapper).add(i.element).on({"focus focusin":r,"blur focusout change":o}),setTimeout(function(){i.popover&&(i.popover.element.on("wspopoverhide",o),e("> *",i.popover.element).on({focusin:r,focusout:o}))},0)})();var h={},m=a.splitInput?this.inputElements.filter(".ws-spin"):this.inputElements.eq(0),v={blur:function(e){f(e)||a.disabled||a.readonly||f.prevent||(t=!1),u(e)},focus:function(){t||(l(),t=this)},keypress:function(e){if(!e.isDefaultPrevented()){var t,n=!0,r=e.keyCode;e.ctrlKey||e.metaKey||!o[i.type+"Signs"]?n=!1:(t=String.fromCharCode(null==e.charCode?r:e.charCode),n=!(" ">t||(o[i.type+"Signs"]+"0123456789").indexOf(t)>-1)),n&&e.preventDefault()}},"input keydown keypress":function(){var t,n=!1,i=function(){n===!0?(n="semi",t=setTimeout(i,250)):n=!1},r=function(){n=!0,clearTimeout(t),t=setTimeout(i,300)},o=function(){this.focus(),this.select(),r()};return function(t){if(a.splitInput&&a.jumpInputs)if("input"==t.type){if(e.prop(this,"value").length===e.prop(this,"maxLength"))try{e(this).next().next("input").each(o)}catch(i){}}else t.shiftKey||t.crtlKey||9!=t.keyCode||n!==!0&&(!n||e.prop(this,"value"))||t.preventDefault()}}()},g=function(){return a.disabled||t||i.element.getShadowFocusElement().focus(),f.set(),!1};f.set=function(){var e,t=function(){f.prevent=!1};return function(){clearTimeout(e),f.prevent=!0,setTimeout(t,9)}}(),this.buttonWrapper.on("mousedown",g),this.setInput=function(e){i.value(e),s.call("input",e)},this.setChange=function(e){i.setInput(e),s.call("change",e)},this.inputElements.on(v),p[this.type]&&(["stepUp","stepDown"].forEach(function(e){c[e]=function(n){if(!a.disabled&&!a.readonly){t||g();var r=!1;n||(n=1);try{i.elemHelper[e](n),r=i.elemHelper.prop("value"),i.value(r),s.call("input",r)}catch(o){}return r}}}),a.noSpinbtn||(h[e.fn.mwheelIntent?"mwheelIntent":"mousewheel"]=function(e,n){n&&t&&!a.disabled&&(c[n>0?"stepUp":"stepDown"](),e.preventDefault())},h.keydown=function(t){if(!(a.list||t.isDefaultPrevented()||e.attr(this,"list"))){var n=!0,i=t.keyCode;38==i?c.stepUp():40==i?c.stepDown():n=!1,n&&t.preventDefault()}},m.attr({autocomplete:"off",role:"spinbutton"}).on(h)),e(this.buttonWrapper).on("mousepressstart mousepressend",".step-up, .step-down",n).on("mousedown mousepress",".step-up",function(){c.stepUp()}).on("mousedown mousepress",".step-down",function(){c.stepDown()})),"color"!=this.type&&function(){var t;a.splitInput?(t=function(){i.reorderInputs()},i.reorderInputs()):t=function(){a.value&&i.value(a.value),d[i.type]&&a.placeholder&&i.placeholder(a.placeholder)},e(i.orig).onWSOff("wslocalechange",t)}(),l()},value:function(e){this._init&&e===this.options.value||(this.element.val(this.formatValue(e)),this.options.value=e,this._propertyChange("value"))},parseValue:function(){var t=this.inputElements.map(function(){return e.prop(this,"value")}).get();return this.options.splitInput||(t=t[0]),s[this.type](t,this.options)},formatValue:function(e,t){return a[this.type](e,t===!1?!1:this.options)},createOpts:["readonly","title","disabled","tabindex","placeholder","value"],placeholder:function(t){var n=this.options;n.placeholder=t;var i=t;d[this.type]&&(i=d[this.type](t,this.options)),n.splitInput&&"object"==typeof i?e.each(this.splits,function(t,n){e.prop(n,"placeholder",i[t])}):this.element.prop("placeholder",i)},initDataList:function(){var t,n=this,i=function(){e(n.orig).jProp("list").off("updateDatalist",i).on("updateDatalist",i),clearTimeout(t),t=setTimeout(function(){n.list&&n.list()},9)};e(this.orig).onTrigger("listdatalistchange",i)},getOptions:function(){var t={},n=e(this.orig).jProp("list");return n.find("option").each(function(){t[e.prop(this,"value")]=e.prop(this,"label")}),[t,n.data("label")]},list:function(t){("number"==this.type||"time"==this.type)&&this.element.attr("list",e.attr(this.orig,"list")),this.options.list=t,this._propertyChange("list")},_propertyChange:e.noop,tabindex:function(t){this.options.tabindex=t,this.inputElements.prop("tabindex",this.options.tabindex),e("button",this.buttonWrapper).prop("tabindex",this.options.tabindex)},title:function(e){this.options.title=e,this.element.prop("title",this.options.title)}};["readonly","disabled"].forEach(function(t){var n="disabled"==t;m[t]=function(i){this.options[t]==i&&this._init||(this.options[t]=!!i,this.inputElements.prop(t,this.options[t]),this.buttonWrapper[this.options[t]?"addClass":"removeClass"]("ws-"+t)),n&&e("button",this.buttonWrapper).prop("disabled",this.options[t])}});var v=e.extend({},m,{_create:function(){var t=this.options,n=h(t.type);this.elemHelper=e('<input type="'+t.type+'" />'),this.asNumber=n.asNumber,this.asValue=n.asValue,m._create.apply(this,arguments),this._init=!1,this.buttonWrapper.html('<span unselectable="on" class="step-controls"><span class="step-up"></span><span class="step-down"></span></span>'),"number"==this.type&&this.inputElements.attr("inputmode","numeric"),t.min||"number"!=typeof t.relMin||(t.min=this.asValue(this.getRelNumber(t.relMin)),e.prop(this.orig,"min",t.min)),t.max||"number"!=typeof t.relMax||(t.max=this.asValue(this.getRelNumber(t.relMax)),e.prop(this.orig,"max",t.max)),this._init=!0},createOpts:["step","min","max","readonly","title","disabled","tabindex","placeholder","value"],_addSplitInputs:function(){if(!this.inputElements){var t=c[this.type]._create();this.splits=t.splits,this.inputElements=e(t.elements).prependTo(this.element).filter("input")}},getRelNumber:function(e){var t=p[this.type].start||0;return e&&(t+=e),t},addZero:f,_setStartInRange:function(){var e=this.getRelNumber(this.options.relDefaultValue);!isNaN(this.minAsNumber)&&this.minAsNumber>e?e=this.minAsNumber:!isNaN(this.maxAsNumber)&&e>this.maxAsNumber&&(e=this.maxAsNumber),this.elemHelper.prop("valueAsNumber",e),this.options.defValue=this.elemHelper.prop("value")},reorderInputs:function(){if(c[this.type]){var e=this.element;c[this.type].sort(e),setTimeout(function(){var n=t.data(e);n&&n.shadowData&&(n.shadowData.shadowFocusElement=e.find("input")[0]||e[0])},9)}},value:function(t){this._init&&this.options.value===t||(this.valueAsNumber=this.asNumber(t),this.options.value=t,isNaN(this.valueAsNumber)||!isNaN(this.minAsNumber)&&this.valueAsNumber<this.minAsNumber||!isNaN(this.maxAsNumber)&&this.valueAsNumber>this.maxAsNumber?this._setStartInRange():(this.elemHelper.prop("value",t),this.options.defValue=""),t=a[this.type](t,this.options),this.options.splitInput?e.each(this.splits,function(n,i){e.prop(i,"value",t[n])}):this.element.prop("value",t),this._propertyChange("value"))},step:function(e){var t=p[this.type];this.options.step=e,this.elemHelper.prop("step",i(e,t.step))}});e.each({min:1,max:-1},function(e,t){var n=e+"AsNumber";v[e]=function(i){this.elemHelper.prop(e,i),this[n]=this.asNumber(i),null!=this.valueAsNumber&&(isNaN(this.valueAsNumber)||!isNaN(this[n])&&this.valueAsNumber*t<this[n]*t)&&this._setStartInRange(),this.options[e]=i,this._propertyChange(e)}}),e.fn.wsBaseWidget=function(t){return t=e.extend({},t),this.each(function(){e.webshims.objectCreate(m,{element:{value:e(this)}},t)})},e.fn.spinbtnUI=function(t){return t=e.extend({monthNames:"monthNames",size:1,startView:0},t),this.each(function(){e.webshims.objectCreate(v,{element:{value:e(this)}},t)})}}(),function(){var n={},r=function(n,i){return n="color"==n?"color-picker":"forms-picker",r[i+"Loaded"+n]||(r[i+"Loaded"+n]=!0,t.ready(i,function(){e(function(){t.loader.loadList([n])})})),n};t.loader.addModule("forms-picker",{noAutoCallback:!0,options:{addZero:f}}),t.loader.addModule("color-picker",{noAutoCallback:!0,css:"jpicker/jpicker.css"}),n._genericSetFocus=function(t,n){if(t=e(t||this.activeButton),!this.popover.openedByFocus&&!n){var i=this,r=function(e){clearTimeout(i.timer),i.timer=setTimeout(function(){t[0]&&(t[0].focus(),e===!0||t.is(":focus")||r(!0))},i.popover.isVisible?99:360)};this.popover.activateElement(t),r()}},n._actions={changeInput:function(e,t,i){n._actions.cancel(e,t,i),i.setChange(e)},cancel:function(e,t,n){t.stopOpen=!0,n.element.getShadowFocusElement().focus(),setTimeout(function(){t.stopOpen=!1},9),t.hide()}},n.commonInit=function(t,n){var r;n.isDirty=!0,n.element.on("updatepickercontent pickerchange",function(){r=!1}),n.contentElement.on({keydown:function(i){if(9==i.keyCode){r||(r=e('input:not(:disabled), [tabindex="0"]:not(:disabled)',this).filter(":visible"));var a=r.index(i.target);if(i.shiftKey&&0>=a)return r.last().focus(),!1;if(!i.shiftKey&&a>=r.length-1)return r.first().focus(),!1}else if(27==i.keyCode)return t.element.getShadowFocusElement().focus(),n.hide(),!1}}),t._propertyChange=function(){var e,t=function(){n.isVisible&&n.element.triggerHandler("updatepickercontent")};return function(i){"value"!=i&&(n.isDirty=!0,n.isVisible&&(clearTimeout(e),e=setTimeout(t,9)))}}(),n.activeElement=e([]),n.activateElement=function(t){t=e(t),t[0]!=n.activeElement[0]&&(n.activeElement.removeClass("ws-focus"),t.addClass("ws-focus")),n.activeElement=t},n.element.on({wspopoverbeforeshow:function(){t.element.triggerHandler("wsupdatevalue"),n.element.triggerHandler("updatepickercontent")}}),e(t.orig).on("remove",function(n){n.originalEvent||e(i).off("wslocalechange",t._propertyChange)})},n._common=function(i){var a=t.objectCreate(t.wsPopover,{},{prepareFor:i.element}),o=e('<button type="button" class="ws-popover-opener"><span /></button>').appendTo(i.buttonWrapper),s=i.options,l=function(){(n[i.type].showPickerContent||n.showPickerContent)(i,a)},c=function(){var e=r(i.type,"DOM");s.disabled||s.readonly||a.isVisible||(t.ready(e,l),a.show(i.element))};s.containerElements.push(a.element[0]),"color"!=i.type&&(s.startView||(s.startView=0),s.minView||(s.minView=0),s.startView<s.minView&&(s.minView=s.startView,t.warn("wrong config for minView/startView.")),s.size||(s.size=1)),a.element.addClass(i.type+"-popover input-picker").attr({role:"application"}).on({wspopoverhide:function(){a.openedByFocus=!1},focusin:function(e){a.activateElement&&(a.openedByFocus=!1,a.activateElement(e.target))},focusout:function(){a.activeElement&&a.activeElement.removeClass("ws-focus")}}),d(a.element.children("div.ws-po-outerbox").attr({role:"group"}),s.labels,!0),d(o,s.labels,!0),null!=s.tabindex&&o.attr({tabindex:s.tabindex}),s.disabled&&o.prop({disabled:!0}),o.on({mousedown:function(){u.apply(this,arguments),a.preventBlur()},click:function(){a.isVisible&&a.activeElement&&(a.openedByFocus=!1,a.activeElement.focus()),c()},focus:function(){a.preventBlur()}}),function(){var e=!1,t=function(){e=!1};i.inputElements.on({focus:function(){!a.stopOpen&&(i.options.openOnFocus||e&&s.openOnMouseFocus)?(a.openedByFocus=!s.noInput,c()):a.preventBlur()},mousedown:function(){e=!0,setTimeout(t,9),i.element.is(":focus")&&(a.openedByFocus=!s.noInput,c()),a.preventBlur()}})}(),i.popover=a,i.opener=o,e(i.orig).on("remove",function(e){e.originalEvent||(o.remove(),a.element.remove())}),r(i.type,"WINDOWLOAD")},n.month=n._common,n.date=n._common,n.color=function(t){var i=n._common.apply(this,arguments),r=e(t.orig).data("alphacontrol"),a=t.opener.prepend('<span class="ws-color-indicator-bg"><span class="ws-color-indicator" /></span>').find(".ws-color-indicator"),o=function(){a.css({backgroundColor:e.prop(this,"value")||"#000"})},s=function(){var e,n=function(){try{var e=t.alpha.prop("valueAsNumber")/(t.alpha.prop("max")||1);isNaN(e)||a.css({opacity:e})}catch(n){}};return function(t){clearTimeout(e),e=setTimeout(n,t&&"change"!=t.type?40:4)}}();return t.alpha=r?e("#"+r):e([]),e(t.orig).on("wsupdatevalue change",o).each(o),t.alpha.on("wsupdatevalue change input",s).each(s),i},t.picker=n}(),function(){var n,r,o=Modernizr.inputtypes,s={},l=["disabled","readonly","value","min","max","step","title","placeholder"],f=["data-placeholder","tabindex"];if(e.each(l.concat(f),function(e,i){var r=i.replace(/^data\-/,"");t.onNodeNamesPropertyModify("input",i,function(e){if(!n){var i=t.data(this,"shadowData");i&&i.data&&i.nativeElement===this&&i.data[r]&&i.data[r](e)}})}),a.replaceUI&&"valueAsNumber"in i.createElement("input")){var h=function(){t.data(this,"hasShadow")&&e.prop(this,"value",e.prop(this,"value"))};t.onNodeNamesPropertyModify("input","valueAsNumber",h),t.onNodeNamesPropertyModify("input","valueAsDate",h)}var m=function(){return function(t,n){s[t]=n,n.attrs=e.merge([],f,n.attrs),n.props=e.merge([],l,n.props)}}(),v=function(){return"none"!=e.css(this,"display")},g=function(t){var n,i=function(){e(t.orig).removeClass("ws-important-hide"),e.style(t.orig,"display","");var i,r,a,o=.6;(!n||t.orig.offsetWidth)&&(i=t.buttonWrapper&&t.buttonWrapper.filter(v).length,r=e.css(t.orig,"marginRight"),t.element.css({marginLeft:e.css(t.orig,"marginLeft"),marginRight:i?0:r}),i&&(a=parseInt(t.buttonWrapper.css("marginLeft"),10)||0,t.element.css({paddingRight:""}),0>a?(r=(parseInt(r,10)||0)+-1*(t.buttonWrapper.outerWidth()+a),t.buttonWrapper.css("marginRight",r),t.element.css({paddingRight:""}).css({paddingRight:(parseInt(t.element.css("paddingRight"),10)||0)+t.buttonWrapper.outerWidth()})):(t.buttonWrapper.css("marginRight",r),o=t.buttonWrapper.outerWidth(!0)+.6)),t.element.outerWidth(e(t.orig).outerWidth()-o)),n=!0,e(t.orig).addClass("ws-important-hide")};t.element.onWSOff("updateshadowdom",i,!0)},y=function(){var i,o,c,p,h,m=e.prop(this,"type");if(s[m]&&t.implement(this,"inputwidgets")){for(c={},p=m,h=e(this).jProp("labels"),o=e.extend({},a.widgets,a[m],e(e.prop(this,"form")).data(m)||{},e(this).data(m)||{},{orig:this,type:m,labels:h,options:{},input:function(e){o._change(e,"input")},change:function(e){o._change(e,"change")},_change:function(t,i){n=!0,e.prop(o.orig,"value",t),n=!1,i&&e(o.orig).trigger(i)},containerElements:[]}),i=0;l.length>i;i++)o[l[i]]=e.prop(this,l[i]);for(i=0;f.length>i;i++)p=f[i].replace(/^data\-/,""),"placeholder"!=p&&o[p]||(o[p]=e.attr(this,f[i])||o[p]);c.shim=s[m]._create(o),t.addShadowDom(this,c.shim.element,{data:c.shim||{}}),c.shim.options.containerElements.push(c.shim.element[0]),d(e(this).getShadowFocusElement(),h),e.attr(this,"required",e.attr(this,"required")),e(this).on("change",function(){n||c.shim.value(e.prop(this,"value"))}),function(){var t,n={focusin:!0,focus:!0},i=!1,r=!1;e(c.shim.options.containerElements).on({"focusin focus focusout blur":function(a){a.stopImmediatePropagation(),r=n[a.type],clearTimeout(t),t=setTimeout(function(){r!=i&&(i=r,e(o.orig).triggerHandler(r?"focus":"blur"),e(o.orig).trigger(r?"focusin":"focusout")),i=r},0)}})}(),c.shim.element.on("change input",u),Modernizr.formvalidation&&e(o.orig).on("firstinvalid",function(n){(t.fromSubmit||!r)&&e(o.orig).off("invalid.replacedwidgetbubble").on("invalid.replacedwidgetbubble",function(i){n.isInvalidUIPrevented()||i.isDefaultPrevented()||(t.validityAlert.showFor(n.target),n.preventDefault(),i.preventDefault()),e(o.orig).off("invalid.replacedwidgetbubble")})}),c.shim.buttonWrapper&&c.shim.buttonWrapper.filter(v).length&&c.shim.element.addClass("has-input-buttons"),o.calculateWidth?g(c.shim):e(this).css({display:"none"})}};Modernizr.formvalidation&&["input","form"].forEach(function(e){var n=t.defineNodeNameProperty(e,"checkValidity",{prop:{value:function(){r=!0;var e=n.prop._supvalue.apply(this,arguments);return r=!1,e}}})}),(!o.range||a.replaceUI)&&m("range",{_create:function(t){var n=e("<span />").insertAfter(t.orig).rangeUI(t).data("rangeUi");return n}});var b=-1!=navigator.userAgent.indexOf("MSIE 10.0")&&-1==navigator.userAgent.indexOf("Touch");["number","time","month","date","color"].forEach(function(n){(!o[n]||a.replaceUI||"number"==n&&b)&&m(n,{_create:function(i){i.splitInput&&!c[n]&&(t.warn("splitInput not supported for "+n),i.splitInput=!1);var r=i.splitInput?'<span class="ws-'+n+' ws-input" role="group"></span>':'<input class="ws-'+n+'" type="text" />',a=e(r).insertAfter(i.orig);return a=p[n]?a.spinbtnUI(i).data("wsWidget"+n):a.wsBaseWidget(i).data("wsWidget"+n),t.picker&&t.picker[n]&&t.picker[n](a),a.buttonWrapper.addClass("input-button-size-"+a.buttonWrapper.children().filter(v).length),a}})}),t.addReady(function(t,n){e("input",t).add(n.filter("input")).each(y)})}()});