import { defineDocumentType, makeSource } from 'contentlayer/source-files';

export const Project = defineDocumentType(() => ({
    name: 'Project',
    filePathPattern: '**/*.mdx',
    contentType: 'mdx',
    fields: {
        title: {
            type: 'string',
            required: true,
        },
        image: {
            type: 'string',
            required: true,
        },
        year: {
            type: 'number',
            required: true,
        },
        publishAt: {
            type: 'date',
            required: true,
        },
    },
}));

export default makeSource({
    contentDirPath: 'content',
    documentTypes: [Project],
});
