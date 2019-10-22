front.form = front.form || {};
front.form = (function () {
    var init = function() {
        this.setSelect();
        this.onFucusText();
        this.onBlurText();
    };
    var setSelect = function () {
        $('select').formSelect();
    };

    var datepicker = function () {
        //https://uxsolutions.github.io/bootstrap-datepicker/?markup=input&format=&weekStart=&startDate=&endDate=&startView=0&minViewMode=0&maxViewMode=4&todayBtn=false&clearBtn=false&language=kr&orientation=auto&multidate=&multidateSeparator=&keyboardNavigation=on&forceParse=on#sandbox
        // $('._datepicker').datepicker({
        //     language: "kr",
        //     format: "yyyy-mm-dd",
        //     todayHighlight: true,
        //     todayBtn: false,
        //     clearBtn: false
        // });
    };
    var onFucusText = function () {
        $('input[type="text"], input[type="password"], input[type="email"]').on('focus', function () {
            var tooltip = $(this).data('tooltip');
            if (tooltip !== undefined){
                $(this).after('<span class="tooltip-form">' + tooltip + '</span>');
            }
        })
    }
    var onBlurText = function () {
        $('input[type="text"], input[type="password"], input[type="email"]').on('blur', function () {
            if ( !$(this).hasClass('select-dropdown') ) {
                $(this).siblings('.tooltip-form').remove();
            }
        })
    }



    return {
        datepicker : datepicker,
        onFucusText : onFucusText,
        onBlurText : onBlurText,
        setSelect : setSelect,
        init : init,
    }
})();
$(function () {
    front.form.init();
})

