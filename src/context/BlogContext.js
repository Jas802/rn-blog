import createDataContext from './createDataContext';

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'add_blog_post':
      return [...state, { title: `Blog Post #${state.length + 1}` }]; //updates state with new post in array
    default:
      return state;
  }
};

const addBlogPost = () => {
  dispatch({ type: 'add_blog_post' }); // calls on the action from reducer
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost },
  []
);
