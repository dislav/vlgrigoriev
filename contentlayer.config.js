import { defineDocumentType, makeSource } from 'contentlayer/source-files';

export const Project = defineDocumentType(() => ({
    name: 'Project',
    filePathPattern: `projects/**/*.mdx`,
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

export const Job = defineDocumentType(() => ({
    name: 'Job',
    filePathPattern: `jobs/**/*.md`,
    fields: {
        title: {
            type: 'string',
            required: true,
        },
        company: {
            type: 'string',
            required: true,
        },
        url: {
            type: 'string',
            required: true
        },
        tags: {
            type: 'list',
            of: { type: 'string' },
        },
        startDate: {
            type: 'date',
            required: true,
        },
        endDate: {
            type: 'date',
        },
    },
}));

export default makeSource({
    contentDirPath: 'content',
    documentTypes: [Project, Job],
});
