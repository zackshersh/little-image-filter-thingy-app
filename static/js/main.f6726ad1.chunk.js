(this["webpackJsonpimage-filter-app"]=this["webpackJsonpimage-filter-app"]||[]).push([[0],{449:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a.n(n),i=a(21),o=a.n(i),c=a(91),s=a.n(c),l=a(140),d=a(3),h=a(0),u=function(){var e=Object(n.useState)(0),t=Object(d.a)(e,2),a=t[0],r=(t[1],Object(n.useState)(0)),i=Object(d.a)(r,2),o=i[0];i[1];return Object(h.jsx)("div",{className:"canvas-component flex-center",children:Object(h.jsx)("canvas",{style:{transform:"translate(".concat(a+"px",",").concat(o+"px",")")},onMouseDown:function(e){e.target.onmousemove=function(e){},e.target.onmouseup=function(e){e.target.onmouseup=null,e.target.onmousemove=null}},className:"imageCanv"})})},j=function(e){var t=e.eventHandler,a=Object(n.useState)(!1),r=Object(d.a)(a,2),i=r[0],o=r[1],c=Object(n.useState)("No File Uploaded"),s=Object(d.a)(c,2),l=s[0],u=s[1];return Object(h.jsxs)("div",{className:"File-Upload ".concat(i?"File-Upload File-Upload-True":"File-Upload-False"),children:[Object(h.jsx)("button",{onMouseDown:function(){document.querySelector("#imageUpload").click()},children:"Upload"}),Object(h.jsx)("p",{children:l}),Object(h.jsx)("input",{style:{display:"none"},onChange:function(e){t(e.target.files),u(e.target.files[0].name),o(!0)},id:"imageUpload",type:"file"})]})};function f(e,t,a){return e+(t-e)*a}function p(e){return Math.floor(Math.random()*e)}function v(){return Math.random()>.5?1:-1}function x(e,t,a){return t*(4*a)+4*e}function b(e,t,a,n,r,i){for(var o=Object(d.a)(i,4),c=o[0],s=o[1],l=o[2],h=o[3],u=e.data,j=0;j<r;j++)for(var f=0;f<n;f++){var p=x(t+f,a+j,e.width);u[p]=c,u[p+1]=s,u[p+2]=l,u[p+3]=h}}function O(e){var t=e.toString(16);return 1==t.length?"0"+t:t}function m(e){var t=Object(d.a)(e,3),a=t[0],n=t[1],r=t[2];return"#"+O(a)+O(n)+O(r)}function g(e){var t=e.data,a=new ImageData(e.width,e.height);a.data.set(t);var n=a.data;console.log("%cFILLING","color:orange");for(var r=0;r<e.height;r++)for(var i=0;i<e.width;i++){var o=x(i,r,e.width);if(!(t[o+3]>0))if(t[x(i+1,r,e.width)+3]>0){var c=x(i+1,r,e.width);n[o]=t[c],n[o+1]=t[c+1],n[o+2]=t[c+2],n[o+3]=t[c+3]}else if(t[x(i,r+1,e.width)+3]>0){var s=x(i,r+1,e.width);n[o]=t[s],n[o+1]=t[s+1],n[o+2]=t[s+2],n[o+3]=t[s+3]}else if(t[x(i+1,r+1,e.width)+1]>0){var l=x(i+1,r+1,e.width);n[o]=t[l],n[o+1]=t[l+1],n[o+2]=t[l+2],n[o+3]=t[l+3]}}return a}var w=a(93),C=a(62),F=a(141);a(149);function M(e){var t=255-e[0],a=255-e[1],n=255-e[2];e[3];return[Math.floor(t),Math.floor(a),Math.floor(n),Math.floor(e[3])]}function S(e,t){var a=t.value,n=void 0===a?40:a;return[e[0]+n,e[1]+n,e[2]+n,e[3]]}function y(e,t){var a=t.cutoff,n=void 0===a?120:a;return(e[0]+e[1]+e[2])/3>n?[255,255,255,e[3]]:[0,0,0,255,e[3]]}function k(e,t){var a=t.darkColor,n=void 0===a?[0,0,0]:a,r=t.lightColor,i=void 0===r?[255,255,255]:r,o=(e[0]+e[1]+e[2])/3/255,c=f(n[0],i[0],o),s=f(n[1],i[1],o),l=f(n[2],i[2],o);return[Math.floor(c),Math.floor(s),Math.floor(l),Math.floor(e[3])]}function N(e,t){var a=t.max,n=void 0===a?50:a,r=t.monochromatic;if(void 0===r||r){var i=p(n)*v(),o=e[0]+i,c=e[1]+i,s=e[2]+i;return[Math.floor(o),Math.floor(c),Math.floor(s),Math.floor(e[3])]}var l=e[0]+p(n)*v(),d=e[1]+p(n)*v(),h=e[2]+p(n)*v();return[Math.floor(l),Math.floor(d),Math.floor(h),Math.floor(e[3])]}function I(e,t){var a=t.amount,n=void 0===a?3:a,r=e[0],i=e[1],o=e[2],c=(r+i+o)/3,s=f(c,r,n),l=f(c,i,n),d=f(c,o,n);return[Math.floor(s),Math.floor(l),Math.floor(d),Math.floor(e[3])]}a(144);function A(e,t){var a=t.pixelWidth,n=void 0===a?12:a,r=t.pixelsPerRow,i=e.data,o=new ImageData(e.width,e.height),c=(o.data,8);n?c=n:r&&(c=Math.floor(e.width/r)),c=Math.floor(c*ce.drawResFactor);for(var s=0;s<e.height;s+=c)for(var l=0;l<e.width;l+=c){var d=x(l,s,e.width),h=[i[d],i[d+1],i[d+2],i[d+3]];b(o,l,s,c,c,[].concat(h))}return console.log(document.event),o}function D(e,t){t.canvas;var a=t.blockScaleFactor,n=void 0===a?2:a,r=t.randomPattern,i=void 0!==r&&r,o=e.data,c=new ImageData(e.width,e.height),s=(c.data,[0,8,2,10,12,4,14,6,13,11,1,9,15,7,13,5]);(n=Math.floor(n*ce.drawResFactor))<1&&(n=1);for(var l=Math.sqrt(s.length),d=0;d<e.height;d+=l*n)for(var h=0;h<e.width;h+=l*n){if(i){s=[];for(var u=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],j=u.length,f=0;f<j;f++){var v=p(u.length);s.push(u[v]),u.splice(v,1)}}for(var O=x(h,d,e.width),m=o[O],g=o[O+1],w=o[O+2],C=o[O+3],F=(m+g+w)/3,M=Math.floor(F/255*s.length),S=0,y=0;y<l*n;y+=n)for(var k=0;k<l*n;k+=n)s[S]<=M?b(c,h+k,d+y,n,n,[255,255,255,C]):b(c,h+k,d+y,n,n,[0,0,0,C]),S++}return console.log("%cBITMAP COMPLETE","color:rgb(0,255,0)"),c}function E(e,t){t.canvas;var a=t.xAmplitude,n=void 0===a?20:a,r=t.xWavelength,i=void 0===r?120:r,o=t.xShift,c=void 0===o?0:o,s=t.yAmplitude,l=void 0===s?20:s,d=t.yWavelength,h=void 0===d?60:d,u=t.yShift,j=void 0===u?0:u,f=t.warp,p=void 0===f||f,v=e.data,b=new ImageData(e.width,e.height),O=b.data;n=Math.floor(ce.drawResFactor*n),i=Math.floor(ce.drawResFactor*i),c=Math.floor(ce.drawResFactor*c),l=Math.floor(ce.drawResFactor*l),h=Math.floor(ce.drawResFactor*h),j=Math.floor(ce.drawResFactor*j);for(var m=0;m<e.height;m++)for(var w=0;w<e.width;w++){var C=x(w,m,e.width),F=v[C],M=v[C+1],S=v[C+2],y=v[C+3],k=void 0,N=void 0;p?(k=w+Math.sin(w/i)*n+c,N=m+Math.sin(m/h)*l+j):(k=w+Math.sin(m/h)*l+j,N=m+Math.sin(w/i)*n+c),k=Math.floor(k),N=Math.floor(N),k>e.width?k-=e.width:k<0&&(k+=e.width),N>e.height?N-=e.height:N<0&&(N+=e.height);var I=x(k,N,e.width);O[I]=F,O[I+1]=M,O[I+2]=S,O[I+3]=y,20==w&&20==m&&(console.log(C),console.log(w,m),console.log(k,N),console.log(I))}return b=g(b),b=g(b),console.log(b),b}var R=function(){function e(){Object(C.a)(this,e),this.canvas=null,this.w=400,this.h=400,this.image=null,this.activeFilters=[],this.filtersCompiled=[],this.renderWorkers=[],this.drawCountdown=500,this.drawInterval=null,this.drawResFactor=.5}return Object(F.a)(e,[{key:"init",value:function(e){this.canvas=e,console.log("%c Initializing Image Object","background-color:orange;color:black"),console.log("%c                             ","background-color: orange;color:black;width:200px;white-space:prewrap;"),console.log(this),console.log("%c                             ","background-color: orange;color:black;width:200px;white-space:prewrap"),this.ctx=this.canvas.getContext("2d"),this.setCanvas();this.renderWorkers=[],console.log("%cTHIS.IMAGE --------------","color:orange"),console.log(this.image),console.log("%c ------------------------","color:orange"),this.compileFilters(),this.image&&this.draw()}},{key:"clearFilters",value:function(){this.filters=[]}},{key:"addFilter",value:function(e){console.log("ADDING FILTER"),this.activeFilters.push(e),this.compileFilters()}},{key:"removeFilter",value:function(e){this.activeFilters.splice(e,1),this.compileFilters()}},{key:"compileFilters",value:function(){var e=this;this.filtersCompiled=[];var t=[];this.activeFilters.forEach((function(a){var n=a.constructor.name;a.active&&("ByPixelFilter"==n?t.push(a):"ByBlockFilter"==n&&(t.length>0&&(e.filtersCompiled.push(t),t=[]),e.filtersCompiled.push(a)))})),t.length>0&&(this.filtersCompiled.push(t),t=[])}},{key:"setImage",value:function(e){console.log("%c Image Set","color:orange"),this.image=e,this.canvas.style.width="50vw";var t=getComputedStyle(this.image);t.width,t.height;this.setCanvas(),this.draw()}},{key:"setCanvas",value:function(){this.image?(this.w=this.image.width*this.drawResFactor,this.h=this.image.height*this.drawResFactor,this.canvas.width=this.w,this.canvas.height=this.h):(this.canvas.width=this.w,this.canvas.height=this.h)}},{key:"drawDefault",value:function(){this.ctx.fillStyle="rgb(170,170,170)",this.ctx.beginPath(),this.ctx.fillRect(0,0,this.w,this.h),this.ctx.closePath()}},{key:"draw",value:function(e){if(this.image){this.compileFilters();var t=performance.now();if(console.log("%c DRAWIMG IMAGE","color:orange;"),this.ctx.beginPath(),this.ctx.fillStyle="rgb(".concat(Math.floor(255*Math.random()),",").concat(Math.floor(255*Math.random()),",").concat(Math.floor(255*Math.random()),")"),this.ctx.fillRect(0,0,this.image.width,this.image.height),this.ctx.closePath(),this.ctx.drawImage(this.image,0,0,this.w,this.h),this.filtersCompiled.length>0){var a=this.applyFilters();this.ctx.putImageData(a,0,0)}var n=performance.now();console.log("%cIMAGE DRAWN WITH ".concat(this.activeFilters.length," FILTERS \n IN ").concat((n-t)/1e3," SECONDS"),"background-color:yellow;color:black;padding:3px")}}},{key:"applyFilters",value:function(){var e=this.ctx.getImageData(0,0,this.w,this.h);return this.filtersCompiled.reduce((function(e,t){console.log("%cREDUCER FUNCTION REDUCING","color:#00ff00");var a=e,n=a.data;if(t instanceof Array){for(var r=function(){var e=[n[i],n[i+1],n[i+2],n[i+3]];t.forEach((function(t){e=t.operation(e,t.options)})),n[i]=e[0],n[i+1]=e[1],n[i+2]=e[2],n[i+3]=e[3]},i=0;i<n.length;i+=4)r();return a}return t.operation(a,t.options)}),e)}},{key:"exportImage",value:function(e,t,a,n){console.log("%cEXPORTING IMAGE","background-color:orange;color:black");var r=this.drawResFactor;this.drawResFactor=t/100,this.setCanvas(),this.draw(),this.renderToImg(e,a,n),this.drawResFactor=r,this.setCanvas(),this.draw()}},{key:"renderToImg",value:function(e,t,a){var n=document.querySelector("#draw-output");n&&n.remove();var r=document.createElement("img");function i(t){var a=document.createElement("a");a.style.display="none";var n=window.URL.createObjectURL(t);a.href=n,a.download=e,a.click()}r.id="draw-output",r.style.display="none","jpeg"==t?this.canvas.toBlob(i,"image/jpeg",a):this.canvas.toBlob(i,"image/png")}}]),e}(),T=function e(t,a,n){Object(C.a)(this,e),this.operation=t,this.name=a,this.options=n,this.active=!0},B=function e(t,a,n){Object(C.a)(this,e),this.operation=t,this.name=a,this.options=n,this.active=!0},P=function(e){var t=e.handler,a=e.title,n=(e.filter,e.name),r=e.defaultOptions;return Object(h.jsx)("p",{"data-filter":n,"data-options":r,className:"Filter-Option",onMouseDown:t,children:a})},W=function(e){var t=e.refreshApp,a=Object(n.useState)(!1),r=Object(d.a)(a,2),i=r[0],o=r[1],c=Object(n.useState)("100%"),s=Object(d.a)(c,2),l=s[0],u=s[1],j=Object(n.useState)(0),f=Object(d.a)(j,2),p=f[0],v=f[1],x=Object(n.useState)(0),b=Object(d.a)(x,2),O=b[0],m=b[1],g=function(){i?(u("100%"),v(0),m(0),document.querySelector(".AF-Button").textContent="Filters +",o(!1)):(u("100%"),v("auto"),m(24),document.querySelector(".AF-Button").textContent="Filters -",o(!0))},C=function(e){console.log(e.target.dataset.filter),g();var a=[M,S,I,k,N,y,A,D,E],n=["invert","exposure","saturation","gradientMap","noise","threshold","pixelate","bitmap","wave"];console.log(e.target.dataset);var r=JSON.parse(e.target.dataset.options);a.forEach((function(t,a){if(console.log(n[a]),console.log(e.target.dataset.filter),e.target.dataset.filter==n[a]){var i=e.target.textContent.toLowerCase();console.log("FILTER MATCHED = "+n[a]),"bitmap"==i||"pixelate"==i||"wave"==i?ce.addFilter(new B(t,n[a],Object(w.a)({},r))):ce.addFilter(new T(t,n[a],Object(w.a)({},r))),console.log(ce.activeFilters)}})),t()};return Object(h.jsxs)("div",{className:"Add-Filter Menu-Bar-Cont",children:[Object(h.jsx)("div",{className:"Add-Filter-Button",children:Object(h.jsx)("button",{className:"AF-Button Menu-Bar-Button",onMouseDown:g,children:"Filters +"})}),Object(h.jsxs)("div",{style:{width:l,height:p,paddingBottom:O,paddingTop:2*O},className:"Add-Filter-Options",children:[Object(h.jsx)(P,{handler:C,filter:D,name:"bitmap",title:"Bitmap",defaultOptions:JSON.stringify({blockScaleFactor:4,randomPattern:!1})}),Object(h.jsx)(P,{handler:C,filter:S,name:"exposure",title:"Exposure",defaultOptions:JSON.stringify({value:40})}),Object(h.jsx)(P,{handler:C,filter:k,name:"gradientMap",title:"Gradient Map",defaultOptions:JSON.stringify({darkColor:[0,0,255],lightColor:[255,255,255]})}),Object(h.jsx)(P,{handler:C,filter:M,name:"invert",title:"Invert",defaultOptions:JSON.stringify({filler:1})}),Object(h.jsx)(P,{handler:C,filter:N,name:"noise",title:"Noise",defaultOptions:JSON.stringify({max:100,monochromatic:!0})}),Object(h.jsx)(P,{handler:C,filter:A,name:"pixelate",title:"Pixelate",defaultOptions:JSON.stringify({pixelWidth:12})}),Object(h.jsx)(P,{handler:C,filter:I,name:"saturation",title:"Saturation",defaultOptions:JSON.stringify({amount:3})}),Object(h.jsx)(P,{handler:C,filter:y,name:"threshold",title:"Threshold",defaultOptions:JSON.stringify({cutoff:120})}),Object(h.jsx)(P,{handler:C,filter:E,name:"wave",title:"Wave",defaultOptions:JSON.stringify({xAmplitude:20,xWavelength:120,xShift:0,yAmplitude:20,yWavelength:60,yShift:0,warp:!1})})]})]})},G=function(e){var t=e.refreshApp,a=Object(n.useState)(ce.drawResFactor),r=Object(d.a)(a,2),i=r[0],o=r[1],c=Object(n.useState)(!1),s=Object(d.a)(c,2),l=s[0],u=s[1],j=function(e){var a=e.target.dataset.val;o(parseFloat(a)),u(!1),ce.drawResFactor=a,t()};return Object(h.jsxs)("div",{className:"Preview-Res Menu-Bar-Cont",children:[Object(h.jsx)("div",{className:"Res-Button-Cont",children:Object(h.jsxs)("button",{className:"Menu-Bar-Button",onMouseDown:function(e){u(!l)},children:["Preview Resolution: ",i,"x"]})}),Object(h.jsxs)("div",{className:"Res-Options-Cont ".concat(l?"Res-Options-Expanded-True":"Res-Options-Expanded-False"),children:[Object(h.jsx)("button",{onMouseDown:j,"data-val":"1",children:"1x"}),Object(h.jsx)("button",{onMouseDown:j,"data-val":"0.5",children:"0.5x"}),Object(h.jsx)("button",{onMouseDown:j,"data-val":"0.25",children:"0.25x"}),Object(h.jsx)("button",{onMouseDown:j,"data-val":"0.1",children:"0.1x"})]})]})},U=function(e){var t=e.setDisplay;return Object(h.jsx)("div",{className:"Export-Cont Menu-Bar-Cont",children:Object(h.jsx)("button",{class:"Menu-Bar-Button",onMouseDown:function(){ce.image?t("flex"):alert("An image must be uploaded to export.")},children:"Export"})})},L=function(e){var t=e.refreshApp,a=e.setExportDisplay,n=function(e){"zoomIn"==e.target.id?r(1.5,500):r(.66,500)},r=function(e,t){var a=document.querySelector(".imageCanv"),n=getComputedStyle(a).width,r=parseInt(n.split("px")[0])*e;a.style.width=r+"px"};return Object(h.jsxs)("div",{className:"Image-Display",children:[Object(h.jsxs)("div",{className:"Menu-Bar",children:[Object(h.jsx)(U,{setDisplay:a}),Object(h.jsx)(W,{refreshApp:t}),Object(h.jsx)(G,{refreshApp:t})]}),Object(h.jsx)("div",{className:"Image-Cont flex-center",children:Object(h.jsx)(u,{})}),Object(h.jsxs)("div",{className:"Zoom-Cont",children:[Object(h.jsx)("button",{id:"zoomIn",onMouseDown:n,children:"+"}),Object(h.jsx)("button",{id:"zoomOut",onMouseDown:n,children:"-"})]})]})},J=function(e){var t=e.filter,a=e.filterIndex,r=e.refreshApp,i=Object(n.useState)(t.active),o=Object(d.a)(i,2),c=o[0];o[1];return Object(h.jsxs)("div",{className:"Filter-Card Invert-Filter-Card",children:[Object(h.jsx)("button",{onMouseDown:function(e){ce.activeFilters.splice(a,1),ce.compileFilters(),r()},className:"x-out",children:"x"}),Object(h.jsxs)("span",{children:[Object(h.jsx)("div",{className:"Display-Check-Cont",children:Object(h.jsx)("input",{onChange:function(e){e.target.checked?t.active=!0:t.active=!1,ce.draw()},type:"checkbox",defaultChecked:c})}),Object(h.jsx)("h3",{children:"Invert"})]})]})},H=function(e){var t=e.handler,a=e.max,r=e.min,i=e.step,o=e.value,c=e.title,s=Object(n.useState)(o),l=Object(d.a)(s,2),u=l[0],j=l[1];return Object(h.jsxs)("div",{className:"Slider",children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("input",{defaultValue:u,onMouseUp:t,onChange:function(e){j(e.target.value)},max:a,min:r,step:i,type:"range"}),Object(h.jsx)("p",{className:"Slider-Value-Display",children:u})]}),Object(h.jsx)("p",{children:c})]})},z=function(e){var t=e.filter,a=e.filterIndex,r=e.refreshApp,i=Object(n.useState)(t.active),o=Object(d.a)(i,2),c=o[0];o[1];return Object(h.jsxs)("div",{className:"Filter-Card Saturation-Filter-Card",children:[Object(h.jsx)("button",{onMouseDown:function(e){ce.activeFilters.splice(a,1),ce.compileFilters(),r()},className:"x-out",children:"x"}),Object(h.jsxs)("span",{children:[Object(h.jsxs)("div",{className:"Display-Check-Cont",children:[Object(h.jsx)("input",{onChange:function(e){e.target.checked?t.active=!0:t.active=!1,ce.draw()},type:"checkbox",defaultChecked:c}),"                "]}),Object(h.jsx)("h3",{children:"Saturate"})]}),Object(h.jsx)(H,{handler:function(e){t.options.amount=e.target.value,ce.draw()},max:10,min:0,step:1,value:2})]})},q=function(e){var t=e.filter,a=e.filterIndex,r=e.refreshApp,i=Object(n.useState)(t.active),o=Object(d.a)(i,2),c=o[0],s=(o[1],Object(n.useState)(t.options.monochromatic=!0)),l=Object(d.a)(s,2),u=l[0],j=l[1];return Object(h.jsxs)("div",{className:"Filter-Card Noise-Filter-Card",children:[Object(h.jsx)("button",{onMouseDown:function(e){ce.activeFilters.splice(a,1),ce.compileFilters(),r()},className:"x-out",children:"x"}),Object(h.jsxs)("span",{children:[Object(h.jsxs)("div",{className:"Display-Check-Cont",children:[Object(h.jsx)("input",{onChange:function(e){e.target.checked?t.active=!0:t.active=!1,ce.draw()},type:"checkbox",defaultChecked:c}),"                "]}),Object(h.jsx)("h3",{children:"Noise"})]}),Object(h.jsx)(H,{handler:function(e){t.options.max=e.target.value,console.log("%cMONOCHROMATIC STATUS","color:red"),console.log("monochr state: "),console.log(u),console.log("filter.options.monochromatic:"),console.log(t.options.monochromatic),ce.draw()},max:255,min:0,step:1,value:50,title:"Amount"}),Object(h.jsxs)("div",{className:"Checkbox-Cont",children:[Object(h.jsx)("input",{type:"checkbox",onChange:function(e){console.log(e.target.checked),j(e.target.checked),t.options.monochromatic=!u,console.log("%cMONOCHROMATIC STATUS","color:red"),console.log("monochr state: "),console.log(u),console.log("filter.options.monochromatic:"),console.log(t.options.monochromatic),ce.draw()},checked:u}),Object(h.jsx)("p",{children:"Monochromatic Noise"})]})]})},V=function(e){var t=e.filter,a=e.filterIndex,r=e.refreshApp,i=Object(n.useState)(t.active),o=Object(d.a)(i,2),c=o[0];o[1];return Object(h.jsxs)("div",{className:"Filter-Card Saturation-Filter-Card",children:[Object(h.jsx)("button",{onMouseDown:function(e){ce.activeFilters.splice(a,1),ce.compileFilters(),r()},className:"x-out",children:"x"}),Object(h.jsxs)("span",{children:[Object(h.jsx)("div",{className:"Display-Check-Cont",children:Object(h.jsx)("input",{onChange:function(e){e.target.checked?t.active=!0:t.active=!1,ce.draw()},type:"checkbox",defaultChecked:c})}),Object(h.jsx)("h3",{children:"Exposure"})]}),Object(h.jsx)(H,{handler:function(e){t.options.value=parseInt(e.target.value),ce.draw()},max:255,min:-255,step:1,value:t.options.value,title:"Value"})]})},X=function(e){var t=e.filter,a=e.filterIndex,r=e.refreshApp,i=Object(n.useState)(t.active),o=Object(d.a)(i,2),c=o[0];o[1];return Object(h.jsxs)("div",{className:"Filter-Card Saturation-Filter-Card",children:[Object(h.jsx)("button",{onMouseDown:function(e){ce.activeFilters.splice(a,1),ce.compileFilters(),r()},className:"x-out",children:"x"}),Object(h.jsxs)("span",{children:[Object(h.jsxs)("div",{className:"Display-Check-Cont",children:[Object(h.jsx)("input",{onChange:function(e){e.target.checked?t.active=!0:t.active=!1,ce.draw()},type:"checkbox",defaultChecked:c}),"                "]}),Object(h.jsx)("h3",{children:"Threshold"})]}),Object(h.jsx)(H,{handler:function(e){t.options.cutoff=parseInt(e.target.value),ce.draw()},max:255,min:0,step:1,value:t.options.cutoff,title:"Cutoff Value"})]})},Y=250,Q=null;var Z=function(e){e.title;var t=e.value,a=e.handler,r=Object(n.useState)(t),i=Object(d.a)(r,2),o=i[0],c=i[1];return Object(h.jsx)("div",{className:"Color-Input",children:Object(h.jsx)("input",{value:o,onChange:function(e){Y=250,Q||(Q=setInterval((function(){(Y-=10)<0&&(clearInterval(Q),console.log("!!!!!!!! HEY !!!!!!!!!"),Y=250,Q=null,ce.draw())}),10)),a(o),c(e.target.value)},type:"color"})})},$=function(e){var t=e.filter,a=e.filterIndex,r=e.refreshApp,i=Object(n.useState)(t.active),o=Object(d.a)(i,2),c=o[0],s=(o[1],Object(n.useState)(m(t.options.darkColor))),l=Object(d.a)(s,2),u=l[0],j=l[1],f=Object(n.useState)(m(t.options.lightColor)),p=Object(d.a)(f,2);p[0],p[1];return Object(h.jsxs)("div",{className:"Filter-Card Invert-Filter-Card",children:[Object(h.jsx)("button",{onMouseDown:function(e){ce.activeFilters.splice(a,1),ce.compileFilters(),r()},className:"x-out",children:"x"}),Object(h.jsxs)("span",{children:[Object(h.jsxs)("div",{className:"Display-Check-Cont",children:[Object(h.jsx)("input",{onChange:function(e){e.target.checked?t.active=!0:t.active=!1,ce.draw()},type:"checkbox",defaultChecked:c}),"                "]}),Object(h.jsx)("h3",{children:"Gradient Map"})]}),Object(h.jsx)("br",{}),Object(h.jsx)(Z,{title:"Dark Color",value:u,handler:function(e){j(e),t.options.darkColor=function(e){var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]:null}(u)}})]})},K=function(e){var t=e.filter,a=e.filterIndex,r=e.refreshApp,i=Object(n.useState)(t.active),o=Object(d.a)(i,2),c=o[0],s=(o[1],Object(n.useState)(t.options.randomPattern)),l=Object(d.a)(s,2),u=l[0];l[1];return Object(h.jsxs)("div",{className:"Filter-Card Saturation-Filter-Card",children:[Object(h.jsx)("button",{onMouseDown:function(e){ce.activeFilters.splice(a,1),ce.compileFilters(),r()},className:"x-out",children:"x"}),Object(h.jsxs)("span",{children:[Object(h.jsx)("div",{className:"Display-Check-Cont",children:Object(h.jsx)("input",{onChange:function(e){e.target.checked?t.active=!0:t.active=!1,ce.draw()},type:"checkbox",defaultChecked:c})}),Object(h.jsx)("h3",{children:"Bitmap"})]}),Object(h.jsx)(H,{handler:function(e){t.options.blockScaleFactor=parseInt(e.target.value),ce.draw()},max:24,min:1,step:1,value:t.options.blockScaleFactor,title:"Scaling Factor"}),Object(h.jsxs)("div",{className:"Checkbox-Cont",children:[Object(h.jsx)("input",{type:"checkbox",onChange:function(e){t.options.randomPattern=e.target.checked,ce.draw()},defaultChecked:u}),Object(h.jsx)("p",{children:"Random Noise Pattern"})]})]})},_=function(e){var t=e.filter,a=e.filterIndex,r=e.refreshApp,i=Object(n.useState)(t.active),o=Object(d.a)(i,2),c=o[0];o[1];return Object(h.jsxs)("div",{className:"Filter-Card Saturation-Filter-Card",children:[Object(h.jsx)("button",{onMouseDown:function(e){ce.activeFilters.splice(a,1),ce.compileFilters(),r()},className:"x-out",children:"x"}),Object(h.jsxs)("span",{children:[Object(h.jsxs)("div",{className:"Display-Check-Cont",children:[Object(h.jsx)("input",{onChange:function(e){e.target.checked?t.active=!0:t.active=!1,ce.draw()},type:"checkbox",defaultChecked:c}),"                "]}),Object(h.jsx)("h3",{children:"Pixelate"})]}),Object(h.jsx)(H,{handler:function(e){t.options.pixelWidth=parseInt(e.target.value),ce.draw()},max:255,min:1,step:1,value:t.options.pixelWidth,title:"Pixel Width"})]})},ee=function(e){var t=e.handler,a=e.title,n=e.defaultValue;return Object(h.jsxs)("div",{className:"Checkbox-Cont",children:[Object(h.jsx)("input",{type:"checkbox",defaultChecked:n,onChange:t}),Object(h.jsx)("p",{children:a})]})},te=function(e){var t=e.filter,a=e.filterIndex,r=e.refreshApp,i=Object(n.useState)(t.active),o=Object(d.a)(i,2),c=o[0],s=(o[1],Object(n.useState)(t.options.warp)),l=Object(d.a)(s,2),u=l[0],j=l[1];return Object(h.jsxs)("div",{className:"Filter-Card Saturation-Filter-Card",children:[Object(h.jsx)("button",{onMouseDown:function(e){ce.activeFilters.splice(a,1),ce.compileFilters(),r()},className:"x-out",children:"x"}),Object(h.jsxs)("span",{children:[Object(h.jsxs)("div",{className:"Display-Check-Cont",children:[Object(h.jsx)("input",{onChange:function(e){e.target.checked?t.active=!0:t.active=!1,ce.draw()},type:"checkbox",defaultChecked:c}),"                "]}),Object(h.jsx)("h3",{children:"Wave"})]}),Object(h.jsx)(ee,{handler:function(e){t.options.warp=e.target.checked,j(e.target.checked),ce.draw()},title:"Warp",defaultValue:u}),Object(h.jsx)(H,{handler:function(e){t.options.xAmplitude=e.target.value,ce.draw()},max:u?100:1250,min:1,step:1,value:40,title:"X-Amplitude"}),Object(h.jsx)(H,{handler:function(e){t.options.xWavelength=e.target.value,ce.draw()},max:1250,min:1,step:1,value:40,title:"X-Wavelength"}),Object(h.jsx)(H,{handler:function(e){t.options.yAmplitude=e.target.value,ce.draw()},max:u?100:1250,min:1,step:1,value:40,title:"Y-Amplitude"}),Object(h.jsx)(H,{handler:function(e){t.options.yWavelength=e.target.value,ce.draw()},max:1250,min:1,step:1,value:40,title:"Y-Wavelength"})]})},ae=function(e){var t=e.refreshApp;console.log(ce);var a=ce.activeFilters.map((function(e,a){var n=e.name;switch(console.log(n),n){case"invert":return Object(h.jsx)(J,{filter:e,filterIndex:a,refreshApp:t},a);case"saturation":return Object(h.jsx)(z,{filter:e,filterIndex:a,refreshApp:t},a);case"noise":return Object(h.jsx)(q,{filter:e,filterIndex:a,refreshApp:t},a);case"exposure":return Object(h.jsx)(V,{filter:e,filterIndex:a,refreshApp:t},a);case"threshold":return Object(h.jsx)(X,{filter:e,filterIndex:a,refreshApp:t},a);case"gradientMap":return Object(h.jsx)($,{filter:e,filterIndex:a,refreshApp:t},a);case"bitmap":return Object(h.jsx)(K,{filter:e,filterIndex:a,refreshApp:t},a);case"pixelate":return Object(h.jsx)(_,{filter:e,filterIndex:a,refreshApp:t},a);case"wave":return Object(h.jsx)(te,{filter:e,filterIndex:a,refreshApp:t},a);default:return Object(h.jsx)("div",{className:"Filter-Card",children:"Default Card"})}}));return console.log(a),Object(h.jsx)("div",{className:"Filter-Card-Cont",children:a})},ne=function(e){var t=e.uploadHandler,a=e.refreshApp;return Object(h.jsxs)("div",{className:"Setting-Suite",children:[Object(h.jsx)(j,{eventHandler:t}),Object(h.jsx)(ae,{refreshApp:a})]})},re=function(e){var t=e.title,a=e.handler,n=e.size,r=e.value,i=e.suffix,o=e.extraText,c=200;if(n)switch(n){case"Small":c=100;break;case"Medium":c=150;break;case"Large":c=250;case"X-Large":c=350}return Object(h.jsxs)("div",{className:"Input",children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("input",{style:{width:c},onChange:a,value:"".concat(r).concat(i||"")}),function(){if(o)return Object(h.jsx)("p",{children:o})}()]}),function(){if(t)return Object(h.jsx)("label",{children:t})}()]})},ie=function(e){var t=e.options,a=e.title,n=e.handler,r=t.map((function(e){return Object(h.jsx)("option",{value:e,children:e})}));return Object(h.jsxs)("div",{className:"Select",children:[Object(h.jsxs)("select",{onChange:n,children:[" ",r," "]}),function(){if(a)return Object(h.jsx)("label",{children:a})}()]})},oe=function(e){var t=e.display,a=e.setDisplay,r=Object(n.useState)(100),i=Object(d.a)(r,2),o=i[0],c=i[1],s=Object(n.useState)("1000x1000"),l=Object(d.a)(s,2),u=l[0],j=l[1],f=Object(n.useState)("png"),p=Object(d.a)(f,2),v=p[0],x=p[1],b=Object(n.useState)(1),O=Object(d.a)(b,2),m=O[0],g=O[1],w=Object(n.useState)("filtered-image"),C=Object(d.a)(w,2),F=C[0],M=C[1];Object(n.useEffect)((function(){S()}));var S=function(){var e=ce.w/ce.drawResFactor,t=ce.h/ce.drawResFactor,a=Math.floor(e*(o/100)),n=Math.floor(t*(o/100));j("".concat(a,"px x ").concat(n,"px"))},y=function(e){g(parseFloat(e.target.value))};return Object(h.jsx)("div",{style:{display:t},className:"Export-Modal",children:Object(h.jsxs)("div",{className:"Export-Inner-Cont",children:[Object(h.jsx)("h1",{children:"Export"}),Object(h.jsxs)("div",{className:"Export-Settings-Cont",children:[Object(h.jsxs)("div",{className:"Export-Setting-Group",children:[Object(h.jsx)("h3",{children:"Image Size"}),Object(h.jsx)(re,{size:"Small",handler:function(e){if(e.target.value){var t=e.target.value.slice(0,e.target.value.length-1);c(t?parseInt(t):0)}else c(0)},value:o,title:"% of Original Size",suffix:"%",extraText:u})]}),Object(h.jsxs)("div",{className:"Export-Setting-Group",children:[Object(h.jsx)("h3",{children:"Format"}),Object(h.jsx)(ie,{handler:function(e){x(e.target.value)},options:["png","jpeg"],title:"Select an Image Format"}),function(){if("jpeg"==v)return Object(h.jsx)(H,{handler:y,max:1,min:.01,step:.01,value:1,title:"JPEG Compression Quality"})}()]}),Object(h.jsxs)("div",{className:"Export-Setting-Group",children:[Object(h.jsx)("h3",{children:"Filename"}),Object(h.jsx)(re,{size:"X-Large",handler:function(e){M(e.target.value)},value:F,title:"filename"})]})]}),Object(h.jsx)("button",{onMouseDown:function(){ce.exportImage(F,o,v,m),a("none")},children:"Export & Download"})]})})},ce=new R;console.log("%cMAINIMAGE CREATED FROM CLASS","color:cyan");var se=function(){var e=Object(n.useState)(0),t=Object(d.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)("none"),o=Object(d.a)(i,2),c=o[0],u=o[1],j=function(){console.log("%c<<<<<<<< REFRESHING APP >>>>>>>>>","background-color:cyan;color:black"),r(a+1)},f=function(){var e=Object(l.a)(s.a.mark((function e(t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(t),t&&t[0]){e.next=4;break}return console.log("%c NO FILES","color:white,background:red"),e.abrupt("return");case 4:console.log(t[0]),(a=document.createElement("img")).src=URL.createObjectURL(t[0]),console.log(a.style),a.onload=function(){ce.setImage(a),console.log("%c IMAGE LOADED","color:cyan")};case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return console.log("%cAPP REFRESHING!!","color:red"),Object(n.useEffect)((function(){console.log("%c USE EFFECT"),ce.init(document.querySelector(".imageCanv"))})),Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(oe,{display:c,setDisplay:u}),Object(h.jsxs)("div",{className:"Image-Editor",children:[Object(h.jsx)(L,{refreshApp:j,setExportDisplay:u}),Object(h.jsx)(ne,{refreshApp:j,uploadHandler:f})]})]})};o.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(se,{})}),document.getElementById("root"))}},[[449,1,2]]]);
//# sourceMappingURL=main.f6726ad1.chunk.js.map