import React from 'react'
import Post from "./Post"

const posts = [
    {
        id: '123',
        username: "loganjones",
        userImg: 'https://media-exp1.licdn.com/dms/image/C5603AQF8Mpqhc9Mslw/profile-displayphoto-shrink_200_200/0/1629605959782?e=1657756800&v=beta&t=BbSBl8SGcBk6HeK04T_ALyaTYVLjK02BTB7FEfTPvuE',
        img: 'https://media-exp1.licdn.com/dms/image/C5603AQF8Mpqhc9Mslw/profile-displayphoto-shrink_200_200/0/1629605959782?e=1657756800&v=beta&t=BbSBl8SGcBk6HeK04T_ALyaTYVLjK02BTB7FEfTPvuE',
        caption: "I am so good a coding.",
    },
       { id: '124',
        username: "loganjones",
        userImg: 'https://media-exp1.licdn.com/dms/image/C5603AQF8Mpqhc9Mslw/profile-displayphoto-shrink_200_200/0/1629605959782?e=1657756800&v=beta&t=BbSBl8SGcBk6HeK04T_ALyaTYVLjK02BTB7FEfTPvuE',
        img: 'https://media-exp1.licdn.com/dms/image/C5603AQF8Mpqhc9Mslw/profile-displayphoto-shrink_200_200/0/1629605959782?e=1657756800&v=beta&t=BbSBl8SGcBk6HeK04T_ALyaTYVLjK02BTB7FEfTPvuE',
        caption: "I am so good a coding.",
    },
       { id: '125',
        username: "loganjones",
        userImg: 'https://media-exp1.licdn.com/dms/image/C5603AQF8Mpqhc9Mslw/profile-displayphoto-shrink_200_200/0/1629605959782?e=1657756800&v=beta&t=BbSBl8SGcBk6HeK04T_ALyaTYVLjK02BTB7FEfTPvuE',
        img: 'https://media-exp1.licdn.com/dms/image/C5603AQF8Mpqhc9Mslw/profile-displayphoto-shrink_200_200/0/1629605959782?e=1657756800&v=beta&t=BbSBl8SGcBk6HeK04T_ALyaTYVLjK02BTB7FEfTPvuE',
        caption: "I am so good a coding.",
    }
]

function Posts() {
  return (
    <div>
        {posts.map((post) => (
            <Post key={post.id} id={post.id}
            username={post.username}
            userImg={post.userImg}
            img={post.img}
            caption={post.caption}
            />
        ))}
    </div>
  )
}

export default Posts