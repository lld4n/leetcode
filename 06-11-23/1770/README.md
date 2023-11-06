---
title: 1770
url: https://leetcode.com/problems/maximum-score-from-performing-multiplication-operations/description/
created: 06-11-23
time: 10m
source: leetcode
tags:
  - hard
---

You are given two 0-indexed integer arrays nums and multipliers of size n and m respectively, where n >= m.

You begin with a score of 0. You want to perform exactly m operations. On the ith operation (0-indexed) you will:

Choose one integer x from either the start or the end of the array nums.
Add multipliers[i] \* x to your score.
Note that multipliers[0] corresponds to the first operation, multipliers[1] to the second operation, and so on.
Remove x from nums.
Return the maximum score after performing m operations.
