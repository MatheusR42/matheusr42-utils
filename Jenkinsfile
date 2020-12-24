pipeline {
  agent {
    docker {
      image 'node:lts-alpine3.10'
    }

  }
  stages {
    stage('PR') {
      when {
        allOf {
          expression { env.CHANGE_ID != null }
          expression { env.CHANGE_TARGET != null }
        }
      }
      steps {
        echo "Building PR ${CHANGE_ID} - Target ${CHANGE_TARGET}"
      }
    }

    stage('Echo') {
      when {
        expression { env.CHANGE_ID != null }
      }
      steps {
        sh "echo 'Deploying: ${CHANGE_ID}'"
      }
    }

    stage('Build') {
      steps {
        sh 'npm install'
      }
    }

    stage('Test') {
      steps {
        sh './jenkins/scripts/test.sh'
      }
    }

    stage('Deploy') {
      when {
        expression { BRANCH_NAME ==~ /(master|main)/ }
      }
      steps {
        sh './jenkins/scripts/deploy.sh'
      }
    }

  }
  environment {
    CI = 'true'
    COVERALLS_GIT_BRANCH = "${BRANCH_NAME}"
    COVERALLS_SERVICE_NAME = 'jenkins'
    COVERALLS_REPO_TOKEN = credentials('jenkins-coveralls-repo-token')
  }
}