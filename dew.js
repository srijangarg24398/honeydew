	var maxheight=document.body.clientHeight;
	var maxwidth=document.body.clientWidth;
	element=document.getElementById("one");
	lbar=document.getElementById("left");
	rbar=document.getElementById("right");
	lbar.style.right='210px';
	rbar.style.left=(maxwidth-210)+'px';
	element.style.top='100px';
	var balltop=0;
	element.style.left='300px';
	var ballleft=0;
	lbar.style.top='100px';
	var lbartop=0;
	var lbarbottom=0;
	rbar.style.top='100px';
	var rbartop=0;
	var rbarbottom=0;
	var number;
	var lbar_ka_right=parseFloat(lbar.style.right.slice(0,-2));
	var rbar_ka_left=parseFloat(rbar.style.left.slice(0,-2));
	document.body.addEventListener('keydown',move);

	function move(event){
			if (event.code=='ArrowDown'){
				var temp=(parseFloat(rbar.style.top.slice(0,-2))+70);
				if (temp<maxheight-80){
				rbar.style.top=temp+'px';}
			}
            if (event.code=='ArrowUp'){
				var temp = (parseFloat(rbar.style.top.slice(0,-2))-70 );
				if (temp>20)
				{rbar.style.top=temp + 'px';}
			}
			if (event.code=='KeyS'){
				var temp=(parseFloat(lbar.style.top.slice(0,-2))+70);
				if (temp<maxheight-80){
				lbar.style.top=temp%(maxheight-75)+'px';}
			}
			if (event.code=='KeyW'){
				var temp = (parseFloat(lbar.style.top.slice(0,-2)) - 70 ) ;
				if (temp>20)
				{lbar.style.top=temp%(maxheight-75)+ 'px';}
			}
			lbartop=parseFloat(lbar.style.top);
            lbarbottom=lbartop+150;
            rbartop=parseFloat(rbar.style.top);
            rbarbottom=rbartop+150;
};    
	function run(event){
			var newheight=Math.abs(Math.random()*maxheight-50)+10;
			var newwidth=Math.abs(Math.random()*maxwidth-50)+10;
			
			var currheight=parseFloat(element.style.top.slice(0,-2));
			var currwidth=parseFloat(element.style.left.slice(0,-2));
			
			var oldheight=currheight;
			var oldwidth=currwidth;

			var deltaheight=(newheight-currheight)/100.0;
			var deltawidth=(newwidth-currwidth)/100.0;
			
			if (number!=null){
				clearInterval(number);
			}
			number=setInterval(function(){
				temph=currheight+deltaheight;
				tempw=currwidth+deltawidth;
				currheight=temph;
				currwidth=tempw;
				element.style.top=temph+'px';
				element.style.left=tempw+'px';
				// if (temph > (maxheight-35) || temph < 25 || tempw > (maxwidth-35) || tempw < 25){
				// 	alert("Out");
				// 	clearInterval(number);
				// }
				if (tempw > (maxwidth-35) || tempw < 25){
					alert("Out");
					clearInterval(number);
				}
				if (((maxheight-35)-temph)<=0 ||temph-25<=0 )
				{
					newwidth=oldwidth+2*(currwidth-oldwidth);
					newheight=oldheight;
					deltaheight=-deltaheight;
				}
				balltop=parseFloat(element.style.top.slice(0,-2));
				ballleft=parseFloat(element.style.left.slice(0,-2));
				if (ballleft>lbar_ka_right && ballleft<rbar_ka_left)
				{
					if(balltop>lbartop && balltop<lbarbottom ){
						if ( tempw-225<=0)
						{
							newwidth=oldwidth;
							newheight=oldheight+2*(currheight-oldheight);
							deltawidth=-deltawidth;
						}
					}
					if (balltop>rbartop && balltop<rbarbottom)
					{
						if ((maxwidth-35)-230-tempw<=0)
						{
							newwidth=oldwidth;
							newheight=oldheight+2*(currheight-oldheight);
							deltawidth=-deltawidth;
						}
					}
				}

			},20);
	}
	element.addEventListener('mouseover',run);
	element.addEventListener('click',run);
