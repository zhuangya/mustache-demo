$(function () {
    $.getJSON('http://api.dribbble.com/shots/everyone?callback=?', function (shots) {
        console.log(shots);
        $('#content').html(Mustache.render($('#shotList').html(), shots));
    });

    $('#content').on('click', '.thumbnail', function (event) {
        event.preventDefault();
        var shotId = $(this).data('shotid');
        $.getJSON('http://api.dribbble.com/shots/' + shotId + '?callback=?', function (shot) {
            $('#modalContent').html(Mustache.render($('#modal').html(), shot));
            $('#theModal').modal();
        });
    });
});
