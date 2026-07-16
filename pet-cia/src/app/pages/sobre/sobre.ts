import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { STATS, waLink } from '../../data/site-data';

@Component({
  selector: 'app-sobre',
  imports: [RouterLink],
  templateUrl: './sobre.html',
  styleUrl: './sobre.scss',
})
export class Sobre {
  protected readonly stats = STATS;
  protected readonly wa = waLink();

  protected readonly values = [
    { icon: '❤️', title: 'O bem-estar em 1º lugar', text: 'Indicamos o que é melhor para o pet — não o que é mais caro.' },
    { icon: '🤝', title: 'Relação de confiança', text: 'Conhecemos os clientes (e os pets) pelo nome. Aqui você não é um número.' },
    { icon: '🌱', title: 'Perto de você', text: 'Somos do bairro, para o bairro. Apoiamos o comércio e as causas locais.' },
  ];

  protected readonly team = [
    { emoji: '👩‍🔧', name: 'Ana', role: 'Fundadora & atendimento' },
    { emoji: '🧑‍⚕️', name: 'Bruno', role: 'Consultor de nutrição' },
    { emoji: '👩‍🦰', name: 'Carla', role: 'Banho & tosa' },
    { emoji: '🧔', name: 'Diego', role: 'Entregas no bairro' },
  ];
}
