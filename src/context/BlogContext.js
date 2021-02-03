import React from 'react';

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
  return <BlogContext.Provider>{children}</BlogContext.Provider>; //add value prop
};

export default BlogContext;
