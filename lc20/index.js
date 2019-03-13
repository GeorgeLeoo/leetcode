/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
	//新建一个栈
	var stack=[];
	//遍历s
	for(var i=0; i<s.length; i++){
		//如果stack的长度是0，那么直接添加
		if(stack.length === 0){
			stack.push(s[i]);
		} else if(s[i] !== ')' || s[i] !== ']' || s[i] !== '}'){
			//如果当前元素是‘)’或‘]’或‘}’，那么就删除栈顶元素
			stack.pop();
		}else{
			//否则添加
			stack.push(s[i]);
		}
	}
	//如果stack长度是0，那么就返回true.
	return stack.length === 0;
}

console.log(isValid("[{()}]"));