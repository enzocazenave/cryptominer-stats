export const translateStat = (stat) => {
    if (stat === 'balance') return 'Balance (No pagado)';
    else if (stat === 'paid') return 'Balance (Pagado)';
    else if (stat === 'reward24') return 'Últimas 24 horas (Recompensa)';
    else if (stat === 'currentHashrate') return 'Tasa de hash (Actual)';
    else if (stat === 'hashrate') return 'Tasa de hash (Promedio)';
    else if (stat === 'lastShare') return 'Última acción';

}
