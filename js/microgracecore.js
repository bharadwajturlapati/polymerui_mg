var $MG = {};

$MG.loginpage={
	input_render:function(args,vals){
		var node = document.createElement("paper-input");
		var args_len = args.length;
		for (var i=0;i<args_len;i++){
			if(args[i]&&vals[i]){
				node.setAttribute(args[i],vals[i]);
			}
		}
		var htmlString="";
		htmlString += node.outerHTML;
		return htmlString;
	}
};