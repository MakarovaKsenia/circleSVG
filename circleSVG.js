(function ($) {
    $.fn.circleSVG = function (option) {
        var setting = {
            number: 1,
            speed: 6,
            shadowCircle: true,
            widthCircle: 2,
            shadowText: true,
            numberSize: '2.5em',
            textSize: '1em',
            fontWeight: '300',
            circles: [
                {
                    count: 100,
                    text: "Title",
                    colorText: "#000",
                    colorCircle: "#000",
                    maxAngle: 360
                }
            ]
        };
        return this.each(function () {
            if (option) {
                $.extend(setting, option);
            }
            var size = $(setting.circles).size();
            if (setting.number > size) {
                for (var i = size; i < setting.number; i++) {
                    setting.circles[i] = {
                        count: 100,
                        text: "Title",
                        colorText: "#000",
                        colorCircle: "#000",
                        maxAngle: 360
                    };
                }
            }
            for (var j = 0; j < setting.number; j++) {
                var set = setting.circles[j],
                        maxAngle = set.maxAngle !== undefined ? set.maxAngle : "360",
                        setText = set.text !== undefined ? set.text : "",
                        setColorText = set.colorText !== undefined ? set.colorText : "",
                        setColorCircle = set.colorCircle !== undefined ? set.colorCircle : "",
                        setCount = set.count !== undefined ? set.count : "",
                        setBackground = set.background !== undefined ? set.background : "none";
                $(this).append('<div class="svg_circle undone" data-attr="' + setCount + '"  data-max="' + maxAngle + '"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="40 40 120 120" preserveAspectRatio="none" ><circle cx="100" cy="100" r="57" class="halo" fill="' + setBackground + '" stroke="' + setColorCircle + '" stroke-width="' + setting.widthCircle + '" stroke-dasharray="0,20000" transform="rotate(-90,100,100)" /><text class="myTimer" text-anchor="middle" x="100" y="100" style="font-weight:' + setting.fontWeight + '; font-size:' + setting.numberSize + ';" fill="' + setColorText + '">0</text><text text-anchor="middle" x="100" y="120"  style="font-weight:' + setting.fontWeight + '; font-size:' + setting.textSize + ';" fill="' + setColorText + '" >' + setText + '</text></svg></div>');
            }

            _this = $(this);
            if (setting.shadowCircle)
                $('.svg_circle').find('circle').attr('class', 'halo circle-shadow');
            if (setting.shadowText)
                $('.svg_circle').find('text').attr('class', 'text-shadow');
            circleStart(_this, setting.speed);
            $(window).scroll(function () {
                circleStart(_this, setting.speed);
            });
        });
    }
})(jQuery);
function circleStart(_this, speed) {
    var y = $(window).scrollTop(),
            yHeight = $(window).height(),
            w = _this.offset().top;
    if ((y + (yHeight * 0.8)) > w) {
        var x = $('.svg_circle.undone');
        for (var i = 0; i < x.length; i++) {
            var item = $(x).eq(i);
            if (!$(item).hasClass("done")) {
                var z = $(item).offset().top;
                if ((y + (yHeight * 0.8)) > z) {
                    $(item).addClass("done");
                    var d = $(item).index();
                    var t = i * 600;
                    var aaa = $('.svg_circle').eq(d);
                    setTimeout(function (aaa) {
                        return function () {
                            circleA($(aaa), speed);
                        };
                    }(aaa), t);
                }
            }
        }
    }
}
function circleA(el, speed) {
    var h = $(el).index(),
            num = $(el).attr('data-attr'),
            maxAngle = $(el).attr('data-max'),
            circle = $(el).find('.halo'),
            time = $(el).find('text').eq(0),
            angle = 0,
            myCount = {};
    $(el).removeClass('undone');
    myCount[h] = setInterval(function () {
        $(circle).attr("stroke-dasharray", angle + ", 20000");
        $(time).html(parseInt(angle / 360 * num));
        if (angle >= maxAngle) {
            clearInterval(myCount[h]);
        }
        angle += speed;
    }, 30);
    clearInterval(myCount);
}
