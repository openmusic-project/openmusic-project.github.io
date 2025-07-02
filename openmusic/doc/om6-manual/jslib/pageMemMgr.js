var guideMem = {
 pathOutBtn : "ide:tplh/des:li.outMap/chi:a",
 pathNxtBtns : "des:div.tplNav/des:a.navNext",
 pathPrvBtns : "des:div.tplNav/des:a.navPrev",
 pathToolBtns : "ide:tplh/des:ul.toolElt_list/des:a",
 memorize : function(){
	 document.cookie = "guideUrl="+escape(document.location.href);
 },
 onLoad : function() {
	 document.cookie = "guideUrl="+escape(document.location.href);
 },
 loadSortKey : "ZZ"
}

var guideRet = {
 pathGuideBtn : "ide:tplh/des:li.outRoot/chi:a",
 retrieve: function(){
  var vArr = /guideUrl=([^;]*)/.exec(document.cookie);
 	if(vArr && vArr.length==2) this.setAttribute("href", unescape(vArr[1]));
 },
 onLoad : function() {
 var vGuideBtn = scPaLib.findNode(this.pathGuideBtn);
 if(vGuideBtn) {
  vGuideBtn.onclick=this.retrieve;
  vGuideBtn.title="Retour à la page en cours du contenu";
 }
 var vGuideBtnInt = scPaLib.findNode(this.pathGuideBtn+"/chi:span");
 if(vGuideBtnInt) vGuideBtnInt.className="tplGuideRet";
 },
 loadSortKey : "ZZ"
}
