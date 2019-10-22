front.alarm = front.alarm || {};

front.alarm = (function () {

    var _alarmToggle = $('._alarmToggle');

    var init = function() {
        this.alarm();
    };
    var alarm = function () {
        _alarmToggle.on('click', function (e) {

            $(this).addClass('on');
            $(this).siblings().removeClass('on');
            if($(this).hasClass('on')){
                $(this).hide();
                $(this).siblings('._alarmToggle').show();
            }else{
                $(this).show();
                $(this).siblings('._alarmToggle').hide();
            }
        });
    };

    return {
        alarm : alarm,
        init : init,
    }
})();
$(function () {
    front.alarm.init();
})
