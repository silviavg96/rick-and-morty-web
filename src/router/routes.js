export default (authGuard) => [
    ...authGuard([
        {
            path: '/',
            name: 'Home',
            meta: { layout: 'app' },
            redirect: { name: 'characters' },
        },
        {
            path: '/',
            name: 'characters',
            meta: { show: false, layout: 'app' },
            component: () => import(/* webpackChunkName: "characters-page" */ '@/pages/characters'),
        },
        {
            path: '/:id',
            name: 'character',
            key: 'character',
            meta: {
                show: false,
            },
            component: () =>
                import(/* webpackChunkName: "character-id-page" */ '@/pages/characters/single-character'),
        },
    ])
];