import { Routes } from '@angular/router';
import { Header } from './header/header';
import { Portfolio } from './portfolio/portfolio';
import { Resume } from './resume/resume';
import { Contact } from './contact/contact';
import { Home } from './home/home';

export const routes: Routes = [
     { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: Home },
    { path: 'portfolio', component: Portfolio },
    { path: 'resume', component: Resume },
    { path: 'contact', component: Contact },
];
