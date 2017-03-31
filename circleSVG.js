(function ($) {
    
    var methods = {
        init : function( option ) { 
            var defaults = {
                number: 1,
                speed: 6,
                shadowCircle: true,
                widthCircle: 2,
                shadowText: true,
                numberSize: '2.5em',
                textSize: '1em',
                fontWeight: '300',
                circles: []
            };
            return this.each(function () {
                // if (option) {
                //     $.extend(setting, option);
                // }
                var setting = $.extend( {}, defaults, option );

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

                _this = $(this);
                for (var j = 0; j < setting.number; j++) {
                    methods.build(_this, setting, j);
                }

                if (setting.shadowCircle) $('.svg_circle').find('circle').attr('class', 'halo circle-shadow');
                if (setting.shadowText) $('.svg_circle').find('text').attr('class', 'text-shadow');

                methods.show(_this, setting.speed);
                $(window).scroll(function () {
                    methods.show(_this, setting.speed);
                });             

            });
        },
        build : function(_this, setting, j) { 
            var a = setting.circles[j],
            ma = a.maxAngle !== undefined ? a.maxAngle : "360",
            st = a.text !== undefined ? a.text : "",
            sct = a.colorText !== undefined ? a.colorText : "",
            scc = a.colorCircle !== undefined ? a.colorCircle : "",
            sc = a.count !== undefined ? a.count : "",
            sb = a.background !== undefined ? a.background : "none";
            _this.append('<div class="svg_circle undone" data-attr="' + sc + '"  data-max="' + ma + '"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="40 40 120 120" preserveAspectRatio="none" ><circle cx="100" cy="100" r="57" class="halo" fill="' + sb + '" stroke="' + scc + '" stroke-width="' + setting.widthCircle + '" stroke-dasharray="0,20000" transform="rotate(-90,100,100)" /><text class="myTimer" text-anchor="middle" x="100" y="100" style="font-weight:' + setting.fontWeight + '; font-size:' + setting.numberSize + ';" fill="' + sct + '">0</text><text text-anchor="middle" x="100" y="120"  style="font-weight:' + setting.fontWeight + '; font-size:' + setting.textSize + ';" fill="' + sct + '" >' + st + '</text></svg></div>');
        },
        show : function(_this, speed) { 
            var yTop = $(window).scrollTop(),
            yHeight = $(window).height(),
            elTop = _this.offset().top;
            if ((yTop + (yHeight * 0.8)) > elTop) {
                var x = $('.svg_circle.undone');
                for (var i = 0; i < x.length; i++) {
                    var item = $(x).eq(i);
                    if (!(item.hasClass("done"))) {
                        var iTop = item.offset().top;
                        if ((yTop + (yHeight * 0.8)) > iTop) {
                            item.addClass("done");
                            var el = $('.svg_circle').eq(item.index());
                            setTimeout(function (el) {
                                return function () {
                                    methods.animate(el, speed);
                                };
                            }(el), i * 600);
                        }
                    }
                }
            }            
        },
        animate : function(el, speed) {
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
                var newangle = speed === 4 && maxAngle < 360 ? ((angle / maxAngle * num) - 2) : (angle / maxAngle * num);
                $(time).html(parseInt(newangle));
                if (angle >= maxAngle) {
                    clearInterval(myCount[h]);
                }
                angle += speed;
            }, 30);
            clearInterval(myCount);
        },
        destroy : function( ) {
            $(this).remove();
        },
        hide : function( ) {
            $(this).hide();
        }
    };

    $.fn.circleSVG = function( method ) {
        if ( methods[method] ) {
            return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof method === 'object' || ! method ) {
            return methods.init.apply( this, arguments );
        } else {
            $.error('Method ' +  method + ' is not exists for the jQuery.circleSVG');
        } 
    };

})(jQuery);


