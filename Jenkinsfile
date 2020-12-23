pipeline {
  agent {
    node {
      label 'node'
    }

  }
  stages {
    stage('Test') {
      steps {
        sh 'npm install'
        sh 'npm run test'
      }
    }

  }
}