import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'post',
  title: 'Análise de Faculdade/Curso',
  type: 'document',
  groups: [
    { name: 'content', title: 'Conteúdo Principal' },
    { name: 'toggles', title: 'Toggles (Ativar/Desativar)' },
    { name: 'texts', title: 'Textos Padrões (Customizáveis)' }
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Título Principal (Ex: Vale a Pena Estudar na Faculdade X?)',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL amigável)',
      type: 'slug',
      group: 'content',
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
      group: 'content',
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO Description (Tamanho ideal: 150-160 caracteres)',
      type: 'text',
      rows: 2,
      group: 'content',
    }),
    defineField({
      name: 'courseOrCollegeName',
      title: 'Nome do Curso ou Faculdade',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'heroImage',
      title: 'Imagem do Hero (PNG Transparente Recomendado)',
      type: 'image',
      group: 'content',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'author',
      title: 'Autor',
      type: 'reference',
      to: { type: 'author' },
      group: 'content',
    }),
    defineField({
      name: 'rating',
      title: 'Nota Juvion (Ex: 4.6)',
      type: 'number',
      group: 'content',
    }),
    defineField({
      name: 'monthlyPrice',
      title: 'Valor da Mensalidade (Somente números, Ex: 249.00)',
      type: 'number',
      group: 'content',
    }),
    defineField({
      name: 'affiliateLink',
      title: 'Link de Desconto / Afiliado',
      type: 'url',
      group: 'content',
    }),
    defineField({
      name: 'pros',
      title: 'O que brilha (Prós - Adicione cada ponto)',
      type: 'array',
      of: [{ type: 'string' }],
      group: 'content',
    }),
    defineField({
      name: 'cons',
      title: 'Ponto de atenção (Contras - Adicione cada ponto)',
      type: 'array',
      of: [{ type: 'string' }],
      group: 'content',
    }),
    defineField({
      name: 'body',
      title: 'Conteúdo da Análise (Adicione textos e imagens livres aqui)',
      type: 'array',
      group: 'content',
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
      group: 'content',
      initialValue: () => new Date().toISOString()
    }),
    
    // --- TOGGLES ---
    defineField({
      name: 'showHeroImage',
      title: 'Mostrar Imagem no Hero',
      type: 'boolean',
      group: 'toggles',
      initialValue: true,
    }),
    defineField({
      name: 'showScoreBox',
      title: 'Mostrar Box de Nota/Mensalidade (Bento Premium)',
      type: 'boolean',
      group: 'toggles',
      initialValue: true,
    }),
    defineField({
      name: 'showProsCons',
      title: 'Mostrar Prós e Contras',
      type: 'boolean',
      group: 'toggles',
      initialValue: true,
    }),
    defineField({
      name: 'showFinalVerdict',
      title: 'Mostrar Veredito Final (CTA Inferior)',
      type: 'boolean',
      group: 'toggles',
      initialValue: true,
    }),
    defineField({
      name: 'showShareSidebar',
      title: 'Mostrar Sidebar de Compartilhamento',
      type: 'boolean',
      group: 'toggles',
      initialValue: true,
    }),
    
    // --- TEXTOS PADRÕES ---
    defineField({
      name: 'badgeText',
      title: 'Texto da Tag no Hero',
      type: 'string',
      group: 'texts',
      initialValue: 'Audited Review 2026'
    }),
    defineField({
      name: 'scoreLabel',
      title: 'Texto do "Juvion Score"',
      type: 'string',
      group: 'texts',
      initialValue: 'Juvion Score'
    }),
    defineField({
      name: 'tuitionLabel',
      title: 'Texto da Mensalidade',
      type: 'string',
      group: 'texts',
      initialValue: 'Average Tuition'
    }),
    defineField({
      name: 'discountButtonText',
      title: 'Texto do Botão de Desconto (Bento Premium)',
      type: 'string',
      group: 'texts',
      initialValue: 'Secure Discount'
    }),
    defineField({
      name: 'prosLabel',
      title: 'Texto do Título de Prós',
      type: 'string',
      group: 'texts',
      initialValue: 'What shines'
    }),
    defineField({
      name: 'consLabel',
      title: 'Texto do Título de Contras',
      type: 'string',
      group: 'texts',
      initialValue: 'Point of attention'
    }),
    defineField({
      name: 'verdictBadgeText',
      title: 'Texto da Tag do Veredito',
      type: 'string',
      group: 'texts',
      initialValue: 'Final Verdict'
    }),
    defineField({
      name: 'verdictTitle',
      title: 'Texto Principal do Veredito (use {nome} para inserir o nome do curso/faculdade)',
      type: 'string',
      group: 'texts',
      initialValue: '{nome} is the logical choice to accelerate your career.'
    }),
    defineField({
      name: 'verdictButtonText',
      title: 'Texto do Botão do Veredito',
      type: 'string',
      group: 'texts',
      initialValue: 'Secure my spot with discount'
    }),
    defineField({
      name: 'verdictSubtitle',
      title: 'Subtexto do Veredito',
      type: 'string',
      group: 'texts',
      initialValue: '100% online registration • Simplified process'
    }),
    defineField({
      name: 'shareTitle',
      title: 'Título da Sidebar (Share)',
      type: 'string',
      group: 'texts',
      initialValue: 'Share'
    }),
    defineField({
      name: 'shareText',
      title: 'Texto da Sidebar',
      type: 'string',
      group: 'texts',
      initialValue: 'Did you like the review? Send it to a friend who is unsure where to study.'
    }),
  ],
})
