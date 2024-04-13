$('button').on('mouseover',function() {
  $(this).css({
    top: (Math.random()*90)+'30%',
    left: (Math.random()*30)+'50%' 
  });
});
