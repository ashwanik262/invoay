import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../../pages/home/home';
import { UserservicesProvider } from '../../providers/userservices/userservices';
import { HttpParams } from '@angular/common/http';
import { UseralertProvider } from '../../providers/useralert/useralert';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  // emailField: string;
  // passField: string;
  username: string ="shivam.ch7@gmail.com";
  password: string="shivam@123";

  constructor(public navCtrl: NavController,public useralertProvider : UseralertProvider,public userService:UserservicesProvider,public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  // login(username : any,password : any){
  //   if(!username || !password){
  //     console.log("invalid username and password");
  //   }
  //   this.navCtrl.setRoot(HomePage);

  // }

  // siginButton() {
  //   if ((this.emailField == undefined && this.emailField == null) || this.emailField == "") {
  //     this.callalert("Please enter Email Id");
  //     return;
  //   }
  //   if ((this.passField == undefined && this.passField == null) || this.passField == "") {
  //     this.callalert("Please enter Password");
  //     return;
  //   }
  //   var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //   if (!re.test(this.emailField)) {
  //     this.callalert("Please enter valid Email");
  //     return;
  //   } else {

  //     const postparamData = new HttpParams()
  //       .set("grant_type", 'password')
  //       .set("username", '' + this.emailField)
  //       .set("password", '' + this.passField)
  //       .set("type",'' + this.user);

  //     this.loginUser(postparamData.toString());


  //   }


    // if ((this.emailField == "tmh@gmail.com") && this.passField == "123456") {
    //   let loader = this.loading.create();
    //   loader.present().then(() => {
    //     this.navCtrl.setRoot(MenuPage);
    //      AppSettingProvider.userLoginStatus.next("loggedIn");
    //     // let posturl : string = constant.baseUrl + constant.login
    //     // this.category = {
    //     //   "email": this.emailField,
    //     //   "password": this.passField
    //     // }
    //     // this.userProv.postfeedbackData(this.category, posturl).subscribe((data) => {
    //     //   if (data['token']) {

    //     //     this.navCtrl.push(HomePage);
    //     //   } else {
    //     //     this.callalert("Invalid Details")

    //     //   }

    //     // })
    //     loader.dismiss();
    //   });

    // } else {
    //   this.callalert("Invalid Details");
    //   return;
    // }
  // }

  login(){
    
    const postparamData = new HttpParams()
    .set("grant_type", 'password')
    .set("username", '' + this.username)
    .set("password", '' + this.password)
    this.useralertProvider.showLoading();
      this.userService.userLogin(postparamData.toString()).subscribe(resData => {
        console.log('userLogin data :- ' + resData);
        sessionStorage.setItem('userAccessToken', resData.access_token);
        sessionStorage.setItem('token_type', resData.token_type);
        console.log('data is : ' + sessionStorage.getItem('userAccessToken'));
        // UserInformationProvider.user = resData;
        this.useralertProvider.ShowSuccess("login successfully");
        this.navCtrl.setRoot(HomePage);
        // AppSettingProvider.userLoginStatus.next("loggedIn");
        // loader.dismiss();
        this.useralertProvider.dismissLoading();
      }, err => {
        // console.log("error mil gya",err.error_description)
        this.useralertProvider.ShowError(err.error_description);
        this.useralertProvider.dismissLoading();
     
      });

    // });


}
}

