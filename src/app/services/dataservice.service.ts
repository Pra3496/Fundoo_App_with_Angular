import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NotesService } from '../services/notes.service';

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

@Injectable({
  providedIn: 'root'
})



export class DataserviceService {

  noteArry!: any[]; 
  private messageSource = new BehaviorSubject<any[]>(this.noteArry); 
  currentMessage = this.messageSource.asObservable();


  private dataSubject = new BehaviorSubject<string>('');
  data$ = this.dataSubject.asObservable();
  

  constructor(private notes:NotesService)
  {
   
  }

  changeMessage(NoteArr: any[]) {
    this.messageSource.next(NoteArr)
  }

  changedata(msg: any) {
    this.dataSubject.next(msg);
  }

  
}
