import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button'
import { MatInputModule } from '@angular/material/input'
import { MatDialogModule } from '@angular/material/dialog'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatIconModule } from '@angular/material/icon'
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component'
import { TaskDialogComponent } from './task-dialog/task-dialog.component'

@NgModule({
  imports: [BrowserModule, 
    FormsModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    DragDropModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    MatFormFieldModule,
    BrowserAnimationsModule],

  declarations: [AppComponent, TaskComponent, TaskDialogComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
