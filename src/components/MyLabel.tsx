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
  /**
   * Color del label
   */
  primary?: boolean;
  /**
     * Color de fondo de label
     */
  backgroundColor?: string;
};

const MyLabel = (props: MyLabelProps) => {
  const { label, size = 'normal', primary = true, backgroundColor = '#FFF' } = props;

  const classLabel = primary ? 'text-primary' : 'text-secondary';

  return (
    <span className={`${classLabel} ${size}`} style={{ backgroundColor }}>
      {label}
    </span>
  );
};

export default MyLabel;