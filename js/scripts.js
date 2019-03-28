$(document).ready(function(){
  $("form").submit(function(event){
    var time = parseInt($("input:radio[name=time]:checked").val());
    var iceCream = parseInt($("input:radio[name=iceCream]:checked").val());
    var vacation = parseInt($("input:radio[name=vacation]:checked").val());
    var total = add(time, iceCream, vacation);


    if (total === 3){
      alert("bob");
    } else if (total === 9){
      alert("joe");
    } else {
      alert("jill");
};
    event.preventDefault();


});

var add = function(time, iceCream, vacation) {
  return time + iceCream + vacation;
  };

});
