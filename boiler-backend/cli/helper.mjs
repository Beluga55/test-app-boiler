//kebab to title case
export function kebabToTitleCase(str) {
  return str.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

//kebab to camel
export function kebabToCamel(str) {
  return str.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
}

//pluralize word 
export function pluralize(word) {
  return word + 's';
}

