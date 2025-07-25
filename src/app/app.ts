import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Navigation} from './navigation/navigation';

// This entry point component only renders the nav & router outlet
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navigation],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
}
