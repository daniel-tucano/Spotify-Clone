import Axios from 'axios'

const api = Axios.create({ baseURL: 'https://firestore.googleapis.com/v1beta1/projects/spotify-clone-96417/databases/(default)/documents/' })

export default api