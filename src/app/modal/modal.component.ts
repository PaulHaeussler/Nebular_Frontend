import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Module } from '../module';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  //animal: string;
  tag: string;
  name: string;
  factorY: string;
  factorZ: string;
  public addData1: string;
  private dataFields: string[] = [];
  public singleField: boolean = true;

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Module) {

      this.dataFields.push("");
    }

  onCancel(): void {
    this.dataFields = [];
    this.dialogRef.close();
    console.log("Cancel clicked");
  }

  addData(dataField) {
    this.dataFields.push(dataField);
    this.singleField = false;

    console.log(this.singleField);
    console.log("dataField: " + dataField + " of datafields Array: " + this.dataFields);
    dataField = '';
    return dataField;
  }

  runModule(dataField): void {
    this.dataFields.push(dataField);
    this.dataFields.splice(0,1);
    console.log("Run Module clicked; dataFieldsArray: " + this.dataFields);
  }

  ngOnInit() {
  }

}
