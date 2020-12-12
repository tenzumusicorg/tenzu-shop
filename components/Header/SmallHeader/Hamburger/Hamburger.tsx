import classes from './Hamburger.module.scss';

type Props = {
  isOpen: boolean;
  onClick: any;
}

const Hamburger = ({isOpen, onClick}: Props) => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center" onClick={onClick}>
      <div className={isOpen ? classes.bar1Open : classes.bar1}></div>
      <div className={isOpen ? classes.bar2Open : classes.bar2}></div>
      <div className={isOpen ? classes.bar3Open : classes.bar3}></div>
    </div>
  );
};

export default Hamburger;
