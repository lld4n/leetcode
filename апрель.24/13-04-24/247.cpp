#include <string>
#include <vector>

using namespace std;

struct TreeNode {
  int val;
  TreeNode *left;
  TreeNode *right;

  TreeNode() : val(0), left(nullptr), right(nullptr) {}

  TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}

  TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left),
                                                     right(right) {}
};


class Solution {
public:
  vector<string> ans;

  vector<string> binaryTreePaths(TreeNode *root) {
    if (!root) return {""};
    dfs(root, "");
    return ans;
  }

private:
  void dfs(TreeNode *node, string res) {
    if (!node) return;

    res += to_string(node->val);
    if (!node->left && !node->right) {
      ans.push_back(res);
    }
    dfs(node->left, res + "->");
    dfs(node->right, res + "->");
  }
};