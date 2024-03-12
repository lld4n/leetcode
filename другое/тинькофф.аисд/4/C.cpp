#include <iostream>
#include <vector>

using namespace std;


bool check(vector<int> &lst, int k, int dist) {
    int c = 1;
    int last = lst[0];
    for (int pos: lst) {
        if (last + dist > pos) {
            continue;
        }
        c++;
        last = pos;
    }
    return c >= k;
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);
//    cin >> n;
//    cout << prefix_sum[r] - prefix_sum[l - 1] << endl;


    int n;
    int k;
    cin >> n >> k;
    vector<int> arr(n);
    for (int i = 0; i < n; ++i) {
        cin >> arr[i];
    }


    int l = 0;
    int r = 1e9;
    while (l + 1 < r) {
        int m = l + (r - l) / 2;
        if (check(arr, k, m)) {
            l = m;
        } else {
            r = m;
        }
    }

    cout << l;


    return 0;
}