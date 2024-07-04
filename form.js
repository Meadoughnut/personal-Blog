const usernameEl = document.querySelector("#usernameInput");
const titleEl = document.querySelector("#titleInput");
const contentEl = document.querySelector("#contentInput");
const submitBtn = document.querySelector("#submitButton");
const blogForm = document.querySelector("#blogform");

blogForm.addEventListener('submit', function(event){
    event.preventDefault();
    const username = usernameEl.value;
    const title = titleEl.value;
    const content = contentEl.value;

    if(!username || !title || !content ) {
        alert ("please complete all the forms.")
        return;
    }

    const blog = {
        username: username,
        title: title,
        content: content,
    };

    let posts = JSON.parse(localStorage.getItem("blogs")) || [];
    posts.push(blog);
    localStorage.setItem("blogs", JSON.stringify(posts));
})

    



