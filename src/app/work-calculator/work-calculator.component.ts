// Suggested code may be subject to a license. Learn more: ~LicenseLog:4025488052.

import { Component } from '@angular/core';

@Component({
  selector: 'app-work-calculator',
  templateUrl: './work-calculator.component.html',
  styleUrls: ['./work-calculator.component.css']
})
export class WorkCalculatorComponent {
  startTime!: string;
  breakTime!: number;
  hoursToWork!: number;
  endTime!: string;
  hoursWorked: number | null = null;
  extraTime: number | null = null;

  calculate() {
    if (this.endTime) {
      // Calculate based on end time
      const [startHours, startMinutes] = this.startTime.split(':').map(Number);
      const [endHours, endMinutes] = this.endTime.split(':').map(Number);

      const startTotalMinutes = startHours * 60 + startMinutes;
      const endTotalMinutes = endHours * 60 + endMinutes;
      let workedMinutes = endTotalMinutes - startTotalMinutes - this.breakTime;

      if (workedMinutes < 0) {
        workedMinutes += 24 * 60; // Handle cases where end time is earlier than start time (next day)
      }

      this.hoursWorked = workedMinutes / 60;
    } else {
      // Calculate based on hours to work
      this.hoursWorked = this.hoursToWork - this.breakTime / 60;
    }

    this.extraTime = this.hoursWorked - this.hoursToWork;
  }
}
