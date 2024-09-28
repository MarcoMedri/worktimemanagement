// Suggested code may be subject to a license. Learn more: ~LicenseLog:1938245769.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:3612490673.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:689845531.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:1971477783.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:1034887874.

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from
 '@angular/forms'; // Import FormsModule
import { RouterModule, Routes } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker'; 
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { WorkCalculatorComponent } from './work-calculator/work-calculator.component';
import { PomodoroTimerComponent } from './pomodoro-timer/pomodoro-timer.component';


const routes: Routes = [
  { path: 'work-calculator', component: WorkCalculatorComponent },
  { path: 'pomodoro-timer', component: PomodoroTimerComponent },
  { path: '', redirectTo: '/work-calculator', pathMatch: 'full' } 
];

@NgModule({
  declarations: [
    AppComponent,
    WorkCalculatorComponent,
    PomodoroTimerComponent
  
],
  imports: [
    BrowserModule,
    FormsModule, // Add FormsModule to imports
    RouterModule.forRoot(routes),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
