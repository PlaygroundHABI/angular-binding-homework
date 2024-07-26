import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-second',
  standalone: true,
  imports: [],
  templateUrl: './second.component.html',
  styleUrl: './second.component.css'
})
export class SecondComponent {
  @Input()
  secondValue: number=0;

  @Output("firstOut")
  emitter:EventEmitter<number>=new EventEmitter<number>();

  updateFirstValue(value: number) {
    this.emitter.emit(value);
  }
}
