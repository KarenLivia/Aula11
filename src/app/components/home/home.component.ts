import { Component, OnInit } from '@angular/core';
import { TimerService } from '../../services/timer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  private timer: any;
  public counter: number = 0;

  constructor(public serviceTimer: TimerService) {
    this.timer = setInterval(() => {
      this.counter++;
    }, 1000);
  }

  ngOnInit() {}
}
