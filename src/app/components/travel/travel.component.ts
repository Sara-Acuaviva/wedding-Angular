import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css'],
})
export class TravelComponent implements OnInit {
  planList = [
    {
      image: '/assets/imagenes/catedral.jpg',
      title: 'Catedral de Cádiz',
      description: 'Llamativa por su diversidad de estilos arquitectónicos, ya que las obras de construcción duraron más de 100 años!',
    },
    {
      image: '/assets/imagenes/dama.jpg',
      title: 'Museo Arqueológico',
      description: 'Lleno de piezas de diferentes civilizaciones que habitaron en Cádiz, una de sus piezas más famosas: el sarcófago fenicio "Dama de Cádiz".',
    },
    {
      image: '/assets/imagenes/caleta.jpg',
      title: 'Atardecer en la Caleta',
      description: 'Disfrutar de uno de los atardeceres más bonitos del mundo en la playa de la Caleta.',
    },
    {
      image: '/assets/imagenes/torre-tavira.jpg',
      title: 'Torre Tavira',
      description: 'Una de las muchas torres miradores de Cádiz, famosa por su cámara oscura ¡Una visita obligada en la ciudad!',
    },
    {
      image: '/assets/imagenes/pescao-frito.jpg',
      title: 'Una de pescaito frito!',
      description: 'No puedes irte de Cádiz sin probar un cartucho de "pescao frito" en alguno de las freidurías del centro (Europa o Las Flores). No puedes dejar de probar el "cazón en adobo".',
    },
    {
      image: '/assets/imagenes/el-manteca.jpg',
      title: 'Tapeo en "El Manteca"',
      description: 'Tampoco puedes ir a Cádiz y no pasar por la Taberna "El Manteca", uno de los sitios más típicos para tapear en Cádiz! Recomendación: una de "chicharrones especiales" y mojama!',
    },
    {
      image: '/assets/imagenes/calle-sagasta.jpg',
      title: 'Perderse por sus calles',
      description: 'Recorrer sin rumbo fijo las callejuelas del centro histórico, pasando por el tradicional Barrio del Pópulo y sin olvidar el pintoresco Barrio de la Viña.',
    },
    {
      image: '/assets/imagenes/castillo-st-catalina.jpg',
      title: 'Castillo de Santa Catalina',
      description: 'Fortificación del siglo XVI situada en la playa de La Caleta, que se adentra en el mar graciasa unas escolleras. Llama la atención las puntas que a manera de estrella salen al mar.',
    },
    {
      image: '/assets/imagenes/castillo-san-sebastian.jpg',
      title: 'Castillo de San Sebastián',
      description: 'Fortaleza de la ciudad ubicada en uno de los extremos de la playa de La Caleta, sobre un pequeño islote. Lo puedes visitar solo por fuera pero merece la pena sobretodo al atardecer.',
    },
    {
      image: '/assets/imagenes/momumento a las cortes.jpg',
      title: 'El monumento a las Cortes de 1812',
      description: 'Monumento conmemorativo que recuerda la Constitución de 1812 ubicado en la Plaza de España de Cádiz. Al estar en la plaza lo puedes ver a cualquier hora y gratis!',
    },
    {
      image: '/assets/imagenes/teatro-romano.jpg',
      title: 'Teatro Romano',
      description: 'Construido hacia el 70 a.C. cuando el Gaditano Lucio Cornelio Balbo "el Mayor", amigo personal y consejero de Julio César.',
    },
    {
      image: '/assets/imagenes/playa-victoria.jpg',
      title: 'Paseos infinitos por las playas',
      description: 'Kilómetros de playa para recorrer y disfrutar de la brisa y el sonido del mar.',
    },
   
  ];

  constructor() {}

  ngOnInit(): void {}
}
