import test from 'ava'
import { log, wrap } from '../index'

test('should export log', (t) =>
  t.truthy(typeof log.info === 'function')
)

test('should export wrap', (t) =>
  t.truthy(typeof wrap === 'function')
)
