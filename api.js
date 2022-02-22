function users() {
    fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(response => response.json())
        .then(data => displayUser(data))
}
function displayUser(data) {
    const ul = document.getElementById(`users`);
    for (const users of data) {
        const li = document.createElement(`li`);
        li.innerText = users.name;
        ul.appendChild(li);
    }




}