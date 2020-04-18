import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Customer } from '../core/models/customer';

@Component({
  selector: 'app-customer-dialog',
  templateUrl: './customer-dialog.component.html',
  styleUrls: ['./customer-dialog.component.scss']
})
export class CustomerDialogComponent implements OnInit {

  customerForm: FormGroup;
  constructor(@Inject(MAT_DIALOG_DATA) public data: Customer, 
     public dialogRef: MatDialogRef<CustomerDialogComponent>) {}
  
  ngOnInit() {}

onCancel(): void {
  this.dialogRef.close();
}
}
