pipeline {
  agent {
    docker {
      args '-p 3000:3000'
      image 'node:lts-alpine3.10'
    }

  }
  stages {
    stage('Build') {
      steps {
        sh 'npm install'
      }
    }

  }
}