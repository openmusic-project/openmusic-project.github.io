var relNotes = {
	fRelNotes:[],
	fRelNotesFrm:null
}

relNotes.addNote = function(pId){
	var vRelNote = $(pId);
	if (this.fRelNotesFrm == null) this.fRelNotesFrm = scPaLib.findNode('anc:div.relNotesFra/des:form.relNotesFrm',vRelNote);
	var vRelNoteVers = scPaLib.findNode('des:span.relNoteVersion',vRelNote).innerHTML;
	
	this.fRelNotes[this.fRelNotes.length] = vRelNote;
	this.fRelNotesFrm.relNotesSelStart[this.fRelNotesFrm.relNotesSelStart.length] = new Option(vRelNoteVers, pId, false)
	this.fRelNotesFrm.relNotesSelEnd[this.fRelNotesFrm.relNotesSelEnd.length] = new Option(vRelNoteVers, pId, true)
}
relNotes.updateStart = function(pNode){
	if (this.fRelNotesFrm.relNotesSelEnd.selectedIndex < this.fRelNotesFrm.relNotesSelStart.selectedIndex) 
		this.fRelNotesFrm.relNotesSelEnd[this.fRelNotesFrm.relNotesSelStart.selectedIndex].selected = true;
	this.xUpdate(pNode);
}
relNotes.updateEnd = function(pNode){
	if (this.fRelNotesFrm.relNotesSelStart.selectedIndex > this.fRelNotesFrm.relNotesSelEnd.selectedIndex)
		this.fRelNotesFrm.relNotesSelStart[this.fRelNotesFrm.relNotesSelEnd.selectedIndex].selected = true;
	this.xUpdate(pNode);
}
relNotes.xUpdate = function(pNode){
	for (var i in this.fRelNotes) {
		if (i >= this.fRelNotesFrm.relNotesSelStart.selectedIndex && i <= this.fRelNotesFrm.relNotesSelEnd.selectedIndex) this.fRelNotes[i].style.display='';
		else this.fRelNotes[i].style.display='none';
	}
}


