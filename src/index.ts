import { createClient as createGtr } from './gtr/index.js'
import { createClient as createZworpshop } from './zworpshop/index.js'

export const gtr = createGtr({
    batch: false
})

export const zworpshop = createZworpshop({
    batch: false
})
