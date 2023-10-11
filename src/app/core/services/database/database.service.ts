import { IAreasState } from '../../store/models/areas.models';
import { Injectable } from '@angular/core';

@Injectable()
export class DatabaseService {
  connect(): Promise<IDBDatabase> {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open('balanceDB');
      request.onerror = reject;
      request.onupgradeneeded = () => {
        const db = request.result;

        if (!db.objectStoreNames.contains('areas')) {
          db.createObjectStore('areas');
        }
      };
      request.onsuccess = (event: any) => resolve(event.target.result);
    });
  }

  saveAreas(areas: IAreasState): Promise<any> {
    return new Promise((resolve, reject) => {
      this.connect()
        .then((value) => {
          return new Promise((resolve, reject) => {
            const transaction = value.transaction('areas', 'readwrite');
            const store = transaction.objectStore('areas');
            const request = store.put(areas, 'areasData');

            request.onsuccess = (event: any) => resolve(event.target.result);
            request.onerror = reject;
          });
        })
        .then((data) => {
          return resolve(data);
        });
    });
  }

  getAreas(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.connect().then((value) => {
        const transaction = value.transaction('areas', 'readonly');
        const store = transaction.objectStore('areas');
        const request = store.get('areasData');

        return (request.onsuccess = () => resolve(request.result));
      });
    }).then((value) => {
      return value;
    });
  }

  reset(): Promise<any> {
    return new Promise((resolve, reject) => {
      const request = indexedDB.deleteDatabase('balanceDB');
      request.onsuccess = (event: any) => resolve(event.target.result);
    });
  }
}
