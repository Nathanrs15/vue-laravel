export default [
    {
        path: '*',
        redirect: '/'
    },
    {
        path: '/',
        name: 'Inicio',
        component: () => import('../pages/Home.vue'),
        meta: {
            auth: undefined,
        }
    },
    {
        path: '/login',
        name: 'Iniciar sesión',
        component: () => import('../pages/Login.vue'),
        meta: {
            auth: false,

        }
    },
    // USER ROUTES
    {
        path: '/dashboard',
        name: 'Usuario',
        component: () => import('../pages/UserDashboard.vue'),
        meta: {
            auth: true,

        }
    },
    // ADMIN ROUTES
    {
        path: '/usuers',
        name: 'Usuarios',
        component: () => import('../pages/user/UserTabComponent.vue'),
        meta: {
            auth: { roles: 1, redirect: { path: '/login' }, forbiddenRedirect: '/403' }
        }
    },
    {
        path: '/focus',
        name: 'Focos de emisiones',
        component: () => import('../pages/Focus.vue'),
        meta: {
            auth: { roles: 1, redirect: { path: '/login' }, forbiddenRedirect: '/403' },

        }
    },
]


