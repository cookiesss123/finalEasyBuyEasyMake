import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/admin',
    component: () => import('../views/DashboardLayout.vue'),
    children: [
      {
        path: 'coupons',
        component: () => import('../views/admin/AdminCoupons.vue')
      },
      {
        path: 'orders',
        component: () => import('../views/admin/AdminOrders.vue')
      },
      {
        path: 'products',
        component: () => import('../views/admin/AdminProducts.vue')
      },
      {
        path: 'recipes',
        component: () => import('../views/admin/AdminRecipes.vue')
      },
      {
        path: 'drawing',
        component: () => import('../views/admin/AdminDrawing.vue')
      }
    ]
  },
  {
    path: '',
    redirect: 'home', // 一開始進到的頁面
    component: () => import('../views/FrontLayout.vue'),
    children: [
      {
        name: 'homePage',
        path: 'home',
        component: () => import('../views/front/HomeView.vue')
      },
      {
        path: 'checkout',
        component: () => import('../views/front/CheckOut.vue')
      },
      {
        path: 'products',
        component: () => import('../views/front/ProductsView.vue'),
        name: 'products', // 使用跨頁傳參數必須寫
        props: true // 這個也要寫
      },
      {
        path: 'products/:id',
        component: () => import('../views/front/ProductView.vue')
      },
      {
        path: 'recipes',
        component: () => import('../views/front/RecipesView.vue'),
        name: 'RecipesView', // 使用跨頁傳參數必須寫
        props: true // 這個也要寫
      },
      {
        path: 'recipes/:id',
        component: () => import('../views/front/RecipeView.vue')
      },
      {
        path: 'bookmarks',
        component: () => import('../views/front/BookMarks.vue')
      },
      {
        path: 'discounts',
        component: () => import('../views/front/SpecialOffers.vue'),
        name: 'discountsView', // 使用跨頁傳參數必須寫
        props: true // 這個也要寫
      },
      {
        path: 'member',
        component: () => import('../views/front/MemberShip.vue')
      },
      {
        path: 'orderSuccess',
        component: () => import('../views/front/OrderSuccess.vue')
      },
      {
        path: 'orders/:id',
        component: () => import('../views/front/OrderDetails.vue')
      },
      {
        path: 'discounts/:id',
        component: () => import('../views/front/SpecialOffer.vue')
      },
      {
        path: 'login',
        component: () => import('../views/front/LoginView.vue')
      },
      {
        path: 'signup',
        component: () => import('../views/front/SignUp.vue')
      },
      // 404頁面
      {
        path: '/:pathMatch(.*)*',
        component: () => import('../views/front/NotFound.vue')
      }
    ]
  },

  // 重新導向????
  {
    path: '/newPage/:pathMatch(.*)*',
    redirect: {
      name: 'homePage'
    }
  }
  // {
  //   path: '/loginSignup',
  //   component: () => import('../views/LoginSignup.vue'),
  //   children: [
  //   ]
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active-link',
  routes
})

export default router
