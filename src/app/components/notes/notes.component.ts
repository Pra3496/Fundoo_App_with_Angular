import { Component, ElementRef, ViewChild } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import{EditNoteComponent } from '../../components/edit-note/edit-note.component';
import {EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent {

  element!: any;
  @Input() noteArry: any;
  @Output() messageEventNote : EventEmitter<any> = new EventEmitter();
  noteTitle! : string
  noteContent!:string
  setColor:any


    constructor(public dialog: MatDialog) {}
    


    SendToGet($event:any)
    {
      this.messageEventNote.emit($event);
    }

    openDialog(note:any) {

      let idName = String(note.noteId);
      
      this.element = document.getElementById(idName);
      this.element.style.opacity = '0';
      
  

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
        this.element.style.opacity = '100';
        this.setColor = 'orange';
      });
    }

    changecolor(chcolor:any){
      return {
        'background-color': chcolor.color
        // 'background-image': 'url("../../../assets/images/back2.svg")'
      };
    }

  
   
   
}
