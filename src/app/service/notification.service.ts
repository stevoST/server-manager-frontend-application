import {Injectable} from '@angular/core';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material/snack-bar';

@Injectable({providedIn: 'root'})
export class NotificationService {

  private readonly matsnack: MatSnackBar;

  constructor(private snackbar: MatSnackBar) {
    this.matsnack = snackbar;
  }

  onDefault(message: string): void {
    const config = new MatSnackBarConfig();
    config.duration = 2000;
    config.horizontalPosition = 'left';
    config.panelClass = 'snack-style-default'
    this.snackbar.open(message, '', config);
  };

  onSuccess(message: string): void {
    const config = new MatSnackBarConfig();
    config.duration = 2000;
    config.horizontalPosition = 'left';
    config.panelClass = 'snack-style-success'
    this.snackbar.open(message, '', config);
  };

  onError(message: string): void {
    const config = new MatSnackBarConfig();
    config.duration = 2000;
    config.horizontalPosition = 'left';
    config.panelClass = 'snack-style-error'
    this.snackbar.open(message, '', config);
  };

}
