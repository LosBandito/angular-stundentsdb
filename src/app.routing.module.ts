import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { AppComponent } from './app/app.component';
import { MainComponent } from './app/main/main.component';
import { LoggedInGuard } from './logged.service';

const routes: Routes = [
  { path: 'main', component: MainComponent, canActivate: [LoggedInGuard] },
];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
