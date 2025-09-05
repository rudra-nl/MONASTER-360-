// import { Routes } from '@angular/router';
// import { Home } from './home/home';
// import { Contacts } from './contacts/contacts';
// export const routes: Routes = [
//     { path: '', redirectTo: '/home', pathMatch: 'full' },
//     {
//         path: "home",
//         component: Home
//     },

//     {
//         path: "contacts",
//         component: Contacts
//     }
// ];

import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Contacts } from './contacts/contacts';
import { UserLogin } from './user-login/user-login';
import { AdminLogin} from './admin-login/admin-login';
import { Newuser } from './newuser/newuser';
import { Dashboard } from './dashboard/dashboard';
import { Explore } from './explore/explore';
export const routes: Routes = [
  
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  
  { path: 'home', component: Home },

  { path: 'user-login', component: UserLogin },
  { path: 'newuser', component: Newuser },

  { path: 'admin-login', component: AdminLogin },

  { path: 'contacts', component: Contacts },

  { path: 'dashboard', component: Dashboard },

  { path: 'explore', component: Explore },

  { path: '**', redirectTo: '/home' }

];
