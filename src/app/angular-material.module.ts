import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
   MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatMenuModule,
    MatDividerModule,
    MatListModule,
    MatDialogModule
} from '@angular/material';

@NgModule({
   imports: [
      CommonModule,
      MatButtonModule,
       MatIconModule,
       MatInputModule,
       MatFormFieldModule,
       MatSelectModule,
       MatMenuModule,
       MatDividerModule,
       MatListModule,
       MatDialogModule
   ],
   exports: [
      MatButtonModule,
       MatIconModule,
       MatInputModule,
       MatFormFieldModule,
       MatSelectModule,
       MatMenuModule,
       MatDividerModule,
       MatListModule,
       MatDialogModule
   ],
   providers: [
   //   MatDialog
   ]
})

export class AngularMaterialModule { }
