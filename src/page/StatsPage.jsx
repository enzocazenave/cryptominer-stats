import { useEffect } from 'react';
import { WalletComponent, StatsComponent } from '../components/';
import { useUiStore } from '../hooks/';

export const StatsPage = () => {

    const { stats, wallet, loading, startLoadingData } = useUiStore();

    useEffect(() => { startLoadingData() }, []);
    
    if (loading) return <div className="spinner-loader"></div>;

    return (
        <StatsComponent stats={ stats } />
    )
}
