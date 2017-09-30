$(document).ready(function(){
  $('#runoff').click(function(){
    $.getJSON('./data.json'function(data){
      $('article').append(data.runoff.article);
      $('section').append(data.runoff.svg);
    });
  });
});
