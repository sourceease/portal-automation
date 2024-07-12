import { Component, OnInit } from '@angular/core';
import { BackupService } from 'src/app/core/service/backup.service';

@Component({
  selector: 'app-backup',
  templateUrl: './backup.component.html',
  styleUrls: ['./backup.component.scss']
})
export class BackupComponent implements OnInit {

  constructor(private _backupService: BackupService) { }

  ngOnInit(): void {
    console.log("Backup")
  }

  bakup() {
    this._backupService.backupDatabase().subscribe({
      next: (res) => {console.log(res)},
      error: (err) => {console.log(err)}
    });
  }

}
