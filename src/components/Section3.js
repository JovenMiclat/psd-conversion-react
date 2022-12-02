import Chart from '../assets/imgs/chart.png'
import ChartTwo from '../assets/imgs/chart2.png'

const Section3 = () => {
    return (
        <div className="container-fluid adjust p-0">
            <div className="px-4 py-5 my-5 text-center">
                <h2 className="fw-bold">Stats Delivered Beautifully</h2>
                <div className="col-lg-12 mx-auto">
                    <p className="mb-4">View sales charts, booking ratio and user behavior using Oqulo’s visual reporting feature.</p>
                    <img id="Chart" src={Chart} className="img-fluid"/>
                    <img id="ChartTwo" src={ChartTwo} className="img-fluid"/>
                </div>
            </div>
        </div>
    )
}

export default Section3
