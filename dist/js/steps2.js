$(document).ready(function(){
  // Instance the tour
  var tour2 = new Tour({
    steps: [
    {
      element: "#step1",
      title: "Title of my step",
      content: "Content of my step"
    },
    {
      element: "#step2",
      title: "Title of my step",
      content: "Content of my step"
    }
  ]});

  // Initialize the tour
  tour2.init();

  // Start the tour
  tour2.start();
  
  console.log(tour2)
})