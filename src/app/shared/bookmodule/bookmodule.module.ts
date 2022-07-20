import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{MatToolbarModule} from '@angular/material/toolbar'  // tool bar will be used as navbar
import{MatMenuModule} from '@angular/material/menu'
import{MatIconModule}from '@angular/material/icon'
import{MatDialogModule} from '@angular/material/dialog'
import{MatCheckboxModule} from '@angular/material/checkbox'
import{MatRadioModule} from '@angular/material/radio'
import {FormsModule } from '@angular/forms'
import{ReactiveFormsModule}from '@angular/forms'
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatRippleModule} from '@angular/material/core';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import {MatBadgeModule} from '@angular/material/badge';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatMenuModule,MatIconModule,
    MatDialogModule,
    MatCheckboxModule,
    MatRadioModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatExpansionModule,
    MatInputModule,
    MatGridListModule,
    ClipboardModule,
    MatSidenavModule,
    MatRippleModule,
    MatTableModule,
    MatPaginatorModule,
    HttpClientModule,
    MatSelectModule,
    MatBadgeModule,
  ],

  exports:[
    CommonModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDialogModule,
    MatCheckboxModule,
    MatRadioModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatExpansionModule,
    MatInputModule,
    MatGridListModule,
    ClipboardModule,
    MatSidenavModule,
    MatRippleModule,
    MatTableModule,
    MatPaginatorModule,
    HttpClientModule,
    MatSelectModule,
    MatBadgeModule
  ]
})
export class BookmoduleModule { }
