import {ExcelComponent} from '@core/ExcelComponent';
import {createTable} from "@/components/table/table.template";

export class Table extends ExcelComponent {
  static className = 'excel__table'

  constructor(root) {
    super(root, {
      // listeners: ['click', 'mousedown', 'mousemove', 'mouseup']
      listeners: ['mousedown']
    })
  }

  toHTML() {
    return createTable(30)
  }

  // onClick(){
  //   console.log('clicked')
  // }
  //
  // onMousedown(event){
  //   console.log('mouse down', event.target)
  // }
  //
  // onMousemove(){
  //   console.log('mouse move')
  // }
  //
  // onMouseup(){
  //   console.log('mouse up')
  // }

  onMousedown(event) {

    if (event.target.dataset.resize) {

      const resizer = event.target
      const parent = resizer.closest('[data-type="resizable"]')
      const coords = parent.getBoundingClientRect()
      const type = resizer.dataset.resize

      const cells = document.querySelectorAll(`[data-col="${parent.dataset.col}"`)

      console.log(parent.dataset.col)

      document.onmousemove = (ev) => {
        if (type === 'col') {
          const delta = ev.pageX - coords.right
          const value = coords.width + delta
          parent.style.width = value + 'px'
          cells.forEach(el => el.style.width = value + 'px')

        } else {
          const delta = ev.pageY - coords.bottom
          const value = coords.height + delta
          parent.style.height = value + 'px'
        }
      }

      document.onmouseup = () => {
        document.onmousemove = null
      }

    }
  }
}
