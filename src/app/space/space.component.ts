import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-space',
  templateUrl: './space.component.html',
  styleUrls: ['./space.component.scss']
})
export class SpaceComponent implements OnInit {

  animal: string;
  name: string;
  modules = ["planet2", "planet3", "planet4", "planet5", "planet6"];


  constructor(public dialog: MatDialog) {

  }

  openDialog(module, name, factorY, factorZ): void {
    console.log("Planet clicked!");
    var moduleIndex = this.modules.indexOf(module);
    if (moduleIndex != -1) {
      console.log("index of module in modules array: " + moduleIndex);
      const dialogRef = this.dialog.open(ModalComponent, {
        //width: '550px',
        data: {
          tag: module,
          name: name,
          factorY: factorY,
          factorZ: factorZ,
          //animal: this.animal
        }
      });
  
      dialogRef.afterClosed().subscribe(result => {
        //this.animal = result;
      });
    } else {
      console.log("Module not in modules array");
    }
  }

  ngOnInit() {
  }

}
