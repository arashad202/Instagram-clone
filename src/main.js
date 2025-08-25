const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "./public/avatar-vangogh.jpg",
        post: "./public/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "./public/avatar-courbet.jpg",
        post: "./public/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "./public/avatar-ducreux.jpg",
        post: "./public/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const container = document.getElementById("container")

function createPost({name, username, location, avatar,post,comment,likes}) {
    return `
    <section class="post">
        <div class="post-header">
          <img class="post-avatar" src="${avatar}">
          <div>
            <p class="bold">${name}</p>
            <p>${location}</p>
          </div>
        </div>
        <img class="post-img" src="${post}">
        <div class="icon-container">
          <img class="icon" src="public/icon-heart.png">
          <img class="icon" src="public/icon-comment.png">
          <img class="icon" src="public/icon-dm.png">
        </div>
        <p class="bold">${likes} likes</p>
        <p><span class="bold">${username}</span> ${comment}</p>
      </section>
    `
}

function renderPosts(posts) {
    for (let i = 0; i < posts.length; i++) {
        container.innerHTML += createPost(posts[i])
    }    
}

renderPosts(posts);






