import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { APIConstant } from '../constant/APIConstant';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackupService {

  constructor(private _http: HttpClient) { }

  backupDatabaseDownload() {
    return this._http.get(environment.baseUrl + APIConstant.BACKUP.DATABASE_BACKUP_DOWNLOAD);
  }
  backupSupersetDownload() {
    return this._http.get(environment.baseUrl + APIConstant.BACKUP.SUPERSET_BACKUP_DOWNLOAD);
  }

  backupDatabase() {
    return this._http.post(environment.baseUrl + APIConstant.BACKUP.DATABASE_BACKUP, {});
  }
  backupSuperset() {
    return this._http.post(environment.baseUrl + APIConstant.BACKUP.SUPERSET_BACKUP, {});
  }


  // backupDatabase(): Observable<HttpResponse<Blob>> {
  //   return this._http.get(environment.baseUrl + APIConstant.BACKUP.DATABASE_BACKUP, {
  //     responseType: 'blob' as 'json',
  //     observe: 'response'
  //   }) as Observable<HttpResponse<Blob>>;
  // }


  extractFileName(blob: Blob): string {
    const contentDisposition = blob.type;
    const matches = contentDisposition.match(/filename="?([^"]+)"?/);
    if (matches && matches.length > 1) {
      return matches[1];
    } else {
      return 'downloaded_file';
    }
  }

}
