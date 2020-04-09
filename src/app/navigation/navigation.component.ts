import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { InfoModalComponent } from '../info-modal/info-modal.component';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})

export class NavigationComponent implements OnInit {

  public nameSpace: string;
  public editMode: boolean = false;
  public test;
  public username;
  public passwort;

  constructor(
    public dialog: MatDialog
    //public dialogConfig: MatDialogConfig
    ) {
    this.nameSpace = 'Name your space'
  }

  ngOnInit() {
  }

  public logoff() {
    this.username = "";
    this.passwort = "";
  }

  public editNamespace(name) {
    this.nameSpace = name;
    this.editMode = true;
  }

  public editDone() {
    this.editMode = false;
  }

  public showInfo() {
      console.log("Info clicked!");

      /*
      const dialogConfig = new MatDialogConfig();
      dialogConfig.autoFocus = true;

      dialogConfig.data = {
        position:
        { right: '150px', top: '50px' }
      };
              this.dialog.open(InfoModalComponent, dialogConfig);
*/
        //const dialogRef =

        this.dialog.open(InfoModalComponent, {
          //width: '250px',
          data: {
            test: this.test,
          }
        });
    /*
        dialogRef.afterClosed().subscribe(result => {
          //this.animal = result;
        });
        */

  }

}
