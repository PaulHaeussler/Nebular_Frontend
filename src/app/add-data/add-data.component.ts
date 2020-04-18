import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Module } from '../module';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.scss']
})
export class AddDataComponent implements OnInit {

  private dataFields: string[] = [];
  public singleField: boolean = true;
  parameters: string[] = [
    'bedrooms', 'rooms', 'garden',
    'population', 'households', 'income',
    'price_house', 'price_rent',
  ];
  public predictors: string[] = [
    'bedrooms', 'rooms', 'garden',
    'population', 'households', 'income',
    'price_house', 'price_rent',
  ];
  public param = "";
  public value = "";
  public predictor = "";

  constructor(
    public dialogRef: MatDialogRef<AddDataComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Module
  ) { 
    this.dataFields.push('');
  }

  ngOnInit() {
  }

  addField(dataField): void {
    this.dataFields.push(dataField);
    this.dataFields.splice(0, 1);
    console.log('Add Module clicked; dataFieldsArray: ' + this.dataFields);
  }

  onCancel(): void {
    this.dataFields = [];
    this.dialogRef.close();
    console.log('Cancel clicked');
  }

  confirm() {
    console.log("in confirm for addData");
    this.dialogRef.close();
  }

/*
  addData(dataField) {
    this.dataFields.push(dataField);
    this.singleField = false;

    console.log(this.singleField);
    console.log('dataField: ' + dataField + ' of datafields Array: ' + this.dataFields);
    dataField = '';
    return dataField;
  }
  */

}
