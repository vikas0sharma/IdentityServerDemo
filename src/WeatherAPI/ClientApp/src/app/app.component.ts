import { Component, OnInit } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'weatherapp';

    weatherData: {
        date: string,
        temperatureC: string,
        summary: string
    }[];

    constructor(
        private oidcSecurityService: OidcSecurityService,
        private http: HttpClient) {

    }

    ngOnInit() {
        this.oidcSecurityService
            .checkAuth()
            .subscribe((auth) => console.log('is authenticated', auth));
    }

    login() {
        this.oidcSecurityService.authorize();
    }
    callApi() {
        const token = this.oidcSecurityService.getToken();

        this.http.get("https://localhost:44345/weatherforecast", {
            headers: new HttpHeaders({
                Authorization: 'Bearer ' + token,
            }),
            responseType: 'json'
        })
            .subscribe((data: any) => {
                this.weatherData = data;
                console.log("api result:", data);
            });
    }
}
