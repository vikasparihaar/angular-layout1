import { Component } from '@angular/core';
import studentData from './student.json';
export interface Student {
  fil: string;
  name: string;
  produkt: string;
  bestand: string;
  nettoneuakquistion: string;
  aktueller:string;

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'layout1';
  students:Student[]=studentData;
  displayedColumns: string[] = ['fil', 'name', 'produkt', 'bestand', 'nettoneuakquistion','aktueller'];
  dataSource = this.students;
  
}
