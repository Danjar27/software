export const requiredFormat = (field: string) => {
  return `Es necesario ${field}`;
};

export const minLengthFormat = (field: string, length: number) => {
  return `${field} debe tener al menos ${length} caracteres`;
}

export const maxLengthFormat = (field: string, length: number) => {
  return `${field} debe tener como máximo ${length} caracteres`;
}