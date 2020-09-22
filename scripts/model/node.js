export default class Node {
    constructor(info) {
      this.info = info;
      this.left = null;
      this.right = null;
    }
    // metodos
  
    setInfo() {
      return `info: ${this.info}`;
    }
  }