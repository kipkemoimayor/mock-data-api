import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators'

@Injectable({ providedIn: 'root' })

export class MessageService {

    messages: string[] = [];
    private _ulrString: string = '../../assets/mock-data/players.json'

    constructor(private http: HttpClient) { }

    add(message: string) {
        this.messages.push(message);
    }

    clear() {
        this.messages = []
    }

    getPlayers(): Observable<any> {
        return <any>this.http.get(this._ulrString).pipe(
            map((response) => <JSON>response)
        )
    }

    getOnePlayer(): Observable<any> {
        return <any>this.http.get(this._ulrString + '/1').pipe(
            map((response) => <JSON>response)
        )
    }

}