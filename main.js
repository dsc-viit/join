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

    $.getJSON('https://raw.githubusercontent.com/dsc-viit/JSON-HUB/master/image.json', function (data) {
        var pre = '<img src="';
        var pos = '"alt="" width="100%" height="auto" class="gallery-img" loading="lazy" />';
        var str = '';
        for (var image in data["image"]) {
            str += pre + data["image"][image] + pos;
        }
        $('#gallery').append(str);

        $('<img>').ready(function () {
            console.log('Here you go guys');
        });
        console.log(str);
    }).then(function () {
        $(".gallery-img").click(function () {
            var t = $(this).attr("src");
            $(".modal-body").html("<img src='" + t + "' class='modal-img'>");
            $("#myModal").modal();
        });
    });
});