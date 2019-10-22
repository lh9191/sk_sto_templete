front.star = front.star || {};

front.star = (function () {

    var btnStar = $('.btn_star');

    var init = function() {
        this.star();
    };
    var star = function () {
        btnStar.on('click', function (e) {
            $(".btn_star").on('click', function () {
                var starNum = $(this).index();
                $("._star_red").width(((starNum+1)*10)+"%");
            });
        });
    };

    return {
        star : star,
        init : init,
    }
})();
$(function () {
    front.star.init();
})
