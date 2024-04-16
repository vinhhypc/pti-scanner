import Image from 'next/image';
import imgWelcome from 'src/images/welcome.svg';

function Welcome() {
  return (
    <div className="flex w-screen h-screen items-center justify-center">
      <Image src={imgWelcome} alt="Welcome" />
    </div>
  );
}
export default Welcome;