import { Component } from '@angular/core';
import { lorem } from 'faker';
@Component({
  selector: 'app-typing',
  templateUrl: './typing.component.html',
  styleUrls: ['./typing.component.css'],
})
export class TypingComponent {
  randomText: string = lorem.sentence();
  enteredInput: string = '';
  onInputChange(event: any): void {
    this.enteredInput = event.target.value;
  }
  compare(
    randomLetter: string,
    enteredLetter: string,
  ): 'pending' | 'incorrect-space' | 'correct' | 'incorrect-letter' {
    if (!enteredLetter) return 'pending';
    return enteredLetter === randomLetter
      ? 'correct'
      : randomLetter === ' '
        ? 'incorrect-space'
        : 'incorrect-letter';
  }
  onChangeText(): void {
    this.randomText = lorem.sentence();
    this.enteredInput = '';
  }
}
