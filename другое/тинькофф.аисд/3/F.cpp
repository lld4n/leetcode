#include <iostream>

using namespace std;


class TreeNode {
public:
    int data;
    TreeNode *left;
    TreeNode *right;
    int height;

    TreeNode(int data) {
        this->data = data;
        left = nullptr;
        right = nullptr;
        height = 1;
    }
};

class AVLTree {
private:
    TreeNode *root;

    static int height(TreeNode *node) {
        if (node == nullptr) {
            return 0;
        }
        return node->height;
    }

    int getBalanceFactor(TreeNode *node) {
        if (node == nullptr) {
            return 0;
        }
        return height(node->left) - height(node->right);
    }

    TreeNode *rotateRight(TreeNode *y) {
        TreeNode *x = y->left;
        TreeNode *T = x->right;

        x->right = y;
        y->left = T;

        y->height = 1 + max(height(y->left), height(y->right));
        x->height = 1 + max(height(x->left), height(x->right));

        return x;
    }

    TreeNode *rotateLeft(TreeNode *x) {
        TreeNode *y = x->right;
        TreeNode *T = y->left;

        y->left = x;
        x->right = T;

        x->height = 1 + max(height(x->left), height(x->right));
        y->height = 1 + max(height(y->left), height(y->right));

        return y;
    }

    TreeNode *insert(TreeNode *node, int data) {
        if (node == nullptr) {
            return new TreeNode(data);
        }

        if (data < node->data) {
            node->left = insert(node->left, data);
        } else if (data > node->data) {
            node->right = insert(node->right, data);
        } else {
            return node;
        }

        node->height = 1 + max(height(node->left), height(node->right));

        int balance = getBalanceFactor(node);

        if (balance > 1 && data < node->left->data) {
            return rotateRight(node);
        }
        if (balance < -1 && data > node->right->data) {
            return rotateLeft(node);
        }
        if (balance > 1 && data > node->left->data) {
            node->left = rotateLeft(node->left);
            return rotateRight(node);
        }
        if (balance < -1 && data < node->right->data) {
            node->right = rotateRight(node->right);
            return rotateLeft(node);
        }

        return node;
    }

    int next(int i) {
        TreeNode *cur = root;
        int mm = -1;
        while (cur != nullptr) {
            if (cur->data >= i) {
                mm = cur->data;
                cur = cur->left;
            } else {
                cur = cur->right;
            }
        }
        return mm;
    }


public:
    AVLTree() {
        root = nullptr;
    }

    void insert(int data) {
        root = insert(root, data);
    }

    int fi(int i) {
        return next(i);
    }


};


int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);

    AVLTree avl;
    int n;
    int i = 0;
    cin >> n;

    int x;
    string s;
    long long y = 0;
    int item;
    while (i != n) {
        i++;
        cin >> s >> x;
        if (s == "+") {
            item = (x + y) % 1000000000;
            avl.insert(item);
            y = 0;
        } else {
            y = avl.fi(x);
            cout << y << endl;
        }
    }


    return 0;
}
