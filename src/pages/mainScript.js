$(document).ready(function() {
    $("#current-age").text(getAge());
});

function getAge() {
    var today = new Date();
    var currentMonth = today.getMonth(), currentDate = today.getDate();
    var bday = new Date("10 April 2000");
    var bdayMonth = bday.getMonth(), bdayDate = bday.getDate();

    var age = today.getFullYear() - bday.getFullYear();

    if (currentMonth < bdayMonth) age--;
    else if (currentMonth == bdayMonth && currentDate < bdayDate) age--;

    return age;
}

$("#nav-container #nav-links a").on("click", function () {
    $(".navbar-collapse").collapse("hide");
});