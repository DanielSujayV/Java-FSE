SELECT YEAR(registration_date) AS yr,
       MONTH(registration_date) AS mn,
       COUNT(*) AS total_registrations
FROM Registrations
WHERE registration_date >= CURDATE() - INTERVAL 12 MONTH
GROUP BY YEAR(registration_date),
         MONTH(registration_date)
ORDER BY yr, mn;
