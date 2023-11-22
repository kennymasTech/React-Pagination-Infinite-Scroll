import React from 'react'

const Post = React.forwardRef(([post]) => {
    const postBody = (
        <>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <p>Post ID: {post.title}</p>
        </>
    )

    const content = ref ? (
        <article ref={ref}>{postBody}</article>
    ) : (
        <article>{postBody}</article>
    )

  return content
})

export default Post