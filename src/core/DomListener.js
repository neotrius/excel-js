export class DomListener {
  constructor(root) {
    if (!root) {
      throw new Error(`no root for DomListener`)
    }

    this.root = root
  }
}

