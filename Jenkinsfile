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
          bat 'C:\\Users\\daanr\\AppData\\Roaming\\npm\\firebase deploy --token 1//0hxU29odYUeiPCgYIARAAGBESNwF-L9IrpCTiM7n8YRtQ1ibI-9R_JGiECWYIAlJ3acacVmV8KrNGfAdRSm5AeVF6OKFAlZxj5oU'
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