import { Component, ViewChild} from '@angular/core';
import {EventEmitter, Input, Output} from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatMenuTrigger, MatMenuModule} from '@angular/material/menu';
import { ColorpickerComponent } from '../colorpicker/colorpicker.component';
@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent {
  @Input() note: any;
  @Output() messageEvent : EventEmitter<any> = new EventEmitter();
  @ViewChild('menuTrigger') menuTrigger!: MatMenuTrigger;
 
  constructor(public dialog: MatDialog){}

  openDialog() {
    const dialogRef = this.dialog.open(ColorpickerComponent, {restoreFocus: false});

    // Manually restore focus to the menu trigger since the element that
    // opens the dialog won't be in the DOM any more when the dialog closes.
    dialogRef.afterClosed().subscribe(() => this.menuTrigger.focus());
  }

  GetEvent(note:any,opt:number)
  {
    let notedata={
      noteId : note,
      opte:opt
    }
    this.messageEvent.emit(notedata);
  }

  ChangeColorEvent(note:any,opt:number,changeColor:string)
  {
    let notedatas={
      noteId : note,
      opte: opt,
      color: changeColor
    }
    this.messageEvent.emit(notedatas);
  }



}
