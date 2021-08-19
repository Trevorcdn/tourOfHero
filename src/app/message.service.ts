import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: string[] = []; //string messages = "" if it were c++
  
  add(message: string){
    this.messages.push(message);
  }

  clear(){
    this.messages = []; //sets current string to be an empty string
  }

}
