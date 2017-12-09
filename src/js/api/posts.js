import axios from 'axios';
import auth from '../auth/auth';
import qs from 'qs';
import p from './params';

const GET_PUBLISHED_URL = p.apiUrl + '/api/posts/all';
const GET_BY_SLUG_URL = p.apiUrl + '/api/posts/single/';
const GET_MINE_URL = p.apiUrl + '/api/posts/my/all';
const POST_EDIT_URL = p.apiUrl + '/api/posts/edit/';
const POST_NEW_URL = p.apiUrl + '/api/posts/create';
const DELETE_ID = p.apiUrl + '/api/posts/delete/';

export default {
  new(post) {
    return axios.post(POST_NEW_URL, qs.stringify(post), {
      headers: {
        'Authorization': auth.token,
      },
    });
  },

  update(post) {
    return axios.post(POST_EDIT_URL + post.id, qs.stringify(post), {
      headers: {
        'Authorization': auth.token,
      },
    });
  },

  delete(id) {
    return axios.post(DELETE_ID + id, {}, {
      headers: {
        Authorization: auth.token,
      },
    });
  },

  getPublished() {
    return axios.get(GET_PUBLISHED_URL);
  },

  findBySlug(slug) {
    let headers = {};
    if (auth.loggedIn()) {
      headers.Authorization = auth.token;
    }
    return axios.get(GET_BY_SLUG_URL + slug, {headers});
  },

  getMine() {
    return axios.get(GET_MINE_URL, {
      headers: {
        'Authorization': auth.token,
      },
    });
  },
};
