import {ExcelComponent} from '@core/ExcelComponent';
import {createTable} from "@/components/table/table.template";

export class Table extends ExcelComponent {
  static className = 'excel__table'

  constructor(root){
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

  onMousedown(event){
    if (event.target.dataset.resize){
      console.log('Start resizing', event.target.dataset.resize)
    }
  }
}
