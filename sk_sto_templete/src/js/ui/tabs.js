front.tabs = front.tabs || {};

front.tabs = (function () {
    var init = function() {
        this.tabs();
    };
    var tabs = function () {
        var _tabsShow = $('._tabs');
        _tabsShow.on('click','li', function (e) {
            var id = $(this).data('id');
            $(this).addClass('active')
                .siblings().removeClass('active');

            //pannnel 컨트롤
            $("._panel").hide();
            $("#" + id).show();




        });
    };

    return {
        tabs : tabs,
        init : init,
    }
})();
$(function () {
    front.tabs.init();
})
