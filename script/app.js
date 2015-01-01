$(document).ready(function(){


var wings = new TimelineMax({repeat:-1});
wings.to(".right .top",1,{rotationX:"-50deg",top:-4})
.to(".left .top",1,{rotationX:"-50deg",top:4},0)
.to(".right .bottom",1,{rotationX:"-50deg",top:"-24"},0)
.to(".left .bottom",1,{rotationX:"-50deg",top:"-16"},0);

var butterfly = new TimelineMax({repeat:-1});
butterfly.staggerTo(".butterfly",7,{left:$(window).width()-$(".butterfly").width()},7,"end")
.staggerTo(".butterfly",0.5,{opacity:0},"end+=7");

});