import { Component } from '@angular/core';
import { MutationChecker } from './components/mutation-checker/mutation-checker';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MutationChecker],
  template: `<app-mutation-checker></app-mutation-checker>`
})
export class AppComponent {}
