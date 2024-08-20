document.addEventListener('DOMContentLoaded', function() {
    const postsContainer = document.querySelector('main');
    const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];

    // Clear existing content
    postsContainer.innerHTML = '';

    // Create and display each blog post
    blogPosts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('formdata');

        postElement.innerHTML = `
            <input type="text" class="form-control" value="${post.title}" readonly>
            <textarea class="FormControlTextarea" readonly>${post.content}</textarea>
            <input type="text" class="form-control" value="Posted by: ${post.username}" readonly>
        `;

        postsContainer.appendChild(postElement);
    });
});
