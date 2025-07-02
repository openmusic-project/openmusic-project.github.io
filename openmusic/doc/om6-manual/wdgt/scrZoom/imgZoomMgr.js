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
 * Portions created by the Initial Developer are Copyright (C) 2008-2010
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

/** SCENARI Image zoom manager 
 * Given a displayed image (reduced) and a large scale version (must hav the 
 * same ratio), imgZoomMgr will display a triangular "magnifying glass" 
 * when the mous is over the reduced image. The user can click ont the 
 * magnifying glass in order to "maximize" the zoomed part to fill the image
 * area.
 * imgZoomMgr is compatible with firefox, IE7+, Safari, Opera.
 */

//scCoLib.fDebug=true;

var imgZoomMgr = {
	fPathImgFra : null,
	fPathImg : null,
	fPathZmSrc : null,
	fZmScale : null,
	fZmMaxMode : null,
	fZmPanMode : null,
	fZmNewWin : null,
	fTtTxt : null,
	fZmBdC : "gray",         // zoom box border color
	fZmBdW : 1,              // zoom box minimum border width
	fZmSrcCssDelPre : "js_", // class prefix to be deleted on the zoom source element
	fMinDimMaxDefault : 200  // min image width or height threshold for maximized by default
};

/** imgZoomMgr.init : initialize the manager must be called once per page.
 * @pPathImgFra : MAND - absolute scPaLib path to find image structures to 
 *                activate, must be the container of the visible image.
 * @pPathImg    : MAND - relative scPaLib path to the reduced, visible image.
 * @pPathZm     : MAND - relative scPaLib path to the large scale version (<img/> or <a/>).
 * @pZmScale    : OPT - relative size of the zoom area compared to the visible image.
 * @pZmMaxMode  : OPT - zoom maximize mode option:
 *                - 0 = no maximize mode
 *                - 1 = maximize mode on click
 * @pZmPanMode  : OPT - zoom pan mode option (only used if pZmMaxMode=1):
 *                - 0 = no pan
 *                - 1 = auto pan
 *                - 2 = pan on ctrl
 * @pZmNewWin   : OPT - zoom new window option (only used if pZmMaxMode=1):
 *                - 0 = no new window
 *                - 1 = new window on Shift
 * @pTtTxt      : OPT - tooltip text. The tooltip is displayed under the Image.
 */
imgZoomMgr.init = function(pPathImgFra, pPathImg, pPathZm, pZmScale, pZmMaxMode, pZmPanMode, pZmNewWin, pTtTxt) {
	this.fPathImgFra = pPathImgFra;
	this.fPathImg = pPathImg;
	this.fPathZmSrc = pPathZm;
	this.fZmScale = pZmScale || 0.33;
	this.fZmMaxMode = pZmMaxMode || 1;
	this.fZmPanMode = pZmPanMode || 2;
	this.fZmNewWin = pZmNewWin || 0;
	this.fTtTxt = pTtTxt || null;
	this.fNavie6 = scCoLib.isIE && parseFloat(scCoLib.userAgent.substring(scCoLib.userAgent.indexOf("msie")+5)) < 7;
	this.fIsIeQuirks = scCoLib.isIE && document.compatMode == "BackCompat";
	scOnLoads[scOnLoads.length] = this;
}

imgZoomMgr.onLoad = function() {
	scCoLib.util.log("imgZoomMgr.onLoad");
	if (this.fNavie6) return;
	this.fImgFras = scPaLib.findNodes(this.fPathImgFra);
	for(var i = 0; i < this.fImgFras.length; i++) {
		var vImgFra = this.fImgFras[i];
		try {
			vImgFra.fImg = scPaLib.findNode(this.fPathImg, vImgFra);
			vImgFra.fZmSrc = scPaLib.findNode(this.fPathZmSrc, vImgFra);
			vImgFra.fZmSrc.className = vImgFra.fZmSrc.className.replace(this.fZmSrcCssDelPre,"");
			vImgFra.fImgTop = this.xInt(this.xReadStyle(vImgFra.fImg,"borderTopWidth"));
			vImgFra.fImgLeft = this.xInt(this.xReadStyle(vImgFra.fImg,"borderLeftWidth"));
			vImgFra.fWidth = vImgFra.fImg.width+this.xInt(this.xReadStyle(vImgFra.fImg,"borderLeftWidth"))+this.xInt(this.xReadStyle(vImgFra.fImg,"borderRightWidth"));
			vImgFra.fHeight = vImgFra.fImg.height+this.xInt(this.xReadStyle(vImgFra.fImg,"borderTopWidth"))+this.xInt(this.xReadStyle(vImgFra.fImg,"borderBottomWidth"));
			vImgFra.style.width = vImgFra.fWidth+"px";
			vImgFra.style.height = vImgFra.fHeight+"px";
			vImgFra.fImg.fBdW = this.xInt(this.xReadStyle(vImgFra.fImg,"borderTopWidth"));
			vImgFra.fImg.fBdC = this.xReadStyle(vImgFra.fImg,"borderTopColor");
			vImgFra.fImg.style.cursor="crosshair";
			vImgFra.fImg.onmouseover = this.xShowZoom;
			vImgFra.fImg.onmousemove = this.xImgMove;
			vImgFra.fImg.fZm = document.createElement("div");
			vImgFra.fImg.fZm.style.position="absolute";
			vImgFra.fImg.fZm.fWidth = Math.round(vImgFra.fImg.width*this.fZmScale);
			vImgFra.fImg.fZm.fHeight = Math.round(vImgFra.fImg.height*this.fZmScale);
			vImgFra.fImg.fZm.fAct = false;
			vImgFra.fImg.fZm.fMax = false;
			vImgFra.fImg.fZm.fMaxMode = this.fZmMaxMode;
			vImgFra.fImg.fZm.fPanMode = this.fZmPanMode;
			vImgFra.fImg.fZm.fNewWin = this.fZmNewWin;
			vImgFra.fImg.fZm.fMaxDefault = vImgFra.fWidth <= this.fMinDimMaxDefault || vImgFra.fHeight <= this.fMinDimMaxDefault;
			vImgFra.fImg.fZm.fImgFra = vImgFra;
			vImgFra.fImg.fZm.fImg = vImgFra.fImg;
			vImgFra.fImg.fZm.fSrc = (vImgFra.fZmSrc.src || vImgFra.fZmSrc.href);
			vImgFra.fImg.fZm.style.width = vImgFra.fImg.fZm.fWidth+"px";
			vImgFra.fImg.fZm.style.height = vImgFra.fImg.fZm.fHeight+"px";
			vImgFra.fImg.fZm.style.backgroundColor = "white";
			vImgFra.fImg.fZm.style.backgroundImage = "url("+vImgFra.fImg.fZm.fSrc+")";
			vImgFra.fImg.fZm.style.cursor="crosshair";
			vImgFra.fImg.fZm.fZmBdW = Math.max(Math.max(this.fZmBdW,this.xInt(this.xReadStyle(vImgFra.fImg,"borderTopWidth"))),this.xInt(this.xReadStyle(vImgFra.fImg,"borderLeftWidth")))
			vImgFra.fImg.fZm.fZmBdW = Math.max(Math.max(vImgFra.fImg.fZm.fZmBdW,this.xInt(this.xReadStyle(vImgFra.fImg,"borderBottomWidth"))),this.xInt(this.xReadStyle(vImgFra.fImg,"borderRightWidth")))
			vImgFra.fImg.fZm.style.border=vImgFra.fImg.fZm.fZmBdW+"px solid "+this.fZmBdC;
			vImgFra.fImg.fZm.style.zIndex = "100";
			vImgFra.fImg.fZm.style.display = "none";
			vImgFra.fImg.fZm.onmousemove = this.xMoveZoom;
			vImgFra.fImg.fZm.onmouseout = this.xHideZoom;
			if (this.fZmMaxMode > 0) vImgFra.fImg.fZm.onclick = this.xClickZoom;
			vImgFra.appendChild(vImgFra.fImg.fZm);
			if (this.fTtTxt) {
				vImgFra.fImg.fZm.fTt = document.createElement("div");
				vImgFra.fImg.fZm.fTt.style.position="absolute";
				vImgFra.fImg.fZm.fTt.style.maxWidth = Math.round(vImgFra.fWidth*0.9)+"px";
				vImgFra.fImg.fZm.fTt.style.color="InfoText";
				vImgFra.fImg.fZm.fTt.style.backgroundColor="InfoBackground";
				vImgFra.fImg.fZm.fTt.style.border="1px solid ThreeDShadow";
				vImgFra.fImg.fZm.fTt.style.padding="2px";
				vImgFra.fImg.fZm.fTt.style.textAlign="left";
				vImgFra.fImg.fZm.fTt.innerHTML=this.fTtTxt;
				vImgFra.fImg.fZm.fTt.style.display = "none";
				vImgFra.fImg.fZm.fTt.style.top = vImgFra.fHeight+3+"px";
				vImgFra.fImg.fZm.fTt.style.right = 3+"px";
				vImgFra.fImg.fZm.fTt.style.zIndex = "1000";
			}
			vImgFra.fImg.fZm.fOl = document.createElement("div");
			vImgFra.fImg.fZm.fOl.className=vImgFra.className+"_zmol";
			vImgFra.fImg.fZm.fOl.style.position="absolute";
			vImgFra.fImg.fZm.fOl.style.zIndex = "99";
			vImgFra.fImg.fZm.fOl.onmouseover = this.xHideZoomOl;
			vImgFra.appendChild(vImgFra.fImg.fZm.fOl);
		} catch(e){
			scCoLib.util.logError("imgZoomMgr.onLoad::Error", e);
		}
	}
}
imgZoomMgr.loadSortKey = "imgz";

imgZoomMgr.xShowZoom = function(pEvt) {
	scCoLib.util.log("imgZoomMgr.xShowZoom");
	var vEvt = imgZoomMgr.xGetEvt(pEvt);
	var vImg = vEvt.target;
	try {
		var vZm = vImg.fZm;
		vZm.fAct = true;
		var vX = (typeof vEvt.layerX != "undefined" ? vEvt.layerX : vEvt.offsetX);
		var vY = (typeof vEvt.layerY != "undefined" ? vEvt.layerY : vEvt.offsetY);
		if (vZm.fMaxDefault) imgZoomMgr.xMaxZoom(vZm,true);
		else imgZoomMgr.xUpdtZoom(vImg, vZm, vX, vY,true);
		vZm.style.display = "";
		vZm.fOl.style.display = "none";
		if (vZm.fTt) {
			if (vZm.fTt.fHideTtID) window.clearTimeout(vZm.fTt.fHideTtID);
			vZm.fTt.fHideTtID = window.setTimeout(function(){vZm.fTt.style.display = "none"}, 3000);
			vZm.fTt.style.display = "";
			if (!vZm.fTt.fAdded){
				vZm.fImgFra.appendChild(vZm.fTt);
				vZm.fTt.fAdded = true;
			}
		}
	} catch(e){
		scCoLib.util.logError("imgZoomMgr.xShowZoom::Error", e);
	}
}
imgZoomMgr.xImgMove = function(pEvt) {
	scCoLib.util.log("imgZoomMgr.xImgMove");
	var vEvt = imgZoomMgr.xGetEvt(pEvt);
	var vImg = vEvt.target;
	try {
		var vZm = vImg.fZm;
		if (!vZm.fAct) imgZoomMgr.xShowZoom(pEvt);
	} catch(e){
		scCoLib.util.logError("imgZoomMgr.xImgMove::Error", e);
	}
}
imgZoomMgr.xHideZoomOl = function(pEvt) {
	scCoLib.util.log("imgZoomMgr.xHideZoomOl");
	var vEvt = imgZoomMgr.xGetEvt(pEvt);
	var vZmOl = vEvt.target;
	vZmOl.style.display = "none";
}
imgZoomMgr.xHideZoom = function(pEvt) {
	scCoLib.util.log("imgZoomMgr.xHideZoom");
	var vEvt = imgZoomMgr.xGetEvt(pEvt);
	var vZm = vEvt.target;
	try {
		vZm.fAct = false;
		imgZoomMgr.xMaxZoom(vZm,false);
		vZm.style.display = "none";
		vZm.fOl.style.display = "";
		if (vZm.fTt) {
			if (vZm.fTt.fHideTtID) window.clearTimeout(vZm.fTt.fHideTtID);
			vZm.fTt.fHideTtID = null;
			vZm.fTt.style.display = "none";
		}
	} catch(e){
		scCoLib.util.logError("imgZoomMgr.xHideZoom::Error", e);
	}
}
imgZoomMgr.xMoveZoom = function(pEvt) {
	var vEvt = imgZoomMgr.xGetEvt(pEvt);
	var vZm = vEvt.target;
	var vImg = vZm.fImg;
	var vX = vZm.offsetLeft + (typeof vEvt.layerX != "undefined" ? vEvt.layerX : vEvt.offsetX);
	var vY = vZm.offsetTop + (typeof vEvt.layerY != "undefined" ? vEvt.layerY : vEvt.offsetY);
	try {
		if (!vZm.fMax) {
			imgZoomMgr.xUpdtZoom(vImg,vZm,vX,vY,true);
		} else if (vZm.fMaxDefault || vZm.fPanMode == 1 || (vZm.fPanMode == 2 && vEvt.ctrlKey)) {
			imgZoomMgr.xUpdtZoom(vImg,vZm,vX,vY,false);
		}
	} catch(e){
		scCoLib.util.logError("imgZoomMgr.xMoveZoom::Error", e);
	}
}
imgZoomMgr.xUpdtZoom = function(pImg, pZm, pX, pY, pUpdtPos) {
	try {
		var vTop = Math.round(Math.min(pImg.height+(imgZoomMgr.fIsIeQuirks?2*pImg.fBdW:0)-pZm.fHeight, Math.max(0,pY - pZm.fHeight/2)));
		var vLeft = Math.round(Math.min(pImg.width+(imgZoomMgr.fIsIeQuirks?2*pImg.fBdW:0)-pZm.fWidth, Math.max(0,pX - pZm.fWidth/2)));
		if (pUpdtPos) {
			pZm.style.left = (vLeft+pZm.fImgFra.fImgLeft-pZm.fZmBdW)+"px";
			pZm.style.top = (vTop+pZm.fImgFra.fImgTop-pZm.fZmBdW)+"px";
		}
		pZm.style.backgroundPosition = Math.round(Math.min(vLeft/(pImg.width-pZm.fWidth)*100,100))+"% "+Math.round(Math.min(vTop/(pImg.height-pZm.fHeight)*100,100))+"%"
	} catch(e){
		scCoLib.util.logError("imgZoomMgr.xUpdtZoom::Error", e);
	}
}
imgZoomMgr.xClickZoom = function(pEvt) {
	scCoLib.util.log("imgZoomMgr.xClickZoom");
		var vEvt = imgZoomMgr.xGetEvt(pEvt);
	var vZm = vEvt.target;
	if ("scImgMgr" in window) {
		var vSeqFra = scPaLib.findNode("anc:div.screenSeqFra",vZm);
		if (vSeqFra) scImgMgr.xPseAnm(vSeqFra);
	}
	if (vZm.fNewWin > 0 && vEvt.shiftKey) {
		window.open(vZm.fSrc,"_blank");
	} else if (!vZm.fMaxDefault) {
		imgZoomMgr.xMaxZoom(vZm,!vZm.fMax);
	}
}
imgZoomMgr.xMaxZoom = function(pZm, pMax) {
	try {
		if (pMax){
			pZm.fMax = true;
			pZm.fTop = pZm.offsetTop;
			pZm.fLeft = pZm.offsetLeft;
			pZm.style.top = "0px";
			pZm.style.left = "0px";
			pZm.style.width = pZm.fImg.width+(imgZoomMgr.fIsIeQuirks?2*pZm.fImg.fBdW:0)+"px";
			pZm.style.height = pZm.fImg.height+(imgZoomMgr.fIsIeQuirks?2*pZm.fImg.fBdW:0)+"px";
			pZm.style.border = pZm.fImg.fBdW+"px solid "+pZm.fImg.fBdC;
		} else {
			pZm.fMax = false;
			if(pZm.fTop) pZm.style.top = pZm.fTop+"px";
			if(pZm.fLeft) pZm.style.left = pZm.fLeft+"px";
			pZm.style.width = pZm.fWidth+"px";
			pZm.style.height = pZm.fHeight+"px";
			pZm.style.cursor="crosshair";
			pZm.style.border=pZm.fZmBdW+"px solid "+this.fZmBdC;
		}
	} catch(e){
		scCoLib.util.logError("imgZoomMgr.xMaxZoom::Error", e);
	}
}
/** imgZoomMgr.xGetEvt : cross-browser event retreiver
 */
imgZoomMgr.xGetEvt = function(pEvt) {
	var vEvt = pEvt || window.event;
	if (vEvt.srcElement && !vEvt.target) vEvt.target = vEvt.srcElement;
	return(vEvt);
}
/** imgZoomMgr.xReadStyle : cross-browser css rule reader
 */
imgZoomMgr.xReadStyle = function(pElt, pProp) {
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
/** imgZoomMgr.xInt : parseInt that always returns 0 if not an int.
 */
imgZoomMgr.xInt = function(pVar){
	var vRet;
	return isNaN(vRet = parseInt(pVar))? 0 : vRet;
}

