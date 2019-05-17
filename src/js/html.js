export default class Html {
  constructor() {
    this.submit = document.getElementById('submit');
    this.alertError = document.getElementById('alert');
    this.imgBox = document.getElementById('img-box');
    this.deletes = document.getElementsByClassName('delete');
    this.images = document.getElementsByClassName('image');
  }

  buildImageList(images) {
    // Отрисовка каринок
    this.imgBox.innerHTML = '';
    images.forEach((o) => {
      const el = document.createElement('div');
      el.dataset.id = o.id;
      el.classList.add('image');
      el.innerHTML = `
        <img src="${o.url}" alt="${o.name}">
        <button class="delete">X</button>
      `;
      this.imgBox.appendChild(el);
    });
  }

  addSubmitListener(callback) {
    this.submit.addEventListener('click', (event) => {
      callback.call(null, event);
    });
  }

  addDeleteListener(callback) {
    [...this.images].forEach((image) => {
      image.addEventListener('click', (event) => {
        callback.call(null, event.currentTarget.dataset.id);
      });
    });
  }
}
