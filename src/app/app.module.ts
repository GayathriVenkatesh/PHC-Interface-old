import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';

import { AppRoutingModule } from './app-routing.module';
import { SidePanelComponent } from './side-panel/side-panel.component';
import { PatientTableComponent } from './patient-table/patient-table.component';
import { FollowupTableComponent } from './followup-table/followup-table.component';
import { ViewPatientsComponent } from './view-patients/view-patients.component';
import { ViewFollowupsComponent } from './view-followups/view-followups.component';
import { PatientFollowupTableComponent } from './patient-followup-table/patient-followup-table.component';
import { ViewPatientFollowupsComponent } from './view-patient-followups/view-patient-followups.component';
import { EnterFollowupComponent } from './enter-followup/enter-followup.component';
import { WorkerDetailsComponent } from './worker-details/worker-details.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    SidePanelComponent,
    PatientTableComponent,
    FollowupTableComponent,
    ViewPatientsComponent,
    ViewFollowupsComponent,
    PatientFollowupTableComponent,
    ViewPatientFollowupsComponent,
    EnterFollowupComponent,
    WorkerDetailsComponent,
    PatientDetailsComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }