import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { AppComponent } from './app/app.component';
import { MainComponent } from './app/main/main.component';
import { RootGuard } from './app/rootguard.guard';

const routes: Routes = [
  { path: 'main', component: MainComponent, canActivate: [RootGuard] },
];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
