import { mount, route } from 'navi';
import { HomePage } from './HomePage';

export default mount({
  '/': route({
    view: HomePage,
  }),
});
