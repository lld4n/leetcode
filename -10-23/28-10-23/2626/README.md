---
title: 2626
url: https://leetcode.com/problems/array-reduce-transformation/description/
created: 28-10-23
time: 1m
source: leetcode
tags:
  - very easy
---

Given an integer array nums, a reducer function fn, and an initial value init, return a reduced array.

A reduced array is created by applying the following operation: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed. The final value of val is returned.

If the length of the array is 0, it should return init.

Please solve it without using the built-in Array.reduce method.
