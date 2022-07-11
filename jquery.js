$(function () {
  // click the button to add text to list
  $("#add").on("click", function () {
    var x = $("input").val();

    // check if input empty or not
    if (x.length < 1) {
      $("#error").show();
    } else {
      $("#error").hide();
      $("#list").append(
        "<li>" + x + '<i class="fa-solid fa-trash-can"></i></li>'
      );
    }
    $("input").val("");
  });

  // when clicked ENTER key , input will be added to list
  $("input").on("keydown", function (event) {
    if (event.which == 13) $("#add").trigger("click");
  });

  // click trash icon to delete text
  $("ul").on("click", ".fa-trash-can", function () {
    $(this).parent("li").remove();
  });

  //click on the text to check it
  $("ul").on("click", "li", function () {
    $(this).toggleClass("checked");
  });
});
