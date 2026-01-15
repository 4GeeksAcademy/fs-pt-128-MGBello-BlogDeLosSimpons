export const initialStore = () => {
  return {
    message: null,
    todos: [
      {
        id: 1,
        title: "Make the bed",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      }
    ],
    characters: [],
    locations:[],
    likes: []
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'add_task':

      const { id, color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };
    case 'get_personajes':
      return{
        ...store,
        characters:action.payload
      }
    case 'get_location':
      return {
        ...store,
        locations: action.payload
      };
    case 'set_likes': 
      const isLike = store.likes.includes(action.payload);
      const likesList = isLike ? 
      store.likes.filter(like => like.id !== action.payload.id) : 
      [...store.likes, action.payload]
      return {
        ...store,
        likes: likesList
      }
    default:
      throw Error('Unknown action.');
  }
}
