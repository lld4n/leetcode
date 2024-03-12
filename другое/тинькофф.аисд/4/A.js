var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false,
});
var i = 0;
var n = 0;
var m = -1;
var arr = [];
var query = [];
rl.on("line", function (line) {
    if (i === 0) {
        n = Number(line);
        i++;
    }
    else if (i === 1) {
        arr = line.split(" ").map(Number);
        i++;
    }
    else if (i === 2) {
        m = Number(line);
        i++;
    }
    else {
        query.push(line.split(" ").map(Number));
        m--;
    }
    if (m === 0) {
        final();
        rl.close();
    }
});
function final() {
    var prefixSum = [];
    var prefixXor = [];
    prefixSum[0] = arr[0];
    prefixXor[0] = arr[0];
    for (var i_1 = 1; i_1 < arr.length; i_1++) {
        prefixSum[i_1] = prefixSum[i_1 - 1] + arr[i_1];
        prefixXor[i_1] = prefixXor[i_1 - 1] ^ arr[i_1];
    }
    var giveXor = function (l, r) {
        if (l === 1) {
            return prefixXor[r - 1];
        }
        else {
            return prefixXor[r - 1] ^ prefixXor[l - 2];
        }
    };
    var giveSum = function (l, r) {
        if (l === 1) {
            return prefixSum[r - 1];
        }
        else {
            return prefixSum[r - 1] - prefixSum[l - 2];
        }
    };
    for (var _i = 0, query_1 = query; _i < query_1.length; _i++) {
        var _a = query_1[_i], q = _a[0], l = _a[1], r = _a[2];
        if (q === 1) {
            console.log(giveSum(l, r));
        }
        else {
            console.log(giveXor(l, r));
        }
    }
}
