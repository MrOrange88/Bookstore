function getBookTemplate(index) {
  const book = books[index];

  const commentsHTML = book.comments
    .map((c) => {
      return `
        <p class="comment">
          <strong>${c.name}:</strong> ${c.comment}
        </p>
      `;
    })
    .join("");

  return `
    <article class="book-article">

      <header>
        <h2>${book.name}</h2>
      </header>

      <section>
        <img class="img-book" src="./img/book trans.png" alt="Bild von einem Buch">
      </section>

      <section>
        <p>${book.price} €</p>
        <p>${book.likes} likes</p>
      </section>

      <section>
        <p>Autor: <span>${book.author}</span></p> 
        <p>Erscheinung: <span>${book.publishedYear}</span></p> 
        <p>Genre: <span>${book.genre}</span></p> 
      </section>

      <section>
        <h2>Kommentare:</h2>
        ${commentsHTML}
      </section>

      <footer></footer>

    </article>
  `;
}
