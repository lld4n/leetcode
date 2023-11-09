SELECT q.m_id AS machine_id, ROUND(AVG(end - start),3) AS processing_time
FROM 
(
  SELECT machine_id, machine_id AS m_id,  process_id, timestamp AS start
  FROM Activity
  WHERE activity_type = "start"
) AS q 
  INNER JOIN 
(
  SELECT machine_id, process_id, timestamp AS end
  FROM Activity
  WHERE activity_type = "end"
) AS w 
  ON q.machine_id = w.machine_id AND q.process_id = w.process_id
GROUP BY q.m_id


