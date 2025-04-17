const url = "https://raw.githubusercontent.com/qiyueyouni/woshiluobo_tool/main/index.html";

$httpClient.get(url, function(error, response, data) {
    if (error) {
        $done();
    } else {
        $done({response: {body: data}});
    }
});
