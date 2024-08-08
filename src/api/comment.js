import axios from "./axios";

export const getCommentsRequest = async () => axios.get(`/comments`);

export const getCommentRequest = async (id) => axios.get(`/comments/${id}`);

export const createCommentRequest = async (comment) => axios.post(`/comments`, comment);

export const updateCommentRequest = async (id, comment) => axios.put(`/comments/${id}`, comment);

export const deleteCommentRequest = async (id) => axios.delete(`/comments/${id}`);