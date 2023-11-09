SELECT student_id, student_name, subject_name, 
IF (
  (
    SELECT COUNT(*)
    FROM Examinations
    GROUP BY student_id, subject_name
    HAVING Students.student_id = Examinations.student_id AND Subjects.subject_name = Examinations.subject_name
  ) IS NULL, 0, (
    SELECT COUNT(*)
    FROM Examinations
    GROUP BY student_id, subject_name
    HAVING Students.student_id = Examinations.student_id AND Subjects.subject_name = Examinations.subject_name
  )
) AS attended_exams
FROM Students, Subjects
ORDER BY student_id ASC, subject_name ASC

