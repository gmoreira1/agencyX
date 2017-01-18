(function(){
	// images (all of them), the heading, the subheading, the season text, appliedClass
	//var theImages = document.querySelectorAll('.image-holder'),
	//	theHeading = document.querySelector('.heading'),
	//	theSubhead = document.querySelector('.main-copy h2'),
	//	theSeasonText = document.querySelector('.main-copy p'),
	//	appliedClass;

		var $theImages = $('.image-holder'),
			$theHeading = $('.heading'),
			$theSubhead = $('.main-copy h2'),
			$theSeasonText = $('.main-copy p'),
			appliedClass;

		function changeElements(){
			//debugger;
			$theHeading.removeClass(appliedClass);
			$theSubhead.removeClass(appliedClass);
			
			appliedClass = event.currentTarget.id;
			
			$theHeading.addClass(event.currentTarget.id);
			$theSubhead.addClass(event.currentTarget.id);
			
			$theSubhead.text(dynamicContent[event.currentTarget.id].headline);
			$theSeasonText.text(dynamicContent[event.currentTarget.id].text);
		}

		$theImages.click(function(){
			//console.log('clicked');
			changeElements();
		});

		//[].forEach.call(theImages, function(image) {
		//	image.addEventListener('click', changeElements, true);
		//});

		$theSubhead.text(dynamicContent['spring'].headline);
		$theSeasonText.text(dynamicContent['spring'].text);
		$theHeading.addClass('spring');

})();