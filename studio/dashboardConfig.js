export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e3be069b7cc838dd7f3136a',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-8qx5umds',
                  apiId: 'f48e0c59-b1e5-45b6-823a-464460fac42c'
                },
                {
                  buildHookId: '5e3be069c4b0cee99cb326ba',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-u2wyibp8',
                  apiId: '6dcc5e8e-5b0b-4657-9372-d4e433fc733a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Download/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-u2wyibp8.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
