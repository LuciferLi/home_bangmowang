//弹出框
 function openModal(modal){	  
	  promptBox(modal);
	  $(modal).show();
	  createModalBackdrop();  
  }
  
  //关闭模态窗
  function closeModal(modal){  
	  $(modal).hide();
	  removeModalBackdrop();  
  }
  //创建模态窗半透明
  function createModalBackdrop(){
	  $("body").append("<div class='modal-backdrop fade in'></div>");
  }
  //删除模态窗半透明
  function removeModalBackdrop(){
	  $(".modal-backdrop").remove();
  }
  //计算模态窗居中
function promptBox(modal){
	var W,H,L,T;
	W=$(modal).innerWidth();
	H=$(modal).innerHeight();
	L=W/2*-1;
	T=H/2*-1;
	$(modal).css({"left":"50%","top":"50%","marginLeft":L,"marginTop":T});
}
