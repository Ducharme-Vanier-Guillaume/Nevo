import { createRouter, createWebHistory } from 'vue-router';

import wwPage from './views/wwPage.vue';

import { initializeData, initializePlugins, onPageUnload } from '@/_common/helpers/data';

let router;
const routes = [];

function scrollBehavior(to) {
    if (to.hash) {
        return {
            el: to.hash,
            behavior: 'smooth',
        };
    } else {
        return { top: 0 };
    }
}

 
/* wwFront:start */
import pluginsSettings from '../../plugins-settings.json';

// eslint-disable-next-line no-undef
window.wwg_designInfo = {"id":"5969ae7b-f459-4dca-b050-8daeb6db48e5","homePageId":"b488ebb3-0878-4713-ac33-ae258ff7fed3","authPluginId":null,"baseTag":null,"defaultTheme":"light","langs":[{"lang":"en","default":true,"isDefaultPath":false},{"lang":"fr","default":false,"isDefaultPath":false}],"background":{},"workflows":[{"id":"90897e02-7c81-4cb9-9d7b-a99de9fd229d","actions":{"25a21621-5d8f-433c-8714-3cf191101d7c":{"id":"25a21621-5d8f-433c-8714-3cf191101d7c","type":"if","value":{"code":"globalContext.screen?.['scroll']?.['y']>370","__wwtype":"f"},"branches":[{"id":"65d563ee-109a-49de-b427-42ff50c5351d","value":true},{"id":"92811eea-fbdc-46cd-8a5d-32c55290c40a","value":false}]},"65d563ee-109a-49de-b427-42ff50c5351d":{"id":"65d563ee-109a-49de-b427-42ff50c5351d","type":"variable","varId":"415f2f1e-94e4-42a5-904f-08754e6a08f7","internal":false,"varValue":true},"92811eea-fbdc-46cd-8a5d-32c55290c40a":{"id":"92811eea-fbdc-46cd-8a5d-32c55290c40a","type":"variable","varId":"415f2f1e-94e4-42a5-904f-08754e6a08f7","internal":false,"varValue":false}},"trigger":"page-scroll","firstAction":"25a21621-5d8f-433c-8714-3cf191101d7c","triggerConditions":null}],"pages":[{"id":"b488ebb3-0878-4713-ac33-ae258ff7fed3","linkId":"b488ebb3-0878-4713-ac33-ae258ff7fed3","name":"Home","folder":null,"paths":{"en":"home","fr":"","default":"home"},"langs":["fr","en"],"cmsDataSetPath":null,"sections":[{"uid":"e8aa932d-806f-495e-be9e-7a474e13bbfc","sectionTitle":"Menu-Mobile","linkId":"a1028fa5-7f1a-4e88-b3db-65f65a060024"},{"uid":"5832baed-1f13-4318-b2eb-b0082b9342b9","sectionTitle":"Menu","linkId":"31b35345-467b-42a0-bf46-ba8dcdddb6b5"},{"uid":"b855dc8d-c261-41cf-bea7-e57b8b597523","sectionTitle":"Pop-up","linkId":"f586bf80-5ac8-4110-8375-deb42ea57b60"},{"uid":"5bc167dc-0b14-4ce9-8052-4ce91f4483ee","sectionTitle":"Header","linkId":"af4e8bf4-2d54-4bed-8266-53824e53d3ba"},{"uid":"7c39b0f5-04ae-4d2e-9f19-c77e21ac04ca","sectionTitle":"Services","linkId":"f1451c0c-3325-423a-825e-cc399de7932a"},{"uid":"5b805f52-0942-4a5b-9aa0-bc1d09cd7f04","sectionTitle":"Timeline","linkId":"14bba2d2-c984-42ee-a2c7-520a791fd4ea"},{"uid":"6b41adca-3d23-4fbc-9cbe-1281938a98bf","sectionTitle":"About","linkId":"12f06cd0-ef70-4618-9840-55237ea79c04"},{"uid":"563be4b2-e000-40a0-a5bb-58cac279aaf4","sectionTitle":"Section-FAQ","linkId":"c0ae1f3f-fc13-4887-b575-52b3635c602a"},{"uid":"13ea2b39-dfff-4abf-897b-475c719381b1","sectionTitle":"Contact","linkId":"7f1e4fff-933c-4f6e-898b-67f4b153a66a"},{"uid":"c122f74d-1850-44ba-b558-3774eebdfa3e","sectionTitle":"Footer","linkId":"4d4a252a-d133-4f24-8288-ef75885e9ca9"}],"pageUserGroups":[],"title":{"en":"Nevo | Web Design","fr":"Nevo | Design Web"},"meta":{"desc":{"en":"Nevo delivers tailored digital solutions through cutting-edge web design, responsive development, and seamless user experience.","fr":"Nevo est une agence web spécialisée dans la création de sites performants, modernes et adaptatifs, alliant technologie et expérience utilisateur."},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":"images/square_zoomout.png?_wwcv=176"},{"id":"ba8a0637-ceeb-44c6-b44d-bd102feae2dd","linkId":"ba8a0637-ceeb-44c6-b44d-bd102feae2dd","name":"Fairlady","folder":null,"paths":{"en":"fairlady","default":"fairlady"},"langs":["fr","en"],"cmsDataSetPath":null,"sections":[{"uid":"e8aa932d-806f-495e-be9e-7a474e13bbfc","sectionTitle":"Menu-Mobile","linkId":"a1028fa5-7f1a-4e88-b3db-65f65a060024"},{"uid":"5832baed-1f13-4318-b2eb-b0082b9342b9","sectionTitle":"Menu","linkId":"31b35345-467b-42a0-bf46-ba8dcdddb6b5"},{"uid":"14b108d2-18c5-4f31-933c-d2fc820ed363","sectionTitle":"Section-projet","linkId":"214e9abb-9e7f-4c3a-bf38-7bfef5f7f47a"},{"uid":"c122f74d-1850-44ba-b558-3774eebdfa3e","sectionTitle":"Footer","linkId":"4d4a252a-d133-4f24-8288-ef75885e9ca9"}],"pageUserGroups":[],"title":{"en":"","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"b59c3407-7b65-4138-9ce2-8878779fc21f","linkId":"b59c3407-7b65-4138-9ce2-8878779fc21f","name":"TropiQ","folder":null,"paths":{"en":"portfolio-content","default":"portfolio-content"},"langs":["fr","en"],"cmsDataSetPath":null,"sections":[{"uid":"e8aa932d-806f-495e-be9e-7a474e13bbfc","sectionTitle":"Menu-Mobile","linkId":"a1028fa5-7f1a-4e88-b3db-65f65a060024"},{"uid":"5832baed-1f13-4318-b2eb-b0082b9342b9","sectionTitle":"Menu","linkId":"31b35345-467b-42a0-bf46-ba8dcdddb6b5"},{"uid":"67971b0c-f785-42b0-b2e6-12ca93c09ef5","sectionTitle":"Section-projet","linkId":"c8f567fe-a4e2-4720-a295-da86be0dfd92"},{"uid":"c122f74d-1850-44ba-b558-3774eebdfa3e","sectionTitle":"Footer","linkId":"4d4a252a-d133-4f24-8288-ef75885e9ca9"}],"pageUserGroups":[],"title":{"en":"","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"5887c5c6-a84c-44ac-9c9e-7ce46befb9f2","linkId":"5887c5c6-a84c-44ac-9c9e-7ce46befb9f2","name":"Contact","folder":null,"paths":{"en":"contact","default":"contact"},"langs":["fr","en"],"cmsDataSetPath":null,"sections":[{"uid":"e8aa932d-806f-495e-be9e-7a474e13bbfc","sectionTitle":"Menu-Mobile","linkId":"a1028fa5-7f1a-4e88-b3db-65f65a060024"},{"uid":"5832baed-1f13-4318-b2eb-b0082b9342b9","sectionTitle":"Menu","linkId":"31b35345-467b-42a0-bf46-ba8dcdddb6b5"},{"uid":"30ebfd3d-7048-414d-97cb-7f17242473a4","sectionTitle":"Pop-up","linkId":"f70a8c76-0cbf-460f-a067-54571a2c9f7b"},{"uid":"00ec09c9-04a8-408f-b261-7302732f2e70","sectionTitle":"Section","linkId":"68990323-2a7b-4323-a967-1a15c6f2fe8c"},{"uid":"c122f74d-1850-44ba-b558-3774eebdfa3e","sectionTitle":"Footer","linkId":"4d4a252a-d133-4f24-8288-ef75885e9ca9"}],"pageUserGroups":[],"title":{"en":"","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"e302dac0-0dff-47c3-bfd1-13d69541a113","linkId":"e302dac0-0dff-47c3-bfd1-13d69541a113","name":"TIM","folder":null,"paths":{"en":"tim","default":"tim"},"langs":["fr","en"],"cmsDataSetPath":null,"sections":[{"uid":"e8aa932d-806f-495e-be9e-7a474e13bbfc","sectionTitle":"Menu-Mobile","linkId":"a1028fa5-7f1a-4e88-b3db-65f65a060024"},{"uid":"5832baed-1f13-4318-b2eb-b0082b9342b9","sectionTitle":"Menu","linkId":"31b35345-467b-42a0-bf46-ba8dcdddb6b5"},{"uid":"1c6f26de-d115-4aba-b5ab-46c7664dd152","sectionTitle":"Section-projet","linkId":"5db7da4c-5a37-4dbb-88cc-dc51d7506000"},{"uid":"c122f74d-1850-44ba-b558-3774eebdfa3e","sectionTitle":"Footer","linkId":"4d4a252a-d133-4f24-8288-ef75885e9ca9"}],"pageUserGroups":[],"title":{"en":"","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"cb92b16f-f1a8-491e-88c9-47c51491fa8f","linkId":"cb92b16f-f1a8-491e-88c9-47c51491fa8f","name":"Saudade","folder":null,"paths":{"en":"saudade","default":"saudade"},"langs":["fr","en"],"cmsDataSetPath":null,"sections":[{"uid":"e8aa932d-806f-495e-be9e-7a474e13bbfc","sectionTitle":"Menu-Mobile","linkId":"a1028fa5-7f1a-4e88-b3db-65f65a060024"},{"uid":"5832baed-1f13-4318-b2eb-b0082b9342b9","sectionTitle":"Menu","linkId":"31b35345-467b-42a0-bf46-ba8dcdddb6b5"},{"uid":"64b32b39-c243-490d-9409-f22124c689e6","sectionTitle":"Section-projet","linkId":"9285c38c-5725-4206-a474-6a5e9edf22b5"},{"uid":"c122f74d-1850-44ba-b558-3774eebdfa3e","sectionTitle":"Footer","linkId":"4d4a252a-d133-4f24-8288-ef75885e9ca9"}],"pageUserGroups":[],"title":{"en":"","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"b9278fd6-f58e-436a-988f-3e433eee6e14","linkId":"b9278fd6-f58e-436a-988f-3e433eee6e14","name":"Portfolio","folder":null,"paths":{"en":"portfolio","default":"portfolio"},"langs":["fr","en"],"cmsDataSetPath":null,"sections":[{"uid":"e8aa932d-806f-495e-be9e-7a474e13bbfc","sectionTitle":"Menu-Mobile","linkId":"a1028fa5-7f1a-4e88-b3db-65f65a060024"},{"uid":"e2bbaa34-e76e-4923-a9a6-4e8565aac064","sectionTitle":"Portfolio Section","linkId":"5386ba23-2e99-4fb6-a6f6-223c59315132"},{"uid":"7212ab04-5b97-428e-a26c-7b4743283999","sectionTitle":"Root Container","linkId":"52b8a263-ae80-438c-8d22-97876c649d5f"},{"uid":"5832baed-1f13-4318-b2eb-b0082b9342b9","sectionTitle":"Menu","linkId":"31b35345-467b-42a0-bf46-ba8dcdddb6b5"},{"uid":"c122f74d-1850-44ba-b558-3774eebdfa3e","sectionTitle":"Footer","linkId":"4d4a252a-d133-4f24-8288-ef75885e9ca9"}],"pageUserGroups":[],"title":{"en":"","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""}],"plugins":[{"id":"2bd1c688-31c5-443e-ae25-59aa5b6431fb","name":"REST API","namespace":"restApi"},{"id":"8bc1b5c9-29e4-4269-becb-a2e1a8de9127","name":"WeWeb Email","namespace":"wewebEmail"}]};
// eslint-disable-next-line no-undef
window.wwg_cacheVersion = 176;
// eslint-disable-next-line no-undef
window.wwg_pluginsSettings = pluginsSettings;
// eslint-disable-next-line no-undef
window.wwg_disableManifest = false;

const defaultLang = window.wwg_designInfo.langs.find(({ default: isDefault }) => isDefault) || {};

const registerRoute = (page, lang, forcedPath) => {
    const langSlug = !lang.default || lang.isDefaultPath ? `/${lang.lang}` : '';
    let path =
        forcedPath ||
        (page.id === window.wwg_designInfo.homePageId ? '/' : `/${page.paths[lang.lang] || page.paths.default}`);

    //Replace params
    path = path.replace(/{{([\w]+)\|([^/]+)?}}/g, ':$1');

    routes.push({
        path: langSlug + path,
        component: wwPage,
        name: `page-${page.id}-${lang.lang}`,
        meta: {
            pageId: page.id,
            lang,
            isPrivate: !!page.pageUserGroups?.length,
        },
        async beforeEnter(to, from) {
            if (to.name === from.name) return;
            //Set page lang
            wwLib.wwLang.defaultLang = defaultLang.lang;
            wwLib.$store.dispatch('front/setLang', lang.lang);

            //Init plugins
            await initializePlugins();

            //Check if private page
            if (page.pageUserGroups?.length) {
                // cancel navigation if no plugin
                if (!wwLib.wwAuth.plugin) {
                    return false;
                }

                await wwLib.wwAuth.init();

                // Redirect to not sign in page if not logged
                if (!wwLib.wwAuth.getIsAuthenticated()) {
                    window.location.href = `${wwLib.wwPageHelper.getPagePath(
                        wwLib.wwAuth.getUnauthenticatedPageId()
                    )}?_source=${to.path}`;

                    return null;
                }

                //Check roles are required
                if (
                    page.pageUserGroups.length > 1 &&
                    !wwLib.wwAuth.matchUserGroups(page.pageUserGroups.map(({ userGroup }) => userGroup))
                ) {
                    window.location.href = `${wwLib.wwPageHelper.getPagePath(
                        wwLib.wwAuth.getUnauthorizedPageId()
                    )}?_source=${to.path}`;

                    return null;
                }
            }

            try {
                await import(`@/pages/${page.id.split('_')[0]}.js`);
                await wwLib.wwWebsiteData.fetchPage(page.id);

                //Scroll to section or on top after page change
                if (to.hash) {
                    const targetElement = document.getElementById(to.hash.replace('#', ''));
                    if (targetElement) targetElement.scrollIntoView();
                } else {
                    document.body.scrollTop = document.documentElement.scrollTop = 0;
                }

                return;
            } catch (err) {
                wwLib.$store.dispatch('front/showPageLoadProgress', false);

                if (err.redirectUrl) {
                    return { path: err.redirectUrl || '404' };
                } else {
                    //Any other error: go to target page using window.location
                    window.location = to.fullPath;
                }
            }
        },
    });
};

for (const page of window.wwg_designInfo.pages) {
    for (const lang of window.wwg_designInfo.langs) {
        if (!page.langs.includes(lang.lang)) continue;
        registerRoute(page, lang);
    }
}

const page404 = window.wwg_designInfo.pages.find(page => page.paths.default === '404');
if (page404) {
    for (const lang of window.wwg_designInfo.langs) {
        // Create routes /:lang/:pathMatch(.*)* etc for all langs of the 404 page
        if (!page404.langs.includes(lang.lang)) continue;
        registerRoute(
            page404,
            {
                default: false,
                lang: lang.lang,
            },
            '/:pathMatch(.*)*'
        );
    }
    // Create route /:pathMatch(.*)* using default project lang
    registerRoute(page404, { default: true, isDefaultPath: false, lang: defaultLang.lang }, '/:pathMatch(.*)*');
} else {
    routes.push({
        path: '/:pathMatch(.*)*',
        async beforeEnter() {
            window.location.href = '/404';
        },
    });
}

let routerOptions = {};

const isProd =
    !window.location.host.includes(
        // TODO: add staging2 ?
        '-staging.' + (process.env.WW_ENV === 'staging' ? import.meta.env.VITE_APP_PREVIEW_URL : '')
    ) && !window.location.host.includes(import.meta.env.VITE_APP_PREVIEW_URL);

if (isProd && window.wwg_designInfo.baseTag?.href) {
    let baseTag = window.wwg_designInfo.baseTag.href;
    if (!baseTag.startsWith('/')) {
        baseTag = '/' + baseTag;
    }
    if (!baseTag.endsWith('/')) {
        baseTag += '/';
    }

    routerOptions = {
        base: baseTag,
        history: createWebHistory(baseTag),
        routes,
    };
} else {
    routerOptions = {
        history: createWebHistory(),
        routes,
    };
}

router = createRouter({
    ...routerOptions,
    scrollBehavior,
});

//Trigger on page unload
let isFirstNavigation = true;
router.beforeEach(async (to, from) => {
    if (to.name === from.name) return;
    if (!isFirstNavigation) await onPageUnload();
    isFirstNavigation = false;
    wwLib.globalVariables._navigationId++;
    return;
});

//Init page
router.afterEach((to, from, failure) => {
    wwLib.$store.dispatch('front/showPageLoadProgress', false);
    let fromPath = from.path;
    let toPath = to.path;
    if (!fromPath.endsWith('/')) fromPath = fromPath + '/';
    if (!toPath.endsWith('/')) toPath = toPath + '/';
    if (failure || (from.name && toPath === fromPath)) return;
    initializeData(to);
});
/* wwFront:end */

export default router;
