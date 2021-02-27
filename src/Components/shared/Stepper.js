import React from 'react';

const Stepper = (props) => {
  const { stepUp, stepDown, currentValue, stepperVariant } = props;

  return (
    <div className="stepper__container">
      <div name="stepper" className={`stepper stepper--${stepperVariant}`}>
        <i
          onClick={stepDown}
          className='fas fa-chevron-left'
          aria-hidden='true'
        ></i>
        <span className='stepper__value'>{currentValue}</span>
        <i
          onClick={stepUp}
          className='fas fa-chevron-right'
          aria-hidden='true'
        ></i>
      </div>
    </div>
  );
};

export default Stepper;
