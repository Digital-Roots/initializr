$(document).ready(function{
  $('#runoff').click(function(){
    $.getJSON('./data.json'function(data){
      $('articale').append(data.runoff.articale);
      $('section').append(data.runoff.svg);
    });
  });
});
