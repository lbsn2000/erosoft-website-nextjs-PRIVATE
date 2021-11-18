 const waveSVG = (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="rgba(209, 213, 219,1)" fillOpacity="1" d="M0,128L80,112C160,96,320,64,480,42.7C640,21,800,11,960,58.7C1120,107,1280,213,1360,266.7L1440,320L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
      </svg>
)

export default function WaveBackgroundSVG(){
      return(
            <div className={"absolute min-h-screen w-full invisible lg:visible"}>
                  {waveSVG}
            </div>   
      )
}
