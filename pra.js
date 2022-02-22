// colorful
function posts() {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then(response => response.json())
        .then(data => displayPosts(data))


}
function displayPosts(posts) {
    console.log(posts);
    const newDiv = document.getElementById(`new-div`);
    for (const post of posts) {
        const div = document.createElement(`div`);
        div.classList.add(`post`)
        div.innerHTML = `<h3> ${post.title} </h3>
        <p> ${post.body} </p>`;
        newDiv.appendChild(div);

    }
}