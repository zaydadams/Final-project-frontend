function getPost(){
    .fetch("https://enigmatic-sea-74675.herokuapp.com/addP/")
    .then((response) => response.json())
    .then((data) => {
        console.table(table);
        let list = document.getElementById('products');
        data.forEach((post) => {
            let item = `
            <div class="post-container">
                <div class="title">
                    <h2>${post.title}</h2>
                </div>
                <div class="message">
                    <p>${post.message}</p>
                </div>
                <div class="image">
                    <p>${post.image}</p>
                </div>
            </div>
            `;
            list.innerHTML += item;
        });
    });
}
displayPosts();