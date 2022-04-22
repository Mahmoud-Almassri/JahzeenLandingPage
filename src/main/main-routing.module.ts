import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ThemeTwoComponent } from "src/shared-module/Theme/themes/theme-two/theme-two.component";
import { HomeComponent } from "./components/home/home.component";

const routes: Routes = [
    {
    path: '',
    component: HomeComponent,
  },
  /* {
    path:'home',
    component : HomeComponent
  }, */
  //{path: 'theme-two', component: ThemeTwoComponent},
  
 /*  {
    path: 'auth', loadChildren: () => import('src/auth/auth.module').then(m => m.AuthModule)
  }, */
];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class MainRoutingModule { }
  