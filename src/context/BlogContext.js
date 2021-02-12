import createDataContext from './createDataContext';

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'edit_blog_post':
      return state.map((blogPost) => {
        return blogPost.id === action.payload.id ? action.payload : blogPost;
      });
    case 'delete_blog_post':
      return state.filter((blogPost) => blogPost.id !== action.payload);
    case 'add_blog_post':
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: action.payload.title,
          content: action.payload.content,
        },
      ]; //updates state with new post in array
    default:
      return state;
  }
};

const addBlogPost = (dispatch) => {
  return (title, content, callback) => {
    dispatch({ type: 'add_blog_post', payload: { title, content } }); // calls on the action from reducer
    callback();
  };
};

const editBlogPost = (dispatch) => {
  return (id, title, content) => {
    dispatch({ type: 'edit_blog_post', payload: { id, title, content } });
  };
};

const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({ type: 'delete_blog_post', payload: id });
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, editBlogPost, deleteBlogPost },
  [{ title: 'TEST POST', content: 'TEST CONTENT', id: 1 }]
);
