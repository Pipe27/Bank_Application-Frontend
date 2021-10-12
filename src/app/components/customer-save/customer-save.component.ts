import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from '../../services/customer.service';
import { DocumentTypeService } from '../../services/document-type.service';
import { DocumentType } from 'src/app/models/document-type';

@Component({
  selector: 'app-customer-save',
  templateUrl: './customer-save.component.html',
  styleUrls: ['./customer-save.component.css']
})
export class CustomerSaveComponent implements OnInit {

  customer: Customer;
  documentTypes: DocumentType[];

  showMsg = true;
  messages = [''];

  constructor( public customerService: CustomerService, public documentTypeService: DocumentTypeService ) { }

  ngOnInit(): void {
    this.customer = {
      address: '',
      custId: 0,
      dotyId: 0,
      email: '',
      enable: 'Y',
      name: '',
      phone: '',
      token: ''
    };
  }

  findAllDocumentTypes(): void {
    this.documentTypeService.findAll().subscribe( data => {
      // this.documentTypes = data;
    });
  }

}
