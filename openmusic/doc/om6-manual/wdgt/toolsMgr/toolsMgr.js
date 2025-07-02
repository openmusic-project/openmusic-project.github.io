var toolsMgr = {
	fIdxCallersClass : "idxEntryCallers",
	
	init : function() {
		scCoLib.util.log("toolsMgr.onLoad");
		var vIdxCallers = scPaLib.findNodes("ide:tplc/des:div.idxEntryCallers");
		for(var i = 0; i < vIdxCallers.length; i++) {
			if(vIdxCallers[i]){
				var vIdxCallerBtn = scPaLib.findNode("chi:a."+this.fIdxCallersClass+"_open",vIdxCallers[i]);
				scDynUiMgr.collBlkToggle(vIdxCallerBtn,vIdxCallerBtn.parentNode.lastChild,this.fIdxCallersClass+"_open",this.fIdxCallersClass+"_closed");
			}
		}
	}
}

