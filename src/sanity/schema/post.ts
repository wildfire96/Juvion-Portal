import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'post',
  title: 'Análise de Faculdade/Curso',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título Principal (Ex: Vale a Pena Estudar na Faculdade X?)',
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
      name: 'courseOrCollegeName',
      title: 'Nome do Curso ou Faculdade',
      type: 'string',
    }),
    defineField({
      name: 'heroImage',
      title: 'Imagem do Hero (PNG Transparente Recomendado)',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'author',
      title: 'Autor',
      type: 'reference',
      to: { type: 'author' },
    }),
    defineField({
      name: 'rating',
      title: 'Nota Juvion (Ex: 4.6)',
      type: 'number',
    }),
    defineField({
      name: 'monthlyPrice',
      title: 'Valor da Mensalidade (Somente números, Ex: 249.00)',
      type: 'number',
    }),
    defineField({
      name: 'affiliateLink',
      title: 'Link de Desconto / Afiliado',
      type: 'url',
    }),
    defineField({
      name: 'pros',
      title: 'O que brilha (Prós - Adicione cada ponto)',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'cons',
      title: 'Ponto de atenção (Contras - Adicione cada ponto)',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'body',
      title: 'Conteúdo da Análise (Adicione textos e imagens livres aqui)',
      type: 'array',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
          options: { hotspot: true },
        },
      ],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Data de Publicação',
      type: 'datetime',
    }),
  ],
})
