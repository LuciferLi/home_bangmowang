/*
 * Copyright 2005-2015 shopxx.net. All rights reserved.
 * Support: http://www.shopxx.net
 * License: http://www.shopxx.net/license
 * 
 * JavaScript - Common
 * Version: 4.0
 */

var shopxx = {
	base: "",
	locale: "zh_CN",
	theme: "default"
};

var setting = {
	priceScale: 2,
	priceRoundType: "roundHalfUp",
	currencySign: "￥",
	currencyUnit: "元",
	uploadMaxSize: 10,  
	uploadImageExtension: "jpg,jpeg,bmp,gif,png",
	uploadMediaExtension: "swf,flv,mp3,wav,avi,rm,rmvb",
	uploadFileExtension: "zip,rar,7z,doc,docx,xls,xlsx,ppt,pptx"
};

var messages = {
	"shop.message.success": "操作成功",
	"shop.message.error": "操作错误",
	"shop.dialog.ok": "确 定",
	"shop.dialog.cancel": "取 消",
	"shop.dialog.deleteConfirm": "您确定要删除吗？",
	"shop.dialog.clearConfirm": "您确定要清空吗？"
};
var cartRole = "";
// 添加Cookie
function addCookie(name, value, options) {
	if (arguments.length > 1 && name != null) {
		if (options == null) {
			options = {};
		}
		if (value == null) {
			options.expires = -1;
		}
		if (typeof options.expires == "number") {
			var time = options.expires;
			var expires = options.expires = new Date();
			expires.setTime(expires.getTime() + time * 1000);
		}
		if (options.path == null) {
			options.path = "/";
		}
		if (options.domain == null) {
			options.domain = "";
		}
		document.cookie = encodeURIComponent(String(name)) + "=" + encodeURIComponent(String(value)) + (options.expires != null ? "; expires=" + options.expires.toUTCString() : "") + (options.path != "" ? "; path=" + options.path : "") + (options.domain != "" ? "; domain=" + options.domain : "") + (options.secure != null ? "; secure" : "");
	}
}

// 获取Cookie
function getCookie(name) {
	if (name != null) {
		var value = new RegExp("(?:^|; )" + encodeURIComponent(String(name)) + "=([^;]*)").exec(document.cookie);
		return value ? decodeURIComponent(value[1]) : null;
	}
}

// 移除Cookie
function removeCookie(name, options) {
	addCookie(name, null, options);
}

// Html转义
function escapeHtml(str) {
	return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

// 字符串缩略
function abbreviate(str, width, ellipsis) {
	if ($.trim(str) == "" || width == null) {
		return str;
	}
	var i = 0;
	for (var strWidth = 0; i < str.length; i++) {
		strWidth = /^[\u4e00-\u9fa5\ufe30-\uffa0]$/.test(str.charAt(i)) ? strWidth + 2 : strWidth + 1;
		if (strWidth >= width) {
			break;
		}
	}
	return ellipsis != null && i < str.length - 1 ? str.substring(0, i) + ellipsis : str.substring(0, i);
}

// 货币格式化
function currency(value, showSign, showUnit) {
	if (value != null) {
			var price = (Math.round(value * Math.pow(10, 2)) / Math.pow(10, 2)).toFixed(2);
		if (showSign) {
			price = '￥' + price;
		}
		if (showUnit) {
			price += '元';
		}
		return price;
	}
}

// 多语言
function message(code) {
	if (code != null) {
		var content = messages[code] != null ? messages[code] : code;
		if (arguments.length == 1) {
			return content;
		} else {
			if ($.isArray(arguments[1])) {
				$.each(arguments[1], function(i, n) {
					content = content.replace(new RegExp("\\{" + i + "\\}", "g"), n);
				});
				return content;
			} else {
				$.each(Array.prototype.slice.apply(arguments).slice(1), function(i, n) {
					content = content.replace(new RegExp("\\{" + i + "\\}", "g"), n);
				});
				return content;
			}
		}
	}
}

(function($) {

	var zIndex = 100;
	
	// 检测登录
	$.checkLogin = function() {
		var result = false;
		$.ajax({
			url: "/login/check.jhtml",
			type: "GET",
			dataType: "json",
			cache: false,
			async: false,
			success: function(data) {
				result = data;
			}
		});
		return result;
	}
	
	// 跳转登录
	$.redirectLogin = function (redirectUrl, message) {
		//var href = "/login.jhtml";
		//if (redirectUrl != null) {
			//href += "?redirectUrl=" + encodeURIComponent(redirectUrl);
		//}
		if (message != null) {
			$.message("warn", message);
			setTimeout(function() {
				//location.href = href;
				$.login({
					onSuccess: function() {
						if (redirectUrl != null && redirectUrl != "" && redirectUrl != "undefined" && redirectUrl != undefined && redirectUrl != "null") {
							location.href = redirectUrl;
						}
					},onFailure: function(){
					
					},onFinish: function(){
							
					}
				});
			}, 1000);
		} else {
			//location.href = href;
			$.login({
				onSuccess: function() {
					if (redirectUrl != null && redirectUrl != "" && redirectUrl != "undefined" && redirectUrl != undefined && redirectUrl != "null") {
						location.href = redirectUrl;
					}
				},onFailure: function(){
				
				},onFinish: function(){
						
				}
			});
		}
	}
	
	// 消息框
	var $message;
	var messageTimer;
	$.message = function() {
		var message = {};
		if ($.isPlainObject(arguments[0])) {
			message = arguments[0];
		} else if (typeof arguments[0] === "string" && typeof arguments[1] === "string") {
			message.type = arguments[0];
			message.content = arguments[1];
		} else {
			return false;
		}
		
		if (message.type == null || message.content == null) {
			return false;
		}
		
		if ($message == null) {
			$message = $('<div class="xxMessage"><div class="messageContent message' + escapeHtml(message.type) + 'Icon"><\/div><\/div>');
			if (!window.XMLHttpRequest) {
				$message.append('<iframe class="messageIframe"><\/iframe>');
			}
			$message.appendTo("body");
		}
		
		$message.children("div").removeClass("messagewarnIcon messageerrorIcon messagesuccessIcon").addClass("message" + message.type + "Icon").html(message.content);
		$message.css({"margin-left": - parseInt($message.outerWidth() / 2), "z-index": 9999}).show();
		
		clearTimeout(messageTimer);
		messageTimer = setTimeout(function() {
			$message.hide();
		}, 3000);
		return $message;
	}

	$.fn.extend({
		// 文件上传
		uploader: function(options) {
			var settings = {
				url: '/file/upload.jhtml',
				fileType: "image",
				fileName: "file",
				data: {},
				maxSize: 10,
				extensions: null,
				before: null,
				complete: null
			};
			var opts = $.extend(settings, options);
			
			if (settings.extensions == null) {
				switch(settings.fileType) {
					case "media":
						settings.extensions = 'swf,flv,mp3,wav,avi,rm,rmvb';
						break;
					case "file":
						settings.extensions = 'zip,rar,7z,doc,docx,xls,xlsx,ppt,pptx';
						break;
					default:
						settings.extensions = 'jpg,jpeg,bmp,gif,png';
				}
			}
			
			var $progressBar = $('<div class="progressBar"><\/div>').appendTo("body");
			return this.each(function() {
				var element = this;
				var $element = $(element);
				
				var webUploader = WebUploader.create({
					swf: '/resources/shop/default/flash/webuploader.swf',
					server: settings.url + (settings.url.indexOf('?') < 0 ? '?' : '&') + 'fileType=' + settings.fileType + '&token=' + getCookie("token"),
					pick: {
						id: element,
						multiple: false
					},
					fileVal: settings.fileName,
					formData: settings.data,
					fileSingleSizeLimit: settings.maxSize * 1024 * 1024,
					accept: {
						extensions: settings.extensions
					},
					fileNumLimit: 1,
					auto: true
				}).on('beforeFileQueued', function(file) {
					if ($.isFunction(settings.before) && settings.before.call(element, file) === false) {
						return false;
					}
					if ($.trim(settings.extensions) == '') {
						this.trigger('error', 'Q_TYPE_DENIED');
						return false;
					}
					this.reset();
					$progressBar.show();
				}).on('uploadProgress', function(file, percentage) {
					$progressBar.width(percentage * 100 + '%');
				}).on('uploadAccept', function(file, data) {
					$progressBar.fadeOut("slow", function() {
						$progressBar.width(0);
					});
					if (data.message.type != 'success') {
						$.message(data.message);
						return false;
					}
					$element.prev("input:text").val(data.url);
					//根据传过来的参数决定是否需要回调
					if(opts.isCallback){
						uploaderCallback(data.url);
					}
					if ($.isFunction(settings.complete)) {
						settings.complete.call(element, file, data);
					}
				}).on('error', function(type) {
					switch(type) {
						case "F_EXCEED_SIZE":
							$.message("warn", "上传文件大小超出限制");
							break;
						case "Q_TYPE_DENIED":
							$.message("warn", "上传文件格式不正确");
							break;
						default:
							$.message("warn", "上传文件出现错误");
					}
				});
				
				$element.mouseover(function() {
					webUploader.refresh();
				});
			});
		}

	});
	

})(jQuery);

$().ready(function() {

	var $window = $(window);
	 //var $goTop = $('<div class="goTop"><\/div>').appendTo("body");
	//var $top = $('<a href="javascript:;">&nbsp;<\/a>').appendTo($goTop);
	//var $addFavorite = $('<a href="javascript:;">&nbsp;<\/a>').appendTo($goTop);
	var $headerCartQuantity = $("#headerCart em");
	var $headerMessageQuantity = $("#headerMessage em");
	// 返回顶部
	//$window.scroll(function() {
	//	if($window.scrollTop() > 100) {
	//		$goTop.fadeIn();
	//	} else {
	//		$goTop.fadeOut();
	//	}
	//});
	
	// 返回顶部
	//$top.click(function() {
	//	$("body, html").animate({scrollTop: 0});
	//});
	
	// 添加收藏
	//$addFavorite.click(function() {
	//	var title = document.title;
	//	var url = document.url;
	//	if (document.all) {
	//		window.external.addFavorite(url, title);
	//	} else if (window.sidebar && window.sidebar.addPanel) {
	//		window.sidebar.addPanel(title, url, "");
	//	} else {
	//		alert("请使用 Ctrl+D 进行添加");
	//	}
	//});
	
	// 显示购物车数量
	function showHeaderCartQuantity() {
		if ($headerCartQuantity.size() == 0) {
			return;
		}
		var cartQuantity = getCookie("cartQuantity");
		var messageQuantity = getCookie("messageQuantity");
		if (cartQuantity == null || messageQuantity == null) {
			$.ajax({
				url: "/cart/quantity.jhtml",
				type: "GET",
				dataType: "json",
				cache: false,
				global: false,
				success: function(data) {
					if ($headerCartQuantity.text() != data.quantity && "opacity" in document.documentElement.style) {
						$headerCartQuantity.fadeOut(function() {
							$headerCartQuantity.text(data.quantity).fadeIn();
						});
					} else {
						$headerCartQuantity.text(data.quantity);
					}
					
					if ($headerMessageQuantity != data.messageCount && "opacity" in document.documentElement.style) {
						$headerMessageQuantity.fadeOut(function() {
							$headerMessageQuantity.text(data.messageCount).fadeIn();
						});
					} else {
						$headerMessageQuantity.text(data.messageCount);
					}
					addCookie("messageQuantity", data.messageCount);
					
					addCookie("cartQuantity", data.quantity);
				}
			});
		} else {
			$headerCartQuantity.text(cartQuantity);
			$headerMessageQuantity.text(messageQuantity);
		}
	}
	
	showHeaderCartQuantity();
	
	// AJAX全局设置
	$.ajaxSetup({
		traditional: true
	});
	
	// 令牌
	$(document).ajaxSend(function(event, request, settings) {
		if (!settings.crossDomain && settings.type != null && settings.type.toLowerCase() == "post") {
			var token = getCookie("token");
			if (token != null) {
				request.setRequestHeader("token", token);
			}
		}
	});
	
	// 令牌
	$("form").submit(function() {
		var $this = $(this);
		if ($this.attr("method") != null && $this.attr("method").toLowerCase() == "post" && $this.find("input[name='token']").size() == 0) {
			var token = getCookie("token");
			if (token != null) {
				$this.append('<input type="hidden" name="token" value="' + token + '" \/>');
			}
		}
	});
	
	// 状态、购物车数量
	$(document).ajaxComplete(function(event, request, settings) {
		var tokenStatus = request.getResponseHeader("tokenStatus");
		var validateStatus = request.getResponseHeader("validateStatus");
		var loginStatus = request.getResponseHeader("loginStatus");
		if (tokenStatus == "accessDenied") {
			var token = getCookie("token");
			if (token != null) {
				$.extend(settings, {
					global: false,
					headers: {token: token}
				});
				$.ajax(settings);
			}
		} else if (validateStatus == "accessDenied") {
			$.message("warn", "非法字符");
		} else if (loginStatus == "accessDenied") {
			$.redirectLogin("", "请登录后再进行操作");
		} else {
			var url = settings.url.indexOf("/") == 0 ? settings.url : location.pathname.substring(0, location.pathname.lastIndexOf("/")) + "/" + settings.url;
			if ((url.indexOf("/register/") == 0 || url.indexOf("/login/") == 0 || url.indexOf("/cart/") == 0 || url.indexOf("/order/") == 0 || url.indexOf("/quickorder/") == 0)&& url.indexOf("/order/check_pending_payment") != 0) {//增加quickorder这个快速下单的验证（显示购物车）
				showHeaderCartQuantity();
				cartAjax();
			}
		}
	});

});


//缩小窗口时，购物车高度自适应
$(function(){
    getHieght();
    $(window).resize(function() {
        getHieght();
    });
    function getHieght(){
        $("#divexample1").css("height",$(".tbar-panel-main").height()-110); 
        $("#divexample2").css("height",$(".tbar-panel-main").height()-110);
    }
})

// 验证
if ($.validator != null) {

	$.extend($.validator.messages, {
		required: '必填',
		email: 'E-mail格式错误',
		url: '网址格式错误',
		date: '日期格式错误',
		dateISO: '日期格式错误',
		pointcard: '信用卡格式错误',
		number: '只允许输入数字',
		digits: '只允许输入零或正整数',
		minlength: $.validator.format('长度不允许小于{0}'),
		maxlength: $.validator.format('长度不允许大于{0}'),
		rangelength: $.validator.format('长度必须在{0}-{1}之间'),
		min: $.validator.format('不允许小于{0}'),
		max: $.validator.format('不允许大于{0}'),
		range: $.validator.format('必须在{0}-{1}之间'),
		accept: '输入后缀错误',
		equalTo: '两次输入不一致',
		remote: '输入错误',
		integer: '只允许输入整数',
		positive: '只允许输入正数',
		negative: '只允许输入负数',
		decimal: '数值超出了允许范围',
		pattern: '格式错误',
		extension: '文件格式错误'
	});
	
	$.validator.setDefaults({
		errorClass: "fieldError",
		ignore: ".ignore",
		ignoreTitle: true,
		errorPlacement: function(error, element) {
			var fieldSet = element.closest("span.fieldSet");
			if (fieldSet.size() > 0) {
				error.appendTo(fieldSet);
			} else {
				error.insertAfter(element);
			}
		},
		submitHandler: function(form) {
			$(form).find("input:submit").prop("disabled", true);
			form.submit();
		}
	});

}