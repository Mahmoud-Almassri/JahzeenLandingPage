import { Injectable } from "@angular/core";
import { Subject, BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class SharedDataService {
    private usernameSource = new BehaviorSubject<string>('');
    private passwordSource = new BehaviorSubject<string>('');
    username = this.usernameSource.asObservable()
    password = this.passwordSource.asObservable()

    constructor() { }

    public changeData(username: string, password: string) {
        this.usernameSource.next(username);
        this.passwordSource.next(password);
    }
}