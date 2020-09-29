pipeline {
  agent any
  stages {
    stage('Dir') {
      agent any
      steps {
        bat(script: 'dir', returnStdout: true, returnStatus: true)
      }
    }

  }
}