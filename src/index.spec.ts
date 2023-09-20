import test from 'ava'

import { gtr, zworpshop } from './index.js'

test('GTR API exists', t => {
    t.is(typeof gtr.query, 'function')
})

test('Zworpshop API exists', t => {
    t.is(typeof zworpshop.query, 'function')
})
