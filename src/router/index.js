import React from 'react'

const routes = {
 Login : {
 path:'/login',
 component: React.lazy(() => import('../components/Login'))
 }
}

export default routes