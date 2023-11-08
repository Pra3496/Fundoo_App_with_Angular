import { Component, OnInit, Inject } from '@angular/core';
import {EventEmitter, Input, Output} from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.scss']
})
export class EditNoteComponent implements OnInit{
  noteEdit: any;
  
  noteTitle!: any;
  noteContext!:any;
  noteId!:any;

  
  
  constructor(public dialogRef: MatDialogRef<EditNoteComponent>,@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.noteEdit = this.data;
    this.noteTitle = this.data.tittle;
    this.noteId = this.data.noteId;
    this.noteContext = this.data.note;
  }


  changeNoteTitle(e:any)
  {
    this.noteTitle = (e.target as HTMLElement).textContent?.toString();
    
  }

  changeNoteContent(e:any)
  {
    this.noteContext = (e.target as HTMLElement).textContent?.toString();
    
  }
  
  onDataUpdate(){
    let editPaylod = {
      noteId:this.noteId,
      title:this.noteTitle,
      note:this.noteContext
    }
    this.dialogRef.close(editPaylod);
  }




}
