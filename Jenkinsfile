pipeline {
  agent {
    docker {
      args '-p 3000:3000'
      image 'node:lts-alpine3.10'
    }
    environment {
      CI = 'true'
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
}