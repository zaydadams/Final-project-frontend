//fetch user blogs from datatbase to display on website

function getCars(){
    fetch('https://enigmatic-sea-74675.herokuapp.com/show-posts/')
    .then(res => res.json())
    .then(data => {
        console.table(data);
        let list = document.getElementById('content');
      data.forEach((post) => {
          let item = `
          <div class="car">
              <div class="title">
                  <h2>${post.title}</h2>
              </div>
              <div class="image">
                  <img src=${post.image} alt=${post.image} />
              </div>
              <div class="year">
                  <p>Year:${post.year}</p>
              <div class="message">
                  <p>${post.description}</p>
              </div>
          </div>
          `;
          list.innerHTML += item;
      });
    })
}
getCars()
