const url = "https://raw.githubusercontent.com/qiyueyouni/luobo/main/tool/base64toimg.html";

$httpClient.get(url, function(error, response, data) {
    if (error) {
        $done();
    } else {
        $done({response: {body: data}});
    }
});
