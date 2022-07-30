
interface ButtonProps {
    color: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
}


export function Button(props: ButtonProps) {
  return (
    <button>Click me</button>
  );
}