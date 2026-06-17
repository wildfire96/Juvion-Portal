import { type SchemaTypeDefinition } from 'sanity'

import author from './author'
import category from './category'
import post from './post'
import guide from './guide'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, guide, author, category],
}
