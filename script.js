$('button').on('mouseover',function() {
  $(this).css({
    top: (Math.random()*50)+'90%',
    left: (Math.random()*30)+'90%' 
  });
});
