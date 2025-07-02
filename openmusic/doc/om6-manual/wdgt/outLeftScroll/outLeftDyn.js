/** ############ */

function scSiRuleEnsureVisible(pIdNode, pPathContainer) {
	this.fId = pIdNode;
	this.fPath = pPathContainer;
	scOnLoads[scOnLoads.length] = this;
}
scSiRuleEnsureVisible.prototype.onResizedAnc = function(pOwnerNode, pEvent) {
	if(pEvent.phase==1 || pEvent.resizedNode == pOwnerNode) return;
	this.xEnsureVis();
}
scSiRuleEnsureVisible.prototype.onResizedDes = function(pOwnerNode, pEvent) {
	if(pEvent.phase==1) return;
	this.xEnsureVis();
}
scSiRuleEnsureVisible.prototype.xEnsureVis = function() {
	var vOffsetMiddle = scSiLib.getOffsetTop(this.fNode, this.fContainer) + this.fNode.offsetHeight/2;
	var vMiddle = this.fContainer.clientHeight / 2;
	this.fContainer.scrollTop = vOffsetMiddle - vMiddle;
}
scSiRuleEnsureVisible.prototype.onLoad = function() {
try {
	this.fNode = sc$(this.fId);
	if( ! this.fNode) return;
	this.fContainer = scPaLib.findNode(this.fPath, this.fNode);
	if( ! this.fContainer) return;
	scSiLib.addRule(this.fContainer, this);
	this.xEnsureVis();
} catch(e){scCoLib.util.logError("scSiRuleEnsureVisible.onLoad",e);}
}
scSiRuleEnsureVisible.prototype.loadSortKey = "SiZ";
scSiRuleEnsureVisible.prototype.ruleSortKey = "Z";


/** ############ */

function dkSiRuleResizeMnu(pIdMnu, pIdFra, pInsetH) {
	this.fIdMnu = pIdMnu;
	this.fIdFra = pIdFra;
	this.fInsetH = pInsetH;
	scOnLoads[scOnLoads.length] = this;
}
dkSiRuleResizeMnu.prototype.onResizedAnc = function(pOwnerNode, pEvent) {
	this.xResize();
}
dkSiRuleResizeMnu.prototype.onResizedDes = function(pOwnerNode, pEvent) {
}
dkSiRuleResizeMnu.prototype.xResize = function() {
	this.fNode.style.height = (Math.min(this.xClientHeight(),scSiLib.getContentHeight(this.fFra))-this.fInsetH)+"px";
}
dkSiRuleResizeMnu.prototype.xClientHeight = function() {
	if (window.innerHeight >= 0) {
		return window.innerHeight;
	} else if (document.documentElement) {
		return document.documentElement.clientHeight;
	} else if (document.body.clientHeight >= 0) {
		return document.body.clientHeight;
	} else {
		return 0;
	}
}
dkSiRuleResizeMnu.prototype.onLoad = function() {
	scCoLib.util.log("dkSiRuleResizeMnu.onload");
	try {
		this.fNode = sc$(this.fIdMnu);
		if( ! this.fNode) return;
		this.fFra = sc$(this.fIdFra);
		if( ! this.fFra) return;
		this.fNode.style.maxHeight = (scCoLib.isIE?"2000px":"inherit");
		scSiLib.addRule(this.fNode, this);
		this.xResize();
	} catch(e){scCoLib.util.logError("dkSiRuleResizeMnu.onLoad",e);}
}
dkSiRuleResizeMnu.prototype.loadSortKey = "SiA";
dkSiRuleResizeMnu.prototype.ruleSortKey = "AB";


/** ############ */

var menuScrollTiTask = {
	fCtPath : "ide:mnuScroll",
	fBtnUpPath : "ide:mnuFrmUp",
	fBtnDownPath : "ide:mnuFrmDown",
	fClassOffUp : "btnOff",
	fClassOffDown : "btnOff",
	fSpeed : 0,
	execTask : function(){
		try {
			if(this.fSpeed == 0) return false;
			this.fCt.scrollTop += this.fSpeed;
			return true;
		}catch(e){
			this.fSpeed = 0;
			return false;
		}
	},
	step: function(pPx) {
		try { this.fCt.scrollTop += pPx; }catch(e){}
	},
	checkBtn: function(){
		var vScrollTop = this.fCt.scrollTop;
		var vBtnUpOff = this.fBtnUp.className.indexOf(this.fClassOffUp);
		if(vScrollTop <= 0) {
			if(vBtnUpOff < 0) this.fBtnUp.className+= " "+this.fClassOffUp;
		} else {
			if(vBtnUpOff >= 0) this.fBtnUp.className = this.fBtnUp.className.substring(0, vBtnUpOff);
		}
		
		var vContentH = scSiLib.getContentHeight(this.fCt);
		var vBtnDownOff = this.fBtnDown.className.indexOf(this.fClassOffDown);
		if( vContentH - vScrollTop <= this.fCt.offsetHeight){
			if(vBtnDownOff < 0) this.fBtnDown.className+= " "+this.fClassOffDown;
		} else {
			if(vBtnDownOff >=0) this.fBtnDown.className = this.fBtnDown.className.substring(0, vBtnDownOff);
		}
	},
	onResizedAnc:function(pOwnerNode, pEvent){
		if(pEvent.phase==2) this.checkBtn();
	},
	ruleSortKey : "checkBtn",
	onLoad : function() {
		this.fCt = scPaLib.findNode(this.fCtPath);
		if(this.fClassOffUp && this.fClassOffDown) {
			this.fBtnUp = scPaLib.findNode(this.fBtnUpPath);
			this.fBtnDown = scPaLib.findNode(this.fBtnDownPath);
			this.checkBtn();
			scSiLib.addRule(this.fCt, this);
			this.fCt.onscroll = function(){menuScrollTiTask.checkBtn()};
		}
		try {
		if(scCoLib.isIE) this.fCt.onmousewheel = function(){menuScrollTiTask.step(Math.round(-event.wheelDelta/60))};
		else this.fCt.addEventListener('DOMMouseScroll', function(pEvent){menuScrollTiTask.step(pEvent.detail)}, false);
		}catch(e){scCoLib.util.logError("menuScrollTiTask.onLoad",e);} 
	},
	loadSortKey : "BB"
}
scOnLoads[scOnLoads.length] = menuScrollTiTask;


/** ############ */

var menuMgr = {
	fFraPath : "ide:tplo",
	fCoPath : "ide:tplc",
	fFrmPath : "ide:mnuFrm",
	fBtnUpPath : "ide:mnuFrmUp",
	fBtnDownPath : "ide:mnuFrmDown",
	fCtPath : "ide:mnuScroll",
	fClassTglOn : "mnuBtnTgl_on",
	fClassTglOff : "mnuBtnTgl_off",
	fClassFraOn : "tplo_out_yes",
	fClassFraOff : "tplo_out_no",
	fClassCoOn : "tplc_out_yes",
	fClassCoOff : "tplc_out_no",
	fOpen : true,

	mnuToggle : function(){
		if (menuMgr.fOpen){
			menuMgr.collapseM();
		} else {
			menuMgr.openM();
		}
		return false;
	},
	collapseM : function(){
		document.cookie = "mnuCollapse=true";
		menuMgr.fFrm.style.display = "none";
		menuMgr.fFra.className = menuMgr.fFra.className.replace(menuMgr.fClassFraOn,menuMgr.fClassFraOff);
		menuMgr.fCo.className = menuMgr.fCo.className.replace(menuMgr.fClassCoOn,menuMgr.fClassCoOff);
		menuMgr.fOpen = false;
		if (menuMgr.fTglBtn) { //The toggle button may not be created yet
			menuMgr.fTglBtn.className = menuMgr.fClassTglOff;
			menuMgr.fTglBtn.title = "Afficher le menu";
		}
	},
	openM : function(){
		document.cookie = "mnuCollapse=false";
		menuMgr.fFrm.style.display = "";
		menuMgr.fFra.className = menuMgr.fFra.className.replace(menuMgr.fClassFraOff,menuMgr.fClassFraOn);
		menuMgr.fCo.className = menuMgr.fCo.className.replace(menuMgr.fClassCoOff,menuMgr.fClassCoOn);
		menuMgr.fOpen = true;
		if (menuMgr.fTglBtn) { //The toggle button may not be created yet
			menuMgr.fTglBtn.className = menuMgr.fClassTglOn;
			menuMgr.fTglBtn.title = "Cacher le menu";
		}
	},
	
	onLoad : function() {
		scCoLib.util.log("menuMgr.onload");
		// The toggle button must be created by onload, not by init (called inline)
		// otherwise IE will randomly refuse to load the page  
		this.fTglBtn = document.createElement("a");
		this.fTglBtn.className = (menuMgr.fOpen?this.fClassTglOn:this.fClassTglOff);
		this.fTglBtn.href = "#";
		this.fTglBtn.onclick = this.mnuToggle;
		var vTi = document.createAttribute("title");
		vTi.nodeValue = (menuMgr.fOpen?"Cacher le menu":"Afficher le menu");
		this.fTglBtn.setAttributeNode(vTi);
		this.fFra.appendChild(this.fTglBtn);
	},
	loadSortKey : "AA",
	
	init : function() {
		scCoLib.util.log("menuMgr.init");
		this.fFra = scPaLib.findNode(this.fFraPath);
		this.fCo = scPaLib.findNode(this.fCoPath);
		this.fFrm = scPaLib.findNode(this.fFrmPath);
		this.fCt = scPaLib.findNode(this.fCtPath);
		this.fCt.style.overflow="hidden";
		this.fBtnUp = scPaLib.findNode(this.fBtnUpPath);
		this.fBtnUp.style.display="";
		this.fBtnDown = scPaLib.findNode(this.fBtnDownPath);
		this.fBtnDown.style.display="";
				
		if(document.cookie.indexOf("mnuCollapse=true")>=0) this.collapseM();
		else this.openM();
	}
}
scOnLoads[scOnLoads.length] = menuMgr;

