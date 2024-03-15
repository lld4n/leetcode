
using namespace std;

struct TreeNode {
    int val;
    TreeNode *left;
    TreeNode *right;

    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
};

class Solution {
public:
    TreeNode *
    getTargetCopy(TreeNode *original, TreeNode *cloned, TreeNode *target) {
        return dfs(cloned, target);
    }

private:
    TreeNode *dfs(TreeNode *node, TreeNode *target) {
        if (!node) {
            return nullptr;
        }
        if (node->val == target->val) {
            return node;
        }
        TreeNode *lef = dfs(node->left, target);
        if (lef && lef->val == target->val) {
            return lef;
        }
        TreeNode *rig = dfs(node->right, target);
        if (rig && rig->val == target->val) {
            return rig;
        }
        return nullptr;
    }
};