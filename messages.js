var APP_ID = 'qVqbkmGTm50Yod6HJpYJml4b-gzGzoHsz';
var APP_KEY = 'Apy2AqotxbKelkWwjVcu0lNr';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});

console.log('运行到此没报错')

// 存入用户的留言
let myform = document.querySelector('#leaveMessagesForm')
myform.addEventListener('submit' , function(e){
	e.preventDefault()
	let content = myform.querySelector('input[name=content]').value
	
	var  Messages = AV.Object.extend('Messages');
	var  messages = new Messages();
	messages.set('content', content);
	messages.save().then(function (object){
		console.log(object)
		alert('保存成功')
	})	
})

var query = new AV.Query('Messages');

query.find().then(function (messages) {
	let array = messages.map( (item)=> item.attributes )
	console.log(array)
	array.forEach( (item)=>{
		let li = document.createElement('li')
		li.innerText = item.content
		let messagesList = document.querySelector('#messagesList')
		messagesList.appendChild(li)
	})
});



