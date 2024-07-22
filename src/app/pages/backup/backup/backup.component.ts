import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BackupService } from 'src/app/core/service/backup.service';

@Component({
  selector: 'app-backup',
  templateUrl: './backup.component.html',
  styleUrls: ['./backup.component.scss']
})
export class BackupComponent implements OnInit {

  constructor(private _backupService: BackupService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    console.log("Backup")
  }

  /******
   * @Database backup download function
   */

  badabaseBakupDownload() {
    this._backupService.backupDatabaseDownload().subscribe({
      next: (res) => {
        console.log(res);
        const url = this.extractUrlFromResponse(res);
        if (url) {
          this.downloadContent(url);
        }
        // this._snackBar.open('Backup successful!', 'Close', {
        //   duration: 3000, 
        //   horizontalPosition: 'right',
        //   verticalPosition: 'top',
        // });
      },
      error: (err) => {
        console.log(err)
        // this._snackBar.open('Backup failed!', 'Close', {
        //   duration: 3000,
        //   horizontalPosition: 'right',
        //   verticalPosition: 'top',
        // });
      }
    });
  }

  /****
   * @@Data base backup function
   */

  databaseBakup() {
    this._backupService.backupDatabase().subscribe({
      next: (res) => {
        console.log(res);
        // this._snackBar.open('Backup successful!', 'Close', {
        //   duration: 3000, 
        //   horizontalPosition: 'right',
        //   verticalPosition: 'top',
        // });
      },
      error: (err) => {
        console.log(err)
        // this._snackBar.open('Backup failed!', 'Close', {
        //   duration: 3000,
        //   horizontalPosition: 'right',
        //   verticalPosition: 'top',
        // });
      }
    });
  }



  extractUrlFromResponse(response: any): string | null {
    return response['presigned_url'] || null;
  }

  /***
   * @Download file from s3 using link
   */

  downloadContent(url: string): void {
    const link = document.createElement('a');
    link.href = url;
    link.download = this.extractFileName(url);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  /***
   * @Extract file name
   */

  extractFileName(url: string): string {
    return url.split('/').pop() || 'downloaded_file';
  }

  /*****
   * @Superset backup download function
   */

  supersetBackupDownload() {
    this._backupService.backupSupersetDownload().subscribe({
      next: (res) => {
        console.log(res);
        const url = this.extractUrlFromResponse(res);
        if (url) {
          this.downloadContent(url);
        }
      },
      error: (err) => {
        console.log(err)
      }
    });
  }

  /**
   * @Superset backup function
   */

  supersetBackup() {
    this._backupService.backupSuperset().subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err)
      }
    });
  }
}
