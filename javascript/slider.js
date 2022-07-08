var $links = $(".itemlinks");

$links.click(function (e) {
    $links.removeClass("active");
    var clickedLink = e.target;
    clickedLink = $(clickedLink);
    var position = clickedLink.attr("data-pos");
    var translateValue = "translateX("+ position * 25 +"%)";
    $("#wrapper").css({
        transform: translateValue
    });

    clickedLink.addClass("active");

});

$($links[0]).addClass("active");


// $links.click(function (e) {
//     $links.removeClass("active");  //  عن العنصر المحدد active سوف يتم إزالة 
//     var clickedLink = e.target; // تحديد العنصر الذي تم الضغط عليه 
//     clickedLink = $(clickedLink); // هنا حتى نتحكم بالعنصر المضغوط بواسطة جي كويري
//     var position = clickedLink.attr("data-pos"); // الحصول على قيمة position أي 0 أو 1 أو 2 أو 3 
//     var translateValue = "translateX("+ position * 25 +"%)"; // بعد الاختيار تتم بواسطة المعادلة حساب أي عنصر سوف يعرض 
//     $("#wrapper").css({
//         transform: translateValue
//     });
  
//   clickedLink.addClass("active"); //active سوف يأخذ العنصر المضغوط عليه المحدد 

// });