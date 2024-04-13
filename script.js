$('button').on('mouseover',function() {
  $(this).css({
    top: (Math.random()*30)+'10%',
    left: (Math.random()*30)+'50%' 
  });
});
