import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {

  @Input('placeholder')
  text = "type here"

  clear(input: { value: string; }) {
    console.log("Clear...")
    input.value = ''
  }
}