import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { STORE, waLink } from '../../data/site-data';

@Component({
  selector: 'app-contato',
  imports: [FormsModule],
  templateUrl: './contato.html',
  styleUrl: './contato.scss',
})
export class Contato {
  protected readonly store = STORE;
  protected readonly wa = waLink();
  protected readonly sent = signal(false);

  protected form = { nome: '', email: '', telefone: '', mensagem: '' };

  /** Link para abrir o endereço no Google Maps em nova aba. */
  protected readonly mapsUrl =
    'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(STORE.address);

  submit(valid: boolean | null | undefined): void {
    if (!valid) return;
    // Formulário demonstrativo: no site final, aqui enviaríamos para o e-mail/CRM da loja.
    this.sent.set(true);
    this.form = { nome: '', email: '', telefone: '', mensagem: '' };
  }
}
