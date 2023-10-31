import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import{EditNoteComponent } from '../../components/edit-note/edit-note.component';
import {EventEmitter, Input, Output} from '@angular/core';
@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent {

  longText = `The.11111111111111111111111111111111111111`;
  @Input() noteArry: any;
  @Output() messageEventNote : EventEmitter<any> = new EventEmitter();
  noteTitle! : string
  noteContent!:string

    constructor(public dialog: MatDialog) {}
    


    SendToGet($event:any)
    {
      this.messageEventNote.emit($event);
    }

    openDialog(note:any) {
      
      const dialogRef = this.dialog.open(EditNoteComponent,{
        width:"460px",
        height:"171px",
         data:note
      });

      dialogRef.afterClosed().subscribe((result) => {
        // Handle the data returned from the dialog
        if (result) {
          this.SendToGet(result);
        }
      });
    }

   
   
}
