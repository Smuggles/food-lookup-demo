import React, { Component } from 'react';
import Blog from '../components/Blog.js'
import BlogComments from '../components/Blogcomments.js'

const blogContainer = () => (
  <div>
    <Blog />
    <BlogComments />
  </div>
)

export default blogContainer;
