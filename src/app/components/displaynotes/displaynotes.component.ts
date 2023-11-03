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

  constructor(private formBuilder: FormBuilder,private _noteService: NotesService){}

  @ViewChild('myDiv', { static: false }) myDiv!: ElementRef;
  @ViewChild('myicon', { static: false }) myicon!: ElementRef;

  @Output() messageEventToCreateNote : EventEmitter<any> = new EventEmitter();



  // Function to toggle the display property of the div
  toggleDiv() {
    const divElement = this.myDiv.nativeElement as HTMLDivElement;
    const divElement1 = this.myicon.nativeElement as HTMLDivElement;

    if (divElement.style.display === 'none') {
      divElement.style.display = 'block'; // or any other display value
      divElement1.style.display = 'block';
    
    } else {
      divElement.style.display = 'none';
      divElement1.style.display = 'none';

    }
  }

  ngOnInit() 
  {
      this.NoteData = this.formBuilder.group({
        tittle:['',Validators.required],
        note:['',Validators.required]
      
      });
  }

  get f() { return this.NoteData.controls; }
  onSubmit() 
  {
      

      if (this.NoteData.invalid) {
          return;
      }
      else{
        this._noteService.CreateNote(this.NoteData.value.tittle,this.NoteData.value.note).subscribe((response:any)=>{
          console.log(response.data),
          this.messageEventToCreateNote.emit(response.data);
        });
    
        this.onReset();
      }
      
     
  }

  onReset() 
  {
      
      this.NoteData.reset();
  }




}
