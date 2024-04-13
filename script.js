$('button').on('mouseover',function() {
  $(this).css({
    top: (Math.random()*90)+'0%',
    left: (Math.random()*30)+'50%' 
  });
});