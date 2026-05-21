/**
 * Button Component - EXAMPLE FILE
 *
 * File ini adalah CONTOH implementasi Button component.
 * Kamu bisa menggunakan ini sebagai reference atau
 * membuat implementasi sendiri dari scratch.
 *
 * Untuk menggunakan:
 * 1. Rename file ini menjadi Button.tsx (hapus .example)
 * 2. Adjust styling sesuai design Figma
 * 3. Add more variants jika diperlukan
 */

import React from 'react';

// Type definition untuk button variants
type ButtonVariant = 'primary' | 'secondary' | 'outline';
type ButtonSize = 'sm' | 'md' | 'lg';

// Props interface dengan TypeScript
interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

/**
 * Reusable Button Component
 *
 * @param variant - Style variant: 'primary' | 'secondary' | 'outline'
 * @param size - Button size: 'sm' | 'md' | 'lg'
 * @param children - Button content
 * @param onClick - Click handler
 * @param className - Additional CSS classes
 * @param disabled - Disabled state
 * @param type - Button type attribute
 */
const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  onClick,
  className = '',
  disabled = false,
  type = 'button',
}) => {
  // Base styles yang selalu applied
  const baseStyles =
    'inline-flex items-center justify-center font-bold rounded-full transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange focus:ring-offset-2 focus:ring-offset-bg-darkest';

  // Variant styles - SESUAIKAN dengan design Figma!
  const variantStyles = {
    primary:
      'bg-orange text-text-white hover:bg-orange-dark active:bg-orange-darkest focus:ring-orange shadow-[inset_4px_4px_4px_rgba(255,255,255,0.25)]',
    secondary:
      'bg-bg-card text-text-secondary border border-border hover:border-orange hover:text-text-white focus:ring-orange',
    outline:
      'border-2 border-orange text-orange hover:bg-orange hover:text-text-white focus:ring-orange',
  };

  // Size styles
  const sizeStyles: Record<ButtonSize, string> = {
    sm: 'w-49.25 h-11 text-sm font-bold', // 197×44px sesuai Figma
    md: 'w-[200px] h-12 text-base tracking-[-0.02em] font-bold',
    lg: 'px-10 h-14 text-lg tracking-tight',
  };

  // Disabled styles
  const disabledStyles = 'opacity-50 cursor-not-allowed';

  // Combine all styles
  const buttonClasses = `
    ${baseStyles}
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    ${disabled ? disabledStyles : ''}
    ${className}
  `.trim();

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
    >
      {children}
    </button>
  );
};

export default Button;

/**
 * USAGE EXAMPLES:
 *
 * // Primary button (default)
 * <Button onClick={handleClick}>Click Me</Button>
 *
 * // Secondary variant
 * <Button variant="secondary">Secondary</Button>
 *
 * // Outline variant with large size
 * <Button variant="outline" size="lg">Large Outline</Button>
 *
 * // Disabled state
 * <Button disabled>Disabled</Button>
 *
 * // With custom classes
 * <Button className="w-full">Full Width Button</Button>
 *
 * // Submit button for forms
 * <Button type="submit" variant="primary">Submit</Button>
 */

/**
 * TODO untuk kamu:
 * 1. Lihat button styles di Figma design
 * 2. Update colors sesuai design system (primary color, etc)
 * 3. Adjust padding, border-radius, font-size
 * 4. Add more variants jika diperlukan (e.g., 'ghost', 'link')
 * 5. Consider adding icon support:
 *    - leftIcon prop
 *    - rightIcon prop
 * 6. Add loading state jika diperlukan
 * 7. Test semua variants dan sizes
 */
