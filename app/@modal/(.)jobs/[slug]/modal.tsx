'use client'
import { ReactElement, useEffect } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { usePathname, useRouter } from 'next/navigation';

const MySwal = withReactContent(Swal);

export default function Modal({
    children
}: {
    children: ReactElement
}) {
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        // Delay modal opening to allow React's render cycle to complete
        setTimeout(async () => {
            await MySwal.fire({
                html: children, // Render the React component as modal content
                confirmButtonText: "Close",
                customClass: {
                    popup: "min-h-72 !bg-black !text-white flex flex-col flex-wrap !border-white !border-2"
                },
                backdrop: 'rgba(0, 0, 0, 0.8)',
                scrollbarPadding: false
            }).then((result) => {
                if (result.isConfirmed || (result.isDismissed && result.dismiss === Swal.DismissReason.backdrop)) {
                    router.back()
                }
            });
        }, 0); // Ensure this happens after React renders

        return () => {
            // Cleanup by closing the modal if the component unmounts
            if (MySwal.isVisible()) {
                MySwal.close(); // Close the modal on unmount
            }
        };
    }, [children, pathname, router]);

    return null; // The component doesn't render anything
}
