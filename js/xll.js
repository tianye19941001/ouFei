
$(document).ready(function(){
	// 省市
	var areas = [
		{province: '北京', citys: ['东城区','西城区','房山区','丰台区','延庆县','密云县']},
		{province: '河北省', citys: ['1','2','3','4','5','6']},
		{province: '河北省', citys: ['1','2','3','4','5','6']},
		{province: '河北省', citys: ['1','2','3','4','5','6']},
		{province: '河北省', citys: ['1','2','3','4','5','6']},
		{province: '河北省', citys: ['1','2','3','4','5','6']},
		{province: '河北省', citys: ['1','2','3','4','5','6']},
		{province: '河北省', citys: ['1','2','3','4','5','6']},
		{province: '河北省', citys: ['1','2','3','4','5','6']},
		{province: '河北省', citys: ['1','2','3','4','5','6']}
	]
	if ($('.province-select').length > 0) {
		for (var i = areas.length - 1; i >= 0; i--) {
			var li = $('<li></li>');
			li.text(areas[i].province);
			li.attr('data-citys', areas[i].citys.join(','));
			$('.province-select ul').append(li);
		}
		$('body').on('click','.province-select ul li', function(){
			$('.city-select ul li').remove();
			$('.city-select>span').html('请选择');
			var text = $(this).text();
			var citys = $(this).data('citys').split(',');
			$('.province-select>span').html(text);
			for (var i = citys.length - 1; i >= 0; i--) {
				var li = $('<li></li>');
				li.text(citys[i]);
				$('.city-select ul').append(li);
			}
		})
		$('body').on('click','.city-select ul li', function(){
			var text = $(this).text();
			$('.city-select>span').html(text);
		})
	}

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

		$('.product .add').click(function(){
			changeNum(1)
		})
		$('.product .reduce').click(function(){
			changeNum(-1)
		})

		$('.product .num input').on('keyup', function(e){
			var nowVal = $(e.target).val();
			if(!nowVal || nowVal == NaN) {
				$('.product .num input').val(1);
				return;
			}
			$('.product .num input').val(parseInt(nowVal));
		})

		$('.area li, .quan li').click(function(){
			$(this).addClass('active').siblings().removeClass('active');
		})

		// 关闭弹框
		$('body').on('click', '.close-dialog' ,function(){
			$(this).parents('.same-dialog').fadeOut();
			return false;
		})
		// 订单查看详情
		$('body').on('click', '.see-detial' ,function(){
			$('.same-dialog').fadeIn();
			return false;
		})
		// 提交退换货
		$('.service-type .submit').click(function(){
			$('.same-dialog').fadeIn();
			return false;
		})
		// 退换货详情
		$('.change a').click(function(){
			$('.change-detial').fadeIn();
			return false;
		})
		$('.add-wl-btn').click(function(){
			$('.add-wl').fadeIn();
			return false;
		})
		$('.add-wl .submit').click(function(){
			$('.add-wl, .change-detial').fadeOut();
			$('.dialog-alert').fadeIn();
			return false;
		})
		// 新增地址
		$('#new-location').click(function(){
			$('.add-location').fadeIn();
			return false;
		})
		$('.add-location .submit').click(function(){
			$('.add-location').fadeOut();
			$('.dialog-alert').fadeIn();
			return false;
		})
		// 新增优惠券
		$('.new-ticket').click(function(){
			$('.add-tickets').fadeIn();
			return false;
		})
		$('.add-tickets .submit').click(function(){
			$('.add-tickets').fadeOut();
			$('.dialog-alert').fadeIn();
			return false;
		})
		// 编辑收货地址
		$('.location-list .change').click(function(){
			var tr = $(this).parents('tr');
		})

		

		function changeNum(num) {
			var nowNum = parseInt($('.product .num input').val());
			if (nowNum + num < 1) return;
			$('.product .num input').val(nowNum + num);
		}
		
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