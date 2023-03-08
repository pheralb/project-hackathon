export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  disabled?: boolean;
}

// For react-hook-forms inputs :'
export const inputStyles =
  "focus:ring-primary-500 mt-2 mb-2 block w-full rounded-lg border border-neutral-800 bg-midnight py-2 px-3 text-white placeholder-neutral-400 focus:border-transparent focus:rounded focus:outline outline-neutral-600 outline-1";

const Input = (props: InputProps) => {
  return <input className={inputStyles} {...props} />;
};

export default Input;
