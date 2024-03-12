var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false,
});
rl.on("line", function (line) {
    var _a = line.split(" ").map(Number), n = _a[0], k = _a[1];
    var remains = k % n;
    var whole = Math.floor(k / n);
    console.log(n, k, remains, whole);
    if (remains === 0) {
        console.log(whole * n);
    }
    else {
        console.log((whole + 1) * remains);
    }
    rl.close();
});
