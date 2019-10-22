front.accodian = front.accodian || {};

front.accodian = (function () {

    var _btnOpen = $('._accodianOpen');
    var _btnClose = $('._accodianClose');
    var init = function () {
        this.open();
        this.close();
        this.toggleDisplay();
        this.toggleBtnSeperate();
    };
    // 닫기 버튼
    var open = function () {
        _btnOpen.on('click', function () {
            var parents = $(this).parents('._q');
            if (parents.hasClass('open')) {
                parents.removeClass('open');
                parents.siblings('._a').hide();
            } else {
                parents.addClass('open');
                parents.siblings('._q').removeClass('open');
                parents.siblings('._a').hide();
                parents.next().show();
            }
        });
    };
    var close = function () {
        _btnClose.on('click', function () {
            $(this).parents('tr').hide();
        });
    };

    // 취교반
    var toggleDisplay = function () {
        $('._toggleDisplay').on('click', '._close', function () {
            $(this).parents('._toggleDisplay').find('._close').hide();
            $(this).parents('._toggleDisplay').find('._open').show();
            $(this).parents('._toggleDisplay').find('._fold').hide();
        });
        $('._toggleDisplay').on('click', '._open', function () {
            $(this).parents('._toggleDisplay').find('._open').hide();
            $(this).parents('._toggleDisplay').find('._close').show();
            $(this).parents('._toggleDisplay').find('._fold').show();
        });
    };

    // 고객센터 열기버튼 닫기버튼 분리
    var btnToggle = $('._btnToggle');
    var btnOpen = $('._btnOpen');
    var btnClose = $('._btnClose');

    var toggleBtnSeperate = function () {

        btnToggle.on('click', function () {
            var parents = $(this).parents('._q');
            if (parents.hasClass('open')) {
                parents.removeClass('open');
                parents.siblings('._a').hide();
                $(this).siblings('._btnClose').hide();
                $(this).siblings('._btnOpen').show();
            } else {
                parents.addClass('open');
                parents.siblings('._q').removeClass('open');
                parents.siblings('._a').hide();
                parents.next().show();
                $(this).siblings('._btnClose').show();
                $(this).siblings('._btnOpen').hide();
            }
        });
        btnOpen.on('click', function () {
            var parents = $(this).parents('._q');
            parents.addClass('open');
            parents.siblings('._q').removeClass('open');
            parents.siblings('._a').hide();
            parents.next().show();
            $(this).siblings('._btnClose').show();
            $(this).hide();
        });
        btnClose.on('click', function () {
            var parents = $(this).parents('._q');
            parents.removeClass('open');
            parents.siblings('._a').hide();
            $(this).hide();
            $(this).prevAll('._btnOpen').show();
        });

    }

    return {
        open: open,
        close: close,
        toggleDisplay: toggleDisplay,
        init: init,
        toggleBtnSeperate: toggleBtnSeperate,
    }
})();
$(function () {
    front.accodian.init();
})
