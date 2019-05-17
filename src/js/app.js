import Html from './html';
import Code from './code';
import Image from './image';

const data = [
  new Image(1, 'Image 1', 'http://s1.1zoom.me/b5050/697/407086-svetik_800x600.jpg'),
  new Image(2, 'Image 2', 'http://s1.1zoom.me/b5050/170/259443-frederika_800x600.jpg'),
];

const html = new Html();
const code = new Code(html, data);

code.init();
