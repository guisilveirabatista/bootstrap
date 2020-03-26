var lastLeg = "right";
var direction = "down";
// Keyboard input with customisable repeat (set to 0 for no key repeat)
//
function KeyboardController(keys, repeat) {
    // Lookup of key codes to timer ID, or null for no repeat
    //
    var timers = {};

    // When key is pressed and we don't already think it's pressed, call the
    // key action callback and set a timer to generate another one after a delay
    //
    document.onkeydown = function (event) {
        var key = (event || window.event).keyCode;
        if (!(key in keys))
            return true;
        if (!(key in timers)) {
            timers[key] = null;
            keys[key]();
            if (repeat !== 0)
                timers[key] = setInterval(keys[key], repeat);
        }
        return false;
    };

    // Cancel timeout and mark key as released on keyup
    //
    document.onkeyup = function (event) {
        Stop();
        var key = (event || window.event).keyCode;
        if (key in timers) {
            if (timers[key] !== null)
                clearInterval(timers[key]);
            delete timers[key];
        }
    };

    // When window is unfocused we may not get key events. To prevent this
    // causing a key to 'get stuck down', cancel all held keys
    //
    window.onblur = function () {
        for (key in timers)
            if (timers[key] !== null)
                clearInterval(timers[key]);
        timers = {};
    };
};

// Arrow key movement. Repeat key five times a second
//
KeyboardController({
    37: function () { Move(37); },
    38: function () { Move(38); },
    39: function () { Move(39); },
    40: function () { Move(40); }
}, 80);

function Move(e) {
    console.log(e);
    //up
    if (e == 38) {
        if (lastLeg == "right") {
            $(".character").css("background-position", "32px 40px");
            lastLeg = "left";
        } else if (lastLeg == "left") {
            $(".character").css("background-position", "96px 40px");
            lastLeg = "right";
        }
        var top = $(".character").css("top");
        top = top.replace('px', '');
        top = parseInt(top) - 10;
        $(".character").css("top", top + "px");
        direction = "up";
    }
    //right
    if (e == 39) {
        if (lastLeg == "right") {
            $(".character").css("background-position", "32px 248px");
            lastLeg = "left";
        } else if (lastLeg == "left") {
            $(".character").css("background-position", "96px 248px");
            lastLeg = "right";
        }
        var left = $(".character").css("left");
        left = left.replace('px', '');
        left = parseInt(left) + 10;
        $(".character").css("left", left + "px");
        direction = "right";
    }
    //down
    if (e == 40) {
        if (lastLeg == "right") {
            $(".character").css("background-position", "33px 0px");
            lastLeg = "left";
        } else if (lastLeg == "left") {
            $(".character").css("background-position", "96px 0px");
            lastLeg = "right";
        }
        var top = $(".character").css("top");
        top = top.replace('px', '');
        top = parseInt(top) + 10;
        $(".character").css("top", top + "px");
        direction = "down";
    }
    //left
    if (e == 37) {
        if (lastLeg == "right") {
            $(".character").css("background-position", "35px 124px");
            lastLeg = "left";
        } else if (lastLeg == "left") {
            $(".character").css("background-position", "98px 124px");
            lastLeg = "right";
        }
        var left = $(".character").css("left");
        left = left.replace('px', '');
        left = parseInt(left) - 10;
        $(".character").css("left", left + "px");
        direction = "left";
    }
}

function Stop() {
    if(direction == "up"){    
        $(".character").css("background-position", "0px 42px");
    }
    if(direction == "right"){    
        $(".character").css("background-position", "64px 250px");
    }
    if(direction == "down"){    
        $(".character").css("background-position", "0px 0px");
    }
    if(direction == "left"){    
        $(".character").css("background-position", "66px 124px");
    }
}