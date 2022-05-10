import React from 'react'
import Post from "./Post"

const DUMMY_DATA = [
    {
        id: '123',
        username: "loganjones",
        userImage: 'https://links/papareact.com/3ke',
        img: 'https://links/papareact.com/3ke',
        caption: "I am so good a coding.",
    }
]

function Posts() {
  return (
    <div>
        {posts.map((post) => (
            <Post key={post.id} id={post.id}
            username={post.username}
            userImage={post.userImage}
            img={post.img}
            caption={post.caption}
            />
        ))}
        <Post />
        <Post />
        <Post />
    </div>
  )
}

export default Posts