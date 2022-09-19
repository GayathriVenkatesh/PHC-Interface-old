import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { SidePanelComponent } from './side-panel/side-panel.component';
import { ViewPatientsComponent } from './view-patients/view-patients.component';
import { ViewFollowupsComponent } from './view-followups/view-followups.component';
import { ViewPatientFollowupsComponent } from './view-patient-followups/view-patient-followups.component';
import { EnterFollowupComponent } from './enter-followup/enter-followup.component';
import { WorkerDetailsComponent } from './worker-details/worker-details.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';

const routes: Routes = [
  // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'list-patients', component: ViewPatientsComponent },
  { path: 'patient/:id', component: PatientDetailsComponent },
  { path: 'list-followups', component: ViewFollowupsComponent },
  { path: 'list-followups/:id', component: ViewPatientFollowupsComponent },
  { path: 'worker-details/:id', component: WorkerDetailsComponent },
  { path: 'add-followup', component: EnterFollowupComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}