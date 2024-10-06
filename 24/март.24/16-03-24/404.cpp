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
  int ans = 0;

  int sumOfLeftLeaves(TreeNode *root) {
    if (!root) return ans;

    right(root->right);
    left(root->left);
    return ans;
  }

private:
  void right(TreeNode *root) {
    if (!root) return;

    left(root->left);
    right(root->right);


  }

  void left(TreeNode *root) {
    if (!root) return;
    if (!root->left && !root->right) {
      ans += root->val;
    }
    left(root->left);
    right(root->right);
  }
};