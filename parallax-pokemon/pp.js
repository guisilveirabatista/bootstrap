var lastLeg = "right";
var contador = 0;

$(document).on("keydown", startAnimation);
$(document).on("keyup", stopAnimation);

$(document).on('start', startAnimation);
$(document).on('stop', stopAnimation);

function startAnimation(e) {
    console.log(e.which);
    //up
    if (e.which == 38) {
    }
    //right
    if (e.which == 39) {
    }
    //down
    if (e.which == 40) {
        if (lastLeg == "right" && contador == 0) {
            $(".character").css("background-position", "33px 0px");
            lastLeg = "left";
        } else if (lastLeg == "left" && contador == 0) {
            $(".character").css("background-position", "96px 0px");
            lastLeg = "right";
        }
        contador++;
        var top = $(".character").css("top");
        top = top.replace('px', '');
        top = parseInt(top) + 10;
        $(".character").css("top", top + "px");
    }
    //left
    if (e.which == 37) {
    }
    if (contador == 5) {
        contador = 0;
    }
}

function stopAnimation() {
    $(".character").css("background-position", "0px 0px");
    contador = 0;
}