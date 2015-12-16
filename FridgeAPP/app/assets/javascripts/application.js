// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//
//= require jquery
//= require jquery_ujs
// require turbolinks
//= require_tree .



$(function(){

$('#submit').click(function (event) {
  event.preventDefault()
  var ingredient = $('#ingredient').val()
  console.log(ingredient)
    var X_Yummly_App_id=  "f80c8238"
    var X_Yummly_App_Key =  "193144765c84594fe930ef99e9fd506b"

  $.ajax({
    url: 'http://api.yummly.com/v1/api/recipes?_app_id='+X_Yummly_App_id+'&_app_key='+X_Yummly_App_Key+'&q='+ingredient+'&maxResult=10&start=10',
    method: 'GET',
    dataType: "JsonP",
    crossDomain: true,
    success: function(data){
      console.log(data.matches)
      var foodResult = data.matches
      $('#results').empty();
      foodResult.forEach(function(result){
      var x = $("<li class='result'>")
      var img = $("<img id='image'>")
      var link = $('<a id="link" target="_blank">Click here for recipe!</a>')
      var yum = "http://www.yummly.com/recipe/"+result.id
      // var frame = $("<iframe id=frame>hey</iframe>")
      // frame.attr('src', yum)

      link.attr('href', yum)

      img.attr('src',result.imageUrlsBySize[90])
      img.attr('href', yum)
      x.text(  "Recipe Name :" + result.recipeName + " | " + "  Ingredients : "+ result.ingredients +"|" + "Total cooking time :" + result.totalTimeInSeconds /60 + "mins" );
      img.appendTo("#results")
      $("#results").append(x)
      link.appendTo("#results")
      // frame.appendTo("#results")
      })

    },
    error: function (xhr, data, error) {
        console.log("error is "+error)
    }
  })



})






})
