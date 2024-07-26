import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-fourth',
  standalone: true,
  imports: [],
  templateUrl: './fourth.component.html',
  styleUrl: './fourth.component.css'
})
export class FourthComponent {

  @Input()
  fourthValue:number=0;

  @Output("fourthValueChange")
  emitter:EventEmitter<number>=new EventEmitter<number>();

  updateFourthValue(value: number) {
    this.emitter.emit(value);
  }
}
