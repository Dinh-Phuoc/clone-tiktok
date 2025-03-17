import { HeaderOnly } from '~/component/Layouts';

import routeConfigs from '~/config/routes'
import Home from '~/pages/Home'
import Following from "~/pages/Following";
import Profile from "~/pages/Profile";
import Upload from "~/pages/Upload";


//publicRoutes
const publicRoutes = [
    { path: routeConfigs.home, component: Home },
    { path: routeConfigs.profile, component: Profile },
    { path: routeConfigs.following, component: Following },
    { path: routeConfigs.upload, component: Upload, layout: HeaderOnly }
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }