SELECT Signups.user_id, IF(
  q.confirm IS NULL,
  0, 
  IF(
    w.timeou IS NULL,
    1,
    ROUND(q.confirm / (w.timeou + q.confirm), 2)
  )
  ) AS confirmation_rate
FROM Signups
  LEFT JOIN 
  (
    SELECT user_id, COUNT(action) AS confirm
    FROM Confirmations
    WHERE action = "confirmed"
    GROUP BY user_id
  ) AS q ON q.user_id = Signups.user_id
  LEFT JOIN 
  (
    SELECT user_id, COUNT(action) AS timeou
    FROM Confirmations
    WHERE action = "timeout"
    GROUP BY user_id
  ) AS w ON w.user_id = Signups.user_id