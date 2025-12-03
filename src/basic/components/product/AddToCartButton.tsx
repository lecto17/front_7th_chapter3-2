import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../../lib/utils";

const buttonVariants = cva(
  "w-full py-2 px-4 rounded-md font-medium transition-colors",
  {
    variants: {
      variant: {
        default: "bg-gray-900 text-white hover:bg-gray-800",
        disabled: "bg-gray-100 text-gray-400 cursor-not-allowed",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface AddToCartButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isSoldOut: boolean;
}

export default function AddToCartButton({
  onClick,
  isSoldOut,
  className,
  ...props
}: AddToCartButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={isSoldOut}
      className={cn(
        buttonVariants({ variant: isSoldOut ? "disabled" : "default" }),
        className
      )}
      {...props}
    >
      {isSoldOut ? "품절" : "장바구니 담기"}
    </button>
  );
}
