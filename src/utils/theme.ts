// Theme utility classes for consistent styling across components
export const themeClasses = {
  // Backgrounds
  section: {
    light: 'bg-white',
    dark: 'bg-gray-50 dark:bg-gray-800',
    primary: 'bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 dark:from-blue-800 dark:via-purple-800 dark:to-pink-700'
  },
  
  // Cards
  card: {
    default: 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg dark:shadow-2xl',
    hover: 'hover:shadow-xl dark:hover:shadow-3xl',
    glass: 'bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10'
  },
  
  // Text
  text: {
    primary: 'text-gray-900 dark:text-white',
    secondary: 'text-gray-600 dark:text-gray-300',
    muted: 'text-gray-500 dark:text-gray-400',
    accent: 'text-blue-600 dark:text-blue-400'
  },
  
  // Headings
  heading: {
    main: 'text-gray-800 dark:text-white',
    accent: 'text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text'
  },
  
  // Buttons
  button: {
    primary: 'bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white',
    secondary: 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600',
    ghost: 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
  },
  
  // Form elements
  input: {
    default: 'bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:ring-blue-500 focus:border-blue-500',
    placeholder: 'placeholder-gray-400 dark:placeholder-gray-500'
  },
  
  // Tags/Badges
  tag: {
    blue: 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300',
    green: 'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300',
    purple: 'bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300',
    gray: 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
  },
  
  // Icons
  icon: {
    primary: 'text-blue-600 dark:text-blue-400',
    secondary: 'text-gray-500 dark:text-gray-400',
    accent: 'text-purple-600 dark:text-purple-400'
  },
  
  // Borders
  border: {
    default: 'border-gray-200 dark:border-gray-700',
    light: 'border-gray-100 dark:border-gray-800',
    accent: 'border-blue-500 dark:border-blue-400'
  },
  
  // Dividers
  divider: 'bg-gray-200 dark:bg-gray-600'
};

// Helper function to combine theme classes
export const cn = (...classes: (string | undefined | false)[]): string => {
  return classes.filter(Boolean).join(' ');
};

// Theme transition classes
export const transitions = {
  default: 'transition-all duration-200 ease-in-out',
  slow: 'transition-all duration-300 ease-in-out',
  fast: 'transition-all duration-150 ease-in-out'
};
