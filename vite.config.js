import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import autoprefixer from 'autoprefixer';
import path from 'path';
import fs from 'fs';
import handlebars from 'handlebars';
import { nodePolyfills } from 'vite-plugin-node-polyfills';

const pages = {"contact":{"outputDir":"./contact","lang":"en","title":"","cacheVersion":27,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://5969ae7b-f459-4dca-b050-8daeb6db48e5.weweb-preview.io/contact/"},{"rel":"alternate","hreflang":"en","href":"https://5969ae7b-f459-4dca-b050-8daeb6db48e5.weweb-preview.io/contact/"},{"rel":"alternate","hreflang":"fr","href":"https://5969ae7b-f459-4dca-b050-8daeb6db48e5.weweb-preview.io/fr/contact/"}]},"fr/contact":{"outputDir":"./fr/contact","lang":"fr","title":"Vide | Commencer à partir de zéro","cacheVersion":27,"meta":[{"name":"title","content":"Vide | Commencer à partir de zéro"},{"itemprop":"name","content":"Vide | Commencer à partir de zéro"},{"name":"twitter:card","content":"summary"},{"name":"twitter:title","content":"Vide | Commencer à partir de zéro"},{"property":"og:title","content":"Vide | Commencer à partir de zéro"},{"property":"og:site_name","content":"Vide | Commencer à partir de zéro"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://5969ae7b-f459-4dca-b050-8daeb6db48e5.weweb-preview.io/contact/"},{"rel":"alternate","hreflang":"en","href":"https://5969ae7b-f459-4dca-b050-8daeb6db48e5.weweb-preview.io/contact/"},{"rel":"alternate","hreflang":"fr","href":"https://5969ae7b-f459-4dca-b050-8daeb6db48e5.weweb-preview.io/fr/contact/"}]},"index":{"outputDir":"./","lang":"en","title":"","cacheVersion":27,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://5969ae7b-f459-4dca-b050-8daeb6db48e5.weweb-preview.io/"},{"rel":"alternate","hreflang":"en","href":"https://5969ae7b-f459-4dca-b050-8daeb6db48e5.weweb-preview.io/"},{"rel":"alternate","hreflang":"fr","href":"https://5969ae7b-f459-4dca-b050-8daeb6db48e5.weweb-preview.io/fr/"}]},"fr/":{"outputDir":"./fr/","lang":"fr","title":"Vide | Commencer à partir de zéro","cacheVersion":27,"meta":[{"name":"title","content":"Vide | Commencer à partir de zéro"},{"itemprop":"name","content":"Vide | Commencer à partir de zéro"},{"name":"twitter:card","content":"summary"},{"name":"twitter:title","content":"Vide | Commencer à partir de zéro"},{"property":"og:title","content":"Vide | Commencer à partir de zéro"},{"property":"og:site_name","content":"Vide | Commencer à partir de zéro"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://5969ae7b-f459-4dca-b050-8daeb6db48e5.weweb-preview.io/"},{"rel":"alternate","hreflang":"en","href":"https://5969ae7b-f459-4dca-b050-8daeb6db48e5.weweb-preview.io/"},{"rel":"alternate","hreflang":"fr","href":"https://5969ae7b-f459-4dca-b050-8daeb6db48e5.weweb-preview.io/fr/"}]},"portfolio":{"outputDir":"./portfolio","lang":"en","title":"","cacheVersion":27,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://5969ae7b-f459-4dca-b050-8daeb6db48e5.weweb-preview.io/portfolio/"},{"rel":"alternate","hreflang":"en","href":"https://5969ae7b-f459-4dca-b050-8daeb6db48e5.weweb-preview.io/portfolio/"},{"rel":"alternate","hreflang":"fr","href":"https://5969ae7b-f459-4dca-b050-8daeb6db48e5.weweb-preview.io/fr/portfolio/"}]},"fr/portfolio":{"outputDir":"./fr/portfolio","lang":"fr","title":"Vide | Commencer à partir de zéro","cacheVersion":27,"meta":[{"name":"title","content":"Vide | Commencer à partir de zéro"},{"itemprop":"name","content":"Vide | Commencer à partir de zéro"},{"name":"twitter:card","content":"summary"},{"name":"twitter:title","content":"Vide | Commencer à partir de zéro"},{"property":"og:title","content":"Vide | Commencer à partir de zéro"},{"property":"og:site_name","content":"Vide | Commencer à partir de zéro"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://5969ae7b-f459-4dca-b050-8daeb6db48e5.weweb-preview.io/portfolio/"},{"rel":"alternate","hreflang":"en","href":"https://5969ae7b-f459-4dca-b050-8daeb6db48e5.weweb-preview.io/portfolio/"},{"rel":"alternate","hreflang":"fr","href":"https://5969ae7b-f459-4dca-b050-8daeb6db48e5.weweb-preview.io/fr/portfolio/"}]}};

// Read the main HTML template
const template = fs.readFileSync(path.resolve(__dirname, 'template.html'), 'utf-8');
const compiledTemplate = handlebars.compile(template);

// Generate an HTML file for each page with its metadata
Object.values(pages).forEach(pageConfig => {
    // Compile the template with page metadata
    const html = compiledTemplate({
        title: pageConfig.title,
        lang: pageConfig.lang,
        meta: pageConfig.meta,
        scripts: {
            head: pageConfig.scripts.head,
            body: pageConfig.scripts.body,
        },
        alternateLinks: pageConfig.alternateLinks,
        cacheVersion: pageConfig.cacheVersion,
        baseTag: pageConfig.baseTag,
    });

    // Save output html for each page
    if (!fs.existsSync(pageConfig.outputDir)) {
        fs.mkdirSync(pageConfig.outputDir, { recursive: true });
    }
    fs.writeFileSync(`${pageConfig.outputDir}/index.html`, html);
});

const rollupOptionsInput = {};
for (const pageName in pages) {
    rollupOptionsInput[pageName] = path.resolve(__dirname, pages[pageName].outputDir, 'index.html');
}

export default defineConfig(() => {
    return {
        plugins: [nodePolyfills({ include: ['events', 'stream', 'string_decoder'] }), vue()],
        base: "/",
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src'),
            },
        },
        css: {
            preprocessorOptions: {
                scss: {
                    api: 'modern-compiler',
                },
            },
            postcss: {
                plugins: [autoprefixer],
            },
        },
        build: {
            chunkSizeWarningLimit: 10000,
            rollupOptions: {
                input: rollupOptionsInput,
                onwarn: (entry, next) => {
                    if (entry.loc?.file && /js$/.test(entry.loc.file) && /Use of eval in/.test(entry.message)) return;
                    return next(entry);
                },
                maxParallelFileOps: 900,
            },
        },
        logLevel: 'warn',
    };
});
