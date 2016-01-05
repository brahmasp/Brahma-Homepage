$(function(){


	var $expTitles = $(".experienceOutlines");
	var $expContent = $(".experienceContent");

	var $expandAllContent = $("#expandExp");
	var $collapseAllContent = $("#collapseExp");

	$expContent.hide();

	$expTitles.on("click", function(event){
		$expContent.eq($expTitles.index(event.target)).slideToggle(300);
	});

	$expandAllContent.on("click", function(){ 
		$expContent.slideDown(300);
	});

	$collapseAllContent.on("click", function(){ 
		$expContent.slideUp(300);
	});


});





