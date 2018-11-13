import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {
  formGroup: FormGroup;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl: AlertController,
    public formBuilder: FormBuilder
    ) {
    this.formGroup = this.formBuilder.group({
      usuario: ['',[Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
      email: ['',[Validators.required, Validators.email, Validators.minLength(5), Validators.maxLength(20)]],
      senha: ['',[Validators.required, Validators.minLength(4), Validators.maxLength(18)]]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPage');
  }

  cadastrar(){
    console.log(this.formGroup.value)
    let alert = this.alertCtrl.create({
      title: 'Sucesso',
      subTitle: 'Conta cadastrada com sucesso',
      buttons: [{
        text: 'Fazer login',
        handler: () => {
          let navTransition = alert.dismiss();
          this.navCtrl.setRoot('HomePage');
          return false;
        }
      }]
    });
    alert.present();
  }

}
