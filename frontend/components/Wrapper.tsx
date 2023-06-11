import React from 'react'

type Props = {
    children: any;
    className: string;
}

function Wrapper({ children, className }: Props) {
    return (
        <div className={`w-full max-w-[1280px] px-5 md:px-10 mx-auto ${className || ""}`}>
            {children}
        </div>
    )
}

export default Wrapper
