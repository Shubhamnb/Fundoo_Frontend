import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ForgetComponent } from './component/forget/forget.component';
import { ResetComponent } from './component/reset/reset.component';
import { componentFactoryName } from '@angular/compiler';
import { CreatenoteComponent } from './component/createnote/createnote.component';
import { DisplayComponent } from './component/display/display.component';
import { IconsComponent } from './component/icons/icons.component';
import { NoteupdateComponent } from './component/noteupdate/noteupdate.component';
import { ArchiveComponent } from './component/archive/archive.component';
import { OnlyNoteComponent } from './component/only-note/only-note.component';

const routes: Routes = [
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  
  {
    path:'forget',
    component:ForgetComponent
  },
  {
    path:'resetpassword/:token',
    component:ResetComponent
  },{
    path:'dashboard',
    component:DashboardComponent,
    children:[
      {
        path:'',
        component:CreatenoteComponent
      },
      {
        path:'',
        component:NoteupdateComponent
      },{
        path:'archive',
        component:ArchiveComponent
      },{
        path:'onlyNote',
        component:OnlyNoteComponent
      }
      //{
      //   path:'note',
      //   component:DisplayComponent
      // }
    ]
  
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
