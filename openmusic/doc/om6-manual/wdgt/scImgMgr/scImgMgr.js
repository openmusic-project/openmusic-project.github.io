/**
 * LICENCE[[
 * Version: MPL 1.1/GPL 2.0/LGPL 2.1/CeCILL 2.O
 *
 * The contents of this file are subject to the Mozilla Public License Version
 * 1.1 (the "License"); you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at http://www.mozilla.org/MPL/
 *
 * Software distributed under the License is distributed on an "AS IS" basis,
 * WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License
 * for the specific language governing rights and limitations under the
 * License.
 *
 * The Original Code is kelis.fr code.
 *
 * The Initial Developer of the Original Code is 
 * samuel.monsarrat@kelis.fr
 *
 * Portions created by the Initial Developer are Copyright (C) 2009-2010
 * the Initial Developer. All Rights Reserved.
 *
 * Contributor(s):
 *
 * Alternatively, the contents of this file may be used under the terms of
 * either of the GNU General Public License Version 2 or later (the "GPL"),
 * or the GNU Lesser General Public License Version 2.1 or later (the "LGPL"),
 * or the CeCILL Licence Version 2.0 (http://www.cecill.info/licences.en.html),
 * in which case the provisions of the GPL, the LGPL or the CeCILL are applicable
 * instead of those above. If you wish to allow use of your version of this file
 * only under the terms of either the GPL, the LGPL or the CeCILL, and not to allow
 * others to use your version of this file under the terms of the MPL, indicate
 * your decision by deleting the provisions above and replace them with the notice
 * and other provisions required by the GPL, the LGPL or the CeCILL. If you do not
 * delete the provisions above, a recipient may use your version of this file under
 * the terms of any one of the MPL, the GPL, the LGPL or the CeCILL.
 * ]]LICENCE
 */

/** SCENARI Dynamic image manager  */
var scImgMgr = {
	fPathAnim : [],
	fPathGal : [],
	fPathZoom : [],
	fAnims : null,
	fGals : null,
	fZooms : null,
	fPathPgeFra : "des:div",
	fCurrItem : null,
	fOverAlpha : .6,
	fDefaultStep : 3 * 1000,
	fMinStep : 1 * 100,
	fMaxStep : 10 * 1000,
	fTypAnm : "scImgAnm",
	fTypZm : "scImgZm",
	fTypGal : "scImgGal"
}
/** scImgMgr.init. */
scImgMgr.init = function() {
	this.fNavie6 = scCoLib.isIE && parseFloat(scCoLib.userAgent.substring(scCoLib.userAgent.indexOf("msie")+5)) < 7;
	// Init image animations...
	for(var i in this.fPathAnim) {
		var vAnims = scPaLib.findNodes(this.fPathAnim[i].fPath);
		for(var j in vAnims) {
			var vAnim = vAnims[j];
			try {
				var vImgs = scPaLib.findNodes("chi:",vAnim);
				for(var k in vImgs) {
					if (k>0) {
						vImgs[k].style.visibility = "hidden";
						vImgs[k].style.position = "absolute";
						vImgs[k].style.left = "-2000px";
						vImgs[k].style.top = "-2000px";
					}
				}
			} catch(e){
				scCoLib.util.logError("scImgMgr.init::Anim init Error", e);
			}
		}
	}
	//Register listeners...
	if ("scDynUiMgr" in window) {
		scDynUiMgr.collBlk.addOpenListener(this.sCollBlkOpen);
		scDynUiMgr.collBlk.addCloseListener(this.sCollBlkClose);
	}
}
/** scImgMgr.registerAnimation.
 * @param pPathAnim scPaLib path vers les animations.
 * @param pOpts options de l'animation.
 *           toolbar : 0 = pas de toolbar / 1 = toolbar flotant / 2 toolbar permanent
 *           auto : true = démarrage auto
 *           loop : true = lecture en boucle
 *           lpBtn : true = bouton ctrl lecture en boucle
 *           speed : vitesse de défilement en ms
 *           spdBtns : true = boutons de contrôle de la vitesse
 *           counter : true = compteur d'image
 *           soft : true = fondu entre images
 *           extBtns : true = boutons supplémentaires
 *           clsPre : préfix de classe CSS
 */
scImgMgr.registerAnimation = function(pPathAnim, pOpts) {
	var vAnim = new Object;
	vAnim.fPath = pPathAnim;
	vAnim.fOpts = (typeof pOpts == "undefined" ? {toolbar:1,auto:true,loop:true,lpBtn:false,speed:this.fDefaultStep,spdBtns:false,counter:false,soft:true,extBtns:false,clsPre:this.fTypAnm} : pOpts);
	vAnim.fOpts.toolbar = (typeof vAnim.fOpts.toolbar == "undefined" ? 1 : vAnim.fOpts.toolbar);
	vAnim.fOpts.auto = (typeof vAnim.fOpts.auto == "undefined" ? true : vAnim.fOpts.auto);
	vAnim.fOpts.loop = (typeof vAnim.fOpts.loop == "undefined" ? true : vAnim.fOpts.loop);
	vAnim.fOpts.lpBtn = (typeof vAnim.fOpts.lpBtn == "undefined" ? false : vAnim.fOpts.lpBtn);
	vAnim.fOpts.speed = (typeof vAnim.fOpts.speed == "undefined" ? this.fDefaultStep : vAnim.fOpts.speed);
	vAnim.fOpts.spdBtns = (typeof vAnim.fOpts.spdBtns == "undefined" ? false : vAnim.fOpts.spdBtns);
	vAnim.fOpts.counter = (typeof vAnim.fOpts.counter == "undefined" ? false : vAnim.fOpts.counter);
	vAnim.fOpts.soft = (typeof vAnim.fOpts.soft == "undefined" ? true : vAnim.fOpts.soft);
	vAnim.fOpts.extBtns = (typeof vAnim.fOpts.extBtns == "undefined" ? false : vAnim.fOpts.extBtns);
	vAnim.fOpts.clsPre = (typeof vAnim.fOpts.clsPre == "undefined" ? this.fTypAnm : vAnim.fOpts.clsPre);
	this.fPathAnim[this.fPathAnim.length] = vAnim;
}
/** scImgMgr.registerGallery.
 * @param pPathGal scPaLib path vers les zooms.
 * @param pOpts options de la gallerie.
 *           clsPre : préfix de classe CSS
 */
scImgMgr.registerGallery = function(pPathGal, pOpts) {
	var vGal = new Object;
	vGal.fPath = pPathGal;
	vGal.fOpts = (typeof pOpts == "undefined" ? {clsPre:this.fTypGal} : pOpts);
	vGal.fOpts.clsPre = (typeof vGal.fOpts.clsPre == "undefined" ? this.fTypGal : vGal.fOpts.clsPre);
	this.fPathGal[this.fPathGal.length] = vGal;
}
/** scImgMgr.registerZoom.
 * @param pPathZoom scPaLib path vers les zooms.
 * @param pOpts options du zoom.
 *           toolbar : 0 = pas de toolbar / 1 = toolbar
 *           type : img = zoom d'image / iframe = zoom chargé dans une iframe
 *           clsPre : préfix de classe CSS
 */
scImgMgr.registerZoom = function(pPathZoom, pOpts) {
	var vZm = new Object;
	vZm.fPath = pPathZoom;
	vZm.fOpts = (typeof pOpts == "undefined" ? {toolbar:0,type:"img",clsPre:this.fTypZm} : pOpts);
	vZm.fOpts.type = (typeof vZm.fOpts.type == "undefined" ? "img" : vZm.fOpts.type);
	vZm.fOpts.toolbar = (typeof vZm.fOpts.toolbar == "undefined" ? 1 : vZm.fOpts.toolbar);
	vZm.fOpts.clsPre = (typeof vZm.fOpts.clsPre == "undefined" ? this.fTypZm : vZm.fOpts.clsPre);
	this.fPathZoom[this.fPathZoom.length] = vZm;
}
/** scImgMgr.setPathPgeFra. */
scImgMgr.setPathPgeFra = function(pPathPgeFra) {
	this.fPathPgeFra = pPathPgeFra;
}

/** scImgMgr.onLoad - called by the scenari framework, inits the manager. */
scImgMgr.onLoad = function() {
	scCoLib.util.log("scImgMgr.onLoad");
	this.fPgeFra = scPaLib.findNode(scImgMgr.fPathPgeFra);
	// Load image galleries...
	this.xInitSss(document.body);
	// Load image zooms...
	this.xInitZms(document.body);
	// Load image animations...
	this.xInitAnims(document.body);
}

/** scImgMgr.loading. */
scImgMgr.loading = function() {
	alert(scImgMgr.xGetStr(10));
}
/** scImgMgr.sCollBlkOpen - scDynUiMgr collapsable block callback function */
scImgMgr.sCollBlkOpen = function(pCo) {
	// Reinit image animations...
	if (!pCo.fAnimInitDone){
		scImgMgr.xInitAnims(pCo);
		pCo.fAnimInitDone = true;
	}
}
/** scImgMgr.sCollBlkClose - scDynUiMgr collapsable block callback function */
scImgMgr.sCollBlkClose = function(pCo) {
}

/* ================== global managers =====================*/
/** scImgMgr.xBtnMgr - centralized button manager */
scImgMgr.xBtnMgr = function(pBtn) {
	scCoLib.util.log("scImgMgr.xBtnMgr: "+pBtn.fName);
	var vObj = pBtn.fObj;
	switch(pBtn.fName){
		case this.fTypZm+"Zm":
			scImgMgr.xOpenZm(pBtn);break;
		case this.fTypZm+"BtnCls":
		case this.fTypZm+"BtnImgCls":
			scImgMgr.xClsZm(vObj);break;
			
		case this.fTypGal+"Pv":
			scImgMgr.xOpenSs(vObj,pBtn);break;
		case this.fTypGal+"BtnPrv":
			if (scImgMgr.fCurrItem.fSsAutoPly) scImgMgr.xPseSs(vObj);
			scImgMgr.xPrvSs(vObj);break;
		case this.fTypGal+"BtnNxt":
			if (scImgMgr.fCurrItem.fSsAutoPly) scImgMgr.xPseSs(vObj);
			scImgMgr.xNxtSs(vObj);break;
		case this.fTypGal+"BtnCls":
			scImgMgr.xClsSs(vObj);break;
		case this.fTypGal+"BtnPly":
			scImgMgr.xPlySs(vObj);break;
		case this.fTypGal+"BtnPse":
			scImgMgr.xPseSs(vObj);break;
			
		case this.fTypAnm+"BtnPrv":
			scImgMgr.xAnimCtrlOn(vObj);
			if (vObj.fAutoPly) scImgMgr.xPseAnm(vObj);
			scImgMgr.xPrvAnm(vObj);break;
		case this.fTypAnm+"BtnNxt":
			scImgMgr.xAnimCtrlOn(vObj);
			if (vObj.fAutoPly) scImgMgr.xPseAnm(vObj);
			scImgMgr.xNxtAnm(vObj);break;
		case this.fTypAnm+"BtnSrt":
			scImgMgr.xAnimCtrlOn(vObj);
			if (vObj.fAutoPly) scImgMgr.xPseAnm(vObj);
			scImgMgr.xSrtAnm(vObj);break;
		case this.fTypAnm+"BtnEnd":
			scImgMgr.xAnimCtrlOn(vObj);
			if (vObj.fAutoPly) scImgMgr.xPseAnm(vObj);
			scImgMgr.xEndAnm(vObj);break;
		case this.fTypAnm+"BtnPly":
		case this.fTypAnm+"BtnInitPly":
			scImgMgr.xAnimCtrlOn(vObj);
			scImgMgr.xPlyAnm(vObj);break;
		case this.fTypAnm+"BtnPse":
			scImgMgr.xAnimCtrlOn(vObj);
			scImgMgr.xPseAnm(vObj);break;
		case this.fTypAnm+"BtnSpdDwn":
			scImgMgr.xAnimCtrlOn(vObj);
			scImgMgr.xSetAnmSpd(vObj,+200);break;
		case this.fTypAnm+"BtnSpdUp":
			scImgMgr.xAnimCtrlOn(vObj);
			scImgMgr.xSetAnmSpd(vObj,-200);break;
		case this.fTypAnm+"BtnLp":
			scImgMgr.xAnimCtrlOn(vObj);
			scImgMgr.xSetAnmLp(vObj,pBtn.checked);return true;
	}
	return false;
}
/** scImgMgr.xKeyMgr - centralized keyboard manager */
scImgMgr.xKeyMgr = function(pEvent){
	var vEvent = pEvent || window.event;
	var vCharCode = vEvent.which || vEvent.keyCode;
	scCoLib.util.log("scImgMgr.xKeyMgr: "+vCharCode);
	if (!scImgMgr.fCurrItem) return;
	switch(vCharCode){
		case 34://pg_dwn
		case 39://left
			if (scImgMgr.fCurrItem.fName == "gal") {
				if (scImgMgr.fCurrItem.fSsAutoPly) scImgMgr.xPseSs(scImgMgr.fCurrItem);
				scImgMgr.xNxtSs(scImgMgr.fCurrItem);
			}
			return false;
		case 8://bksp
		case 33://pg_up
		case 37://right
			if (scImgMgr.fCurrItem.fName == "gal") {
				if (scImgMgr.fCurrItem.fSsAutoPly) scImgMgr.xPseSs(scImgMgr.fCurrItem);
				scImgMgr.xPrvSs(scImgMgr.fCurrItem);
			}
			return false;
		case 27://escape
			if (scImgMgr.fCurrItem.fName == "gal") {
				scImgMgr.xClsSs(scImgMgr.fCurrItem);
			} else {
				scImgMgr.xClsZm(scImgMgr.fCurrItem);
			}
			return false;
		case 32://space
		case 80:// p
			if (scImgMgr.fCurrItem.fName == "gal") {
				if(scImgMgr.fCurrItem.fSsAutoPly) scImgMgr.xPseSs(scImgMgr.fCurrItem);
				else scImgMgr.xPlySs(scImgMgr.fCurrItem);
			}
			return false;
	}
}

/* ================== Animation manager =====================*/
scImgMgr.xInitAnims = function(pCo) {
	scCoLib.util.log("scImgMgr.xInitAnims");
	for(var i in this.fPathAnim) {
		var vAnims = scPaLib.findNodes(this.fPathAnim[i].fPath, pCo);
		for(var j in vAnims) this.xInitAnim(vAnims[j],this.fPathAnim[i].fOpts,this.fTypAnm+i+j);
	}
}
scImgMgr.xInitAnim = function(pAnim,pOpts,pId) {
	try {
		if (this.xIsVisible(pAnim)){
			pAnim.fImgs = scPaLib.findNodes("chi:",pAnim);
			pAnim.fOpts = pOpts;
			var vMaxHeight = 0;
			var vMaxWidth = 0;
			for(var k in pAnim.fImgs) {
				var vImg = pAnim.fImgs[k];
				vImg.fHeight = vImg.clientHeight;
				vImg.fWidth = scPaLib.findNode("des:img",vImg).width;
				vMaxHeight = Math.max(vMaxHeight,vImg.fHeight);
				vMaxWidth = Math.max(vMaxWidth,vImg.fWidth);
				vImg.style.position = "absolute";
				vImg.style.visibility = "hidden";
				vImg.style.top = "0";
				vImg.style.left = "0";
				vImg.style.width = "100%";
			}
			pAnim.style.height = vMaxHeight+0.01*vMaxHeight + "px";
			pAnim.style.width = vMaxWidth+0.01*vMaxWidth + "px";
			for(var k in pAnim.fImgs) {
				var vImg = pAnim.fImgs[k];
				vImg.style.marginTop = (vMaxHeight - vImg.fHeight)/2 + "px";
			}
			if (!pOpts.auto && pOpts.toolbar<2) {
				pAnim.fBtnInitPly = scImgMgr.xAddBtn(pAnim,pAnim,this.fTypAnm,"BtnInitPly",scImgMgr.xGetStr(16),scImgMgr.xGetStr(17));
			}
			if (pOpts.toolbar > 0){
				pAnim.fCtrl = scImgMgr.xAddElt("div",(pOpts.toolbar == 1 ? pAnim : pAnim.parentNode),pOpts.clsPre + "Ctrl");
				if (pOpts.extBtns) {
					pAnim.fBtnSrt = scImgMgr.xAddBtn(pAnim.fCtrl,pAnim,this.fTypAnm,"BtnSrt",scImgMgr.xGetStr(20),scImgMgr.xGetStr(21));
					scImgMgr.xAddSep(pAnim.fCtrl);
				}
				pAnim.fBtnPrv = scImgMgr.xAddBtn(pAnim.fCtrl,pAnim,this.fTypAnm,"BtnPrv",scImgMgr.xGetStr(12),scImgMgr.xGetStr(13));
				scImgMgr.xAddSep(pAnim.fCtrl);
				pAnim.fBtnPly = scImgMgr.xAddBtn(pAnim.fCtrl,pAnim,this.fTypAnm,"BtnPly",scImgMgr.xGetStr(16),scImgMgr.xGetStr(17));
				pAnim.fBtnPly.style.display = (pOpts.auto ? "none" : "");
				pAnim.fBtnPse = scImgMgr.xAddBtn(pAnim.fCtrl,pAnim,this.fTypAnm,"BtnPse",scImgMgr.xGetStr(18),scImgMgr.xGetStr(19));
				pAnim.fBtnPse.style.display = (pOpts.auto ? "" : "none");
				scImgMgr.xAddSep(pAnim.fCtrl);
				pAnim.fBtnNxt = scImgMgr.xAddBtn(pAnim.fCtrl,pAnim,this.fTypAnm,"BtnNxt",scImgMgr.xGetStr(14),scImgMgr.xGetStr(15));
				if (pOpts.extBtns) {
					scImgMgr.xAddSep(pAnim.fCtrl);
					pAnim.fBtnEnd = scImgMgr.xAddBtn(pAnim.fCtrl,pAnim,this.fTypAnm,"BtnEnd",scImgMgr.xGetStr(22),scImgMgr.xGetStr(23));
				}
				if (pOpts.spdBtns) {
					scImgMgr.xAddSep(pAnim.fCtrl);
					pAnim.fBtnSpdDwn = scImgMgr.xAddBtn(pAnim.fCtrl,pAnim,this.fTypAnm,"BtnSpdDwn","-",scImgMgr.xGetStr(25));
					scImgMgr.xAddElt("span",pAnim.fCtrl,pOpts.clsPre + "Spd").innerHTML = " "+scImgMgr.xGetStr(24)+" ";
					pAnim.fBtnSpdUp = scImgMgr.xAddBtn(pAnim.fCtrl,pAnim,this.fTypAnm,"BtnSpdUp","+",scImgMgr.xGetStr(25));
				}
				if (pOpts.lpBtn) {
					scImgMgr.xAddSep(pAnim.fCtrl);
					pAnim.fBtnLp = scImgMgr.xAddElt("input",pAnim.fCtrl,pOpts.clsPre + "BtnLp");
					pAnim.fBtnLp.fName = this.fTypAnm + "BtnLp";
					pAnim.fBtnLp.setAttribute("type","checkbox");
					pAnim.fBtnLp.setAttribute("id",pId);
					pAnim.fBtnLp.setAttribute("title",scImgMgr.xGetStr(29));
					if (pOpts.loop){
						var vAttChk = document.createAttribute("checked"); // For IE the attr checked must be created
						vAttChk.nodeValue = "true";
						pAnim.fBtnLp.setAttributeNode(vAttChk);
					}
					pAnim.fBtnLp.fObj = pAnim;
					pAnim.fBtnLp.onclick = function(){return scImgMgr.xBtnMgr(this);}
					var vLblLp = scImgMgr.xAddElt("label",pAnim.fCtrl,pOpts.clsPre + "LpLbl");
					vLblLp.innerHTML = scImgMgr.xGetStr(28);
					vLblLp.setAttribute("for",pId);
					vLblLp.setAttribute("title",scImgMgr.xGetStr(29));
				}
				if (pOpts.counter) {
					scImgMgr.xAddSep(pAnim.fCtrl);
					scImgMgr.xAddElt("span",pAnim.fCtrl,pOpts.clsPre + "CtrLbl").innerHTML = scImgMgr.xGetStr(26) + " ";
					pAnim.fCtrIdx = scImgMgr.xAddElt("span",pAnim.fCtrl,pOpts.clsPre + "CtrIdx");
					pAnim.fCtrIdx.innerHTML = "1";
					scImgMgr.xAddElt("span",pAnim.fCtrl,pOpts.clsPre + "CtrSep").innerHTML = "/";
					scImgMgr.xAddElt("span",pAnim.fCtrl,pOpts.clsPre + "CtrCnt").innerHTML = pAnim.fImgs.length;
				}
				if (pOpts.toolbar == 1) {
					pAnim.onmouseover = function () {scImgMgr.xAnimCtrlOn(pAnim);}
					pAnim.fCtrl.style.visibility = "hidden";
					pAnim.fCtrl.fOn = false;
				}
			}
			pAnim.fImgs[0].style.visibility = "";
			pAnim.fCurrImgIdx = 0;
			pAnim.fStep = pOpts.speed;
			pAnim.fAutoPly = pOpts.auto;
			pAnim.fSoft = pOpts.soft;
			pAnim.fLoop = pOpts.loop;
			if (pAnim.fAutoPly && pAnim.fImgs.length > 1) pAnim.fNxtImgProc = window.setTimeout(function(){scImgMgr.xAutoAnim(pAnim)}, pAnim.fStep);
			//Reinit zooms under pAnim
			this.xInitZms(pAnim);
		}
	} catch(e){
		scCoLib.util.logError("scImgMgr.xInitAnim::Error", e);
	}
}
scImgMgr.xAutoAnim = function(pAnim) {
	if (pAnim && pAnim.fAutoPly){
		if (!pAnim.fLoop && pAnim.fCurrImgIdx == pAnim.fImgs.length - 1) {
			scImgMgr.xPseAnm(pAnim);
		} else {
			scImgMgr.xNxtAnm(pAnim);
			pAnim.fNxtImgProc = window.setTimeout(function(){scImgMgr.xAutoAnim(pAnim)}, pAnim.fStep);
		}
	}
}
scImgMgr.xAnimCtrlOn = function(pAnim) {
	if (!pAnim.fCtrl || typeof pAnim.fCtrl.fOn == "undefined") return;
	if (pAnim.fOffProc) window.clearTimeout(pAnim.fOffProc);
	if (!pAnim.fCtrl.fOn){
		new scImgMgr.FadeEltTask(pAnim.fCtrl, 1);
		pAnim.fCtrl.fOn = true;
	}
	pAnim.fOffProc = window.setTimeout(function(){scImgMgr.xAnimCtrlOff(pAnim)}, 3000);
}
scImgMgr.xAnimCtrlOff = function(pAnim) {
	if (pAnim.fCtrl.fOn){
		new scImgMgr.FadeEltTask(pAnim.fCtrl, 0);
		pAnim.fCtrl.fOn = false;
		pAnim.fOffProc = null;
	}
}
scImgMgr.xSrtAnm = function(pAnim) {
	new scImgMgr.switchAnimTask(pAnim, 0);
}
scImgMgr.xEndAnm = function(pAnim) {
	new scImgMgr.switchAnimTask(pAnim, pAnim.fImgs.length - 1);
}
scImgMgr.xPrvAnm = function(pAnim) {
	new scImgMgr.switchAnimTask(pAnim, pAnim.fCurrImgIdx == 0 ? pAnim.fImgs.length - 1 : pAnim.fCurrImgIdx - 1);
}
scImgMgr.xNxtAnm = function(pAnim) {
	new scImgMgr.switchAnimTask(pAnim, pAnim.fCurrImgIdx < pAnim.fImgs.length - 1 ? pAnim.fCurrImgIdx + 1 : 0);
}
scImgMgr.xPlyAnm = function(pAnim) {
	pAnim.fAutoPly = true;
	pAnim.fBtnPly.style.display="none";
	pAnim.fBtnPse.style.display="";
	scImgMgr.xNxtAnm(pAnim);
	pAnim.fNxtImgProc = window.setTimeout(function(){scImgMgr.xAutoAnim(pAnim)}, pAnim.fStep);
}
scImgMgr.xPseAnm = function(pAnim) {
	pAnim.fAutoPly = false;
	pAnim.fBtnPly.style.display="";
	pAnim.fBtnPse.style.display="none";
	window.clearTimeout(pAnim.fNxtImgProc);
}
scImgMgr.xSetAnmSpd = function(pAnim,pDelta) {
	pAnim.fStep += pDelta;
	pAnim.fStep = Math.min(Math.max(pAnim.fStep,scImgMgr.fMinStep),scImgMgr.fMaxStep);
}
scImgMgr.xSetAnmLp = function(pAnim,pLp) {
	pAnim.fLoop = pLp;
}
scImgMgr.switchAnimTask = function(pAnim,pNewIdx){
	this.fIdx = -1;
	this.fRateOld = [.9, .8, .7, .6, .5, .4, .3, .2, .1];
	this.fRateNew = [.1, .2, .3, .4, .5, .6, .7, .8, .9];
	try{
		if (pAnim.fBtnInitPly) pAnim.fBtnInitPly.style.display="none";
		this.fAnim = pAnim;
		if (this.fIsRunning) this.terminate();
		this.fNewIdx = pNewIdx;
		this.fOldImg = this.fAnim.fImgs[this.fAnim.fCurrImgIdx];
		this.fNewImg = this.fAnim.fImgs[this.fNewIdx];
		scImgMgr.xStartOpacityEffect(this.fOldImg, 1);
		scImgMgr.xStartOpacityEffect(this.fNewImg, 0);
		if (!this.fAnim.fSoft) {
			this.terminate();
			return;
		}
		this.fEndTime = ( Date.now  ? Date.now() : new Date().getTime() ) + 100;
		this.fIdx = -1;
		this.fIsRunning = true;
		scTiLib.addTaskNow(this);
	}catch(e){scCoLib.util.log("ERROR scImgMgr.switchAnimTask: "+e);}
}
scImgMgr.switchAnimTask.prototype.execTask = function(){
	while(this.fEndTime < (Date.now ? Date.now() : new Date().getTime()) && this.fIdx < this.fRateOld.length) {
		this.fIdx++;
		this.fEndTime += 100;
	}
	this.fIdx++;
	this.fEndTime += 100;
	if(this.fIdx >= this.fRateOld.length) {
		scImgMgr.xEndOpacityEffect(this.fOldImg, 0);
		scImgMgr.xEndOpacityEffect(this.fNewImg, 1);
		this.fAnim.fCurrImgIdx = this.fNewIdx;
		if (this.fAnim.fCtrIdx) this.fAnim.fCtrIdx.innerHTML = this.fNewIdx + 1;
		this.fIsRunning = false;
		return false;
	}
	scImgMgr.xSetOpacity(this.fOldImg, this.fRateOld[this.fIdx]);
	scImgMgr.xSetOpacity(this.fNewImg, this.fRateNew[this.fIdx]);
	return true;
}
scImgMgr.switchAnimTask.prototype.terminate = function(){
	this.fIdx = this.fRateOld.length;
	this.execTask();
}

/* ================== Zoom manager =====================*/
scImgMgr.xInitZms = function(pCo) {
	scCoLib.util.log("scImgMgr.xInitZms");
	for(var i in this.fPathZoom) {
		var vZooms = scPaLib.findNodes(this.fPathZoom[i].fPath, pCo);
		for(var j in vZooms) {
			var vAnc = vZooms[j];
			try {
				vAnc.fZmUri = vAnc.href;
				vAnc.fOpts = this.fPathZoom[i].fOpts;
				vAnc.target = "_self";
				vAnc.fName=this.fTypZm+"Zm";
				vAnc.fObj=vAnc;
				vAnc.onclick=function(){return scImgMgr.xBtnMgr(this);}
			} catch(e){
				scCoLib.util.logError("scImgMgr.xInitZms::Error", e);
			}
		}
	}
}
scImgMgr.xInitZm = function(pAnc) {
	scCoLib.util.log("scImgMgr.xInitZm");
	var vOpts = pAnc.fOpts;
	pAnc.fImg = scPaLib.findNode("des:img", pAnc);
	pAnc.fOver = scImgMgr.xAddEltNoDisp("div", document.body,vOpts.clsPre+"Over");
	pAnc.fCvs = scImgMgr.xAddEltNoDisp("div", document.body,vOpts.clsPre+"Cvs");
	if(this.fNavie6 && this.xReadStyle(pAnc.fCvs,"position") == "fixed") pAnc.fCvs.style.position = "absolute"; // IE6 does not display fixed content properly.
	pAnc.fFra = scImgMgr.xAddEltHidden("div", pAnc.fCvs,vOpts.clsPre+"Fra");
	pAnc.fCo = scImgMgr.xAddElt("div",pAnc.fFra,vOpts.clsPre+"Co");
	var vImgBtn = null;
	if (vOpts.type == "iframe"){
		pAnc.fCo.fImg = scImgMgr.xAddElt("iframe",pAnc.fCo,null);
		pAnc.fCo.fImg.fAnc = pAnc;
		pAnc.fCo.fOvr = scImgMgr.xAddElt("div",pAnc.fCo,null);
		pAnc.fCo.fOvr.fAnc = pAnc;
		pAnc.fCo.fOvr.onclick=function(){return scImgMgr.xClsZm(this.fAnc);}
		pAnc.fCo.fOvr.style.cursor = "pointer";
	} else {
		vImgBtn = scImgMgr.xAddBtn(pAnc.fCo,pAnc,scImgMgr.fTypZm,"BtnImgCls","","");
		vImgBtn.innerHTML = "";
		vImgBtn.style.display = "inline-block";
		pAnc.fCo.fImg = scImgMgr.xAddElt("img",vImgBtn,null);
		pAnc.fCo.fImg.fAnc = pAnc;
		pAnc.fCo.fImg.style.cursor = "pointer";
		pAnc.fCo.fImg.setAttribute("alt",pAnc.fImg.alt ? pAnc.fImg.alt : "");
		pAnc.fCo.fImg.onload = scImgMgr.sLoadZmImg;
	}
	if (vOpts.toolbar == 1){
		pAnc.fTlb = scImgMgr.xAddElt("div",pAnc.fFra,vOpts.clsPre+"Tlb");
		pAnc.fClsBtn = scImgMgr.xAddBtn(pAnc.fTlb,pAnc,scImgMgr.fTypZm,"BtnCls",this.xGetStr(30),this.xGetStr(31));
	} else pAnc.fClsBtn = vImgBtn;
	var vResizer = {
		onResizedDes : function(pOwnerNode, pEvent) {},
		onResizedAnc : function(pOwnerNode, pEvent) {
			if(pEvent.phase==1) {
				if(scImgMgr.fCurrItem == pOwnerNode.fAnc) scImgMgr.xRedrawZm(pOwnerNode.fAnc);
			}
		}
	}
	scSiLib.addRule(pAnc.fCo.fImg, vResizer);
}
scImgMgr.xOpenZm = function(pAnc) {
	if ("scDragMgr" in window) { // do not open the zoom if the image is in a scDragMgr label that has just been dropped.
		var vAncs = scPaLib.findNodes("anc:",pAnc);
		for (i in vAncs) if (vAncs[i].fGroup && vAncs[i].fGroup._isThresholdExceeded) return;
	}
	if(!pAnc.fCo) scImgMgr.xInitZm(pAnc);
	if(this.xReadStyle(pAnc.fCvs,"position") == "absolute") window.scroll(0,0); // if position:absolute, we must scroll the SS into view.
	scImgMgr.fadeInTask.initTask(pAnc);
	scTiLib.addTaskNow(scImgMgr.fadeInTask);
	if(pAnc.fCo && !pAnc.fCo.fImg.src) pAnc.fCo.fImg.setAttribute("src", pAnc.fZmUri);
	else scImgMgr.xRedrawZm(pAnc);
	scImgMgr.fCurrItem = pAnc;
	pAnc.fKeyUpOld = document.onkeyup;
	document.onkeyup = scImgMgr.xKeyMgr;
	try{pAnc.fClsBtn.focus();}catch(e){};
}
scImgMgr.xClsZm = function(pAnc) {
	scImgMgr.fadeOutTask.initTask(pAnc);
	scTiLib.addTaskNow(scImgMgr.fadeOutTask);
	document.onkeyup = pAnc.fKeyUpOld;
	scImgMgr.fCurrItem = null;
	try{pAnc.focus();}catch(e){};
}
scImgMgr.sLoadZmImg = function() {
	var vAnc = this.fAnc;
	vAnc.fDefHeight = this.height;
	vAnc.fDefWidth = this.width;
	vAnc.fRatio = vAnc.fDefWidth/vAnc.fDefHeight;
	vAnc.fDeltaHeight = scImgMgr.xGetEltHeight(vAnc.fFra) - scImgMgr.xGetEltHeight(vAnc.fCo);
	vAnc.fDeltaWidth = scImgMgr.xGetEltWidth(vAnc.fFra) - scImgMgr.xGetEltWidth(vAnc.fCo);
	vAnc.fFra.style.position="absolute";
	scImgMgr.xRedrawZm(vAnc);
	vAnc.fFra.style.visibility="";
}
scImgMgr.xRedrawZm = function(pAnc) {
	try {
		if (pAnc.fOpts.type == "iframe") return;
		var vCoHeight = pAnc.fCvs.clientHeight - pAnc.fDeltaHeight;
		var vCoWidth = pAnc.fCvs.clientWidth - pAnc.fDeltaWidth;
		if (vCoHeight == 0 || vCoWidth == 0) return;
		var vCoRatio = vCoWidth/vCoHeight;
		var vFra = pAnc.fFra;
		var vImg = pAnc.fCo.fImg;
		var vNewHeight = 0;
		var vNewWidth = 0;
		if (pAnc.fRatio <= vCoRatio && vCoHeight < pAnc.fDefHeight) vNewHeight = vCoHeight;
		if (pAnc.fRatio >= vCoRatio && vCoWidth < pAnc.fDefWidth) vNewWidth = vCoWidth;
		vImg.style.width = (vNewWidth>0 ? vNewWidth+"px" : "");
		vImg.style.height = (vNewHeight>0 ? vNewHeight+"px" : "");
		scCoLib.util.log("scImgMgr.xRedrawZm::vNewHeight="+vNewHeight);
		scCoLib.util.log("scImgMgr.xRedrawZm::vNewWidth="+vNewWidth);
		vFra.style.marginTop = (vCoHeight - (vNewHeight > 0 ? vNewHeight : vNewWidth > 0 ? vNewWidth/pAnc.fRatio : pAnc.fDefHeight)) / 2 + "px";
		vFra.style.marginLeft = (vCoWidth - (vNewWidth > 0 ? vNewWidth : vNewHeight > 0 ? vNewHeight*pAnc.fRatio : pAnc.fDefWidth)) / 2 + "px";
		pAnc.fOver.style.height = (scImgMgr.xPageHeight()>scImgMgr.xClientHeight() ? scImgMgr.xPageHeight()+"px" : "");
		pAnc.fOver.style.width = (scImgMgr.xPageWidth()>scImgMgr.xClientWidth() ? scImgMgr.xPageWidth() : scImgMgr.xClientWidth())+"px";
	} catch(e){
		scCoLib.util.log("scImgMgr.xRedrawZm::Error", e);
	}
}

/* ================== Slide-show manager =====================*/
scImgMgr.xInitSss = function(pCo) {
	for(var i in this.fPathGal) {
		var vGals = scPaLib.findNodes(this.fPathGal[i].fPath,pCo);
		for(var j in vGals) {
			var vGal = vGals[j];
			vGal.fOpts = this.fPathGal[i].fOpts;
			try {
				vGal.fAncs = scPaLib.findNodes("des:a.galPvLnk", vGal);
				// Init anchors & images
				for(var j = 0; j < vGal.fAncs.length; j++) {
					var vAnc = vGal.fAncs[j];
					vAnc.fSsUri = vAnc.href;
					vAnc.fIdx = j;
					vAnc.href = "#";
					vAnc.target = "_self";
					vAnc.fName=this.fTypGal+"Pv";
					vAnc.onclick=function(){return scImgMgr.xBtnMgr(this);}
					vAnc.fImg = scPaLib.findNode("des:img.imgPv", vAnc);
					vAnc.fImg.style.marginTop = ((scCoLib.toInt(this.xReadStyle(vAnc, "height")) - vAnc.fImg.height - scCoLib.toInt(this.xReadStyle(vAnc.fImg, "borderTopWidth")) - scCoLib.toInt(this.xReadStyle(vAnc.fImg, "borderBottomWidth"))) / 2) + "px";
					vAnc.fObj = vGal;
				}
				// Init SlideShow elements
				this.xInitSs(vGal);
				vGal.fSsStep = scImgMgr.fDefaultStep;
				vGal.fName="gal";
			} catch(e){
				scCoLib.util.logError("scImgMgr.onLoad::Gallery init Error", e);
			}
		}
	}
}
scImgMgr.xInitSs = function(pAlbFra) {
	scCoLib.util.log("scImgMgr.xInitSs");
	var vOpts = pAlbFra.fOpts;
	pAlbFra.fOver = scImgMgr.xAddEltNoDisp("div",document.body,vOpts.clsPre+"Over");
	pAlbFra.fCvs = scImgMgr.xAddEltNoDisp("div",document.body,vOpts.clsPre+"Cvs");
	pAlbFra.fFra = scImgMgr.xAddElt("div",pAlbFra.fCvs,vOpts.clsPre+"Fra");
	if(this.fNavie6 && this.xReadStyle(pAlbFra.fCvs,"position") == "fixed") pAlbFra.fCvs.style.position = "absolute"; // IE6 does not display fixed content properly.
	
	pAlbFra.fSsCo = scImgMgr.xAddElt("div",pAlbFra.fFra,vOpts.clsPre+"Co");
	pAlbFra.fSsImgFras = [];
	for(var i = 0; i < pAlbFra.fAncs.length; i++) {
		pAlbFra.fSsImgFras[i] = scImgMgr.xAddEltHidden("div",pAlbFra.fSsCo,vOpts.clsPre+"ImgFra");
		pAlbFra.fSsImgFras[i].fImg = scImgMgr.xAddElt("img",pAlbFra.fSsImgFras[i],null);
		pAlbFra.fSsImgFras[i].fImg.setAttribute("alt",pAlbFra.fAncs[i].title ? pAlbFra.fAncs[i].title : "");
		pAlbFra.fSsImgFras[i].fImg.onload = scImgMgr.sLoadSsImg;
	}
	pAlbFra.fSsTbr = scImgMgr.xAddElt("div",pAlbFra.fFra,vOpts.clsPre+"Tbr")
	pAlbFra.fSsTi = scImgMgr.xAddElt("div",pAlbFra.fSsTbr,vOpts.clsPre+"Ti")
	scImgMgr.xAddSep(pAlbFra.fSsTbr);
	pAlbFra.fSsBtnPrv = scImgMgr.xAddBtn(pAlbFra.fSsTbr,pAlbFra,this.fTypGal,"BtnPrv",scImgMgr.xGetStr(0),scImgMgr.xGetStr(1));
	scImgMgr.xAddSep(pAlbFra.fSsTbr);
	pAlbFra.fSsBtnPly = scImgMgr.xAddBtn(pAlbFra.fSsTbr,pAlbFra,this.fTypGal,"BtnPly",scImgMgr.xGetStr(6),scImgMgr.xGetStr(7));
	pAlbFra.fSsBtnPse = scImgMgr.xAddBtn(pAlbFra.fSsTbr,pAlbFra,this.fTypGal,"BtnPse",scImgMgr.xGetStr(8),scImgMgr.xGetStr(9));
	pAlbFra.fSsBtnPse.style.display = "none";
	scImgMgr.xAddSep(pAlbFra.fSsTbr);
	pAlbFra.fSsBtnNxt = scImgMgr.xAddBtn(pAlbFra.fSsTbr,pAlbFra,this.fTypGal,"BtnNxt",scImgMgr.xGetStr(2),scImgMgr.xGetStr(3));
	scImgMgr.xAddSep(pAlbFra.fSsTbr);
	pAlbFra.fSsBtnCls = scImgMgr.xAddBtn(pAlbFra.fSsTbr,pAlbFra,this.fTypGal,"BtnCls",scImgMgr.xGetStr(4),scImgMgr.xGetStr(5));
	scImgMgr.xAddSep(pAlbFra.fSsTbr);
	pAlbFra.fSsCount = scImgMgr.xAddElt("span",pAlbFra.fSsTbr,vOpts.clsPre+"Count")
}
scImgMgr.xSsStart = function(pAlbFra) {
	scImgMgr.xOpenSs(pAlbFra,pAlbFra.fAncs[0]);
	scImgMgr.xPlySs(pAlbFra);
}
scImgMgr.xOpenSs = function(pAlbFra,pAnc) {
	if(this.xReadStyle(pAlbFra.fCvs,"position") == "absolute") window.scroll(0,0); // if position:absolute, we must scroll the SS into view.
	scImgMgr.fadeInTask.initTask(pAlbFra);
	scTiLib.addTaskNow(scImgMgr.fadeInTask);
	scImgMgr.xUdtSs(pAlbFra,pAnc);
	scImgMgr.fCurrItem = pAlbFra;
	pAlbFra.fInitAnc = pAnc;
	pAlbFra.fKeyUpOld = document.onkeyup;
	document.onkeyup = scImgMgr.xKeyMgr;
	try{pAlbFra.fSsBtnPly.focus();}catch(e){};

}
scImgMgr.xUdtSs = function(pAlbFra,pNewAnc) {
	var vOpts = pAlbFra.fOpts;
	pAlbFra.fSsHasPrv = pNewAnc.fIdx != 0;
	pAlbFra.fSsHasNxt = pNewAnc.fIdx != pAlbFra.fAncs.length - 1;
	if(!pAlbFra.fSsImgFras[pNewAnc.fIdx].fImg.src) pAlbFra.fSsImgFras[pNewAnc.fIdx].fImg.setAttribute("src", pNewAnc.fSsUri);
	if (pAlbFra.fSsHasNxt){
		pAlbFra.fNxtSsAnc = pAlbFra.fAncs[Math.min(pNewAnc.fIdx + 1,pAlbFra.fAncs.length - 1)];
		if(!pAlbFra.fSsImgFras[pAlbFra.fNxtSsAnc.fIdx].fImg.src) pAlbFra.fSsImgFras[pAlbFra.fNxtSsAnc.fIdx].fImg.setAttribute("src", pAlbFra.fNxtSsAnc.fSsUri);
	} else if(pAlbFra.fSsAutoPly) scImgMgr.xPseSs(pAlbFra);
	if (pAlbFra.fSsHasPrv){
		pAlbFra.fPrvSsAnc = pAlbFra.fAncs[Math.max(pNewAnc.fIdx - 1,0)];
		if(!pAlbFra.fSsImgFras[pAlbFra.fPrvSsAnc.fIdx].fImg.src) pAlbFra.fSsImgFras[pAlbFra.fPrvSsAnc.fIdx].fImg.setAttribute("src", pAlbFra.fPrvSsAnc.fSsUri);
	}
	pAlbFra.fSsTi.innerHTML = (pNewAnc.title ? pNewAnc.title : "");
	pAlbFra.fSsCount.innerHTML = (pNewAnc.fIdx+1)+"/"+pAlbFra.fAncs.length;
	scImgMgr.xSwitchClass(pAlbFra.fSsBtnPrv,(pAlbFra.fSsHasPrv?vOpts.clsPre+"BtnNoPrv":vOpts.clsPre+"BtnPrv"),(pAlbFra.fSsHasPrv?vOpts.clsPre+"BtnPrv":vOpts.clsPre+"BtnNoPrv"));
	scImgMgr.xSwitchClass(pAlbFra.fSsBtnNxt,(pAlbFra.fSsHasNxt?vOpts.clsPre+"BtnNoNxt":vOpts.clsPre+"BtnNxt"),(pAlbFra.fSsHasNxt?vOpts.clsPre+"BtnNxt":vOpts.clsPre+"BtnNoNxt"));

	scImgMgr.switchSsTask.initTask(pAlbFra,pNewAnc);
	scTiLib.addTaskNow(scImgMgr.switchSsTask);
}
scImgMgr.xNxtSs = function(pAlbFra) {
	if (!pAlbFra.fSsHasNxt) return false;
	scImgMgr.xUdtSs(pAlbFra,pAlbFra.fNxtSsAnc);
	return true;
}
scImgMgr.xPrvSs = function(pAlbFra) {
	if (!pAlbFra.fSsHasPrv) return false;
	scImgMgr.xUdtSs(pAlbFra,pAlbFra.fPrvSsAnc);
	return true;
}
scImgMgr.xClsSs = function(pAlbFra) {
	scImgMgr.fadeOutTask.initTask(pAlbFra);
	scTiLib.addTaskNow(scImgMgr.fadeOutTask);
	document.onkeyup = pAlbFra.fKeyUpOld;
	pAlbFra.fSsAutoPly = false;
	scImgMgr.fCurrItem = null;
	try{pAlbFra.fInitAnc.focus();}catch(e){};
}
scImgMgr.xPlySs = function(pAlbFra) {
	pAlbFra.fSsAutoPly = true;
	pAlbFra.fSsBtnPly.style.display="none";
	pAlbFra.fSsBtnPse.style.display="";
	try{pAlbFra.fSsBtnPse.focus();}catch(e){};
	if (! scImgMgr.xNxtSs(pAlbFra)) scImgMgr.xUdtSs(pAlbFra,pAlbFra.fAncs[0]);
	pAlbFra.fNxtSsProc = window.setTimeout(scImgMgr.xAutoSs, pAlbFra.fSsStep);
}
scImgMgr.xPseSs = function(pAlbFra) {
	pAlbFra.fSsAutoPly = false;
	pAlbFra.fSsBtnPly.style.display="";
	pAlbFra.fSsBtnPse.style.display="none";
	try{pAlbFra.fSsBtnPly.focus();}catch(e){};
	window.clearTimeout(pAlbFra.fNxtSsProc);
//	pAlbFra.fNxtSsProc = -1;
}
scImgMgr.sLoadSsImg = function() {
	this.style.marginTop = (this.parentNode.clientHeight - this.clientHeight) / 2 + "px";
}
scImgMgr.xAutoSs = function() {
	if (scImgMgr.fCurrItem){
		if (scImgMgr.fCurrItem.fSsAutoPly){
			scImgMgr.xNxtSs(scImgMgr.fCurrItem);
			if (scImgMgr.fCurrItem.fSsHasNxt) scImgMgr.fCurrItem.fNxtSsProc = window.setTimeout(scImgMgr.xAutoSs, scImgMgr.fCurrItem.fSsStep);
		}
	}
}
scImgMgr.switchSsTask = {
	fIdx: -1,
	fRateOld: [.9, .8, .7, .6, .5, .4, .3, .2, .1],
	fRateNew: [.1, .2, .3, .4, .5, .6, .7, .8, .9],
	execTask : function(){
		while(this.fEndTime < (Date.now ? Date.now() : new Date().getTime()) && this.fIdx < this.fRateOld.length) {
			this.fIdx++;
			this.fEndTime += 100;
		}
		this.fIdx++;
		this.fEndTime += 100;
		if(this.fIdx >= this.fRateOld.length) {
			if (this.fAlbFra.fCurrSsAnc) this.setOpacity(this.fAlbFra.fSsImgFras[this.fAlbFra.fCurrSsAnc.fIdx],0);
			if (this.fAlbFra.fCurrSsAnc && this.fAlbFra.fCurrSsAnc.fIdx != this.fNewAnc.fIdx) this.fAlbFra.fSsImgFras[this.fAlbFra.fCurrSsAnc.fIdx].style.visibility = "hidden";
			this.setOpacity(this.fAlbFra.fSsImgFras[this.fNewAnc.fIdx],1);
			this.fAlbFra.fCurrSsAnc = this.fNewAnc;
			this.fIsRunning = false;
			return false;
		}
		if (this.fAlbFra.fCurrSsAnc) this.setOpacity(this.fAlbFra.fSsImgFras[this.fAlbFra.fCurrSsAnc.fIdx], this.fRateOld[this.fIdx]);
		this.setOpacity(this.fAlbFra.fSsImgFras[this.fNewAnc.fIdx], this.fRateNew[this.fIdx]);
		return true;
	},
	setOpacity: function(pNode, pRate){
		if(scCoLib.isIE) pNode.style.filter = "Alpha(opacity="+pRate*100+")";
		else pNode.style.opacity = pRate;
	},
	terminate : function(){
		this.fIdx = this.fRateOld.length;
		this.execTask();
	},
	initTask : function(pAlbFra,pNewAnc){
		scCoLib.util.log("switchSsTask.initTask");
		this.fAlbFra = pAlbFra;
		if (this.fIsRunning) this.terminate();
		this.fNewAnc = pNewAnc;
		this.setOpacity(this.fAlbFra.fSsImgFras[this.fNewAnc.fIdx],0);
		this.fAlbFra.fSsImgFras[this.fNewAnc.fIdx].style.visibility = "";
		
		this.fEndTime = ( Date.now  ? Date.now() : new Date().getTime() ) + 100;
		this.fIdx = -1;
		this.fIsRunning = true;
	}
}
/* ================== tasks =====================*/
scImgMgr.fadeInTask = {
	fIdx: -1,
	fRate: [.1, .2, .3, .4, .5, .6, .7, .8, .9],
	execTask : function(){
		while(this.fEndTime < (Date.now ? Date.now() : new Date().getTime()) && this.fIdx < this.fRate.length) {
			this.fIdx++;
			this.fEndTime += 100;
		}
		this.fIdx++;
		this.fEndTime += 100;
		if(this.fIdx >= this.fRate.length) {
			this.setOpacity(this.fObj.fOver,scImgMgr.fOverAlpha);
			this.resetOpacity(this.fObj.fCvs);
			return false;
		}
		this.setOpacity(this.fObj.fOver, Math.min(this.fRate[this.fIdx], scImgMgr.fOverAlpha));
		this.setOpacity(this.fObj.fCvs, this.fRate[this.fIdx]);
		return true;
	},
	setOpacity: function(pNode, pRate){
		if(scCoLib.isIE) pNode.style.filter = "Alpha(opacity="+pRate*100+")";
		else pNode.style.opacity = pRate;
	},
	resetOpacity: function(pNode){
		if(scCoLib.isIE) pNode.style.filter = "Alpha(opacity=100)";
		else pNode.style.opacity = "1";
	},
	terminate : function(){
		this.fIdx = this.fRate.length;
		this.execTask();
	},
	initTask : function(pObj){
		scCoLib.util.log("fadeInTask.initTask");
		this.fObj = pObj;
		this.fEndTime = ( Date.now  ? Date.now() : new Date().getTime() ) + 100;
		this.setOpacity(this.fObj.fOver, .0);
		this.setOpacity(this.fObj.fCvs, .0);
		this.fObj.fOver.style.display = "";
		this.fObj.fOver.style.height = (scImgMgr.xPageHeight()>scImgMgr.xClientHeight() ? scImgMgr.xPageHeight()+"px" : "");
		this.fObj.fOver.style.width = (scImgMgr.xPageWidth()>scImgMgr.xClientWidth() ? scImgMgr.xPageWidth() : scImgMgr.xClientWidth())+"px";
		this.fObj.fCvs.style.display = "";
		this.fIdx = -1;
	}
}
scImgMgr.fadeOutTask = {
	fIdx: -1,
	fRate: [.8, .6, .4, .3, .2, .1],
	execTask : function(){
		while(this.fEndTime < (Date.now ? Date.now() : new Date().getTime()) && this.fIdx < this.fRate.length) {
			this.fIdx++;
			this.fEndTime += 100;
		}
		this.fIdx++;
		this.fEndTime += 100;
		if(this.fIdx >= this.fRate.length) {
			this.resetOpacity(this.fObj.fOver);
			this.resetOpacity(this.fObj.fCvs);
			this.fObj.fOver.style.display = "none";
			this.fObj.fCvs.style.display = "none";
			if (this.fObj.fCurrSsAnc) this.setOpacity(this.fObj.fSsImgFras[this.fObj.fCurrSsAnc.fIdx],0);
			if (this.fObj.fCurrSsAnc) this.fObj.fSsImgFras[this.fObj.fCurrSsAnc.fIdx].style.visibility = "hidden";
			return false;
		}
		this.setOpacity(this.fObj.fOver, Math.min(this.fRate[this.fIdx], scImgMgr.fOverAlpha));
		this.setOpacity(this.fObj.fCvs, this.fRate[this.fIdx]);
		return true;
	},
	setOpacity: function(pNode, pRate){
		if(scCoLib.isIE) pNode.style.filter = "Alpha(opacity="+pRate*100+")";
		else pNode.style.opacity = pRate;
	},
	resetOpacity: function(pNode){
		if(scCoLib.isIE) pNode.style.filter = "Alpha(opacity=0)";
		else pNode.style.opacity = "0";
	},
	terminate : function(){
		this.fIdx = this.fRate.length;
		this.execTask();
	},
	initTask : function(pObj){
		scCoLib.util.log("fadeOutTask.initTask");
		this.fObj = pObj;
		this.fEndTime = ( Date.now  ? Date.now() : new Date().getTime() ) + 100;
		this.fIdx = -1;
	}
}
/** scImgMgr.FadeEltTask : scTiLib task that fades a given element in or out.
 * @param pElt element to fade.
 * @param pDir fade direction : 0=out, 1=in.
 * @param pInstant optionnal parameter if true no animation.
 */
scImgMgr.FadeEltTask = function(pElt,pDir,pInstant){
	this.fRate = new Array();
	this.fRate[0] = [.9, .85, .8, .7, .6, .5, .4, .3, .2, .15, .1];
	this.fRate[1] = [.1, .15, .2, .3, .4, .5, .6, .7, .8, .85, .9];
	try{
		this.fElt = pElt;
		this.fDir = (pDir >= 1 ? 1 : 0);
		if (pInstant) {
			this.terminate();
			return;
		}
		if (this.fElt.fFadeTask) {
			this.fElt.fFadeTask.changeDir(this.fDir);
		} else {
			scImgMgr.xStartOpacityEffect(this.fElt, 1-this.fDir);
			this.fEndTime = ( Date.now  ? Date.now() : new Date().getTime() ) + 100;
			this.fIdx = -1;
			this.fElt.fFadeTask = this;
			scTiLib.addTaskNow(this);
		}
	}catch(e){scCoLib.util.log("ERROR scImgMgr.FadeEltTask: "+e);}
}
scImgMgr.FadeEltTask.prototype.execTask = function(){
	while(this.fEndTime < (Date.now ? Date.now() : new Date().getTime()) && this.fIdx < this.fRate[this.fDir].length) {
		this.fIdx++;
		this.fEndTime += 100;
	}
	this.fIdx++;
	this.fEndTime += 100;
	if(this.fIdx >= this.fRate[this.fDir].length) {
		scImgMgr.xEndOpacityEffect(this.fElt, this.fDir);
		this.fElt.fFadeTask = null;
		return false;
	}
	scImgMgr.xSetOpacity(this.fElt, this.fRate[this.fDir][this.fIdx]);
	return true;
}
scImgMgr.FadeEltTask.prototype.changeDir = function(pDir){
	var vDir = (pDir >= 1 ? 1 : 0)
	if (vDir != this.fDir) this.fIdx = this.fRate[this.fDir].length - this.fIdx - 1;
	this.fDir = vDir;
}
scImgMgr.FadeEltTask.prototype.terminate = function(){
	this.fIdx = this.fRate[this.fDir].length;
	this.execTask();
}
/* ================== toolbox =====================*/
/** scImgMgr.xReadStyle : cross-browser css rule reader */
scImgMgr.xReadStyle = function(pElt, pProp) {
	try {
		var vVal = null;
		if (pElt.style[pProp]) {
			vVal = pElt.style[pProp];
		} else if (pElt.currentStyle) {
			vVal = pElt.currentStyle[pProp];
		} else {
			var vDefaultView = pElt.ownerDocument.defaultView;
			if (vDefaultView && vDefaultView.getComputedStyle) {
				var vStyle = vDefaultView.getComputedStyle(pElt, null);
				var vProp = pProp.replace(/([A-Z])/g,"-$1").toLowerCase();
				if (vStyle[vProp]) return vStyle[vProp];
				else vVal = vStyle.getPropertyValue(vProp);
			}
		}
		return vVal.replace(/\"/g,""); //Opera returns certain values quoted (literal colors).
	} catch (e) {
		return null;
	}
}
/** scImgMgr.xGetEltTop. */
scImgMgr.xGetEltTop = function(pElt, pRoot) {
	var vY;
	var vRoot = pRoot || null;
	vY = scCoLib.toInt(pElt.offsetTop);
	if (pElt.offsetParent.tagName.toLowerCase() != 'body' && pElt.offsetParent.tagName.toLowerCase() != 'html' && pElt.offsetParent != vRoot) {
		vY -= pElt.offsetParent.scrollTop;
		vY += this.xGetEltTop(pElt.offsetParent, vRoot);
	}
	return vY;
}
/** scImgMgr.xGetEltLeft. */
scImgMgr.xGetEltLeft = function(pElt, pRoot) {
	var vX;
	var vRoot = pRoot || null;
	vX = scCoLib.toInt(pElt.offsetLeft);
	if (pElt.offsetParent.tagName.toLowerCase() != 'body' && pElt.offsetParent.tagName.toLowerCase() != 'html' && pElt.offsetParent != vRoot) {
		vX -= pElt.offsetParent.scrollLeft;
		vX += this.xGetEltLeft(pElt.offsetParent, vRoot);
	}
	return vX;
}
/** scImgMgr.xGetEltWidth. */
scImgMgr.xGetEltWidth = function(pElt) {
	return(scCoLib.toInt(pElt.style.pixelWidth || pElt.offsetWidth)+(this.fNavie? (scCoLib.toInt(pElt.currentStyle.borderRightWidth)+scCoLib.toInt(pElt.currentStyle.borderLeftWidth)):0));
}
/** scImgMgr.xGetEltHeight. */
scImgMgr.xGetEltHeight = function(pElt) {
	return(scCoLib.toInt(pElt.style.pixelHeight || pElt.offsetHeight)+(this.fNavie? (scCoLib.toInt(pElt.currentStyle.borderTopWidth)+scCoLib.toInt(pElt.currentStyle.borderBottomWidth)):0));
}
/** scImgMgr.xPageHeight. */
scImgMgr.xPageHeight = function() {
	if(this.fPgeFra){
		if(this.fPgeFra.offsetHeight) return this.fPgeFra.offsetHeight + this.xGetEltTop(this.fPgeFra) + scCoLib.toInt(this.xReadStyle(this.fPgeFra, "marginBottom"));
		else if(this.fPgeFra.clientHeight) return this.fPgeFra.clientHeight + this.xGetEltTop(this.fPgeFra) + scCoLib.toInt(this.xReadStyle(this.fPgeFra, "marginBottom"));
	}	
}
/** scImgMgr.xPageWidth. */
scImgMgr.xPageWidth = function() {
	if(this.fPgeFra){
		if(this.fPgeFra.offsetWidth) return this.fPgeFra.offsetWidth + this.xGetEltLeft(this.fPgeFra) + scCoLib.toInt(this.xReadStyle(this.fPgeFra, "marginRight"));
		else if(this.fPgeFra.clientWidth) return this.fPgeFra.clientWidth + this.xGetEltLeft(this.fPgeFra) + scCoLib.toInt(this.xReadStyle(this.fPgeFra, "marginRight"));
	}	
}
/** scImgMgr.xClientHeight. */
scImgMgr.xClientHeight = function() {
	if (document.documentElement) {
		return document.documentElement.clientHeight;
	} else if (window.innerHeight >= 0) {
		return window.innerHeight;
	} else if (document.body.clientHeight >= 0) {
		return document.body.clientHeight;
	} else {
		return 0;
	}
}
/** scImgMgr.xClientWidth. */
scImgMgr.xClientWidth = function() {
	if (document.documentElement) {
		return document.documentElement.clientWidth;
	} else if (window.innerWidth >= 0) {
		return window.innerWidth;
	} else if (document.body.clientWidth >= 0) {
		return document.body.clientWidth;
	} else {
		return 0;
	}
}
/** scImgMgr.xAddSep : Add a simple textual separator : " | ". */
scImgMgr.xAddSep = function(pParent){
	var vSep = document.createElement("span");
	vSep.className = "scImgSep";
	vSep.innerHTML = " | "
	pParent.appendChild(vSep);
}
/** scImgMgr.xAddElt : Add an HTML element to a parent node. */
scImgMgr.xAddElt = function(pName, pParent, pClassName, pNoDisplay, pHidden, pNxtSib){
	var vElt;
	if(scCoLib.isIE && pName.toLowerCase() == "iframe") {
		var vEltHolder = pParent.ownerDocument.createElement("div");
		if (pNxtSib) pParent.insertBefore(vEltHolder,pNxtSib)
		else pParent.appendChild(vEltHolder);
		vEltHolder.innerHTML = "<iframe scrolling='no' frameborder='0' allowtransparency='true'></iframe>";
		vElt = vEltHolder.firstChild;
	} else {
		vElt = pParent.ownerDocument.createElement(pName);
		if (pNxtSib) pParent.insertBefore(vElt,pNxtSib)
		else pParent.appendChild(vElt);
	}
	if (pClassName) vElt.className = pClassName;
	if (pNoDisplay) vElt.style.display = "none";
	if (pHidden) vElt.style.visibility = "hidden";
	return vElt;
}
/** scImgMgr.xAddEltNoDisp : Add a non displayed HTML element to a parent node. */
scImgMgr.xAddEltNoDisp = function(pName,pParent,pClassName){
	var vElt = scImgMgr.xAddElt(pName,pParent,pClassName,true,false);
	return vElt;
}
/** scImgMgr.xAddEltHidden : Add a hidden HTML element to a parent node. */
scImgMgr.xAddEltHidden = function(pName,pParent,pClassName){
	var vElt = scImgMgr.xAddElt(pName,pParent,pClassName,false,true);
	return vElt;
}
/** scImgMgr.xAddBtn : Add a HTML button to a parent node. */
scImgMgr.xAddBtn = function(pParent,pObj,pType,pName,pCapt,pTitle,pNoCmd){
	var vBtn = pParent.ownerDocument.createElement("a");
	vBtn.className = pObj.fOpts.clsPre+pName;
	vBtn.fName = pType+pName;
	vBtn.href = "#";
	vBtn.target = "_self";
	if (!pNoCmd) vBtn.onclick=function(){return scImgMgr.xBtnMgr(this);}
	vBtn.setAttribute("title",pTitle);
	vBtn.innerHTML="<span>"+pCapt+"</span>"
	vBtn.fObj = pObj;
	pParent.appendChild(vBtn);
	return vBtn;
}
/** scImgMgr.xIsVisible : */
scImgMgr.xIsVisible = function(pNode) {
	var vAncs = scPaLib.findNodes("anc:", pNode);
	for(var i in vAncs) if (vAncs[i].nodeType == 1 && scImgMgr.xReadStyle(vAncs[i],"display") == "none") return false;
	return true;
}
/** scImgMgr.xGetStr : Reteive a string. */
scImgMgr.xGetStr = function(pStrId) {
	return this.fStrings[pStrId];
}
/** scImgMgr.xSwitchClass : Replace a CSS class. */
scImgMgr.xSwitchClass = function(pNode, pClassOld, pClassNew) {
	if (pClassOld && pClassOld != '') {
		var vCurrentClasses = pNode.className.split(' ');
		var vNewClasses = new Array();
		var vClassFound = false;
		for (var i = 0, n = vCurrentClasses.length; i < n; i++) {
			if (vCurrentClasses[i] != pClassOld) {
				vNewClasses.push(vCurrentClasses[i]);
			} else {
				if (pClassNew && pClassNew != '') vNewClasses.push(pClassNew);
				vClassFound = true;
			}
		}
		pNode.className = vNewClasses.join(' ');
	}
}
/** Set the opacity of a given node.
 * @param pRate Variable de 0 à 1.
 */
scImgMgr.xSetOpacity = function(pNode, pRate){
	if(scCoLib.isIE) pNode.filters.item("DXImageTransform.Microsoft.Alpha").Opacity = pRate*100;
	else pNode.style.opacity = pRate;
}
/** Start the opacity of a given node.
 * On ajoute le filtre d'opacité sur IE.
 * On place le node en visibility: "".
 * @param pRate 2 valeurs possibles: 0 (invisible) ou 1 (visible).
 */
scImgMgr.xStartOpacityEffect = function(pNode, pRate){
	if(scCoLib.isIE) pNode.style.filter = pRate==1 ? "progid:DXImageTransform.Microsoft.Alpha(opacity=100)" : "progid:DXImageTransform.Microsoft.Alpha(opacity=0)";
	else pNode.style.opacity = pRate;
	pNode.style.visibility = "";
}
/** End the opacity of a given node.
 * On supprime le filtre d'opacité sur IE (évite des bugs de refresh).
 * On place le node en visibility: hidden.
 * @param pRate 2 valeurs possibles: 0 (invisible) ou 1 (visible).
 */
scImgMgr.xEndOpacityEffect = function(pNode, pRate){
	if(scCoLib.isIE) pNode.style.filter = "";
	else pNode.style.opacity = pRate;
	if(pRate == 0) pNode.style.visibility = "hidden";
	else pNode.style.visibility = "";
}
scImgMgr.loadSortKey = "ZZZ";
scOnLoads[scOnLoads.length] = scImgMgr;
