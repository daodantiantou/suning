/*
* @Author: Administrator
* @Date:   2018-07-22 11:19:12
* @Last Modified by:   Administrator
* @Last Modified time: 2018-08-08 22:44:59
*/
window.onload=function(){
	let banner=document.getElementsByClassName('banner')[0];
	let listbox=document.getElementsByClassName('listbox')[0];
	let li=listbox.getElementsByTagName('li');
	let dingwei=listbox.getElementsByClassName('dingwei');

	for(let i=0;i<li.length;i++){
		li[i].onmouseenter=function(){
			for(let j=0;j<li.length;j++){
				dingwei[j].style.width="1001px";
				dingwei[j].style.display="none";
			}
			dingwei[i].style.display="block";
			dingwei[i].style.border="1px solid #000";
		}

		li[i].onmouseleave=function(){
			// dingwei[i].style.display="none";
			dingwei[i].style.width="0px";
			dingwei[i].style.border="none";
			dingwei[i].style.transition="width 0.5s";
		}
	}




	
	let imgbox=banner.getElementsByClassName('imgbox')[0];
	let img=imgbox.getElementsByTagName('img');
	let left=banner.getElementsByClassName('left')[0];
	let right=banner.getElementsByClassName('right')[0];
	let btns=banner.getElementsByClassName('btns')[0];
	let btn=btns.getElementsByClassName('btn');
	let num=0;
	let t=setInterval(fn,2000);
	function fn(){
		num++;
		if(num==img.length){
			num=0;
		}
		for(let i=0;i<img.length;i++){
			img[i].style.zIndex="5";
			btn[i].className="btn";
		}
		img[num].style.zIndex="10";
		btn[num].className="btn btn1";
	}
	function fn1(){
		num--;
		if(num<0){
			num=img.length-1;
		}
		for(let i=0;i<img.length;i++){
			img[i].style.zIndex="5";
			btn[i].className="btn";

		}
		img[num].style.zIndex="10";
		btn[num].className="btn btn1";
	}
	banner.onmouseenter=function(){
		clearInterval(t)
	}
	banner.onmouseleave=function(){
		t=setInterval(fn,2000)
	}
	right.onclick=function(){
		fn();
	}
	left.onclick=function(){
		fn1();
	}

	for(let i=0;i<btn.length;i++){
		btn[i].onclick=function(){
			for(let j=0;j<btn.length;j++){
				img[j].style.zIndex="5";
				btn[j].className="btn";
			}
			img[i].style.zIndex="10";
			btn[i].className="btn btn1";
			num=i;
		}
	}





	//网站导航
	let wzdw=document.querySelector('.wzdw')
	let nav=document.querySelectorAll('.toolbar .nav')
	nav[0].onmouseenter=()=>{
		wzdw.style.display='block'
	}
	nav[0].onmouseleave=()=>{
		wzdw.style.display='none'
	}


	let sjdw=document.querySelector('.sjdw')
	nav[1].onmouseenter=()=>{
		sjdw.style.display='block'
	}
	nav[1].onmouseleave=()=>{
		sjdw.style.display='none'
	}



	let khdw=document.querySelector('.khdw')
	nav[2].onmouseenter=()=>{
		khdw.style.display='block'
	}
	nav[2].onmouseleave=()=>{
		khdw.style.display='none'
	}


	let ygdw=document.querySelector('.ygdw')
	let nva=document.querySelectorAll('.toolbar .nva')

	nva[2].onmouseenter=()=>{
		ygdw.style.display='block'
	}
	nva[2].onmouseleave=()=>{
		ygdw.style.display='none'
	}



	let wdygdw=document.querySelector('.wdygdw')
	nva[3].onmouseenter=()=>{
		wdygdw.style.display='block'
	}
	nva[3].onmouseleave=()=>{
		wdygdw.style.display='none'
	}

	let gwdw=document.querySelector('.gwdw')
	nva[5].onmouseenter=()=>{
		gwdw.style.display='block'
	}
	nva[5].onmouseleave=()=>{
		gwdw.style.display='none'
	}


	let top=document.querySelector('.sn-sidebar .top')
	window.addEventListener('scroll',function(){
		h=document.documentElement.scrollTop
		top.onclick=function(){
			document.documentElement.scrollTop=0
		}
	})
		
		


	let floor1=document.querySelector('.J-floor1')
	let floor2=document.querySelector('.J-floor2')
	let floor3=document.querySelector('.zhineng')
	let floor4=document.querySelector('.biqiang')
	let floor5=document.querySelector('.caini')
	let lout=document.querySelector('.lout')
	let louc=document.querySelectorAll('.louc')
	let arr3=[]
	let llh=innerHeight
	// let J-floor1.document.querySelector('J-floor1')
	arr3.push(floor1.offsetTop)
	arr3.push(floor2.offsetTop)
	arr3.push(floor3.offsetTop)
	arr3.push(floor4.offsetTop)
	arr3.push(floor5.offsetTop)

	window.addEventListener('scroll',function(){
		h1=document.documentElement.scrollTop
	// console.log(arr3)
		if(llh+h1<2940){
			lout.style.display='none'
		}
		arr3.forEach(function(item,index){
			if(llh+h1>item+300){
				lout.style.display='block'
				louc.forEach(function(item){
					item.style.background='#fff'
				})
				louc[index].style.background='#ff6700'
			}
		})
		louc[5].onclick=function(){
			document.documentElement.scrollTop=0
			louc.forEach(function(item){
					item.style.background='#fff'
				})
			lout.style.display='none'
		}

		louc.forEach(function(item,index){
			if(index<5){
				item.onclick=function(){
					louc.forEach(function(item){
						item.style.background='#fff'
					})
					louc[index].style.background='#ff6700'
					document.documentElement.scrollTop=arr3[index]
				}
				}
			})

	})
}


