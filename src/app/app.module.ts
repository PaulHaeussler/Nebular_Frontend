import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SpaceComponent } from './space/space.component';
import { RouterModule, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MaterialModule } from './material.module';
import { ModalComponent } from './modal/modal.component';
import { InfoModalComponent } from './info-modal/info-modal.component';
import { LoginComponent } from './login/login.component';
import { MatCardModule } from '@angular/material';
import { ProfileComponent } from './profile/profile.component';
import { SignupModalComponent } from './signup-modal/signup-modal.component';


const appRoutes: Routes = [
  {
    path: 'space',
    component: SpaceComponent,
    data: { title: 'Name your space' }
  },
  {
    path: '',
    redirectTo: '/space',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Loginmask' }
  },
  {
    path: 'profile',
    component: ProfileComponent,
    data: { title: 'Profilpage' }
  },
  // redirect for "page not found", probably needed later:
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SpaceComponent,
    NavigationComponent,
    ModalComponent,
    InfoModalComponent,
    LoginComponent,
    ProfileComponent,
    SignupModalComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    MatIconModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule
  ],
  providers: [],
  entryComponents: [
    ModalComponent,
    InfoModalComponent,
    LoginComponent,
    SignupModalComponent,
    ProfileComponent,
    SpaceComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
