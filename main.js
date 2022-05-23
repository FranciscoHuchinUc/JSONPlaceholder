const dataContent = document.querySelector('#data'),
  back = document.getElementById('back'),
  next = document.getElementById('next')

function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 300) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

var start = 0
var end = 10

const data = fetch(`https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=${end}`)
  .then(response => response.json())
  .then(Post)


function Post (data) {
  data.map(({ title, body }) => {
    dataContent.innerHTML += `
      <div class="card" id="card">
        <h2 class="title" id="title">${title}</h2>
        <p class="body" id="body">${body}</p>
      </div>
    `
  })
}

function siguientePagina (event) {
  if (end < 100) {
    start = start + 10
    end += 10

    dataContent.innerHTML = ''

    const data = fetch(`https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=${end}`)
      .then(response => response.json())
      .then(Post)
  }
}

function paginaAnterior (event) {
  if (start > 9) {
    start = start - 10
    end -= 10

    dataContent.innerHTML = ''

    const data = fetch(`https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=${end}`)
      .then(response => response.json())
      .then(Post)
  }
}
