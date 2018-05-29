import { Injectable } from '@angular/core';
import { Observable, Subject, pipe } from 'rxjs';

@Injectable()
export class CommunicatorService {
    private subject = new Subject<any>();
 
    sendMessage(message: string) {
        this.subject.next({ text: message });
    }
 
    clearMessage() {
        this.subject.next();
    }
 
    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }

    testMe() {
        
       // console.log("**** App.component.html service fired!!!!!!!!!!");
        return false;
    }
}