import test from 'ava'
import { log, wrap } from '../'

test('should export wrap', (t) => {
  t.truthy(typeof log === 'function')
})

test('should export log', (t) => {
  t.truthy(typeof wrap === 'function')
})
