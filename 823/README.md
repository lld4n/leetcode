---
title: 823
url: https://leetcode.com/problems/binary-trees-with-factors/description/?envType=daily-question&envId=2023-10-26
created: 26.10.23
time: 25m
source: leetcode
tags:
  - no tilt
---

Дан массив уникальных целых чисел, arrгде каждое целое число arr[i] строго больше 1.

Мы создаем двоичное дерево, используя эти целые числа, и каждое число можно использовать любое количество раз. Значение каждого нелистового узла должно быть равно произведению значений его дочерних узлов.

Возвращает количество двоичных деревьев, которые мы можем создать. Ответ может быть слишком большим, поэтому верните ответ по модулю .109 + 7