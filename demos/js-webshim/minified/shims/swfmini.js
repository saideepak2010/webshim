var swfmini=function(){function e(){if(!S){try{var e=T.getElementsByTagName("body")[0].appendChild(d("span"));e.parentNode.removeChild(e)}catch(t){return}S=!0;for(var n=E.length,a=0;n>a;a++)E[a]()}}function t(e){S?e():E[E.length]=e}function n(){}function a(){N&&i()}function i(){var e=T.getElementsByTagName("body")[0],t=d(h);t.setAttribute("type",b);var n=e.appendChild(t);if(n){var a=0;(function(){if(typeof n.GetVariable!=m){var i=n.GetVariable("$version");i&&(i=i.split(" ")[1].split(","),M.pv=[parseInt(i[0],10),parseInt(i[1],10),parseInt(i[2],10)])}else if(10>a)return a++,setTimeout(arguments.callee,10),void 0;e.removeChild(t),n=null})()}}function r(e){var t=null,n=c(e);if(n&&"OBJECT"==n.nodeName)if(typeof n.SetVariable!=m)t=n;else{var a=n.getElementsByTagName(h)[0];a&&(t=a)}return t}function o(e,t,n){var a,i=c(n);if(M.wk&&312>M.wk)return a;if(i)if(typeof e.id==m&&(e.id=n),M.ie&&M.win){var r="";for(var o in e)e[o]!=Object.prototype[o]&&("data"==o.toLowerCase()?t.movie=e[o]:"styleclass"==o.toLowerCase()?r+=' class="'+e[o]+'"':"classid"!=o.toLowerCase()&&(r+=" "+o+'="'+e[o]+'"'));var u="";for(var l in t)t[l]!=Object.prototype[l]&&(u+='<param name="'+l+'" value="'+t[l]+'" />');i.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+r+">"+u+"</object>",A[A.length]=e.id,a=c(e.id)}else{var p=d(h);p.setAttribute("type",b);for(var f in e)e[f]!=Object.prototype[f]&&("styleclass"==f.toLowerCase()?p.setAttribute("class",e[f]):"classid"!=f.toLowerCase()&&p.setAttribute(f,e[f]));for(var v in t)t[v]!=Object.prototype[v]&&"movie"!=v.toLowerCase()&&s(p,v,t[v]);i.parentNode.replaceChild(p,i),a=p}return a}function s(e,t,n){var a=d("param");a.setAttribute("name",t),a.setAttribute("value",n),e.appendChild(a)}function u(e){var t=c(e);t&&"OBJECT"==t.nodeName&&(M.ie&&M.win?(t.style.display="none",function(){4==t.readyState?l(e):setTimeout(arguments.callee,10)}()):t.parentNode.removeChild(t))}function l(e){var t=c(e);if(t){for(var n in t)"function"==typeof t[n]&&(t[n]=null);t.parentNode.removeChild(t)}}function c(e){var t=null;try{t=T.getElementById(e)}catch(n){}return t}function d(e){return T.createElement(e)}function p(e){var t=M.pv,n=e.split(".");return n[0]=parseInt(n[0],10),n[1]=parseInt(n[1],10)||0,n[2]=parseInt(n[2],10)||0,t[0]>n[0]||t[0]==n[0]&&t[1]>n[1]||t[0]==n[0]&&t[1]==n[1]&&t[2]>=n[2]?!0:!1}function f(e,t){if(C){var n,a=t?"visible":"hidden";S&&n&&c(e)&&(c(e).style.visibility=a)}}var m="undefined",h="object",v=jQuery.webshims||window.webshims,g="Shockwave Flash",y="ShockwaveFlash.ShockwaveFlash",b="application/x-shockwave-flash",w=window,T=document,x=navigator,N=!1,E=[a],A=[],k=[],S=!1,C=!0,M=function(){var e=typeof T.getElementById!=m&&typeof T.getElementsByTagName!=m&&typeof T.createElement!=m,t=x.userAgent.toLowerCase(),n=x.platform.toLowerCase(),a=n?/win/.test(n):/win/.test(t),i=n?/mac/.test(n):/mac/.test(t),r=/webkit/.test(t)?parseFloat(t.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):!1,o=!1,s=[0,0,0],u=null;if(typeof x.plugins!=m&&typeof x.plugins[g]==h)u=x.plugins[g].description,!u||typeof x.mimeTypes!=m&&x.mimeTypes[b]&&!x.mimeTypes[b].enabledPlugin||(N=!0,o=!1,u=u.replace(/^.*\s+(\S+\s+\S+$)/,"$1"),s[0]=parseInt(u.replace(/^(.*)\..*$/,"$1"),10),s[1]=parseInt(u.replace(/^.*\.(.*)\s.*$/,"$1"),10),s[2]=/[a-zA-Z]/.test(u)?parseInt(u.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0);else if(typeof w.ActiveXObject!=m)try{var l=new ActiveXObject(y);l&&(u=l.GetVariable("$version"),u&&(o=!0,u=u.split(" ")[1].split(","),s=[parseInt(u[0],10),parseInt(u[1],10),parseInt(u[2],10)]))}catch(c){}return{w3:e,pv:s,wk:r,ie:o,win:a,mac:i}}();return function(){M.ie&&M.win&&window.attachEvent&&window.attachEvent("onunload",function(){for(var e=k.length,t=0;e>t;t++)k[t][0].detachEvent(k[t][1],k[t][2]);for(var n=A.length,a=0;n>a;a++)u(A[a]);for(var i in M)M[i]=null;M=null;for(var r in swfmini)swfmini[r]=null;swfmini=null})}(),v.ready("DOM",e),{registerObject:function(){},getObjectById:function(e){return M.w3?r(e):void 0},embedSWF:function(e,n,a,i,r,s,u,l,c,d){var v={success:!1,id:n};M.w3&&!(M.wk&&312>M.wk)&&e&&n&&a&&i&&r?(f(n,!1),t(function(){a+="",i+="";var t={};if(c&&typeof c===h)for(var s in c)t[s]=c[s];t.data=e,t.width=a,t.height=i;var g={};if(l&&typeof l===h)for(var y in l)g[y]=l[y];if(u&&typeof u===h)for(var b in u)typeof g.flashvars!=m?g.flashvars+="&"+b+"="+u[b]:g.flashvars=b+"="+u[b];if(p(r)){var w=o(t,g,n);t.id==n&&f(n,!0),v.success=!0,v.ref=w}else f(n,!0);d&&d(v)})):d&&d(v)},switchOffAutoHideShow:function(){C=!1},ua:M,getFlashPlayerVersion:function(){return{major:M.pv[0],minor:M.pv[1],release:M.pv[2]}},hasFlashPlayerVersion:p,createSWF:function(e,t,n){return M.w3?o(e,t,n):void 0},showExpressInstall:function(){},removeSWF:function(e){M.w3&&u(e)},createCSS:function(){},addDomLoadEvent:t,addLoadEvent:n,expressInstallCallback:function(){}}}();