var  secOutMgr = {
 fPathSecOutCo : "ide:tplc/des:div.secOutFra/chi:div.secOutUi/chi:ol",
 fPathSecOutBtn : "ide:tplc/des:div.secOutFra/chi:div.secOutTi/chi:a",
 fCo : null,
 fBtn : null,
 fClassOp : "secOut_op",
 fClassCl : "secOut_cl",
 init : function() {
  this.fCo = scPaLib.findNode(this.fPathSecOutCo);
  this.fBtn = scPaLib.findNode(this.fPathSecOutBtn);
  if(this.fCo != null && document.cookie.indexOf("secOutCollapse=true")>=0) this.toggle();
 },
 toggle : function() {
   scDynUiMgr.collBlkToggle(this.fBtn,this.fCo,this.fClassOp,this.fClassCl);
   document.cookie = "secOutCollapse="+(this.fCo.style.display == "none").toString();
 }
}

