// import { defineConfig } from "sanity";
// import { deskTool, StructureBuilder } from "sanity/desk";
// import { orderRankField, orderRankOrdering } from '@sanity/orderable-document-list';

// export default defineConfig({
//   name: 'default',
//   title: 'sanity-test',

//   projectId: '4w7nc58k',
//   dataset: 'production',
//   plugins: [
//     deskTool({
//       structure: (S) =>
//         S.list()
//           .title("Content")
//           .items([
//             S.listItem()
//               .title("Sections")
//               .child(
//                 S.documentTypeList("sections")
//                   .title("Sections")
//                   .child((sectionId) =>
//                     S.document()
//                       .documentId(sectionId)
//                       .schemaType("sections")
//                   )
//               ),
//             // Add more list items or customize the structure as needed
//           ]),
//     })
//   ],
//   schema: {
//     types: (previousTypes) => {
//       return [
//         ...previousTypes,
//         {
//           name: "sections",
//           title: "Sections",
//           type: "document",
//           orderings: [orderRankOrdering], // Optional: Enables custom ordering
//           fields: [
//             // Minimum required configuration


//             // ...your other fields
//             orderRankField({ type: "sections" }),
//           ],
//         },
//       ];
//     },
//   },
// });





import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'

export default defineConfig({
  name: 'default',
  title: 'sanity-test',

  projectId: '4w7nc58k',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
