$(document).ready(function() {
  $("form#option").submit(function(event) {
  var answer1 = $("input:radio[name=answer1]:checked").val();
  var answer2 = $("input:radio[name=answer2]:checked").val();
  var answer3 = $("input:radio[name=answer3]:checked").val();

  if (answer1 === "lgcorp" && answer2 === "bkend" && answer3 === "yes1") {
    $("#css").hide();
    $("#ruby").hide();
    $("#php").hide();
    $("#c").hide();
    $(".java").show();
    }
  else if (answer1 === "smbus" && answer2 === "ftend" && answer3 === "yes2") {
    $("#css").hide();
    $("#c").hide();
    $("#ruby").hide();
    $("#java").hide();
    $(".php").show();
    }
  else if (answer1 === "stup" && answer2 === "apps " && answer3 === "yes3") {
    $("#css").hide();
    $("#php").hide();
    $("#c").hide();
    $("#java").hide();
    $(".ruby").show();
    }
  else if (answer1 === "remo" && answer2 === "artistic" && answer3 === "no1") {
    $("#css").hide();
    $("#php").hide();
    $("#ruby").hide();
    $("#java").hide();
    $(".c").show();
    }
  else if (answer1 === "dnm" && answer2 === "dnm" && answer3 === "none") {
    $("#c").hide();
    $("#ruby").hide();
    $("#java").hide();
    $(".php").show();
    }
  else if (answer1 === "lgcorp" && answer2 === "ftend" && answer3 === "yes3") {
    $("#css").hide();
    $("#php").hide();
    $("#c").hide();
    $("#java").hide();
    $(".ruby").show();
  }
  else if (answer1 === "lgcorp" && answer2 === "apps" && answer3 === "yes2") {
    $("#css").hide();
    $("#php").hide();
    $("#ruby").hide();
    $("#java").hide();
    $(".c").show();
    }
    else {
    $("#css").hide();
    $("#php").hide();
    $("#ruby").hide();
    $("#java").hide();
    $(".css").show()
      }
  $('#option').hide();
    event.preventDefault();
  });
});
