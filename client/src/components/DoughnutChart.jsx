import {Doughnut} from "react-chartjs-2";
import {Chart as ChartJS, Legend} from 'chart.js/auto'

const DoughnutChart=({chartData,config})=>{
    const data={
        labels:["0:00", "9:0"],
        datasets:[
            {
                label:"N/A",
                data:["70","30"],
                ...config
            }
        ]
    }

    const chartOptions={
        plugins:{
            legend:{
                display: false
            }
        },
        elements:{
            arc:{
                borderWidth:0,
            }
        }
    }

    return<Doughnut
        data={data}
        options={chartOptions}
    />
}

export default DoughnutChart