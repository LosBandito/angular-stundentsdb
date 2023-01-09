import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app/app.component';
import { MainComponent } from './app/main/main.component';
import { AuthService } from './app/auth.service';
import { AuthGuard } from './app/auth.guard';

const routes: Routes = [
  { path: 'main', component: MainComponent, canActivate: [AuthGuard] },
];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
