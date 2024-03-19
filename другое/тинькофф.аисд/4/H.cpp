#include <iostream>
#include <vector>
#include <algorithm>
#include <cmath>

using namespace std;


struct Problem {
  int begin;
  int len;
  int prev;
  long long ans;
};

struct Event {
  int time;
  int id;
  int type;
};

int main() {
  ios::sync_with_stdio(false);
  cin.tie(nullptr);
  cout.tie(nullptr);
  int n;
  cin >> n;
  int c;
  cin >> c;
  vector<Problem> problems(n);
  vector<Event> events(2 * n);
  int begin, len;
  for (int i = 0; i < n; i++) {
    cin >> begin >> len;
    problems[i] = Problem{begin, len};
    events[i * 2] = Event{begin, i, 1};
    events[i * 2 + 1] = Event{begin + len, i, -1};
  }


  sort(events.begin(), events.end(),
       [](const Event &left, const Event &right) {
         if (left.time != right.time) {
           return left.time < right.time;
         }
         return left.type < right.type;
       });


  long long maxSum = 0;
  int id = -1;

  for (Event cur: events) {
    if (cur.type == 1) {
      problems[cur.id].ans = maxSum + c;
      problems[cur.id].prev = id;
    } else if (maxSum < problems[cur.id].ans) {
      maxSum = problems[cur.id].ans;
      id = cur.id;
    }
  }

  vector<int> ans;
  while (id != -1) {
    ans.push_back(id);
    id = problems[id].prev;
  }

  reverse(ans.begin(), ans.end());
  cout << maxSum << endl;
  cout << ans.size() << endl;
  for (int answer: ans) {
    cout << answer + 1 << " ";
  }
  return 0;
}