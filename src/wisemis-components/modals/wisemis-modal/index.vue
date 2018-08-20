<template>
<div id="firMasker">
	<div class="modal" id="operateDept" avalonctrl="operateDept" style="width:800px;">

	<div class="modal-header">
		<a class="close triggerClosePopup">×</a>
		<h4 class="modal-title">修改部门</h4>
	</div>
	<div class="modal-body" style="position:static; height: 270px;">
		<!--默认插槽-->
		<slot></slot>
	</div>
	<div class="modal-footer">
		<!--ms-if-->
		<!--ms-if-->
		<a class="btn btn-success">保存</a>
		<a class="btn btn-default triggerClosePopup">取消</a>
	</div>
</div></div>
</template>

<script>
export default {
	methods:{
	/*鼠标拖动弹窗的 mousedown事件*/
	dragMousedown:function(e) {
	
	var $tar = $(this);
	var $input=$("input:focus").blur();
	if($(e.target).hasClass("close")||$(e.target).closest(".close").length){
		return;
	}
	$tar.addClass("grabbing");
	//	if ($tar.hasClass("close")) {
	//		return;
	//	};
	//	if (!$tar.hasClass("modal-header")) {
	//		$tar = $tar.parents(".modal-header")
	//	};
	var oDiv = $tar[0];
	var disX = 0;
	var disY = 0;
	var oDivLeft = 0;
	var oDivTop = 0;
	var pdisX = 0;
	var pdisY = 0;
	var oEvent = e
	var par = oDiv.parentNode;
	disX = oEvent.clientX;
	disY = oEvent.clientY;
	var pdis = getpos(par);
	pdisX = pdis.l;
	pdisY = pdis.t;
	
	var minLeft=100-$(par).width();
	
	if (oDiv.setCapture) {
		oDiv.onmousemove = mouseMove;
		oDiv.onmouseup = mouseUp;
		oDiv.setCapture(); // IE 7 下文字就不会被选中 其实就是文字或图片得不到事件
	} else {
		document.onmousemove = mouseMove;
		document.onmouseup = mouseUp;
	}

	function mouseMove(ev) {
		var oEvent = ev || event;
		oDivLeft = oEvent.clientX - disX;
		oDivTop = oEvent.clientY - disY;
		par.style.marginLeft = 0;
		
		var left=pdisX + oDivLeft;
		var top=pdisY + oDivTop;
		
		top=top<0?0:top
		left=left<minLeft?minLeft:left
		
		par.style.left = left + 'px';
		par.style.top =top + 'px';
	}

	function mouseUp(ev) {
		var oEvent = ev || event;
		$tar.removeClass("grabbing")
		this.onmousemove = null;
		this.onmouseup = null;
		if (oDiv.releaseCapture) {
			oDiv.releaseCapture(); // 释放捕获
		}
		if($input.length>0){
			$input.focus();
			$input=null;
		}
	}
	return false; // 阻止默认事件,解决火狐的bug
}
	}
}



</script>


<style scoped>
.grabbing{
	cursor: -webkit-grabbing !important;
	cursor:grabbing !important;
}
.modal-footer .btn+.btn {
    margin-bottom: 0;
    margin-left: 5px;
}

.btn-default {
    background-color: #e5e6e6;
    border-color: #e5e6e6;
    border: 1px solid #d9d9d9;
}

.btn-success {
    color: #4caf50;
    color: #fff;
    background-color: #4caf50;
    border-color: #4caf50;
}

.btn {
    display: inline-block;
    margin-bottom: 0;
    font-weight: 400;
    text-align: center;
    vertical-align: middle;
    touch-action: manipulation;
    background-image: none;
    border: 1px solid transparent;
    white-space: nowrap;
    padding: 1px 14px;
    line-height: 1.846153846;
    border-radius: 4px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.modal-footer {
    padding: 10px;
    text-align: right;
    background-color: #f0f0f0;
    border-top: 1px solid #ddd;
    -webkit-border-radius: 0 0 6px 6px;
    -moz-border-radius: 0 0 6px 6px;
    border-radius: 0 0 6px 6px;
    -webkit-box-shadow: inset 0 1px 0 #fff;
    -moz-box-shadow: inset 0 1px 0 #fff;
    box-shadow: inset 0 1px 0 #fff;
}
.modal-body {
    position: relative;
    padding: 8px 15px;
    overflow-y: auto;
    height: 450px;
    font-size: 14px;
    color: #737373;
    background-color: #fff;
}
.modal-header>h4 {
    word-break: break-all;
}
.modal-title {
    margin: 0;
    line-height: 1.846153846;
    color: #fff;
    font-weight: 400;
}

.close {
    font-size: 2em;
    font-weight: 700;
    line-height: 1;
    color: #000;
    text-shadow: 0 1px 0 #fff;
    opacity: .2;
    filter: alpha(opacity=20);
    background-color: transparent;
    border: 0;
    position: absolute;
    right: 10px;
    top: 4px;
    width: 30px;
    text-align: center;
}

.modal-header {
    cursor: grab;
    cursor: -webkit-grab;
    padding: 7px 15px;
    padding-left: 16px;
    border-bottom: 1px solid #eee;
    color: #fff;
    position: relative;
    background: #1892d1;
    border-radius: 6px 6px 0 0;
    font-weight: 500;
    font-size: 15px;
    line-height: 40px;
    min-height: 42px;
    padding-right: 75px;
}

.modal {
    position: absolute;
    top: 10%;
    bottom: auto;
    right: 0;
    left: 0;
    z-index: 1050;
    width: 565px;
    margin: 0 auto;
    background-color: transparent;
    border: 1px solid rgba(0,0,0,.3);
    -webkit-border-radius: 6px;
    -moz-border-radius: 6px;
    border-radius: 6px;
    outline: 0;
    -webkit-box-shadow: 0 3px 7px rgba(0,0,0,.3);
    -moz-box-shadow: 0 3px 7px rgba(0,0,0,.3);
    box-shadow: 0 3px 7px rgba(0,0,0,.3);
    -webkit-background-clip: padding-box;
    -moz-background-clip: padding-box;
    background-clip: padding-box;
    display: block;
}

#firMasker, #secMasker, #thrMasker, #fourMasker {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1000;
    background: rgba(0,0,0,.8);
    overflow: auto;
}

</style>
