import { Component, OnInit } from '@angular/core';
import { CrudService } from '../service/crud.service';
import { ToastrService } from 'ngx-toastr';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-toastr',
  templateUrl: './toastr.component.html',
  styleUrls: ['./toastr.component.css']
})
export class ToastrComponent implements OnInit {

  constructor(private notifyService:CrudService) { }

  ngOnInit(): void {
  }

  showToastSuccess(){
    this.notifyService.showSuccess("This is a success message")
  }
  showToastError(){
    this.notifyService.showError("This is error message")
  }

  showToastInfo(){
    this.notifyService.showInfo("This is a info message")
  }

  showToastWarning(){
    this.notifyService.showWarning("This is a warning message")
  }

}
