export const state = {
  todos: [
    {task: 'eat'},
    {task: 'sleep'},
    {task: 'code'}
  ]
}

export const mutations = {
  init (state, todos) {
    state.todos = todos
  }
}
