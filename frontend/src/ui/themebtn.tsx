import styled from "styled-components";

const Switch = () => {
  return (
    <StyledWrapper>
      <label className="switch-button" htmlFor="switch">
        <div className="switch-outer">
          <input id="switch" type="checkbox" />
          <div className="button">
            <span className="button-toggle" />
            <span className="button-indicator" />
          </div>
        </div>
      </label>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .switch-button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px; /* Container height */
  }

  .switch-button .switch-outer {
    height: 20px; /* Adjusted height */
    width: 40px; /* Adjusted width */
    background: #252532;
    border-radius: 12px; /* Adjusted radius */
    box-shadow: inset 0px 5px 10px 0px #16151c, 0px 3px 6px -2px #403f4e;
    border: 1px solid #32303e;
    padding: 2px; /* Padding for inner elements */
    box-sizing: border-box;
    position: relative;
  }

  .switch-button .switch-outer input[type="checkbox"] {
    opacity: 0;
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .switch-button .switch-outer .button {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    position: relative;
  }

  .switch-button .switch-outer .button-toggle {
    height: 16px; /* Adjusted size */
    width: 16px; /* Adjusted size */
    background: linear-gradient(#3b3a4e, #272733);
    border-radius: 50%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: left 0.3s ease-in;
    left: 2px; /* Initial position */
  }

  .switch-button .switch-outer input[type="checkbox"]:checked + .button .button-toggle {
    left: calc(100% - 18px); /* Adjusted position */
  }

  .switch-button .switch-outer .button-indicator {
    height: 12px; /* Adjusted size */
    width: 12px; /* Adjusted size */
    border-radius: 50%;
    border: 2px solid #ef565f;
    position: absolute;
    right: 4px; /* Positioned within the switch */
    top: 50%;
    transform: translateY(-50%);
  }

  @keyframes indicator {
    30% {
      opacity: 0;
    }
    0% {
      opacity: 1;
    }
    100% {
      opacity: 1;
      border: 2px solid #60d480;
    }
  }

  .switch-button .switch-outer input[type="checkbox"]:checked + .button .button-indicator {
    animation: indicator 1s forwards;
  }
`;

export default Switch;
