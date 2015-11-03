$(document).ready(function(){
  myDada.init();
});

var myDada = {
  url: "http://api.wunderground.com/api/8cbd0ba75b589547/conditions/q/SC/Charleston.json",
  init: function () {
    myDada.initStyling();
    myDada.initEvents();
  },

  initStyling: function () {
    myDada.getMyWeather();
  },

  initEvents: function () {
    // $('form').on('submit', myDada.)
  },

  getMyWeather: function () {
    $.ajax ({
     url: myDada.url,
     method: 'GET',
     success: function (data) {
       console.log(data);
       $(".wrapper").append("<img src = "
       + 'data.current_observation.icon_url' + ">"
       + "<h2>My Location: "
       +  data.current_observation._display_location.ful
       + "</h2>"
       + "</h3>Right Now: "
       + data.current_observation.weather
       + data.current_observation.weather.temp_f
       + "Real Feel weather: "
       + data.current_observation.weather.feelslike_f
       +"</h2>");


     }


})

  }






}







  // var myDada;
  // $.ajax({
  //   method: 'GET',
  //   url: 'https://www.reddit.com/r/charleston.json',
  //   success: function(data) {
  //     console.log(data);
  //     myDada = data;
  //     myDada.data.children
  //     _.each(myDada.data.children, function(el,idx,arr) {
  //      console.log(el.data.title);
  // });
  //   }
  // })
