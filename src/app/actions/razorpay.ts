import axios from "axios";

export async function createOrderId(amount: number, currency: string){
    try {
        const response = await axios.post('/api/createOrder',{
            amount: Math.round(amount * 100),
            currency: 'INR'
        });
        console.log('Order Response', response.data);
        return response.data.orderId
    } catch (error) {
        console.log('Error in createOrderId', error);
        throw new Error('Failed to create Order');
    }
}