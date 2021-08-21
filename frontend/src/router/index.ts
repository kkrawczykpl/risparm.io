import { lazy, mount } from "navi";
import { Paths } from "./paths";

// Pages
const HomePage = lazy(() => import('../pages/Home'));

export const routes = mount({
    [Paths.START_PAGE]: HomePage,
})