import React from 'react';
import radium from 'radium';
import {connect} from 'react-redux';

import H1 from 'components/Simple/H1';
import PostForm from '../../Forms/PostForm';
import Post from 'components/Containers/Post/Full';

import {fetchPostBySlug, updatePost} from '../../../store/actions/postsActions';
import {
  left as leftStyle,
  right as rightStyle,
} from '../../../styles/show/show';

class Edit extends React.Component {
  constructor() {
    super();
    this.state = {
      post: {
        published_at: {},
      },
    };
  }

  componentDidMount() {
    this
      .props
      .dispatch(fetchPostBySlug(this.props.match.params.slug))
      .then(res => {
        this.setState({
          post: res,
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  postChanged(post) {
    console.log(post);
    this.setState({
      post: post,
    });
  }

  handleSubmit(e, post) {
    e.preventDefault();
    this.props.dispatch(updatePost(post));
  }

  renderForm() {
    if (typeof this.state.post.id !== 'undefined') {
      return (
        <PostForm
          postChanged={post => this.postChanged(post)}
          handleSubmit={(e, post) => this.handleSubmit(e, post)}
          post={this.props.post}/>
      );
    }
    return '';
  }

  render() {
    return (
      <div>
        <H1>{this.props.post.title}</H1>
        <div style={leftStyle()}>
          {this.renderForm()}
        </div>
        <div style={rightStyle()}>
          <Post post={this.state.post}/>
        </div>
        <div style={{'clear': 'both'}}></div>
      </div>
    );
  }
}

export default connect(store => {
  return {
    post: store.posts.post,
  };
})(radium(Edit));
