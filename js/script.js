var menuOpen = document.getElementById('menu');
var close = document.getElementById('close')
var menubar =document.getElementById('slidenav');
var btn = document.getElementsByClassName('btn');
var slide = document.getElementById('slide');

menuOpen.addEventListener('click', () => {
  menubar.classList.add('active');
});
close.addEventListener('click', () =>{
  menubar.classList.remove('active');
});


btn[0].onclick = function(){
  slide.style.transform="translateX(0px)";
  for(i=0;i<4;i++){
    btn[i].classList.remove('active');
  }
  this.classList.add('active');
}
btn[1].onclick = function(){
  slide.style.transform="translateX(-800px)";
  for(i=0;i<4;i++){
    btn[i].classList.remove('active');
  }
  this.classList.add('active');
}
btn[2].onclick = function(){
  slide.style.transform="translateX(-1600px)";
  for(i=0;i<4;i++){
    btn[i].classList.remove('active');
  }
  this.classList.add('active');
}
btn[3].onclick = function(){
  slide.style.transform="translateX(-2400px)";
  for(i=0;i<4;i++){
    btn[i].classList.remove('active');
  }
  this.classList.add('active');
}
