export class DomListener {
  constructor(root, listeners = []) {
    if (!root) {
      throw new Error(`no root for DomListener`)
    }
    this.root = root
    this.listeners = listeners
  }

  initDOMListeners() {
    
  }

  removeDOMListeners() {}

}

