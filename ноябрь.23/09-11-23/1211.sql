SELECT query_name, 
ROUND(AVG(rating / position), 2) AS quality,
ROUND( (
  SELECT COUNT(*)
  FROM Queries AS q
  WHERE rating < 3 AND q.query_name = qq.query_name
) / COUNT(*) * 100 ,2) AS poor_query_percentage
FROM Queries AS qq
GROUP BY query_name