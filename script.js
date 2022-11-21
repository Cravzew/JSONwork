let demo = document.getElementById('demo')
let userId = document.getElementById('user-id')
let id = document.getElementById('id')
let title = document.getElementById('title')
let body = document.getElementById('body')

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then((json) => {
        for (let i = 0; i < json.length; i++) {
            // userId.textContent = i.userId
            // id.textContent = i.id
            // title.textContent = i.title
            // body.textContent = i.body
            // demo.append(userId, id, title, title, body)
            demo.innerHTML += `
            <div class="card mb-3">
                <h4>userId: ${json[i].userId}</h4>
                <h3>id: ${json[i].id}</h3>
                <h1>title: ${json[i].title}</h1>
                <h2>body: ${json[i].body}</h2>
            <div>
            `
        }
    })


