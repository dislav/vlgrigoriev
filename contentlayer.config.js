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
        description: {
            type: 'string',
            required: true,
        },
        image: {
            type: 'string',
            required: true,
        },
        preview: {
            type: 'string',
            required: true,
        },
        background: {
            type: 'string',
            required: true,
        },
        publishAt: {
            type: 'date',
            required: true,
        },
    },
    computedFields: {
        slug: {
            type: 'string',
            resolve: (project) =>
                project._raw.flattenedPath.replace('projects/', ''),
        },
        structuredData: {
            type: 'object',
            resolve: (project) => ({
                '@context': 'https://schema.org',
                '@type': 'Project',
                name: project.title,
                headline: project.title,
                url: `https://vlgrigoriev.dev/${project._raw.flattenedPath}`,
                author: {
                    '@type': 'Person',
                    name: 'Vladislav Grigoriev',
                },
                datePublished: project.publishAt,
                dateModified: project.publishAt,
            }),
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
            required: true,
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
