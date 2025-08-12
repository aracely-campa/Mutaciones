import { Component } from '@angular/core';
import { Dna} from '../../services/dna';
import { CommonModule, DecimalPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mutation-checker',
  templateUrl: './mutation-checker.html',
  styleUrls: ['./mutation-checker.css'],
  imports: [CommonModule, FormsModule, DecimalPipe]
})
export class MutationCheckerComponent {
  dnaInput: string = '';
  result: string = '';
  stats: any;

  constructor(private dnaService: Dna) {}

  checkMutation() {
    const dnaArray = this.dnaInput
      .split('\n')
      .map(line => line.trim())
      .filter(line => line.length > 0);

    if (dnaArray.length < 4) {
      this.result = '❌ Debes ingresar al menos 4 cadenas de ADN.';
      return;
    }

    this.dnaService.checkMutation(dnaArray).subscribe({
      next: (res) => {
        this.result = res.mutation
          ? '🧬 Se detectó mutación'
          : '✅ No se detectó mutación';
      },
      error: () => {
        this.result = '⚠️ Error al verificar mutación.';
      }
    });
  }

  loadStats() {
    this.dnaService.getStats().subscribe({
      next: (res) => {
        this.stats = res;
      },
      error: () => {
        this.result = '⚠️ Error al obtener estadísticas.';
      }
    });
  }
}
