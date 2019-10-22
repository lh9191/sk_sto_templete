var front = front || {};

front.common = front.common || {};

front.common = (function () {

    var init = function() {
        this.a();
    };

    var a = function () {
        $('a[href="#"]').on('click', function (e) {
            e.preventDefault();
        });
    };
    return {
        a : a,
        init : init
    }
})();
$(function () {
    front.common.init();
});


