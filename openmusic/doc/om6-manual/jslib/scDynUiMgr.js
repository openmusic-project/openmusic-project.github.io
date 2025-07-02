
 
var scDynUiMgr = {


	collBlkToggle: function(pTitle, pCo, pClassOpen, pClassClosed) {
		if (pTitle.nodeType != 1 || pCo.nodeType != 1){
			scCoLib.util.log("scDynUiMgr.collBlkToggle error : pTitle or pCo not an element.");
			return null;
		}
		vOldStateClosed = pCo.style.display == 'none';
		pCo.style.display = vOldStateClosed ? '' : 'none';
		pTitle.className = vOldStateClosed ? pClassOpen : pClassClosed;
		if (vOldStateClosed) for (i in this.collBlk.fOpenListeners) try{this.collBlk.fOpenListeners[i](pCo);}catch(e){}
		else for (i in this.collBlk.fCloseListeners) try{this.collBlk.fCloseListeners[i](pCo);}catch(e){}
		if (scCoLib.isIE) {
			var vTags = pCo.getElementsByTagName("IFRAME");
			if (vOldStateClosed) {
				for(var i=0; i<vTags.length; i++) vTags[i].src = vTags[i].bkpSrc ? vTags[i].bkpSrc : vTags[i].src;
			} else {
				for(var i=0; i<vTags.length; i++) {
					vTags[i].bkpSrc = vTags[i].src;
					vTags[i].src = "";
				}
			}
		}
		return vOldStateClosed;
		if("scSiLib" in window) scSiLib.fireResizedNode(pCo);
	},
	

	displaySubWindow: function(pAnc,pUrl,pName,pOpt) {
		scCoLib.util.log("scDynUiMgr.displaySubWindow("+pUrl+","+pName+","+pOpt+")");
		var vOpt = pOpt || {};

		if (!vOpt.IMBR && window.frameElement && window.frameElement.scSubWin) {
			window.location = pUrl;
			return;
		}
		if (typeof pAnc.fSwId == "undefined") this.subWindow.xInitSw(pAnc, pName, vOpt);
		this.subWindow.xShow(pAnc.fSwId,pUrl);
		for (i in this.subWindow.fOpenListeners) try{this.subWindow.fOpenListeners[i](pAnc.fSwId);}catch(e){}
	},

	hideSubWindow: function(pId) {
		scCoLib.util.log("scDynUiMgr.hideSubWindow("+pId+")");
		var vCurrSw = scDynUiMgr.subWindow.fSubWins[pId];
		if (vCurrSw){
			vCurrSw.fOver.style.visibility = "hidden";
			vCurrSw.style.visibility = "hidden";
			vCurrSw.fFra.src = "";
			for (i in this.subWindow.fCloseListeners) try{this.subWindow.fCloseListeners[i](pId);}catch(e){}
		}
	}
}

scDynUiMgr.collBlk = {
	fOpenListeners : new Array(),
	fCloseListeners : new Array(),
	addOpenListener: function(pFunc) {this.fOpenListeners.push(pFunc)},
	addCloseListener: function(pFunc) {this.fCloseListeners.push(pFunc)}
}


scDynUiMgr.subWindow = {
	fZIndex : 1000,
	fSubWins : [],
	fOpenListeners : new Array(),
	fCloseListeners : new Array(),
	fOnLoadListeners : new Array(),
	addOpenListener: function(pFunc) {this.fOpenListeners.push(pFunc)},
	addCloseListener: function(pFunc) {this.fCloseListeners.push(pFunc)},
	addOnLoadListener: function(pFunc) {this.fOnLoadListeners.push(pFunc)},
	xInitSw: function(pAnc,pName,pOpt) {
		var vSubWinTi = pOpt.SUBWINTI || "";
		var vCloseBtnCo = pOpt.CLOSEBTNCO || "X";
		var vCloseBtnTi = pOpt.CLOSEBTNTI || "";
		var vBody = this.xGetDoc(pAnc).body;
		var vCont = pOpt.ANCHORPATH ? scPaLib.findNode(pOpt.ANCHORPATH, (pOpt.ANCHORCTX ? pOpt.ANCHORCTX : pAnc)) || vBody : vBody;
		var vId = scDynUiMgr.subWindow.fSubWins.length;
		var vWin = this.xAddElt("div",vCont,this.xBuildCls(pName,"win"),true,true);
		vWin.fAnc = pAnc;
		vWin.fOpt = pOpt;
		vWin.fOver = this.xAddElt("div",vCont,this.xBuildCls(pName,"over"),true,true,vWin);
		var vTi = this.xAddElt("div",vWin,this.xBuildCls(pName,"ti"));
		var vBtnCls = this.xAddElt("a",vTi,this.xBuildCls(pName,"x"));
		if (vCloseBtnTi) vBtnCls.title = vCloseBtnTi;
		vBtnCls.href = "#";
		vBtnCls.onclick = function() {
			scDynUiMgr.hideSubWindow(vId);
			return false;
		}		
		var vBtnClsCo = this.xAddElt("span",vBtnCls);
		vBtnClsCo.innerHTML = vCloseBtnCo;
		vWin.fTi = this.xAddElt("span",vTi);
		vWin.fTi.innerHTML = vSubWinTi;
		var vCo = this.xAddElt("div",vWin,this.xBuildCls(pName,"co"));
		vWin.fFra = this.xAddElt("iframe",vCo,this.xBuildCls(pName,"fra"));
		vWin.fFra.scSubWin = true;
		vWin.fFra.fWin = vWin;
		vWin.fFra.setSubWindowTitle = function(pTitle){
			scDynUiMgr.subWindow.fSubWins[vId].fTi.innerHTML = pTitle;
			scDynUiMgr.subWindow.fSubWins[vId].fFra.title = pTitle;
		}
		vWin.fFra.hideSubWindow = function(){
			scDynUiMgr.hideSubWindow(vId);
		}
		if(scCoLib.isIE) vWin.fFra.onreadystatechange = scDynUiMgr.subWindow.sOnLoad;
		else vWin.fFra.onload = scDynUiMgr.subWindow.sOnLoad;
		this.fSubWins[vId] = vWin;
		pAnc.fSwId = vId;
	},
	xShow: function(pId,pUrl) {
		var vCurrSw = this.fSubWins[pId];
		vCurrSw.fFra.src = pUrl;
		vCurrSw.fOver.style.zIndex = this.fZIndex++;
		vCurrSw.fOver.style.visibility = "visible";
		vCurrSw.style.zIndex = this.fZIndex++;
		vCurrSw.style.visibility = "visible";
	},
	xAddElt : function(pName, pParent, pClassName, pPosAbs, pHidden, pNxtSib){
		var vElt;
		if(scCoLib.isIE && pName.toLowerCase() == "iframe") {
			var vFrmHolder = this.xGetDoc(pParent).createElement("div");
			pParent.appendChild(vFrmHolder);
			vFrmHolder.innerHTML = "<iframe marginheight='0' marginwidth='0' frameborder='0' title=''></iframe>";
			vElt = vFrmHolder.firstChild;
			if (pNxtSib) pParent.insertBefore(vElt,pNxtSib)
			else pParent.appendChild(vElt);
			pParent.removeChild(vFrmHolder);
		} else {
			vElt = this.xGetDoc(pParent).createElement(pName);
			if(pName.toLowerCase() == "iframe") vElt.setAttribute("frameborder","0");
			if (pNxtSib) pParent.insertBefore(vElt,pNxtSib)
			else pParent.appendChild(vElt);
		}
		if (pClassName) vElt.className = pClassName;
		if (pPosAbs) vElt.style.position = "absolute";
		if (pHidden) vElt.style.visibility = "hidden";
		return vElt;
	},
	xBuildCls: function(pCls, pSufx) {
		var vCls = pCls.split(" ");
		var vRetCls = "";
		for(var i=0; i<vCls.length; i++) vRetCls += vCls[i]+(pSufx ? ('_'+pSufx) : '')+' ';
		return(vRetCls);
	},
	xGetDoc: function(pElt) {
		if(pElt.ownerDocument) return pElt.ownerDocument;
		else if (pElt.document) return pElt.document;
		else return document;
	},
	sOnLoad: function() {
		if(scCoLib.isIE && this.readyState != "complete") return;
		for (i in scDynUiMgr.subWindow.fOnLoadListeners) try{scDynUiMgr.subWindow.fOnLoadListeners[i](this);}catch(e){}
	}
}