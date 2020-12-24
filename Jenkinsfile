pipeline {
  agent {
    docker {
      image 'node:lts-alpine3.10'
    }

  }
  stages {
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

  }
  environment {
    CI = 'true'
    COVERALLS_GIT_BRANCH = 'master'
    COVERALLS_SERVICE_NAME = 'jenkins'
    COVERALLS_REPO_TOKEN = credentials('jenkins-coveralls-repo-token')
  }
}