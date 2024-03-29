import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  primarySecondarys:any = [
    { name: 'Primary', value:'Primary'},
    { name:'Secondary', value: 'Secondary'}
  ]

  years:any = [
    { primarySecondary:'Primary', name:'LKG', value:'LKG'},
    { primarySecondary:'Primary', name:'UKG', value:'UKG'},
    { primarySecondary:'Primary', name:'1st Standard', value:'1st Standard'},
    { primarySecondary:'Primary', name:'2nd Standard', value:'2nd Standard'},
    { primarySecondary:'Primary', name:'3rd Standard', value:'3rd Standard'},
    { primarySecondary:'Primary', name:'4th Standard', value:'4th Standard'},
    { primarySecondary:'Primary', name:'5th Standard', value:'5th Standard'},
    { primarySecondary:'Secondary', name:'6th Standard', value:'6th Standard'},
    { primarySecondary:'Secondary', name:'7th Standard', value:'7th Standard'},
    { primarySecondary:'Secondary', name:'8th Standard', value:'8th Standard'},
    { primarySecondary:'Secondary', name:'9th Standard', value:'9th Standard'},
    { primarySecondary:'Secondary', name:'10th Standard', value:'10th Standard'},
  ]

  students: any = [
      {
        "id": "1",
        "name": "Anthony Das",
        "roll_no": "101",
        "class_name": "LKG-A",
        "year": "LKG",
        "image": "../assets/photo1.jpeg",
        "mobile": "9876544162",
        "grades": {
          "Math": "A",
          "Science": "B",
          "English": "A",
          "History": "B"
        },
      },
      {
        "id": "2",
        "name": "Harry",
        "roll_no": "26",
        "class_name": "LKG-B",
        "year": "LKG",
        "image": "../assets/photo2.jpeg",
        "mobile": "9876544162",
        "grades": {
          "Math": "A",
          "Science": "B",
          "English": "A",
          "History": "B"
        },
      },
      {
        "id": "3",
        "name": "Potter",
        "roll_no": "51",
        "class_name": "UKG-A",
        "year": "UKG",
        "image": "../assets/photo3.jpeg",
        "mobile": "9876544162",
        "grades": {
          "Math": "A",
          "Science": "B",
          "English": "A",
          "History": "B"
        },
      },
      {
        "id": "4",
        "name": "valley Das",
        "roll_no": "106",
        "class_name": "UKG-B",
        "year": "UKG",
        "image": "../assets/photo4.jpeg",
        "mobile": "9876544162",
        "grades": {
          "Math": "A",
          "Science": "B",
          "English": "A",
          "History": "B"
        },
      },
      {
        "id": "5",
        "name": "Amanpreet",
        "roll_no": "131",
        "class_name": "1-A",
        "year": "1st Standard",
        "image": "../assets/photo5.jpeg",
        "mobile": "9876544162",
        "grades": {
          "Math": "A",
          "Science": "B",
          "English": "A",
          "History": "B"
        },
      },
      {
        "id": "6",
        "name": "Apurva ",
        "roll_no": "066",
        "class_name": "1-B",
        "year": "1st Standard",
        "image": "../assets/photo6.jpeg",
        "mobile": "9876544162",
        "grades": {
          "Math": "A",
          "Science": "B",
          "English": "A",
          "History": "B"
        },
      },
      {
        "id": "7",
        "name": "Ashwini",
        "roll_no": "031",
        "class_name": "2-A",
        "year": "2nd Standard",
        "image": "../assets/photo7.jpeg",
        "mobile": "9876544162",
        "grades": {
          "Math": "A",
          "Science": "B",
          "English": "A",
          "History": "B"
        },
      },
      {
        "id": "8",
        "name": "Chaitanya",
        "roll_no": "129",
        "class_name": "2-B",
        "year": "2nd Standard",
        "image": "../assets/photo8.jpeg",
        "mobile": "9876544162",
        "grades": {
          "Math": "A",
          "Science": "B",
          "English": "A",
          "History": "B"
        },
      },
      {
        "id": "9",
        "name": "Deepal",
        "roll_no": "111",
        "class_name": "3-A",
        "year": "3rd Standard",
        "image": "../assets/photo9.jpeg",
        "mobile": "9876544162",
        "grades": {
          "Math": "A",
          "Science": "B",
          "English": "A",
          "History": "B"
        },
      },
      {
        "id": "10",
        "name": "Shree ",
        "roll_no": "061",
        "class_name": "3-B",
        "year": "3rd Standard",
        "image": "../assets/photo10.jpeg",
        "mobile": "9876544162",
        "grades": {
          "Math": "A",
          "Science": "B",
          "English": "A",
          "History": "B"
        },
      },
      {
        "id": "11",
        "name": "Suman",
        "roll_no": "021",
        "class_name": "4-A",
        "year": "4th Standard",
        "image": "../assets/photo12.jpeg",
        "mobile": "9876544162",
        "grades": {
          "Math": "A",
          "Science": "B",
          "English": "A",
          "History": "B"
        },
      },
      {
        "id": "12",
        "name": "Harpreet",
        "roll_no": "066",
        "class_name": "4-B",
        "year": "4th Standard",
        "image": "../assets/photo13.jpeg",
        "mobile": "9876544162",
        "grades": {
          "Math": "A",
          "Science": "B",
          "English": "A",
          "History": "B"
        },
      },
      {
        "id": "13",
        "name": "Gauhar",
        "roll_no": "019",
        "class_name": "5-A",
        "year": "5th Standard",
        "image": "../assets/photo4.jpeg",
        "mobile": "9876544162",
        "grades": {
          "Math": "A",
          "Science": "B",
          "English": "A",
          "History": "B"
        },
      },
      {
        "id": "14",
        "name": "Mrinal",
        "roll_no": "012",
        "class_name": "5-B",
        "year": "5th Standard",
        "image": "../assets/photo1.jpeg",
        "mobile": "9876544162",
        "grades": {
          "Math": "A",
          "Science": "B",
          "English": "A",
          "History": "B"
        },
      },
      {
        "id": "15",
        "name": "Nayan",
        "roll_no": "107",
        "class_name": "6-A",
        "year": "6th Standard",
        "image": "../assets/photo10.jpeg",
        "mobile": "9876544162",
        "grades": {
          "Math": "A",
          "Science": "B",
          "English": "A",
          "History": "B"
        },
      },
      {
        "id": "16",
        "name": "Shalin",
        "roll_no": "112",
        "class_name": "6-B",
        "year": "6th Standard",
        "image": "../assets/photo11.jpeg",
        "mobile": "9876544162",
        "grades": {
          "Math": "A",
          "Science": "B",
          "English": "A",
          "History": "B"
        },
      },
      {
        "id": "17",
        "name": "Rajani",
        "roll_no": "111",
        "class_name": "7-A",
        "year": "7th Standard",
        "image": "../assets/photo8.jpeg",
        "mobile": "9876544162",
        "grades": {
          "Math": "A",
          "Science": "B",
          "English": "A",
          "History": "B"
        },
      },
      {
        "id": "18",
        "name": "Kiran",
        "roll_no": "156",
        "class_name": "7-B",
        "year": "7th Standard",
        "image": "../assets/photo5.jpeg",
        "mobile": "9876544162",
        "grades": {
          "Math": "A",
          "Science": "B",
          "English": "A",
          "History": "B"
        },
      },
      {
        "id": "19",
        "name": "Jiva",
        "roll_no": "121",
        "class_name": "8-A",
        "year": "8th Standard",
        "image": "../assets/photo9.jpeg",
        "mobile": "9876544162",
        "grades": {
          "Math": "A",
          "Science": "B",
          "English": "A",
          "History": "B"
        },
      },
      {
        "id": "20",
        "name": "Jaspinder",
        "roll_no": "106",
        "class_name": "8-B",
        "year": "8th Standard",
        "image": "../assets/photo6.jpeg",
        "mobile": "9876544162",
        "grades": {
          "Math": "A",
          "Science": "B",
          "English": "A",
          "History": "B"
        },
      },
      {
        "id": "21",
        "name": "Harsha",
        "roll_no": "101",
        "class_name": "9-A",
        "year": "9th Standard",
        "image": "../assets/photo4.jpeg",
        "mobile": "9876544162",
        "grades": {
          "Math": "A",
          "Science": "B",
          "English": "A",
          "History": "B"
        },
      },
      {
        "id": "22",
        "name": "Hemal",
        "roll_no": "106",
        "class_name": "9-B",
        "year": "9th Standard",
        "image": "../assets/photo13.jpeg",
        "mobile": "9876544162",
        "grades": {
          "Math": "A",
          "Science": "B",
          "English": "A",
          "History": "B"
        },
      },
      {
        "id": "23",
        "name": "Harpreet",
        "roll_no": "108",
        "class_name": "10-A",
        "year": "10th Standard",
        "image": "../assets/photo2.jpeg",
        "mobile": "9876544162",
        "grades": {
          "Math": "A",
          "Science": "B",
          "English": "A",
          "History": "B"
        },
      },
      {
        "id": "22",
        "name": "Chandra",
        "roll_no": "1006",
        "class_name": "10-B",
        "year": "10th Standard",
        "image": "../assets/photo7.jpeg",
        "mobile": "9876544162",
        "grades": {
          "Math": "A",
          "Science": "B",
          "English": "A",
          "History": "B"
        },
      },
  ]
    
  constructor(private http: HttpClient) {}

  getUsers(token:string):Observable<any[]>{
    let headers = new HttpHeaders();
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    return this.http.get<any[]>('assets/user.json',{headers})
  }

  getPrimarySecondary(){
    return this.primarySecondarys
  }
  getYears(){
    return this.years
  }
  getStudentDetails(){
    return this.students
  }

}
