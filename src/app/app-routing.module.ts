import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackupComponent } from './pages/backup/backup/backup.component';

const routes: Routes = [
  {path: '', component: BackupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
