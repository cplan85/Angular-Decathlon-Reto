import { LandingComponent } from './components/landing/landing.component';
import { ChallengesComponent } from './components/challenges/challenges.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyReviewsComponent } from './components/my-reviews/my-reviews.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'challenges', component: ChallengesComponent },
  { path: 'my-reviews', component: MyReviewsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
