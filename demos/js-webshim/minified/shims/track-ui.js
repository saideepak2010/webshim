jQuery.webshims.register("track-ui",function(e,t,i,a){"use strict";function n(e,t){var i=!0,a=0,n=e.length;if(n!=t.length)i=!1;else for(;n>a;a++)if(e[a]!=t[a]){i=!1;break}return i}var r=t.cfg.track,o={subtitles:1,captions:1,descriptions:1},s=t.mediaelement,u=function(){return!r.override&&Modernizr.track},l={update:function(i,a){i.activeCues.length?n(i.displayedActiveCues,i.activeCues)||(i.displayedActiveCues=i.activeCues,i.trackDisplay||(i.trackDisplay=e('<div class="cue-display"><span class="description-cues" aria-live="assertive" /></div>').insertAfter(a),this.addEvents(i,a),t.docObserve()),i.hasDirtyTrackDisplay&&a.triggerHandler("forceupdatetrackdisplay"),this.showCues(i)):this.hide(i)},showCues:function(t){var i=e('<span class="cue-wrapper" />');e.each(t.displayedActiveCues,function(a,n){var r=n.id?'id="cue-id-'+n.id+'"':"",o=e('<span class="cue-line"><span '+r+' class="cue" /></span>').find("span").html(n.getCueAsHTML()).end();"descriptions"==n.track.kind?setTimeout(function(){e("span.description-cues",t.trackDisplay).html(o)},0):i.prepend(o)}),e("span.cue-wrapper",t.trackDisplay).remove(),t.trackDisplay.append(i)},addEvents:function(t,i){if(r.positionDisplay){var n,o=function(e){if(t.displayedActiveCues.length||e===!0){t.trackDisplay.css({display:"none"});var a=i.getShadowElement();a.offsetParent();var n=a.innerHeight(),r=a.innerWidth(),o=a.position();t.trackDisplay.css({left:o.left,width:r,height:n-45,top:o.top,display:"block"}),t.trackDisplay.css("fontSize",Math.max(Math.round(n/30),7)),t.hasDirtyTrackDisplay=!1}else t.hasDirtyTrackDisplay=!0},s=function(){clearTimeout(n),n=setTimeout(o,0)},u=function(){o(!0)};i.on("playerdimensionchange mediaelementapichange updatetrackdisplay updatemediaelementdimensions swfstageresize",s),e(a).on("updateshadowdom",s),i.on("forceupdatetrackdisplay",u),u()}},hide:function(t){t.trackDisplay&&t.displayedActiveCues.length&&(t.displayedActiveCues=[],e("span.cue-wrapper",t.trackDisplay).remove(),e("span.description-cues",t.trackDisplay).empty())}};if(e.extend(e.event.customEvent,{updatetrackdisplay:!0,forceupdatetrackdisplay:!0}),s.trackDisplay=l,!s.createCueList){var d={getCueById:function(e){for(var t=null,i=0,a=this.length;a>i;i++)if(this[i].id===e){t=this[i];break}return t}};s.createCueList=function(){return e.extend([],d)}}s.getActiveCue=function(t,i,a,n){t._lastFoundCue||(t._lastFoundCue={index:0,time:0}),!Modernizr.track||r.override||t._shimActiveCues||(t._shimActiveCues=s.createCueList());for(var u,l,d=0;t.shimActiveCues.length>d;d++)l=t.shimActiveCues[d],l.startTime>a||a>l.endTime?(t.shimActiveCues.splice(d,1),d--,l.pauseOnExit&&e(i).pause(),e(t).triggerHandler("cuechange"),e(l).triggerHandler("exit")):"showing"==t.mode&&o[t.kind]&&-1==e.inArray(l,n.activeCues)&&n.activeCues.push(l);for(u=t.cues.length,d=a>t._lastFoundCue.time?t._lastFoundCue.index:0;u>d&&(l=t.cues[d],a>=l.startTime&&l.endTime>=a&&-1==e.inArray(l,t.shimActiveCues)&&(t.shimActiveCues.push(l),"showing"==t.mode&&o[t.kind]&&n.activeCues.push(l),e(t).triggerHandler("cuechange"),e(l).triggerHandler("enter"),t._lastFoundCue.time=a,t._lastFoundCue.index=d),!(l.startTime>a));d++);},u()&&function(){var i,a=function(t){setTimeout(function(){i=!0,e(t).triggerHandler("updatetrackdisplay"),i=!1},9)},n=function(n,r,o){var s,l="_sup"+o,d={prop:{}};d.prop[o]=function(){return!i&&u()&&a(e(this).closest("audio, video")),s.prop[l].apply(this,arguments)},s=t.defineNodeNameProperty(n,r,d)};n("track","track","get"),["audio","video"].forEach(function(e){n(e,"textTracks","get"),n("nodeName","addTextTrack","value")})}(),t.addReady(function(i,a){e("video, audio",i).add(a.filter("video, audio")).each(function(){var i,a,n,r=e(this),o=function(){var e,n;if(a&&i||(a=r.prop("textTracks"),i=t.data(r[0],"mediaelementBase")||t.data(r[0],"mediaelementBase",{}),i.displayedActiveCues||(i.displayedActiveCues=[])),a&&(n=r.prop("currentTime"),n||0===n)){i.activeCues=[];for(var o=0,u=a.length;u>o;o++)e=a[o],"disabled"!=e.mode&&e.cues&&e.cues.length&&s.getActiveCue(e,r,n,i);l.update(i,r)}},d=function(e){clearTimeout(n),e&&"timeupdate"==e.type?(o(),setTimeout(d,90)):n=setTimeout(o,9)},c=function(){r.off(".trackview").on("play.trackview timeupdate.trackview updatetrackdisplay.trackview",d)};u()?r.on("mediaelementapichange trackapichange",function(){!u()||r.is(".nonnative-api-active")?c():(a=r.prop("textTracks"),i=t.data(r[0],"mediaelementBase")||t.data(r[0],"mediaelementBase",{}),e.each(a,function(e,t){t._shimActiveCues&&delete t._shimActiveCues}),l.hide(i),r.unbind(".trackview"))}):c()})})});