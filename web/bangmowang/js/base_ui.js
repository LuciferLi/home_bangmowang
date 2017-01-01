$(function() {
	
	$('#tabs').tabs();

	
	});
	
$(function(){
	
	
	
	 $( "#agreement" ).dialog({
		 autoOpen: false,
		 show:{
			 effect:"blind",
			 duration:500
			 
			 
		 },
		 hide:{
			 effect:"blind",
			 duration:300
		 },
		 
		 
		 modal: true,
		 width:900,
		 height:450,
		 draggable:false,
		 title: "51模材网用户注册协议"
	 	 });
	 
	 $("#reg_agr").click(function(){
		 $("#agreement").dialog("open");
		 
	 });
	 
	 
	 
	 

			
});

$(document).ready(function(){
	  $("#dialog-email").dialog({
		  autoOpen: false,
		  height: 140,
		  width:286,
          modal: true,
		  resizable: false,
		  title:"发送至邮箱",
		  buttons: {
        "确定": function() {
        	var isclose=sendEmail();
        	if(isclose){
        		$( this ).dialog( "close" );
        	}
        },
		 "取消": function() {
          $( this ).dialog( "close" );
        }
		  }
	  
	  });
     $("#sendEmail").click(function(){
		  
		  $("#dialog-email").dialog("open");
	  })
  });



//首页品牌专区

$( function(){
	 
	 $('.a3 .next').css({'background':'#000','opacity':'.3','color':'#fff'});
	 
	 $('.a3 .prev').css({'background':'#000','opacity':'.3','color':'#fff'});
	 
	 $('.a4').mouseenter(function(){
		
		   $('.a3').show(20);
		   return false;
		 
		 });
	 $('.a3').mouseleave(function(){
		
		   $('.a3').hide(20);
		   return false;
		 
		 });
	 
    $('.next').on('click',function(){
		 var jq1 = $(this).parents('.a1');
		 var jq2 = jq1.find('.a5');
		
		 
		
		 
		 
		 var offset = ($(".a5 li").width()) * -1;
		 
		 if(!jq2.is(':animated')){
			 
			 
			 
			  jq2.stop().animate({
			 left: offset
			 },'slow',function(){
				 var firstItem = $(".a5 ul li").first();
				 jq2.find("ul").append(firstItem);
			     $(this).css("left", "0px");
				 });
		     
		 };
			 
			 });
			 
			 
	$('.prev').on('click',function(){
		 var jq1 = $(this).parents('.a1');
		 var jq2 = jq1.find('.a5');
		 
		 
		 
		 
		 var offset = ($('.a5 li').width() * -1);
		 
		 var lastItem = $('.a5 ul li').last();
				 jq2.find('ul').prepend(lastItem);
			     jq2.css("left", offset);
			 
			if(!jq2.is(':animated')){ 
			 
			  jq2.animate({
			 left: '0px'
			 },'slow')
		     
			};
			
			});

 });





//浮动楼层导航

$(function(){
	// @ 给窗口加滚动条事件
	$(window).scroll(function(){
		// 获得窗口滚动上去的距离
		var ling = $(document).scrollTop();
		// 在标题栏显示滚动的距离
		//document.title = ling;
		// 如果滚动距离大于1534的时候让滚动框出来
		if(ling>1220){
			$('#box').show();
		}
		if(1221<ling && ling<1725){
			// 让第一层的数字隐藏，文字显示，让其他兄弟元素的li数字显示，文字隐藏
			$('#box ul li').eq(0).find('.num').hide().siblings('.word').css('display','block');
			$('#box ul li').eq(0).siblings('li').find('.num').css('display','block').siblings('.word').hide();
			
		
		}else if(ling<2225){
			$('#box ul li').eq(1).find('.num').hide().siblings('.word').css('display','block');
			$('#box ul li').eq(1).siblings('li').find('.num').css('display','block').siblings('.word').hide();
			
			
		}else if(ling<2725){
			$('#box ul li').eq(2).find('.num').hide().siblings('.word').css('display','block');
			$('#box ul li').eq(2).siblings('li').find('.num').css('display','block').siblings('.word').hide();
			
		
		}else if(ling<3225){
			$('#box ul li').eq(3).find('.num').hide().siblings('.word').css('display','block');
			$('#box ul li').eq(3).siblings('li').find('.num').css('display','block').siblings('.word').hide();
			
		}else if(ling<3725){
			$('#box ul li').eq(4).find('.num').hide().siblings('.word').css('display','block');
			$('#box ul li').eq(4).siblings('li').find('.num').css('display','block').siblings('.word').hide();
			
		}else if(ling<4225){
			$('#box ul li').eq(5).find('.num').hide().siblings('.word').css('display','block');
			$('#box ul li').eq(5).siblings('li').find('.num').css('display','block').siblings('.word').hide();
			
		}else if(ling<4725){
			$('#box ul li').eq(6).find('.num').hide().siblings('.word').css('display','block');
			$('#box ul li').eq(6).siblings('li').find('.num').css('display','block').siblings('.word').hide();
			
		}
		/*else if(ling<4725){
			$('#box ul li').eq(6).find('.num').hide().siblings('.word').css('display','block');
			$('#box ul li').eq(6).siblings('li').find('.num').css('display','block').siblings('.word').hide();
			
		}
		else if(ling<5133){
			$('#box ul li').eq(7).find('.num').hide().siblings('.word').css('display','block');
			$('#box ul li').eq(7).siblings('li').find('.num').css('display','block').siblings('.word').hide();
		
		}
		else if(ling<7360){
			$('#box ul li').eq(8).find('.num').hide().siblings('.word').css('display','block');
			$('#box ul li').eq(8).siblings('li').find('.num').css('display','block').siblings('.word').hide();
			
		}else if(ling<7905){
			$('#box ul li').eq(9).find('.num').hide().siblings('.word').css('display','block');
			$('#box ul li').eq(9).siblings('li').find('.num').css('display','block').siblings('.word').hide();
			
		}else if(ling<8790){
			$('#box ul li').eq(10).find('.num').hide().siblings('.word').css('display','block');
			$('#box ul li').eq(10).siblings('li').find('.num').css('display','block').siblings('.word').hide();
			
		}*/
		if(ling>4725 || ling<1220){
			// $('#box').css('display','none');  // @ 这一句和下一句效果一样。
			$('#box').hide();
		}
		
	})

})



$(function(){
	$('#box ul li').hover(function(){
		$(this).find('.num').hide().siblings('.word').css({'display':'block','background':'#CB1C39','color':'white'});
	},function(){
	
		$(this).find('.num').css({'display':'block','background':'white','color':'#666'}).siblings('.word').hide().css({'display':'none','background':'','color':''});
	})
})

$(function(){
	
	$('#box ul li').eq(0).click(function(){
		$('html,body').stop().animate({scrollTop:1365}, 500);
     })
	 
	 $('#box ul li').eq(1).click(function(){
		$('html,body').stop().animate({scrollTop:1900}, 500);
     })
	 
	 $('#box ul li').eq(2).click(function(){
		$('html,body').stop().animate({scrollTop:2440}, 500);
     })
	 
	 $('#box ul li').eq(3).click(function(){
		$('html,body').stop().animate({scrollTop:2975}, 500);
     })
	 
	 $('#box ul li').eq(4).click(function(){
		$('html,body').stop().animate({scrollTop:3515}, 500);
     })
	 
	  $('#box ul li').eq(5).click(function(){
		$('html,body').stop().animate({scrollTop:4050}, 500);
     })
	 
	  $('#box ul li').eq(6).click(function(){
		$('html,body').stop().animate({scrollTop:4588}, 500);
     })
	 
	  /*$('#box ul li').eq(7).click(function(){
		$('html,body').stop().animate({scrollTop:7060}, 800);
     })*/
	
 });

//浮动楼层导航

//开框定制
$( function(){
	 
	  $('.Pre').click(function(){

	  	$('.custom').toggle();
	  })
	  
	  
	  
	 });
//开框定制


//弹出签到框


//弹出签到框