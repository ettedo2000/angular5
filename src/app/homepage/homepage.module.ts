export class Home {
    public title: string;
    public message: string;
    public link: string;
    public url: string;
    public category: string;

    constructor(title: string, message: string, link: string, url: string, category: string) {
        this.title      = title;
        this.message    = message;
        this.link       = link;
        this.url        = url;
        this.category   = category;
    }
}