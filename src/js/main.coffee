# Campaña Light Mastercard
# Version : 1.0.0
# Site    : http://www.bigholding.com.co
  
# Author  : Jhojan Guerrero
# Company : BIG (http://www.bigholding.com.co)



$(document).ready ->
  if $('section[data-crumb]').length >= 1
    crumb = $("section[data-crumb]").data "crumb"
    $(".header-brand-menu h2").html('<span>' + crumb + '</span>')
  $('#burger').click ->
    $('.menu-burger').toggleClass 'active'
  $('.removeSelection').click ->
    $('.card_awards').removeClass 'active'
    $('.text-green').addClass 'd-none'
    $('.buttons>div:first-child').removeClass 'd-none'
    $(this).addClass 'd-none'
  $('.card_awards .check').click ->
    $('.card_awards .check').parent().parent().parent().removeClass 'active'
    $(this).parent().parent().parent().addClass 'active'
    $('.buttons>div:first-child').addClass 'd-none'
    $('.removeSelection').removeClass 'd-none'
    $('.text-green').removeClass 'd-none'
  slickPrimarySecondary = 
    slidesToShow: 1
    slidesToScroll: 1
    arrows: false
    infinite: false
  slickNavigator = 
    slidesToShow: 2
    slidesToScroll: 1
    asNavFor: '.nav'
    speed: 500
    arrows: true
    dots: true
    focusOnSelect: true
    centerMode: false
    infinite: false
  $('.primary').slick slickPrimarySecondary
  $('.secondary').slick slickPrimarySecondary
  $('.navigator').slick slickNavigator
  $('input.codeInput').on 'input', ->
    @value = @value.replace(/[^0-9]/g, '')
    if @value != ''
      $(this).keyup ->
        $(this).next().focus()
        return
    return
  $('.pecial_awards').slick
    dots: true
    infinite: true
    speed: 300
    slidesToShow: 4
    slidesToScroll: 4
    responsive: [
      {
        breakpoint: 768
        settings:
          slidesToShow: 3
          slidesToScroll: 3
          infinite: true
          dots: true
      }
      {
        breakpoint: 480
        settings:
          slidesToShow: 1
          slidesToScroll: 1
      }
    ]
  $('.mechanical-carousel').slick
    dots: true
    arrows: true
    infinite: true
    speed: 600
    slidesToShow: 3
    slidesToScroll: 1
    autoplay: true,
    autoplaySpeed: 3000
    prevArrow: '<span class="arrow-carousel arrow-carousel-left"></span>'
    nextArrow: '<span class="arrow-carousel arrow-carousel-right"></span>'
    responsive: [
      {
        breakpoint: 1024
        settings:
          slidesToShow: 3
          slidesToScroll: 1
      }
      {
        breakpoint: 600
        settings:
          slidesToShow: 1
          slidesToScroll: 1
      }
    ]