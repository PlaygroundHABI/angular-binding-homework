import {Component, EventEmitter, Input, Output} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FirstComponent} from "./first/first.component";
import {SecondComponent} from "./second/second.component";
import {ThirdComponent} from "./third/third.component";
import {FourthComponent} from "./fourth/fourth.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FirstComponent, SecondComponent, ThirdComponent, FourthComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  @Input()
  progressValue:number = 10;

  @Output("appOut")
  emitter:EventEmitter<number>=new EventEmitter<number>();


  setAppValue(val: number) {
    this.emitter.emit(val) ;
  }
}
