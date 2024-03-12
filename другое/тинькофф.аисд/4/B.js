var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false,
});
var n = -1;
var m = -1;
var k = -1;
var i = 0;
var arr = [];
var query = [];
rl.on("line", function (line) {
    var _a;
    if (i === 0) {
        _a = line.split(" ").map(Number), n = _a[0], m = _a[1], k = _a[2];
        i++;
    }
    else {
        if (n !== 0) {
            arr.push(line.split(" ").map(Number));
            n--;
        }
        else {
            query.push(line.split(" ").map(Number));
            k--;
        }
    }
    if (k === 0) {
        final();
        rl.close();
    }
});
var pref = [];
function precalc() {
    pref = new Array(arr.length);
    for (var i_1 = 0; i_1 < arr.length; i_1++) {
        pref.push(new Array(arr[0].length).fill(0));
    }
    pref[0][0] = arr[0][0];
    for (var i_2 = 1; i_2 < n; i_2++) {
        pref[i_2][0] = pref[i_2 - 1][0] + arr[i_2][0];
    }
    for (var i_3 = 1; i_3 < m; i_3++) {
        pref[0][i_3] = pref[0][i_3 - 1] + arr[0][i_3];
    }
    for (var i_4 = 1; i_4 < n; i_4++) {
        for (var j = 1; j < n; j++) {
            pref[i_4][j] =
                pref[i_4 - 1][j] +
                    pref[i_4][j - 1] -
                    pref[i_4 - 1][j - 1] +
                    arr[i_4][j];
        }
    }
}
function calc(x1, y1, x2, y2) {
    return (pref[x2][y2] -
        (x1 ? pref[x1 - 1][y2] : 0) -
        (y1 ? pref[x2][y1 - 1] : 0) +
        (x1 && y1 ? pref[x1 - 1][y1 - 1] : 0));
}
function final() {
    precalc();
    console.log(pref);
    for (var _i = 0, query_1 = query; _i < query_1.length; _i++) {
        var _a = query_1[_i], y1 = _a[0], x1 = _a[1], y2 = _a[2], x2 = _a[3];
        console.log(calc(x1 - 1, y1 - 1, x2 - 1, y2 - 1));
    }
}
