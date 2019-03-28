$(document).ready(function(){
  $("form").submit(function(event){
    var time = parseInt($("input:radio[name=time]:checked").val());
    var iceCream = parseInt($("input:radio[name=iceCream]:checked").val());
    var vacation = parseInt($("input:radio[name=vacation]:checked").val());
    var total = add(time, iceCream, vacation);
    // alert(total)


    if (total === 3){
    $(".hideMatch").show();
    $("#match").text("Bob");
    } else if (total === 9){
    $(".hideMatch").show();
    $("#match").text("Joe");
    } else {
    $(".hideMatch").show();
    $("#match").text("Jill");
};
    event.preventDefault();


});

var add = function(time, iceCream, vacation) {
  return time + iceCream + vacation;
  };

});
