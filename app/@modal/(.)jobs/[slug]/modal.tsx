'use client'
import { ReactElement, useEffect, useState } from 'react';
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
    const [isModalVisible, setIsModalVisible] = useState(true); // Manage modal visibility state

    useEffect(() => {
        // Delay modal opening to allow React's render cycle to complete
        const showModal = async () => {
            setTimeout(async () => {
                await MySwal.fire({
                    html: children, // Render the React component as modal content
                    confirmButtonText: "Close",
                    customClass: {
                        popup: "min-h-72 !bg-black !text-white flex flex-col flex-wrap !border-white !border-2"
                    },
                    backdrop: 'rgba(0, 0, 0, 0.8)',
                    scrollbarPadding: false,
                    didClose: () => {
                        setIsModalVisible(false); // Set state to hide the modal
                        router.back(); // Navigate back when modal closes
                    }
                });
            }, 0); // Ensure this happens after React renders
        };

        if (isModalVisible) {
            showModal();
        }

        // Close modal if the pathname changes
        if (!isModalVisible || pathname !== window.location.pathname) {
            MySwal.close(); // Close modal if route changes
        }

        return () => {
            // Cleanup by closing the modal if the component unmounts
            if (MySwal.isVisible()) {
                MySwal.close(); // Close the modal on unmount
            }
        };
    }, [children, pathname, isModalVisible, router]);

    return null; // The component doesn't render anything
}
