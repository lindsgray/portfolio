export class Movie {
    public title: string;
    public year: number;
    public genre: string;
    public description: string;
    public review: any;
    public thumbnail: string;
    public trailer: string;
    public active: boolean;

    constructor() {
        this.title = '';
        this.year = null;
        this.genre = '';
        this.description = '';
        this.review = null;
        this.thumbnail = '';
        this.trailer = '';
        this.active = false;
    }
}