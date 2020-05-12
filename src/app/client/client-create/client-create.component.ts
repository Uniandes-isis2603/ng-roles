import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { Client } from '../client';


@Component({
  selector: "app-client-create",
  templateUrl: "./client-create.component.html",
  styleUrls: ["./client-create.component.css"]
})
export class ClientCreateComponent implements OnInit {
  clientForm: FormGroup;

  clientes: Client[];

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService
  ) {

  }

  createClient(newClient: Client) {
    // Process checkout data here
    console.warn("el cliente fue creado", newClient);
    this.showSuccess(newClient);

    //-----------------------------------------------------------------
    // this.clientService.createClient(newClient).subscribe(client => {
    //   this.clientes.push(client);
    //  this.showSuccess(newClient);
    // });
    //------------------------------------------------------------------
    this.clientForm.reset();

  }

  showSuccess(c: Client) {
    this.toastr.success('Creado exitosamente!', `Cliente ${c.name}`, { "progressBar": true, timeOut: 4000 });
  }

  cancelCreation() {
    console.log("Cancelando ...");
    this.clientForm.reset();
  }

  ngOnInit() {
    this.clientForm = this.formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(2)]],
      address: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]]
    });
  }
}
