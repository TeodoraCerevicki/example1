function toggleContent() {
    console.log('mama');
    $('.js-toggleClick').click(function(e) {
        e.preventDefault();

        var target = $(this).attr('data-target');
        $(target).slideToggle();
    });
}

toggleContent();
