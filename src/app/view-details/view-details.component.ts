import { Component, OnInit } from '@angular/core';
import { BookFlightService } from '../book-flight/book-flight.service';
import { ManageBookingService } from '../manage-bookings/manage-bookings.service';
import { BookingHistoryDetail } from '../model/bookHistoryDetail';
import { Flight } from '../model/flight';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.scss']
})
export class ViewDetailsComponent implements OnInit {

  viewDetailData!: BookingHistoryDetail;
  flightDetails!:Flight;
  constructor(private managBookService:ManageBookingService,private bookFlightService:BookFlightService) { }

  ngOnInit(): void {
    console.log(this.managBookService.viewdetailData);
    this.viewDetailData=this.managBookService.viewdetailData;
    this.bookFlightService.getFlightDetails(this.viewDetailData.flightId).subscribe((response)=>{
      console.log(response.body);
      this.flightDetails=response.body;
    })
  }

}
