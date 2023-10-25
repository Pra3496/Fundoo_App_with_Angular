import { Component } from '@angular/core';
import { NotesService } from 'src/app/services/notes.service';
@Component({
  selector: 'app-get-allnotes',
  templateUrl: './get-allnotes.component.html',
  styleUrls: ['./get-allnotes.component.scss']
})
export class GetAllnotesComponent {
  responses!:any

  constructor(private notes:NotesService)
  {
    this.responses = this.notes.GetNotes();
  }
}
