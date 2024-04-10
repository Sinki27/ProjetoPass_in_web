import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface IconButtonProps extends ComponentProps<'button'> {
    transparrent?: boolean
}
export function IconButton({ transparrent, ...props }: IconButtonProps) {
    return (
        <button 
        {...props} 
        className={twMerge(
            'border border-white/10 rounded-md p-1.5',
            transparrent ? 'bg-black/20' : 'bg-white/10',
            props.disabled ? 'opacity-50' : null,
        )}
        />
    )
}