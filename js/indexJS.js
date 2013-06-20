$(function() {
	var $prevBackGround = $("<div><<<<</div>");
	var $nextBackGround = $("<div>>>>></div>");

	var backGroundList = ["images/ad/banner_1.png", "images/ad/banner_2.png"];

	var currentIndex = 0;
	var play = setInterval(function() {
		currentIndex++;
		if (currentIndex >= backGroundList.length) {
			currentIndex = 0
		}
		$(".banner").css("background-image", "url('" + backGroundList[currentIndex] + "')");
	}, 2000);

	$prevBackGround.click(function(){
		currentIndex--
		if(currentIndex <= 0){
			currentIndex = 0;
		}
		$(".banner").css("background-image", "url('" + backGroundList[currentIndex] + "')");
	});

	$nextBackGround.click(function(){
		currentIndex++
		if(currentIndex >= backGroundList.length){
			currentIndex = 0;
		}
		$(".banner").css("background-image", "url('" + backGroundList[currentIndex] + "')");
	});
});