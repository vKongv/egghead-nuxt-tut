import axios from 'axios'

export const init = async ({store, error, isClient}) => {
  if (isClient) return
  try {
    const res = await axios.get('https://todos-syppxnrscv.now.sh/todos')
    store.commit('init', res.data)
  } catch (err) {
    error({statusCode: 500, message: 'Oops, try again'})
  }
}
