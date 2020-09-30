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
          input 'waiting for input'
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
          bat 'C:\\Users\\daanr\\AppData\\Roaming\\npm\\firebase deploy --token 1//0hxU29odYUeiPCgYIARAAGBESNwF-L9IrpCTiM7n8YRtQ1ibI-9R_JGiECWYIAlJ3acacVmV8KrNGfAdRSm5AeVF6OKFAlZxj5oU'
          input 'wait for input'
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