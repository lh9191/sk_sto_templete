front.btn = front.btn || {};

front.btn = (function () {

    var _btnShow = $('._btnGroup .btn');

    var init = function() {
        this.btn();
    };
    var btn = function () {
        _btnShow.on('click', function (e) {
            $(this).parents('._btnGroup').find('.btn').removeClass('btn-focus');
            $(this).addClass('btn-focus');
        });
    };

    return {
        btn : btn,
        init : init,
    }
})();
$(function () {
    front.btn.init();
})

