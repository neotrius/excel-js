export class Emitter {
	constructor() {
		this.listeners = {}
	}

	// dispatch, fire, trigger
	emit(event, ...args) {
		if (!Array.isArray(this.listeners[event])) {
			return false
		}
		this.listeners[event].forEach(listener => {
			listener(...args)
		})
		return true
	}

	// on, listen
	subscribe(event, fn) {
		this.listeners[event] = this.listeners[event] || []
		this.listeners[event].push(fn)
		return () => {
			this.listeners[event] = this.listeners[event].filter(listener => listener !== fn)
		}
	}
}

// // Example
// const emitter = new Emitter()
//
// const unsub = emitter.subscribe('Jeff', data => console.log('Sub:', data))
// emitter.emit('Jeff', 10)
//
// setTimeout(() => {
// 	emitter.emit('Jeff', 'after 2 seconds')
// }, 2e3)
//
// setTimeout(() => {
// 	emitter.emit('Jeff', 'after 4 seconds')
// }, 4e3)
//
// setTimeout(() => unsub(), 5e3)
//
// setTimeout(() => {
// 	emitter.emit('Jeff', 'after 8 seconds')
// }, 8e3)