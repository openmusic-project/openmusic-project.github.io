var tplZmMgr = {
	fPathMainNavFra : "ide:tplh/des:ul.tpl_main_navList",
	fPathPageNavFras : "ide:tplf/des:div.tplNav",
	
	onLoad : function() {
		scCoLib.util.log("tplZmMgr.onLoad");
		var vMainNavFra = scPaLib.findNode(this.fPathMainNavFra);
		if(vMainNavFra && document.cookie.indexOf("guideUrl=")>=0){
			var vGuideLi = document.createElement("li");
			vGuideLi.className = "liGuide";
			vMainNavFra.insertBefore(vGuideLi,vMainNavFra.firstChild);

			var vGuideBtn = document.createElement("a");
			vGuideBtn.className = "btnGuide";
			var vArr = /guideUrl=([^;]*)/.exec(document.cookie);
			if(vArr && vArr.length==2) vGuideBtn.setAttribute("href", unescape(vArr[1]));
			
			
			var vTi = document.createAttribute("title");
			vTi.nodeValue = "Retour à la page en cours du contenu";
			vGuideBtn.setAttributeNode(vTi);
			vGuideBtn.innerHTML="<span class='tplGuideRet'>Guide</span>"
			vGuideLi.appendChild(vGuideBtn);

		}		
		var vPageNavFras = scPaLib.findNodes(this.fPathPageNavFras);
		for(var i = 0; i < vPageNavFras.length; i++) {
			if(vPageNavFras[i]){
				var vBackBtn = document.createElement("a");
				vBackBtn.className = "navBack";
				vBackBtn.href = "#";
				vBackBtn.onclick = function() {history.go(-1);return false;};
				var vTi = document.createAttribute("title");
				vTi.nodeValue = "Page précédente";
				vBackBtn.setAttributeNode(vTi);
				vBackBtn.innerHTML="<span>Retour</span>"
				vPageNavFras[i].appendChild(vBackBtn);
			}
		}
	},
	loadSortKey : "BB"
}
scOnLoads[scOnLoads.length] = tplZmMgr;

