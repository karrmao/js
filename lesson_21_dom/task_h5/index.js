export function setButton(buttonText) {
  document.querySelector('body').innerHTML = `<button>${buttonText}</button>`;
}

setButton('Pimpa');
//=> <button>Pimpa</button>
