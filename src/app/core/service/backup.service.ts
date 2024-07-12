import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { APIConstant } from '../constant/APIConstant';

@Injectable({
  providedIn: 'root'
})
export class BackupService {

  constructor(private _http: HttpClient) { }

  backupDatabase() {
    return this._http.get(environment.baseUrl + APIConstant.BACKUP.DATABASE_BACKUP);
  }

}
