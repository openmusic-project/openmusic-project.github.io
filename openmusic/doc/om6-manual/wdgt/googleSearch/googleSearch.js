var googleSearch = {}

googleSearch.submit = function(pForm){
	this.setQueryVal(pForm);
	pForm.submit();
}
googleSearch.setQueryVal = function(pForm){
	var vBaseURL=window.location.href;
	vBaseURL = vBaseURL.substring(vBaseURL.indexOf('//')+2,vBaseURL.lastIndexOf('/'));
	pForm.q.value=pForm.text.value+' site:'+vBaseURL;
}
