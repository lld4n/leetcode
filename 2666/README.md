---
title: 2666
url: https://leetcode.com/problems/allow-one-function-call/
created: 22.10.23
time: 0
source: leetcode
tags:
  -
---

Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.

The first time the returned function is called, it should return the same result as fn.
Every subsequent time it is called, it should return undefined.

Example 1:

Input: fn = (a,b,c) => (a + b + c), calls = [[1,2,3],[2,3,6]]
Output: [{"calls":1,"value":6}]
Explanation:
const onceFn = once(fn);
onceFn(1, 2, 3); // 6
onceFn(2, 3, 6); // undefined, fn was not called
Example 2:

Input: fn = (a,b,c) => (a _ b _ c), calls = [[5,7,4],[2,3,6],[4,6,8]]
Output: [{"calls":1,"value":140}]
Explanation:
const onceFn = once(fn);
onceFn(5, 7, 4); // 140
onceFn(2, 3, 6); // undefined, fn was not called
onceFn(4, 6, 8); // undefined, fn was not called

---

Задав функцию fn, верните новую функцию, идентичную исходной, за исключением того, что она гарантирует, что fn будет вызвана не более одного раза.

При первом вызове возвращаемая функция должна возвращать тот же результат, что и fn.
При каждом последующем вызове она должна возвращать неопределенный результат.

Пример 1:

Вход: fn = (a,b,c) => (a + b + c), calls = [[1,2,3],[2,3,6]].
Выходные данные: [{"calls":1,"value":6}]
Пояснение:
const onceFn = once(fn);
onceFn(1, 2, 3); // 6
onceFn(2, 3, 6); // неопределено, fn не был вызван
Пример 2:

Вход: fn = (a,b,c) => (a _ b _ c), вызовы = [[5,7,4],[2,3,6],[4,6,8]].
Выходные данные: [{"calls":1,"value":140}]
Пояснение:
const onceFn = once(fn);
onceFn(5, 7, 4); // 140
onceFn(2, 3, 6); // неопределено, fn не вызывался
onceFn(4, 6, 8); // неопределено, fn не вызывался
