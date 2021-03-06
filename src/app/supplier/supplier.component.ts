import {Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
import {Supplier} from '../model/Supplier';
import {SupplierService} from '../supplier.service';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {

  @Input() supplier;
  @Output('prodOut') output = new EventEmitter<Supplier>();



  @HostListener('click')
  clicksupplier(): void {
    this.output.emit(this.supplier);
  }


  constructor(private supplierService: SupplierService) { }

  ngOnInit(): void {
  }

  deleteSupplier(): void{
    this.supplierService.delete(this.supplier.companyName);
  }

}
