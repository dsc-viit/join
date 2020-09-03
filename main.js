$(document).ready(function () {

    // $(window).bind('resize', function (e) {
    //     if (window.RT) clearTimeout(window.RT);
    //     window.RT = setTimeout(function () {
    //         this.location.reload(false); /* false to get page from cache */
    //     }, 100);
    // });
    var i = 0;
    var txt = 'Registrations are open!'; /* The text */
    var speed = 50; /* The speed/duration of the effect in milliseconds */
    function typeWriter() {
        if (i < txt.length) {
            document.getElementById("demo").innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }
    typeWriter();
    // console.log($(window).width());
    if ($(window).width() < 454) {
        var elem = document.querySelector('#abc');
        elem.removeAttribute("style");
    }
    $.getJSON('https://raw.githubusercontent.com/dsc-viit/JSON-HUB/master/image.json', function (data) {
        var pre = '<img src="';
        var pos = '"alt="" width="100%" height="auto" class="gallery-img" />';
        var str = '';
        for (var image in data["image"]) {
            str += pre + data["image"][image] + pos;
        }
        $('#gallery').append(str);

        $('<img>').ready(function () {
            // console.log('Here you go guys');
        });
        // console.log(str);
        delete(str);
        delete(data);
    }).then(function () {
        $(".gallery-img").click(function () {
            var t = $(this).attr("src");
            $(".modal-body").html("<img src='" + t + "' class='modal-img'>");
            $("#myModal").modal();
        });
    });
});