
import PacmanLoader from "react-spinners/ClipLoader";
const Loder = () => {
    return (
        <div className="min-h-screen min-w-screen flex justify-center items-center">
            <PacmanLoader
        color= '#000000'
        loading={true}
        
        size={150}
        // aria-label="Loading Spinner"
        // data-testid="loader"
      />
        </div>
    );
};

export default Loder;