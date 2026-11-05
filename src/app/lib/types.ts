export interface ServiceProp{
  title: string;
  sub: Array<string>;
  price: Number;
  img: string
}

export interface TestimonialsProps{
  name: string;
  url: string;
  des: string;
  social: {
    instagram: string | undefined,
    facebook: string | undefined,
    youtube: string | undefined,

  }
}