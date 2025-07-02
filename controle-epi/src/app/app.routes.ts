import { Routes } from '@angular/router';
import { Home } from './components/pages/home/home';
import { Login } from './components/login/login';
import { Register } from './components/register/register';
import { EpiForm } from './components/forms/epi-form/epi-form';
import { UserList } from './components/lists/user-list/user-list';
import { LoanList } from './components/lists/loan-list/loan-list';
import { EpiLoanList } from './components/lists/epi-loan-list/epi-loan-list';
import { EpiList } from './components/lists/epi-list/epi-list';
import { LoanForm } from './components/forms/loan-form/loan-form';
import { UserLoanList } from './components/lists/user-loan-list/user-loan-list';
import { UpdateEpi } from './components/forms/update-epi/update-epi';
import { UpdateUser } from './components/forms/update-user/update-user';
import { DevolutionList } from './components/lists/devolution-list/devolution-list';
import { DevolutionForm } from './components/forms/devolution-form/devolution-form';
import { Devolution } from './components/lists/devolution/devolution';

export const routes: Routes = [
    {path: "", component: Login},
    {path: "home", component: Home},
    {path: "register", component: Register},
    {path: "epiForm", component: EpiForm},
    {path: "userEdit", component: UpdateUser},
    {path: "epiEdit", component: UpdateEpi},
    {path: "users", component: UserList},
    {path: "loans", component: LoanList},
    {path: "epis", component: EpiList},
    {path: "epis/:id/loans", component: EpiLoanList},
    {path: "users/:id/loans", component: UserLoanList},
    {path: "loanForm", component: LoanForm},
    {path: "loan/:id/devolution", component: Devolution},
    {path: "devolutions", component: DevolutionList},
    {path: "devolution-form/:id", component: DevolutionForm}
];
