import { Component,OnInit,OnDestroy, EventEmitter,Output } from '@angular/core';
import { NotesService } from 'src/app/services/notes.service';
import { Observable, throwError } from 'rxjs';
import { catchError, window } from 'rxjs/operators';
import { Router } from '@angular/router';
import { DataserviceService } from 'src/app/services/dataservice.service';
import { Subscription } from 'rxjs';

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
  selector: 'app-get-allnotes',
  templateUrl: './get-allnotes.component.html',
  styleUrls: ['./get-allnotes.component.scss']
})




export class GetAllnotesComponent implements OnInit, OnDestroy {
  
  
  responseSuccessul = false;
  myValue!: string;
  
  noteArry: Note[] = []; 
  subscription!: Subscription;
  constructor(private notes:NotesService,private router: Router, private dataservice:DataserviceService)
  {
    
  }

  ngOnInit() {
    
    this.GetAllNotes();
    if(this.responseSuccessul)
    {
      localStorage.removeItem('token');
      this.router.navigateByUrl('/login');
    }
    this.subscription = this.dataservice.currentMessage.subscribe(note => this.noteArry = note);

    if (!this.myValue) {
      this.noteArry = this.noteArry;
    }
  
    
    console.log(this.noteArry);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  GetAllNotes()
  {
    let noteArryRespone:any[];
    this.notes.GetNotes().subscribe((response:any)=>{
      noteArryRespone=response.data.filter((note:any) => note.isArchive == false && note.isPin == false && note.isTrash == false),
      this.dataservice.changeMessage(noteArryRespone);
      this.subscription = this.dataservice.currentMessage.subscribe(note => this.noteArry = note);
      console.log(this.noteArry);
      this.responseSuccessul = true
    });


    
  }

  NoteSerch(event:any)
  {
   
    console.log(event.target.value);

  }



  receiveMessage($event:any):void
  {
    let dataColor = {
      noteId:$event.noteId,
      option:$event.opte,
      color:$event.color
    }
    if($event.color != null)
    {
      this.SetFuctionfromNote(dataColor);
      return;
    }
    let data = {
      noteId:$event.noteId,
      option:$event.opte,
      title:$event.title,
      note:$event.note
    }

    if(data.option == null)
    {
      this.UpdateNote(data);
      return;
    }

    

    this.SetFuctionfromNote(data);
  }

  SetFuctionfromNote(data:any):void
  {
    let number = Number(data.option);
    switch (number) {
      case 1:
        alert("switch 1");
        break;
      case 2:
        alert("switch 2");
        break;
      case 3:
        this.changeColor(data);
        break;
      case 4:
        alert("switch 4");
        break;
      case 5:
        this.IsArchive(data.noteId);
        break;
      case 6:
        this.IsTrash(data.noteId);
        break;
      default:
        alert("switch 0");
        break;
    }
  }

  SendToGetFromDisplay($event:any)
  {
    let Notedata = {
      noteId:$event.noteId,
      tittle:$event.tittle,
      note:$event.note,
      color:$event.color,
      image:$event.image, 
      isArchive:$event.isArchive, 
      isPin:$event.isPin,
      isTrash:$event,
      remindMe:$event.remindMe,
      createTime:$event.createTime,
      updateTime:$event.updateTime,
      userId:$event.userId
    }
    
    this.addToNotes(Notedata);
//
  }

  addToNotes(note:Note)
  {
    this.noteArry.unshift(note);
  }

  removeFromNotes(index:any)
  {

    if (index !== -1) {
      this.noteArry.splice(index, 1);
    }
  }

  UpdateNoteArry(data:any)
  {
    if(data.note != null)
    {
      for (const note of this.noteArry) {
        if(note.noteId === data.noteId)
        {
          note.tittle = data.tittle;
          note.note = data.note;
          break;
        }
      }
      console.log(this.noteArry);
      return;
    }
    for (const note of this.noteArry) {
      if(note.noteId === data.noteId)
      {
        note.color = data.color;
        
        break;
      }
    }

    

    
  }



  UpdateNote(noteUpdatedata:any)
  {
    let index:number;
    let itemToUpdate!:Note;

    let payload = {
      tittle: noteUpdatedata.title,
      note: noteUpdatedata.note
    }

    let payloadForArray = {
      noteId: noteUpdatedata.noteId,
      tittle: noteUpdatedata.title,
      note: noteUpdatedata.note
    }
//
    this.notes.UpdateNote(noteUpdatedata).subscribe((response:any)=>{
      this.UpdateNoteArry(payloadForArray)
      // index = this.noteArry.findIndex((note) => note.noteId === response.data.noteId),
      // this.removeFromNotes(index),
      // itemToUpdate =  response.data,

      // this.addToNotes(itemToUpdate),
      // console.log(itemToUpdate)
    });
  }
 
  changeColor(notedata:any)
  {
    this.UpdateNoteArry(notedata);
  }




  IsTrash(notes:any)
  {
    let index:number;
    this.notes.setTrash(notes).subscribe((response:any)=>{
      console.log(response),
      index = this.noteArry.findIndex((note) => note.noteId === notes),
      this.removeFromNotes(index),
      console.log(this.noteArry)
    });
  }

  IsArchive(notes:any)
  {
    console.log("isArchive : "+notes);
    let index:number;
    this.notes.SetArchive(notes).subscribe((response:any)=>{

      console.log(response),
      index = this.noteArry.findIndex((note) => note.noteId === notes),
        this.removeFromNotes(index),
        console.log(this.noteArry)
    });
  }

  IsPin(note:any)
  {
    this.notes.SetArchive(note).subscribe((response:any)=>{
      console.log(response),
      console.log(this.noteArry)
    });
  }
 
}

//
