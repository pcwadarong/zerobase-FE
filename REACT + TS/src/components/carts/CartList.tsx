import { buttonVariants } from '../ui/button';
import { Separator } from '../ui/separator';

export default function CartList() {
  return (
    <div>
      <h1>Shopping Cart</h1>
      <div>
        <Separator />
        <img src="" alt="" />
      </div>
      <div>
        <div>
          <h2>Order Summary</h2>
          <Separator />
          <div>
            <span>Subtotal</span>
            <span>{'$'}</span>
          </div>
          <div>
            <span>Shipping</span>
            <span>{'$'}</span>
          </div>
          <div>
            <span>Discount</span>
            <span>{'$'}</span>
          </div>
          <Separator />
          <div>
            <span>Total</span>
            <span>{'$'}</span>
          </div>
          <button className="border-gray-400 border-[1px] py-">CHECKOUT</button>
        </div>
      </div>
    </div>
  );
}
