class PopUpWP extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'closed' });
    const wrapper = document.createElement('div');
    wrapper.setAttribute('class', 'wrapper');
    wrapper.textContent = this.textContent;

    const style = document.createElement('style');
    style.textContent = `.wrapper {color: red}`;
    shadow.appendChild(style);
    shadow.appendChild(wrapper);
  }

  connectedCallback() {
    console.dir(this);
  }
}

customElements.define('popup-wp', PopUpWP);
