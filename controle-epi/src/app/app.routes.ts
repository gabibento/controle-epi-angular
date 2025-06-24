import { Routes } from '@angular/router';
import { Home } from './components/pages/home/home';
import { Login } from './components/login/login';
import { Register } from './components/register/register';
import { EpiForm } from './components/epi-form/epi-form';
import { UserList } from './components/user/user-list/user-list';
import { LoanList } from './components/loan/loan-list/loan-list';
import { EpiLoanList } from './components/epi-loan-list/epi-loan-list';
import { EpiList } from './components/epi/epi-list/epi-list';
import { LoanForm } from './components/loan/loan-form/loan-form';
import { UserLoanList } from './components/user-loan-list/user-loan-list';

export const routes: Routes = [
    {path: "", component: Login},
    {path: "home", component: Home},
    {path: "register", component: Register},
    {path: "epiForm", component: EpiForm},
    {path: "users", component: UserList},
    {path: "loans", component: LoanList},
    {path: "epis", component: EpiList},
    {path: "epis/:id/loans", component: EpiLoanList},
    {path: "users/:id/loans", component: UserLoanList},
    {path: "loanForm", component: LoanForm}
];
