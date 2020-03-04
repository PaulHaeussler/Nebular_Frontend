import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogData } from '../DialogData';

@Component({
  selector: 'app-info-modal',
  templateUrl: './info-modal.component.html',
  styleUrls: ['./info-modal.component.scss']
})

export class InfoModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<InfoModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {

    }

  onCancel(): void {
    this.dialogRef.close();
    console.log("Cancel clicked");
  }

  ngOnInit() {
  }

}
