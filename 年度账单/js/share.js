var yname = 'http://test-events.pingan.com.cn:41080',
	getEle = document.querySelector.bind(document),
	getElem = document.querySelectorAll.bind(document);
//点击按钮跳转页面
getEle('#btn').addEventListener('click',function(){
	window.location.href = yname+"/h5/Ndzd2017/index.html";
});