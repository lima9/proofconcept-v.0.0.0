import { Component } from '@angular/core';
@Component({
    selector: 'my-app',
    template: 'templates/home.html'
})

export class AppComponent {

    title = "Aula Virtual";
    login = { name: "", password: "" };

    onLoginClicked() {

        alert("name : " + this.login.name + " - password : " + this.login.password);
    }
}