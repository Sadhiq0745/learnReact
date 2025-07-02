import React from 'react'
import PostForm from '../post-form/PostForm'
import Container from '../container/Container'
function AddPost() {
  return (
    <div className='p-8'>
        <Container>
            <PostForm/>
        </Container>
    </div>
  )
}

export default AddPost