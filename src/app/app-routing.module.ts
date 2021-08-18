import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformationComponent } from './users/information/information.component';
import { WorkExperienceComponent } from './users/work-experience/work-experience.component';
import { ContactComponent } from './users/contact/contact.component';
import { ApiJsonComponent } from './users/api-json/api-json.component';

const routes: Routes = [
  {path: 'information', component: InformationComponent},
  {path: 'workexperience', component: WorkExperienceComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'apijson', component: ApiJsonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [InformationComponent,WorkExperienceComponent,ContactComponent]
