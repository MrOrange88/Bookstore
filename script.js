function init(index) {
  render(index);
}

function render() {
  const container = document.getElementById("article_content");
  container.innerHTML += "";

  for (let index = 0; index < books.length; index++) {
    container.innerHTML += getBookTemplate(index);
  }
}
