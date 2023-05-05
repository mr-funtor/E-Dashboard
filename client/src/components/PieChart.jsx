import {Pie} from "react-chartjs-2";
import {Chart as ChartJS, Legend} from 'chart.js/auto'

const PieChart=({chartData,config})=>{
    const data={
        labels:["0:00", "9:0"],
        datasets:[
            {
                label:"N/A",
                data:["20","80"],
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

    return<Pie
        data={data}
        options={chartOptions}
    />
}

export default PieChart