pipeline {
  agent any
  stages {
    stage('Build') {
      agent any
      steps {
        dir(path: './front-end') {
          bat 'yarn install'
          bat 'yarn build'
        }

      }
    }

    stage('Firebase Deploy') {
      steps {
        dir(path: './front-end') {
          bat 'C:\\Users\\daanr\\AppData\\Roaming\\npm\\firebase login'
          input 'Logue no firebase para continuar'
          bat 'C:\\Users\\daanr\\AppData\\Roaming\\npm\\firebase deploy'
        }

      }
    }

    stage('Delete Workspace') {
      steps {
        cleanWs(cleanWhenSuccess: true, cleanWhenNotBuilt: true, cleanWhenFailure: true, cleanWhenAborted: true, cleanWhenUnstable: true)
      }
    }

  }
}