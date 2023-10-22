---
title: 891
url: https://leetcode.com/problems/sum-of-subsequence-widths/
created: 22.10.23
time: 1h20m
source: leetcode
tags:
  -
---

The width of a sequence is the difference between the maximum and minimum elements in the sequence.

Given an array of integers nums, return the sum of the widths of all the non-empty subsequences of nums. Since the answer may be very large, return it modulo 10^9 + 7.

A subsequence is a sequence that can be derived from an array by deleting some or no elements without changing the order of the remaining elements. For example, [3,6,2,7] is a subsequence of the array [0,3,1,6,2,2,7].

Example 1:

Input: nums = [2,1,3]
Output: 6
Explanation: The subsequences are [1], [2], [3], [2,1], [2,3], [1,3], [2,1,3].
The corresponding widths are 0, 0, 0, 1, 1, 2, 2.
The sum of these widths is 6.
Example 2:

Input: nums = [2]
Output: 0

---

Ширина последовательности - это разность между максимальным и минимальным элементами последовательности.

Если задан массив целых чисел nums, то верните сумму ширин всех непустых подпоследовательностей nums. Поскольку ответ может быть очень большим, верните его по модулю 10^9 + 7.

Подпоследовательность - это последовательность, которая может быть получена из массива путем удаления некоторых или ни одного элемента без изменения порядка следования оставшихся элементов. Например, [3,6,2,7] является подпоследовательностью массива [0,3,1,6,2,2,7].

Пример 1:

Вход: nums = [2,1,3]
Выход: 6
Пояснения: Подпоследовательности имеют вид [1], [2], [3], [2,1], [2,3], [1,3], [2,1,3].
Соответствующие ширины равны 0, 0, 0, 1, 1, 2, 2.
Сумма этих ширин равна 6.
Пример 2:

Вход: nums = [2]
Выход: 0

---

Столкнулся с time limit
Идея с O(n^2) не прокатывает
Украденное решение закомментировано
