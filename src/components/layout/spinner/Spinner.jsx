import img from "./spinner.svg"

const Spinner = () => {
   return (
      <img src={img}
      alt="loading"
      style={{ display: 'block', width: "250px", height: "250px", objectFit: 'contain', margin: "0 auto" }}
      />
   )
}

export default Spinner;