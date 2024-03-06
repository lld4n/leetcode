#include <iostream>
#include <vector>

using namespace std;

class TreeNode {
public:
    int value;
    TreeNode* left;
    TreeNode* right;

    TreeNode(int val) : value(val), left(nullptr), right(nullptr) {}

    void setLeft(TreeNode* node) {
        left = node;
    }

    void setRight(TreeNode* node) {
        right = node;
    }
};

int dfs(TreeNode* node, int minv, int maxv) {
    if (node == nullptr) {
        return 0;
    }

    if (node->value <= minv || node->value >= maxv) {
        return -1;
    }

    int lh = dfs(node->left, minv, node->value);
    int rh = dfs(node->right, node->value, maxv);

    if (lh == -1 || rh == -1) {
        return -1;
    }

    if (abs(lh - rh) > 1) {
        return -1;
    }

    return max(lh, rh) + 1;
}

int main() {
    int n, _r;
    cin >> n >> _r;

    vector<TreeNode*> nodes(n);
    for (int i = 0; i < n; ++i) {
        nodes[i] = new TreeNode(i);
    }

    for (int i = 0; i < n; ++i) {
        int l, r;
        cin >> l >> r;
        if (l != -1) {
            nodes[i]->setLeft(nodes[l]);
        }
        if (r != -1) {
            nodes[i]->setRight(nodes[r]);
        }
    }

    TreeNode* root = nodes[_r];

    int ans = dfs(root, 1000000, 1000000);

    if (ans == -1) {
        cout << 0 << endl;
    } else {
        cout << 1 << endl;
    }

    // Clean up memory
    for (auto node : nodes) {
        delete node;
    }

    return 0;
}