import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-emplist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './emplist.component.html',
  styleUrl: './emplist.component.css'
})
export class EmplistComponent {
  emp_1 = 'Michael Arnold Ronquillo';
  emp_3 = 'Christian Ralph Tan';
  emp_4 = 'Christian Avenir';
  emp_2 = 'Karl Vladimir Borja';
  display_emp_info = true;
  emp_1_role = 'Manager';
  emp_2_role = 'Cashier';
  emp_3_role = 'Supervisor';
  emp_4_role = 'Kitchen Staff';
  emp_1_details = [
    { emp_no: '00001', age: 21, gender: 'Male', email:'ronquillomichaelarnold@gmail.com',emp_status:'contractual', salary:'₱20,000'}
  ];
  emp_2_details = [
    { emp_no: '00002', age: 21, gender: 'Male', email:'Vladimirborja013@gmail.com',emp_status:'contractual', salary:'₱10,000'}
  ];

  emp_3_details = [
    { emp_no: '00003', age: 23, gender: 'Male', email:'christiantan120501@gmail.com',emp_status:'contractual', salary:'₱15,000'}
  ];
  emp_4_details = [
    { emp_no: '00004', age: 21, gender: 'Male', email:'avenirchristian22@gmail.com',emp_status:'contractual', salary:'₱10,000'}
  ];
}
