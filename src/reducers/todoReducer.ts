function todoReducer(state, action) {
  switch (action.type) {
    case 'CREATE_TODO':
      return [
        ...state,
        {
          id: action.payload.id,
          title: action.payload.title,
          isDone: action.payload.isDone
        }
      ];
    case 'DELETE_TODO':
      return [...state.filter(todo => todo.id !== action.payload.id)];
    default:
      return state;
  }
}

export default todoReducer;
