import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IdentyficationNumberGeneratorService {

  constructor() { }

  generateId(): string{
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < 16; i++) {
      result += characters.charAt(Math.floor(Math.random() *
        charactersLength));
    }
    return result;
  }
}
