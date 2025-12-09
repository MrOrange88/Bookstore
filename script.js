function init() {
  render();
}

function render() {
  const container = document.getElementById("article_content");
  container.innerHTML = "";

  for (let i = 0; i < books.length; i++) {
    container.innerHTML += getBookTemplate(i);
  }
}

function addComment(index) {
  const nameInput = document.getElementById("nameInput" + index);
  const commentInput = document.getElementById("commentInput" + index);

  const name = nameInput.value.trim();
  const comment = commentInput.value.trim();

  if (name === "" || comment === "") {
    return;
  }

  const newComment = {
    name: name,
    comment: comment,
  };

  books[index].comments.push(newComment);

  nameInput.value = "";
  commentInput.value = "";

  render();
}
function toggleLike(index) {
  const book = books[index];
  book.liked = !book.liked;
  book.likes += book.liked ? 1 : -1;

  render();
}
