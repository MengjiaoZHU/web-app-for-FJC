//Escape function
(function ($) {
    $(".EscapeHatch").find("a").on("click", function (event) {
        event.preventDefault();
        var url = $(this).attr("href");

        getAway(url);
    });

    $(document).keyup(function (event) {
        var url = $(".EscapeHatch").find("a").attr("href");

        if (event.keyCode == 27) { // escape key
            getAway(url);
        }
    });

    function getAway(url) {
    // Get away right now
    window.open("http://weather.com", "_blank");
    // Replace current site with another bening site
    window.location.replace(url);

    $("body").html('');
}


   function Navigate(){   
         window.location.replace(url);
        return false;
    }