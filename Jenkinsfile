pipeline {
  agent any
  stages {
    stage('Build') {
      agent any
      steps {
        dir(path: './front-end')
        bat 'yarn install'
        bat 'yarn build'
      }
    }

    stage('Firebase Deploy') {
      steps {
        bat 'firebase deploy'
      }
    }

    stage('Delete Workspace') {
      steps {
        cleanWs(cleanWhenSuccess: true, cleanWhenNotBuilt: true, cleanWhenFailure: true, cleanWhenAborted: true, cleanWhenUnstable: true)
      }
    }

  }
}