class Options {
  constructor(height, width, bg, fontSize, textAlign) {
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    this.textAlign = textAlign;
  }

  newDiv() {
    let div = document.createElement('div');
    document.body.appendChild(div);
    let properties = `height: ${this.height}px; width: ${this.width}px; 
    background-color: ${this.bg}; 
    font-size: ${this.fontSize}px;
    text-align: ${this.textAlign};`;
    div.textContent = 'Lorem Ipsum';
    div.style.cssText = properties;
  }
}

const element = new Options(100, '100%', '#c78030', 14, 'center');
element.newDiv();