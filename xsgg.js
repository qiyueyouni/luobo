const url = "https://cdn.jsdelivr.net/gh/bgvioletsky/QX@0.2.0/rewrite_remote/xbs/render.html";

$httpClient.get(url, function(error, response, data) {
    if (error) {
        $done();
    } else {
        $done({response: {body: data}});
    }
});