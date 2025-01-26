pipeline {
    agent any
    parameters {
        string(name: 'CUSTOM_MESSAGE', defaultValue: 'Hello, Jenkins!', description: 'Enter a custom message to echo')
        string(name: 'GIT_REPO_URL', defaultValue: 'https://github.com/MRoth-79/maorDevOps.git', description: 'Enter the Git repository URL')
        choice(name: 'ENVIRONMENT', choices: ['dev', 'stage', 'production'], description: 'Select the environment where the pipeline will run')
        booleanParam(name: 'DEPLOY', defaultValue: true, description: 'This parameter decides whether the pipeline should proceed with deployment')
    }
    stages {
        stage('Echo Custom Message') {
            steps {
                script {
                    echo "User Message: ${params.CUSTOM_MESSAGE}"
                }
            }
        }
        stage('List Directory Contents') {
            steps {
                script {
                    sh 'ls'
                    sh '[ -d target_directory ] && ls target_directory || echo "target_directory does not exist."'
                }
            }
        }
        stage('Clone Repository') {
            steps {
                script {
                    echo "Cloning GitHub repository from: ${params.GIT_REPO_URL}"
                    git branch: 'main', url: "${params.GIT_REPO_URL}"
                }
            }
        }
        stage('Environment Selection') {
            steps {
                script {
                    echo "ENVIRONMENT parameter value: ${params.ENVIRONMENT}"
                    echo "You selected ${params.ENVIRONMENT}"
                }
            }
        }
        stage('Deployment Decision') {
            steps {
                script {
                    echo "DEPLOY parameter value: ${params.DEPLOY}"
                    if (params.DEPLOY) {
                        echo "Boolean flag is true, deployment will proceed."
                    } else {
                        echo "Boolean flag is false, skipping deployment."
                    }
                }
            }
        }
        stage('Run Python Script') {
            steps {
                script {
                    echo "Executing Python script..."
                    sh '[ -f Task.py ] && python3 Task.py || echo "Task.py not found."'
                }
            }
        }
        stage('Show Working Directory') {
            steps {
                script {
                    echo "Displaying the current working directory..."
                    sh 'pwd'
                }
            }
        }
        stage('Cleanup') {
            steps {
                script {
                    echo "Performing cleanup..."
                    sh '[ -d target_directory ] && rm -rf target_directory || echo "target_directory does not exist, skipping cleanup."'
                }
            }
        }
    }
}
