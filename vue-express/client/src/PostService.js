import axios from 'axios'

const url = 'api/posts/'

class PostService {
    static getPost() {
        return new Promise(async (resolve, rej) => {
            try{
                const res = await axios.get(url)
                const data = res.data
                resolve(
                    data.map(post => ({
                        ...post,
                        createdAt: new Date(post.createdAt)
                    }))
                )
            } catch(err) {
                rej(err)
            }
        })
    }

    static insertPost(text) {
        return axios.post(url, {
            text
        })
    }

    static deletePost(id) {
        return axios.delete(`${url}${id}`)
    }
}

export default PostService