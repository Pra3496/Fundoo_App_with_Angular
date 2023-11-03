import { Component, OnInit, OnDestroy } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import{EditNoteComponent } from '../../components/edit-note/edit-note.component';
import {EventEmitter, Input, Output} from '@angular/core';
import { NotesService } from 'src/app/services/notes.service';
import { DataserviceService } from 'src/app/services/dataservice.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent {

  element!: any;
  @Input() noteArry: any;
  noteArrData:any;
  subscription!: Subscription;
  subscription_!: Subscription;
  @Output() messageEventNote : EventEmitter<any> = new EventEmitter();
  noteTitle! : string
  noteContent!:string
  setColor:any
  myValue:string='';


    constructor(public dialog: MatDialog, private noteservice:NotesService, private dataservice:DataserviceService) {}
    
    ngOnInit() {
      this.subscription = this.dataservice.currentMessage.subscribe(note => this.noteArrData = note);
      this.subscription_ = this.dataservice.data$.subscribe(data => this.myValue = data);
    }
  
    ngOnDestroy() {
      this.subscription.unsubscribe();
    }


    SendToGet($event:any)
    {
      //this.messageEventNote.emit($event);
      console.log($event.color);
      this.ChangeColorFromNote($event);
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

    changeImage(chImg:any){
      if(chImg == null)
      {
        return {
          'background-image': 'none'
        };
      }
      return {
        'background-image': chImg.image
      };
    }

    ChangeColorFromNote(data:any)
    {
      this.noteservice.UpdateColor(data).subscribe((response:any)=>{
        
        for (const note of this.noteArrData) {
          if(note.noteId === data.noteId)
          {
            note.color = data.color;
            break;
          }
        }
        this.dataservice.changeMessage(this.noteArrData);
        console.log(this.noteArrData);

      });
    }

  
   
   
}
