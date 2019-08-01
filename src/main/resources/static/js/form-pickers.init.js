!function(a) {
    "use strict";
    var b = function() {};
    b.prototype.init = function() {
        a(".basic-datepicker").flatpickr(), a(".datetime-datepicker").flatpickr({
            enableTime: !0,
            dateFormat: "Y-m-d H:i"
        }), a("#humanfd-datepicker").flatpickr({
            altInput: !0,
            altFormat: "F j, Y",
            dateFormat: "Y-m-d"
        }), a("#minmax-datepicker").flatpickr({
            minDate: "2020-01",
            maxDate: "2020-03"
        }), a("#disable-datepicker").flatpickr({
            onReady: function() {
                this.jumpToDate("2025-01");
            },
            disable: [ "2025-01-10", "2025-01-21", "2025-01-30", new Date(2025, 4, 9) ],
            dateFormat: "Y-m-d"
        }), a("#multiple-datepicker").flatpickr({
            mode: "multiple",
            dateFormat: "Y-m-d"
        }), a("#conjunction-datepicker").flatpickr({
            mode: "multiple",
            dateFormat: "Y-m-d",
            conjunction: " :: "
        }), a("#range-datepicker").flatpickr({
            mode: "range"
        }), a("#inline-datepicker").flatpickr({
            inline: !0
        }), a("#basic-timepicker").flatpickr({
            enableTime: !0,
            noCalendar: !0,
            dateFormat: "H:i"
        }), a("#24hours-timepicker").flatpickr({
            enableTime: !0,
            noCalendar: !0,
            dateFormat: "H:i",
            time_24hr: !0
        }), a("#minmax-timepicker").flatpickr({
            enableTime: !0,
            noCalendar: !0,
            dateFormat: "H:i",
            minDate: "16:00",
            maxDate: "22:30"
        }), a("#preloading-timepicker").flatpickr({
            enableTime: !0,
            noCalendar: !0,
            dateFormat: "H:i",
            defaultDate: "01:45"
        }), a("#basic-colorpicker").colorpicker(), a("#hexa-colorpicker").colorpicker({
            format: "auto"
        }), a("#component-colorpicker").colorpicker({
            format: null
        }), a("#horizontal-colorpicker").colorpicker({
            horizontal: !0
        }), a("#inline-colorpicker").colorpicker({
            color: "#DD0F20",
            inline: !0,
            container: !0
        }), a(".clockpicker").clockpicker({
            donetext: "Done"
        }), a("#single-input").clockpicker({
            placement: "bottom",
            align: "left",
            autoclose: !0,
            "default": "now"
        }), a("#check-minutes").click(function(b) {
            b.stopPropagation(), a("#single-input").clockpicker("show").clockpicker("toggleView", "minutes");
        });
    }, a.FormPickers = new b(), a.FormPickers.Constructor = b;
}(window.jQuery), function(a) {
    "use strict";
    window.jQuery.FormPickers.init();
}();