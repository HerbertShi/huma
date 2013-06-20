/**********************************
图片轮播
$obj为图片轮播对象
imglist为图片数组，结构：
[{
	img:"",
	title:"",
	desc:"",
	url:""
}]
objClass为增加给图片轮播对象的class



<style type="text/css">
	.slider-pic-element{
		display: none;
	}
	.ullist .active{
		color:red;
	}
</style>
**************************************/



$(function() {
	var slider = function($obj, imglist, objClass) {
		$obj.empty();
		var $piclist = $("<div class=\"piclist\"></div>");
		var $ullist = $("<ul class=\"ullist\"></ul>");
		var imgTemplate = "<a href=\"{{url}}\"><img width=\"" + $obj.width() + "\" height=\"" + $obj.height() + "\" src=\"{{img}}\" title=\"{{title}}\" alt=\"{{title}}\" /></a>"
		$(imglist).each(function(index) {
			$piclist.append("<div class=\"slider-pic-element\">" + imgTemplate.replace(/\{\{img\}\}/g, this.img).replace(/\{\{title\}\}/g, this.title).replace(/\{\{url\}\}/g, this.url) + "</div>");
			$ullist.append("<li class=\"slider-ul-element\">" + (index + 1) + "</li>");
		});
		$ullist.append("<li style=\"clear:both;\"></li>");

		var currentIndex = 0;

		var activePicture = function() {
			$piclist.children(".slider-pic-element").hide();
			$($piclist.children(".slider-pic-element")[currentIndex]).show();

			$ullist.children(".slider-ul-element").removeClass("active");
			$($ullist.children(".slider-ul-element")[currentIndex]).addClass("active");
		};

		activePicture();
		var play = setInterval(function() {
			currentIndex++;
			if (currentIndex >= imglist.length) {
				currentIndex = 0;
			}
			activePicture();
		}, 1000);

		$ullist.children(".slider-ul-element").hover(function() {
			clearInterval(play);
			currentIndex = $(this).index();
			activePicture();
		}, function() {
			play = setInterval(function() {
				currentIndex++;
				if (currentIndex >= imglist.length) {
					currentIndex = 0;
				}
				activePicture();
			}, 1000);
		});

		$obj.append($piclist).append($ullist);
		$obj.addClass(objClass);
	};

	var _imglist = [];
	_imglist.push({
		img: "images/ad/serviceBanner01.png",
		title: "1",
		url: "#"
	});
	_imglist.push({
		img: "images/ad/serviceBanner01.png",
		title: "1",
		url: "#"
	});
	_imglist.push({
		img: "images/ad/serviceBanner01.png",
		title: "1",
		url: "#"
	});
	slider($("#slider"), _imglist, "slider");
});