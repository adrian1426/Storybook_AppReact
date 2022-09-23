import './mylabel.css';

interface MyLabelProps {
  /**
  * Texto que muestra el componente
  */
  label: string;
  /**
   * Tamaño del componente
   */
  size?: 'normal' | 'h1' | 'h2' | 'h3';
};

const MyLabel = (props: MyLabelProps) => {
  const { label, size = 'normal' } = props;

  return (
    <span className={`${size}`}>
      {label}
    </span>
  );
};

export default MyLabel;