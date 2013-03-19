document.createElement("canvas").getContext||function(){function e(){return this.context_||(this.context_=new l(this))}function t(e,t){var i=E.call(arguments,2);return function(){return e.apply(t,i.concat(E.call(arguments)))}}function i(e){var t=e.srcElement;switch(e.propertyName){case"width":t.style.width=t.attributes.width.nodeValue+"px",t.getContext().clearRect();break;case"height":t.style.height=t.attributes.height.nodeValue+"px",t.getContext().clearRect()}}function n(e){var t=e.srcElement;t.firstChild&&(t.firstChild.style.width=t.clientWidth+"px",t.firstChild.style.height=t.clientHeight+"px")}function a(){return[[1,0,0],[0,1,0],[0,0,1]]}function r(e,t){for(var i=a(),n=0;3>n;n++)for(var r=0;3>r;r++){for(var o=0,s=0;3>s;s++)o+=e[n][s]*t[s][r];i[n][r]=o}return i}function o(e,t){t.fillStyle=e.fillStyle,t.lineCap=e.lineCap,t.lineJoin=e.lineJoin,t.lineWidth=e.lineWidth,t.miterLimit=e.miterLimit,t.shadowBlur=e.shadowBlur,t.shadowColor=e.shadowColor,t.shadowOffsetX=e.shadowOffsetX,t.shadowOffsetY=e.shadowOffsetY,t.strokeStyle=e.strokeStyle,t.globalAlpha=e.globalAlpha,t.arcScaleX_=e.arcScaleX_,t.arcScaleY_=e.arcScaleY_,t.lineScale_=e.lineScale_}function s(e){var t,i=1;if(e+="","rgb"==e.substring(0,3)){var n=e.indexOf("(",3),a=e.indexOf(")",n+1),r=e.substring(n+1,a).split(",");t="#";for(var o=0;3>o;o++)t+=k[Number(r[o])];4==r.length&&"a"==e.substr(3,1)&&(i=r[3])}else t=e;return{color:t,alpha:i}}function u(e){switch(e){case"butt":return"flat";case"round":return"round";case"square":default:return"square"}}function l(e){this.m_=a(),this.mStack_=[],this.aStack_=[],this.currentPath_=[],this.strokeStyle="#000",this.fillStyle="#000",this.lineWidth=1,this.lineJoin="miter",this.lineCap="butt",this.miterLimit=1*x,this.globalAlpha=1,this.canvas=e;var t=e.ownerDocument.createElement("div");t.style.width=e.clientWidth+"px",t.style.height=e.clientHeight+"px",t.style.overflow="hidden",t.style.position="absolute",e.appendChild(t),this.element_=t,this.arcScaleX_=1,this.arcScaleY_=1,this.lineScale_=1}function c(e,t,i,n){e.currentPath_.push({type:"bezierCurveTo",cp1x:t.x,cp1y:t.y,cp2x:i.x,cp2y:i.y,x:n.x,y:n.y}),e.currentX_=n.x,e.currentY_=n.y}function p(e){for(var t=0;3>t;t++)for(var i=0;2>i;i++)if(!isFinite(e[t][i])||isNaN(e[t][i]))return!1;return!0}function d(e,t,i){if(p(t)&&(e.m_=t,i)){var n=t[0][0]*t[1][1]-t[0][1]*t[1][0];e.lineScale_=w(b(n))}}function h(e){this.type_=e,this.x0_=0,this.y0_=0,this.r0_=0,this.x1_=0,this.y1_=0,this.r1_=0,this.colors_=[]}function f(){}var m=Math,v=m.round,g=m.sin,y=m.cos,b=m.abs,w=m.sqrt,x=10,T=x/2,E=Array.prototype.slice,N={init:function(e){if(/MSIE/.test(navigator.userAgent)&&!window.opera){var i=e||document;i.createElement("canvas"),i.attachEvent("onreadystatechange",t(this.init_,this,i))}},init_:function(e){if(e.namespaces.g_vml_||e.namespaces.add("g_vml_","urn:schemas-microsoft-com:vml","#default#VML"),e.namespaces.g_o_||e.namespaces.add("g_o_","urn:schemas-microsoft-com:office:office","#default#VML"),!e.styleSheets.ex_canvas_){var t=e.createStyleSheet();t.owningElement.id="ex_canvas_",t.cssText="canvas{display:inline-block;overflow:hidden;text-align:left;width:300px;height:150px}g_vml_\\:*{behavior:url(#default#VML)}g_o_\\:*{behavior:url(#default#VML)}"}for(var i=e.getElementsByTagName("canvas"),n=0;i.length>n;n++)this.initElement(i[n])},initElement:function(t){if(!t.getContext){t.getContext=e,t.innerHTML="",t.attachEvent("onpropertychange",i),t.attachEvent("onresize",n);var a=t.attributes;a.width&&a.width.specified?t.style.width=a.width.nodeValue+"px":t.width=t.clientWidth,a.height&&a.height.specified?t.style.height=a.height.nodeValue+"px":t.height=t.clientHeight}return t}};N.init();for(var k=[],C=0;16>C;C++)for(var A=0;16>A;A++)k[16*C+A]=C.toString(16)+A.toString(16);var D=l.prototype;D.clearRect=function(){this.element_.innerHTML=""},D.beginPath=function(){this.currentPath_=[]},D.moveTo=function(e,t){var i=this.getCoords_(e,t);this.currentPath_.push({type:"moveTo",x:i.x,y:i.y}),this.currentX_=i.x,this.currentY_=i.y},D.lineTo=function(e,t){var i=this.getCoords_(e,t);this.currentPath_.push({type:"lineTo",x:i.x,y:i.y}),this.currentX_=i.x,this.currentY_=i.y},D.bezierCurveTo=function(e,t,i,n,a,r){var o=this.getCoords_(a,r),s=this.getCoords_(e,t),u=this.getCoords_(i,n);c(this,s,u,o)},D.quadraticCurveTo=function(e,t,i,n){var a=this.getCoords_(e,t),r=this.getCoords_(i,n),o={x:this.currentX_+2/3*(a.x-this.currentX_),y:this.currentY_+2/3*(a.y-this.currentY_)},s={x:o.x+(r.x-this.currentX_)/3,y:o.y+(r.y-this.currentY_)/3};c(this,o,s,r)},D.arc=function(e,t,i,n,a,r){i*=x;var o=r?"at":"wa",s=e+y(n)*i-T,u=t+g(n)*i-T,l=e+y(a)*i-T,c=t+g(a)*i-T;s!=l||r||(s+=.125);var p=this.getCoords_(e,t),d=this.getCoords_(s,u),h=this.getCoords_(l,c);this.currentPath_.push({type:o,x:p.x,y:p.y,radius:i,xStart:d.x,yStart:d.y,xEnd:h.x,yEnd:h.y})},D.rect=function(e,t,i,n){this.moveTo(e,t),this.lineTo(e+i,t),this.lineTo(e+i,t+n),this.lineTo(e,t+n),this.closePath()},D.strokeRect=function(e,t,i,n){var a=this.currentPath_;this.beginPath(),this.moveTo(e,t),this.lineTo(e+i,t),this.lineTo(e+i,t+n),this.lineTo(e,t+n),this.closePath(),this.stroke(),this.currentPath_=a},D.fillRect=function(e,t,i,n){var a=this.currentPath_;this.beginPath(),this.moveTo(e,t),this.lineTo(e+i,t),this.lineTo(e+i,t+n),this.lineTo(e,t+n),this.closePath(),this.fill(),this.currentPath_=a},D.createLinearGradient=function(e,t,i,n){var a=new h("gradient");return a.x0_=e,a.y0_=t,a.x1_=i,a.y1_=n,a},D.createRadialGradient=function(e,t,i,n,a,r){var o=new h("gradientradial");return o.x0_=e,o.y0_=t,o.r0_=i,o.x1_=n,o.y1_=a,o.r1_=r,o},D.drawImage=function(e){var t,i,n,a,r,o,s,u,l=e.runtimeStyle.width,c=e.runtimeStyle.height;e.runtimeStyle.width="auto",e.runtimeStyle.height="auto";var p=e.width,d=e.height;if(e.runtimeStyle.width=l,e.runtimeStyle.height=c,3==arguments.length)t=arguments[1],i=arguments[2],r=o=0,s=n=p,u=a=d;else if(5==arguments.length)t=arguments[1],i=arguments[2],n=arguments[3],a=arguments[4],r=o=0,s=p,u=d;else{if(9!=arguments.length)throw Error("Invalid number of arguments");r=arguments[1],o=arguments[2],s=arguments[3],u=arguments[4],t=arguments[5],i=arguments[6],n=arguments[7],a=arguments[8]}var h=this.getCoords_(t,i),f=[],g=10,y=10;if(f.push(" <g_vml_:group",' coordsize="',x*g,",",x*y,'"',' coordorigin="0,0"',' style="width:',g,"px;height:",y,"px;position:absolute;"),1!=this.m_[0][0]||this.m_[0][1]){var b=[];b.push("M11=",this.m_[0][0],",","M12=",this.m_[1][0],",","M21=",this.m_[0][1],",","M22=",this.m_[1][1],",","Dx=",v(h.x/x),",","Dy=",v(h.y/x),"");var w=h,T=this.getCoords_(t+n,i),E=this.getCoords_(t,i+a),N=this.getCoords_(t+n,i+a);w.x=m.max(w.x,T.x,E.x,N.x),w.y=m.max(w.y,T.y,E.y,N.y),f.push("padding:0 ",v(w.x/x),"px ",v(w.y/x),"px 0;filter:progid:DXImageTransform.Microsoft.Matrix(",b.join(""),", sizingmethod='clip');")}else f.push("top:",v(h.y/x),"px;left:",v(h.x/x),"px;");f.push(' ">','<g_vml_:image src="',e.src,'"',' style="width:',x*n,"px;"," height:",x*a,'px;"',' cropleft="',r/p,'"',' croptop="',o/d,'"',' cropright="',(p-r-s)/p,'"',' cropbottom="',(d-o-u)/d,'"'," />","</g_vml_:group>"),this.element_.insertAdjacentHTML("BeforeEnd",f.join(""))},D.stroke=function(e){var t=[],i=s(e?this.fillStyle:this.strokeStyle),n=i.color,a=i.alpha*this.globalAlpha,r=10,o=10;t.push("<g_vml_:shape",' filled="',!!e,'"',' style="position:absolute;width:',r,"px;height:",o,'px;"',' coordorigin="0 0" coordsize="',x*r," ",x*o,'"',' stroked="',!e,'"',' path="');for(var l={x:null,y:null},c={x:null,y:null},p=0;this.currentPath_.length>p;p++){var d,h=this.currentPath_[p];switch(h.type){case"moveTo":d=h,t.push(" m ",v(h.x),",",v(h.y));break;case"lineTo":t.push(" l ",v(h.x),",",v(h.y));break;case"close":t.push(" x "),h=null;break;case"bezierCurveTo":t.push(" c ",v(h.cp1x),",",v(h.cp1y),",",v(h.cp2x),",",v(h.cp2y),",",v(h.x),",",v(h.y));break;case"at":case"wa":t.push(" ",h.type," ",v(h.x-this.arcScaleX_*h.radius),",",v(h.y-this.arcScaleY_*h.radius)," ",v(h.x+this.arcScaleX_*h.radius),",",v(h.y+this.arcScaleY_*h.radius)," ",v(h.xStart),",",v(h.yStart)," ",v(h.xEnd),",",v(h.yEnd))}h&&((null==l.x||h.x<l.x)&&(l.x=h.x),(null==c.x||h.x>c.x)&&(c.x=h.x),(null==l.y||h.y<l.y)&&(l.y=h.y),(null==c.y||h.y>c.y)&&(c.y=h.y))}if(t.push(' ">'),e)if("object"==typeof this.fillStyle){var f=this.fillStyle,g=0,y={x:0,y:0},b=0,w=1;if("gradient"==f.type_){var T=f.x0_/this.arcScaleX_,E=f.y0_/this.arcScaleY_,N=f.x1_/this.arcScaleX_,k=f.y1_/this.arcScaleY_,C=this.getCoords_(T,E),A=this.getCoords_(N,k),D=A.x-C.x,S=A.y-C.y;g=180*Math.atan2(D,S)/Math.PI,0>g&&(g+=360),1e-6>g&&(g=0)}else{var C=this.getCoords_(f.x0_,f.y0_),F=c.x-l.x,M=c.y-l.y;y={x:(C.x-l.x)/F,y:(C.y-l.y)/M},F/=this.arcScaleX_*x,M/=this.arcScaleY_*x;var P=m.max(F,M);b=2*f.r0_/P,w=2*f.r1_/P-b}var _=f.colors_;_.sort(function(e,t){return e.offset-t.offset});for(var I=_.length,O=_[0].color,L=_[I-1].color,j=_[0].alpha*this.globalAlpha,V=_[I-1].alpha*this.globalAlpha,B=[],p=0;I>p;p++){var W=_[p];B.push(W.offset*w+b+" "+W.color)}t.push('<g_vml_:fill type="',f.type_,'"',' method="none" focus="100%"',' color="',O,'"',' color2="',L,'"',' colors="',B.join(","),'"',' opacity="',V,'"',' g_o_:opacity2="',j,'"',' angle="',g,'"',' focusposition="',y.x,",",y.y,'" />')}else t.push('<g_vml_:fill color="',n,'" opacity="',a,'" />');else{var R=this.lineScale_*this.lineWidth;1>R&&(a*=R),t.push("<g_vml_:stroke",' opacity="',a,'"',' joinstyle="',this.lineJoin,'"',' miterlimit="',this.miterLimit,'"',' endcap="',u(this.lineCap),'"',' weight="',R,'px"',' color="',n,'" />')}t.push("</g_vml_:shape>"),this.element_.insertAdjacentHTML("beforeEnd",t.join(""))},D.fill=function(){this.stroke(!0)},D.closePath=function(){this.currentPath_.push({type:"close"})},D.getCoords_=function(e,t){var i=this.m_;return{x:x*(e*i[0][0]+t*i[1][0]+i[2][0])-T,y:x*(e*i[0][1]+t*i[1][1]+i[2][1])-T}},D.save=function(){var e={};o(this,e),this.aStack_.push(e),this.mStack_.push(this.m_),this.m_=r(a(),this.m_)},D.restore=function(){o(this.aStack_.pop(),this),this.m_=this.mStack_.pop()},D.translate=function(e,t){var i=[[1,0,0],[0,1,0],[e,t,1]];d(this,r(i,this.m_),!1)},D.rotate=function(e){var t=y(e),i=g(e),n=[[t,i,0],[-i,t,0],[0,0,1]];d(this,r(n,this.m_),!1)},D.scale=function(e,t){this.arcScaleX_*=e,this.arcScaleY_*=t;var i=[[e,0,0],[0,t,0],[0,0,1]];d(this,r(i,this.m_),!0)},D.transform=function(e,t,i,n,a,o){var s=[[e,t,0],[i,n,0],[a,o,1]];d(this,r(s,this.m_),!0)},D.setTransform=function(e,t,i,n,a,r){var o=[[e,t,0],[i,n,0],[a,r,1]];d(this,o,!0)},D.clip=function(){},D.arcTo=function(){},D.createPattern=function(){return new f},h.prototype.addColorStop=function(e,t){t=s(t),this.colors_.push({offset:e,color:t.color,alpha:t.alpha})},G_vmlCanvasManager=N,CanvasRenderingContext2D=l,CanvasGradient=h,CanvasPattern=f}();