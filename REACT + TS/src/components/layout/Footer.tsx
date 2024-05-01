import { Separator } from '../ui/separator';
import Logo from '../../assets/logo.svg';

export default function Footer() {
  return (
    <div className="pb-10 font-light flex gap-7 flex-col items-center tracking-wider text-slate-500">
      <Separator />
      <div className="w-16 my-5 mb-3 fill-gray-500">
        <Logo />
      </div>
      <ul className="flex gap-8 whitespace-nowrap">
        <li className="cursor-pointer">CONTACT US</li>
        <li className="cursor-pointer">SERVICES</li>
        <li className="cursor-pointer">REFUND</li>
        <li className="cursor-pointer">FAQ</li>
        <li className="cursor-pointer">CAREER</li>
        <li className="cursor-pointer">PRIVACY POLICY</li>
        <li className="cursor-pointer">TERMS OF USE</li>
      </ul>
      <ul className="flex gap-8">
        <li>
          <a href="https://github.com/pcwadarong/zerobase-FE/tree/main/REACT%20%2B%20TS">
            GITHUB
          </a>
        </li>
        <li className="cursor-pointer">INSTAGRAM</li>
        <li className="cursor-pointer">FACEBOOK</li>
        <li className="cursor-pointer">TWITTER</li>
        <li className="cursor-pointer">YOUTUBE</li>
      </ul>
      <section className="w-full mt-10 flex gap-7 flex-col items-center">
        <Separator />
        <p className="font-normal">@ Anything You Crave 2024</p>
      </section>
    </div>
  );
}
