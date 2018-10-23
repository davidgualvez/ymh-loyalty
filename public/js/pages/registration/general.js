function ajax(url, request, callback) {
    Pace.track(function () {
        $.ajax({
            url: url,
            type: "POST",
            dataType: "json",
            data: request,
            success: function (data) {
                callback(data);
            },
            error: function (data) {

                $.growl.error({
                    location: "tc",
                    title: "Page Error",
                    message: 'Something Went Wrong!'
                });
            }
        });
    });
}