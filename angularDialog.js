app.directive("angularDialog",function(){
	//type传1表示类型为alert,传2表示类型为confirm
	return{
		restrict: 'AE',
		transclude: true, 
	 	scope:{
        	 title:"@",
        	 content:"@",
        	 fun:"&",
        	 hide:"=",
        	 type:"="
		},
		template:'<div ng-if="hide"><div id="mb_box"></div><div id="mb_con"><span id="mb_tit">{{title}}</span>'+
		          '<div id="mb_msg">{{content}}</div><div id="mb_btnbox">'+
		          '<input id="mb_btn_ok_alert" type="button" value="确定" ng-if="type==1" ng-click="mbConfirm()" />'+
		          '<div ng-if="type==2">'+
		          '<a id="mb_btn_ok" class="mb-btn-ok" type="button" ng-click="mbConfirm()">确定</a>'+
		          '<a id="mb_btn_ok" class="mb-btn-ok2" type="button" ng-click="mbCancel()">取消</a>'+
		          '</div>'+
		          '</div></div></div>',
		link:function(scope,element,attrs){
			// scope.hide = true;
			// title = $parse(attrs.title)
			scope.mbConfirm = function(){
				scope.hide = false;
				scope.fun();
			}

			scope.mbCancel = function(){
				scope.hide = false;
			}
		}          
	}
	
})