#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

bool compare(const pair<int, int> &a, const pair<int, int> &b) {
    return a.first < b.first;
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);

    int n;
    cin >> n;

    vector<pair<int, int> > arr;

    int sh, sm, ss, eh, em, es;
    int start, end;
    for (int i = 0; i < n; ++i) {
        cin >> sh >> sm >> ss >> eh >> em >> es;
        start = sh * 3600 + sm * 60 + ss;
        end = eh * 3600 + em * 60 + es;

        if (start < end) {
            arr.emplace_back(start, 0);
            arr.emplace_back(end, 1);
            continue;
        }
        arr.emplace_back(0, 0);
        arr.emplace_back(end, 1);
        arr.emplace_back(start, 0);
        arr.emplace_back(86400, 1);
    }
    sort(arr.begin(), arr.end(), compare);


    int ans = 0;
    int s = 0;
    int b = 0;

    bool flag = false;


    for (auto &item: arr) {
        if (item.second == 0) {
            b++;
            if (b == n) {
                s = item.first;
                flag = true;
            }
        } else {
            b--;
            if (flag) {
                flag = false;
                ans += (item.first - s);
                s = 0;
            }
        }
    }


    cout << ans;


    return 0;
}
