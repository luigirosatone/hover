$('button').on('mouseover',function() {
  $(this).css({
    top: (Math.random()*70)+'30%',
    left: (Math.random()*30)+'50%' 
  });
});
