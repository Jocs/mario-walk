(function(window, document){
	var show_mario = document.getElementById('mario');
	var WHITH = 120, HEIGHT = 160,rect_width = WHITH/12,timer;
	show_mario.onclick = function(){
		var canvas = document.createElement('canvas');
		var body = document.body, blur = document.getElementById('blur');
		var j, k, count = 0;
		var timer2 = setInterval(function(){
			count ++;
			if(count < 10){
				blur.style.webkitFilter = 'blur(' + count + 'px)';
			} else {
				clearInterval(timer2);
			}
		},100);
		canvas.setAttribute('class','canvas');
		canvas.setAttribute('width',WHITH);
		canvas.setAttribute('height',HEIGHT);
		body.style.overflow = 'hidden';
		var context = canvas.getContext('2d');

		function drawRect(x, y, color_code){
			context.save();
			context.fillStyle = color_code;
			context.fillRect(x, y, rect_width, rect_width);
		}
		function drawMario(){
			context.clearRect(0,0,WHITH,HEIGHT);
			var now = new Date();
			var milliseconds = now.getMilliseconds();
			var i = Math.floor(milliseconds/100);
			for(j = 0; j < marios[i].length; j ++){
				for(k = 0; k < marios[i][j].length; k ++){
					if(marios[i][j][k] !== 0){
						var color_code = marios[i][j][k] === 1? 'red': 
						    (marios[i][j][k] === 2? '#663300': 'orange');
						drawRect(rect_width*k, rect_width*j, color_code);
					}
				}
			}
		}
		timer = setInterval(function(){
			drawMario();
		},100);
		//把canvas添加到body中
		body.appendChild(canvas);
		//5s后恢复原来网页
		setTimeout(function(){
			clearInterval(timer);
			body.style.overflow = 'auto';
			body.removeChild(canvas);
			var timer3 = setInterval(function(){
				count --;
				if(count >= 0){
					blur.style.webkitFilter = 'blur('+ count + 'px)';
				} else {
					clearInterval(timer3);
				}
			},100);
			
		},5000);
	};
})(window, document);



















