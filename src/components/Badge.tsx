import CountUp from 'react-countup'

type BadgeProps = {
    endCountNum: number;
    endCountText: string;
  };

const Badge : React.FC<BadgeProps> = ({endCountNum , endCountText}) => {

  return (
    <div>
        <div>
            <div>
                <CountUp end={endCountNum} delay={1} duration={4}/>
                {endCountText}
            </div>
        </div>
    </div>
  )
}

export default Badge