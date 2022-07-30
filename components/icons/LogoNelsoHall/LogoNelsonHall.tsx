import Image from 'next/image';
const LogoNelsonHall = () => {
  return (
    <Image
      src={'/images/nelson.png'}
      alt={'Nelson Hall Logo'}
      width={146}
      height={53}
    />
  );
};
export default LogoNelsonHall;
