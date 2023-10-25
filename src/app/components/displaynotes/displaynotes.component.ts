import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-displaynotes',
  templateUrl: './displaynotes.component.html',
  styleUrls: ['./displaynotes.component.scss']
})
export class DisplaynotesComponent {
  @ViewChild('myDiv', { static: false }) myDiv!: ElementRef;
  @ViewChild('myicon', { static: false }) myicon!: ElementRef;

  // Function to toggle the display property of the div
  toggleDiv() {
    const divElement = this.myDiv.nativeElement as HTMLDivElement;
    const divElement1 = this.myicon.nativeElement as HTMLDivElement;
    if (divElement.style.display === 'none') {
      divElement.style.display = 'block'; // or any other display value
      divElement1.style.display = 'block';
    } else {
      divElement.style.display = 'none';
      divElement1.style.display = 'none';
    }
  }
}
