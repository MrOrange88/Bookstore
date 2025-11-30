function getBookTemplate(index) {
  return `
  <article class="book-article">
        <header>
        <h2>${books[index].name}</h2>
        </header>
        <section>
        <img class = "img-book" src="./img/book trans.png" alt="Bild von einem Buch">
        </section>
        <section>
        <p>${books[index].price} €</p>
        <p>${books[index].likes} likes</p>
        </section>
        <section>
        <p>Author: <span>${books[index].author}</span></p> 
        <p>Erscheinung: <span>${books[index].publishedYear}</span></p> 
        <p>Genre: <span>${books[index].genre}</span></p> 
        </section>
        <section>
        <h2>Kommentare:</h2>
        
        <footer></footer>
      </article>
  `;
}
