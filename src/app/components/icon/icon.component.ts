import { Component } from '@angular/core';
import {EventEmitter, Input, Output} from '@angular/core';
@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent {
  @Input() note: any;
  @Output() messageEvent : EventEmitter<any> = new EventEmitter();

 

  GetEvent(note:any,opt:number)
  {
    let notedata={
      noteId : note,
      opte:opt
    }
    this.messageEvent.emit(notedata);
    console.log("GetArchive Call");
  }



}
