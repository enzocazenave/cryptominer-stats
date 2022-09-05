export const WalletComponent = ({ wallet }) => {
    return (
        <div className="wallet-component">
            <h2 className="wallet-component__title">WALLET</h2>
            <p className="wallet-component__wallet">{wallet}</p>
        </div>
    )
}
