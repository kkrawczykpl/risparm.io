import { mount } from "navi";
import { Paths } from "./paths";
import HomePage from "../pages/Home";

export const routes = mount({
    [Paths.START_PAGE]: HomePage,
})