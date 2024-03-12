#include <iostream>
#include <vector>

using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);
//    cin >> n;
//    cout << prefix_sum[r] - prefix_sum[l - 1] << endl;

    int n, m, k;

    cin >> n >> m >> k;

    vector<vector<int>> arr(n, vector<int>(m));

    vector<vector<long long>> prefix(n + 1, vector<long long>(m + 1));

    for (int i = 0; i < n; ++i) {
        for (int j = 0; j < m; ++j) {
            cin >> arr[i][j];
        }
    }

    for (int i = 0; i < m + 1; ++i) {
        prefix[0][i] = 0;
    }
    for (int i = 0; i < n + 1; ++i) {
        prefix[i][0] = 0;
    }

    for (int i = 1; i < n + 1; ++i) {
        for (int j = 1; j < m + 1; ++j) {
            prefix[i][j] = prefix[i - 1][j] + prefix[i][j - 1] - prefix[i - 1][j - 1] + arr[i - 1][j - 1];
        }
    }
    

    int y1, x1, y2, x2;
    while (k--) {
        cin >> y1 >> x1 >> y2 >> x2;
        cout << prefix[y2][x2] - prefix[y1 - 1][x2] - prefix[y2][x1 - 1] + prefix[y1 - 1][x1 - 1] << "\n";
    }


    return 0;
}