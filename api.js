function users() {
    fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(response => response.json())
        .then(data => displayUser(data))
}
function displayUser(data) {
    const ul = document.getElementById(`users`);
    for (const users of data) {
        const li = document.createElement(`li`);
        li.innerText = `name: ${users.name} 
        email: ${users.email}`;
        ul.appendChild(li);
    }




}