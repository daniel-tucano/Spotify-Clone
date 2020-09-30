pipeline {
  agent any
  stages {
    stage('Build') {
      agent {
        node {
          label 'master'
        }

      }
      steps {
        dir(path: './front-end') {
          bat 'yarn install'
          bat 'yarn build'
        }

      }
    }

    stage('Firebase Deploy') {
      agent {
        node {
          label 'master'
        }

      }
      steps {
        dir(path: './front-end') {
          bat 'dir > dir_front_end.txt'
          bat 'C:\\Users\\daanr\\AppData\\Roaming\\npm\\firebase deploy --token "$FIREBASE_TOKEN"'
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