
$(document).ready(function(){
	// 公共方法
	var publicFuc = {
		stophref: function(e){
			if ( e && e.preventDefault ){
				e.preventDefault(); 
			}else{
				window.event.returnValue = false; 
				return false;
			}
		},
		stopbubble: function(e){
			if ( e && e.stopPropagation ){
				e.stopPropagation(); 
			}else{
				window.event.cancelBubble = true;
				return false;
			}
		},
		movescroll: function(btn,to) {
			$('html,body').animate({scrollTop: $(to).offset().top-60},600);
		}
	}

	function setHeight() {
		var conWidth = $(window).width() > 1440 ? $(window).width() : 1440;
		var swiperHeight = conWidth / 1440 * 792;
		$('.swiper-container-index').height(swiperHeight);
	}

	if (document.body.clientWidth>=768) {
		// pc事件和方法
		setHeight();
		$(window).resize(function(){
			setHeight();
		})
		$('.know i').click(function(){
			$('.know-book').fadeIn();
		})
		
		$('.know-book .close, .know-book .bac-bar').click(function(){
			$('.know-book').fadeOut();
		})
		
	}else{
		// rem自动计算
        fnResize();
        window.addEventListener("resize", function() {
            fnResize()
        }, false);

        function fnResize(){
            var docWidth = document.documentElement.clientWidth,
                body = document.getElementsByTagName('html')[0];
            body.style.fontSize = docWidth / 32 + 'px';
        }

        // 移动事件和方法
       
	}
});