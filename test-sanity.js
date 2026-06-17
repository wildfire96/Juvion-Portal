const { createClient } = require('@sanity/client');

const client = createClient({
  projectId: 'j6uf1x0e',
  dataset: 'production',
  apiVersion: '2023-01-01',
  useCdn: false,
  token: 'skProfDIFyIriIt3zWqMbUMKsJd39RVkJdqmQX7FednEA5MfPZW0HfwTm2g8IkubB35HjSLC2DGFRQpgAZGJMb1QJxQ5DSCoCjc3wtQYv7OG49tfnYzu0ieJXbKBR1R00uE590OduKyZNMIeiUrDrN1oIFQK1gvLlrBaV9shQ8unTCI2sTkX'
});

async function run() {
  const posts = await client.fetch(`*[_type == "post"]{title, slug, _id, _updatedAt}`);
  console.log(JSON.stringify(posts, null, 2));
}
run();
