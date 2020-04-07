import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:3001/'
})
const baseRecipes = '/recipes'
const baseSpecials = '/specials'
const service = {
  async fetchPosts () {
    const recipes = await instance.get(baseRecipes).then((x) => x.data)
    const specials = await instance.get(baseSpecials).then((x) => x.data)
    return [recipes, specials]
  }
}
export default service
