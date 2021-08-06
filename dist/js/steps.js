$(document).ready(function(){
  var itemsLength = 0
  var positionItem = 0
  // Instance the tour
  var tour = new Tour({
      backdrop: true,
      storage: false,
      steps: [
        {
          element: "#step1",
          template: '<div class="popover tour"> <div class="arrow"></div><h3 class="popover-title"> Grupos de comercio </h3> <div class="popover-content"> <p> Son comercios agrupados porque tienen características similares. Todas las compras que realices aquí suman para cumplir la meta. </p></div></div>',
          placement: 'top',
          onShow: function (tour) {
            navigation(tour)       
            activeDoots(tour)
          }
        },
        {
          element: "#step2",
          template: '<div class="popover tour"> <div class="arrow"></div><div class="popover-content"><p><strong> Cada grupo tendrá una meta distinta.</strong> La barra marcará tu avance y cuánto te falta para completarla.</p></div></div>',
          placement: 'top',
          onShow: function (tour) {
            navigation(tour)       
            activeDoots(tour)
          }
        },
        {
          element: "#step3",
          template: '<div class="popover tour"> <div class="arrow"></div><h5 class="subtitle">Grupos completados</h5> <div class="popover-content"><p>En la barra superior te indicaremos cuando completes cada grupo y allí también podrás ver tu avance. </p></div></div>',
          placement: 'top',
          onShow: function (tour) {
            navigation(tour)       
            activeDoots(tour)
          }
        }
      ]
      });
      // Initialize the tour
      tour.init();
      
      // Start the tour
      tour.start();
  
  $('.button-end').click(function(){
    $('.button-end').remove()
    $('.popover-navigation').remove()
    tour.end()
  })
  $('.button-prev').click(function(){
    // console.log(itemsLength , positionItem)
    tour.prev()
  })
  $('.button-next').click(function(){
    // console.log(itemsLength , positionItem)
    tour.next()
  })
  
  function navigation(data){
    if ($('.button-end').length < 1){
      $('body').append('<div class="button-end" data-role="end"></div>')
    }
    if ($('.popover-navigation').length < 1) {
      $('body').append('<div class="popover-navigation"><div class="button-prev"></div><div class="content-doots"></div> <div class="button-next"></div></div>')
      var itemsLength = data._options.steps.length
      for (let index = 0; index < itemsLength; index++) {
        $('.content-doots').append('<div class="doots" id="step-'+ index +'"></div>')
      }
    }
  }
  
  function activeDoots(number){
    $('.doots').removeClass('active')
    setTimeout(function(){ 
      $('#step-' + number._options.storage.tour_current_step).addClass('active')
      positionItem = parseInt(number._options.storage.tour_current_step)
      if (positionItem === 2) {
        $('#step3 .text').append('<div class="goald-general"><h4>Meta general</h4><div class="arrow"></div></div>')
      }else{
        if ($('.goald-general').length > 0) {
          $('.goald-general').remove()
        }
      }
    }, 1000);
    
  }
  
  })