pipeline {
  agent {
    docker {
      image 'node:lts-alpine3.10'
    }

  }
  stages {
    stage('Build') {
      when {
        expression { BRANCH_NAME ==~ /(master|main)/ }
      }
      steps {
        sh 'npm install'
      }
    }

    stage('Test') {
      when {
        expression { BRANCH_NAME ==~ /(master|main)/ }
      }
      steps {
        sh './jenkins/scripts/test.sh'
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