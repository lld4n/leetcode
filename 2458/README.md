---
title: 2458
url: https://leetcode.com/problems/height-of-binary-tree-after-subtree-removal-queries/
created: 19.10.23
time: 1h
source: leetcode
tags:
  - cringe
---

Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

You are given the root of a binary tree with n nodes. Each node is assigned a unique value from 1 to n. You are also given an array queries of size m.

You have to perform m independent queries on the tree where in the ith query you do the following:

Remove the subtree rooted at the node with the value queries[i] from the tree. It is guaranteed that queries[i] will not be equal to the value of the root.
Return an array answer of size m where answer[i] is the height of the tree after performing the ith query.

Note:

The queries are independent, so the tree returns to its initial state after each query.
The height of a tree is the number of edges in the longest simple path from the root to some node in the tree.
