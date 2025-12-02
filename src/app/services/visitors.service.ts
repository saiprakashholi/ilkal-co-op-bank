import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })

export class VisitorService {

    localDate: any = {

    }
    private getLocalDateKey(): string {
        const d = new Date();
        return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
    }


    incrementToday(): number {
        const date = this.getLocalDateKey();
        // console.log("date : ", date);
        const key = 'visitors_count_' + date;
        // console.log("key : ", key);
        //  console.log("this.localDate[key] : ", this.localDate[key]);
        const current = this.localDate[key] || 0;
        // console.log("current : ", current);
        this.localDate[key] = current + 1;
        // console.log("localDate : ", this.localDate);
        return this.localDate[key];
    }

    getTodayCount(): number {
        const key = 'visitors_count_' + this.getLocalDateKey();
        return Number(this.localDate[key] || 0);
    }
}
