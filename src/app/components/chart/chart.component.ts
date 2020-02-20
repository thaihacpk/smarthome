import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';


declare var jQuery: any;
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})

export class ChartComponent implements OnInit {
  constructor() { }
  ngOnInit() {
    //add your api here below
    var API_ENDPOINT = "https://ev6stwgdh6.execute-api.us-west-2.amazonaws.com/default/getEnergyTable"
    // //AJAX GET REQUEST
    // document.getElementById("saveprofile").onclick = function () {
    //   var inputData = {
    //     "empId": $('#empid').val(),
    //     "empFirstName": $('#fname').val(),
    //     "empLastName": $('#lname').val(),
    //     "empAge": $('#empage').val()
    //   };
    //   $.ajax({
    //     url: API_ENDPOINT,
    //     type: 'POST',
    //     data: JSON.stringify(inputData),
    //     contentType: 'application/json; charset=utf-8',
    //     success: function (response) {
    //       document.getElementById("profileSaved").innerHTML = "Profile Saved!";
    //     },
    //     error: function () {
    //       alert("error");
    //     }
    //   });
    // }
    //AJAX GET REQUEST
    document.getElementById("getprofile").onclick = function () {
      console.log("asdjaajdaasd");
      
      $.ajax({
        url: API_ENDPOINT,
        type: 'GET',
        contentType: 'application/json; charset=utf-8',
        success: function (response) {
          $('#employeeProfile tr').slice(1).remove();
          jQuery.each(response, function (i, data) {
            $("#employeeProfile").append("<tr> \
                <td>" + data['Topic'] + "</td> \
                <td>" + data['Time'] + "</td> \
                <td>" + data['Payload'] + "</td> \
                </tr>");
          });
        },
        error: function () {
          alert("error");
        }
      });
    }

  }

}