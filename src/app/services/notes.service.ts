import { Injectable } from '@angular/core';
import { HttpservicesService} from '../services/httpservices.service';
import { HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class NotesService {
 
  authToken!:any;
  resposes:any;
  constructor(private httpservice: HttpservicesService) { 
    this.authToken = localStorage.getItem("token");
  }

  CreateNote(title:string, note:string)
  {
    let header = {
      headers: new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization': 'Bearer '+this.authToken 
      }),
    };

    let payload = {
      tittle: title,
      note: note,
      color: null,
      image: null,
      remindMe: null
    }


    return this.httpservice.postService("/Note",payload,true,header);

  }

    GetNotes()
    {
      let header = {
        headers: new HttpHeaders({
          'Content-Type' : 'application/json',
          'Authorization': 'Bearer '+this.authToken
          
        }),
      };

      return this.httpservice.getService("/Note",true,header);
    }


    SetArchive(noteId:any)
    {
      let header = {
        headers: new HttpHeaders({
          'Content-Type' : 'application/json',
          'Authorization': 'Bearer '+this.authToken
          
        }),
      };

      let payload = {
        noteId:noteId
      }

      return this.httpservice.PatchServiceUri("/Note/Archive?NoteId="+noteId,payload,true,header);
    }

    setPin(noteId:any)
    {
      let header = {
        headers: new HttpHeaders({
          'Content-Type' : 'application/json',
          'Authorization': 'Bearer '+this.authToken
          
        }),
      };

      let payload = {
        noteId:noteId
      }

      return this.httpservice.PatchServiceUri("/Note/Pin?NoteId="+noteId,payload,true,header);
    }

    setTrash(noteId:any)
    {
      let header = {
        headers: new HttpHeaders({
          'Content-Type' : 'application/json',
          'Authorization': 'Bearer '+this.authToken
          
        }),
      };

      let payload = {
        noteId:noteId
      }

      return this.httpservice.PatchServiceUri("/Note/Trash?NoteId="+noteId,payload,true,header);
    }


    UpdateNote(data:any)
    {
      let header = {
        headers: new HttpHeaders({
          'Content-Type' : 'application/json',
          'Authorization': 'Bearer '+this.authToken 
        }),
      };
  
      let payload = {
        tittle: data.title,
        note: data.note,
        color: null,
        image: null,
        remindMe: null
      }
  
  
      return this.httpservice.PutServiceUri("/Note?NoteId="+data.noteId,payload,true,header);
  
    }

    
    UpdateColor(data:any)
    {
      let header = {
        headers: new HttpHeaders({
          'Content-Type' : 'application/json',
          'Authorization': 'Bearer '+this.authToken 
        }),
      };
  
      let payload = {
        noteId: data.noteId,
        color: data.color
      }
  
  
      return this.httpservice.PatchServiceUri("/Note/Color?color="+payload.color+"&NoteId="+data.noteId,payload,true,header);
  
    }



 
}
