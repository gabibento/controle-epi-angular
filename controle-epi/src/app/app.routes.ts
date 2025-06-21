import { Routes } from '@angular/router';
import { Home } from './components/pages/home/home';
import { Login } from './components/login/login';
import { Register } from './components/register/register';

export const routes: Routes = [
    {path: "", component: Login},
    {path: "home", component: Home},
    {path: "register", component: Register}
];
