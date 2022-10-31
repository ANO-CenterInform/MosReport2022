import Counter from "./Couter";

type AppProps = {
    classes: string;
    year: number;
};

const ReportDate = ({ classes, year }: AppProps) => <div className={classes}><Counter min={1983} max={2022} speed={10} className={''} /></div>

export default ReportDate
