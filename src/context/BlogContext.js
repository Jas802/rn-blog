import React from 'react';

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
  const blogPosts = [{ title: 'Blog POst #1' }, { title: 'Blog Post #2' }];

  return (
    <BlogContext.Provider value={blogPosts}>{children}</BlogContext.Provider>
  ); //add value prop
};

export default BlogContext;
