// Suggested code may be subject to a license. Learn more: ~LicenseLog:2445927657.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:3820773438.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:1736114218.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:2372913683.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:189585346.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:2669835314.

import { Component } from '@angular/core';

 @Component({
   selector: 'app-pomodoro-timer',
   templateUrl: './pomodoro
-timer.component.html',
   styleUrls: ['./pomodoro-timer.component.css']
 })
 export class PomodoroTimerComponent {
   workTime = 25 * 60; // 25 minutes
   breakTime = 5 * 60; // 5 minutes
   currentTime = this.workTime;
   isWorking = true;
   timerInterval: any;
   displayTime = this.formatTime(this.currentTime);

   formatTime(seconds: number): string {
     const minutes = Math.floor(seconds / 60);
     const remainingSeconds = seconds % 60;
     return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
   }

   startTimer() {
     if (!this.timerInterval) {
       this.timerInterval = setInterval(() => {
         this.currentTime--;
         this.displayTime = this.formatTime(this.currentTime);

         if (this.currentTime === 0) {
           this.switchState();
         }
       }, 1000);
     }
   }

   pauseTimer() {
     clearInterval(this.timerInterval);
     this.timerInterval = null;
   }

   resetTimer() {
     this.pauseTimer();
     this.currentTime = this.isWorking ? this.workTime : this.breakTime;
     this.displayTime = this.formatTime(this.currentTime);
   }

   switchState() {
     this.isWorking = !this.isWorking;
     this.currentTime = this.isWorking ? this.workTime : this.breakTime;
     this.displayTime = this.formatTime(this.currentTime);
   }
 }
