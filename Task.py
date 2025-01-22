import json

with open('employees.json' , 'r') as file:
    Task = file.read()

data = json.loads(Task)

##Task 1 : Print the name of the company.
print('Company Name:', data['company'])

#Task 2: Print the name of each employee along with the total number of hours they have spent across all projects.
for employee in data['employees']:
    total_hours = sum(project['hours_spent'] for project in employee['projects'])
    print(f"{employee['name']} - Total Hours: {total_hours}")

#Task 3: Print the department with the highest total project hours.

department_hours = {}
for employee in data['employees']:
    total_hours = sum(project['hours_spent'] for project in employee['projects'])
    department = employee['department']
    if department in department_hours:
        department_hours[department] += total_hours
    else:
        department_hours[department] = total_hours

# Find the department with the highest hours
highest_department = max(department_hours, key=department_hours.get)
print('\nTask 3: Department with Highest Total Project Hours:', highest_department)

# Task 4: Print the names of all employees who have "Python" as a skill
print('\nTask 4: Employees with Python Skill')
python_employees = [employee['name'] for employee in data['employees'] if 'Python' in employee['skills']]
print(', '.join(python_employees))

# Task 5: Print the names of employees who worked on projects with more than 100 hours spent
print('\nTask 5: Employees who Worked on Projects with More than 100 Hours Spent')
employees_more_than_100_hours = []
for employee in data['employees']:
    if any(project['hours_spent'] > 100 for project in employee['projects']):
        employees_more_than_100_hours.append(employee['name'])

print(', '.join(employees_more_than_100_hours))