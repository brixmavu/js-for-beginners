const app = {
  routes: {
    '/': 'home.html',
    '/post/1': 'posts/environment.html',
    '/post/2': 'posts/variables.html',
    '/post/3': 'posts/functions.html',
    '/post/4' : 'posts/conditional.html',
    '/post/5' : 'posts/loops.html',
    '/post/6' : 'posts/objects.html',
  },
  init: function() {
    this.renderPost();
    window.addEventListener('hashchange', this.renderPost.bind(this));
  },
  renderPost: function() {
    const url = window.location.hash.slice(1) || '/';
    const filePath = this.routes[url] || '404.html';
    fetch(filePath)
      .then(response => response.text())
      .then(html => {
        document.querySelector('#post-container').innerHTML = html;
      })
      .catch(error => console.error(error));
  }
};

window.addEventListener('load', function() {
  app.init();
});
