import { Routes, RouterModule} from '@angular/router';

import { Login } from './login';
import { Register } from './register';
import { Landing } from './app.component';

const appRoutes: Routes = [

    {
        path: 'login',
        component: Login
    },
    {
        path: 'register',
        component: Register
    },
    {
        path: 'landing',
        component: Home
    },

];

export const routing= RouterModule.forRoot(appRoutes);