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
        var popBox = $('.m-popup__box');

        openBtn.click(function(e) {
            e.preventDefault();

            var target = $(this).attr('data-target');
            $(target).addClass('-active');
        });

        $(document).mouseup(function(e)  {
            e.preventDefault(); 

            if (!popBox.is(e.target) && popBox.has(e.target).length === 0 || $('.js-close').is(e.target)) {
                popup.removeClass('-active');
            }

            if (openBtn.is(e.target)) {
                var target = $(this).attr('data-target');
                $(target).addClass('-active');
            }
        });
    });

    $(function() {
        var burger = $('.js-burger');
        var navContent = $('.js-nav-content');

        burger.click(function(e) {
            e.preventDefault();
            navContent.slideToggle('.active-flex');
            burger.toggleClass('open');
        });
    });

    $(function() {
        var openTextBtn = $('.js-openTextBtn');
        var openTextContent = $('.js-openTextContent');

        openTextBtn.click(function(e) {
            e.preventDefault();

            openTextContent.toggleClass('-homeCutText');

            (openTextContent.hasClass('-homeCutText')) ? openTextBtn.text('Zelim sve da procitam') : openTextBtn.text('Ajme di otvori!');
        });
    });
});



