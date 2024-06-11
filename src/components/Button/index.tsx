type ButtonProps = {
  children: string;
  props: any;
};

export default function Button({ children, ...props }: ButtonProps) {
  return <button {...props}>{children}</button>;
}
