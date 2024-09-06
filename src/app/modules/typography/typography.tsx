import { clsx } from 'clsx';

interface Props {
  variant?:
    | 'display'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'lead'
    | 'body-lg'
    | 'body-base'
    | 'body-sm'
    | 'body-xs'
    | 'caption1'
    | 'caption2'
    | 'caption3'
    | 'caption4';
  component?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'div' | 'p' | 'span';
  theme?: 'black' | 'gray' | 'white' | 'primary' | 'secondary' | 'graylight';
  weight?: 'extralight' | 'light' | 'regular' | 'medium' | 'bolder' | 'bold';
  fontFamily?: 'Montserrat' | 'Inter' | 'SanFrancisco' | 'Organetto' | 'ClashDisplay';
  className?: string;
  children: React.ReactNode;
}

export const Typography = ({
  variant = 'h3',
  component: Component = 'div',
  theme = 'black',
  weight = 'regular',
  fontFamily,
  className,
  children,
}: Props) => {
  let variantStyles: string = '',
    colorStyles: string = '';

  switch (variant) {
    case 'display':
      variantStyles = 'text-7xl';
      break;
    case 'h1':
      variantStyles = 'text-6xl';
      break;
    case 'h2':
      variantStyles = 'text-5xl';
      break;
    case 'h3': // Default
      variantStyles = 'text-4xl';
      break;
    case 'h4':
      variantStyles = 'text-3xl';
      break;
    case 'h5':
      variantStyles = 'text-2xl';
      break;
    case 'lead':
      variantStyles = 'text-xl';
      break;
    case 'body-lg':
      variantStyles = 'text-lg';
      break;
    case 'body-base':
      variantStyles = 'text-base';
      break;
    case 'body-sm':
      variantStyles = 'text-sm';
      break;
    case 'body-xs':
      variantStyles = 'text-xs';
      break;
    case 'caption1':
      variantStyles = 'text-caption1';
      break;
    case 'caption2':
      variantStyles = 'text-caption2';
      break;
    case 'caption3':
      variantStyles = 'text-caption3';
      break;
    case 'caption4':
      variantStyles = 'text-caption4';
      break;
  }

  switch (theme) {
    case 'black': // Default
      colorStyles = 'text-gray';
      break;
    case 'graylight':
      colorStyles = 'text-[#bababa]';
      break;
    case 'gray':
      colorStyles = 'text-[#888888]';
      break;
    case 'white':
      colorStyles = 'text-white';
      break;
    case 'primary':
      colorStyles = 'text-primary';
      break;
    case 'secondary':
      colorStyles = 'text-secondary';
      break;
    default:
      break;
  }

  let fontStyles: string = '';

  switch (fontFamily) {
    case 'Montserrat':
      fontStyles = 'font-montserrat';
      break;
    case 'Inter':
      fontStyles = 'font-inter';
      break;
    case 'SanFrancisco':
      fontStyles = 'font-SF';
      break;
    case 'Organetto':
      fontStyles = 'font-OR';
      break;
    case 'ClashDisplay':
      fontStyles = 'font-CD';
      break;
    default:
      break;
  }

  return (
    <Component
      className={clsx(
        variantStyles,
        colorStyles,
        weight === 'bold' && 'font-bold',
        weight === 'medium' && 'font-medium',
        weight === 'regular' && 'font-regular',
        weight === 'light' && 'font-light',
        weight === 'extralight' && 'font-extralight',
        weight === 'bolder' && 'font-semibold',
        fontStyles, // Ajoutez la propriété fontFamily
        className
      )}
    >
      {children}
    </Component>
  );
};
