// JavaScript Document
'use strict';
function resetComprehensionResult() {
	$("#result").attr("src", "img/result.png");
	$("#attention").attr("src", "img/attention.png");
}

function submitDemoImage(src) {
	resetComprehensionResult();
    $("#expression").val("")
	$("#chosen").attr('src', src);
    scrollTo(0, $("#chosen").offset().top)
}