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
  selector: 'app-get-trash',
  templateUrl: './get-trash.component.html',
  styleUrls: ['./get-trash.component.scss']
})
export class GetTrashComponent {

  noteArryTrash: Note[] = []; 

  constructor(private notes:NotesService)
  {
    
    
  }

  ngOnInit()
  {
    this. GetAllNotes();
  }

  addToNotes(note:Note)
  {
    this.noteArryTrash.push(note);
  }

  removeFromNotes(index:any)
  {

    if (index !== -1) {
      this.noteArryTrash.splice(index, 1);
    }
  }

  GetAllNotes()
  {
    this.notes.GetNotes().subscribe((response:any)=>{
      this.noteArryTrash=response.data.filter((note:any) => note.isTrash == true),
      console.log(this.noteArryTrash)

    });
    return this.noteArryTrash;
  }

  receiveMessage($event:any)
  {
    this.IsTrash($event.noteId);
   
  }



  IsTrash(notes:any)
  {
    let index:number;
    this.notes.setTrash(notes).subscribe((response:any)=>{
      console.log(response),
      index = this.noteArryTrash.findIndex((note) => note.noteId === notes),
        this.removeFromNotes(index),
        console.log(this.noteArryTrash)
    });
  }

}
