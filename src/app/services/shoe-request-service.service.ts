import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { ShoeRequest } from '../ShoeRequest';
import { ShoeRequestEntry } from '../ShoeRequestEntry';

@Injectable({
  providedIn: 'root',
})
export class ShoeRequestServiceService {
  private baseUrl = environment.apiUrl;
  private twilioUrl = environment.twilioUrl;

  constructor(private http: HttpClient) {}

  public addNewRequest(
    ShoeRequestEntry: ShoeRequestEntry
  ): Observable<ShoeRequest[]> {
    return this.http.post<ShoeRequest[]>(
      `${this.baseUrl}/new`,
      ShoeRequestEntry
    );
  }

  public getAllRequests(): Observable<ShoeRequestEntry[]> {
    return this.http.get<ShoeRequestEntry[]>(`${this.baseUrl}`);
  }

  public deleteAllRequests(): Observable<ShoeRequest[]> {
    return this.http.delete<ShoeRequest[]>(`${this.baseUrl}`);
  }

  public deleteRequestByPhoneNumber(phoneNumber: string): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${phoneNumber}`);
  }

  // post /api/v1/notify/{ToPhoneNumber}/{MessageType}
  public sendNotification(
    phoneNumber: string,
    messageType: string
  ): Observable<any> {
    console.log(
      'Sending notification to ' + phoneNumber + ' of type ' + messageType
    );
    const options = {
      responseType: 'text' as 'json',
    };
    return this.http.post<any>(
      `${this.twilioUrl}/${phoneNumber}/${messageType}`,
      {},
      options
    );
  }

  public setReminded(phoneNumber: string): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${phoneNumber}`, {});
  }
}
