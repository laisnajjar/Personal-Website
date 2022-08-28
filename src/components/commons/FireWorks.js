import { Fireworks } from 'fireworks-js'

export default function FireWorks() {
    const container = document.querySelector('.container')
    const fireworks = new Fireworks(container, { /* options */ })
    fireworks.start()
}
