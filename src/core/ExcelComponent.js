import {DomListener} from '@core/DomListener';


export class ExcelComponent extends DomListener {
  constructor(root, options = {}) {
    super(root, options.listeners)
  }

  // returns component template
  toHTML() {
    return ''
  }

  init() {
    this.initDOMListeners()
  }
}

