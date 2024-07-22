$(document).ready(function () {
    $('#click-me').on('click', function () {
        $.ajax({
            type: "get",
            url: "127.0.0.1:8000",
            data: {
                q: '1'
            },
            success: function (response) {
                let div = document.createElement('div');
                div.innerHTML = response;
            }
        });
    });
});