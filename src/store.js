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
    locations: [],
    likes: [],
    likes_locations: []
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
    case 'get_characters':
      return {
        ...store,
        characters: action.payload
      }
    case 'get_locations':
      return {
        ...store,
        locations: action.payload
      };
    case 'set_likes':
      const isLike = store.likes.some(item => item.id === action.payload.id);
      return {
        ...store,
        likes: !isLike ? [...store.likes, action.payload] : store.likes
      }
    case 'set_delete':

      return {
        ...store,
        likes: store.likes.filter(like => like.id !== action.payload)
      }
        case 'set_likes_locations':
      const isLikeLocation = store.likes_locations.some(item => item.id === action.payload.id);
      return {
        ...store,
        likes_locations: !isLikeLocation ? [...store.likes_locations, action.payload] : store.likes_locations
      }
    case 'set_delete_locations':

      return {
        ...store,
        likes_locations: store.likes_locations.filter(like => like.id !== action.payload)
      }
    default:
      throw Error('Unknown action.');
  }
}
