/**
 * 
 */

/**
* 验证input
* 
* @param divId
* @param value
*/
// 弹出提示层的配置
var tipsOptions = {tips: [1, '#c00'], time: 3000};
function check_input(type, value) {
  var errorFlag = false;
  var errorMessage = null;
  // 验证发票单位名称
  if (type == "invoice_corpName") {
    if (isEmpty(value)) {
      errorFlag = true;
      errorMessage = "单位名称不能为空！";
    } else {
      if (checkLength(value) < 2) {
        errorFlag = true;
        errorMessage = "请填写完整单位名称！";
      }
      if (checkLength(value) > 100) {
        errorFlag = true;
        errorMessage = "单位名称过长,请重新输入！";
      }
      if (!is_forbidForInvoice(value)) {
        errorFlag = true;
        errorMessage = "单位名称含有非法字符！";
      }
    }
  } else if (type == "invoice_code") { // 验证纳税人识别号
    if (isEmpty(value)) {
      errorFlag = true;
      errorMessage = "纳税人识别号不能为空！";
    } else {
      var reg_number = /^([a-zA-Z0-9]){15,20}$/;
      if (!reg_number.test(value)) {
        errorFlag = true;
        errorMessage = "纳税人识别号错误，请检查！";
      }
      if (!is_forbidForInvoice(value)) {
        errorFlag = true;
        errorMessage = "纳税人识别号含有非法字符！";
      }
    }
  } else if (type == "invoice_regaddress") { // 验证发票注册地址
    if (isEmpty(value)) {
      errorFlag = true;
      errorMessage = "注册地址不能为空！";
    } else {
      if (value.replace(/[^\x00-\xff]/g, "**").length < 2) {
        errorFlag = true;
        errorMessage = "注册地址错误！";
      }
      if (checkLength(value) > 250) {
        errorFlag = true;
        errorMessage = "注册地址过长，请重新输入！";
      }
      if (!is_forbidForInvoice(value)) {
        errorFlag = true;
        errorMessage = "注册地址含有非法字符！";
      }
    }
  } else if (type == "invoice_regphone") { // 验证增值税发票电话
    if (isEmpty(value)) {
      errorFlag = true;
      errorMessage = "注册电话不能为空！";
    } else {
      if (checkLength(value) > 50) {
        errorFlag = true;
        errorMessage = "注册电话过长，请重新输入！";
      }
      if (!is_forbidForInvoice(value)) {
        errorFlag = true;
        errorMessage = "注册电话含有非法字符，请重新输入！";
      }
    }
  } else if (type == "invoice_regbank") { // 验证增值税发票开户银行
    if (isEmpty(value)) {
      errorFlag = true;
      errorMessage = "开户银行不能为空！";
    } else {
      if (value.replace(/[^\x00-\xff]/g, "**").length < 2) {
        errorFlag = true;
        errorMessage = "开户银行错误！";
      }
      if (checkLength(value) > 100) {
        errorFlag = true;
        errorMessage = "开户银行过长，请重新输入！";
      }
      if (!is_forbidForInvoice(value)) {
        errorFlag = true;
        errorMessage = "开户银行含有非法字符！";
      }
    }
  } else if (type == "invoice_regaccount") { // 验证增值税发票银行账户
    if (isEmpty(value)) {
      errorFlag = true;
      errorMessage = "银行帐户不能为空！";
    } else {
      if (!is_forbidForInvoice(value)) {
        errorFlag = true;
        errorMessage = "银行帐户含有非法字符！";
      }
    }
  }// 验证收货人名称
else if (type == "invoice_recvname") {
  if (isEmpty(value)) {
    errorFlag = true;
    errorMessage = "请您填写收票人姓名";
  }
  if (!is_forbidForInvoice(value)) {
    errorFlag = true;
    errorMessage = "收票人姓名中含有非法字符";
  }
}
// 验证地区是否完整
else if (type == "areaId_invoice") {
	// 验证地区是否正确
	if (isEmpty(value)) {
		errorFlag = true;
		errorMessage = "请您填写完整的地区信息";
	}
}
// 验证收货人地址
else if (type == "invoice_recvaddress") {
	if (isEmpty(value)) {
		errorFlag = true;
		errorMessage = "请您填写收票人详细地址";
	}
	if (!is_forbidForInvoice(value)) {
		errorFlag = true;
		errorMessage = "收票人详细地址中含有非法字符";
	}
}
// 验证手机号码
else if (type == "invoice_mobile") {
	var strlength = value.length;
	if (!isEmpty(value)) {
		if (!is_forbidForInvoice(value)) {
			errorFlag = true;
			errorMessage = "固定电话号码中含有非法字符";
		}
		if (!checkPhone(value)) {
			errorFlag = true;
			errorMessage = "固定电话号码格式不正确";
		}
		if(strlength >=4 && value.indexOf("*") >-1){
			if(!((new RegExp(/.+\*\*\*\*$/).test(value) && (strlength - value.indexOf("*")) < 5) || (new RegExp(/^\d{11}$/).test(value) || new RegExp(/^\d{3}\*\*\*\*\d{4}$/).test(value)))){
				errorFlag = true;
				errorMessage = "固定电话号码格式不正确";
			}
		}
	}
	if (true) {
		if (isEmpty(value)) {
			errorFlag = true;
			errorMessage = "请您填写收票人手机号码";
		} else {
			if (!(/^[1][3-8]\d{9}$/.test(value))) {
				errorFlag = true;
				errorMessage = "手机号码格式不正确";
			}
		}
	}
}else if (type == "site") { // 验证联系地址
    if (isEmpty(value)) {
        errorFlag = true;
        errorMessage = "联系地址不能为空！";
      } else {
        if (value.replace(/[^\x00-\xff]/g, "**").length < 2) {
          errorFlag = true;
          errorMessage = "联系地址错误！";
        }
        if (checkLength(value) > 250) {
          errorFlag = true;
          errorMessage = "联系地址过长，请重新输入！";
        }
        if (!is_forbidForInvoice(value)) {
          errorFlag = true;
          errorMessage = "联系地址含有非法字符！";
        }
      }
    } // 验证联系人姓名
  else if (type == "contacts") {
    if (isEmpty(value)) {
      errorFlag = true;
      errorMessage = "请您填写联系人姓名";
    }
    if (!is_forbidForInvoice(value)) {
      errorFlag = true;
      errorMessage = "联系人姓名中含有非法字符";
    }
  }
  return padding_error(errorFlag,type,errorMessage);
}
function padding_error(errorFlag,type,errorMessage){
	if (errorFlag) {
//	    $("#" + type + "_error").html(errorMessage);
//	    $("#" + type + "_error").css("display","block");
//	    $("#" + type).addClass("fieldError");
//	    $("#" + type + "_err").html(errorMessage);
//	    $("#" + type + "_err").delay(200).fadeIn(300).delay(2000).fadeOut(300);
		layer.tips(errorMessage, $("#"+type), tipsOptions);
	    return false;
	  } else {
	    //$("#" + type + "_error").removeClass("fieldError");
	    $("#" + type).removeClass("fieldError");
	    $("#" + type + "_error").html("").css("display","none");
	  }
	  return true;
}
//增票非法字符验证
function is_forbidForInvoice(temp_str) {
	temp_str=trimTxt(temp_str);
	temp_str = temp_str.replace('*',"@");
	temp_str = temp_str.replace('--',"@");
	temp_str = temp_str.replace('/',"@");
	temp_str = temp_str.replace('+',"@");
	temp_str = temp_str.replace('\'',"@");
	temp_str = temp_str.replace('\\',"@");
	temp_str = temp_str.replace('$',"@");
	temp_str = temp_str.replace('^',"@");
	temp_str = temp_str.replace('.',"@");
	temp_str = temp_str.replace(';',"@");
	temp_str = temp_str.replace('<',"@");
	temp_str = temp_str.replace('>',"@");
	temp_str = temp_str.replace('"',"@");
	temp_str = temp_str.replace('=',"@");
	temp_str = temp_str.replace('{',"@");
	temp_str = temp_str.replace('}',"@");
	var forbid_str=new String('@,%,~,&');
	var forbid_array=new Array();
	forbid_array=forbid_str.split(',');
	for(i=0;i<forbid_array.length;i++){
		if(temp_str.search(new RegExp(forbid_array[i])) != -1)
		return false;
	}
	return true;
}
/**
 * 判断是否是空
 * @param value
 */
function isEmpty(value){
	if(value == null || value == "" || value == "undefined" || value == undefined || value == "null"){
		return true;
	}
	else{
		/*value = value.toString().replace(/\s/g,"");
		if(value == ""){
			return true;
		}*/
		return false;
	}
}
/**
 * 检查数量
 * @param txtObj
 * @returns {Number}
 */
function checkLength(txtObj){
	var val=txtObj;
	var valLength=0;
	for(var ii=0;ii<val.length;ii++){
		var word=val.substring(ii,1);
		if(/[^\x00-\xff]/g.test(word)){
			valLength+=2;
		}else{
			valLength++;
		}
	}
	return valLength;
}
//正则
function trimTxt(txt){
 return txt.replace(/(^\s*)|(\s*$)/g, "");
}
/**
 * 验证电话号码，带"(,),-"字符和数字其他不通过
 * 
 * @param str
 * @returns {Boolean}
 */
function checkPhone(str) {
	if (str.length > 20) {
		return false;
	}
	var patternStr = "(0123456789-)";
	var strlength = str.length;
	for (var i = 0; i < strlength; i++) {
		var tempchar = str.substring(i, i + 1);
		if (patternStr.indexOf(tempchar) < 0) {
			return false;
		}
	}
	return true;
}


function check_input_s(type, value) {
	  var errorFlag = false;
	  var errorMessage = null;
	
	if (type == "contacts") {
	    if (isEmpty(value)) {
	      errorFlag = true;
	      errorMessage = "请您填写联系人姓名";
	    }
	    if (!is_forbidForInvoice(value)) {
	      errorFlag = true;
	      errorMessage = "联系人姓名中含有非法字符";
	    }
	  }
	  else if (type == "customer") {
		    if (isEmpty(value)) {
		      errorFlag = true;
		      errorMessage = "请您填写联系人姓名";
		    }
		    if (!is_forbidForInvoice(value)) {
		      errorFlag = true;
		      errorMessage = "联系人姓名中含有非法字符";
		    }
		  }
	  else if (type == "site") { // 验证联系地址
		    if (isEmpty(value)) {
		        errorFlag = true;
		        errorMessage = "联系地址不能为空！";
		      } else {
		        if (value.replace(/[^\x00-\xff]/g, "**").length < 2) {
		          errorFlag = true;
		          errorMessage = "联系地址错误！";
		        }
		        if (checkLength(value) > 250) {
		          errorFlag = true;
		          errorMessage = "联系地址过长，请重新输入！";
		        }
		        if (!is_forbidForInvoice(value)) {
		          errorFlag = true;
		          errorMessage = "联系地址含有非法字符！";
		        }
		      }
		    }
	  // 验证手机号码
	  else if (type == "tel") {
	  	var strlength = value.length;
	  	if (!isEmpty(value)) {
	  		if (!is_forbidForInvoice(value)) {
	  			errorFlag = true;
	  			errorMessage = "固定电话号码中含有非法字符";
	  		}
	  		if (!checkPhone(value)) {
	  			errorFlag = true;
	  			errorMessage = "固定电话号码格式不正确";
	  		}
	  		if(strlength >=4 && value.indexOf("*") >-1){
	  			if(!((new RegExp(/.+\*\*\*\*$/).test(value) && (strlength - value.indexOf("*")) < 5) || (new RegExp(/^\d{11}$/).test(value) || new RegExp(/^\d{3}\*\*\*\*\d{4}$/).test(value)))){
	  				errorFlag = true;
	  				errorMessage = "固定电话号码格式不正确";
	  			}
	  		}
	  	}
	  	if (true) {
	  		if (isEmpty(value)) {
	  			errorFlag = true;
	  			errorMessage = "请您填写收票人手机号码";
	  		} else {
	  			if (!(/^[1][3-8]\d{9}$/.test(value))) {
	  				errorFlag = true;
	  				errorMessage = "手机号码格式不正确";
	  			}
	  		}
	  	}
	  }

	  return padding_error_s(errorFlag,type,errorMessage);
	}
function padding_error_s(errorFlag,type,errorMessage){
	if (errorFlag) {
		$("#" + type).next('span').delay(200).fadeIn(300).delay(2000).fadeOut(300);
	    $("#" + type + "_error").html(errorMessage);
	    $("#" + type + "_error").addClass("fieldError");
	    $("#" + type).addClass("fieldError");
	    return false;
	  } else {
	    $("#" + type + "_error").removeClass("fieldError");
	    $("#" + type).removeClass("fieldError");
	    $("#" + type + "_error").html("");
	   
	  }
	  return true;
}