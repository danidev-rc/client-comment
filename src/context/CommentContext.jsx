import { createContext, useContext, useState } from 'react'
import {
  createCommentRequest,
  getCommentRequest,
  getCommentsRequest,
  updateCommentRequest,
  deleteCommentRequest,
} from '../api/comment'

const CommentContext = createContext()

export const useComments = () => {
  const context = useContext(CommentContext)
  if (!context) {
    throw new Error('useComments must be used within a CommentProvider')
  }
  return context
}

export function CommentProvider({ children }) {
  const [comments, setComments] = useState([])

  const getComments = async () => {
    const res = await getCommentsRequest()
    setComments(res.data)
  }

  const createComment = async (comment) => {
    try {
      const res = await createCommentRequest(comment)
      console.log(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  const deleteComment = async (id) => {
    try {
      const res = await deleteCommentRequest(id)
      if (res.status === 204)
        setComments(comments.filter((comment) => comment.id !== id))
    } catch (error) {
      console.log(error)
    }
  }

  const getComment = async (id) => {
    try {
      const res = await getCommentRequest(id)
      return res.data
    } catch (error) {
      console.log(error)
    }
  }

  const updateComment = async (id, comment) => {
    try {
      await updateCommentRequest(id, comment)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <CommentContext.Provider
      value={{
        comments,
        getComments,
        createComment,
        deleteComment,
        getComment,
        updateComment,
      }}
    >
      {children}
    </CommentContext.Provider>
  )
}
