"use client"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ProgressBar = () => {
      return (
            <div className='flex justify-center p-10'>
                  <CircularProgressbar
                        styles={buildStyles({
                              pathColor: '#F59E0B',
                              trailColor: '#E1E1E1',
                              textColor: '#F59E0B',
                              textSize: 8
                        })}
                        text={`50% Gastado`}
                        value={50}
                  />
            </div>
      )
}

export default ProgressBar