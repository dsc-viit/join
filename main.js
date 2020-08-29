$(document).ready(function () {
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
    $(".gallery-img").click(function () {
        var t = $(this).attr("src");
        $(".modal-body").html("<img src='" + t + "' class='modal-img'>");
        $("#myModal").modal();
    });
    $.getJSON('https://raw.githubusercontent.com/dsc-viit/JSON-HUB/master/image.json', function (data) {
        var pre = '<img src="';
        var pos = '"alt="" width="100%" height="auto" class="gallery-img" />';
        var str = '';
        for (var image in data["image"]) {
            str += pre + data["image"][image] + pos;
        }
        $('#gallery').append(str);
        console.log(str);
    });

});