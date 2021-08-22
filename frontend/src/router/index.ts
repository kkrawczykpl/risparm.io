import { mount } from "navi";
import { Paths } from "./paths";
import { lazy } from "navi";

export const routes = mount({
    [Paths.START_PAGE]: lazy(() => import('../pages/Home')),
})