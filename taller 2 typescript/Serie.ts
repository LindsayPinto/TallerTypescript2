export class Serie {
    numero: number;
    name: string;
    channel: string;
    seasons: number;
    plot:string;
    url:string;
    img:string;
    constructor(numero: number, completeName: string, channel: string, seasons: number, plot: string, url: string, img: string) {
      this.numero = numero;
      this.name = completeName;
      this.channel = channel;
      this.seasons = seasons;
      this.plot = plot;
      this.url = url;
      this.img = img;
    }
  }