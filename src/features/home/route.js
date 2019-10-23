import { Questions, DetailQuestion } from './';

export default {
 path: '',
  name: 'test',
  isIndex:true,
  childRoutes: [
    { path: '/:id', name: 'Detail Question', component: DetailQuestion },
    { path: '/', name: 'Question', component: Questions },
  ],
};
