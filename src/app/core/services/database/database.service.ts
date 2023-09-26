import { Injectable } from '@angular/core';

@Injectable()
export class DatabaseService {
  constructor() {}

  connect(): Promise<IDBDatabase> {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open('balanceDB');
      request.onerror = reject;
      request.onsuccess = (event: any) => resolve(event.target.result);
    });
  }
}
