import { Component, OnInit } from '@angular/core';
import {
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef,
} from '@angular/core';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours,
  startOfMonth,
  startOfWeek,
  endOfWeek,
} from 'date-fns';
import { from, Observable, Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView,
} from 'angular-calendar';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';

import flatpickr from 'flatpickr';
import { Spanish } from 'flatpickr/dist/l10n/es';
import { HttpClient } from '@angular/common/http';
import {  map } from 'rxjs/operators';
import {AgendarService} from './service/agendar.service'
import { environment } from 'src/environments/environment.prod';
registerLocaleData(localeEs);
const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3',
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF',
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA',
  },
};
interface Consejeria {
  id: number;
  usuario: string;
  empieza: string;
  termina: string;
  tema: string;
  correo: string;
  estado: number;
}


@Component({
  selector: 'mwl-demo-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  // encapsulation: ViewEncapsulation.None,
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  
})
export class CalendarComponent implements OnInit {
  private url  = environment.apiUrl;


   flatpickrFactory() {
    flatpickr.localize(Spanish);
    return flatpickr;
  }
  locale: string = 'es';
  showMessage:boolean=false;
  @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any>;

  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;
  viewDate: Date = new Date();
  modalData: {
    action: string;
    event: CalendarEvent;
  };

  events$: Observable<CalendarEvent<{ consejeria: Consejeria }>[]>;
  refresh: Subject<any> = new Subject();
  activeDayIsOpen: boolean = true;

  constructor(private modal: NgbModal,private http: HttpClient,private service_agendar:AgendarService) {}

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
  }

  // eventTimesChanged({
  //   event,
  //   newStart,
  //   newEnd,
  // }: CalendarEventTimesChangedEvent): void {
  //   this.events = this.events.map((iEvent) => {
  //     if (iEvent === event) {
  //       return {
  //         ...event,
  //         start: newStart,
  //         end: newEnd,
  //       };
  //     }
  //     return iEvent;
  //   });
  //   this.handleEvent('Dropped or resized', event);
  // }

  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event, action };
    console.log(event.title)
    this.modal.open(this.modalContent, { size: 'lg' });
  }

  deleteEvent(eventToDelete: CalendarEvent) {
  }
  saveEvent(eventToSave: CalendarEvent) {
    console.log(eventToSave);
  }

  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }
  ngOnInit(): void {
    this.fetchEvents();
    this.agendar=this.service_agendar.getIsAgendado();
    // this.flatpickrFactory();

  }
  
  adjustForTimezone(date:Date):Date{
    var timeOffsetInMS:number = date.getTimezoneOffset() * 60000;
    date.setTime(date.getTime() + timeOffsetInMS);
    return date
  }

  fetchEvents(): void {
    this.events$ = this.http
      .get(this.url+'/api/get_consejerias/').pipe(    
         map((  data  : any) => {
          console.log(data);
          const results=data;
          return results.map((c: Consejeria) => {
            return {
              title: c.tema,
              start: this.adjustForTimezone(new Date(c.empieza)),
              end: this.adjustForTimezone(new Date(c.termina)),
              id_: c.id,
              color: colors.yellow,
            };
          });
        })
      );
    }

  agendar:boolean=this.service_agendar.getIsAgendado();
  agendar_consejeria(event: CalendarEvent){
    console.log("consejeria agendada...")
    console.log(this.service_agendar.getIsAgendado())
    if(this.service_agendar.getIsAgendado()==false){
      /*Se agenda la cita */
      this.service_agendar.setAgendado(true);
      this.agendar=this.service_agendar.getIsAgendado();
      this.showMessage=true;
    }else if(this.service_agendar.getIsAgendado()==true){
      console.log(this.service_agendar.getIsAgendado())

    }
  }
  eventClicked({ event }: { event: CalendarEvent }): void {
    console.log('Event clicked', event);
  }
}
