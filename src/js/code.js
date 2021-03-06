import Image from './image';

export default class Code {
  constructor(html, data) {
    this.html = html;
    this.images = data;
    this.lastID = this.images.length;
  }

  init() {
    this.html.addSubmitListener(this.submitListener.bind(this));
    this.redrawDOM(this.images);
  }

  redrawDOM(images) {
    this.html.buildImageList(images);
    this.html.addDeleteListener(this.deleteListener.bind(this));
  }

  submitListener(event) {
    event.preventDefault();
    const name = this.html.submit.parentElement.name.value;
    const url = this.html.submit.parentElement.url.value;
    const validator = document.createElement('img');
    validator.onload = () => {
      this.lastID += 1;
      this.images.push(new Image(this.lastID, name, url));
      this.html.submit.parentElement.name.value = '';
      this.html.submit.parentElement.url.value = '';
      this.html.alertError.classList.add('hidden');
      this.redrawDOM(this.images);
    };
    validator.onerror = () => {
      this.html.alertError.classList.remove('hidden');
    };
    validator.src = url;
  }

  deleteListener(id) {
    this.images = this.images.filter(o => o.id !== +id);
    this.redrawDOM(this.images);
  }
}
