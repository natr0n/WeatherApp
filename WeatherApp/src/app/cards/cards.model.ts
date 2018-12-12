export class Cards{
    public id: string;
    public city: string;
    public image: string;
    public temp: string;
    public min: string;
    public max: string;


    constructor(id: string, city: string, image: string, temp: string, 
        min: string, max: string){
            this.id = id;
            this.city = city;
            this.image = image;
            this.temp = temp;
            this.min = min;
            this.max = max;
        }
}