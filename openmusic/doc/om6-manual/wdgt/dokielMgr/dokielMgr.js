var dokielMgr = {
	fCbkPath : "des:.cbkClosed",

	fPathPlayer : ["des:.stepListPlayer"],
	fPathSteps : "chi:.slpStep",
	fPathOp : "anc:.op",
	fClsPreSlp : "slp",

	fPathScreen : ["des:.screenFra"],
	fPathZoneFra : "des:.screenZones",
	fPathZones : "des:.screenZone",
	fPathZoneLnks : "des:a.screenZoneLnkSmall|a.screenZoneLnk",
	fScrTtOpts : {STICKY:true,MAXWIDTH:500,MAXHEIGHT:500},
	fClsPreScr : "scr"
}
/** dokielMgr.init */
dokielMgr.init = function() {
	// Init players...
	this.fNavie6 = scCoLib.isIE && parseFloat(scCoLib.userAgent.substring(scCoLib.userAgent.indexOf("msie")+5)) < 7;
	
	// Close collapsable blocks that are closed by default.
	var vCbks = scPaLib.findNodes(this.fCbkPath);
	for (var i in vCbks) {
		var vTgl = scPaLib.findNode("des:a", vCbks[i]);
		if (vTgl) vTgl.onclick();
	}
	for(var i in this.fPathScreen) {
		var vScreens = scPaLib.findNodes(this.fPathScreen[i]);
		for(var j in vScreens) {
			var vScreen = vScreens[j];
			vScreen.fZones = scPaLib.findNodes(this.fPathZones,vScreen);
			for(var k in vScreen.fZones) {
				var vZone = vScreen.fZones[k];
				vZone.style.visibility = "hidden";
				vZone.style.position = "absolute";
				vZone.style.left = "-20000px";
				vZone.style.top = "-20000px";
			}
		}
	}
	scOnLoads[scOnLoads.length] = this;
}
/** dokielMgr.onLoad */
dokielMgr.onLoad = function() {
	scCoLib.util.log("dokielMgr.onLoad");
	this.xIniPlayers();
	this.xIniScreens();
}
/** dokielMgr.registerPlayer */
dokielMgr.registerPlayer = function(pPath) {
	this.fPathPlayer[this.fPathPlayer.length] = pPath;
}
/** dokielMgr.registerScreen */
dokielMgr.registerScreen = function(pPath) {
	this.fPathScreen[this.fPathScreen.length] = pPath;
}

/** dokielMgr.xBtnMgr - centralized button manager */
dokielMgr.xBtnMgr = function(pBtn) {
	scCoLib.util.log("dokielMgr.xBtnMgr: "+pBtn.fName);
	var vFra = pBtn.fFra;
	switch(pBtn.fName){
		case this.fClsPreSlp + "BtnStp":
			dokielMgr.xSlpStpMode(vFra);
			vFra.fBtnNxt.focus();
			break;
		case this.fClsPreSlp + "BtnLst":
			dokielMgr.xSlpLstMode(vFra);
			vFra.fBtnStep.focus();
			break;
		case this.fClsPreSlp + "BtnPrv":
			dokielMgr.xSlpPrv(vFra);break;
		case this.fClsPreSlp + "BtnNxt":
			dokielMgr.xSlpNxt(vFra);break;

		case this.fClsPreScr + "BtnLst":
			dokielMgr.xScrLstMode(vFra);break;
		case this.fClsPreScr + "BtnTt":
			dokielMgr.xScrTtMode(vFra);break;
	}
	return false;
}

/* ============================== Screen ============================== */
/** dokielMgr.xIniScreens */
dokielMgr.xIniScreens = function() {
	try{
		for(var i in this.fPathScreen) {
			var vScreens = scPaLib.findNodes(this.fPathScreen[i]);
			for(var j in vScreens) {
				var vScreen = vScreens[j];
				vScreen.fZoneFra = scPaLib.findNode(this.fPathZoneFra,vScreen);
				vScreen.fZoneLnks = scPaLib.findNodes(this.fPathZoneLnks,vScreen);
				for(var k in vScreen.fZoneLnks) {
					var vZoneLnk = vScreen.fZoneLnks[k];
					vZoneLnk.fScreen = vScreen;
					vZoneLnk.fOpt = scTooltipMgr.xInitOpts(this.fScrTtOpts);
					scTooltipMgr.xMakeTt(vZoneLnk, vScreen.fZones[k].innerHTML, "<span class='"+this.fClsPreScr+"TtLbl'>" + vZoneLnk.title + "</span><a class='"+this.fClsPreScr+"Tt_x' href='#' onclick='return scTooltipMgr.hideTooltip(true);'><span>X</span></a>" , this.fClsPreScr + "Tt", "");
					vZoneLnk.onclick = this.sScrLnkClick;
				}
				vScreen.className = vScreen.className + " " + this.fClsPreScr + "Fra";
				vScreen.fClass = vScreen.className;
				var vToolbar = this.xAddElt("div", vScreen, this.fClsPreScr + "Tools", null, null, vScreen.firstChild);
				vScreen.fBtnList = this.xAddBtn(vToolbar, vScreen, this.fClsPreScr + "BtnLst", this.xGetStr(10), this.xGetStr(11));
				vScreen.fBtnTt = this.xAddBtn(vToolbar, vScreen, this.fClsPreScr + "BtnTt", this.xGetStr(12), this.xGetStr(13));
				this.xScrTtMode(vScreen);

				for(var k in vScreen.fZones) {
					var vZone = vScreen.fZones[k];
					vZone.style.visibility = "";
					vZone.style.position = "";
					vZone.style.left = "";
					vZone.style.top = "";
				}
			}
		}
	} catch(e){scCoLib.util.logError("dokielMgr.xIniScreens::Error", e)}
}

/** dokielMgr.xScrLstMode */
dokielMgr.xScrLstMode = function(pScreen){
	scCoLib.util.log("dokielMgr.xScrLstMode");
	pScreen.fTtMode = false;
	pScreen.fBtnTt.style.display = "";
	pScreen.fBtnList.style.display = "none";
	pScreen.fZoneFra.style.display = "";
	pScreen.className = pScreen.fClass;
}

/** dokielMgr.xScrTtMode */
dokielMgr.xScrTtMode = function(pScreen){
	scCoLib.util.log("dokielMgr.xScrTtMode");
	pScreen.fTtMode = true;
	pScreen.fBtnTt.style.display = "none";
	pScreen.fBtnList.style.display = "";
	pScreen.fZoneFra.style.display = "none";
	pScreen.className = pScreen.fClass + " " + this.fClsPreScr + "FraAct";
}

/** dokielMgr.sScrLnkClick */
dokielMgr.sScrLnkClick = function(pEvt){
	scCoLib.util.log("dokielMgr.sScrLnkClick");
	if (this.fScreen.fTtMode){
		scTooltipMgr.showTooltip(this,pEvt);
		return false;
	} else {
		return true;
	}
}

/* ============================== StepList player ============================== */
/** dokielMgr.xIniPlayers */
dokielMgr.xIniPlayers = function() {
	if (this.fNavie6) return;
	try{
		for(var i in this.fPathPlayer) {
			var vPlayers = scPaLib.findNodes(this.fPathPlayer[i]);
			for(var j in vPlayers) {
				var vPlayer = vPlayers[j];
				vPlayer.fOp = scPaLib.findNode(this.fPathOp,vPlayer);
				vPlayer.fOp.fClass = vPlayer.fOp.className;
				vPlayer.fOver = this.xAddElt("div", vPlayer.fOp.parentNode, this.fClsPreSlp + "Over",null, null, vPlayer.fOp);
				vPlayer.fOver.style.display = "none";
				vPlayer.fSteps = scPaLib.findNodes(this.fPathSteps,vPlayer);
				for(var k in vPlayer.fSteps) {
					var vStep = vPlayer.fSteps[k];
				}
				vPlayer.className = vPlayer.className + " " + this.fClsPreSlp + "Fra";
				vPlayer.fClass = vPlayer.className;
				var vToolbar = this.xAddElt("div", vPlayer.parentNode, this.fClsPreSlp + "Tools", null, null, vPlayer);
				vPlayer.fBtnStep = this.xAddBtn(vToolbar, vPlayer, this.fClsPreSlp + "BtnStp", this.xGetStr(0), this.xGetStr(1));
				vPlayer.fBtnList = this.xAddBtn(vToolbar, vPlayer, this.fClsPreSlp + "BtnLst", this.xGetStr(2), this.xGetStr(3));
				this.xAddSep(vToolbar);
				vPlayer.fNavBtns = this.xAddElt("span", vToolbar, this.fClsPreSlp + "NavBtns");
				vPlayer.fBtnPrv = this.xAddBtn(vPlayer.fNavBtns, vPlayer, this.fClsPreSlp + "BtnPrv", this.xGetStr(4), this.xGetStr(5));
				this.xAddSep(vPlayer.fNavBtns);
				vPlayer.fBtnNxt = this.xAddBtn(vPlayer.fNavBtns, vPlayer, this.fClsPreSlp + "BtnNxt", this.xGetStr(6), this.xGetStr(7));
				this.xAddSep(vPlayer.fNavBtns);
				var vLblCount = this.xAddElt("span", vPlayer.fNavBtns, this.fClsPreSlp + "CountLbl");
				vLblCount.innerHTML = "<span>"+this.xGetStr(8)+"</span>"
				vPlayer.fCount = this.xAddElt("span", vPlayer.fNavBtns, this.fClsPreSlp + "CountTxt");
				this.xSlpLstMode(vPlayer);
			}
		}
	} catch(e){scCoLib.util.logError("dokielMgr.xIniPLayers::Error", e)}
}

/** dokielMgr.xSlpStpMode */
dokielMgr.xSlpStpMode = function(pPlayer){
	scCoLib.util.log("dokielMgr.xSlpStpMode");
	pPlayer.fBtnStep.style.display = "none";
	pPlayer.fBtnList.style.display = "";
	pPlayer.fNavBtns.style.display = "";
	pPlayer.fIdx = -1;
	for(var i in pPlayer.fSteps) {
		var vStep = pPlayer.fSteps[i];
		vStep.style.display = "none";
		vStep.style.position = "";
		vStep.style.visibility = "";
		vStep.style.left = "";
		vStep.style.top = "";
	}
	pPlayer.fOp.className = pPlayer.fOp.fClass + " " + this.fClsPreSlp + "OpAct";
	pPlayer.className = pPlayer.fClass + " " + this.fClsPreSlp + "FraAct";
	pPlayer.fOver.style.display = "";
	this.xSlpNxt(pPlayer);
}

/** dokielMgr.xSlpLstMode */
dokielMgr.xSlpLstMode = function(pPlayer){
	scCoLib.util.log("dokielMgr.xSlpLstMode");
	pPlayer.fBtnStep.style.display = "";
	pPlayer.fBtnList.style.display = "none";
	pPlayer.fNavBtns.style.display = "none";
	for(var i in pPlayer.fSteps) {
		var vStep = pPlayer.fSteps[i];
		vStep.style.display = "";
		vStep.style.position = "";
		vStep.style.visibility = "";
		vStep.style.left = "";
		vStep.style.top = "";
	}
	pPlayer.fOp.className = pPlayer.fOp.fClass;
	pPlayer.className = pPlayer.fClass;
	pPlayer.fOver.style.display = "none";
}

/** dokielMgr.xSlpPrv */
dokielMgr.xSlpPrv = function(pPlayer){
	scCoLib.util.log("dokielMgr.xSlpPrv");
	if (pPlayer.fIdx <= 0) return;
	this.xSlpGotoStep(pPlayer,--pPlayer.fIdx);
}

/** dokielMgr.xSlpNxt */
dokielMgr.xSlpNxt = function(pPlayer){
	scCoLib.util.log("dokielMgr.xSlpNxt");
	if (pPlayer.fIdx >= pPlayer.fSteps.length-1) return;
	this.xSlpGotoStep(pPlayer,++pPlayer.fIdx);
}

/** dokielMgr.xSlpGotoStep */
dokielMgr.xSlpGotoStep = function(pPlayer, pIdx){
	scCoLib.util.log("dokielMgr.xSlpGotoStep: "+pIdx);
	for(var i in pPlayer.fSteps) {
		var vStep = pPlayer.fSteps[i];
		vStep.style.display = (pIdx == i ? "" : "none");
	}
	pPlayer.fBtnPrv.style.visibility = (pPlayer.fIdx <= 0 ? "hidden" : "");
	pPlayer.fBtnNxt.style.visibility = (pPlayer.fIdx >= pPlayer.fSteps.length-1 ? "hidden" : "");
	pPlayer.fCount.innerHTML = "<span>"+(pPlayer.fIdx+1)+"/"+pPlayer.fSteps.length+"</span>";
	if (pPlayer.fIdx >= pPlayer.fSteps.length-1) pPlayer.fBtnList.focus();
}

/* ============================== Utils ============================== */
/** dokielMgr.xAddSep : Add a simple textual separator : " | ". */
dokielMgr.xAddSep = function(pParent){
	var vSep = document.createElement("span");
	vSep.className = this.fClsPreSlp + "Sep";
	vSep.innerHTML = " | "
	pParent.appendChild(vSep);
}

/** dokielMgr.xAddElt : Add an HTML element to a parent node. */
dokielMgr.xAddElt = function(pName, pParent, pClass, pNoDisplay, pHidden, pNxtSib){
	var vElt;
	if(scCoLib.isIE && pName.toLowerCase() == "iframe") {
		var vEltHolder = pParent.ownerDocument.createElement("div");
		if (pNxtSib) pParent.insertBefore(vEltHolder,pNxtSib)
		else pParent.appendChild(vEltHolder);
		vEltHolder.innerHTML = "<iframe scrolling='no' frameborder='0'></iframe>";
		vElt = vEltHolder.firstChild;
	} else {
		vElt = pParent.ownerDocument.createElement(pName);
		if (pNxtSib) pParent.insertBefore(vElt,pNxtSib)
		else pParent.appendChild(vElt);
	}
	if (pClass) vElt.className = pClass;
	if (pNoDisplay) vElt.style.display = "none";
	if (pHidden) vElt.style.visibility = "hidden";
	return vElt;
}
/** dokielMgr.xAddBtn : Add a HTML button to a parent node. */
dokielMgr.xAddBtn = function(pParent,pFra,pClass,pCapt,pTitle,pNoCmd){
	var vBtn = document.createElement("a");
	vBtn.className = pClass;
	vBtn.fName = pClass;
	vBtn.href = "#";
	vBtn.target = "_self";
	if (!pNoCmd) vBtn.onclick=function(){return dokielMgr.xBtnMgr(this);}
	vBtn.setAttribute("title",pTitle);
	vBtn.innerHTML="<span>"+pCapt+"</span>";
	vBtn.fFra = pFra;
	pParent.appendChild(vBtn);
	return vBtn;
}
/** dokielMgr.xGetStr : Reteive a string. */
dokielMgr.xGetStr = function(pStrId) {
	return this.fStrings[pStrId];
}
dokielMgr.loadSortKey = "ZZ";

