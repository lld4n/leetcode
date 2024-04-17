#include <iostream>
#include <vector>

using namespace std;

struct tree {
  int v = 0, len = 0, x, lv;
  bool l = 0, r = 0, psh = false, p = false;
  char c;
};

tree tr[800000];
vector<int> a;

int lwbnd(int key) {
  int left = -1;
  int right = a.size();
  while (right - left > 1) {
    int middle = (left + right) / 2;
    if (a[middle] < key) {
      left = middle;
    } else {
      right = middle;
    }
  }
  return right;
}

void s_t(int ind, int l, int r, int L, int R, bool val) {
  if (L <= l and r <= R) {
    tr[ind].len = (a[r] - a[l]) * val;
    tr[ind].v = tr[ind].l = tr[ind].r = val;
    tr[ind].psh = true;
    tr[ind].p = val;
    return;
  }

  if (r <= L or R <= l) {
    return;
  }

  if (tr[ind].psh) {
    int m = (l + r) / 2;
    tr[ind * 2 + 1].len = (a[m] - a[l]) * tr[ind].p;
    tr[ind * 2 + 1].v = tr[ind * 2 + 1].l = tr[ind * 2 + 1].r = tr[ind].p;
    tr[ind * 2 + 1].psh = true;
    tr[ind * 2 + 1].p = tr[ind].p;
    tr[ind * 2 + 2].len = (a[r] - a[m]) * tr[ind].p;
    tr[ind * 2 + 2].v = tr[ind * 2 + 2].l = tr[ind * 2 + 2].r = tr[ind].p;
    tr[ind * 2 + 2].psh = true;
    tr[ind * 2 + 2].p = tr[ind].p;
    tr[ind].psh = false;
  }
  int m = (l + r) / 2;
  s_t(ind * 2 + 1, l, m, L, R, val);
  s_t(ind * 2 + 2, m, r, L, R, val);
  tr[ind].len = tr[ind * 2 + 1].len + tr[ind * 2 + 2].len;
  tr[ind].v = tr[ind * 2 + 1].v + tr[ind * 2 + 2].v -
              (tr[ind * 2 + 1].r & tr[ind * 2 + 2].l);
  tr[ind].l = tr[ind * 2 + 1].l;
  tr[ind].r = tr[ind * 2 + 2].r;
}

int main() {
  ios::sync_with_stdio(false);
  cin.tie(nullptr);
  cout.tie(nullptr);
  int n;
  cin >> n;

  int i = 0;

  while (i < n) {
    cin >> tr[i].c >> tr[i].x >> tr[i].lv;
    a.push_back(tr[i].x);
    a.push_back(tr[i].x + tr[i].lv);
    ++i;
  }

  sort(a.begin(), a.end());
  a.resize(unique(a.begin(), a.end()) - a.begin());

  i = 0;

  while (i < n) {
    s_t(0, 0, a.size() - 1, lwbnd(tr[i].x), lwbnd(tr[i].x + tr[i].lv),
        tr[i].c == 'B');
    cout << tr[0].v << " " << tr[0].len << endl;
    ++i;
  }

  return 0;
}