#include <iostream>

using namespace std;
bool is_n = false, is_moreThanN = false, is_lessThanN = false;
long long n, m;

void sort_down(long long *typeOfCoins) {
  int idOfMax;
  for (int i = 0; i < m - 1; ++i) {
    idOfMax = i;
    for (int j = i + 1; j < m; ++j) {
      if (typeOfCoins[j] > typeOfCoins[idOfMax]) {
        idOfMax = j;
      }
    }
    swap(typeOfCoins[i], typeOfCoins[idOfMax]);
  }
}

void
select(long long *typeOfCoins, long long *selectedCoins, long long *finalRow,
       long long &size, long long numInType, long long curSum,
       long long endInSel) {
  if (curSum == n) {
    if (endInSel < size) {
      size = endInSel;
      for (int i = 0; i < size + 1; ++i) {
        finalRow[i] = selectedCoins[i];
      }
    }
    is_n = true;
    return;
  }
  if ((numInType == m) || (curSum > n)) {
    if (curSum > n) {
      is_moreThanN = true;
    }
    return;
  }
  if ((curSum != 0) && (curSum < n)) {
    is_lessThanN = true;
  }
  for (int i = 2; i >= 0; --i) {
    curSum += typeOfCoins[numInType] * i;
    for (int j = 1; j <= i; ++j) {
      selectedCoins[++endInSel] = typeOfCoins[numInType];
    }
    ++numInType;
    select(typeOfCoins, selectedCoins, finalRow, size, numInType, curSum,
           endInSel);
    --numInType;
    curSum -= typeOfCoins[numInType] * i;
    endInSel -= i;
  }
}

int main() {
  ios::sync_with_stdio(false);
  cin.tie(nullptr);
  cout.tie(nullptr);

  cin >> n >> m;
  long long *typeOfCoins = new long long[m]();
  for (int i = 0; i < m; ++i) cin >> typeOfCoins[i];
  sort_down(typeOfCoins);
  long long *selectedCoins = new long long[m * 2]();
  long long *finalRow = new long long[m * 2]();
  long long numInType = 0, endInSel = -1, curSum = 0, size = m * 2;

  select(typeOfCoins, selectedCoins, finalRow, size, numInType, curSum,
         endInSel);


  if (is_n) {
    cout << size + 1 << endl;
    for (int i = 0; i < size + 1; ++i) cout << finalRow[i] << " ";
    cout << endl;
  } else if (is_moreThanN) {
    cout << 0 << endl;
  } else {
    cout << -1 << endl;
  }
  return 0;
}

