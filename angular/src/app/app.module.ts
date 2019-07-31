import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatCardModule} from '@angular/material/card';


 
import { FormsModule, ReactiveFormsModule } from'@angular/forms';

import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';

import {MatButtonModule} from '@angular/material/button'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatInputModule} from '@angular/material/input'; 
import {MatFormFieldModule} from '@angular/material/form-field'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ForgetComponent } from './component/forget/forget.component';
import { ResetComponent } from './component/reset/reset.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatTooltipModule} from '@angular/material/tooltip'; 
import {MatSidenavModule} from '@angular/material/sidenav'; 


import {MatDialogModule} from '@angular/material/dialog'; 

import {MatMenuModule} from '@angular/material/menu';

import {MatDividerModule} from '@angular/material/divider'; 
import {MatListModule} from '@angular/material/list';
import { CreatenoteComponent } from './component/createnote/createnote.component';
import { DisplayComponent } from './component/display/display.component';
import { IconsComponent } from './component/icons/icons.component';
import { NoteupdateComponent } from './component/noteupdate/noteupdate.component';
import { LabelComponent } from './component/label/label.component';
import { EditLabelComponent } from './component/edit-label/edit-label.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
 

import {MatChipsModule} from '@angular/material/chips';
import { UpdateLabelComponent } from './component/update-label/update-label.component';
import { ArchiveComponent } from './component/archive/archive.component';
import { OnlyNoteComponent } from './component/only-note/only-note.component'; 

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
    ForgetComponent,
    ResetComponent,
    CreatenoteComponent,
    DisplayComponent,
    IconsComponent,
    NoteupdateComponent,
    LabelComponent,
    EditLabelComponent,
    UpdateLabelComponent,
    ArchiveComponent,
    OnlyNoteComponent
   
  ],
  imports: [  
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MatFormFieldModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatTooltipModule,
    MatSidenavModule,
    MatListModule,
    MatDividerModule,
    MatMenuModule,
    MatDialogModule,
    MatCheckboxModule,
    MatChipsModule
  ],
  providers: [],
  entryComponents:[
    EditLabelComponent,
    UpdateLabelComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
