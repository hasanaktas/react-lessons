import { mainApi } from "../utils";

export const getAllPosts = () => mainApi.get("/posts");

export const getPost = (id) => mainApi.get(`/posts/${id}`);

export const deletePost = (id) => mainApi.delete(`/posts/${id}`);

export const createPost = (data) => mainApi.post(`/posts`, data);

export const updatePost = (id, data) => mainApi.put(`/posts/${id}`, data);

// class Services {

//     updatePost(id, data){
//         return mainApi.put(`/posts/${id}`, data)
//     }
//     getPost(id, data){
//         return mainApi.put(`/posts/${id}`, data)
//     }
//     createPost(id, data){
//         return mainApi.put(`/posts/${id}`, data)
//     }
// }

// export default new Services()
