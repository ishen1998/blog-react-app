import axios from 'axios'
const api = '/api'

export function getWallpaper() {
  return axios({
    url: `${api}/web/wallpaper`,
    method: 'get'
  })
}

export function getArticles(params) {
  return axios({
    url: `${api}/web/article/list`,
    params,
    method: 'get'
  })
}

export function getArticleDetail(id) {
  return axios({
    url: `${api}/web/article/detail/${id}`,
    method: "get",
  });
}

export function getCategoryList(params = {}) {
  return axios({
    url: `${api}/web/category/list`,
    method: "get",
    params,
  });
}