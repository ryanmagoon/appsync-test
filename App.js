import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import AllPosts from "./Components/AllPosts";
import AddPost from "./Components/AddPost";

const posts = [
  { "id": "1", "title": "My first post", "author": "Someone" },
  { "id": "2", "title": "Another post", "author": "Someone else" },
  { "id": "3", "title": "A better one", "author": "Stranger" }
];

class App extends Component {
  state = { posts };

  handleOnAdd = (post) => {
    const { posts } = this.state;

    this.setState({
      posts: [...posts, post]
    });
  };

  handleOnDelete = ({ id }) => {
    const { posts } = this.state;

    this.setState({
      posts: [...posts.filter(post => post.id !== id)]
    });
  }

  handleOnEdit = (editedPost) => {
    const { posts } = this.state;

    this.setState({
      posts: [...posts.map(post => post.id === editedPost.id ? editedPost : post)]
    });
  }

  render() {
    const { posts } = this.state;

    return (
      <View style={styles.container}>
        <AddPost onAdd={this.handleOnAdd} />
        <AllPosts posts={posts} onDelete={this.handleOnDelete} onEdit={this.handleOnEdit} />
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});