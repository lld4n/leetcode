---
title: 1884
url: https://leetcode.com/problems/egg-drop-with-2-eggs-and-n-floors/description/
created: 16.10.23
time: 17m
source: leetcode
tags:
  - strange
---

You are given two identical eggs and you have access to a building with n floors labeled from 1 to n.

You know that there exists a floor f where 0 <= f <= n such that any egg dropped at a floor higher than f will break, and any egg dropped at or below floor f will not break.

In each move, you may take an unbroken egg and drop it from any floor x (where 1 <= x <= n). If the egg breaks, you can no longer use it. However, if the egg does not break, you may reuse it in future moves.

Return the minimum number of moves that you need to determine with certainty what the value of f is.

Example 1:

Input: n = 2
Output: 2
Explanation: We can drop the first egg from floor 1 and the second egg from floor 2.
If the first egg breaks, we know that f = 0.
If the second egg breaks but the first egg didn't, we know that f = 1.
Otherwise, if both eggs survive, we know that f = 2.
Example 2:

Input: n = 100
Output: 14
Explanation: One optimal strategy is:

- Drop the 1st egg at floor 9. If it breaks, we know f is between 0 and 8. Drop the 2nd egg starting from floor 1 and going up one at a time to find f within 8 more drops. Total drops is 1 + 8 = 9.
- If the 1st egg does not break, drop the 1st egg again at floor 22. If it breaks, we know f is between 9 and 21. Drop the 2nd egg starting from floor 10 and going up one at a time to find f within 12 more drops. Total drops is 2 + 12 = 14.
- If the 1st egg does not break again, follow a similar process dropping the 1st egg from floors 34, 45, 55, 64, 72, 79, 85, 90, 94, 97, 99, and 100.
  Regardless of the outcome, it takes at most 14 drops to determine f.

---

Вам даны два одинаковых яйца, и вы имеете доступ к зданию с n этажами, обозначенными от 1 до n.

Вы знаете, что существует этаж f, где 0 <= f <= n, такой, что любое яйцо, брошенное на этаж выше f, разобьется, а яйцо, брошенное на этаж f или ниже, не разобьется.

В каждый ход Вы можете взять не разбитое яйцо и бросить его с любого этажа x (где 1 <= x <= n). Если яйцо разобьется, Вы больше не сможете его использовать. Однако если яйцо не разбилось, его можно использовать в последующих ходах.

Верните минимальное количество ходов, необходимое для того, чтобы с уверенностью определить значение f.

Пример 1:

Вход: n = 2
Выход: 2
Пояснение: Мы можем бросить первое яйцо с этажа 1, а второе - с этажа 2.
Если первое яйцо разобьется, то мы знаем, что f = 0.
Если второе яйцо разбилось, а первое нет, то мы знаем, что f = 1.
В противном случае, если оба яйца выжили, мы знаем, что f = 2.
Пример 2:

Вход: n = 100
Выходные данные: 14
Пояснения: Одной из оптимальных стратегий является следующая:

- Бросить 1-е яйцо на 9-й этаж. Если оно разобьется, то мы узнаем, что f находится в пределах от 0 до 8. Бросаем 2-е яйцо, начиная с 1-го этажа и поднимаясь по одному, чтобы найти f в течение еще 8 падений. Общее число падений равно 1 + 8 = 9.
- Если 1-е яйцо не разбилось, снова бросьте 1-е яйцо на пол 22. Если оно разбилось, то мы знаем, что f находится в пределах от 9 до 21. Бросьте 2-е яйцо, начиная с этажа 10 и поднимаясь по одному, чтобы найти f в пределах еще 12 капель. Общее количество падений равно 2 + 12 = 14.
- Если 1-е яйцо снова не разбилось, проделайте аналогичный процесс, опуская 1-е яйцо с этажей 34, 45, 55, 64, 72, 79, 85, 90, 94, 97, 99 и 100.
  Независимо от результата, для определения f требуется не более 14 падений.

---
