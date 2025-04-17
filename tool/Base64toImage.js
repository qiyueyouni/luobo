const url = "https://qiyueyouni.github.io/woshiluobo_tool/index.html";

$httpClient.get(url, function(error, response, data) {
    if (error) {
        $done();
    } else {
        $done({response: {body: data}});
    }
});
