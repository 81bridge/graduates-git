$(function(){
	$('a[href*=\\#]:not([href=\\#])').click(function() {
	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var $target = $(this.hash);
			$target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
			if ($target.length) {
				if($(this).parents('.menuBox').length){
					setTimeout(function(){
						var targetOffset = $target.offset().top;
						$('html,body').animate({scrollTop: targetOffset - $('#gHeader').outerHeight()}, 1000);
					},100);
				}else{
					var targetOffset = $target.offset().top;
					$('html,body').animate({scrollTop: targetOffset - $('#gHeader').outerHeight()}, 1000);
				}
				return false;
			}
		}
	});
    $(window).load(function(){
		$(window).scroll(function(){
			var windowHeight = $(window).height(),
			topWindow = $(window).scrollTop();
			$('.fadein, .fadein02, .fadein03, .fadein04,.fadein05, .fadein06, .fadein07, .fadein08,.fadein09, .fadein10, .fadein11, .fadein12').each(function(){
				var targetPosition = $(this).offset().top;
				if(topWindow > targetPosition - windowHeight){
					$(this).addClass("scrollin");
				}
			});
			
		}).trigger("scroll");
	});
    
    var state = false;
	var scrollpos;

	$('#gHeader .menu').on('click', function(){
			if(state == false) {
				scrollpos = $(window).scrollTop();
				$('body').addClass('fixed').css({'top': -scrollpos});
				$('#gNavi').stop().slideDown(300);
				$('#gHeader .menu').addClass('on');
				state = true;
			} else {
				$('body').removeClass('fixed').css({'top': 0});
				window.scrollTo( 0 , scrollpos );
				$('#gNavi').stop().slideUp(300);
				$('#gHeader .menu').removeClass('on');
				state = false;
			}
			return false;	
	});
});

$(window).on('load',function(){
	var localLink = window.location+'';
	if(localLink.indexOf("#") != -1 && localLink.slice(-1) != '#'){	
		localLink = localLink.slice(localLink.indexOf("#")+1);
		$('html,body').animate({scrollTop: $('#'+localLink).offset().top - $('#gHeader').outerHeight()}, 500);
	}
});