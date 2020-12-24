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
          expression { env.CHANGE_BRANCH != null }
          // CHANGE_AUTHOR
          // CHANGE_AUTHOR_DISPLAY_NAME
          // CHANGE_BRANCH
          // CHANGE_ID
          // CHANGE_TARGET
          // CHANGE_TITLE
          // CHANGE_URL
        }
      }
      steps {
        echo "Building PR ${CHANGE_ID} - Branch ${CHANGE_BRANCH} - Target ${CHANGE_TARGET}"
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