$(document).ready(function () {
  var width = $('.background').width()
  var num = $('.bul .bli').length
  var max = width * num
  var move = 0
  function background() {
    move += width
    $('.bul').animate({ left: -move }, 600, function () {
      if (move >= max) {
        $(this).css('left', 0)
        move = 0
      }
    })
  }
  backgroundOff = setInterval(background, 3000)
  $('.bul').append($('.bul .bli').first().clone())
})
