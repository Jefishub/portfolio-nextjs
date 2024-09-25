import { TicTacToeCard, BailantaiCard, MokkiCard } from "./AppCard";

export default function Page() {
    return <div className="flex flex-row flex-wrap gap-8">
        <BailantaiCard />
        <TicTacToeCard />
        <MokkiCard />
    </div>
}