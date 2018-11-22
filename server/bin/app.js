import { foo, bar } from './a'
import person from './b'

const log = console.log.bind()

log(foo() + bar())

log(`name: ${person.name}`, `age: ${person.age}`)
