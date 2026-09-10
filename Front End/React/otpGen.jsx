const { useState, useEffect, useRef } = React;

export const OTPGenerator = () => {

  const [otp, setotp] = useState("")

  const [timer, setTimer] = useState(1)

  const [clicked, setClicked] = useState(false)

  useEffect(() => {

    let interval;

    if (clicked) {
        interval = setInterval(() => {
        setTimer(prev => prev > 0 ? prev - 1 : prev)
      }, 1000)
    }

    return () => {
      clearInterval(interval);
    }
  }, [clicked])

  useEffect(() => {
    if(timer === 0) {
      setClicked(false);
    }
  }, [timer])

  function handleClick() {
    setClicked(prev => !prev)
    setotp((Math.floor(Math.random() * 900000) + 100000).toString().padStart(6, "0"))
    setTimer(5);
  }

  return (
    <div className="container">
      <h1 id="otp-title">OTP Generator</h1>
      <h2 id="otp-display">{otp !== "" ? `${otp}` : "Click 'Generate OTP' to get a code"}</h2>
      <p id="otp-timer" aria-live="polite">{clicked ? `Expires in: ${timer} seconds` : timer === 0 && !clicked ? "OTP expired. Click the button to generate a new OTP." : ""}</p>
      <button id="generate-otp-button" onClick={handleClick} disabled={clicked ? true : false}>Generate OTP</button>
    </div>
  )
}