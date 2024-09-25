import { BlueBadge } from "app/components/Badge";
import Link from "next/link";
import { GiTicTacToe } from "react-icons/gi";
import bailantai from 'public/img/bailant-logo.png'
import Image from "next/image";
import cottage from 'public/img/cottage-logo2.webp'

export function BasicCard({ children }: { children: React.ReactElement }) {
    return <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        {children}
    </div>
}

export const AppCard = (
    { title, Icon, description, keywords }:
        { title: string, Icon: JSX.Element, description: string, keywords: string[] }) => {
    return <BasicCard >
        <div className="flex flex-col items-center gap-4">
            <div className="text-5xl text-center">{title}</div>
            {Icon}
            <div className="text-xs">{description}</div>
            <div className="flex flex-row flex-wrap gap-2 mt-4 justify-center">
                {keywords.map((word) => <BlueBadge keyword={word} />)}
            </div>
        </div>
    </BasicCard>
}

export const TicTacToeCard = () => {
    const desc = `Try your luck against ChatGPT on the legendary TicTacToe game.
                This game illustrates a simple game mechanic in a react based Next.JS web application.
                The app is integrated into OpenAI API using Vercel AI SDK.`
    const Icon = <GiTicTacToe className="size-40" />
    const keywords = ['Next.JS', 'React', 'Typescript', 'OpenAI', 'ChatGPT', 'Vercel']
    return <Link href={"https://tictactoe.jeremanni.com/"}><AppCard title="TicTacToe vs. ChatGPT" description={desc} Icon={Icon} keywords={keywords} /></Link>
}

export const BailantaiCard = () => {
    const desc = `Bailantai is a big project that aims to be a dance search platform 
    and management system for all dancers and dance organizer. It's designed to be a replacement for Facebook (yes, big challenge) as the main event organizing tool. It is still under construction...`
    const Icon = <Image src={bailantai} alt="Bailantai logo" className="size-40" />
    const keywords = ['Next.JS', 'React', 'Typescript', 'SQL', 'Tailwind', 'Vercel', 'Clerk']
    return <Link href={"https://www.bailantai.app/"}><AppCard title="Bailantai.app" description={desc} Icon={Icon} keywords={keywords} /></Link>
}

export const MokkiCard = () => {
    const desc = `Mökkiappi is designed to be a simple cottage reservation system for our family. 
    There are over 10 families using same cottage and to this date all reservations have been handled by email. 
    This app aims to help maintain reservations and upkeeping such as calculating electricity/water consumptions`
    const Icon = <Image src={cottage} alt="Bailantai logo" className="size-40" />
    const keywords = ['Next.JS', 'React', 'Typescript', 'SQL', 'Tailwind', 'Vercel', 'Clerk']
    return <Link href={"https://mokkiapp.vercel.app/"}><AppCard title="Mökkiappi" description={desc} Icon={Icon} keywords={keywords} /></Link>
}