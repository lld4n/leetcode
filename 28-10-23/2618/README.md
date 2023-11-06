---
title: 2618
url: https://leetcode.com/problems/check-if-object-instance-of-class/description/
created: 28-10-23
time: 1m
source: leetcode
tags:
  - musthave
---

Write a function that checks if a given value is an instance of a given class or superclass. For this problem, an object is considered an instance of a given class if that object has access to that class's methods.

There are no constraints on the data types that can be passed to the function. For example, the value or the class could be undefined.

---

`typeof classFunction === "function"` - нужен для того, чтобы подтвердить, что `classFunction` является функцией (классы в js это функции с конструктором)

`Object(obj)` - нужен для того, чтобы привести и строку и число к объекту-обертке

`instanceof` - оператор instanceof возвращает true, если объект является экземпляром класса или его потомком