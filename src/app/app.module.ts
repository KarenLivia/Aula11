import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TimerComponent } from './components/timer/timer.component';
import { RouterModule } from '@angular/router';
import { TasksService } from './services/tasks.service';
import { TimerService } from './services/timer.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'tasks', component: TasksComponent },
      { path: 'timer', component: TimerComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    TasksComponent,
    TimerComponent,
  ],
  bootstrap: [AppComponent],
  providers: [TasksService, TimerService],
})
export class AppModule {}
