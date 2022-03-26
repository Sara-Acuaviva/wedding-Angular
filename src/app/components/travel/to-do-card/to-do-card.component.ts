import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-card',
  templateUrl: './to-do-card.component.html',
  styleUrls: ['./to-do-card.component.css'],
})
export class ToDoCardComponent implements OnInit {
  @Input() image: string = '';
  @Input() title: string = '';
  @Input() description: string =
    'Recorrer sin rumbo fijo las callejuelas del centro histórico, pasando por el tradicional Barrio del Pópulo y sin olvidar el pintoresco Barrio de la Viña.';

  constructor() {}

  ngOnInit(): void {}
}
