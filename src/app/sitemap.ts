import { MetadataRoute } from 'next';

import { allProjects } from 'contentlayer/generated';

const baseUrl = 'https://vlgrigoriev.dev';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const projects: MetadataRoute.Sitemap = allProjects.map((project) => ({
        url: `${baseUrl}/${project._raw.flattenedPath}`,
        lastModified: project.publishAt.split('T')[0],
    }));

    const routes = [''].map((route) => ({
        url: `${baseUrl}/${route}`,
        lastModified: new Date().toISOString().split('T')[0],
    }));

    return [...routes, ...projects];
}
