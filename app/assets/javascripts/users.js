$(function(){

  let serch_list = $("#user-search-result");

  function


  $("#user-search-field").on("keyup", function(){
    let input = $("#user-search-field").val();
    $.ajax({
      type: 'GET',
      url: '/users',
      dataType: 'json',
      data: { keyword: input }
    })
    .done(function(users){
      search_list.empty();
      if (users.length !== 0) {
        users.forEach(function(user){
        appendUser(user);
        });
      } 
      else {

      }
      

    })
    .fail(function(){
      console.log("失敗です");
    });
  });
});