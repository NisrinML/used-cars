// types/usedCar.ts
export interface Car {
  id: number;
  whatsapp_number: string | null;
  description: string;
  make: string;
  model: string;
  city: string;
  picture_title: string;
  title: string;
  year: number;
  price: number;
  slideshow_picture:string;
  seller_name:string;
  pictures: string[];

}