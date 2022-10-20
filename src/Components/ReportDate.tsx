type AppProps = {
    classes: string;
    year: number;
};

const ReportDate = ({ classes, year }: AppProps) => <div className={classes}>{year}</div>

export default ReportDate
