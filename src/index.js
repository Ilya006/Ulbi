import './styles.css'
import pringMe from './print'

function component() {
  const element = document.createElement('div');
  element.innerText = 'Test text'
  element.classList.add('hello')
  element.onclick = pringMe


  return element;
}

document.body.appendChild(component());