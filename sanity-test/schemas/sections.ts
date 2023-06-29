import { defineField, defineType } from 'sanity'
// import { defineDocument } from 'sanity'

export default defineField({
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    {
    name: 'sections',
    title: 'Sections',
    type: 'array',
    of: [
          {
            name: 'section',
            type: 'object',
            title: 'Section',
            fields: [
              defineField({
                name: 'title',
                title: 'Title',
                type: 'string',
                description: 'Will display in UI/Navbar',
              }),
              defineField({
                name: 'slug',
                title: 'Slug',
                type: 'slug',
                options: {
                  source: 'title',
                  maxLength: 96,
                },
              }),
              defineField({
                name: 'color',
                title: 'Color',
                type: 'boolean',
                description: 'Will display in UI, background color, true = blue',
              }),
              defineField({
                name: 'alignLeft',
                title: 'Image Align Left',
                type: 'boolean',
                description: 'Will display in UI',
              }),
              defineField({
                name: 'text',
                title: 'Text',
                type: 'object',
                fields: [{
                    name: 'header',
                    title: 'Header',
                    type: 'string',
                    description: 'Will display in UI (Not in home section)',
                  },{
                    name: 'body',
                    title: 'Body',
                    type: 'blockContent',
                    description: 'Will display in UI/Main section text',
                  },
                ]}),

              defineField({
                name: 'images',
                title: 'Images',
                type: 'array',
                of: [
                  {
                    type: 'image',
                    title: 'Image',
                    options: {
                      hotspot: true,
                    },
                    fields: [
                      {
                        name: 'alt',
                        type: 'string',
                        title: 'Alternative text',
                      },
                    ],
                  },
                ],
              }),

            ],
            preview: {
              select: {
                title: 'title',
                // media: 'images.0', // Show the first image as the preview media
              },
            },
          },
        ]
    },
  ],
  
});



// import {defineField, defineType} from 'sanity'

// export default defineType({
//   name: 'sections',
//   title: 'Sections',
//   type: 'document',
//   fields: [
//     defineField({
//       name: 'title',
//       title: 'Title',
//       type: 'string',
//       description: 'Will display in UI/Navbar'
//     }),
//     defineField({
//       name: 'slug',
//       title: 'Slug',
//       type: 'slug',
//       options: {
//         source: 'title',
//         maxLength: 96,
//       },
//     }),
//     defineField({
//       name: 'header',
//       title: 'Header',
//       type: 'string',
//       description: 'Will display in UI (Not in home section)'
//     }),
//     defineField({
//       name: 'Images',
//       title: 'images',
//       type: 'array',
//       of: [
//         {
//           name: 'image',
//           type: 'image',
//           title: 'Image',
//           options: {
//             hotspot: true,
//           },
//           fields: [
//             {
//               name: 'alt',
//               type: 'string',
//               title: 'Alternative text',
//             },
//           ],
//         },
//       ]
//     }),
//     defineField({
//       name: 'body',
//       title: 'Body',
//       type: 'blockContent',
//       description: 'Will display in UI/Main section text'
//     }),
//   ],

//   preview: {
//     select: {
//       title: 'title',
//       media: 'image',
//     },
//     // prepare(selection) {
//     //   const {author} = selection
//     //   return {...selection, subtitle: author && `by ${author}`}
//     // },
//   },
// })
