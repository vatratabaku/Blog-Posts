const title = document.getElementById("blog-title");
const content = document.getElementById("blog-content");
const category = document.getElementById("blog-category");
const author = document.getElementById("blog-author");
const date = document.getElementById("blog-date");
const img = document.getElementById("blog-image");
const addPostBtn = document.getElementById("btn-add");
const blogSection = document.querySelector(".show-blog")

const posts = [];

function createPost() {
    const post = {
        id:posts.length + 1,
        title: title.value,
        content: content.value,
        category: category.value,
        author: author.value,
        date:date.value,
        img:img.value,
        
    };

    posts.push(post);
    console.log(posts);
    renderPost(post);
}

function renderPost(post) {
    let html = `
      <div class="blog-item">
            <div class="blog-start">
              <img
                src="${post.img}"
                alt=""
                class="blog-img"
              />
  
              <div class="blog-info">
                <p class="blog-category">${post.category}</p>
                <h2 class="blog-title">${post.title}</h2>
                <p class="blog-author">${post.author}</p>
                <p class="blog-date">${post.date}</p>
              </div>
  
              <button type="button" class="btn-read" id="btn-read" data-id=${post.id}>
                Read More
              </button>
            </div>
  
            <p class="blog-content hidden">
              ${post.content}
            </p>
          </div>
    `;
  
    blogSection.insertAdjacentHTML("beforeend", html);
    
    addReadMore(post.id);
}
  
  function addReadMore(id) {
      const btn = document.querySelector(`[data-id="${id}"]`);

      btn.addEventListener("click", () => {
          const content = 
          btn.parentElement.parentElement.querySelector(".blog-content");
          content.classList.toggle("hidden");


      })
  }

addPostBtn.addEventListener("click", createPost);

