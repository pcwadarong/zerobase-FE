import { Separator } from '../ui/separator';

export default function Footer() {
  return (
    <div className="py-10 font-light flex gap-7 flex-col items-center">
      <img src="/logo.png" alt="logo" width="60px" className="mb-3" />
      <ul className="flex gap-8">
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
