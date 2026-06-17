import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'guide',
  title: 'Guia de Estudo',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título do Guia',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL amigável)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
        slugify: input => input
                             .toLowerCase()
                             .replace(/\s+/g, '-')
                             .replace(/[^\w\-]+/g, '')
                             .slice(0, 96)
      },
    }),
    defineField({
      name: 'seoTitle',
      title: 'SEO Title (Tamanho ideal: 50-60 caracteres)',
      type: 'string',
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO Description (Tamanho ideal: 150-160 caracteres)',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'icon',
      title: 'Ícone (Opções: BookOpen, GraduationCap, Brain)',
      type: 'string',
      options: {
        list: [
          { title: 'Livro Aberto', value: 'BookOpen' },
          { title: 'Capelo de Formatura', value: 'GraduationCap' },
          { title: 'Cérebro', value: 'Brain' },
        ],
      }
    }),
    defineField({
      name: 'summary',
      title: 'Resumo (Aparece no card da página inicial)',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'body',
      title: 'Conteúdo do Guia',
      type: 'array',
      of: [
        { type: 'block' },
        { type: 'image', options: { hotspot: true } }
      ],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Data de Publicação',
      type: 'datetime',
    }),
  ],
})
