import configs from '../configs';

// Components
import Home from '../pages/Home';
import Pricing from '../pages/Pricing';
import Explore from '../pages/Explore';
import Comming from '../pages/Comming';
import Library from '../pages/Library';
import History from '../pages/History';
import Detail from '../pages/Detail';
import Saved from '../pages/Saved';
import Browse from '../pages/Browse';

const publicRoutes = [
    {
        path: configs.routes.home,
        component: Home,
    },
    {
        path: configs.routes.browse,
        component: Browse,
    },
    {
        path: configs.routes.explore,
        component: Explore,
    },
    {
        path: configs.routes.comming,
        component: Comming,
    },
    {
        path: configs.routes.library,
        component: Library,
    },
    {
        path: configs.routes.saved,
        component: Saved,
    },
    {
        path: configs.routes.history,
        component: History,
    },
    {
        path: configs.routes.detail,
        component: Detail,
    },
    {
        path: configs.routes.pricing,
        component: Pricing,
    },
];

const privateRoutes = [];

export { privateRoutes, publicRoutes };
