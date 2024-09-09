'use client'
import { ReactElement } from 'react';
import SweetAlert2 from 'react-sweetalert2';
import { useRouter } from 'next/navigation';

export default function Modal({
    children
}: {
    children: ReactElement
}) {
    const router = useRouter()

    return <SweetAlert2 {...{
        show: true,
        confirmButtonText: "close",
        didClose: () => router.back(),
        customClass: {
            popup: "min-h-72 !bg-black !text-white flex flex-col flex-wrap !border-white !border-2"
        },
        backdrop: 'rgba(0, 0, 0, 0.8)',
        scrollbarPadding: false,
        
    }}>
        {children}
    </SweetAlert2>
}