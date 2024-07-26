import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [],
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})
export class FirstComponent {

  @Input()
  firstValue:number=0;

  @Output("firstValueChange")
  emitter:EventEmitter<number>=new EventEmitter<number>();

  setFirstValue(value: number) {
    this.emitter.emit(value);
  }
}
