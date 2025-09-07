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
// import { Contacts } from './contacts/contacts';
// import { UserLogin } from './user-login/user-login';
import { AdminLogin} from './admin-login/admin-login';
import { Newuser } from './newuser/newuser';
// import { Dashboard } from './dashboard/dashboard';
import { Explore } from './explore/explore';
import { AR } from './ar/ar';
// import { Path } from 'three';
import { CulturalCalender } from './cultural-calender/cultural-calender';
import { DigitalMurals } from './digital-murals/digital-murals';
import { UserLogin } from './user-login/user-login';
export const routes: Routes = [
  
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  
  { path: 'home', component: Home },

  { path: 'req/login', component: UserLogin },
  { path: 'req/signup', component: Newuser },

  { path: 'admin-login', component: AdminLogin },

  // { path: 'contacts', component: Contacts },

  // { path: 'dashboard', component: Dashboard },

  { path: 'explore', component: Explore },

  { path: '', component: AR},

  // { path: 'explore/digital-murals', component: DigitalMurals}

  { path: 'ar', component: AR},

  { path: 'digital-murals', component: DigitalMurals},

  { path: 'cultural-calendar', component: CulturalCalender},

  { path: '**', redirectTo: '/home' }

];
