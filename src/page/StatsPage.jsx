import { useEffect } from 'react';
import { WalletComponent, StatsComponent } from '../components/';
import { useUiStore } from '../hooks/';

export const StatsPage = () => {

    const { stats, wallet, loading, price, startLoadingData } = useUiStore();

    useEffect(() => { startLoadingData() }, []);
    
    if (loading) return <body className='loading'><div className="spinner-loader"></div></body>;
    

    return (
        <>
            <WalletComponent wallet={ wallet } />
            <StatsComponent stats={ stats } price={ price } />
        </>
        
    )
}
