CREATE DATABASE Testing;
CREATE TABLE Employee(
ID INT, EmployeeName varchar(50), EmployeeScore INT);
INSERT INTO Employee (ID, EmployeeName, EmployeeScore) VALUES (1, 'M', 100);
INSERT INTO Employee (ID, EmployeeName, EmployeeScore) VALUES (2, 'J', 59);
INSERT INTO Employee (ID, EmployeeName, EmployeeScore) VALUES (3, 'P', 34);
INSERT INTO Employee (ID, EmployeeName, EmployeeScore) VALUES (4, 'S', 64);
INSERT INTO Employee (ID, EmployeeName, EmployeeScore) VALUES (5, 'I', 55);
INSERT INTO Employee (ID, EmployeeName, EmployeeScore) VALUES (6, 'K', 74);
INSERT INTO Employee (ID, EmployeeName, EmployeeScore) VALUES (7, 'J', 19);
INSERT INTO Employee (ID, EmployeeName, EmployeeScore) VALUES (8, 'S', 74);
INSERT INTO Employee (ID, EmployeeName, EmployeeScore) VALUES (9, 'M', 20);
INSERT INTO Employee (ID, EmployeeName, EmployeeScore) VALUES (10, 'Y', 84);
INSERT INTO Employee (ID, EmployeeName, EmployeeScore) VALUES (11, 'W', 31);
INSERT INTO Employee (ID, EmployeeName, EmployeeScore) VALUES (12, 'N', 43);
INSERT INTO Employee (ID, EmployeeName, EmployeeScore) VALUES (13, 'T', 100);
INSERT INTO Employee (ID, EmployeeName, EmployeeScore) VALUES (14, 'R', 93);
INSERT INTO Employee (ID, EmployeeName, EmployeeScore) VALUES (15, 'N', 90);
Select EmployeeName, EmployeeScore FROM Employee;