import Vault from "./Vault"

const ids = ["asdas","xyz_1_2", "dasd_2_23", "asd_22" ]


const DashBanner2 = () => {
  return (
    <div className='flex mb-3 flex-row gap-x-2 justify-center items-center'>
        {ids.map((id) => (
          <Vault id={id}/>
        ) )}
    </div>
  )
}

export default DashBanner2