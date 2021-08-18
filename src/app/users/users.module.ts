import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InformationComponent } from './information/information.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { ContactComponent } from './contact/contact.component';
import { ApiJsonComponent } from './api-json/api-json.component';



@NgModule({
  declarations: [
    InformationComponent,
    WorkExperienceComponent,
    ContactComponent,
    ApiJsonComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    InformationComponent,
    WorkExperienceComponent,
    ContactComponent,
    ApiJsonComponent
  ]
})
export class UsersModule { }
