"use client"
import React, { useState } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1
  }
};

const CostCarousal = () => {
  const [stateCarousal, setStateCarousal] = useState({})
  return (
    <div className='p-20 container'>
      <Carousel
          /*
          swipeable={false}
          draggable={false}
          */
          responsive={responsive}
          ssr
          infinite={false}
          beforeChange={() => setStateCarousal({ isMoving: true })}
          afterChange={() => setStateCarousal({ isMoving: false })}
          containerClass="first-carousel-container container"
          // deviceType={this.props.deviceType}
        >
          <div className='w-full flex flex-col justify-between items-center'>
            <h2 className='font-semibold text-4xl mb-8 text-center'>Basic Services</h2>
                <table >
                    <tr className='ml-2 gap-3'>
              <th className='p-2'>Service</th>
              <th className='p-2'>Description</th>
              <th className='p-2'>Estimated Price (INR)</th>
                    </tr>
                    <tr className='ml-2 gap-3'>
              <td className='p-2'>Oil Change</td>
              <td className='p-2'>Replacement of engine oil and oil filter</td>
              <td className='p-2'>1,500 - 3,000</td>
                    </tr>
                    <tr className='ml-2 gap-3'>
              <td className='p-2'>Tire Rotation</td>
              <td className='p-2'>Rotating tires for even wear</td>
              <td className='p-2'>500 - 1,000</td>
                    </tr>
                    <tr className='ml-2 gap-3'>
              <td className='p-2'>Battery Replacement</td>
              <td className='p-2'>Replacing the vehicle battery</td>
              <td className='p-2'>3,000 - 7,000</td>
                    </tr>
                    <tr className='ml-2 gap-3'>
              <td className='p-2'>Brake Inspection</td>
              <td className='p-2'>Checking brake pads, rotors, and fluid</td>
              <td className='p-2'>500 - 1,500</td>
                    </tr>
                    <tr className='ml-2 gap-3'>
              <td className='p-2'>Air Filter Replacement</td>
              <td className='p-2'>Changing the engine air filter</td>
              <td className='p-2'>200 - 800</td>
                    </tr>
                    <tr className='ml-2 gap-3'>
              <td className='p-2'>Wiper Blade Replacement</td>
              <td className='p-2'>Replacing windshield wiper blades</td>
              <td className='p-2'>300 - 1,000</td>
                    </tr>
                </table>
          </div>

    <div className='w-full flex flex-col justify-between items-center'>
      <h2 className='font-semibold text-4xl mb-8 text-center'>Intermediate Services</h2>
      <table>
          <tr>
              <th className='p-2'>Service</th>
              <th className='p-2'>Description</th>
              <th className='p-2'>Estimated Price (INR)</th>
          </tr>
          <tr>
              <td className='p-2'>Wheel Alignment</td>
              <td className='p-2'>Adjusting the angles of the wheels</td>
              <td className='p-2'>800 - 2,000</td>
          </tr>
          <tr>
              <td className='p-2'>Coolant Flush</td>
              <td className='p-2'>Replacing the engine coolant</td>
              <td className='p-2'>1,500 - 3,000</td>
          </tr>
          <tr>
              <td className='p-2'>Transmission Service</td>
              <td className='p-2'>Checking and replacing transmission fluid</td>
              <td className='p-2'>2,000 - 5,000</td>
          </tr>
          <tr>
              <td className='p-2'>Brake Pad Replacement</td>
              <td className='p-2'>Replacing worn brake pads</td>
              <td className='p-2'>1,500 - 4,000</td>
          </tr>
          <tr>
              <td className='p-2'>Spark Plug Replacement</td>
              <td className='p-2'>Changing spark plugs</td>
              <td className='p-2'>800 - 3,000</td>
          </tr>
          <tr>
              <td className='p-2'>Timing Belt Replacement</td>
              <td className='p-2'>Replacing the timing belt</td>
              <td className='p-2'>5,000 - 15,000</td>
          </tr>
      </table>
    </div>

    <div className='w-full flex flex-col justify-between items-center'>
      <h2 className='font-semibold text-4xl mb-8 text-center'>Advanced Services</h2>
      <table>
          <tr>
              <th>Service</th>
              <th>Description</th>
              <th>Estimated Price (INR)</th>
          </tr>
          <tr>
              <td className='p-2'>Clutch Replacement</td>
              <td className='p-2'>Replacing the clutch assembly</td>
              <td className='p-2'>8,000 - 20,000</td>
          </tr>
          <tr>
              <td className='p-2'>Suspension Repair</td>
              <td className='p-2'>Repairing or replacing suspension components</td>
              <td className='p-2'>5,000 - 15,000</td>
          </tr>
          <tr>
              <td className='p-2'>Engine Overhaul</td>
              <td className='p-2'>Comprehensive engine repair</td>
              <td className='p-2'>20,000 - 50,000</td>
          </tr>
          <tr>
              <td className='p-2'>Air Conditioning Service</td>
              <td className='p-2'>Checking and refilling AC refrigerant</td>
              <td className='p-2'>1,500 - 4,000</td>
          </tr>
          <tr>
              <td className='p-2'>Exhaust System Repair</td>
              <td className='p-2'>Repairing or replacing exhaust system components</td>
              <td className='p-2'>3,000 - 10,000</td>
          </tr>
          <tr>
              <td className='p-2'>Electrical System Repair</td>
              <td className='p-2'>Diagnosing and fixing electrical issues</td>
              <td className='p-2'>1,000 - 10,000</td>
          </tr>
      </table>
    </div>
        </Carousel>
    </div>
  )
}

export default CostCarousal