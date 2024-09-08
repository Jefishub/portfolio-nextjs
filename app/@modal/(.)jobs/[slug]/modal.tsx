'use client'
import { ReactElement } from 'react';
import SweetAlert2 from 'react-sweetalert2';

export default function Modal({
    children
}: {
    children: ReactElement
}) {

    return <SweetAlert2 {...{
        show: true
    }}>
        {children}
    </SweetAlert2>
}