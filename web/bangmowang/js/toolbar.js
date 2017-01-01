$(document).ready(function(){
	$('.tbar-cart-item').hover(function (){ 
		$(this).find('.p-del').show(); },function(){ $(this).find('.p-del').hide(); 
		});
		
		$('.jth-item').hover(function (){ 
		$(this).find('.add-cart-button').show(); },function(){ $(this).find('.add-cart-button').hide(); 
		});
		
		$('.toolbar-tab').hover(function (){ 
		$(this).find('.tab-text').addClass("tbar-tab-hover"); 
		$(this).find('.footer-tab-text').addClass("tbar-tab-footer-hover"); 
		$(this).addClass("tbar-tab-selected");},function(){ 
		$(this).find('.tab-text').removeClass("tbar-tab-hover"); 
		$(this).find('.footer-tab-text').removeClass("tbar-tab-footer-hover"); 
		$(this).removeClass("tbar-tab-selected"); 
	});

	
	
	$('.tbar-tab-cart').on("click",function (e){ 
		if($('.toolbar-wrap').hasClass('toolbar-open')){
			if($(this).find('.tab-text').length > 0){
				if(! $('.tbar-tab-follow').find('.tab-text').length > 0){
					var info = "<em class='tab-text '>我的关注</em>";
					$('.tbar-tab-follow').append(info);
					$('.tbar-tab-follow').removeClass('tbar-tab-click-selected'); 
					$('.tbar-panel-follow').css({'visibility':"hidden","z-index":"-1"});
				}
				if(! $('.tbar-tab-history').find('.tab-text').length > 0){
					var info = "<em class='tab-text '>我的足迹</em>";
					$('.tbar-tab-history').append(info);
					$('.tbar-tab-history').removeClass('tbar-tab-click-selected'); 
					$('.tbar-panel-history').css({'visibility':"hidden","z-index":"-1"});
				}
				$(this).addClass('tbar-tab-click-selected'); 
				$(this).find('.tab-text').remove();
				$('.tbar-panel-cart').css({'visibility':"visible","z-index":"1"});
				
			}else{
				var info = "<em class='tab-text '>购物车</em>";
				$('.toolbar-wrap').removeClass('toolbar-open');
				$(this).append(info);
				$(this).removeClass('tbar-tab-click-selected');
				//$('.tbar-panel-cart').css({'visibility':"hidden","z-index":"-1"});
			}
			return false;
			
		}else{ 
			$(this).addClass('tbar-tab-click-selected'); 
			$(this).find('.tab-text').remove();
			$('.tbar-panel-cart').css({'visibility':"visible","z-index":"1"});
			$('.tbar-panel-follow').css('visibility','hidden');
			$('.tbar-panel-history').css('visibility','hidden');
			$('.toolbar-wrap').addClass('toolbar-open'); 
		};

		//点击页面空白区域收缩
		/*$(document).on("click","*",function(){
			if($('.toolbar-wrap').hasClass('toolbar-open')){
				$('.toolbar-wrap').removeClass('toolbar-open'); 
			//return false;	
			}else{
				var info = "<em class='tab-text '>购物车</em>";
				$('.toolbar-wrap').removeClass('toolbar-open');
				$('.tbar-tab-cart').append(info);
				$('.tbar-tab-cart').removeClass('tbar-tab-click-selected');
				
			};
			
			
			
		});*/
		//点击页面空白区域收缩除了点击自身会收缩，阻止冒泡
		/*$(".toolbar-panel").click(function(){return false})
		e.stopPropagation();*/
		
	})


	/*$('.tbar-tab-cart').click(function (){ 
		if($('.toolbar-wrap').hasClass('toolbar-open')){
			if($(this).find('.tab-text').length > 0){
				if(! $('.tbar-tab-follow').find('.tab-text').length > 0){
					var info = "<em class='tab-text '>鎴戠殑鍏虫敞</em>";
					$('.tbar-tab-follow').append(info);
					$('.tbar-tab-follow').removeClass('tbar-tab-click-selected'); 
					$('.tbar-panel-follow').css({'visibility':"hidden","z-index":"-1"});
				}
				if(! $('.tbar-tab-history').find('.tab-text').length > 0){
					var info = "<em class='tab-text '>鎴戠殑瓒宠抗</em>";
					$('.tbar-tab-history').append(info);
					$('.tbar-tab-history').removeClass('tbar-tab-click-selected'); 
					$('.tbar-panel-history').css({'visibility':"hidden","z-index":"-1"});
				}
				$(this).addClass('tbar-tab-click-selected'); 
				$(this).find('.tab-text').remove();
				$('.tbar-panel-cart').css({'visibility':"visible","z-index":"1"});
				
			}else{
				var info = "<em class='tab-text '>鎴戠殑鍏虫敞</em>";
				$('.toolbar-wrap').removeClass('toolbar-open');
				$(this).append(info);
				$(this).removeClass('tbar-tab-click-selected');
				$('.tbar-panel-cart').css({'visibility':"hidden","z-index":"-1"});
			}
			 
			
		}else{ 
			$(this).addClass('tbar-tab-click-selected'); 
			$(this).find('.tab-text').remove();
			$('.tbar-panel-cart').css({'visibility':"visible","z-index":"1"});
			$('.tbar-panel-follow').css('visibility','hidden');
			$('.tbar-panel-history').css('visibility','hidden');
			$('.toolbar-wrap').addClass('toolbar-open'); 
		}
		return false;
	});*/
	/*$('.tbar-tab-follow').click(function (){ 
		if($('.toolbar-wrap').hasClass('toolbar-open')){
			if($(this).find('.tab-text').length > 0){
				if(! $('.tbar-tab-cart').find('.tab-text').length > 0){
					var info = "<em class='tab-text '>购物车</em>";
					$('.tbar-tab-cart').append(info);
					$('.tbar-tab-cart').removeClass('tbar-tab-click-selected'); 
					$('.tbar-panel-cart').css({'visibility':"hidden","z-index":"-1"});
				}
				if(! $('.tbar-tab-history').find('.tab-text').length > 0){
					var info = "<em class='tab-text '>鎴戠殑瓒宠抗</em>";
					$('.tbar-tab-history').append(info);
					$('.tbar-tab-history').removeClass('tbar-tab-click-selected'); 
					$('.tbar-panel-history').css({'visibility':"hidden","z-index":"-1"});
				}
				$(this).addClass('tbar-tab-click-selected'); 
				$(this).find('.tab-text').remove();
				$('.tbar-panel-follow').css({'visibility':"visible","z-index":"1"});
				
			}else{
				var info = "<em class='tab-text '>购物车</em>";
				$('.toolbar-wrap').removeClass('toolbar-open');
				$(this).append(info);
				$(this).removeClass('tbar-tab-click-selected');
				$('.tbar-panel-follow').css({'visibility':"hidden","z-index":"-1"});
			}
			 
			
		}else{ 
			$(this).addClass('tbar-tab-click-selected'); 
			$(this).find('.tab-text').remove();
			$('.tbar-panel-cart').css('visibility','hidden');
			$('.tbar-panel-follow').css({'visibility':"visible","z-index":"1"});
			$('.tbar-panel-history').css('visibility','hidden');
			$('.toolbar-wrap').addClass('toolbar-open'); 
		}
	});*/
	/*$('.tbar-tab-history').click(function (){ 
		if($('.toolbar-wrap').hasClass('toolbar-open')){
			if($(this).find('.tab-text').length > 0){
				if(! $('.tbar-tab-follow').find('.tab-text').length > 0){
					var info = "<em class='tab-text '>我的关注</em>";
					$('.tbar-tab-follow').append(info);
					$('.tbar-tab-follow').removeClass('tbar-tab-click-selected'); 
					$('.tbar-panel-follow').css({'visibility':"hidden","z-index":"-1"});
				}
				if(! $('.tbar-tab-cart').find('.tab-text').length > 0){
					var info = "<em class='tab-text '>购物车</em>";
					$('.tbar-tab-cart').append(info);
					$('.tbar-tab-cart').removeClass('tbar-tab-click-selected'); 
					$('.tbar-panel-cart').css({'visibility':"hidden","z-index":"-1"});
				}
				$(this).addClass('tbar-tab-click-selected'); 
				$(this).find('.tab-text').remove();
				$('.tbar-panel-history').css({'visibility':"visible","z-index":"1"});
				
			}else{
				var info = "<em class='tab-text '>鎴戠殑瓒宠抗</em>";
				$('.toolbar-wrap').removeClass('toolbar-open');
				$(this).append(info);
				$(this).removeClass('tbar-tab-click-selected');
				$('.tbar-panel-history').css({'visibility':"hidden","z-index":"-1"});
			}
			
		}else{ 
			$(this).addClass('tbar-tab-click-selected'); 
			$(this).find('.tab-text').remove();
			$('.tbar-panel-cart').css('visibility','hidden');
			$('.tbar-panel-follow').css('visibility','hidden');
			$('.tbar-panel-history').css({'visibility':"visible","z-index":"1"});
			$('.toolbar-wrap').addClass('toolbar-open'); 
		}
	});*/
	$('.close-panel').click(function(){
			
			$(this).parents('.toolbar-wrap').toggleClass('toolbar-open');
			});

	
	
	//计算总件数
	/*$('.p-price').find('em').each(function(index, el) {
		var jshu = parseInt($('strong.J-count').text());
		jshu = jshu + parseInt($(el).text());
		$('.J-count').html(jshu);
	});*/



	//计算总价格
	$('.p-price').find('b').each(function(index, el){
		var zshu = parseInt($('strong.J-total').text());
		zshu = zshu + parseInt(($(el).text())*($(el).parents('.p-price').find('em').text()));
		$('strong.J-total').html(zshu);
	})


	$('.p-del').on('click',function(){
		$(this).parents(".tbar-cart-item").remove();
		//删除商品减去相应的件数
		var num = parseInt($('.J-count').html());
		var onum = parseInt($(this).parents('.jtc-item-goods').find('em').html())
		$('.J-count').html(num-onum);

		//删除商品减去相应的价格
		var znum = parseInt($('strong.J-total').text());
		var oznum = parseInt(($(this).parents('.jtc-item-goods').find('b').html())*$(this).parents('.jtc-item-goods').find('em').html());
		$('.J-total').html(znum-oznum);
	});


	$('.tbar-tab-follow').click(function(){
		
		$('.tbar-tab-cart .tab-text').text('购物车');
	})

});