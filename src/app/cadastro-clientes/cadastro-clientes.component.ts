import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cadastro-clientes',
  templateUrl: './cadastro-clientes.component.html',
  styleUrls: ['./cadastro-clientes.component.css']
})
export class CadastroClientesComponent implements OnInit {

  formCadastro;
  valoresForm;
  conversao;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formCadastro = this.fb.group({
      nome: [''],
      cpf: [''],
      email: [''],
      telefone: [''],
      endereco: ['']
    });
    console.log(this.valoresForm);
    this.formCadastro.valueChanges.pipe()
      .subscribe(res => {
        console.log(res);
        this.valoresForm = res
      });
  }

  cadastro() {
    this.conversao = JSON.stringify(this.valoresForm);
    localStorage.setItem('cadastro', this.conversao);
  }

}
