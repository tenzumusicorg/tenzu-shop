import classes from "*.module.css";

type Props = {
  className: string;
};

const HorizontalLine = ({ className }: Props) => {
  return (
    <div className={className}>
      <div className="w-full h-2 2xl:h-3 bg-black"></div>
      <div className="w-full h-3 lg:h-6 2xl:h-8 bg-white"></div>
      <div className="w-full h-2 2xl:h-3 bg-black"></div>
    </div>
  );
};

export default HorizontalLine;
