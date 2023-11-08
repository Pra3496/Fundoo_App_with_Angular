import { Component, ElementRef, ViewChild ,OnInit,EventEmitter, Input, Output} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotesService } from 'src/app/services/notes.service';


@Component({
  selector: 'app-displaynotes',
  templateUrl: './displaynotes.component.html',
  styleUrls: ['./displaynotes.component.scss']
})
export class DisplaynotesComponent implements OnInit{
  NoteData!:FormGroup;

  constructor(private _noteService: NotesService){}


  @Output() messageEventToCreateNote : EventEmitter<any> = new EventEmitter();
  update = false;
  noteTitle!: any;
  noteContext!:any;


  ngOnInit() 
  {
     this.noteTitle = '';
     this.noteContext = '';
  }

  changeNoteTitle(e:any)
  {
    this.noteTitle = (e.target as HTMLElement).textContent?.toString();
    
  }

  changeNoteContent(e:any)
  {
    this.noteContext = (e.target as HTMLElement).textContent?.toString();
    
  }

 
  onSubmit() 
  {
    let data ={
      title:this.noteTitle,
      note:this.noteContext
    }
     
        this._noteService.CreateNote(data.title,data.note).subscribe((response:any)=>{
          console.log(response.data),
          this.messageEventToCreateNote.emit(response.data);
        });
        
        this.toggle();
        this.noteTitle = '';
        this.noteContext = '';
  }


  toggle()
  {
    
    if(this.update)
    {
      this.update = false;
    }
    else{
      this.update = true;
    }
  }

  changeDisply()
  {
    if(this.update)
    {
      return{
        'display': 'block'
      }
    }
    return{
      'display': 'none'
    }
  }

  changeDisplyflex()
  {
    if(this.update)
    {
      return{
        'display': 'flex'
      }
    }
    return{
      'display': 'none'
    }
  }

  changeDisplytriger()
  {
    if(this.update)
    {
      return{
        'display': 'none'
      }
    }
    return{
      'display': 'flex'
    }
  }




}
