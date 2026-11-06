
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

export interface RazorpayDetails {
    orderId: string;
    paymentId: string;
    signature?: string;
}

export interface Service {
    _id: string;
    title: string;
    [key: string]: any;
}

export interface OrderProps {
    _id: string;
    userId: string;
    scheduleId: string | Schedule;
    amount: number;
    currency: string;
    status: 'created' | 'paid' | 'failed';
    razorpay?: RazorpayDetails;
    createdAt: string;
    updatedAt: string;
    __v?: number;
}

export interface Schedule {
    _id: string;
    userId: string;
    serviceId: Service | string;
    date: string;
    time: string;
    approved: boolean;
    paymentDone: boolean;
    createdAt: string;
    updatedAt: string;
    __v?: number;
    orderDetails?: OrderProps;
}


export interface PaginatedScheduleResult {
    data: Schedule[];
    metadata: { total: number }[];
}