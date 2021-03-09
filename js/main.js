$('html, body').css({ 'overflow': 'hidden', 'height': '100%' })

window.onload= function(){
    $('.m-pageLoad').fadeOut();
    $('html, body').removeAttr('style');
}

$(document).ready(function () {
    // Toggle content 
    $(function(){
        $('.js-toggleClick').click(function(e) {
            e.preventDefault();
    
            var target = $(this).attr('data-target');
            $(target).slideToggle();
        });
    });

    // Tab switcher
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

    // Pop-up box 
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
                $('html, body').removeClass('block-scroll')
            }

            if (openBtn.is(e.target)) {
                var target = $(this).attr('data-target');
                $(target).addClass('-active');
                $('html, body').addClass('block-scroll')
            }
        });
    });

    // Toggle burger
    $(function() {
        var burger = $('.js-burger');
        var navContent = $('.js-nav-content');

        burger.click(function(e) {
            e.preventDefault();
            navContent.slideToggle('.active-flex');
            burger.toggleClass('open');

            burger.hasClass('open')?$('html, body').addClass('block-scroll') : $('html, body').removeClass('block-scroll');
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

    // Slick slider
    $('.js-slider').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false
    });

    $('.js-sayings').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false
    });

    // Icon appears 
    $(document).scroll(function() {
        var y = window.scrollY;
        var icon = $('.a-toTopArrow');

        (y > 795 ) ? icon.fadeIn() : icon.fadeOut();
    });

    // Scroll to the top
    $('.a-toTopArrow').click(function() {
        $('body,html').animate({
            scrollTop : 0                   
        }, 500);
    });

    // Masonry
    $('.grid').masonry({
        itemSelector: '.grid-item',
        stamp: '.stamp',
        columnWidth: 200,
        transitionDuration: '0.2s'
    });

    AOS.init();
});



