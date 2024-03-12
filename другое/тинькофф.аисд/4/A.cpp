#include <iostream>
#include <vector>

using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);

    int n;
    cin >> n;

    vector<int> arr(n);
    for (int i = 0; i < n; ++i) {
        cin >> arr[i];
    }

    vector<long long> prefix_sum(n + 1);
    vector<long long> prefix_xor(n + 1);
    prefix_sum[0] = 0;
    prefix_xor[0] = 0;

    for (int i = 1; i <= n; ++i) {
        prefix_sum[i] = prefix_sum[i - 1] + arr[i - 1];
        prefix_xor[i] = prefix_xor[i - 1] ^ arr[i - 1];
    }

    int m;
    cin >> m;

    int q, l, r;
    while (m--) {
        cin >> q >> l >> r;
        if (q == 1) {
            cout << prefix_sum[r] - prefix_sum[l - 1] << endl;
        } else {
            cout << (prefix_xor[r] ^ prefix_xor[l - 1]) << endl;
        }
    }

    return 0;
}