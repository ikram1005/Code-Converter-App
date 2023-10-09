import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent {
  selectedLanguage: string = 'javascript'; // Default selected language
  inputCode = '';
  outputCode = '';

  additionalInput1 = "Convert this code into";
  additionalInput2="debug this code";
  additionalInput3="check the quality of this code";

  constructor(private apiService:ApiService){}

  convertCode() {
    const combinedInput = `${this.inputCode} ${this.additionalInput1} ${this.selectedLanguage}`;

    if (combinedInput) {
      this.apiService.generateText(combinedInput).subscribe(
        (response) => {
          if (
            response.choices &&
            response.choices.length > 0 &&
            response.choices[0].message &&
            response.choices[0].message.content
          ) {
            this.outputCode = response.choices[0].message.content;
            console.log('Generated Text:', this.outputCode);
          } else {
            console.error('Invalid response format:', response);
          }
        },
        (error) => {
          console.error('API Error:', error);
        }
      );
    } else {
      // Handle case where no prompt is provided
      console.error('No prompt provided.');
    }
  }

  debugCode() {
    const combinedInput = `${this.inputCode} ${this.additionalInput2}`;

    if (combinedInput) {
      this.apiService.generateText(combinedInput).subscribe(
        (response) => {
          if (
            response.choices &&
            response.choices.length > 0 &&
            response.choices[0].message &&
            response.choices[0].message.content
          ) {
            this.outputCode = response.choices[0].message.content;
            console.log('Generated Text:', this.outputCode);
          } else {
            console.error('Invalid response format:', response);
          }
        },
        (error) => {
          console.error('API Error:', error);
        }
      );
    } else {
      // Handle case where no prompt is provided
      console.error('No prompt provided.');
    }
  }

  qualityCheck() {
    const combinedInput = `${this.inputCode} ${this.additionalInput3}`;

    if (combinedInput) {
      this.apiService.generateText(combinedInput).subscribe(
        (response) => {
          if (
            response.choices &&
            response.choices.length > 0 &&
            response.choices[0].message &&
            response.choices[0].message.content
          ) {
            this.outputCode = response.choices[0].message.content;
            console.log('Generated Text:', this.outputCode);
          } else {
            console.error('Invalid response format:', response);
          }
        },
        (error) => {
          console.error('API Error:', error);
        }
      );
    } else {
      // Handle case where no prompt is provided
      console.error('No prompt provided.');
    }
  }
}
