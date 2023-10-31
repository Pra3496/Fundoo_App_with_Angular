import { Component } from '@angular/core';
import { NotesService } from 'src/app/services/notes.service';

interface Note{
  noteId:number;
  tittle:string;
  note:string;
  color:string;
  image:string; 
  isArchive:boolean; 
  isPin:boolean;
  isTrash:boolean;
  remindMe:string;
  createTime:string;
  updateTime:string;
  userId:number;
}


@Component({
  selector: 'app-get-archive',
  templateUrl: './get-archive.component.html',
  styleUrls: ['./get-archive.component.scss']
})


export class GetArchiveComponent {
  noteArryArchive: Note[] = []; 

  constructor(private notes:NotesService)
  {
    
    
  }

  ngOnInit()
  {
    this. GetAllNotes();
  }

  addToNotes(note:Note)
  {
    this.noteArryArchive.push(note);
  }

  removeFromNotes(index:any)
  {

    if (index !== -1) {
      this.noteArryArchive.splice(index, 1);
    }
  }

  GetAllNotes()
  {
    this.notes.GetNotes().subscribe((response:any)=>{
      this.noteArryArchive=response.data.filter((note:any) => note.isArchive == true),
      console.log(this.noteArryArchive)

    });
    return this.noteArryArchive;
  }

  receiveMessage($event:any)
  {
    this.IsArchive($event.noteId);
   
  }

  IsArchive(notes:any)
  {
    console.log("isArchive : "+notes);
    let index:number;
    this.notes.SetArchive(notes).subscribe((response:any)=>{
      console.log(response),
      index = this.noteArryArchive.findIndex((note) => note.noteId === notes),
        this.removeFromNotes(index),
        console.log(this.noteArryArchive)
    });
  }
}
