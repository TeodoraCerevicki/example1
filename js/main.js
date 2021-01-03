$(document).ready(function () {
    $(function(){
        $('.js-toggleClick').click(function(e) {
            e.preventDefault();
    
            var target = $(this).attr('data-target');
            $(target).slideToggle();
        });
    });

    $(function(){
        var tabSwitcher = $('.js-tabSwitch');
        var tabContent = $('.js-tabContent');

        tabContent.hide();
        tabContent.first().show();

        tabSwitcher.click(function(e) {
            e.preventDefault();

            tabSwitcher.removeClass('-active');
            $(this).addClass('-active');

            tabContent.hide();
            var target = $(this).attr('data-target');
            $(target).show();
        });
    });

    $(function() {
        var openBtn = $('.open-popup');
        var popup = $('.m-popup');

        openBtn.click(function(e) {
            e.preventDefault();

            var target = $(this).attr('data-target');
            $(target).addClass('-active');
        });

        !popup.click(function() {
            popup.removeClass('-active');
        })
    });
});



