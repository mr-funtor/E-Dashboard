import {Line} from "react-chartjs-2";
// import {Chart as ChartJS, Legend} from 'chart.js/auto'

const LineChart=({chartData,configLine1,configLine2})=>{
    const data={
        labels:["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday","Sunday"],
        datasets:[
            {
                label:"N/A",
                data:["0","5000", "7000","8000", "6000", "4000","3000"],
                ...configLine1
            },
            {
                label:"N/A",
                data:["20000","80000", "70000","80000", "60000", "20000","22000"],
                ...configLine2,
            }
        ]
    }

    const chartOptions={
        plugins:{
            legend:{
                display: false,
            }
        },
        elements:{
            point:{
                pointStyle:false,
            }
        }
    }

    return<Line
        data={data}
        options={chartOptions}
    />
}

export default LineChart