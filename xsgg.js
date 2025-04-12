const url = "https://cdn.jsdelivr.net/gh/bgvioletsky/QX@0.2.0/rewrite_remote/xbs/render.html";

$httpClient.get({
    url: url
}, function(error, response, data) {
    if (error) {
        console.log("请求失败：" + error);
        $done();
    } else {
        $done({
            response: {
                bodyBytes: response.body // Surge 返回的二进制数据在 body 里
            }
        });
    }
});