SELECT e.event_id, e.title
FROM Events e
JOIN Sessions s ON e.event_id = s.event_id
GROUP BY e.event_id, e.title
HAVING COUNT(*) = (
    SELECT MAX(cnt)
    FROM (
        SELECT COUNT(*) cnt
        FROM Sessions
        GROUP BY event_id
    ) x
);
