// JavaScript Document
'use strict';
var id_chosen = -1;

function resetComprehensionResult() {
	$("#result").attr("src", "img/result.png");
	$("#attention").attr("src", "img/attention.png");
}

function submitDemoImage(src,id) {
	resetComprehensionResult();
    $.get("source_text/sentence"+id+".txt",function(data){setExpression(data)});
	$("#chosen").attr('src', src);
	id_chosen = id;
    scrollTo(0, $("#chosen").offset().top);
}

function showResult() {
	if (id_chosen==-1)
		alert("Please choose an image!")
	else
		$("#result").attr("src", "result_image/result"+id_chosen+".png");
}

function setExpression(data) {
	document.getElementById("expression").innerHTML=data;
}

function showMessage(data) {
	alert("Coming soon...");
}