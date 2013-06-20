$(function() {
	var $prevBackGround = $("<div><<<<</div>");
	var $nextBackGround = $("<div>>>>></div>");

	var backGroundList = ["images/ad/banner_1.png", "images/ad/banner_2.png"];

	var currentIndex = 0;

	var activePicture = function(range) {
		currentIndex += range;
		if (currentIndex >= backGroundList.length) {
			currentIndex = 0
		} else if (currentIndex < 0) {
			currentIndex = backGroundList.length - 1;
		}
		$(".banner").css("background-image", "url('" + backGroundList[currentIndex] + "')");
	};

	var play = setInterval(function() {
		activePicture(1);
	}, 2000);

	$prevBackGround.click(function() {
		activePicture(-1);
	});

	$nextBackGround.click(function() {
		activePicture(1);
	});

	$prevBackGround.hover(function() {
		clearInterval(play);
	}, function() {
		play = setInterval(function() {
			currentIndex++;
			if (currentIndex >= backGroundList.length) {
				currentIndex = 0;
			}
			activePicture();
		}, 2000);
	});

	$nextBackGround.hover(function() {
		clearInterval(play);
	}, function() {
		play = setInterval(function() {
			currentIndex++;
			if (currentIndex >= backGroundList.length) {
				currentIndex = 0;
			}
			activePicture();
		}, 2000);
	});

	$("body").append($prevBackGround).append($nextBackGround);
});