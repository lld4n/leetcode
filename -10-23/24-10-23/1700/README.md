---
title: 1700
url: https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/description/
created: 24-10-23
time: 3m
source: leetcode
tags:
  - kaif
---

The school cafeteria offers circular and square sandwiches at lunch break, referred to by numbers 0 and 1 respectively. All students stand in a queue. Each student either prefers square or circular sandwiches.

The number of sandwiches in the cafeteria is equal to the number of students. The sandwiches are placed in a stack. At each step:

If the student at the front of the queue prefers the sandwich on the top of the stack, they will take it and leave the queue.
Otherwise, they will leave it and go to the queue's end.
This continues until none of the queue students want to take the top sandwich and are thus unable to eat.

You are given two integer arrays students and sandwiches where sandwiches[i] is the type of the i'th sandwich in the stack (i = 0 is the top of the stack) and students[j] is the preference of the j'th student in the initial queue (j = 0 is the front of the queue). Return the number of students that are unable to eat.

---

В школьной столовой на обеденном перерыве предлагаются круглые и квадратные бутерброды, обозначаемые соответственно цифрами 0 и 1. Все ученики стоят в очереди. Каждый ученик предпочитает либо квадратные, либо круглые бутерброды.

Количество бутербродов в кафетерии равно количеству студентов. Бутерброды укладываются в стопку. На каждом шаге:

Если студент, стоящий в начале очереди, предпочитает бутерброд, находящийся на вершине стопки, то он берет его и покидает очередь.
В противном случае он покинет ее и перейдет в конец очереди.
Так продолжается до тех пор, пока никто из очередников не захочет взять верхний бутерброд и не останется без еды.

Даны два целочисленных массива students и sandwiches, где sandwiches[i] - тип i-го бутерброда в стопке (i = 0 - верхняя часть стопки), а students[j] - предпочтение j-го студента в начальной очереди (j = 0 - первый в очереди). Возвращается число студентов, которые не смогли поесть.
