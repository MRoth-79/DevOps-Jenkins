# maorDevOps
Jenkins Tasks Part 1 

##Task 1:##
Create a Freestyle Project to Print "Hello World"
Open Jenkins and create a new Freestyle project.
In the "Build Steps" section:
●	Add an "Execute Shell" step (or "Execute Windows Batch Command" on Windows).
●	Write a script that prints "Hello World".
Run the project and confirm the output in the build logs.



Task 2: Create a Freestyle Project to Clone a Git Repository

Create another Freestyle project.
In the "Source Code Management" section:
●	Choose Git.
●	Enter the URL of a public GitHub repository (or a private one with credentials).
In the "Build Steps" section:
●	Add an "Execute Shell" step to verify the repository contents with ls (Linux) or dir (Windows).
Run the project and check the logs to ensure the repository is successfully cloned.


Task 3: Create a Simple Jenkins Pipeline (DSL) to Print "Hello World"
●	Create a Pipeline project.
●	In the "Pipeline Script" section, write a simple Groovy script that prints 'Hello World'.
●	Save the project and run it to ensure "Hello World" is printed in the build logs.

Task 4: Add a Git Clone Step to the Pipeline
●	Extend the pipeline created in Task 3 to include a Git clone step
●	Run the pipeline and verify that the repository is cloned successfully


Task 5: Add a Step to Execute Python Code
Extend the pipeline further to execute a Python script:
●	If you completed your Python exercise earlier(with the employees.json), use that script.
●	If not, have them create a simple Python script that prints "Hello World"
●	Add a step to the pipeline to run the Python script

Task 6: Create a Jenkins Pipeline with user parameters (Bonus !!!)
Create a Jenkins pipeline that includes the following:
●	Stage 1: Echo a custom message provided by the user.
●	Stage 2: Clone a Git repository from a URL provided by the user.
Use pipeline parameters to capture user inputs for the message and the Git repository URL.
Ensure that the pipeline is functional and outputs the expected results.

Task 7: User Choice Parameter
Add a new Stage,
In the new stage add choice parameter to your pipeline with the name ENVIRONMENT:
The choices should be: dev, stage, production.
Give a short description to explain that this parameter allows the user to select the environment where the pipeline will run(not more than one sentence).
Inside this stage, print the selected environment using the value of the ENVIRONMENT parameter
Example: If the user selects stage, the output should say: “You selected stage”

Task 8: Boolean Parameter for Deployment
Add a new Stage,
In the new stage, add boolean parameter to your pipeline with the name DEPLOY:
Set its default value to true.
Add a description explaining that this parameter decides whether the pipeline should proceed with deployment.
If DEPLOY is true, print - “Boolean flag is true, deployment will proceed."
If DEPLOY is false, print - "Boolean flag is false, skipping deployment."
 
