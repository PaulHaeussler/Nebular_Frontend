import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Module } from '../module';
import { AddDataComponent } from '../add-data/add-data.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  // animal: string;
  tag: string;
  name: string;
  factorY: string;
  factorZ: string;
  private dataFields: string[] = [];
  public singleField: boolean = true;

  public predictors: string[] = [
    'bedrooms', 'rooms', 'garden',
    'population', 'households', 'income',
    'price_house', 'price_rent',
  ];

  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Module) {

      this.dataFields.push('');
    }

  onCancel(): void {
    this.dataFields = [];
    this.dialogRef.close();
    console.log('Cancel clicked');
  }

  addData() {
    console.log("in addData");
    this.dialogRef.close();
    this.dialog.open(AddDataComponent, {
      //width: '250px',
      data: {
        module: this.data.tag,
        name: this.data.name,
      }
    });
  }

  runModule(dataField): void {
    console.log('Run Module clicked');
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
