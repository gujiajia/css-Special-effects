!(function(doc, win) {
	var docEl = doc.documentElement,
		resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
		recalc = function() {
			var clientWidth = docEl.clientWidth || doc.body.clientWidth;
			if(!clientWidth) return;
			docEl.style.fontSize = 20 * clientWidth / 360 + 'px';
		};
	recalc();
	if(!doc.addEventListener) return;
	win.addEventListener(resizeEvt, recalc, false);
	doc.addEventListener('DOMContentLoaded', recalc, false);
	if(document.getElementsByName("viewport").length==0){
		var metaEl = doc.createElement('meta');
		var scale = 1 / win.devicePixelRatio;
		metaEl.setAttribute('name', 'viewport');
		metaEl.setAttribute('content', 'initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no');
		if(docEl.firstElementChild) {
			document.documentElement.firstElementChild.appendChild(metaEl);
		} else {
			var wrap = doc.createElement('div');
			wrap.appendChild(metaEl);
			documen.write(wrap.innerHTML);
		}
	}
})(document, window);