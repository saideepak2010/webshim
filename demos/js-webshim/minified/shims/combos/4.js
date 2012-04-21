(function(a){var b=window.Modernizr,g=a.webshims,i=g.bugs,j=a('<form action="#" style="width: 1px; height: 1px; overflow: hidden;"><select name="b" required /><input type="date" required name="a" /><input type="submit" /></form>'),n=function(){if(j[0].querySelector)try{i.findRequired=!j[0].querySelector("select:required")}catch(a){i.findRequired=!1}};i.findRequired=!1;i.validationMessage=!1;i.valueAsNumberSet=!1;g.capturingEventPrevented=function(d){if(!d._isPolyfilled){var b=d.isDefaultPrevented,
e=d.preventDefault;d.preventDefault=function(){clearTimeout(a.data(d.target,d.type+"DefaultPrevented"));a.data(d.target,d.type+"DefaultPrevented",setTimeout(function(){a.removeData(d.target,d.type+"DefaultPrevented")},30));return e.apply(this,arguments)};d.isDefaultPrevented=function(){return!(!b.apply(this,arguments)&&!a.data(d.target,d.type+"DefaultPrevented"))};d._isPolyfilled=!0}};if(!b.formvalidation||i.bustedValidity)n();else{b.bugfreeformvalidation=!0;if(window.opera||a.browser.webkit||window.testGoodWithFix){var f=
a("input",j).eq(0),m,e=function(d){var e=["form-extend","form-message","form-native-fix"];d&&(d.preventDefault(),d.stopImmediatePropagation());clearTimeout(m);setTimeout(function(){j&&(j.remove(),j=f=null)},9);if(!b.bugfreeformvalidation)g.addPolyfill("form-native-fix",{f:"forms",d:["form-extend"]}),g.modules["form-extend"].test=a.noop;g.isReady("form-number-date-api")&&e.push("form-number-date-api");g.reTest(e);if(a.browser.opera||window.testGoodWithFix)g.loader.loadList(["dom-extend"]),g.ready("dom-extend",
function(){var d=function(a){a.preventDefault()};["form","input","textarea","select"].forEach(function(b){var e=g.defineNodeNameProperty(b,"checkValidity",{prop:{value:function(){g.fromSubmit||a(this).bind("invalid.checkvalidity",d);g.fromCheckValidity=!0;var b=e.prop._supvalue.apply(this,arguments);g.fromSubmit||a(this).unbind("invalid.checkvalidity",d);g.fromCheckValidity=!1;return b}}})});b.input.list&&!(a("<datalist><select><option></option></select></datalist>").prop("options")||[]).length&&
g.defineNodeNameProperty("datalist","options",{prop:{writeable:!1,get:function(){var d=this.options||[];if(!d.length){var b=a("select",this);if(b[0]&&b[0].options&&b[0].options.length)d=b[0].options}return d}}})})};j.appendTo("head");if(window.opera||window.testGoodWithFix){n();i.validationMessage=!f.prop("validationMessage");if((b.inputtypes||{}).date){try{f.prop("valueAsNumber",0)}catch(l){}i.valueAsNumberSet="1970-01-01"!=f.prop("value")}f.prop("value","")}j.bind("submit",function(a){b.bugfreeformvalidation=
!1;e(a)});m=setTimeout(function(){j&&j.triggerHandler("submit")},9);g.capturingEvents(["input"]);g.capturingEvents(["invalid"],!0);a("input, select",j).bind("invalid",e).filter('[type="submit"]').bind("click",function(a){a.stopImmediatePropagation()}).trigger("click")}g.capturingEvents(["input"]);g.capturingEvents(["invalid"],!0)}})(jQuery);
jQuery.webshims.register("form-core",function(a,b,g,i,j,n){var f={radio:1},m={checkbox:1,radio:1},e=a([]),l=b.bugs,d=function(c){var c=a(c),b,h;b=e;if(f[c[0].type])h=c.prop("form"),b=(b=c[0].name)?h?a(h[b]):a(i.getElementsByName(b)).filter(function(){return!a.prop(this,"form")}):c,b=b.filter('[type="radio"]');return b},q=b.getContentValidationMessage=function(c,d){var h=c.getAttribute("x-moz-errormessage")||c.getAttribute("data-errormessage")||"";if(h&&-1!=h.indexOf("{")){try{h=jQuery.parseJSON(h)}catch(e){return h}"object"==
typeof h&&(d=d||a.prop(c,"validity")||{valid:1},d.valid||a.each(d,function(a,c){if(c&&"valid"!=a&&h[a])return h=h[a],!1}));b.data(c,"contentErrorMessage",h);if("object"==typeof h)h=h.defaultMessage}return h||""},k={number:1,range:1,date:1,time:1,"datetime-local":1,datetime:1,month:1,week:1};a.extend(a.expr.filters,{"valid-element":function(c){return!(!a.prop(c,"willValidate")||!(a.prop(c,"validity")||{valid:1}).valid)},"invalid-element":function(c){return!(!a.prop(c,"willValidate")||(a.prop(c,"validity")||
{valid:1}).valid)},"required-element":function(c){return!(!a.prop(c,"willValidate")||!a.prop(c,"required"))},"optional-element":function(c){return!!(a.prop(c,"willValidate")&&!1===a.prop(c,"required"))},"in-range":function(c){if(!k[a.prop(c,"type")]||!a.prop(c,"willValidate"))return!1;c=a.prop(c,"validity");return!(!c||c.rangeOverflow||c.rangeUnderflow)},"out-of-range":function(c){if(!k[a.prop(c,"type")]||!a.prop(c,"willValidate"))return!1;c=a.prop(c,"validity");return!(!c||!c.rangeOverflow&&!c.rangeUnderflow)}});
["valid","invalid","required","optional"].forEach(function(c){a.expr.filters[c]=a.expr.filters[c+"-element"]});var o=a.event.customEvent||{};(l.bustedValidity||l.findRequired)&&function(){var c=a.find,b=a.find.matchesSelector,h=/(\:valid|\:invalid|\:optional|\:required|\:in-range|\:out-of-range)(?=[\s\[\~\.\+\>\:\#*]|$)/ig,d=function(a){return a+"-element"};a.find=function(){var a=Array.prototype.slice,b=function(b){var e=arguments,e=a.call(e,1,e.length);e.unshift(b.replace(h,d));return c.apply(this,
e)},e;for(e in c)c.hasOwnProperty(e)&&(b[e]=c[e]);return b}();if(!Modernizr.prefixed||Modernizr.prefixed("matchesSelector",i.documentElement))a.find.matchesSelector=function(a,c){c=c.replace(h,d);return b.call(this,a,c)}}();var s=a.prop,t={selectedIndex:1,value:1,checked:1,disabled:1,readonly:1};a.prop=function(c,b,h){var e=s.apply(this,arguments);if(c&&"form"in c&&t[b]&&h!==j&&a(c).hasClass("form-ui-invalid")&&(a.prop(c,"validity")||{valid:1}).valid)a(c).getShadowElement().removeClass("form-ui-invalid"),
"checked"==b&&h&&d(c).not(c).removeClass("form-ui-invalid").removeAttr("aria-invalid");return e};var u=function(c,b){var h;a.each(c,function(c,d){if(d)return h="customError"==c?a.prop(b,"validationMessage"):c,!1});return h};a(i).bind("focusout change refreshvalidityui",function(c){if(c.target&&"submit"!=c.target.type&&a.prop(c.target,"willValidate")){var b=a.data(c.target,"webshimsswitchvalidityclass");b&&clearTimeout(b);a.data(c.target,"webshimsswitchvalidityclass",setTimeout(function(){var b=a(c.target).getNativeElement()[0],
e=a.prop(b,"validity"),f=a(b).getShadowElement(),g,p,r,i;e.valid?f.hasClass("form-ui-valid")||(g="form-ui-valid",p="form-ui-invalid",i="changedvaliditystate",r="changedvalid",m[b.type]&&b.checked&&d(b).not(b).removeClass(p).addClass(g).removeAttr("aria-invalid"),a.removeData(b,"webshimsinvalidcause")):(e=u(e,b),a.data(b,"webshimsinvalidcause")!=e&&(a.data(b,"webshimsinvalidcause",e),i="changedvaliditystate"),f.hasClass("form-ui-invalid")||(g="form-ui-invalid",p="form-ui-valid",m[b.type]&&!b.checked&&
d(b).not(b).removeClass(p).addClass(g),r="changedinvalid"));g&&(f.addClass(g).removeClass(p),setTimeout(function(){a(b).trigger(r)},0));i&&setTimeout(function(){a(b).trigger(i)},0);a.removeData(c.target,"webshimsswitchvalidityclass")},9))}});o.changedvaliditystate=!0;o.changedvalid=!0;o.changedinvalid=!0;o.refreshvalidityui=!0;b.triggerInlineForm=function(c,b){a(c).trigger(b)};b.modules["form-core"].getGroupElements=d;l=function(){b.scrollRoot=a.browser.webkit||"BackCompat"==i.compatMode?a(i.body):
a(i.documentElement)};l();b.ready("DOM",l);b.getRelOffset=function(c,b){var c=a(c),e=a(b).offset(),d;a.swap(a(c)[0],{visibility:"hidden",display:"inline-block",left:0,top:0},function(){d=c.offset()});e.top-=d.top;e.left-=d.left;return e};b.validityAlert=function(){var c=!a.browser.msie||7<parseInt(a.browser.version,10)?"span":"label",e,d=!1,f=!1,l,j={hideDelay:5E3,showFor:function(c,b,i,q){j._create();var c=a(c),k=a(c).getShadowElement(),o=j.getOffsetFromBody(k);j.clear();q?this.hide():(this.getMessage(c,
b),this.position(k,o),e.css({fontSize:c.css("fontSize"),fontFamily:c.css("fontFamily")}),this.show(),this.hideDelay&&(d=setTimeout(l,this.hideDelay)),a(g).bind("resize.validityalert orientationchange.validityalert emchange.validityalert",function(){clearTimeout(f);f=setTimeout(function(){j.position(k)},9)}));i||this.setFocus(k,o)},getOffsetFromBody:function(a){return b.getRelOffset(e,a)},setFocus:function(d,f){var g=a(d).getShadowFocusElement(),h=b.scrollRoot.scrollTop(),j=(f||g.offset()).top-30,
k;b.getID&&"label"==c&&e.attr("for",b.getID(g));h>j&&(b.scrollRoot.animate({scrollTop:j-5},{queue:!1,duration:Math.max(Math.min(600,1.5*(h-j)),80)}),k=!0);try{g[0].focus()}catch(q){}k&&(b.scrollRoot.scrollTop(h),setTimeout(function(){b.scrollRoot.scrollTop(h)},0));setTimeout(function(){a(i).bind("focusout.validityalert",l)},10)},getMessage:function(c,b){a("span.va-box",e).text(b||q(c[0])||c.prop("validationMessage"))},position:function(c,b){b=b?a.extend({},b):j.getOffsetFromBody(c);b.top+=c.outerHeight();
e.css(b)},show:function(){"none"===e.css("display")&&e.css({opacity:0}).show();e.addClass("va-visible").fadeTo(400,1)},hide:function(){e.removeClass("va-visible").fadeOut()},clear:function(){clearTimeout(!1);clearTimeout(d);a(i).unbind(".validityalert");a(g).unbind(".validityalert");e.stop().removeAttr("for")},_create:function(){if(!e)e=j.errorBubble=a("<"+c+' class="validity-alert-wrapper" role="alert"><span  class="validity-alert"><span class="va-arrow"><span class="va-arrow-box"></span></span><span class="va-box"></span></span></'+
c+">").css({position:"absolute",display:"none"}),b.ready("DOM",function(){e.appendTo("body");a.fn.bgIframe&&a.browser.msie&&7>parseInt(a.browser.version,10)&&e.bgIframe()})}};l=a.proxy(j,"hide");return j}();(function(){var c,b=[],e;a(i).bind("invalid",function(d){if(!d.wrongWebkitInvalid){var g=a(d.target),f=g.getShadowElement();f.hasClass("form-ui-invalid")||(f.addClass("form-ui-invalid").removeClass("form-ui-valid"),setTimeout(function(){a(d.target).trigger("changedinvalid").trigger("changedvaliditystate")},
0));if(!c)c=a.Event("firstinvalid"),c.isInvalidUIPrevented=d.isDefaultPrevented,f=a.Event("firstinvalidsystem"),a(i).triggerHandler(f,{element:d.target,form:d.target.form,isInvalidUIPrevented:d.isDefaultPrevented}),g.trigger(c);c&&c.isDefaultPrevented()&&d.preventDefault();b.push(d.target);d.extraData="fix";clearTimeout(e);e=setTimeout(function(){var e={type:"lastinvalid",cancelable:!1,invalidlist:a(b)};c=!1;b=[];a(d.target).trigger(e,e)},9);f=g=null}})})();n.replaceValidationUI&&b.ready("DOM",function(){a(i).bind("firstinvalid",
function(c){c.isInvalidUIPrevented()||(c.preventDefault(),a.webshims.validityAlert.showFor(c.target,a(c.target).prop("customValidationMessage")))})})});
jQuery.webshims.register("form-message",function(a,b,g,i,j,n){var f=b.validityMessages,g=n.overrideMessages||n.customMessages?["customValidationMessage"]:[];f.en=f.en||f["en-US"]||{typeMismatch:{email:"Please enter an email address.",url:"Please enter a URL.",number:"Please enter a number.",date:"Please enter a date.",time:"Please enter a time.",range:"Invalid input.","datetime-local":"Please enter a datetime."},rangeUnderflow:{defaultMessage:"Value must be greater than or equal to {%min}."},rangeOverflow:{defaultMessage:"Value must be less than or equal to {%max}."},
stepMismatch:"Invalid input.",tooLong:"Please enter at most {%maxlength} character(s). You entered {%valueLen}.",patternMismatch:"Invalid input. {%title}",valueMissing:{defaultMessage:"Please fill out this field.",checkbox:"Please check this box if you want to proceed."}};["select","radio"].forEach(function(a){f.en.valueMissing[a]="Please select an option."});["date","time","datetime-local"].forEach(function(a){f.en.rangeUnderflow[a]="Value must be at or after {%min}."});["date","time","datetime-local"].forEach(function(a){f.en.rangeOverflow[a]=
"Value must be at or before {%max}."});f["en-US"]=f["en-US"]||f.en;f[""]=f[""]||f["en-US"];f.de=f.de||{typeMismatch:{email:"{%value} ist keine zul\u00e4ssige E-Mail-Adresse",url:"{%value} ist keine zul\u00e4ssige Webadresse",number:"{%value} ist keine Nummer!",date:"{%value} ist kein Datum",time:"{%value} ist keine Uhrzeit",range:"{%value} ist keine Nummer!","datetime-local":"{%value} ist kein Datum-Uhrzeit Format."},rangeUnderflow:{defaultMessage:"{%value} ist zu niedrig. {%min} ist der unterste Wert, den Sie benutzen k\u00f6nnen."},
rangeOverflow:{defaultMessage:"{%value} ist zu hoch. {%max} ist der oberste Wert, den Sie benutzen k\u00f6nnen."},stepMismatch:"Der Wert {%value} ist in diesem Feld nicht zul\u00e4ssig. Hier sind nur bestimmte Werte zul\u00e4ssig. {%title}",tooLong:"Der eingegebene Text ist zu lang! Sie haben {%valueLen} Zeichen eingegeben, dabei sind {%maxlength} das Maximum.",patternMismatch:"{%value} hat f\u00fcr dieses Eingabefeld ein falsches Format! {%title}",valueMissing:{defaultMessage:"Bitte geben Sie einen Wert ein",
checkbox:"Bitte aktivieren Sie das K\u00e4stchen"}};["select","radio"].forEach(function(a){f.de.valueMissing[a]="Bitte w\u00e4hlen Sie eine Option aus"});["date","time","datetime-local"].forEach(function(a){f.de.rangeUnderflow[a]="{%value} ist zu fr\u00fch. {%min} ist die fr\u00fcheste Zeit, die Sie benutzen k\u00f6nnen."});["date","time","datetime-local"].forEach(function(a){f.de.rangeOverflow[a]="{%value} ist zu sp\u00e4t. {%max} ist die sp\u00e4teste Zeit, die Sie benutzen k\u00f6nnen."});var m=
f[""];b.createValidationMessage=function(b,f){var d=m[f];d&&"string"!==typeof d&&(d=d[a.prop(b,"type")]||d[(b.nodeName||"").toLowerCase()]||d.defaultMessage);d&&"value,min,max,title,maxlength,label".split(",").forEach(function(f){if(-1!==d.indexOf("{%"+f)){var g=("label"==f?a.trim(a('label[for="'+b.id+'"]',b.form).text()).replace(/\*$|:$/,""):a.attr(b,f))||"";d=d.replace("{%"+f+"}",g);"value"==f&&(d=d.replace("{%valueLen}",g.length))}});return d||""};(b.bugs.validationMessage||!Modernizr.formvalidation||
b.bugs.bustedValidity)&&g.push("validationMessage");b.activeLang({langObj:f,module:"form-core",callback:function(a){m=a}});Modernizr.input.list&&!(a("<datalist><select><option></option></select></datalist>").prop("options")||[]).length&&b.defineNodeNameProperty("datalist","options",{prop:{writeable:!1,get:function(){var b=this.options||[];if(!b.length){var f=a("select",this);if(f[0]&&f[0].options&&f[0].options.length)b=f[0].options}return b}}});g.forEach(function(e){b.defineNodeNamesProperty(["fieldset",
"output","button"],e,{prop:{value:"",writeable:!1}});["input","select","textarea"].forEach(function(f){var d=b.defineNodeNameProperty(f,e,{prop:{get:function(){var e=this,f="";if(!a.prop(e,"willValidate"))return f;var g=a.prop(e,"validity")||{valid:1};if(g.valid||(f=b.getContentValidationMessage(e,g)))return f;if(g.customError&&e.nodeName&&(f=Modernizr.formvalidation&&!b.bugs.bustedValidity&&d.prop._supget?d.prop._supget.call(e):b.data(e,"customvalidationMessage")))return f;a.each(g,function(a,d){if("valid"!=
a&&d&&(f=b.createValidationMessage(e,a)))return!1});return f||""},writeable:!1}})})})});
