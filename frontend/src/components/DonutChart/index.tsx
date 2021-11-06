import axios from 'axios';
import Chart from 'react-apexcharts';
import { saleSum } from 'types/sale';
import { BASE_URL } from 'utils/requests';

type ChartData = {
    labels : string[];
    series: number[];
};

export const DonutChart = () => {


    /// forma errada
    let chartData : ChartData = { labels: [], series : [] };

    /// forma errada
    axios.get(`${BASE_URL}/sales/amount-by-seller`)
        .then( response => {
            const data = response.data as saleSum[];
            const myLabels = data.map(x => x.sellerName);
            const mySeries = data.map(x => x.sum);

            chartData = { labels: myLabels, series: mySeries };

            console.log( chartData );
        } )
    
    const mockData = {
        series: [477138, 499928, 444867, 220426, 473088],
        labels: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
    }
    
    const options = {
        legend: {
            show: true
        }
    }
    
    
    return (
        <Chart 
            options={{ ...options, labels: mockData.labels }} 
            series={mockData.series}
            type="donut"
            height="240"
        />
    );
}